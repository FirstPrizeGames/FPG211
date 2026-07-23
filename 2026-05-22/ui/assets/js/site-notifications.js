// Signed-in update alerts. News data and read state stay in this browser.

const SITE_NEWS_STORAGE_KEY = "profile-site-news-read-v1";
const excludedNewsRoutes = new Set(["/404", "/500", "/offline", "/maintenance", "/coming-soon"]);

const siteNewsItems = [
  {
    id: "new-roblox-experience-2026-07-20",
    date: "2026-07-20",
    categoryKey: "siteNews.categoryGame",
    titleKey: "siteNews.robloxTitle",
    bodyKey: "siteNews.robloxBody",
    href: "/Creator/newrobloxexperience",
  },
  {
    id: "baldi-mods-2026-07-20",
    date: "2026-07-20",
    categoryKey: "siteNews.categoryMod",
    titleKey: "siteNews.baldiTitle",
    bodyKey: "siteNews.baldiBody",
    href: "/Creator/baldimods",
  },
  {
    id: "community-2026-07-19",
    date: "2026-07-19",
    categoryKey: "siteNews.categoryNews",
    titleKey: "siteNews.communityTitle",
    bodyKey: "siteNews.communityBody",
    href: "/community",
  },
];

const bellIcon = `
  <svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24">
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
    <path d="M10 21h4" />
  </svg>
`;

const closeIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M6 6 18 18" />
    <path d="M18 6 6 18" />
  </svg>
`;

const translateNews = (key) => window.profileI18n?.translate?.(key) || key;
const currentNewsLanguage = () => window.profileI18n?.getLanguage?.() || document.documentElement.lang || "ko";
const isSignedInForNews = () =>
  document.documentElement.dataset.authState === "signed-in" && Boolean(window.profileAuthUser);

const readStoredNewsIds = () => {
  try {
    const value = JSON.parse(localStorage.getItem(SITE_NEWS_STORAGE_KEY) || "[]");
    return new Set(Array.isArray(value) ? value.filter((id) => typeof id === "string") : []);
  } catch {
    return new Set();
  }
};

let readNewsIds = readStoredNewsIds();
let newsDialog = null;
let newsList = null;
let newsStatus = null;
let newsLastFocusedElement = null;

const saveReadNewsIds = () => {
  try {
    localStorage.setItem(SITE_NEWS_STORAGE_KEY, JSON.stringify([...readNewsIds]));
  } catch {
    // The alert center remains usable when browser storage is unavailable.
  }
};

const unreadNewsItems = () => siteNewsItems.filter((item) => !readNewsIds.has(item.id));

const formatNewsDate = (date) => {
  const language = currentNewsLanguage() === "ko" ? "ko-KR" : "en-US";
  const parsedDate = new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat(language, { year: "numeric", month: "short", day: "numeric" }).format(parsedDate);
};

const createUnreadBadge = (location) => {
  const badge = document.createElement("span");
  badge.className = `site-news-badge site-news-badge-${location}`;
  badge.dataset.siteNewsBadge = "";
  badge.setAttribute("aria-hidden", "true");
  badge.hidden = true;
  return badge;
};

const ensureNewsControls = () => {
  document.querySelectorAll(".sidebar-account-panel").forEach((panel) => {
    if (panel.querySelector("[data-site-news-open]")) return;
    const button = document.createElement("button");
    button.className = "sidebar-account-item is-auth-required site-news-account-button";
    button.type = "button";
    button.dataset.siteNewsOpen = "";
    button.hidden = true;
    button.setAttribute("aria-hidden", "true");
    button.innerHTML = `${bellIcon}<span data-site-news-open-label></span>${createUnreadBadge("menu").outerHTML}`;
    const settingsItem = panel.querySelector('a[href="/settings"]');
    panel.insertBefore(button, settingsItem || panel.firstChild);
  });

  document.querySelectorAll("[data-sidebar-account-trigger]").forEach((trigger) => {
    if (!trigger.querySelector("[data-site-news-badge]")) trigger.append(createUnreadBadge("account"));
  });

  const scrollActions = document.querySelector("[data-scroll-actions]");
  if (scrollActions && !scrollActions.querySelector("[data-site-news-open]")) {
    const button = document.createElement("button");
    button.className = "site-news-floating-button";
    button.type = "button";
    button.dataset.siteNewsOpen = "";
    button.hidden = true;
    button.setAttribute("aria-hidden", "true");
    button.innerHTML = `${bellIcon}${createUnreadBadge("floating").outerHTML}`;
    scrollActions.append(button);
  }
};

const createNewsDialog = () => {
  if (document.querySelector("[data-site-news-dialog]")) {
    newsDialog = document.querySelector("[data-site-news-dialog]");
    newsList = newsDialog.querySelector("[data-site-news-list]");
    newsStatus = newsDialog.querySelector("[data-site-news-status]");
    return;
  }

  newsDialog = document.createElement("div");
  newsDialog.className = "cache-dialog site-news-dialog";
  newsDialog.dataset.siteNewsDialog = "";
  newsDialog.hidden = true;
  newsDialog.innerHTML = `
    <section class="cache-dialog-panel site-news-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="site-news-title">
      <button class="dialog-close-button" type="button" data-site-news-close data-i18n-aria-label="siteNews.close">
        ${closeIcon}
      </button>
      <p class="eyebrow" data-i18n="siteNews.eyebrow"></p>
      <h2 id="site-news-title" data-i18n="siteNews.title"></h2>
      <p data-i18n="siteNews.body"></p>
      <div class="site-news-list" data-site-news-list></div>
      <p class="site-news-status" data-site-news-status role="status" aria-live="polite"></p>
      <div class="site-news-actions">
        <a class="button" href="/updates" data-i18n="siteNews.viewAll"></a>
        <button class="cache-confirm-button" type="button" data-site-news-read-all data-i18n="siteNews.markAll"></button>
      </div>
    </section>
  `;
  document.body.append(newsDialog);
  newsList = newsDialog.querySelector("[data-site-news-list]");
  newsStatus = newsDialog.querySelector("[data-site-news-status]");
};

const renderNewsList = () => {
  if (!newsList) return;
  newsList.replaceChildren();

  siteNewsItems.forEach((item) => {
    const isRead = readNewsIds.has(item.id);
    const link = document.createElement("a");
    link.className = "site-news-item";
    link.classList.toggle("is-read", isRead);
    link.href = item.href;
    link.dataset.siteNewsId = item.id;
    link.innerHTML = `
      <span class="site-news-item-meta">
        <span class="site-news-category">${translateNews(item.categoryKey)}</span>
        <time datetime="${item.date}">${formatNewsDate(item.date)}</time>
        <span class="site-news-read-state">${translateNews(isRead ? "siteNews.read" : "siteNews.unread")}</span>
      </span>
      <strong>${translateNews(item.titleKey)}</strong>
      <span class="site-news-item-body">${translateNews(item.bodyKey)}</span>
    `;
    newsList.append(link);
  });

  if (newsStatus) {
    const count = unreadNewsItems().length;
    newsStatus.textContent = count
      ? translateNews("siteNews.unreadCount").replace("{count}", String(count))
      : translateNews("siteNews.allRead");
  }
};

const renderNewsTranslations = () => {
  newsDialog?.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translateNews(element.dataset.i18n);
  });
  newsDialog?.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translateNews(element.dataset.i18nAriaLabel));
  });
};

const syncNewsUI = () => {
  ensureNewsControls();
  const signedIn = isSignedInForNews();
  const unreadCount = unreadNewsItems().length;

  document.querySelectorAll("[data-site-news-open]").forEach((button) => {
    button.hidden = !signedIn;
    button.setAttribute("aria-hidden", String(!signedIn));
    button.setAttribute(
      "aria-label",
      unreadCount
        ? `${translateNews("siteNews.open")}: ${translateNews("siteNews.unreadCount").replace("{count}", String(unreadCount))}`
        : translateNews("siteNews.open"),
    );
  });

  document.querySelectorAll("[data-site-news-open-label]").forEach((label) => {
    label.textContent = translateNews("siteNews.open");
  });

  document.querySelectorAll("[data-site-news-badge]").forEach((badge) => {
    badge.textContent = unreadCount > 9 ? "9+" : String(unreadCount);
    badge.hidden = !signedIn || unreadCount === 0;
  });

  const scrollActions = document.querySelector("[data-scroll-actions]");
  scrollActions?.classList.toggle("has-site-news", signedIn);
  if (signedIn) scrollActions?.classList.add("is-visible");
  if (!signedIn) closeNewsDialog(false);
  renderNewsTranslations();
  renderNewsList();
};

const openNewsDialog = (trigger) => {
  if (!isSignedInForNews() || !newsDialog) return;
  newsLastFocusedElement = trigger instanceof HTMLElement ? trigger : document.activeElement;
  document.querySelectorAll(".sidebar-account.is-open").forEach((account) => {
    account.classList.remove("is-open");
    const accountTrigger = account.querySelector("[data-sidebar-account-trigger]");
    const accountPanel = account.querySelector(".sidebar-account-panel");
    accountTrigger?.setAttribute("aria-expanded", "false");
    if (accountPanel) accountPanel.hidden = true;
  });
  renderNewsList();
  newsDialog.classList.remove("is-closing");
  newsDialog.hidden = false;
  newsDialog.querySelector("[data-site-news-close]")?.focus();
};

const closeNewsDialog = (restoreFocus = true) => {
  if (!newsDialog || newsDialog.hidden) return;
  newsDialog.classList.add("is-closing");
  window.setTimeout(() => {
    newsDialog.hidden = true;
    newsDialog.classList.remove("is-closing");
    if (restoreFocus && newsLastFocusedElement instanceof HTMLElement) newsLastFocusedElement.focus();
  }, 160);
};

const markNewsRead = (id) => {
  if (!siteNewsItems.some((item) => item.id === id)) return;
  readNewsIds.add(id);
  saveReadNewsIds();
  syncNewsUI();
};

const markAllNewsRead = () => {
  siteNewsItems.forEach((item) => readNewsIds.add(item.id));
  saveReadNewsIds();
  syncNewsUI();
};

const normalizedNewsPath = window.location.pathname.replace(/\/$/, "") || "/";
if (!excludedNewsRoutes.has(normalizedNewsPath) && !document.body.classList.contains("error-body")) {
  createNewsDialog();
  ensureNewsControls();
  syncNewsUI();

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const openButton = target.closest("[data-site-news-open]");
    if (openButton) {
      event.preventDefault();
      openNewsDialog(openButton);
      return;
    }

    if (target.closest("[data-site-news-close]")) {
      closeNewsDialog();
      return;
    }

    if (target.closest("[data-site-news-read-all]")) {
      markAllNewsRead();
      return;
    }

    const newsLink = target.closest("[data-site-news-id]");
    if (newsLink) markNewsRead(newsLink.dataset.siteNewsId);

    if (target === newsDialog) closeNewsDialog();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !newsDialog?.hidden) closeNewsDialog();
  });

  window.addEventListener("profile-auth-change", syncNewsUI);
  window.addEventListener("profile-language-change", syncNewsUI);
}
