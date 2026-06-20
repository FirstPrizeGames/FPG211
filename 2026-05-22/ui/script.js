const navIconMarkup = {
  search:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>',
  home:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>',
  creator:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 14 9 5 9-5" /><path d="m3 11 9 5 9-5" /></svg>',
  bio:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>',
  about:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>',
  faq:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 1 1 5.8 1c-.5.9-1.4 1.3-2.1 1.9-.6.5-.8.9-.8 2.1" /><path d="M12 17h.01" /></svg>',
  pricing:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h4" /></svg>',
  share:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.8 6.8-4.1" /><path d="m8.6 13.2 6.8 4.1" /></svg>',
  settings:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 1 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1A1.7 1.7 0 0 0 20.9 10h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></svg>',
  support:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6l-7-3Z" /><path d="M9.8 12.2 11.4 14l3.2-4" /></svg>',
  analytics:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 20V10" /><path d="M10 20V6" /><path d="M16 20v-8" /><path d="M22 20H2" /></svg>',
  updates:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5h10" /><path d="M4 12h16" /><path d="M4 19h10" /><path d="m17 4 3 3-3 3" /></svg>',
  activity:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 15l3-4 3 2 4-6" /><circle cx="8" cy="15" r="1" /><circle cx="11" cy="11" r="1" /><circle cx="14" cy="13" r="1" /><circle cx="18" cy="7" r="1" /></svg>',
  terms:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z" /><path d="M15 3v4h4" /><path d="M9 11h6" /><path d="M9 15h6" /><path d="M9 19h4" /></svg>',
  accessibility:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2" /><path d="M5 8h14" /><path d="M12 8v13" /><path d="M8 21l4-8 4 8" /></svg>',
  privacy:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></svg>',
  license:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7z" /><path d="M14 3v6h5" /><path d="M9 14h6" /><path d="M9 18h4" /><path d="M5 7v14" /></svg>',
  trust:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6l-7-3Z" /><path d="M8.5 12.5 11 15l4.5-5" /></svg>',
  status:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 13h4l3-7 4 13 3-6h2" /><path d="M4 20h16" /></svg>',
  security:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v2" /></svg>',
};

const createPageLoader = () => {
  if (document.querySelector("[data-page-loader]")) {
    return document.querySelector("[data-page-loader]");
  }

  const loader = document.createElement("div");
  loader.className = "page-loader";
  loader.dataset.pageLoader = "";
  loader.setAttribute("role", "status");
  loader.setAttribute("aria-live", "polite");
  loader.innerHTML = `
    <div class="page-loader-panel">
      <span class="page-loader-spinner" aria-hidden="true"></span>
      <span class="sr-only">Loading page</span>
    </div>
  `;
  document.body.append(loader);
  return loader;
};

const pageLoader = createPageLoader();

const normalizeNavPath = (path) => {
  const normalized = path.replace(/\/index\.html$/i, "").replace(/\/+$/, "");
  return normalized || "/";
};

const createNavAnchor = ({ href, icon, labelKey, fallback }) => {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.innerHTML = `${icon}<span data-i18n="${labelKey}">${fallback}</span>`;
  if (normalizeNavPath(window.location.pathname) === normalizeNavPath(href)) {
    anchor.classList.add("is-active");
  }
  return anchor;
};

const createNavSearchButton = () => {
  const button = document.createElement("button");
  button.className = "nav-search-button";
  button.type = "button";
  button.dataset.siteSearchOpen = "";
  button.innerHTML = `${navIconMarkup.search}<span data-i18n="nav.search">Search</span><kbd>Ctrl+K</kbd>`;
  return button;
};

const createMobileQuickActionButton = ({ type = "button", href, action, icon, labelKey, fallback }) => {
  const element = document.createElement(href ? "a" : "button");
  element.className = "mobile-quick-action";
  element.dataset.i18nAriaLabel = labelKey;
  element.setAttribute("aria-label", translate(labelKey));
  if (href) {
    element.href = href;
    if (normalizeNavPath(window.location.pathname) === normalizeNavPath(href)) {
      element.classList.add("is-active");
      element.setAttribute("aria-current", "page");
    }
  } else {
    element.type = type;
    if (action) element.dataset.mobileQuickAction = action;
  }
  element.innerHTML = `${icon}<span class="sr-only" data-i18n="${labelKey}">${fallback}</span>`;
  return element;
};

const createMobileQuickActions = () => {
  if (document.querySelector("[data-mobile-quick-actions]")) return;

  const bar = document.createElement("nav");
  bar.className = "mobile-quick-actions";
  bar.dataset.mobileQuickActions = "";
  bar.setAttribute("aria-label", translate("quickActions.label"));
  bar.innerHTML = '<div class="mobile-quick-actions-inner"></div>';

  const inner = bar.querySelector(".mobile-quick-actions-inner");
  [
    {
      href: "/",
      icon: navIconMarkup.home,
      labelKey: "quickActions.home",
      fallback: "Home",
    },
    {
      action: "search",
      icon: navIconMarkup.search,
      labelKey: "quickActions.search",
      fallback: "Search",
    },
    {
      action: "share",
      icon: navIconMarkup.share,
      labelKey: "quickActions.share",
      fallback: "Share",
    },
    {
      action: "quick-settings",
      icon: navIconMarkup.settings,
      labelKey: "quickActions.settings",
      fallback: "Settings",
    },
  ].forEach((item) => inner.append(createMobileQuickActionButton(item)));

  document.body.append(bar);
};

const enhanceSidebarNavigation = () => {
  const navGroups = [
    {
      label: "MAIN",
      labelKey: "nav.groupMain",
      items: [
        { type: "search" },
        { href: "/", icon: navIconMarkup.home, labelKey: "nav.home", fallback: "Home" },
        { href: "/updates", icon: navIconMarkup.updates, labelKey: "nav.updates", fallback: "Latest updates" },
        { href: "/activity", icon: navIconMarkup.activity, labelKey: "nav.activity", fallback: "Activity" },
        { href: "/Creator", icon: navIconMarkup.creator, labelKey: "nav.creator", fallback: "Creator" },
        { href: "/Bio", icon: navIconMarkup.bio, labelKey: "nav.bio", fallback: "Bio" },
        { href: "/about", icon: navIconMarkup.about, labelKey: "nav.aboutUs", fallback: "About us" },
        { href: "/FAQ", icon: navIconMarkup.faq, labelKey: "nav.faq", fallback: "FAQ" },
      ],
    },
    {
      label: "MANAGE",
      labelKey: "nav.groupManage",
      items: [
        { href: "/Pricing", icon: navIconMarkup.pricing, labelKey: "nav.pricing", fallback: "Pricing" },
        { href: "/feedback", icon: navIconMarkup.support, labelKey: "nav.support", fallback: "Support", className: "nav-support-link" },
        { href: "/usage", icon: navIconMarkup.analytics, labelKey: "nav.analytics", fallback: "Analytics" },
      ],
    },
    {
      label: "TRUST",
      labelKey: "nav.groupTrust",
      items: [
        { href: "/accessibility", icon: navIconMarkup.accessibility, labelKey: "nav.accessibility", fallback: "Accessibility" },
        { href: "/trust", icon: navIconMarkup.trust, labelKey: "nav.trust", fallback: "Trust Center" },
        { href: "/status", icon: navIconMarkup.status, labelKey: "nav.status", fallback: "Status" },
        { href: "/security", icon: navIconMarkup.security, labelKey: "nav.security", fallback: "Security" },
        { href: "/privacy", icon: navIconMarkup.privacy, labelKey: "nav.privacy", fallback: "Privacy Policy" },
        { href: "/license", icon: navIconMarkup.license, labelKey: "nav.license", fallback: "License" },
        { href: "/terms", icon: navIconMarkup.terms, labelKey: "nav.terms", fallback: "Terms" },
      ],
    },
    {
      label: "UTILITY",
      labelKey: "nav.groupUtility",
      items: [
        { href: "/settings", icon: navIconMarkup.settings, labelKey: "nav.settings", fallback: "Settings", quickSettings: true },
      ],
    },
  ];

  document.querySelectorAll(".nav-links").forEach((nav) => {
    nav.replaceChildren();

    navGroups.forEach((group, index) => {
      const groupElement = document.createElement("div");
      groupElement.className = "nav-menu-group";
      groupElement.dataset.navMenuGroup = group.label.toLowerCase();
      const triggerId = `nav-group-${group.label.toLowerCase()}-${index}`;

      const trigger = document.createElement("button");
      trigger.className = "nav-group-trigger";
      trigger.type = "button";
      trigger.id = triggerId;
      trigger.setAttribute("aria-expanded", "false");
      trigger.innerHTML = `<span data-i18n="${group.labelKey}">${group.label}</span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>`;

      const menu = document.createElement("div");
      menu.className = "nav-group-menu";
      menu.setAttribute("aria-labelledby", triggerId);

      const sectionLabel = document.createElement("span");
      sectionLabel.className = "nav-section-label";
      sectionLabel.textContent = group.label;
      sectionLabel.dataset.i18n = group.labelKey;
      sectionLabel.setAttribute("aria-hidden", "true");
      menu.append(sectionLabel);

      group.items.forEach((item) => {
        if (item.type === "search") {
          menu.append(createNavSearchButton());
          return;
        }

        const anchor = createNavAnchor(item);
        if (item.quickSettings) anchor.dataset.quickSettingsOpen = "";
        if (item.className) anchor.classList.add(item.className);
        menu.append(anchor);
      });

      if (menu.querySelector(".is-active")) groupElement.classList.add("has-active-item");
      groupElement.append(trigger, menu);
      nav.append(groupElement);
    });
  });
};

enhanceSidebarNavigation();

const createStandardFooter = () => {
  if (document.querySelector("[data-site-footer]")) return;

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.dataset.siteFooter = "";
  footer.innerHTML = `
    <div class="site-footer-brand">
      <strong data-i18n="footer.brand">Emergency Responder Profile</strong>
      <span data-i18n="footer.tagline">Trust, status, privacy, and support links in one place.</span>
    </div>
    <nav class="site-footer-links" aria-label="Footer links" data-i18n-aria-label="aria.footerLinks">
      <a href="/trust" data-i18n="nav.trust">Trust Center</a>
      <a href="/status" data-i18n="nav.status">Status</a>
      <a href="/security" data-i18n="nav.security">Security</a>
      <a href="/privacy" data-i18n="nav.privacy">Privacy Policy</a>
      <a href="/terms" data-i18n="nav.terms">Terms</a>
      <a href="/accessibility" data-i18n="nav.accessibility">Accessibility</a>
      <a href="/sitemap" data-i18n="nav.sitemap">Sitemap</a>
    </nav>
  `;

  document.body.append(footer);
};

createStandardFooter();

document.addEventListener("click", (event) => {
  const trigger = event.target.closest?.(".nav-group-trigger");
  if (event.target.closest?.(".nav-group-menu")) return;
  document.querySelectorAll(".nav-menu-group.is-open").forEach((group) => {
    if (!trigger || group !== trigger.closest(".nav-menu-group")) {
      group.classList.remove("is-open");
      group.querySelector(".nav-group-trigger")?.setAttribute("aria-expanded", "false");
    }
  });

  if (!trigger) return;
  const group = trigger.closest(".nav-menu-group");
  const isOpen = group.classList.toggle("is-open");
  trigger.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".nav-menu-group.is-open").forEach((group) => {
    group.classList.remove("is-open");
    group.querySelector(".nav-group-trigger")?.setAttribute("aria-expanded", "false");
  });
});

const createContextMenuFallback = () => {
  const menu = document.createElement("div");
  menu.className = "context-menu";
  menu.dataset.contextMenu = "";
  menu.hidden = true;
  menu.innerHTML = `
    <button type="button" data-context-action="close">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      <span data-i18n="context.close">닫기</span><kbd class="context-shortcut">Esc</kbd>
    </button>
    <div class="context-menu-separator" role="separator" aria-hidden="true"></div>
    <button type="button" data-context-action="open-link" hidden>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7" /><path d="M8 7h9v9" /><path d="M5 5h6" /><path d="M5 5v14h14v-6" /></svg>
      <span data-i18n="context.openLink">새 탭에서 링크 열기</span>
    </button>
    <button type="button" data-context-action="copy-link" hidden>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" /></svg>
      <span data-i18n="context.copyLink">링크 주소 복사</span>
    </button>
    <button type="button" data-context-action="save-image" disabled aria-disabled="true">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>
      <span data-i18n="context.saveImage">이미지 저장</span>
    </button>
    <button type="button" data-context-action="copy-selection" hidden>
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 7h8" /><path d="M8 12h8" /><path d="M8 17h5" /><rect x="4" y="3" width="16" height="18" rx="2" /></svg>
      <span data-i18n="context.copySelection">선택한 텍스트 복사</span><kbd class="context-shortcut">Ctrl+C</kbd>
    </button>
    <button type="button" data-context-action="paste" disabled aria-disabled="true">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 4h6" /><path d="M10 2h4v4h-4z" /><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" /><path d="M9 14h6" /><path d="M12 11v6" /></svg>
      <span data-i18n="context.paste">붙여넣기</span><kbd class="context-shortcut">Ctrl+V</kbd>
    </button>
    <div class="context-menu-separator" role="separator" aria-hidden="true"></div>
    <button type="button" data-context-action="copy">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" /></svg>
      <span data-i18n="context.copy">페이지 링크 복사</span><kbd class="context-shortcut">Ctrl+Shift+C</kbd>
    </button>
    <button type="button" data-context-action="copy-title">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7V5h16v2" /><path d="M9 20h6" /><path d="M12 5v15" /></svg>
      <span data-i18n="context.copyTitle">페이지 제목 복사</span>
    </button>
    <button type="button" data-context-action="share">
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.6 6.8-4.2" /><path d="m8.6 13.4 6.8 4.2" /></svg>
      <span data-i18n="context.share">공유 열기</span><kbd class="context-shortcut">Ctrl+Shift+S</kbd>
    </button>
    <button type="button" data-context-action="qr">
      <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3" /><path d="M21 14v7h-7" /><path d="M17 17h4" /></svg>
      <span data-i18n="context.qr">QR 코드 만들기</span><kbd class="context-shortcut">Ctrl+Shift+Q</kbd>
    </button>
    <div class="context-menu-separator" role="separator" aria-hidden="true"></div>
    <button type="button" data-context-action="search">
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></svg>
      <span data-i18n="context.search">사이트 검색</span><kbd class="context-shortcut">Ctrl+K</kbd>
    </button>
    <button type="button" data-context-action="print">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 9V3h12v6" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 14h12v7H6z" /><path d="M18 12h.01" /></svg>
      <span data-i18n="context.print">인쇄</span><kbd class="context-shortcut">Ctrl+P</kbd>
    </button>
    <button type="button" data-context-action="source">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></svg>
      <span data-i18n="context.source">페이지 소스 보기</span><kbd class="context-shortcut">Ctrl+U</kbd>
    </button>
    <div class="context-menu-separator" role="separator" aria-hidden="true"></div>
    <button type="button" data-context-action="back">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></svg>
      <span data-i18n="context.back">뒤로 가기</span><kbd class="context-shortcut">Alt+Left</kbd>
    </button>
    <button type="button" data-context-action="forward">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
      <span data-i18n="context.forward">앞으로 가기</span><kbd class="context-shortcut">Alt+Right</kbd>
    </button>
    <button type="button" data-context-action="refresh">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-15.3 6.4" /><path d="M3 12A9 9 0 0 1 18.3 5.6" /><path d="M18 2v4h4" /><path d="M6 22v-4H2" /></svg>
      <span data-i18n="context.refresh">새로고침</span><kbd class="context-shortcut">Ctrl+R</kbd>
    </button>
    <button type="button" data-context-action="top">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5 5 12" /><path d="m12 5 7 7" /><path d="M12 6v13" /></svg>
      <span data-i18n="context.top">맨 위로 이동</span><kbd class="context-shortcut">Home</kbd>
    </button>
    <div class="context-menu-separator" role="separator" aria-hidden="true"></div>
    <button type="button" data-context-action="creator">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 14 9 5 9-5" /><path d="m3 11 9 5 9-5" /></svg>
      <span data-i18n="context.creator">Creator 열기</span>
    </button>
    <button type="button" data-context-action="feedback">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8" /><path d="M8 13h5" /></svg>
      <span data-i18n="context.feedback">Feedback 열기</span>
    </button>
    <button type="button" data-context-action="settings">
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 1 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3h.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1A1.7 1.7 0 0 0 20.9 10h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></svg>
      <span data-i18n="context.settings">설정 열기</span>
    </button>`;
  document.body.append(menu);
  return menu;
};

const enhanceContextMenuActions = (menu) => {
  if (!menu) return menu;

  if (!menu.querySelector('[data-context-action="cut"]')) {
    const copySelectionButton = menu.querySelector('[data-context-action="copy-selection"]');
    copySelectionButton?.insertAdjacentHTML(
      "afterend",
      `
      <button type="button" data-context-action="cut" hidden>
        <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.1 15.9" /><path d="M14.5 14.5 20 20" /></svg>
        <span data-i18n="context.cut">잘라내기</span><kbd class="context-shortcut">Ctrl+X</kbd>
      </button>
    `,
    );
  }

  if (!menu.querySelector('[data-context-action="select-all"]')) {
    const copySelectionButton = menu.querySelector('[data-context-action="copy-selection"]');
    copySelectionButton?.insertAdjacentHTML(
      "beforebegin",
      `
      <button type="button" data-context-action="select-all">
        <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8" /><path d="M8 13h8" /><path d="M8 17h5" /></svg>
        <span data-i18n="context.selectAll">모두 선택</span><kbd class="context-shortcut">Ctrl+A</kbd>
      </button>
    `,
    );
  }

  if (!menu.querySelector('[data-context-action="cast"]')) {
    const qrButton = menu.querySelector('[data-context-action="qr"]');
    qrButton?.insertAdjacentHTML(
      "afterend",
      `
      <button type="button" data-context-action="cast" disabled aria-disabled="true">
        <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M5 16.5a3.5 3.5 0 0 1 3.5 3.5" /><path d="M5 13a7 7 0 0 1 7 7" /><path d="M5 19.5v.5" /></svg>
        <span data-i18n="context.cast">Cast</span>
      </button>
    `,
    );
  }

  if (!menu.querySelector('[data-context-action="clipboard"]')) {
    const copyTitleButton = menu.querySelector('[data-context-action="copy-title"]');
    copyTitleButton?.insertAdjacentHTML(
      "afterend",
      `
      <button type="button" data-context-action="clipboard">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 4h6" /><path d="M10 2h4v4h-4z" /><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" /><path d="M8 13h8" /><path d="M8 17h5" /></svg>
        <span data-i18n="context.clipboard">Clipboard Center</span>
      </button>
    `,
    );
  }

  if (!menu.querySelector('[data-context-action="text-copy"]')) {
    const copyButton = menu.querySelector('[data-context-action="copy"]');
    copyButton?.insertAdjacentHTML(
      "afterend",
      `
      <button type="button" data-context-action="text-copy">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 4h14" /><path d="M7 8h10" /><path d="M7 12h10" /><path d="M7 16h7" /><path d="M5 20h9" /></svg>
        <span data-i18n="context.textCopy">Text copy</span>
      </button>
    `,
    );
  }

  const sortLabels = {
    back: "Back",
    cast: "Cast",
    clipboard: "Clipboard Center",
    close: "Close",
    "copy-link": "Copy link address",
    copy: "Copy page link",
    "copy-title": "Copy page title",
    "copy-selection": "Copy selected text",
    creator: "Creator",
    cut: "Cut",
    feedback: "Feedback",
    forward: "Forward",
    "open-link": "Open link in new tab",
    paste: "Paste",
    print: "Print",
    qr: "QR Code",
    refresh: "Refresh",
    "save-image": "Save image",
    search: "Search",
    "select-all": "Select all",
    settings: "Settings",
    source: "Source",
    "text-copy": "Text copy",
    top: "Top",
  };
  const closeButton = menu.querySelector('[data-context-action="close"]');
  const sortedButtons = [...menu.querySelectorAll("[data-context-action]")]
    .filter((button) => button !== closeButton)
    .sort((first, second) => {
    const firstLabel = sortLabels[first.dataset.contextAction] || first.dataset.contextAction || "";
    const secondLabel = sortLabels[second.dataset.contextAction] || second.dataset.contextAction || "";
    return firstLabel.localeCompare(secondLabel, "en", { sensitivity: "base" });
  });

  menu.querySelectorAll(".context-menu-separator").forEach((separator) => separator.remove());
  if (closeButton) {
    menu.append(closeButton);
    const separator = document.createElement("div");
    separator.className = "context-menu-separator";
    separator.setAttribute("role", "separator");
    separator.setAttribute("aria-hidden", "true");
    menu.append(separator);
  }
  sortedButtons.forEach((button) => menu.append(button));

  return menu;
};

const ensureContextMenu = () => enhanceContextMenuActions(document.querySelector("[data-context-menu]") || createContextMenuFallback());

const navLinks = [...document.querySelectorAll(".nav-links a")];
const themeChoices = [...document.querySelectorAll("[data-theme-choice]")];
const languageChoices = [...document.querySelectorAll("[data-language-choice]")];
const densityChoices = [...document.querySelectorAll("[data-density-choice]")];
const accentChoices = [...document.querySelectorAll("[data-accent-choice]")];
const themeSelect = document.querySelector("[data-theme-select]");
const themeTrigger = document.querySelector("[data-theme-trigger]");
const themeMenu = document.querySelector("[data-theme-menu]");
const themeLabel = document.querySelector("[data-theme-label]");
const languageSelect = document.querySelector("[data-language-select]");
const languageTrigger = document.querySelector("[data-language-trigger]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageLabel = document.querySelector("[data-language-label]");
const densitySelect = document.querySelector("[data-density-select]");
const densityTrigger = document.querySelector("[data-density-trigger]");
const densityMenu = document.querySelector("[data-density-menu]");
const densityLabel = document.querySelector("[data-density-label]");
const kidModeChoices = [...document.querySelectorAll("[data-kid-mode-choice]")];
const kidModeSelect = document.querySelector("[data-kid-mode-select]");
const kidModeTrigger = document.querySelector("[data-kid-mode-trigger]");
const kidModeMenu = document.querySelector("[data-kid-mode-menu]");
const kidModeLabel = document.querySelector("[data-kid-mode-label]");
const accentSelect = document.querySelector("[data-accent-select]");
const accentTrigger = document.querySelector("[data-accent-trigger]");
const accentMenu = document.querySelector("[data-accent-menu]");
const accentPreview = document.querySelector("[data-accent-preview]");
const accentLabel = document.querySelector("[data-accent-label]");
const premiumNote = document.querySelector("[data-premium-note]");
const clearCacheButton = document.querySelector("[data-clear-cache]");
const clearCacheWarning = document.querySelector("[data-clear-cache-warning]");
const clearCacheCancel = document.querySelector("[data-clear-cache-cancel]");
const clearCacheConfirm = document.querySelector("[data-clear-cache-confirm]");
const clearCacheNote = document.querySelector("[data-clear-cache-note]");
const storageMeter = document.querySelector("[data-storage-meter]");
const storagePercents = [...document.querySelectorAll("[data-storage-percent]")];
const paymentBlockStatuses = [...document.querySelectorAll("[data-payment-block-status]")];
const themeStatuses = [...document.querySelectorAll("[data-theme-status]")];
const storageBar = document.querySelector("[data-storage-bar]");
const storageUsage = document.querySelector("[data-storage-usage]");
const betaStatuses = [...document.querySelectorAll("[data-beta-status]")];
const betaLabOpen = document.querySelector("[data-beta-lab-open]");
const betaLabDialog = document.querySelector("[data-beta-lab-dialog]");
const betaLabCloseButtons = [...document.querySelectorAll("[data-beta-lab-close]")];
const betaFeatureButtons = [...document.querySelectorAll("[data-beta-feature]")];
const betaRedesignStates = [...document.querySelectorAll("[data-beta-redesign-state]")];
const notificationStatuses = [...document.querySelectorAll("[data-notification-status]")];
const notificationTestButtons = [...document.querySelectorAll("[data-notification-test]")];
const shareLinkButton = document.querySelector("[data-share-link]");
const homeSubscribeForm = document.querySelector("[data-home-subscribe-form]");
const homeSubscribeEmail = document.querySelector("[data-home-subscribe-email]");
const homeSubscribeTopics = [...document.querySelectorAll("[data-home-subscribe-topic]")];
const homeSubscribeStatus = document.querySelector("[data-home-subscribe-status]");
let shareDialog = document.querySelector("[data-share-dialog]");
let shareClose = document.querySelector("[data-share-close]");
let shareCopy = document.querySelector("[data-share-copy]");
let shareUrl = document.querySelector("[data-share-url]");
let shareStatus = document.querySelector("[data-share-status]");
let shareTargets = [...document.querySelectorAll("[data-share-target]")];
let qrDialog = document.querySelector("[data-qr-dialog]");
let qrClose = document.querySelector("[data-qr-close]");
let qrOpenImage = document.querySelector("[data-qr-open-image]");
let qrCopy = document.querySelector("[data-qr-copy]");
let qrImage = document.querySelector("[data-qr-image]");
let qrUrl = document.querySelector("[data-qr-url]");
let qrStatus = document.querySelector("[data-qr-status]");
let sourceDialog = document.querySelector("[data-source-dialog]");
let sourceClose = document.querySelector("[data-source-close]");
let sourceCopy = document.querySelector("[data-source-copy]");
let sourceCode = document.querySelector("[data-source-code]");
let sourceMeta = document.querySelector("[data-source-meta]");
let sourceStatus = document.querySelector("[data-source-status]");
let printDialog = document.querySelector("[data-print-dialog]");
let printClose = document.querySelector("[data-print-close]");
let printConfirm = document.querySelector("[data-print-confirm]");
let clipboardDialog = document.querySelector("[data-clipboard-dialog]");
let clipboardCloseButtons = [...document.querySelectorAll("[data-clipboard-close]")];
let clipboardList = document.querySelector("[data-clipboard-list]");
let clipboardStatus = document.querySelector("[data-clipboard-status]");
let clipboardClear = document.querySelector("[data-clipboard-clear]");
let clipboardWarningDialog = document.querySelector("[data-clipboard-warning-dialog]");
let clipboardWarningCloseButtons = [...document.querySelectorAll("[data-clipboard-warning-close]")];
let clipboardWarningContinue = document.querySelector("[data-clipboard-warning-continue]");
let quickSettingsDialog = document.querySelector("[data-quick-settings-dialog]");
let quickSettingsCloseButtons = [...document.querySelectorAll("[data-quick-settings-close]")];
let quickSettingsOpenButtons = [...document.querySelectorAll("[data-quick-settings-open]")];
let quickSettingsThemeButtons = [...document.querySelectorAll("[data-quick-theme]")];
let quickSettingsLanguageButtons = [...document.querySelectorAll("[data-quick-language]")];
let quickSettingsNotificationToggle = document.querySelector("[data-quick-notifications]");
let quickSettingsFastRenderToggle = document.querySelector("[data-quick-fast-render]");
let quickSettingsStatus = document.querySelector("[data-quick-settings-status]");
const adblockBait = document.querySelector(".adblock-bait");
const adblockNotice = document.querySelector("[data-adblock-notice]");
const adblockDismiss = document.querySelector("[data-adblock-dismiss]");
const currencySwitch = document.querySelector("[data-currency-switch]");
const currencyChoices = [...document.querySelectorAll("[data-currency-choice]")];
const priceLabels = [...document.querySelectorAll("[data-price-plan]")];
const subscribeButtons = [...document.querySelectorAll("[data-subscribe-url]")];
const subscribeWarning = document.querySelector("[data-subscribe-warning]");
const subscribeCancel = document.querySelector("[data-subscribe-cancel]");
const subscribeConfirm = document.querySelector("[data-subscribe-confirm]");
const settingToggles = [...document.querySelectorAll("[data-toggle-key]")];
const navLayoutOpen = document.querySelector("[data-nav-layout-open]");
const navLayoutDialog = document.querySelector("[data-nav-layout-dialog]");
const navLayoutCloseButtons = [...document.querySelectorAll("[data-nav-layout-close]")];
const navLayoutChoices = [...document.querySelectorAll("[data-nav-layout-choice]")];
const contextModeOpen = document.querySelector("[data-context-menu-open]");
const contextModeDialog = document.querySelector("[data-context-mode-dialog]");
const contextModeCloseButtons = [...document.querySelectorAll("[data-context-mode-close]")];
const contextModeChoices = [...document.querySelectorAll("[data-context-menu-choice]")];
const cookieSettingsOpen = document.querySelector("[data-cookie-settings-open]");
const cookieSettingsDialog = document.querySelector("[data-cookie-settings-dialog]");
const cookieSettingsCloseButtons = [...document.querySelectorAll("[data-cookie-settings-close]")];
const cookiePreferenceToggle = document.querySelector("[data-cookie-preference-toggle]");
const cookieSettingsStatus = document.querySelector("[data-cookie-settings-status]");
const fastRenderSwipe = document.querySelector("[data-fast-render-swipe]");
const browserUsageDailyReset = document.querySelector("[data-browser-daily-reset]");
const browserUsageDailyRemaining = document.querySelector("[data-browser-daily-remaining]");
const browserUsageDailyBar = document.querySelector("[data-browser-daily-bar]");
const browserUsageWeeklyReset = document.querySelector("[data-browser-weekly-reset]");
const browserUsageWeeklyRemaining = document.querySelector("[data-browser-weekly-remaining]");
const browserUsageWeeklyBar = document.querySelector("[data-browser-weekly-bar]");
const usageLearnOpen = document.querySelector("[data-usage-learn-open]");
const usageLearnDialog = document.querySelector("[data-usage-learn-dialog]");
const usageLearnCloseButtons = [...document.querySelectorAll("[data-usage-learn-close]")];
const homeTabs = [...document.querySelectorAll("[data-home-tab]")];
const homePanels = [...document.querySelectorAll("[data-home-panel]")];
const infoTabs = [...document.querySelectorAll("[data-info-tab]")];
const infoPanels = [...document.querySelectorAll("[data-info-panel]")];
const loadingBar = document.querySelector(".loading-bar");
const scrollProgress = document.querySelector(".scroll-progress");
const scrollActions = document.querySelector("[data-scroll-actions]");
const scrollActionButtons = [...document.querySelectorAll("[data-scroll-to]")];
const actionButtons = [...document.querySelectorAll("[data-go-url]")];
const contextMenu = ensureContextMenu();
const contextMenuActions = [...document.querySelectorAll("[data-context-action]")];
const mobileMenuButton = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const brandLogoImage = document.querySelector(".brand-logo img");
const desktopSidebarQuery = window.matchMedia("(min-width: 1024px)");
const feedbackOpen = document.querySelector("[data-feedback-open]");
const feedbackWarning = document.querySelector("[data-feedback-warning]");
const feedbackCancel = document.querySelector("[data-feedback-cancel]");
const feedbackConfirm = document.querySelector("[data-feedback-confirm]");
const feedbackFormUrl = "https://forms.gle/214q7yY6gbTUwK9u7";
let pendingSubscribeUrl = "";
let contextMenuCloseTimeoutId = 0;
let copyToastTimeoutId = 0;
let copyEventSuppressedUntil = 0;
let lastNativeCopyToastKey = "";
let lastNativeCopyToastAt = 0;
let contextMenuAudioContext = null;
let contextClipboardText = "";
let contextClipboardCheckId = 0;
let contextTargetElement = null;
let contextTargetLink = null;
let contextTargetImage = null;
const highlightTargets = [
  ...document.querySelectorAll(
    ".mobile-menu-button, .button, .feedback-cta, .contact-links a, .icon-button, .adblock-notice button, .settings-sidebar a, .currency-switch button, .setting-select-trigger, .setting-select-menu button, .accent-trigger, .accent-menu button, .share-socials button, .scroll-actions button, .context-menu button, .nav-search-button",
  ),
];
const sections = navLinks
  .filter((link) => link.getAttribute("href")?.startsWith("#"))
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const translations = {
  ko: {
    "accessibility.skip": "본문으로 바로 이동",
    "nav.search": "검색",
    "nav.groupMain": "메인",
    "nav.groupManage": "관리",
    "nav.groupTrust": "신뢰",
    "nav.groupUtility": "유틸리티",
    "nav.home": "홈",
    "nav.creator": "제작자",
    "nav.about": "소개",
    "nav.aboutUs": "소개",
    "nav.work": "작업",
    "nav.contact": "연락처",
    "nav.pricing": "요금제",
    "nav.support": "지원",
    "nav.analytics": "사용량",
    "nav.updates": "최신 업데이트",
    "nav.activity": "활동",
    "nav.bio": "프로필",
    "nav.faq": "FAQ",
    "nav.settings": "설정",
    "nav.accessibility": "접근성",
    "nav.sitemap": "사이트맵",
    "nav.trust": "신뢰 센터",
    "nav.status": "상태",
    "nav.security": "보안",
    "footer.brand": "Emergency Responder Profile",
    "footer.tagline": "신뢰, 상태, 개인정보, 지원 링크를 한 곳에 모았습니다.",
    "usage.nav": "Usage",
    "nav.privacy": "개인정보 처리방침",
    "nav.license": "라이선스",
    "nav.terms": "이용약관",
    "nav.feedback": "피드백",
    "nav.menu": "메뉴",
    "nav.collapseSidebar": "사이드바 접기",
    "nav.expandSidebar": "사이드바 펼치기",
    "context.close": "닫기",
    "context.copy": "페이지 링크 복사",
    "context.textCopy": "텍스트 복사",
    "context.selectAll": "모두 선택",
    "context.copySelection": "선택한 텍스트 복사",
    "context.cut": "잘라내기",
    "context.openLink": "새 탭에서 링크 열기",
    "context.copyLink": "링크 주소 복사",
    "context.saveImage": "이미지 저장",
    "context.copyTitle": "페이지 제목 복사",
    "context.paste": "붙여넣기",
    "context.search": "사이트 검색",
    "context.share": "공유 열기",
    "context.qr": "QR 코드 만들기",
    "context.cast": "Cast",
    "context.clipboard": "Clipboard Center",
    "context.top": "맨 위로 이동",
    "context.refresh": "새로고침",
    "context.back": "뒤로 가기",
    "context.forward": "앞으로 가기",
    "context.print": "인쇄",
    "context.source": "페이지 소스 보기",
    "context.creator": "Creator 열기",
    "context.feedback": "Feedback 열기",
    "context.settings": "설정 열기",
    "toast.copyText": "텍스트가 복사되었습니다.",
    "toast.copyLink": "링크가 복사되었습니다.",
    "toast.copyTitle": "페이지 제목이 복사되었습니다.",
    "toast.copySource": "소스가 복사되었습니다.",
    "toast.copyImage": "이미지가 복사되었습니다.",
    "toast.cutText": "선택한 텍스트를 잘라냈습니다.",
    "toast.imageSaved": "이미지가 저장되었습니다.",
    "toast.clipboardSaved": "Clipboard Center에 저장했습니다.",
    "toast.clipboardCleared": "Clipboard Center를 비웠습니다.",
    "toast.notificationsAllowed": "사이트 알림을 허용했습니다.",
    "toast.notificationsBlocked": "사이트 알림을 거부했습니다.",
    "toast.notificationsUnsupported": "이 브라우저는 사이트 알림을 지원하지 않습니다.",
    "toast.notificationsDismissed": "알림 권한 요청이 완료되지 않았습니다.",
    "search.eyebrow": "Search",
    "search.title": "사이트 검색",
    "search.label": "검색어",
    "clipboard.eyebrow": "Clipboard",
    "clipboard.title": "Clipboard Center",
    "clipboard.body": "이 사이트에서 복사한 링크, 제목, 텍스트만 이 브라우저에 임시로 저장합니다.",
    "clipboard.warning": "비밀번호, 토큰, 결제 정보 같은 민감한 내용은 Clipboard Center에 남기지 마세요.",
    "clipboard.warningTitle": "민감정보 주의",
    "clipboard.warningBody": "Clipboard Center는 이 브라우저의 로컬 저장소에 복사 기록을 남깁니다. 비밀번호, API 토큰, 결제 정보, 개인정보는 저장하지 않는 것이 좋습니다.",
    "clipboard.warningContinue": "계속 열기",
    "clipboard.empty": "아직 저장된 복사 항목이 없습니다.",
    "clipboard.close": "닫기",
    "clipboard.clear": "전체 삭제",
    "clipboard.copyAgain": "다시 복사",
    "clipboard.latest": "최근 복사",
    "clipboard.itemText": "텍스트",
    "clipboard.itemLink": "링크",
    "clipboard.itemTitle": "제목",
    "clipboard.itemSource": "소스",
    "clipboard.itemSelection": "선택 텍스트",
    "clipboard.itemQr": "QR 링크",
    "clipboard.itemShare": "공유 링크",
    "clipboard.itemManual": "직접 복사",
    "search.placeholder": "Unity, 요금제, FAQ처럼 입력하세요",
    "search.empty": "검색어를 입력하면 관련 페이지가 표시됩니다.",
    "search.noResults": "일치하는 결과가 없습니다.",
    "search.close": "닫기",
    "search.open": "열기",
    "search.pageLead": "사이트 안의 주요 페이지를 한 화면에서 검색하고 바로 이동합니다.",
    "search.pageHint": "검색어를 입력하면 Home, Settings, Privacy, FAQ 같은 페이지가 즉시 정리됩니다.",
    "activity.eyebrow": "Activity",
    "activity.title": "최근 활동",
    "activity.lead": "이 브라우저에서 열어본 페이지와 주요 동작을 로컬에만 기록합니다.",
    "activity.local": "기록은 이 기기에만 저장됩니다.",
    "activity.timeline": "Timeline",
    "activity.visits": "방문",
    "activity.actions": "동작",
    "activity.latest": "최근",
    "activity.emptyTitle": "아직 활동이 없습니다.",
    "activity.emptyBody": "페이지를 둘러보거나 공유, 검색 같은 기능을 사용하면 여기에 표시됩니다.",
    "activity.clear": "활동 지우기",
    "activity.visit": "페이지 방문",
    "activity.copyLink": "링크 복사",
    "activity.openSearch": "검색 열기",
    "activity.openShare": "공유 열기",
    "activity.openSettings": "설정 열기",
    "sitemap.eyebrow": "Sitemap",
    "sitemap.title": "사이트맵",
    "sitemap.lead": "공개 페이지, 설정, 법적 안내, 지원 경로를 한 화면에서 확인합니다.",
    "sitemap.xmlLink": "검색엔진용 XML 열기",
    "sitemap.profileGroup": "Profile",
    "sitemap.toolsGroup": "Tools",
    "sitemap.supportGroup": "Support",
    "sitemap.policyGroup": "Policy",
    "sitemap.settingsTitle": "사이트맵",
    "sitemap.settingsBody": "사이트의 공개 페이지와 정책 문서를 한 화면에서 확인합니다.",
    "sitemap.open": "Sitemap 열기",
    "search.trustTitle": "Trust Center",
    "search.trustBody": "개인정보, 보안, 접근성, 상태, 법적 안내를 한 곳에서 확인합니다.",
    "search.statusTitle": "Status",
    "search.statusBody": "주요 페이지와 알림, 저장소, 공유 메타의 현재 운영 상태를 확인합니다.",
    "search.securityTitle": "Security",
    "search.securityBody": "브라우저 저장소, 쿠키, 외부 결제, 알림 권한의 보안 경계를 확인합니다.",
    "trust.eyebrow": "Trust Center",
    "trust.title": "신뢰와 운영 정보를 한 곳에 모았습니다.",
    "trust.lead": "개인정보, 보안, 접근성, 서비스 상태, 법적 안내를 기업 사이트처럼 빠르게 확인할 수 있습니다.",
    "trust.summaryLabel": "Current posture",
    "trust.summaryValue": "Local-first, transparent, monitored",
    "trust.summaryBody": "로그인 추적 쿠키 없이 브라우저 설정 중심으로 동작하고, 결제와 피드백은 외부 서비스 경계를 명확히 둡니다.",
    "trust.securityTitle": "보안 기준",
    "trust.securityBody": "브라우저 저장소, 알림 권한, 결제 링크, 외부 서비스 경계를 확인합니다.",
    "trust.statusTitle": "운영 상태",
    "trust.statusBody": "주요 페이지, 알림, 오프라인 지원, 공유 메타 상태를 요약합니다.",
    "trust.privacyTitle": "개인정보 처리",
    "trust.privacyBody": "로컬 설정 저장, 쿠키 안내, 피드백 입력 범위를 정리합니다.",
    "trust.accessTitle": "접근성",
    "trust.accessBody": "키보드 이동, 대비, 표시 밀도, 움직임 감소 지원을 확인합니다.",
    "trust.termsTitle": "이용 기준",
    "trust.termsBody": "사이트 사용, 외부 결제, 피드백 제출 기준을 확인합니다.",
    "trust.sitemapTitle": "전체 경로",
    "trust.sitemapBody": "공개 페이지와 정책 문서로 바로 이동합니다.",
    "status.eyebrow": "Status",
    "status.title": "현재 사이트 상태를 간단히 확인합니다.",
    "status.lead": "기업 사이트의 상태 페이지처럼 핵심 기능의 현재 운영 기준을 요약합니다.",
    "status.overallLabel": "Overall status",
    "status.overallValue": "All core pages available",
    "status.updated": "마지막 내부 점검: 2026년 6월 15일",
    "status.routesTitle": "Public routes",
    "status.routesBody": "Home, Settings, Privacy, Updates, Search, Activity, Sitemap, Trust routes are expected to serve normally.",
    "status.notificationsTitle": "Notifications",
    "status.notificationsBody": "Browser notification support depends on user permission and browser platform rules.",
    "status.storageTitle": "Local storage",
    "status.storageBody": "Theme, language, consent, activity, and subscription preferences stay in this browser.",
    "status.shareTitle": "Sharing metadata",
    "status.shareBody": "Open Graph and Twitter card metadata are configured for public pages.",
    "security.eyebrow": "Security",
    "security.title": "보안 경계를 분명하게 설명합니다.",
    "security.lead": "이 사이트가 브라우저에 저장하는 것, 외부 서비스로 넘기는 것, 사용자가 직접 제어하는 것을 나눠서 보여줍니다.",
    "security.modelLabel": "Security model",
    "security.modelValue": "Local-first controls",
    "security.modelBody": "민감한 결제 정보는 사이트가 직접 저장하지 않고, 알림과 저장소 권한은 브라우저 권한을 따릅니다.",
    "security.storageTitle": "Browser storage",
    "security.storageBody": "테마, 언어, 활동 기록, 구독 입력값은 이 브라우저의 로컬 저장소에 머뭅니다.",
    "security.cookiesTitle": "Cookies",
    "security.cookiesBody": "필수 동작과 저장 안내 확인용 쿠키만 사용하며 광고/분석 쿠키는 현재 사용하지 않습니다.",
    "security.checkoutTitle": "External checkout",
    "security.checkoutBody": "결제 버튼은 Stripe가 호스팅하는 페이지로 이동하며 카드 번호와 인증 정보는 이 사이트가 직접 보관하지 않습니다.",
    "security.notificationsTitle": "Notifications",
    "security.notificationsBody": "사이트 알림은 사용자가 브라우저 권한 팝업에서 허용한 경우에만 표시됩니다.",
    "security.feedbackTitle": "Feedback forms",
    "security.feedbackBody": "피드백 양식은 외부 서비스 정책을 따르므로 민감한 개인정보는 입력하지 않는 것이 좋습니다.",
    "security.reportTitle": "Report an issue",
    "security.reportBody": "보안이나 개인정보 관련 문제가 보이면 Feedback 경로로 알려주세요.",
    "cookie.eyebrow": "Privacy",
    "cookie.title": "브라우저 저장 안내",
    "cookie.body":
      "이 사이트는 테마, 언어, 사이드바 상태처럼 화면을 편하게 보기 위한 설정을 이 브라우저에 저장합니다. 로그인 추적용 쿠키나 광고 쿠키는 사용하지 않습니다.",
    "cookie.accept": "확인",
    "cookie.settings": "Settings 보기",
    "cookie.learnMore": "자세히 알아보기",
    "search.homeTitle": "Home",
    "search.homeBody": "응급 대응 프로필의 소개, 주요 역량, 공유 기능을 확인합니다.",
    "search.creatorTitle": "Creator",
    "search.creatorBody": "Unity로 게임을 만드는 방법, 제작 흐름, Unity 요금제 정보를 봅니다.",
    "search.bioTitle": "Bio",
    "search.bioBody": "실명 없이 정리한 자기소개와 좋아하는 것들을 확인합니다.",
    "search.aboutTitle": "About us",
    "search.aboutBody": "사이트의 목적, 구성 방식, 공개 운영 방향을 확인합니다.",
    "search.faqTitle": "FAQ",
    "search.faqBody": "미국 EMT 경로, 게임 개발자 FAQ, 사이트 운영 안내를 봅니다.",
    "search.pricingTitle": "Pricing",
    "search.pricingBody": "Free, Pro, Team, Ultra 플랜과 비교표를 확인합니다.",
    "search.updatesTitle": "최신 업데이트",
    "search.updatesBody": "최근 사이트 변경 사항과 다음에 손볼 항목을 확인합니다.",
    "search.activityTitle": "Activity",
    "search.activityBody": "이 브라우저에 저장된 최근 방문과 주요 동작을 확인하고 지웁니다.",
    "search.sitemapTitle": "Sitemap",
    "search.sitemapBody": "사이트의 주요 페이지, 도구, 정책 문서를 한 화면에서 확인합니다.",
    "sitemap.operationsGroup": "Operations",
    "search.serverErrorTitle": "500 Server Error",
    "search.serverErrorBody": "일시적인 서버 오류가 발생했을 때 복구 경로와 상태 확인 링크를 제공합니다.",
    "search.maintenanceTitle": "Maintenance",
    "search.maintenanceBody": "점검 중일 때 상태 확인, 재방문 안내, 데이터 보호 기준을 확인합니다.",
    "search.comingSoonTitle": "Coming Soon",
    "search.comingSoonBody": "아직 공개 전인 기능과 준비 중인 페이지를 미리 확인합니다.",
    "serverError.code": "500_SERVER_ERROR",
    "serverError.title": "일시적인 서버 오류입니다.",
    "serverError.body": "요청을 처리하는 중 문제가 발생했습니다. 잠시 후 다시 시도하거나 상태 페이지에서 서비스 상태를 확인해 주세요.",
    "serverError.home": "다시 홈으로 이동",
    "serverError.status": "Status 확인",
    "serverError.feedback": "문제 알리기",
    "serverError.recoveryLabel": "서버 복구 상태",
    "serverError.consoleLabel": "Service recovery",
    "serverError.lastCheck": "Last check",
    "serverError.statusValue": "Temporary service issue",
    "serverError.routesLabel": "서버 오류 복구 경로",
    "serverError.routeHomeLabel": "Return",
    "serverError.routeHomeBody": "문제가 없는 기본 화면으로 돌아갑니다.",
    "serverError.routeStatusLabel": "Health",
    "serverError.routeStatusBody": "서비스 상태와 최근 점검 여부를 확인합니다.",
    "serverError.routeFeedbackLabel": "Report",
    "serverError.routeFeedbackBody": "같은 문제가 반복되면 상황을 알려주세요.",
    "maintenance.eyebrow": "Maintenance",
    "maintenance.code": "SERVICE_MAINTENANCE",
    "maintenance.title": "서비스를 정비하는 중입니다.",
    "maintenance.body": "더 안정적인 경험을 위해 일부 기능을 잠시 점검하고 있습니다. 잠시 후 다시 접속하거나 상태 페이지를 확인해 주세요.",
    "maintenance.status": "Status 확인",
    "maintenance.home": "홈으로 돌아가기",
    "maintenance.panelLabel": "점검 상태",
    "maintenance.windowLabel": "Maintenance window",
    "maintenance.windowValue": "Updating service",
    "maintenance.windowHint": "점검이 끝나면 별도 조치 없이 다시 이용할 수 있습니다.",
    "maintenance.tipsLabel": "점검 안내",
    "maintenance.tipOneTitle": "잠시 후 다시 시도",
    "maintenance.tipOneBody": "점검 중에는 일부 페이지나 기능이 일시적으로 느리거나 열리지 않을 수 있습니다.",
    "maintenance.tipTwoTitle": "Status 확인",
    "maintenance.tipTwoBody": "서비스 상태 페이지에서 현재 점검 또는 장애 안내를 확인할 수 있습니다.",
    "maintenance.tipThreeTitle": "데이터 보호",
    "maintenance.tipThreeBody": "점검 페이지는 입력을 요구하지 않으며, 결제나 개인정보를 요청하지 않습니다.",
    "comingSoon.menuLabel": "Coming Soon 페이지 메뉴",
    "comingSoon.eyebrow": "Coming Soon",
    "comingSoon.code": "FEATURE_PREVIEW",
    "comingSoon.title": "새 기능을 준비하고 있습니다.",
    "comingSoon.body": "아직 공개 전인 기능과 페이지를 이곳에서 안내합니다. 최신 업데이트를 확인하거나 필요한 기능을 피드백으로 남겨주세요.",
    "comingSoon.updates": "Latest updates",
    "comingSoon.feedback": "Feedback 보내기",
    "comingSoon.home": "홈으로 돌아가기",
    "comingSoon.panelLabel": "준비 상태",
    "comingSoon.panelKicker": "Feature pipeline",
    "comingSoon.panelValue": "Preparing launch",
    "comingSoon.panelHint": "공개 준비가 끝나면 실제 기능 페이지로 연결됩니다.",
    "comingSoon.stagesLabel": "준비 중인 기능 단계",
    "comingSoon.planTitle": "In planning",
    "comingSoon.planBody": "새 기능의 범위, 연결 위치, 필요한 안내 문구를 정리합니다.",
    "comingSoon.designTitle": "In design",
    "comingSoon.designBody": "사이트의 무채색 톤과 모바일 흐름에 맞춰 화면을 다듬습니다.",
    "comingSoon.testTitle": "In testing",
    "comingSoon.testBody": "공개 전에 링크, 번역, 모바일 레이아웃, 접근성을 확인합니다.",
    "search.settingsTitle": "Settings",
    "search.settingsBody": "테마, 언어, 강조 컬러, 우클릭 메뉴, 저장용량 설정을 관리합니다.",
    "search.accessibilityTitle": "Accessibility",
    "search.accessibilityBody": "키보드 이동, 색 대비, 언어, 화면 밀도, Kid mode 지원 범위를 확인합니다.",
    "search.privacyTitle": "Privacy Policy",
    "search.privacyBody": "로컬 설정 저장, 외부 링크, 피드백 개인정보 기준을 확인합니다.",
    "search.licenseTitle": "Open Source License",
    "search.licenseBody": "사이트 코드, 이미지, 로고, 시스템 글꼴의 라이선스 기준을 확인합니다.",
    "search.termsTitle": "Terms of Use",
    "search.termsBody": "사이트 이용, 외부 결제, 피드백, 로컬 설정 기준을 확인합니다.",
    "search.feedbackTitle": "Feedback",
    "search.feedbackBody": "버그, 개선 의견, 사용성 피드백을 Google Forms로 보냅니다.",
    "aria.home": "홈",
    "aria.profileMenu": "프로필 메뉴",
    "aria.termsMenu": "이용약관 메뉴",
    "aria.termsSummary": "이용약관 요약",
    "aria.termsDetails": "이용약관 세부 정보",
    "aria.homeTabs": "홈 섹션 탭",
    "aria.creatorMenu": "Creator 메뉴",
    "aria.bioMenu": "자기소개 메뉴",
    "aria.aboutMenu": "About us 메뉴",
    "aria.faqMenu": "FAQ 메뉴",
    "aria.pricingMenu": "요금제 메뉴",
    "aria.settingsMenu": "설정 메뉴",
    "aria.updatesMenu": "최신 업데이트 메뉴",
    "aria.updatesSummary": "최신 업데이트 요약",
    "aria.updatesTimeline": "최신 업데이트 목록",
    "aria.activityMenu": "Activity 메뉴",
    "aria.activitySummary": "Activity 요약",
    "aria.activityTimeline": "Activity 목록",
    "aria.sitemapMenu": "Sitemap menu",
    "aria.sitemapLinks": "Sitemap links",
    "aria.footerLinks": "푸터 링크",
    "aria.accessibilityMenu": "접근성 메뉴",
    "aria.accessibilitySummary": "접근성 요약",
    "aria.accessibilityDetails": "접근성 세부 정보",
    "aria.privacyMenu": "개인정보처리방침 메뉴",
    "aria.licenseMenu": "오픈소스 라이선스 메뉴",
    "aria.feedbackMenu": "피드백 메뉴",
    "aria.feedbackGuide": "피드백 안내",
    "aria.feedbackTopics": "피드백 주제",
    "aria.feedbackPrivacy": "개인정보 안내",
    "aria.supportDesk": "지원 안내",
    "aria.errorMenu": "오류 페이지 메뉴",
    "aria.offlineMenu": "오프라인 페이지 메뉴",
    "aria.profileSummary": "프로필 요약",
    "aria.homeLedger": "홈 시스템 요약",
    "aria.homeFieldScene": "현장 구급차 배경",
    "aria.homeRoutes": "홈 주요 경로",
    "aria.homeSwitchboard": "홈 빠른 작업",
    "aria.homeLatest": "홈 최신 업데이트",
    "aria.homeFeedback": "홈 피드백",
    "aria.creatorGuide": "Unity 제작 가이드",
    "aria.creatorPricing": "Unity 요금제 요약",
    "aria.creatorSummary": "Creator 요약",
    "aria.creatorStages": "Creator 단계 이동",
    "aria.contactSection": "연락 섹션으로 이동",
    "aria.workSection": "작업 섹션으로 이동",
    "aria.copyPageLink": "페이지 링크 복사",
    "aria.externalShare": "외부 공유",
    "aria.siteInfo": "사이트 정보",
    "aria.siteInfoTabs": "사이트 정보 탭",
    "aria.scrollControls": "페이지 스크롤 컨트롤",
    "aria.scrollTop": "맨 위로 이동",
    "aria.scrollBottom": "맨 아래로 이동",
    "aria.errorRecovery": "404 복구 옵션",
    "aria.errorRoutes": "추천 이동 경로",
    "aria.bioContent": "자기소개",
    "aria.bioSummary": "자기소개 요약",
    "aria.aboutSummary": "About us 요약",
    "aria.aboutValues": "About us 가치",
    "aria.aboutSystem": "사이트 구성",
    "aria.aboutTrust": "개인정보와 결제 신뢰",
    "aria.aboutNext": "다음 방향",
    "aria.likes": "좋아하는 것들",
    "aria.faqTopics": "FAQ 주제 이동",
    "aria.emtFaq": "미국 응급구조사 FAQ",
    "aria.gameFaq": "게임 개발자 FAQ",
    "aria.meetFaq": "만남 FAQ",
    "aria.siteFaq": "사이트 운영 FAQ",
    "aria.faqSummary": "FAQ 요약",
    "aria.faqFeedback": "FAQ 피드백",
    "aria.pricingControls": "요금제 표시 설정",
    "aria.currency": "통화 선택",
    "aria.pricingInfo": "요금제 정보",
    "aria.pricingStripeSummary": "Stripe 결제 요약",
    "aria.ultraPlan": "Ultra 요금제",
    "aria.planComparison": "요금제 비교",
    "aria.planComparisonTable": "요금제 기능 비교",
    "aria.faq": "자주 묻는 질문",
    "aria.settingsPanel": "프로필 설정",
    "aria.settingsCategories": "설정 분류",
    "aria.settingsOverview": "설정 상태 요약",
    "aria.usageMenu": "사용량 메뉴",
    "aria.usageSummary": "브라우저 사용량 요약",
    "aria.navLayout": "내비게이션 레이아웃 선택",
    "aria.contextMenuMode": "우클릭 메뉴 방식 선택",
    "aria.cookieSettings": "쿠키 종류 선택",
    "aria.themeCompatibility": "테마 호환 상태",
    "aria.privacySummary": "개인정보 요약",
    "aria.privacyDetails": "개인정보 세부 정보",
    "aria.licenseSummary": "라이선스 요약",
    "aria.licenseDetails": "라이선스 세부 정보",
    "aria.offlineStatus": "연결 상태",
    "aria.offlineTips": "오프라인 도움말",
    "aria.themeMode": "테마 모드 선택",
    "aria.language": "언어 선택",
    "aria.kidMode": "Kid mode 선택",
    "aria.accent": "강조 컬러 선택",
    "aria.accentCompatibility": "강조 컬러 적용 범위",
    "aria.density": "화면 밀도 선택",
    "faqTopics.emt": "EMT",
    "faqTopics.game": "게임 개발자",
    "faqTopics.meet": "만남",
    "faqTopics.site": "사이트",
    "faq.heroTitle": "답변을 선명하게 정리했습니다.",
    "faq.heroLead":
      "EMT 경로, 게임 개발, 연락 방법, 사이트 운영을 빠르게 확인할 수 있도록 기록실처럼 분류했습니다.",
    "faq.heroCtaEmt": "EMT 질문 보기",
    "faq.heroCtaSite": "사이트 질문 보기",
    "faq.mediaLabel": "Archive",
    "faq.mediaValue": "진로, 제작, 사이트",
    "faq.summaryTopics": "Topics",
    "faq.summaryAnswers": "Answers",
    "faq.summaryFormat": "Format",
    "faq.summaryFormatValue": "Quick read",
    "faq.summaryUpdated": "Updated",
    "faq.summaryUpdatedValue": "2026년 6월 3일",
    "faq.topicRailKicker": "Browse by topic",
    "faq.topicEmtBody": "EMT 시작 과정",
    "faq.topicGameBody": "게임 개발 첫 단계",
    "faq.topicMeetBody": "연락 방법",
    "faq.topicSiteBody": "배포와 개인정보",
    "faq.feedbackKicker": "Still unclear?",
    "faq.feedbackTitle": "질문이 남아 있으면 기록에 추가하겠습니다.",
    "faq.feedbackBody": "빠진 답변, 틀린 번역, 더 자세히 알고 싶은 주제를 Feedback으로 보내주세요.",
    "faq.feedbackButton": "Feedback 보내기",
    "home.heroTitle": "차분한 대응. 선명한 시스템.",
    "home.lead":
      "응급 대응, 창작 기록, 후원 경로, 개인정보와 설정을 빠르게 찾을 수 있게 정리한 공개 프로필 포털입니다.",
    "home.openBio": "Bio 열기",
    "home.openSettings": "설정 열기",
    "home.openCreator": "Creator 보기",
    "home.openSupport": "Support 문의",
    "home.signalLabel": "Emergency",
    "home.signalValue": "응급 입구 앞 미국 구급차",
    "home.ledgerResponseLabel": "Response",
    "home.ledgerResponseValue": "준비됨",
    "home.ledgerCreatorLabel": "Creator",
    "home.ledgerCreatorValue": "도구와 게임",
    "home.ledgerSupportLabel": "Support",
    "home.ledgerSupportValue": "Stripe 링크",
    "home.ledgerPrivacyLabel": "Privacy",
    "home.ledgerPrivacyValue": "로컬 우선 제어",
    "home.fieldSceneLabel": "Field scene",
    "home.fieldSceneValue": "대원과 장비가 보이는 대응 순간",
    "home.routesKicker": "Routes",
    "home.routesTitle": "바로 갈 수 있는 네 개의 입구.",
    "home.routesLead": "홈은 길을 찾는 곳으로 두고, 자세한 내용은 각 전용 페이지에서 더 깊게 볼 수 있게 나눴습니다.",
    "home.routeBioTitle": "Who I am",
    "home.routeBioBody": "응급 대응자 프로필과 관심사.",
    "home.routeAboutTitle": "The system",
    "home.routeAboutBody": "사이트 구조와 운영 원칙.",
    "home.routePricingTitle": "Support plans",
    "home.routePricingBody": "후원형 플랜과 결제 링크.",
    "home.routeSettingsTitle": "Your control",
    "home.routeSettingsBody": "언어, 테마, 결제 차단 설정.",
    "home.switchKicker": "Quick switchboard",
    "home.switchTitle": "자주 쓰는 작업을 한 번에.",
    "home.actionFeedbackLabel": "Feedback",
    "home.actionFeedbackTitle": "의견 보내기",
    "home.actionFaqLabel": "FAQ",
    "home.actionFaqTitle": "질문 확인",
    "home.actionCreatorLabel": "Creator",
    "home.actionCreatorTitle": "제작 기록",
    "home.actionPrivacyLabel": "Privacy",
    "home.actionPrivacyTitle": "정책 보기",
    "home.actionPaymentsLabel": "Payments",
    "home.actionPaymentsTitle": "결제 제어",
    "home.actionShareLabel": "Share",
    "home.actionShareTitle": "링크 복사",
    "home.latestKicker": "Latest",
    "home.latestOneDate": "2026년 6월 3일",
    "home.latestOneTitle": "Home 재디자인",
    "home.latestOneBody": "홈을 독립적인 운영 포털로 재구성했습니다.",
    "home.latestTwoDate": "2026년 6월 3일",
    "home.latestTwoTitle": "About과 Bio",
    "home.latestTwoBody": "소개 페이지들을 각각 다른 고급 디자인으로 분리했습니다.",
    "home.latestThreeDate": "2026년 6월 3일",
    "home.latestThreeTitle": "결제 제어",
    "home.latestThreeBody": "설정에서 결제 차단과 Stripe 링크 상태를 관리할 수 있습니다.",
    "home.feedbackKicker": "Feedback",
    "home.feedbackTitle": "이 시스템을 더 좋게 만드는 신호.",
    "home.feedbackBody": "불편한 흐름, 번역 누락, 결제 접근성, 디자인 균형을 발견하면 바로 알려주세요.",
    "home.feedbackButton": "Feedback 보내기",
    "home.subscribeKicker": "Subscribe",
    "home.subscribeTitle": "새 소식을 이메일로 받기.",
    "home.subscribeBody": "업데이트, 새로운 글, 뉴스성 안내를 이메일로 받을 수 있게 준비합니다. 지금 등록한 정보는 이 브라우저에 저장됩니다.",
    "home.subscribeEmailLabel": "이메일",
    "home.subscribeTopicsLabel": "받고 싶은 소식",
    "home.subscribeTopicUpdates": "사이트 업데이트",
    "home.subscribeTopicNews": "새로운 소식과 뉴스",
    "home.subscribeTopicCreator": "Creator 기록",
    "home.subscribeButton": "구독 저장",
    "home.subscribeSaved": "구독 정보가 저장되었습니다. 실제 이메일 발송은 서버 연결 후 활성화됩니다.",
    "home.subscribeInvalid": "올바른 이메일을 입력해 주세요.",
    "home.subscribeNeedTopic": "받고 싶은 소식을 하나 이상 선택해 주세요.",
    "creator.eyebrow": "Creator",
    "creator.title": "첫 플레이 가능한 장면을 완성하는 제작실.",
    "creator.lead":
      "Unity 제작을 아이디어, 씬, 오브젝트, C# 규칙, 감각 조정, 빌드까지 연결한 실전 워크플로로 정리했습니다.",
    "creator.heroCtaWorkflow": "워크플로 시작",
    "creator.heroCtaResources": "리소스 보기",
    "creator.mediaLabel": "Studio asset",
    "creator.mediaValue": "프로토타입, 코드, 빌드",
    "creator.ledgerFocusLabel": "Focus",
    "creator.ledgerFocusValue": "작은 플레이어블",
    "creator.ledgerStepsLabel": "Steps",
    "creator.ledgerStepsValue": "7단계 + 가격",
    "creator.ledgerEngineLabel": "Engine",
    "creator.ledgerOutputLabel": "Output",
    "creator.ledgerOutputValue": "Playable build",
    "creator.stageRailKicker": "Browse by stage",
    "creator.stagePlanTitle": "Plan",
    "creator.stagePlanBody": "핵심 루프와 목표",
    "creator.stageBuildTitle": "Build",
    "creator.stageBuildBody": "씬, 오브젝트, C#",
    "creator.stageTuneTitle": "Tune",
    "creator.stageTuneBody": "감각과 피드백",
    "creator.stageShipTitle": "Ship",
    "creator.stageShipBody": "테스트, 빌드, 가격",
    "creator.stepOneEyebrow": "Step 01",
    "creator.stepOneTitle": "작게 시작할 아이디어를 정합니다.",
    "creator.stepOneBody":
      "처음부터 오픈월드, 온라인 멀티플레이, 거대한 스토리 게임을 만들려고 하면 프로젝트가 금방 무거워집니다. 첫 게임은 한 문장으로 설명할 수 있어야 합니다. 예를 들어 “플레이어가 장애물을 피해서 점수를 얻는다”, “작은 맵에서 아이템을 모아 문을 연다”, “적을 피하면서 제한 시간 안에 도착한다”처럼 핵심 행동이 분명해야 합니다. 이 한 문장이 정해지면 필요한 기능도 자연스럽게 줄어듭니다.",
    "creator.stepOnePointA": "핵심 조작은 이동, 점프, 상호작용처럼 1~3개로 제한합니다.",
    "creator.stepOnePointB": "첫 목표는 완벽한 게임이 아니라 끝까지 플레이 가능한 작은 버전입니다.",
    "creator.stepOnePointC": "아이디어 문서에는 목표, 조작, 승리 조건, 실패 조건만 먼저 적습니다.",
    "creator.stepTwoEyebrow": "Step 02",
    "creator.stepTwoTitle": "Unity 프로젝트와 씬 구조를 만듭니다.",
    "creator.stepTwoBody":
      "Unity Hub에서 새 프로젝트를 만들 때 2D 게임이면 2D 템플릿, 3D 게임이면 3D 템플릿을 선택합니다. 프로젝트를 열면 Scene, Game, Hierarchy, Inspector, Project 창을 자주 쓰게 됩니다. Scene 창에서는 월드를 배치하고, Game 창에서는 실제 플레이 화면을 확인합니다. Hierarchy는 현재 씬에 있는 오브젝트 목록이고, Inspector는 선택한 오브젝트의 설정을 바꾸는 곳입니다.",
    "creator.stepTwoPointA": "Scenes, Scripts, Prefabs, Art, Audio, Materials 폴더를 먼저 만들어 정리합니다.",
    "creator.stepTwoPointB": "MainMenu, Level01, GameOver처럼 씬 이름을 역할 기준으로 정합니다.",
    "creator.stepTwoPointC": "자주 재사용할 오브젝트는 Prefab으로 만들어 관리합니다.",
    "creator.stepThreeEyebrow": "Step 03",
    "creator.stepThreeTitle": "GameObject와 Component 개념을 이해합니다.",
    "creator.stepThreeBody":
      "Unity에서 대부분의 대상은 GameObject입니다. 플레이어, 카메라, 적, 바닥, 아이템, 버튼도 모두 GameObject가 될 수 있습니다. GameObject 자체는 빈 그릇에 가깝고, 실제 기능은 Component가 담당합니다. Transform은 위치와 회전, 크기를 담당하고, Sprite Renderer나 Mesh Renderer는 화면에 보이게 만들며, Collider와 Rigidbody는 충돌과 물리를 처리합니다. 스크립트도 Component로 붙습니다.",
    "creator.stepThreePointA": "보이는 것, 움직이는 것, 충돌하는 것을 각각 어떤 Component가 담당하는지 나눠서 생각합니다.",
    "creator.stepThreePointB": "플레이어 오브젝트에는 렌더러, 충돌체, 이동 스크립트가 함께 붙는 경우가 많습니다.",
    "creator.stepThreePointC": "Inspector에서 값을 조정하며 느낌을 맞추는 과정이 Unity 제작의 큰 장점입니다.",
    "creator.stepFourEyebrow": "Step 04",
    "creator.stepFourTitle": "C# 스크립트로 규칙을 만듭니다.",
    "creator.stepFourBody":
      "Unity 게임의 행동 규칙은 보통 C# 스크립트로 작성합니다. 처음에는 문법 전체를 외우기보다 “입력을 받는다”, “위치를 바꾼다”, “충돌을 감지한다”, “점수를 올린다”, “UI를 갱신한다” 같은 작은 목표로 나누면 접근하기 쉽습니다. Start는 처음 한 번 실행되는 초기화에 자주 쓰이고, Update는 매 프레임 확인해야 하는 입력이나 상태 갱신에 자주 쓰입니다.",
    "creator.stepFourPointA": "플레이어 이동, 카메라 추적, 점수 관리, 게임 상태 관리를 별도 스크립트로 나눕니다.",
    "creator.stepFourPointB": "숫자 값은 Inspector에서 조절할 수 있게 public 필드나 SerializeField로 노출합니다.",
    "creator.stepFourPointC": "에러가 나면 Console 창의 첫 번째 에러부터 읽고, 파일명과 줄 번호를 확인합니다.",
    "creator.stepFiveEyebrow": "Step 05",
    "creator.stepFiveTitle": "레벨과 게임 감각을 반복해서 조정합니다.",
    "creator.stepFiveBody":
      "기능이 작동하기 시작하면 그다음은 감각입니다. 이동 속도, 점프 높이, 적의 속도, 카메라 거리, 아이템 배치, 체크포인트 위치처럼 플레이 느낌을 만드는 요소를 반복해서 조정합니다. Unity의 Play Mode는 이런 반복에 강합니다. 값을 바꾸고 직접 플레이하면서 너무 어렵거나 지루한 부분을 줄여 나가면 게임이 조금씩 살아납니다.",
    "creator.stepFivePointA": "초반 30초 안에 플레이어가 목표를 이해할 수 있게 배치합니다.",
    "creator.stepFivePointB": "실패해도 바로 다시 시도할 수 있게 재시작 흐름을 짧게 만듭니다.",
    "creator.stepFivePointC": "난이도는 적 수보다 위치, 타이밍, 회복 기회로 조절하는 편이 더 섬세합니다.",
    "creator.stepSixEyebrow": "Step 06",
    "creator.stepSixTitle": "UI, 사운드, 피드백을 추가합니다.",
    "creator.stepSixBody":
      "게임은 규칙만으로 완성되지 않습니다. 플레이어가 지금 무엇을 했고, 무엇이 변했는지 알아차릴 수 있어야 합니다. 점수, 체력, 목표, 남은 시간 같은 UI를 넣고, 버튼 클릭음, 점프 소리, 충돌음, 성공 효과를 추가하면 행동의 결과가 분명해집니다. 화면 흔들림, 짧은 파티클, 색 변화 같은 피드백도 과하지 않게 쓰면 게임이 훨씬 반응성 있게 느껴집니다.",
    "creator.stepSixPointA": "UI는 먼저 읽기 쉽고 작은 화면에서도 눌리기 쉬워야 합니다.",
    "creator.stepSixPointB": "사운드는 중요한 행동에만 배치해 피로감을 줄입니다.",
    "creator.stepSixPointC": "피드백 효과는 플레이를 방해하지 않는 짧은 시간 안에 끝나게 만듭니다.",
    "creator.stepSevenEyebrow": "Step 07",
    "creator.stepSevenTitle": "테스트하고 빌드합니다.",
    "creator.stepSevenBody":
      "완성에 가까워질수록 직접 만든 사람의 눈에는 문제가 잘 보이지 않습니다. 다른 사람에게 짧게 플레이해 달라고 부탁하고, 어디서 막혔는지, 어떤 버튼을 눌러야 할지 헷갈렸는지, 다시 하고 싶은지 확인합니다. 이후 File 또는 Build Settings에서 목표 플랫폼을 정하고 빌드합니다. PC, WebGL, 모바일 등 플랫폼마다 조작, 성능, 화면 비율 문제가 다르기 때문에 빌드 후 실제 환경에서 확인하는 과정이 필요합니다.",
    "creator.stepSevenPointA": "버그 목록은 재현 방법, 예상 결과, 실제 결과로 나눠 적습니다.",
    "creator.stepSevenPointB": "빌드 전에는 사용하지 않는 테스트 오브젝트와 임시 로그를 정리합니다.",
    "creator.stepSevenPointC": "첫 배포는 작게 하고, 피드백을 받아 다음 버전을 만드는 흐름이 안전합니다.",
    "creator.pricingEyebrow": "Pricing",
    "creator.pricingTitle": "Unity 요금제를 이해하고 시작합니다.",
    "creator.pricingBody":
      "Unity는 개인 학습자와 작은 인디 팀을 위한 Personal, 전문 개발자와 팀을 위한 Pro, 큰 조직을 위한 Enterprise, 산업용 실시간 3D 앱을 위한 Industry 같은 요금제를 제공합니다. 처음 배우거나 작은 게임을 만드는 단계라면 보통 무료 Personal로 시작할 수 있지만, 최근 12개월 기준 매출이나 투자금이 일정 기준을 넘는 사업자는 유료 플랜이 필요할 수 있습니다. 요금과 조건은 바뀔 수 있으므로 결제 전에는 반드시 Unity 공식 가격 페이지를 확인해야 합니다.",
    "creator.pricingPointA": "Personal은 취미 개발자, 학습자, 작은 인디 팀이 시작하기 좋은 무료 플랜입니다.",
    "creator.pricingPointB": "Pro는 더 큰 매출 또는 투자금을 가진 팀과 전문 개발자를 위한 유료 좌석 기반 플랜입니다.",
    "creator.pricingPointC": "Enterprise와 Industry는 대규모 조직, 산업용 3D, 전용 지원이 필요한 경우에 맞는 맞춤형 플랜입니다.",
    "creator.pricingPointD": "2026년부터 Pro와 Enterprise 가격 인상 및 패키징 변경이 적용될 수 있으므로 최신 조건을 확인해야 합니다.",
    "creator.planPersonalTitle": "Personal",
    "creator.planPersonalBody": "무료로 시작하기 좋으며, 게임과 엔터테인먼트 앱 제작에 적합합니다.",
    "creator.planProTitle": "Pro",
    "creator.planProBody": "전문 개발자와 팀용 플랜이며, 콘솔 배포와 추가 클라우드 기능 등이 포함됩니다.",
    "creator.planEnterpriseTitle": "Enterprise",
    "creator.planEnterpriseBody": "큰 조직을 위한 맞춤형 플랜이며, 전용 지원과 확장된 운영 기능을 제공합니다.",
    "creator.planIndustryTitle": "Industry",
    "creator.planIndustryBody": "게임 외 산업용 실시간 3D, 제품 시각화, 교육 시뮬레이션 등에 맞춘 플랜입니다.",
    "creator.pricingNote":
      "참고: Unity 공식 가격 페이지에는 Personal 무료, Pro 유료 좌석 기반, Enterprise와 Industry 맞춤 가격 구조가 안내되어 있습니다. 실제 금액은 지역, 세금, 갱신일, 계약 조건에 따라 달라질 수 있습니다.",
    "creator.resourcesEyebrow": "Resources",
    "creator.resourcesTitle": "처음 배울 때 보면 좋은 공식 자료",
    "creator.resourcesBody":
      "Unity는 공식 문서와 Unity Learn을 통해 기본 개념, 2D 제작, 에디터 사용법, 스크립팅, 샘플 프로젝트를 제공합니다. 막힐 때는 무작정 영상을 많이 보기보다 현재 만드는 기능과 직접 관련된 문서를 찾아보는 습관이 좋습니다.",
    "creator.docsLink": "Unity Documentation",
    "creator.learnLink": "Unity Learn",
    "creator.twoDLink": "Unity 2D Tools",
    "feedback.eyebrow": "Feedback",
    "feedback.title": "사이트를 더 정확하게 만드는 신호.",
    "feedback.lead": "깨진 화면, 어색한 문장, 결제나 설정에서 막히는 흐름을 남겨주세요. 짧은 제보도 다음 수정의 기준점이 됩니다.",
    "feedback.cta": "Google Forms로 피드백 남기기",
    "feedback.panelEyebrow": "Signal desk",
    "feedback.panelMetric": "3 queues",
    "feedback.panelTitle": "짧아도 괜찮습니다.",
    "feedback.panelBody": "페이지, 기대한 결과, 실제로 보인 결과만 적어도 충분합니다.",
    "feedback.statusOne": "버그 제보",
    "feedback.statusTwo": "디자인 문제",
    "feedback.statusThree": "기능 제안",
    "feedback.topicOneTitle": "버그와 깨진 화면",
    "feedback.topicOneBody": "버튼이 반응하지 않거나, 모바일에서 레이아웃이 이상하거나, 페이지 이동이 막히는 문제를 알려주세요.",
    "feedback.topicTwoTitle": "읽기 불편한 문구",
    "feedback.topicTwoBody": "어색한 영어/한국어 문장, 너무 딱딱한 안내, 이해하기 어려운 설정 이름을 보낼 수 있습니다.",
    "feedback.topicThreeTitle": "다음에 필요한 기능",
    "feedback.topicThreeBody": "공유, 접근성, 가격 페이지, 설정, 우클릭 메뉴처럼 더 개선되면 좋은 부분을 제안해 주세요.",
    "support.eyebrow": "Support",
    "support.title": "문의 유형을 고르면 더 빨리 정리할 수 있습니다.",
    "support.lead": "급하지 않은 문의, 결제 접근 문제, 개인정보 요청을 같은 양식으로 받되 목적을 분명히 적어 주세요.",
    "support.routeOneLabel": "Bug",
    "support.routeOneTitle": "화면이나 버튼 문제",
    "support.routeOneBody": "문제가 생긴 페이지, 눌렀던 버튼, 기대한 결과를 함께 남겨 주세요.",
    "support.routeTwoLabel": "Payment",
    "support.routeTwoTitle": "결제와 플랜 접근",
    "support.routeTwoBody": "Pricing, Stripe 링크, 결제 차단 설정에서 막힌 흐름을 알려주세요.",
    "support.routeThreeLabel": "Policy",
    "support.routeThreeTitle": "개인정보와 약관 요청",
    "support.routeThreeBody": "Privacy, License, Terms에서 더 명확해야 할 문장을 알려주세요.",
    "feedback.privacyEyebrow": "Privacy",
    "feedback.privacyTitle": "개인정보는 필요한 만큼만 입력하세요.",
    "feedback.privacyBody": "피드백 양식은 외부 Google Forms에서 열립니다. 답장을 원하지 않는다면 이름, 이메일, 연락처를 비워두는 편이 좋습니다.",
    "accessibility.title": "접근성을 사이트의 기본 기능으로 관리합니다.",
    "accessibility.lead":
      "이 사이트는 키보드 이동, 명확한 포커스 표시, 언어 전환, 읽기 모드, 화면 밀도 조정을 통해 더 편하게 탐색할 수 있게 설계했습니다.",
    "accessibility.mediaLabel": "Accessibility",
    "accessibility.mediaValue": "Keyboard, contrast, readable controls",
    "accessibility.summaryKeyboard": "Keyboard",
    "accessibility.summaryKeyboardValue": "Skip link and focus",
    "accessibility.summaryContrast": "Contrast",
    "accessibility.summaryContrastValue": "Dark readable UI",
    "accessibility.summaryLanguage": "Language",
    "accessibility.summaryLanguageValue": "Korean and English",
    "accessibility.summaryControls": "Controls",
    "accessibility.summaryControlsValue": "Settings page",
    "accessibility.keyboardTitle": "키보드로 이동할 수 있습니다.",
    "accessibility.keyboardBody":
      "각 페이지에는 본문으로 바로 이동하는 skip link가 있고, 버튼과 링크에는 focus-visible 표시가 적용됩니다. 우클릭 메뉴와 공유, QR, 인쇄 같은 대화상자도 버튼 기반으로 열립니다.",
    "accessibility.contrastTitle": "기본 화면은 어두운 고대비 구성을 사용합니다.",
    "accessibility.contrastBody":
      "다크와 밝기 끄기 테마는 텍스트와 컨트롤이 보이도록 공통 토큰으로 관리됩니다. 사이드바는 색 장식을 줄이고 단색 회색 배경으로 정리했습니다.",
    "accessibility.readingTitle": "읽기 편한 표시 설정을 제공합니다.",
    "accessibility.readingBody":
      "Settings에서 언어, 화면 밀도, Kid mode, 빠른 렌더링을 조정할 수 있습니다. Kid mode는 글자 크기와 움직임 감소 정도를 단계별로 바꿉니다.",
    "accessibility.motionTitle": "움직임과 무거운 효과를 줄일 수 있습니다.",
    "accessibility.motionBody":
      "빠른 렌더링을 켜면 블러, 그림자, 애니메이션 부담을 줄입니다. 기기의 reduced motion 설정도 존중하도록 애니메이션 사용을 제한합니다.",
    "accessibility.feedbackTitle": "불편한 부분은 Support로 알려주세요.",
    "accessibility.feedbackBody":
      "키보드 이동, 읽기 대비, 언어 전환, 모바일 표시에서 문제가 보이면 Feedback 페이지로 알려주세요. 접근성 개선 요청은 다음 수정의 우선 신호로 봅니다.",
    "accessibility.settingsLink": "Accessibility settings 열기",
    "accessibility.feedbackLink": "Support로 문제 알리기",
    "accessibility.updated": "마지막 업데이트: 2026년 6월 9일",
    "privacy.eyebrow": "Privacy Policy",
    "privacy.title": "개인정보를 읽기 쉽게 정리했습니다.",
    "privacy.lead":
      "이 사이트는 계정을 만들지 않고, 결제 정보도 직접 보관하지 않습니다. 브라우저 설정은 기기 안에 저장되고, 외부 서비스는 각 서비스의 정책을 따릅니다.",
    "privacy.mediaLabel": "Privacy model",
    "privacy.mediaValue": "로컬 설정, 외부 결제",
    "privacy.summaryStorage": "Storage",
    "privacy.summaryStorageValue": "Local only",
    "privacy.summaryAccount": "Accounts",
    "privacy.summaryAccountValue": "Not required",
    "privacy.summaryPayments": "Payments",
    "privacy.summaryPaymentsValue": "Stripe checkout",
    "privacy.summaryControl": "Control",
    "privacy.summaryControlValue": "Clear anytime",
    "privacy.localTitle": "쿠키와 브라우저 저장소",
    "privacy.localBody":
      "이 사이트는 로그인 추적용 쿠키나 광고 쿠키를 사용하지 않습니다. 테마, 언어, 화면 밀도, 사이드바 상태 같은 보기 설정은 이 브라우저의 localStorage에 저장되고, 쿠키 안내를 확인했다는 선택만 profile_storage_consent 쿠키로 저장됩니다.",
    "privacy.cookieEssentialTitle": "필수 쿠키",
    "privacy.cookieEssentialBody": "보안과 기본 동작을 위한 항목이며 끌 수 없습니다.",
    "privacy.cookiePreferenceTitle": "설정 저장 쿠키",
    "privacy.cookiePreferenceBody": "쿠키 안내 확인 여부를 저장하며 Settings의 쿠키 설정 팝업에서 켜거나 끌 수 있습니다.",
    "privacy.cookieAdsTitle": "광고/분석 쿠키",
    "privacy.cookieAdsBody": "현재 사용하지 않습니다.",
    "privacy.noAccountTitle": "계정 없이 읽는 사이트",
    "privacy.noAccountBody":
      "현재 이 사이트는 자체 로그인, 회원가입, 사용자 프로필 데이터베이스를 운영하지 않습니다. 이름, 비밀번호, 계정 식별자를 만들거나 보관하지 않습니다.",
    "privacy.externalTitle": "외부 서비스로 넘어가는 순간",
    "privacy.externalBody":
      "Feedback 양식, Stripe 결제, 외부 공유 링크를 누르면 해당 서비스의 화면으로 이동할 수 있습니다. 그곳에서 입력하거나 처리되는 정보는 해당 서비스의 정책과 보안 기준이 적용됩니다.",
    "privacy.stripeTitle": "결제 정보는 Stripe에서 처리합니다.",
    "privacy.stripeBody":
      "Pro, Teams, Ultra 플랜 결제는 Stripe Checkout을 통해 처리됩니다. 이 사이트는 카드 번호, 보안 코드, 결제 인증 정보를 직접 저장하지 않습니다.",
    "privacy.stripeLink": "Stripe Privacy Policy",
    "privacy.clearTitle": "언제든지 지울 수 있습니다.",
    "privacy.clearBody":
      "저장된 사이트 설정은 Settings 페이지의 정리 기능이나 브라우저의 사이트 데이터 삭제 메뉴에서 지울 수 있습니다. 삭제하면 테마와 표시 설정이 기본값으로 돌아갑니다.",
    "privacy.updated": "마지막 업데이트: 2026년 6월 3일",
    "license.eyebrow": "Open Source License",
    "license.title": "라이선스를 쉽게 읽을 수 있게 정리했습니다.",
    "license.lead":
      "사이트의 코드, 이미지, 로고, 글꼴을 어떤 기준으로 사용할 수 있는지 구분합니다. 코드는 재사용하기 쉽게, 개인 자산은 보호되게 정리했습니다.",
    "license.mediaLabel": "License registry",
    "license.mediaValue": "코드는 공개, 자산은 보호",
    "license.summaryCode": "Code",
    "license.summaryCodeValue": "HTML/CSS/JS",
    "license.summaryAssets": "Assets",
    "license.summaryAssetsValue": "Owner reserved",
    "license.summaryFonts": "Fonts",
    "license.summaryFontsValue": "System license",
    "license.summaryNotice": "Notice",
    "license.summaryNoticeValue": "Keep attribution",
    "license.mitTitle": "코드는 재사용할 수 있습니다.",
    "license.mitBody":
      "이 사이트의 기본 HTML, CSS, JavaScript 구조는 MIT 스타일의 오픈소스 라이선스로 공개할 수 있는 부분입니다. 복사, 수정, 학습, 배포에 활용할 수 있도록 단순한 정적 구조를 유지합니다.",
    "license.assetsTitle": "이미지와 로고는 별도 자산입니다.",
    "license.assetsBody":
      "로고, 생성 이미지, 프로필 이미지, 브랜드 이름, 개인 문구는 사이트 소유자의 자산으로 봅니다. 코드를 재사용하더라도 이 자산들은 그대로 복제하거나 재배포하지 않는 것이 기준입니다.",
    "license.fontsTitle": "글꼴은 운영체제 기준을 따릅니다.",
    "license.fontsBody":
      "이 사이트는 외부 웹폰트를 포함하지 않고 운영체제의 시스템 글꼴을 사용합니다. 따라서 글꼴 사용 조건은 각 운영체제와 기기에서 제공하는 라이선스를 따릅니다.",
    "license.noticeTitle": "저작권 고지는 남겨 주세요.",
    "license.noticeBody":
      "코드를 공개하거나 수정해 배포할 때는 원 저작권 고지와 라이선스 안내를 함께 유지하는 것을 권장합니다. 이렇게 하면 출처와 사용 조건이 분명하게 남습니다.",
    "license.permissionTitle": "개인 자산은 먼저 허가를 요청하세요.",
    "license.permissionBody": "사이트 이름, 로고, 이미지, 결제 문구, 개인 소개 문장처럼 소유자 식별과 연결되는 자료를 쓰고 싶다면 먼저 허가를 요청해 주세요.",
    "license.updated": "마지막 업데이트: 2026년 6월 3일",
    "terms.title": "사이트 이용 조건을 짧고 분명하게 정리했습니다.",
    "terms.lead":
      "이 페이지는 프로필 사이트를 읽고, 설정을 저장하고, 피드백과 결제 링크를 여는 방식에 대한 기본 기준을 설명합니다.",
    "terms.mediaLabel": "Terms registry",
    "terms.mediaValue": "읽기, 지원, 제보",
    "terms.summaryUse": "Use",
    "terms.summaryUseValue": "Public reading",
    "terms.summarySupport": "Support",
    "terms.summarySupportValue": "External checkout",
    "terms.summaryData": "Data",
    "terms.summaryDataValue": "Local settings",
    "terms.summaryChanges": "Changes",
    "terms.summaryChangesValue": "Updated here",
    "terms.acceptTitle": "사이트를 계속 이용하면 이 기준에 동의한 것으로 봅니다.",
    "terms.acceptBody":
      "이 사이트는 공개 프로필, 창작 기록, 가격 안내, 설정, 개인정보 안내를 제공하는 정적 웹사이트입니다. 내용을 읽거나 링크를 열면 이 약관과 개인정보 처리방침을 기준으로 이용하는 것으로 봅니다.",
    "terms.contentTitle": "정보는 안내 목적입니다.",
    "terms.contentBody":
      "응급 대응, 개발, 가격, 지원 관련 문구는 사이트 소개와 안내를 위한 것입니다. 전문 의료, 법률, 재정 조언으로 해석하지 말고 중요한 결정에는 공식 기관이나 서비스 제공자의 최신 정보를 확인해 주세요.",
    "terms.checkoutTitle": "결제와 외부 양식은 외부 서비스에서 처리됩니다.",
    "terms.checkoutBody":
      "Stripe Checkout, Google Forms, 공유 서비스처럼 외부 화면으로 이동하는 기능은 해당 서비스의 약관과 개인정보 기준을 따릅니다. 이 사이트는 카드 번호나 외부 양식 응답을 직접 처리하지 않습니다.",
    "terms.localTitle": "설정은 브라우저 안에서 관리됩니다.",
    "terms.localBody":
      "테마, 언어, 표시 밀도, 결제 차단 같은 설정은 같은 브라우저의 localStorage에 저장됩니다. Settings 또는 Usage 페이지에서 사이트 데이터를 정리할 수 있습니다.",
    "terms.fairUseTitle": "공정한 사용을 부탁드립니다.",
    "terms.fairUseBody":
      "사이트를 방해하거나, 자동 요청으로 과도한 부하를 만들거나, 이미지와 로고 같은 개인 자산을 허가 없이 복제하지 말아 주세요. 코드와 자산의 재사용 기준은 License 페이지에서 확인할 수 있습니다.",
    "terms.contactTitle": "문제가 있으면 Support로 알려주세요.",
    "terms.contactBody":
      "깨진 링크, 잘못된 문구, 결제 접근 문제, 개인정보 관련 요청은 Support 페이지에서 피드백으로 남길 수 있습니다. 필요한 경우 이 약관은 더 명확하게 업데이트될 수 있습니다.",
    "terms.updated": "마지막 업데이트: 2026년 6월 7일",
    "feedback.warningTitle": "외부 양식으로 이동합니다.",
    "feedback.warningBody": "Google Forms가 새 페이지에서 열립니다. 이름이나 연락처 같은 개인정보는 필요한 경우에만 입력해 주세요.",
    "feedback.cancel": "취소",
    "feedback.continue": "계속하기",
    "updates.eyebrow": "Latest updates",
    "updates.title": "최근 바뀐 내용을 한눈에 봅니다.",
    "updates.lead": "사이드바, 접근성, 쿠키 설정처럼 바로 체감되는 변경 사항을 최신 순서로 정리했습니다.",
    "updates.summaryNav": "Sidebar",
    "updates.summaryNavValue": "최신 업데이트 추가",
    "updates.summaryPrivacy": "Privacy",
    "updates.summaryPrivacyValue": "쿠키 설정 팝업",
    "updates.summaryAccess": "Access",
    "updates.summaryAccessValue": "Accessibility 페이지",
    "updates.latestLabel": "2026.06.10",
    "updates.latestTitle": "사이드바에 최신 업데이트를 추가했습니다.",
    "updates.latestBody": "모든 페이지의 사이드바 상단에서 최신 업데이트 페이지로 바로 이동할 수 있게 했습니다.",
    "updates.cookieTitle": "쿠키 설정 팝업을 넣었습니다.",
    "updates.cookieBody": "설정 페이지에서 필수 쿠키와 설정 저장 쿠키 상태를 확인하고, 설정 저장 쿠키를 직접 켜거나 끌 수 있습니다.",
    "updates.accessTitle": "Accessibility 페이지를 추가했습니다.",
    "updates.accessBody": "키보드 이동, 대비, 언어, 표시 밀도, Kid mode 같은 접근성 지원 범위를 별도 페이지로 정리했습니다.",
    "updates.nextTitle": "다음 점검",
    "updates.nextBody": "사이드바 항목이 늘어난 만큼 모바일 메뉴와 접힌 사이드바 상태의 간격을 계속 점검합니다.",
    "updates.openSettings": "설정 열기",
    "updates.openAccessibility": "Accessibility 열기",
    "settings.title": "설정 관리 콘솔",
    "settings.lead":
      "공개 상태, 표시 방식, 성능, 저장소 설정을 한 화면에서 관리합니다.",
    "settings.overviewProfile": "Profile",
    "settings.overviewProfileValue": "Public",
    "settings.overviewTheme": "Theme",
    "settings.overviewThemeValue": "Synced",
    "settings.overviewPayments": "Payments",
    "settings.overviewPaymentsAllowed": "허용",
    "settings.overviewPaymentsBlocked": "차단됨",
    "settings.overviewStorage": "Storage",
    "settings.sidebarEyebrow": "Workspace",
    "settings.sidebarTitle": "Controls",
    "settings.groupIdentity": "Identity & access",
    "settings.groupIdentityBody": "공개 프로필과 방문자 연결 방식을 관리합니다.",
    "settings.groupExperience": "Experience",
    "settings.groupExperienceBody": "방문자가 보는 화면의 테마, 언어, 접근성을 조정합니다.",
    "settings.groupBeta": "Beta lab",
    "settings.groupBetaBody": "아직 실험 중인 기능을 분리해서 켜거나 끕니다.",
    "settings.groupSystem": "System",
    "settings.groupSystemBody": "렌더링, 저장용량, 브라우저 캐시를 관리합니다.",
    "settings.groupBrand": "Brand system",
    "settings.groupBrandBody": "강조 컬러와 화면 밀도를 사이트 톤에 맞춥니다.",
    "settings.profileTab": "Profile",
    "settings.privacyTab": "Privacy",
    "settings.paymentTab": "Payments",
    "settings.displayTab": "Display",
    "settings.navigationTab": "Navigation",
    "settings.notificationsTab": "Notifications",
    "settings.betaTab": "Beta",
    "settings.languageTab": "Language",
    "settings.accessibilityTab": "Accessibility",
    "settings.performanceTab": "Performance",
    "settings.storageTab": "Storage",
    "settings.accentTab": "Accent",
    "settings.layoutTab": "Layout",
    "settings.profileTitle": "프로필 공개",
    "settings.profileBody": "검색과 공유 링크에서 역할과 소개 문구를 표시합니다.",
    "settings.contactTitle": "연락처 표시",
    "settings.contactBody": "Feedback 탭을 통해 문의와 개선 의견을 받을 수 있게 안내합니다.",
    "settings.profileOn": "프로필 공개 켜짐",
    "settings.profileOff": "프로필 공개 꺼짐",
    "settings.contactOn": "연락처 표시 켜짐",
    "settings.contactOff": "연락처 표시 꺼짐",
    "settings.notificationsTitle": "알림",
    "settings.notificationsBody": "중요한 사이트 업데이트를 이 브라우저에서 알림으로 받을 수 있게 합니다.",
    "settings.notificationsOn": "알림 켜짐",
    "settings.notificationsOff": "알림 꺼짐",
    "settings.notificationsReady": "준비됨",
    "settings.notificationsAllowed": "허용됨",
    "settings.notificationsBlocked": "브라우저에서 차단됨",
    "settings.notificationsUnsupported": "지원되지 않음",
    "settings.notificationsTest": "테스트",
    "settings.notificationsTestTitle": "테스트 알림",
    "settings.notificationsTestBody": "알림이 정상적으로 표시됩니다.",
    "settings.betaTitle": "베타 기능",
    "settings.betaBody": "새 검색 UI, Activity 필터, 모바일 액션 커스터마이즈 같은 실험 기능을 먼저 사용합니다.",
    "settings.betaOn": "베타 기능 켜짐",
    "settings.betaOff": "베타 기능 꺼짐",
    "settings.betaStatusOn": "On",
    "settings.betaStatusOff": "Off",
    "settings.betaOpen": "기능 보기",
    "settings.betaDialogTitle": "베타 기능",
    "settings.betaDialogBody": "실험 중인 기능을 선택해서 이 브라우저에서 먼저 사용합니다.",
    "settings.betaRedesignTitle": "설정 페이지 재디자인",
    "settings.betaRedesignBody": "설정 페이지를 더 현대적인 분할 레이아웃과 조용한 패널 디자인으로 바꿉니다.",
    "settings.betaRedesignApply": "적용",
    "settings.betaRedesignActive": "끄기",
    "settings.paymentBlockTitle": "결제 차단",
    "settings.paymentBlockBody": "이 설정을 켜면 Pricing 페이지의 유료 플랜 버튼이 외부 Stripe checkout으로 이동하지 않습니다.",
    "settings.paymentBlockOn": "결제 차단 켜짐",
    "settings.paymentBlockOff": "결제 차단 꺼짐",
    "settings.sidebarNavOn": "사이드바 내비게이션 켜짐",
    "settings.sidebarNavOff": "사이드바 내비게이션 꺼짐",
    "settings.navigationEnabled": "Sidebar",
    "settings.navigationDisabled": "Top bar",
    "settings.navigationConfigure": "설정",
    "settings.navigationDialogTitle": "내비게이션 레이아웃 선택",
    "settings.navigationDialogBody": "데스크톱 화면에서 메뉴를 왼쪽에 고정할지, 상단에 간단하게 둘지 선택합니다.",
    "settings.navigationSidebarTitle": "Sidebar",
    "settings.navigationSidebarBody": "메뉴가 왼쪽에 세로로 고정되어 페이지 이동이 빠릅니다.",
    "settings.navigationTopbarTitle": "Top bar",
    "settings.navigationTopbarBody": "메뉴가 위쪽에 모여 화면을 더 넓게 사용할 수 있습니다.",
    "settings.fastRenderOn": "빠른 렌더링 켜짐",
    "settings.fastRenderOff": "빠른 렌더링 꺼짐",
    "settings.fastRenderStandard": "Standard",
    "settings.fastRenderFast": "Fast",
    "settings.kidModeOn": "Kid mode 켜짐",
    "settings.kidModeOff": "Kid mode 꺼짐",
    "settings.contextMenuOn": "커스텀 우클릭 메뉴 켜짐",
    "settings.contextMenuOff": "커스텀 우클릭 메뉴 꺼짐",
    "settings.contextMenuConfigure": "설정",
    "settings.themeTitle": "테마 모드",
    "settings.themeBody": "프로필 화면을 다크 또는 밝기 끄기 모드로 관리합니다.",
    "settings.themeScopeLabel": "호환 상태",
    "settings.themeScopeValue": "모든 페이지가 정규화된 테마 토큰을 사용합니다.",
    "settings.lightsOff": "밝기 끄기",
    "settings.themeDark": "다크",
    "settings.navigationTitle": "사이드바 내비게이션",
    "settings.navigationBody": "데스크톱 화면에서 상단 메뉴를 왼쪽 세로 버튼 리스트로 표시합니다.",
    "settings.languageTitle": "언어",
    "settings.languageBody": "프로필과 설정 화면에 표시되는 언어를 선택합니다.",
    "settings.languageKorean": "한국어",
    "settings.languageEnglish": "English",
    "settings.fastRenderTitle": "빠른 렌더링",
    "settings.fastRenderBody": "블러, 그림자, 애니메이션을 줄여 화면을 더 가볍게 표시합니다.",
    "settings.kidModeTitle": "Kid mode",
    "settings.kidModeBody": "읽기 편한 화면을 위해 글자 크기와 움직임 감소 정도를 단계별로 선택합니다.",
    "settings.kidModeOffLevel": "Off",
    "settings.kidModeSoftLevel": "Soft",
    "settings.kidModeStrongLevel": "Strong",
    "settings.accessibilityTitle": "접근성 안내",
    "settings.accessibilityBody": "키보드 이동, 색 대비, 언어, Kid mode, 움직임 감소 지원 범위를 확인합니다.",
    "settings.accessibilityOpen": "Accessibility 열기",
    "settings.contextMenuTitle": "커스텀 우클릭 메뉴",
    "settings.contextMenuBody": "빠른 작업을 담은 디자인 우클릭 메뉴를 사용합니다.",
    "settings.contextMenuDialogTitle": "우클릭 메뉴 방식 선택",
    "settings.contextMenuDialogBody": "빠른 작업이 필요한 경우 커스텀 메뉴를 사용하고, 브라우저 기본 동작을 우선하려면 기본 메뉴를 선택합니다.",
    "settings.contextMenuCustomTitle": "Custom menu",
    "settings.contextMenuCustomBody": "Copy, share, QR code, search, print 같은 사이트 작업을 한 메뉴에서 엽니다.",
    "settings.contextMenuNativeTitle": "Browser default",
    "settings.contextMenuNativeBody": "브라우저가 제공하는 기본 우클릭 메뉴를 그대로 사용합니다.",
    "settings.cookieSettingsTitle": "쿠키 설정",
    "settings.cookieSettingsBody": "브라우저 저장 안내 쿠키를 팝업에서 켜거나 끕니다. 필수 항목은 사이트 기본 동작을 위해 유지됩니다.",
    "settings.cookieSettingsButton": "쿠키 설정",
    "settings.cookieDialogTitle": "쿠키 설정",
    "settings.cookieDialogBody": "이 사이트에서 사용하는 쿠키 종류를 선택합니다. 현재 광고나 분석 쿠키는 사용하지 않습니다.",
    "settings.cookieEssentialTitle": "필수 쿠키",
    "settings.cookieEssentialBody": "보안과 기본 동작에 필요한 항목입니다. 이 항목은 끌 수 없습니다.",
    "settings.cookieEssentialOn": "필수 쿠키 켜짐",
    "settings.cookiePreferenceTitle": "설정 저장 쿠키",
    "settings.cookiePreferenceBody": "브라우저 저장 안내를 확인했다는 선택을 이 브라우저에 저장합니다.",
    "settings.cookiePreferenceOn": "설정 저장 쿠키 켜짐",
    "settings.cookiePreferenceOff": "설정 저장 쿠키 꺼짐",
    "settings.cookieStatusOn": "설정 저장 쿠키가 켜져 있습니다.",
    "settings.cookieStatusOff": "설정 저장 쿠키가 꺼져 있습니다.",
    "settings.cookieLearnMore": "자세히 알아보기",
    "quickSettings.eyebrow": "Quick settings",
    "quickSettings.title": "빠른 설정",
    "quickSettings.body": "자주 쓰는 표시 설정만 빠르게 조정합니다. 자세한 항목은 전체 설정에서 관리합니다.",
    "quickSettings.general": "General",
    "quickSettings.controls": "Controls",
    "quickSettings.themeHint": "차분한 표시 테마를 선택합니다.",
    "quickSettings.languageHint": "사이트 표시 언어를 전환합니다.",
    "quickSettings.notificationsHint": "이 브라우저의 사이트 알림 권한을 요청합니다.",
    "quickSettings.fastRenderHint": "블러, 그림자, 애니메이션을 줄입니다.",
    "quickSettings.fullSettings": "전체 설정 열기",
    "quickSettings.statusReady": "빠른 설정이 준비되었습니다.",
    "quickSettings.statusSaved": "설정이 저장되었습니다.",
    "quickSettings.statusNotificationsOn": "알림 설정이 켜졌습니다.",
    "quickSettings.statusNotificationsOff": "알림 설정이 꺼졌습니다.",
    "settings.clearCacheTitle": "브라우저 캐시 정리",
    "settings.clearCacheBody": "이 사이트에 저장된 테마, 언어, 표시 설정을 삭제하고 기본값으로 되돌립니다.",
    "settings.clearCacheButton": "캐시 정리",
    "settings.clearCacheWarning": "저장된 테마, 언어, 표시 설정이 모두 삭제됩니다. 계속하시겠습니까?",
    "settings.clearCacheCancel": "취소",
    "settings.clearCacheConfirm": "정리하기",
    "settings.clearCacheDone": "저장된 설정을 정리했습니다.",
    "settings.storageUsageTitle": "저장용량",
    "settings.storageUsageLoading": "저장용량을 확인하는 중입니다.",
    "settings.storageUsageUnsupported": "이 브라우저에서는 저장용량 표시를 지원하지 않습니다.",
    "usage.limitsTitle": "일반 사용 한도",
    "usage.dailyLimitTitle": "5시간 사용 한도",
    "usage.weeklyLimitTitle": "주간 사용 한도",
    "usage.remainingPercent": "{percent}% 남음",
    "usage.resetAt": "{time} 초기화",
    "usage.resetOn": "{date} 초기화",
    "usage.learnMore": "Learn more about usage limits",
    "usage.learnDialogTitle": "사용 한도 작동 방식",
    "usage.learnDialogBody": "이 한도는 서버 계정이 아니라 현재 브라우저에서만 계산됩니다. 처음 접속한 순간부터 5시간 한도와 7일 주간 한도가 시작되고, 기간이 지나면 자동으로 새 한도로 초기화됩니다.",
    "usage.learnPointLocalTitle": "브라우저 기준",
    "usage.learnPointLocalBody": "기록은 이 기기의 브라우저 저장소에만 남습니다.",
    "usage.learnPointResetTitle": "자동 초기화",
    "usage.learnPointResetBody": "5시간 또는 7일 창이 지나면 다음 접속 시 새 창이 시작됩니다.",
    "usage.learnPointPrivateTitle": "서버 저장 없음",
    "usage.learnPointPrivateBody": "로그인 계정이나 결제 기록과 연결되지 않습니다.",
    "usage.upgradeTitle": "더 많은 한도를 원하시나요?",
    "usage.upgradeButton": "요금제 업그레이드",
    "usage.settingsTitle": "사용량 페이지",
    "usage.settingsBody": "5시간 한도와 주간 한도를 Usage 페이지에서 확인합니다.",
    "usage.open": "Usage 열기",
    "usage.summaryValue": "페이지 이동",
    "settings.accentTitle": "강조 컬러",
    "settings.accentBody": "버튼, 진행 바, 포커스 표시, 지원되는 페이지의 링크 색상에 사용할 포인트 컬러를 선택합니다.",
    "settings.accentScopeLabel": "적용 범위",
    "settings.accentScopeValue": "공통 컨트롤과 지원되는 페이지 강조 요소",
    "settings.accentNeutral": "Neutral",
    "settings.accentBlue": "Blue",
    "settings.accentGreen": "Green",
    "settings.accentRose": "Rose",
    "settings.accentOrange": "Orange",
    "settings.accentPurple": "Purple",
    "settings.accentProGold": "Pro Gold",
    "settings.accentTeamCyan": "Team Cyan",
    "settings.premiumLocked": "이 강조 컬러는 후원 후 사용할 수 있습니다.",
    "settings.densityTitle": "화면 밀도",
    "settings.densityBody": "프로필 정보와 작업 목록의 간격을 선택합니다.",
    "settings.densityCompact": "Compact",
    "settings.densityComfortable": "Comfortable",
    "settings.densitySpacious": "Spacious",
    "info.licensesTab": "오픈소스 라이선스",
    "info.privacyTab": "개인정보처리방침",
    "info.copyrightTab": "저작권 정보",
    "info.licensesBody":
      "이 프로필 템플릿은 외부 프레임워크 없이 HTML, CSS, JavaScript로 제작되었습니다. 사용된 시스템 글꼴은 각 운영체제의 라이선스를 따릅니다.",
    "info.privacyBody":
      "이 사이트는 별도의 서버 저장 없이 브라우저의 로컬 저장소를 사용해 테마, 언어, 설정 상태만 보관합니다.",
    "info.copyrightBody":
      "© 2026 Profile Site. 모든 프로필 문구, 이미지, 구성 요소의 권리는 해당 소유자에게 있습니다.",
    "plans.free": "Free",
    "plans.freePrice": "₩0",
    "plans.pro": "Pro",
    "plans.proPrice": "Stripe에서 확인",
    "plans.team": "Team",
    "plans.teamPrice": "Stripe에서 확인",
    "plans.ultra": "Ultra",
    "plans.ultraPrice": "Stripe에서 확인",
    "plans.monthly": "월간",
    "plans.recommended": "추천",
    "plans.topTier": "최상위",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "프로필 활용 방식에 맞게 선택하세요.",
    "pricing.lead":
      "Free는 첫 접속 기준 5시간 한도와 주간 한도를 제공합니다. 한도 이후에는 필요한 경우 유료 checkout을 선택할 수 있습니다.",
    "pricing.adaptiveNote": "사용 한도는 현재 브라우저에서만 계산되며, 유료 금액은 Stripe에서 확인됩니다.",
    "pricing.summaryCheckout": "Checkout",
    "pricing.summaryCheckoutValue": "Stripe 테스트 링크",
    "pricing.summaryCurrency": "Currency",
    "pricing.summaryCurrencyValue": "결제창에서 최종 확인",
    "pricing.summaryAccess": "Access",
    "pricing.summaryAccessValue": "한도 후 checkout",
    "pricing.freeBody": "기본 플랜입니다. 현재 브라우저에서 5시간 한도와 주간 한도를 확인할 수 있습니다.",
    "pricing.freeOne": "5시간 사용 한도",
    "pricing.freeTwo": "주간 사용 한도",
    "pricing.freeThree": "첫 접속 시각 기준 자동 초기화",
    "pricing.freeFour": "한도 소진 시 Pricing 페이지로 이동",
    "pricing.chooseFree": "Free로 시작",
    "pricing.proBody": "무료 한도를 모두 사용한 뒤 Pro checkout으로 이어지는 개인용 유료 플랜입니다.",
    "pricing.proOne": "무료 한도 후 Pro checkout 경로",
    "pricing.proTwo": "교육/자격 정보 섹션",
    "pricing.proThree": "Pro 전용 강조 컬러",
    "pricing.proFour": "개인 프로필 확장용 구성",
    "pricing.choosePro": "Pro 선택",
    "pricing.teamBody": "무료 한도 이후 팀 단위 프로필, 공동 소개, 활동 정리를 선택할 수 있는 checkout 플랜입니다.",
    "pricing.teamOne": "팀 소개와 공동 프로필 구성",
    "pricing.teamTwo": "구성원별 역할 및 활동 정리",
    "pricing.teamThree": "교육, 프로젝트, 운영 정보 구조화",
    "pricing.teamFour": "Team 전용 컬러와 우선 피드백 흐름",
    "pricing.chooseTeam": "Team 선택",
    "pricing.ultraBody": "무료 한도 이후 가장 높은 우선순위와 공동 기획 참여를 원하는 사용자를 위한 최상위 checkout 플랜입니다.",
    "pricing.ultraOne": "First, the response",
    "pricing.ultraTwo": "Request priority processing",
    "pricing.ultraThree": "Participating in joint planning",
    "pricing.ultraFour": "Unreleased cuts",
    "pricing.chooseUltra": "Ultra 선택",
    "pricing.subscribeEyebrow": "Subscription",
    "pricing.subscribeWarningTitle": "외부 결제 페이지로 이동합니다.",
    "pricing.subscribeWarningBody": "선택한 결제 페이지가 새 페이지에서 열립니다. 결제 전 플랜 이름과 금액을 다시 확인해 주세요.",
    "pricing.subscribeCancel": "취소",
    "pricing.subscribeContinue": "계속하기",
    "pricing.paymentBlockedTitle": "결제가 차단되어 있습니다.",
    "pricing.paymentBlockedBody": "Settings에서 결제 차단이 켜져 있어 Stripe checkout으로 이동하지 않습니다.",
    "pricing.paymentBlockedClose": "확인",
    "pricing.compareEyebrow": "Compare",
    "pricing.compareTitle": "기능 비교",
    "pricing.compareFeature": "기능",
    "pricing.comparePlanPicker": "무료 사용량 창",
    "pricing.comparePlanHint": "첫 접속 기준 5시간 및 주간 한도",
    "pricing.compareFreeBadge": "Starter",
    "pricing.comparePaidBadge": "Stripe checkout",
    "pricing.compareForever": "/ 계속 사용",
    "pricing.compareFreeNote": "로컬 사용량 추적과 기본 프로필 도구를 제공합니다.",
    "pricing.compareProNote": "무료 한도 이후 개인용 checkout 경로를 제공합니다.",
    "pricing.compareTeamNote": "공동 프로필과 우선 피드백 흐름을 제공합니다.",
    "pricing.compareUltraBar": "Top response",
    "pricing.compareUltraNote": "가장 높은 우선순위와 공동 기획 참여를 제공합니다.",
    "pricing.compareGuarantee": "30일 환불 보장",
    "pricing.compareCoreFeatures": "프로필 기능",
    "pricing.compareTeamFeatures": "팀 및 우선순위",
    "pricing.compareProfile": "개인 프로필 구성",
    "pricing.compareUsage": "브라우저 사용량 한도",
    "pricing.compareFreeUsage": "5시간 + 주간 한도",
    "pricing.compareCheckoutUsage": "한도 후 checkout",
    "pricing.compareExperience": "현장 경험 정리",
    "pricing.compareCredentials": "교육/자격 섹션",
    "pricing.compareAccent": "프리미엄 강조 컬러",
    "pricing.compareTeam": "팀/기관 소개",
    "pricing.compareBasic": "기본",
    "pricing.compareAdvanced": "확장",
    "pricing.compareOrg": "조직형",
    "pricing.compareTopTier": "최상위",
    "pricing.compareUnlimited": "무제한",
    "pricing.compareYes": "포함",
    "pricing.compareNo": "없음",
    "pricing.compareUltraPurple": "Ultra Purple",
    "pricing.comparePriority": "요청 우선 처리",
    "pricing.comparePriorityValue": "우선",
    "pricing.compareTopPriority": "최우선",
    "pricing.comparePlanning": "공동 기획 참여",
    "pricing.compareUnreleased": "미공개 컷",
    "pricing.faqEyebrow": "FAQ",
    "pricing.faqTitle": "자주 묻는 질문",
    "pricing.faqOneQuestion": "결제는 어디에서 진행되나요?",
    "pricing.faqOneAnswer": "Pro, Team, Ultra 플랜은 Stripe checkout 링크를 통해 진행됩니다.",
    "pricing.faqTwoQuestion": "무료 사용 한도를 모두 쓰면 어떻게 되나요?",
    "pricing.faqTwoAnswer":
      "Free 한도를 모두 사용하면 Usage 페이지가 Pricing으로 이동합니다. 현재 유료 플랜은 Stripe checkout 링크 방식이며, 결제 후 자동 한도 해제는 아직 연결되어 있지 않습니다.",
    "pricing.faqThreeQuestion": "가격은 실시간 환율로 바뀌나요?",
    "pricing.faqThreeAnswer":
      "사이트의 가격 카드는 참고 안내이며, 최종 통화와 결제 금액은 Stripe checkout에서 확인해야 합니다.",
    "pricing.faqFourQuestion": "사용 한도는 실제 과금인가요?",
    "pricing.faqFourAnswer":
      "아니요. 사용 한도는 브라우저 안에서만 계산되는 로컬 표시입니다. 실제 결제는 Stripe checkout에서만 진행됩니다.",
    "error.eyebrow": "404",
    "error.code": "404_NOT_FOUND",
    "error.title": "길을 잃은 주소입니다.",
    "error.body": "이 경로는 이동되었거나 아직 공개되지 않았습니다. 아래에서 가장 가까운 목적지를 바로 열 수 있습니다.",
    "error.home": "홈으로 이동",
    "error.pricing": "Pricing 보기",
    "error.feedback": "문제 알리기",
    "error.consoleLabel": "Route recovery",
    "error.statusLabel": "Last check",
    "error.statusValue": "일치하는 경로 없음",
    "offline.eyebrow": "Offline",
    "offline.code": "NETWORK_OFFLINE",
    "offline.title": "네트워크 또는 Wi-Fi 연결이 없습니다.",
    "offline.body": "기기가 오프라인 상태라 페이지를 불러올 수 없습니다. 연결을 확인한 뒤 다시 시도해 주세요.",
    "offline.retry": "다시 시도",
    "offline.home": "캐시된 홈 열기",
    "offline.panelLabel": "Connection status",
    "offline.panelValue": "네트워크 대기 중",
    "offline.panelHint": "이 페이지는 사이트를 한 번 방문한 뒤부터 오프라인 상태에서 표시될 수 있습니다.",
    "offline.tipOneTitle": "Wi-Fi 또는 모바일 데이터를 확인하세요",
    "offline.tipOneBody": "Wi-Fi에 다시 연결하거나 모바일 데이터를 켜고, 비행기 모드가 꺼져 있는지 확인해 주세요.",
    "offline.tipTwoTitle": "연결 후 다시 불러오세요",
    "offline.tipTwoBody": "네트워크가 복구되면 다시 시도 버튼을 눌러 주세요. 캐시된 페이지는 오프라인에서도 열릴 수 있습니다.",
    "offline.tipThreeTitle": "일부 기능은 인터넷이 필요합니다",
    "offline.tipThreeBody": "외부 공유, Forms, 결제 링크, QR 이미지 열기 기능은 네트워크 연결이 필요할 수 있습니다.",
    "errorFaq.eyebrow": "FAQ",
    "errorFaq.title": "자주 묻는 질문",
    "errorFaq.oneQuestion": "왜 404 페이지가 보이나요?",
    "errorFaq.oneAnswer":
      "주소가 잘못 입력되었거나, 페이지 이름이 바뀌었거나, 아직 공개되지 않은 경로일 수 있습니다.",
    "errorFaq.twoQuestion": "어디로 이동하면 되나요?",
    "errorFaq.twoAnswer":
      "Home, Pricing, Bio, FAQ, Settings 메뉴를 통해 준비된 페이지로 이동할 수 있습니다.",
    "errorFaq.threeQuestion": "문제가 계속되면 어떻게 하나요?",
    "errorFaq.threeAnswer":
      "상단의 Feedback 탭이나 Google Forms 링크를 통해 잘못된 주소를 알려주세요.",
    "errorFaq.fourQuestion": "광고 차단기가 영향을 줄 수 있나요?",
    "errorFaq.fourAnswer":
      "일부 광고 차단기는 버튼, 커뮤니티 링크, 안내 배너 같은 요소를 숨길 수 있습니다. 기능이 보이지 않으면 이 사이트를 허용 목록에 추가해 주세요.",
    "errorRoute.homeLabel": "Start over",
    "errorRoute.homeTitle": "Home",
    "errorRoute.homeBody": "최근 안내와 주요 링크로 돌아갑니다.",
    "errorRoute.faqLabel": "Need context",
    "errorRoute.faqTitle": "FAQ",
    "errorRoute.faqBody": "자주 묻는 질문에서 흐름을 다시 확인합니다.",
    "errorRoute.settingsLabel": "Adjust site",
    "errorRoute.settingsTitle": "Settings",
    "errorRoute.settingsBody": "테마, 언어, 사용 환경을 조정합니다.",
    "share.copy": "페이지 링크 복사",
    "share.copied": "페이지 링크 복사됨",
    "share.eyebrow": "Share",
    "share.title": "페이지 공유",
    "share.body": "아래 링크를 복사해서 원하는 곳에 공유할 수 있습니다.",
    "share.linkLabel": "공유 링크",
    "share.close": "닫기",
    "share.native": "기기 공유",
    "quickActions.label": "모바일 빠른 액션",
    "quickActions.home": "Home",
    "quickActions.search": "Search",
    "quickActions.share": "Share",
    "quickActions.settings": "Settings",
    "qr.eyebrow": "QR Code",
    "qr.title": "QR 코드 만들기",
    "qr.body": "현재 페이지 링크를 스캔 가능한 QR 코드로 표시합니다.",
    "qr.alt": "현재 페이지 링크 QR 코드",
    "qr.openImage": "Open new tab image",
    "qr.copy": "링크 복사",
    "qr.copied": "QR 링크 복사됨",
    "qr.close": "닫기",
    "source.eyebrow": "Source",
    "source.title": "페이지 소스",
    "source.body": "현재 페이지의 HTML 소스를 사이트 안에서 확인합니다.",
    "source.meta": "Current page",
    "source.loading": "소스를 불러오는 중입니다.",
    "source.copy": "소스 복사",
    "source.copied": "소스가 복사되었습니다.",
    "source.close": "닫기",
    "source.unavailable": "소스를 불러올 수 없어 현재 DOM 스냅샷을 표시합니다.",
    "print.eyebrow": "Print",
    "print.title": "인쇄 설정",
    "print.body": "인쇄 전용 레이아웃으로 버튼, 메뉴, 팝업을 숨기고 본문을 정리합니다.",
    "print.optionCleanTitle": "Clean layout",
    "print.optionCleanBody": "내비게이션과 인터랙션 UI를 숨깁니다.",
    "print.optionReadableTitle": "Readable text",
    "print.optionReadableBody": "밝은 배경과 선명한 글자색으로 인쇄합니다.",
    "print.optionLinksTitle": "Link friendly",
    "print.optionLinksBody": "브라우저 인쇄 설정에서 PDF 저장도 가능합니다.",
    "print.confirm": "Print",
    "adblock.message":
      "광고 차단기가 일부 사이트 기능을 제한할 수 있습니다. 문제가 보이면 이 사이트를 허용 목록에 추가해 주세요.",
    "adblock.dismiss": "닫기",
    "bio.eyebrow": "Bio",
    "bio.title": "Calm under pressure.",
    "bio.lead":
      "위험한 순간에도 먼저 호흡을 고르고, 현장을 읽고, 필요한 결정을 단정하게 연결합니다.",
    "bio.actionPrinciples": "원칙 보기",
    "bio.actionNotes": "기록 보기",
    "bio.mediaLabel": "Field profile",
    "bio.mediaValue": "준비된 태도, 조용한 판단, 정확한 움직임.",
    "bio.summaryRoleLabel": "Role",
    "bio.summaryRoleValue": "구급대원",
    "bio.summaryFocusLabel": "Field focus",
    "bio.summaryFocusValue": "현장 판단 · 처치 연결",
    "bio.summaryResponseLabel": "Response style",
    "bio.summaryResponseValue": "침착함 · 속도 · 팀워크",
    "bio.summaryBuildLabel": "Creative work",
    "bio.summaryBuildValue": "게임 UI · 도구 · 기록",
    "bio.sectionOneTitle": "현장에서의 태도",
    "bio.sectionOneBody":
      "응급 상황에서는 빠른 판단만큼 차분한 태도가 중요하다고 생각합니다. 환자의 상태를 확인하고, 보호자와 동료에게 필요한 정보를 명확히 전달하며, 안전한 처치가 이어질 수 있도록 현장을 정리합니다.",
    "bio.sectionTwoTitle": "중요하게 생각하는 기준",
    "bio.sectionTwoBody":
      "기본에 충실한 평가, 팀과의 정확한 소통, 환자를 향한 존중을 기준으로 움직입니다. 긴박한 순간일수록 절차와 원칙을 놓치지 않는 것이 더 나은 결과로 이어진다고 믿습니다.",
    "bio.sectionThreeTitle": "앞으로의 방향",
    "bio.sectionThreeBody":
      "현장 경험을 바탕으로 더 나은 응급의료 대응과 교육, 기록 문화에 기여하고 싶습니다. 누군가에게 가장 힘든 순간을 조금 더 안전하게 지나가게 하는 사람이 되는 것이 목표입니다.",
    "bio.principlesEyebrow": "Principles",
    "bio.principlesTitle": "판단은 조용하게, 움직임은 정확하게.",
    "bio.principleOneTitle": "사람이 먼저입니다.",
    "bio.principleOneBody": "모든 판단의 기준은 생명과 안전입니다.",
    "bio.principleTwoTitle": "현장을 읽고 순서를 정합니다.",
    "bio.principleTwoBody": "정보를 모으고, 우선순위를 정해 팀이 움직일 방향을 만듭니다.",
    "bio.principleThreeTitle": "기록하고 개선합니다.",
    "bio.principleThreeBody": "경험을 남겨 다음 대응이 조금 더 안전해지게 합니다.",
    "bio.notesEyebrow": "Field notes",
    "bio.notesTitle": "짧게 남기는 현장 메모",
    "bio.noteOneTitle": "공공 안전 대응 지원",
    "bio.noteOneBody": "혼잡한 공간에서 동선과 위험 요소를 먼저 정리했습니다.",
    "bio.noteTwoTitle": "교통사고 구조 보조",
    "bio.noteTwoBody": "2차 사고 예방과 환자 안정 확보를 우선했습니다.",
    "bio.noteThreeTitle": "기록 체계 정리",
    "bio.noteThreeBody": "반복되는 대응 정보를 더 빠르게 찾을 수 있게 정리했습니다.",
    "bio.directionEyebrow": "Direction statement",
    "bio.directionQuote": "기술은 장비에서, 판단은 경험에서, 신뢰는 태도에서 나옵니다.",
    "bio.directionBody":
      "저는 현장에서 검증된 원칙을 바탕으로 사람과 시스템을 연결하고, 더 안전한 대응 문화를 만드는 쪽으로 나아가고 있습니다.",
    "bio.likesEyebrow": "Interests",
    "bio.likesTitle": "집중하는 것들",
    "bio.likesLead": "이 영역은 나중에 취향이나 관심사가 바뀌면 쉽게 수정할 수 있는 템플릿입니다.",
    "bio.likeOne": "게임 UI & UX",
    "bio.likeTwo": "Roblox 시스템",
    "bio.likeThree": "현장 기록",
    "bio.likeFour": "도구 설계",
    "bio.likeFive": "응급 대응",
    "bio.likeSix": "지식 정리",
    "about.title": "사이트 운영 체계.",
    "about.lead":
      "응급 대응의 태도, 제작 기록, 후원 경로, 개인정보, 설정을 한곳에 모으되 각 정보가 제자리에 있도록 설계한 공개 프로필입니다.",
    "about.principlesButton": "운영 원칙 보기",
    "about.routesButton": "사이트 구조 보기",
    "about.mediaLabel": "Signal",
    "about.mediaValue": "대응, 창작, 신뢰",
    "about.ledgerPurposeLabel": "Purpose",
    "about.ledgerPurposeValue": "공개 프로필",
    "about.ledgerScopeLabel": "Scope",
    "about.ledgerScopeValue": "응급 대응 + 창작",
    "about.ledgerPrivacyLabel": "Privacy",
    "about.ledgerPrivacyValue": "로컬 우선 설정",
    "about.ledgerPaymentsLabel": "Payments",
    "about.ledgerPaymentsValue": "Stripe 외부 결제",
    "about.principlesKicker": "Operating principles",
    "about.principlesTitle": "필요한 순간에 유용한 구조로 유지합니다.",
    "about.principlesLead":
      "이 사이트는 몇 가지 단단한 규칙으로 정리했습니다. 소음을 줄이고, 신뢰 경계를 분명히 하며, 모든 페이지가 자기 역할을 하게 만드는 것입니다.",
    "about.principleOneTitle": "먼저 돕기",
    "about.principleOneBody": "장식보다 명확함과 실용성을 먼저 둡니다.",
    "about.principleTwoTitle": "침착하게 정리하기",
    "about.principleTwoBody": "방문자가 인터페이스와 싸우지 않아도 되도록 정보를 배치합니다.",
    "about.principleThreeTitle": "사실대로 말하기",
    "about.principleThreeBody": "개인정보, 결제, 기능 설명은 검증하기 쉬운 말로 남깁니다.",
    "about.principleFourTitle": "작은 시스템 만들기",
    "about.principleFourBody": "긴 정보는 홈에 몰아넣지 않고 전용 페이지로 분리합니다.",
    "about.principleFiveTitle": "개선할 여지 남기기",
    "about.principleFiveBody": "프로필, 도구, 후원 옵션이 바뀌어도 쉽게 고칠 수 있게 만듭니다.",
    "about.routesKicker": "Route index",
    "about.routesTitle": "각 페이지는 하나의 역할을 맡습니다.",
    "about.routesLead": "자세한 정보가 예측 가능한 전용 라우트에 있기 때문에 홈 화면은 가볍게 유지됩니다.",
    "about.routeHome": "첫 화면과 핵심 이동 경로",
    "about.routeBio": "응급 대응자 프로필, 가치, 관심사",
    "about.routeCreator": "게임 제작과 도구 설계 기록",
    "about.routePricing": "후원형 플랜과 Stripe 결제 링크",
    "about.routeSettings": "테마, 언어, 밀도, 결제 차단 설정",
    "about.routePrivacy": "로컬 데이터와 외부 결제 범위",
    "about.trustTitle": "개인정보. 결제. 신뢰.",
    "about.trustLead":
      "설정은 브라우저에 보관하고, 공개 정책은 전용 페이지에서 설명하며, 카드 정보는 사이트가 직접 다루지 않고 Stripe 결제로 보냅니다.",
    "about.trustLocalTitle": "로컬 설정 우선",
    "about.trustLocalBody": "테마, 언어, 레이아웃 설정은 브라우저 안에 머뭅니다.",
    "about.trustStripeTitle": "Stripe 결제",
    "about.trustStripeBody": "결제 링크는 Stripe가 호스팅하는 체크아웃 페이지로 열립니다.",
    "about.trustControlTitle": "방문자 제어",
    "about.trustControlBody": "설정에는 결제 차단과 보기 편의 제어가 포함됩니다.",
    "about.nextTitle": "다음 방향.",
    "about.nextBody":
      "이 사이트는 차분한 구조를 잃지 않으면서 더 나은 이야기, 더 깔끔한 후원 도구, 더 명확한 공개 문서로 확장할 수 있습니다.",
    "about.nextButton": "Feedback 열기",
    "careerFaq.eyebrow": "FAQ",
    "careerFaq.title": "미국에서 EMT가 되는 방법",
    "careerFaq.lead":
      "주마다 규칙은 다르지만 보통 EMT 교육을 듣고, 시험을 통과한 뒤 주 면허를 신청합니다.",
    "careerFaq.oneQuestion": "1. EMT와 Paramedic 차이는?",
    "careerFaq.oneAnswer":
      "EMT는 기본 응급처치를 맡는 시작 단계입니다. Paramedic은 더 오래 배우고 약물 투여, 심전도 확인, 고급 기도 관리 같은 더 전문적인 처치를 할 수 있습니다.",
    "careerFaq.twoQuestion": "2. 처음 시작할 때 무엇이 필요한가요?",
    "careerFaq.twoAnswer":
      "대부분 고등학교 졸업 또는 GED, CPR/BLS 자격, 신원 조회, 예방접종 기록이 필요할 수 있습니다. 학교와 주마다 다르니 지원 전 확인하세요.",
    "careerFaq.threeQuestion": "3. EMT가 되는 순서는?",
    "careerFaq.threeAnswer":
      "주에서 인정한 EMT 과정을 듣고, 실습을 마친 뒤 NREMT 같은 시험을 봅니다. 시험 후 일할 주에 면허를 신청합니다.",
    "careerFaq.fourQuestion": "4. Paramedic은 얼마나 걸리나요?",
    "careerFaq.fourAnswer":
      "EMT가 된 뒤 보통 1~2년 정도 더 공부합니다. 학교에 따라 임상 실습, 구급차 실습, 국가 시험이 포함됩니다.",
    "careerFaq.fiveQuestion": "5. 주마다 면허가 다른가요?",
    "careerFaq.fiveAnswer":
      "네. 인증 시험을 통과해도 실제로 일하려면 해당 주 면허가 필요합니다. 다른 주로 옮길 때는 추가 조건이 있는지 확인해야 합니다.",
    "careerFaq.sixQuestion": "6. 무엇을 준비하면 좋나요?",
    "careerFaq.sixAnswer":
      "체력, 소통, 침착함, 팀워크가 중요합니다. 환자 개인정보 보호와 지역 응급의료 규칙도 함께 익혀두면 좋습니다.",
    "gameFaq.eyebrow": "FAQ",
    "gameFaq.title": "게임 개발을 시작하는 방법",
    "gameFaq.oneQuestion": "1. 처음에는 무엇을 만들면 좋나요?",
    "gameFaq.oneAnswer":
      "작은 게임 하나를 끝까지 만들어보는 것이 좋습니다. Unity, Godot, Roblox Studio 같은 도구 하나를 고르고 이동, 충돌, 점수, UI부터 연습하세요.",
    "gameFaq.twoQuestion": "2. 어떤 언어부터 배우면 되나요?",
    "gameFaq.twoAnswer":
      "Unity는 C#, Unreal은 C++, Godot은 GDScript 또는 C#, Roblox는 Lua를 많이 씁니다. 처음에는 엔진 하나와 언어 하나만 고르는 편이 쉽습니다.",
    "gameFaq.threeQuestion": "3. 포트폴리오에는 무엇을 넣나요?",
    "gameFaq.threeAnswer":
      "완성한 작은 게임, 플레이 영상, 내가 만든 기능, 해결한 문제를 넣으면 좋습니다. 아이디어보다 직접 플레이 가능한 결과물이 더 중요합니다.",
    "gameFaq.fourQuestion": "4. 혼자 개발해도 괜찮나요?",
    "gameFaq.fourAnswer":
      "네. 처음에는 혼자 해보면 전체 과정을 이해하기 쉽습니다. 이후 작은 팀 프로젝트를 하면 협업 경험을 쌓을 수 있습니다.",
    "meetFaq.eyebrow": "FAQ",
    "meetFaq.title": "연락하거나 만날 수 있나요?",
    "meetFaq.oneQuestion": "1. 직접 만날 수 있나요?",
    "meetFaq.oneAnswer":
      "먼저 온라인으로 연락하는 방식이 좋습니다. 실제 만남은 목적, 일정, 장소, 안전 기준이 분명할 때만 따로 논의할 수 있습니다.",
    "meetFaq.twoQuestion": "2. 어디로 연락하나요?",
    "meetFaq.twoAnswer":
      "Feedback 페이지로 문의하면 됩니다. 급하지 않은 내용은 목적과 필요한 정보를 함께 적어 주세요.",
    "siteFaq.eyebrow": "FAQ",
    "siteFaq.title": "사이트 사용과 운영",
    "siteFaq.deployQuestion": "1. 사이트 배포는 어떻게 하나요?",
    "siteFaq.deployAnswer":
      "GitHub에 파일을 올리고 Vercel에 연결하면 됩니다. 이 사이트는 정적 페이지라 Root Directory만 맞으면 별도 빌드 없이 배포할 수 있습니다.",
    "siteFaq.contactQuestion": "2. 문의는 어디로 보내나요?",
    "siteFaq.contactAnswer":
      "상단 Feedback 탭을 사용하면 됩니다. 문의 목적과 필요한 정보를 짧게 적어 주세요.",
    "siteFaq.feedbackQuestion": "3. 피드백은 어떻게 남기나요?",
    "siteFaq.feedbackAnswer":
      "Feedback 페이지의 Google Forms 버튼으로 보낼 수 있습니다. 버그, 개선 아이디어, 보기 불편한 부분을 적으면 됩니다.",
    "siteFaq.codexQuestion": "4. Codex로 사이트를 개발할 수 있나요?",
    "siteFaq.codexAnswer":
      "네. Codex로 HTML, CSS, JavaScript 사이트를 만들고 디자인 수정, 페이지 추가, 모바일 확인, 배포 전 검사를 할 수 있습니다. 다만 결제, 로그인, 개인정보 처리 기능은 별도 보안 설계와 외부 서비스 설정이 필요합니다.",
    "siteFaq.privacyQuestion": "5. 개인정보는 어떻게 처리되나요?",
    "siteFaq.privacyAnswer":
      "이 사이트는 테마, 언어, 표시 설정만 브라우저에 저장합니다. Google Forms에 입력한 내용은 Google Forms 제출 데이터로 처리됩니다.",
  },
  en: {
    "accessibility.skip": "Skip to main content",
    "nav.search": "Search",
    "nav.groupMain": "Main",
    "nav.groupManage": "Manage",
    "nav.groupTrust": "Trust",
    "nav.groupUtility": "Utility",
    "nav.home": "Home",
    "nav.creator": "Creator",
    "nav.about": "About",
    "nav.aboutUs": "About us",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.pricing": "Pricing",
    "nav.support": "Support",
    "nav.analytics": "Analytics",
    "nav.updates": "Latest updates",
    "nav.activity": "Activity",
    "nav.bio": "Bio",
    "nav.faq": "FAQ",
    "nav.settings": "Settings",
    "nav.accessibility": "Accessibility",
    "nav.sitemap": "Sitemap",
    "nav.trust": "Trust Center",
    "nav.status": "Status",
    "nav.security": "Security",
    "footer.brand": "Emergency Responder Profile",
    "footer.tagline": "Trust, status, privacy, and support links in one place.",
    "usage.nav": "Usage",
    "nav.privacy": "Privacy Policy",
    "nav.license": "License",
    "nav.terms": "Terms",
    "nav.feedback": "Feedback",
    "nav.menu": "Menu",
    "nav.collapseSidebar": "Collapse sidebar",
    "nav.expandSidebar": "Expand sidebar",
    "context.close": "Close",
    "context.copy": "Copy page link",
    "context.textCopy": "Text copy",
    "context.selectAll": "Select all",
    "context.copySelection": "Copy selected text",
    "context.cut": "Cut",
    "context.openLink": "Open link in new tab",
    "context.copyLink": "Copy link address",
    "context.saveImage": "Save image as",
    "context.copyTitle": "Copy page title",
    "context.paste": "Paste",
    "context.search": "Search site",
    "context.share": "Open share",
    "context.qr": "Create QR Code",
    "context.cast": "Cast",
    "context.clipboard": "Clipboard Center",
    "context.top": "Back to top",
    "context.refresh": "Refresh",
    "context.back": "Back",
    "context.forward": "Forward",
    "context.print": "Print page",
    "context.source": "View page source",
    "context.creator": "Open Creator",
    "context.feedback": "Open Feedback",
    "context.settings": "Open settings",
    "toast.copyText": "Text copied.",
    "toast.copyLink": "Link copied.",
    "toast.copyTitle": "Page title copied.",
    "toast.copySource": "Source copied.",
    "toast.copyImage": "Image copied.",
    "toast.cutText": "Selected text cut.",
    "toast.imageSaved": "Image saved.",
    "toast.clipboardSaved": "Saved to Clipboard Center.",
    "toast.clipboardCleared": "Clipboard Center cleared.",
    "toast.notificationsAllowed": "Site notifications allowed.",
    "toast.notificationsBlocked": "Site notifications blocked.",
    "toast.notificationsUnsupported": "This browser does not support site notifications.",
    "toast.notificationsDismissed": "Notification permission was not completed.",
    "search.eyebrow": "Search",
    "search.title": "Search site",
    "search.label": "Search query",
    "clipboard.eyebrow": "Clipboard",
    "clipboard.title": "Clipboard Center",
    "clipboard.body": "Only links, titles, and text copied from this site are temporarily saved in this browser.",
    "clipboard.warning": "Do not leave passwords, tokens, payment details, or other sensitive information in Clipboard Center.",
    "clipboard.warningTitle": "Sensitive information warning",
    "clipboard.warningBody": "Clipboard Center saves copied items in this browser's local storage. Avoid saving passwords, API tokens, payment details, or personal information.",
    "clipboard.warningContinue": "Continue",
    "clipboard.empty": "No copied items saved yet.",
    "clipboard.close": "Close",
    "clipboard.clear": "Clear all",
    "clipboard.copyAgain": "Copy again",
    "clipboard.latest": "Latest copy",
    "clipboard.itemText": "Text",
    "clipboard.itemLink": "Link",
    "clipboard.itemTitle": "Title",
    "clipboard.itemSource": "Source",
    "clipboard.itemSelection": "Selected text",
    "clipboard.itemQr": "QR link",
    "clipboard.itemShare": "Share link",
    "clipboard.itemManual": "Manual copy",
    "search.placeholder": "Try Unity, pricing, or FAQ",
    "search.empty": "Type a query to show related pages.",
    "search.noResults": "No matching results.",
    "search.close": "Close",
    "search.open": "Open",
    "search.pageLead": "Search the main pages from one full-screen surface and jump directly where you need to go.",
    "search.pageHint": "Type a query to sort pages such as Home, Settings, Privacy, and FAQ instantly.",
    "activity.eyebrow": "Activity",
    "activity.title": "Recent activity",
    "activity.lead": "Review page visits and key actions saved only in this browser.",
    "activity.local": "Activity stays on this device.",
    "activity.timeline": "Timeline",
    "activity.visits": "Visits",
    "activity.actions": "Actions",
    "activity.latest": "Latest",
    "activity.emptyTitle": "No activity yet.",
    "activity.emptyBody": "Visit pages or use actions such as share and search to see them here.",
    "activity.clear": "Clear activity",
    "activity.visit": "Page visit",
    "activity.copyLink": "Copied link",
    "activity.openSearch": "Opened search",
    "activity.openShare": "Opened share",
    "activity.openSettings": "Opened settings",
    "sitemap.eyebrow": "Sitemap",
    "sitemap.title": "Sitemap",
    "sitemap.lead": "Browse public pages, settings, legal notes, and support routes from one screen.",
    "sitemap.xmlLink": "Open search-engine XML",
    "sitemap.profileGroup": "Profile",
    "sitemap.toolsGroup": "Tools",
    "sitemap.supportGroup": "Support",
    "sitemap.policyGroup": "Policy",
    "sitemap.settingsTitle": "Sitemap",
    "sitemap.settingsBody": "Review public pages and policy documents from one screen.",
    "sitemap.open": "Open Sitemap",
    "search.trustTitle": "Trust Center",
    "search.trustBody": "Review privacy, security, accessibility, status, and legal notes from one place.",
    "search.statusTitle": "Status",
    "search.statusBody": "Review the current operating status for routes, notifications, storage, and sharing metadata.",
    "search.securityTitle": "Security",
    "search.securityBody": "Review security boundaries for browser storage, cookies, external checkout, and notification permissions.",
    "trust.eyebrow": "Trust Center",
    "trust.title": "Trust and operations information in one place.",
    "trust.lead": "Review privacy, security, accessibility, service status, and legal information in a company-style hub.",
    "trust.summaryLabel": "Current posture",
    "trust.summaryValue": "Local-first, transparent, monitored",
    "trust.summaryBody": "The site runs around browser preferences without login tracking cookies, and keeps payment and feedback service boundaries clear.",
    "trust.securityTitle": "Security notes",
    "trust.securityBody": "Review browser storage, notification permissions, payment links, and external service boundaries.",
    "trust.statusTitle": "Operational status",
    "trust.statusBody": "Summarize core pages, notifications, offline support, and sharing metadata.",
    "trust.privacyTitle": "Privacy handling",
    "trust.privacyBody": "Review local settings storage, cookie notice choices, and feedback input scope.",
    "trust.accessTitle": "Accessibility",
    "trust.accessBody": "Review keyboard movement, contrast, display density, and reduced motion support.",
    "trust.termsTitle": "Use standards",
    "trust.termsBody": "Review site use, external checkout, and feedback submission standards.",
    "trust.sitemapTitle": "Route map",
    "trust.sitemapBody": "Move directly to public pages and policy documents.",
    "status.eyebrow": "Status",
    "status.title": "Check the current site status.",
    "status.lead": "Summarize the operating baseline for core features like a company status page.",
    "status.overallLabel": "Overall status",
    "status.overallValue": "All core pages available",
    "status.updated": "Last internal check: June 15, 2026",
    "status.routesTitle": "Public routes",
    "status.routesBody": "Home, Settings, Privacy, Updates, Search, Activity, Sitemap, Trust routes are expected to serve normally.",
    "status.notificationsTitle": "Notifications",
    "status.notificationsBody": "Browser notification support depends on user permission and browser platform rules.",
    "status.storageTitle": "Local storage",
    "status.storageBody": "Theme, language, consent, activity, and subscription preferences stay in this browser.",
    "status.shareTitle": "Sharing metadata",
    "status.shareBody": "Open Graph and Twitter card metadata are configured for public pages.",
    "security.eyebrow": "Security",
    "security.title": "Security boundaries are explained clearly.",
    "security.lead": "See what this site stores in the browser, what opens through external services, and what visitors control directly.",
    "security.modelLabel": "Security model",
    "security.modelValue": "Local-first controls",
    "security.modelBody": "Sensitive payment data is not stored directly by this site, and notifications and storage follow browser permissions.",
    "security.storageTitle": "Browser storage",
    "security.storageBody": "Theme, language, activity history, and subscription inputs stay in this browser's local storage.",
    "security.cookiesTitle": "Cookies",
    "security.cookiesBody": "Only required behavior and storage-notice acknowledgement cookies are used; advertising and analytics cookies are not currently used.",
    "security.checkoutTitle": "External checkout",
    "security.checkoutBody": "Payment buttons open Stripe-hosted pages, and this site does not directly keep card numbers or authentication details.",
    "security.notificationsTitle": "Notifications",
    "security.notificationsBody": "Site notifications appear only when the visitor allows them in the browser permission prompt.",
    "security.feedbackTitle": "Feedback forms",
    "security.feedbackBody": "Feedback forms follow the external service policy, so visitors should avoid entering sensitive personal data.",
    "security.reportTitle": "Report an issue",
    "security.reportBody": "Use the Feedback route if you notice a security or privacy concern.",
    "cookie.eyebrow": "Privacy",
    "cookie.title": "Browser storage notice",
    "cookie.body":
      "This site stores display preferences like theme, language, and sidebar state in this browser. It does not use login tracking cookies or advertising cookies.",
    "cookie.accept": "Got it",
    "cookie.settings": "View Settings",
    "cookie.learnMore": "Learn more",
    "search.homeTitle": "Home",
    "search.homeBody": "View the emergency response profile intro, core strengths, and sharing tools.",
    "search.creatorTitle": "Creator",
    "search.creatorBody": "Read how to make games with Unity, production workflow, and Unity pricing notes.",
    "search.bioTitle": "Bio",
    "search.bioBody": "Read the bio and editable favorite-things template without a real name.",
    "search.aboutTitle": "About us",
    "search.aboutBody": "Review the site's purpose, structure, and public direction.",
    "search.faqTitle": "FAQ",
    "search.faqBody": "Browse United States EMT guidance, game developer FAQ, and site operation notes.",
    "search.pricingTitle": "Pricing",
    "search.pricingBody": "Compare Free, Pro, Team, and Ultra plans.",
    "search.updatesTitle": "Latest updates",
    "search.updatesBody": "Review recent site changes and the next polish items.",
    "search.activityTitle": "Activity",
    "search.activityBody": "Review and clear recent visits and key actions saved in this browser.",
    "search.sitemapTitle": "Sitemap",
    "search.sitemapBody": "Review main pages, tools, and policy documents from one screen.",
    "sitemap.operationsGroup": "Operations",
    "search.serverErrorTitle": "500 Server Error",
    "search.serverErrorBody": "Use recovery links and status guidance when a temporary server error appears.",
    "search.maintenanceTitle": "Maintenance",
    "search.maintenanceBody": "Review status guidance, return paths, and data-safety notes during planned maintenance.",
    "search.comingSoonTitle": "Coming Soon",
    "search.comingSoonBody": "Preview planned features and pages before they are publicly released.",
    "serverError.code": "500_SERVER_ERROR",
    "serverError.title": "Temporary server error.",
    "serverError.body": "Something went wrong while processing the request. Try again shortly or check the status page for service health.",
    "serverError.home": "Return home",
    "serverError.status": "Check Status",
    "serverError.feedback": "Report issue",
    "serverError.recoveryLabel": "Server recovery status",
    "serverError.consoleLabel": "Service recovery",
    "serverError.lastCheck": "Last check",
    "serverError.statusValue": "Temporary service issue",
    "serverError.routesLabel": "Server error recovery routes",
    "serverError.routeHomeLabel": "Return",
    "serverError.routeHomeBody": "Return to the main page while this issue clears.",
    "serverError.routeStatusLabel": "Health",
    "serverError.routeStatusBody": "Review service status and recent maintenance notes.",
    "serverError.routeFeedbackLabel": "Report",
    "serverError.routeFeedbackBody": "Send details if the same issue keeps happening.",
    "maintenance.eyebrow": "Maintenance",
    "maintenance.code": "SERVICE_MAINTENANCE",
    "maintenance.title": "Service maintenance is in progress.",
    "maintenance.body": "Some features are temporarily being maintained for a more reliable experience. Check status or return shortly.",
    "maintenance.status": "Check Status",
    "maintenance.home": "Return home",
    "maintenance.panelLabel": "Maintenance status",
    "maintenance.windowLabel": "Maintenance window",
    "maintenance.windowValue": "Updating service",
    "maintenance.windowHint": "When maintenance ends, the site will work again without any extra action.",
    "maintenance.tipsLabel": "Maintenance guidance",
    "maintenance.tipOneTitle": "Try again shortly",
    "maintenance.tipOneBody": "During maintenance, some pages or features may be temporarily slow or unavailable.",
    "maintenance.tipTwoTitle": "Check Status",
    "maintenance.tipTwoBody": "Use the status page to review current maintenance or incident notes.",
    "maintenance.tipThreeTitle": "Data protection",
    "maintenance.tipThreeBody": "This maintenance page does not ask for input, payment, or personal information.",
    "comingSoon.menuLabel": "Coming Soon page menu",
    "comingSoon.eyebrow": "Coming Soon",
    "comingSoon.code": "FEATURE_PREVIEW",
    "comingSoon.title": "New features are being prepared.",
    "comingSoon.body": "This page previews unreleased features and upcoming pages. Check the latest updates or send feedback for features you need.",
    "comingSoon.updates": "Latest updates",
    "comingSoon.feedback": "Send feedback",
    "comingSoon.home": "Return home",
    "comingSoon.panelLabel": "Preparation status",
    "comingSoon.panelKicker": "Feature pipeline",
    "comingSoon.panelValue": "Preparing launch",
    "comingSoon.panelHint": "When preparation is complete, this page can point to the real feature.",
    "comingSoon.stagesLabel": "Upcoming feature stages",
    "comingSoon.planTitle": "In planning",
    "comingSoon.planBody": "Define the feature scope, route placement, and supporting copy.",
    "comingSoon.designTitle": "In design",
    "comingSoon.designBody": "Fit the page into the site's neutral style and mobile flow.",
    "comingSoon.testTitle": "In testing",
    "comingSoon.testBody": "Check links, translations, mobile layout, and accessibility before release.",
    "search.settingsTitle": "Settings",
    "search.settingsBody": "Manage theme, language, accent color, context menu, and storage settings.",
    "search.accessibilityTitle": "Accessibility",
    "search.accessibilityBody": "Review keyboard navigation, contrast, language, density, and Kid mode support.",
    "search.privacyTitle": "Privacy Policy",
    "search.privacyBody": "Review local preference storage, external links, and feedback privacy notes.",
    "search.licenseTitle": "Open Source License",
    "search.licenseBody": "Review the license rules for the site code, images, logo, and system fonts.",
    "search.termsTitle": "Terms of Use",
    "search.termsBody": "Review site use, external checkout, feedback, and local settings terms.",
    "search.feedbackTitle": "Feedback",
    "search.feedbackBody": "Send bugs, improvement ideas, and usability feedback through Google Forms.",
    "aria.home": "Home",
    "aria.profileMenu": "Profile menu",
    "aria.termsMenu": "Terms menu",
    "aria.termsSummary": "Terms summary",
    "aria.termsDetails": "Terms details",
    "aria.homeTabs": "Home section tabs",
    "aria.creatorMenu": "Creator menu",
    "aria.bioMenu": "Bio menu",
    "aria.aboutMenu": "About us menu",
    "aria.faqMenu": "FAQ menu",
    "aria.pricingMenu": "Pricing menu",
    "aria.settingsMenu": "Settings menu",
    "aria.updatesMenu": "Latest updates menu",
    "aria.updatesSummary": "Latest updates summary",
    "aria.updatesTimeline": "Latest updates list",
    "aria.activityMenu": "Activity menu",
    "aria.activitySummary": "Activity summary",
    "aria.activityTimeline": "Activity timeline",
    "aria.sitemapMenu": "Sitemap menu",
    "aria.sitemapLinks": "Sitemap links",
    "aria.footerLinks": "Footer links",
    "aria.accessibilityMenu": "Accessibility menu",
    "aria.accessibilitySummary": "Accessibility summary",
    "aria.accessibilityDetails": "Accessibility details",
    "aria.privacyMenu": "Privacy policy menu",
    "aria.licenseMenu": "Open source license menu",
    "aria.feedbackMenu": "Feedback menu",
    "aria.feedbackGuide": "Feedback guide",
    "aria.feedbackTopics": "Feedback topics",
    "aria.feedbackPrivacy": "Privacy note",
    "aria.supportDesk": "Support desk",
    "aria.errorMenu": "Error page menu",
    "aria.offlineMenu": "Offline page menu",
    "aria.profileSummary": "Profile summary",
    "aria.homeLedger": "Home system summary",
    "aria.homeFieldScene": "Field ambulance scene",
    "aria.homeRoutes": "Home primary routes",
    "aria.homeSwitchboard": "Home quick actions",
    "aria.homeLatest": "Home latest updates",
    "aria.homeFeedback": "Home feedback",
    "aria.creatorGuide": "Unity creation guide",
    "aria.creatorPricing": "Unity pricing summary",
    "aria.creatorSummary": "Creator summary",
    "aria.creatorStages": "Creator stage navigation",
    "aria.contactSection": "Go to contact section",
    "aria.workSection": "Go to work section",
    "aria.copyPageLink": "Copy page link",
    "aria.externalShare": "External share options",
    "aria.siteInfo": "Site information",
    "aria.siteInfoTabs": "Site information tabs",
    "aria.scrollControls": "Page scroll controls",
    "aria.scrollTop": "Scroll to top",
    "aria.scrollBottom": "Scroll to bottom",
    "aria.errorRecovery": "404 recovery options",
    "aria.errorRoutes": "Suggested routes",
    "aria.bioContent": "Bio",
    "aria.bioSummary": "Bio summary",
    "aria.aboutSummary": "About us summary",
    "aria.aboutValues": "About us values",
    "aria.aboutSystem": "Site system",
    "aria.aboutTrust": "Privacy and payment trust",
    "aria.aboutNext": "Next direction",
    "aria.likes": "Favorite things",
    "aria.faqTopics": "FAQ topic navigation",
    "aria.emtFaq": "United States EMT FAQ",
    "aria.gameFaq": "Game developer FAQ",
    "aria.meetFaq": "Meeting FAQ",
    "aria.siteFaq": "Site operations FAQ",
    "aria.faqSummary": "FAQ summary",
    "aria.faqFeedback": "FAQ feedback",
    "aria.pricingControls": "Pricing display settings",
    "aria.currency": "Currency selection",
    "aria.pricingInfo": "Pricing information",
    "aria.pricingStripeSummary": "Stripe payment summary",
    "aria.ultraPlan": "Ultra plan",
    "aria.planComparison": "Plan comparison",
    "aria.planComparisonTable": "Plan feature comparison",
    "aria.faq": "Frequently asked questions",
    "aria.settingsPanel": "Profile settings",
    "aria.settingsCategories": "Settings categories",
    "aria.settingsOverview": "Settings status summary",
    "aria.usageMenu": "Usage menu",
    "aria.usageSummary": "Browser usage summary",
    "aria.navLayout": "Navigation layout selection",
    "aria.contextMenuMode": "Context menu mode selection",
    "aria.cookieSettings": "Cookie type selection",
    "aria.themeCompatibility": "Theme compatibility status",
    "aria.privacySummary": "Privacy summary",
    "aria.privacyDetails": "Privacy details",
    "aria.licenseSummary": "License summary",
    "aria.licenseDetails": "License details",
    "aria.offlineStatus": "Connection status",
    "aria.offlineTips": "Offline tips",
    "aria.themeMode": "Theme mode selection",
    "aria.language": "Language selection",
    "aria.kidMode": "Kid mode selection",
    "aria.accent": "Accent color selection",
    "aria.accentCompatibility": "Accent color compatibility status",
    "aria.density": "Display density selection",
    "faqTopics.emt": "EMT",
    "faqTopics.game": "Game Developer",
    "faqTopics.meet": "Meet",
    "faqTopics.site": "Site",
    "faq.heroTitle": "Answers, filed clearly.",
    "faq.heroLead":
      "FAQ topics are organized like a field archive: EMT paths, game development, contact options, and site operations.",
    "faq.heroCtaEmt": "View EMT Questions",
    "faq.heroCtaSite": "View Site Questions",
    "faq.mediaLabel": "Archive",
    "faq.mediaValue": "Career, build, site",
    "faq.summaryTopics": "Topics",
    "faq.summaryAnswers": "Answers",
    "faq.summaryFormat": "Format",
    "faq.summaryFormatValue": "Quick read",
    "faq.summaryUpdated": "Updated",
    "faq.summaryUpdatedValue": "June 3, 2026",
    "faq.topicRailKicker": "Browse by topic",
    "faq.topicEmtBody": "How EMT starts",
    "faq.topicGameBody": "First steps in game dev",
    "faq.topicMeetBody": "How to contact",
    "faq.topicSiteBody": "Deployment and privacy",
    "faq.feedbackKicker": "Still unclear?",
    "faq.feedbackTitle": "If it is not answered, I will add it to the record.",
    "faq.feedbackBody": "Send missing answers, translation issues, or topics that need more detail through Feedback.",
    "faq.feedbackButton": "Send Feedback",
    "home.heroTitle": "Calm response. Clear systems.",
    "home.lead":
      "A public profile portal for emergency response, creation notes, support paths, privacy, and settings, arranged so each signal is easy to find.",
    "home.openBio": "Open Bio",
    "home.openSettings": "Open Settings",
    "home.openCreator": "View Creator",
    "home.openSupport": "Contact Support",
    "home.signalLabel": "Emergency",
    "home.signalValue": "U.S. ambulance at emergency entry",
    "home.ledgerResponseLabel": "Response",
    "home.ledgerResponseValue": "Ready",
    "home.ledgerCreatorLabel": "Creator",
    "home.ledgerCreatorValue": "Tools and games",
    "home.ledgerSupportLabel": "Support",
    "home.ledgerSupportValue": "Stripe links",
    "home.ledgerPrivacyLabel": "Privacy",
    "home.ledgerPrivacyValue": "Local-first controls",
    "home.fieldSceneLabel": "Field scene",
    "home.fieldSceneValue": "A working response moment",
    "home.routesKicker": "Routes",
    "home.routesTitle": "Four entrances, no maze.",
    "home.routesLead": "The homepage works as a map. Deeper details live in dedicated pages so the first view stays focused.",
    "home.routeBioTitle": "Who I am",
    "home.routeBioBody": "Responder profile and interests.",
    "home.routeAboutTitle": "The system",
    "home.routeAboutBody": "Site structure and operating principles.",
    "home.routePricingTitle": "Support plans",
    "home.routePricingBody": "Donation-style plans and payment links.",
    "home.routeSettingsTitle": "Your control",
    "home.routeSettingsBody": "Language, theme, and payment blocking.",
    "home.switchKicker": "Quick switchboard",
    "home.switchTitle": "Frequent actions in one place.",
    "home.actionFeedbackLabel": "Feedback",
    "home.actionFeedbackTitle": "Send feedback",
    "home.actionFaqLabel": "FAQ",
    "home.actionFaqTitle": "Read answers",
    "home.actionCreatorLabel": "Creator",
    "home.actionCreatorTitle": "Creation notes",
    "home.actionPrivacyLabel": "Privacy",
    "home.actionPrivacyTitle": "Review policy",
    "home.actionPaymentsLabel": "Payments",
    "home.actionPaymentsTitle": "Control checkout",
    "home.actionShareLabel": "Share",
    "home.actionShareTitle": "Copy link",
    "home.latestKicker": "Latest",
    "home.latestOneDate": "June 3, 2026",
    "home.latestOneTitle": "Home redesign",
    "home.latestOneBody": "The homepage is now an independent operational portal.",
    "home.latestTwoDate": "June 3, 2026",
    "home.latestTwoTitle": "About and Bio",
    "home.latestTwoBody": "Profile pages now use separate premium design directions.",
    "home.latestThreeDate": "June 3, 2026",
    "home.latestThreeTitle": "Payment controls",
    "home.latestThreeBody": "Settings can manage payment blocking and Stripe link status.",
    "home.feedbackKicker": "Feedback",
    "home.feedbackTitle": "The signal that improves the system.",
    "home.feedbackBody": "Report awkward flows, missing translation, payment access issues, or design balance problems.",
    "home.feedbackButton": "Send Feedback",
    "home.subscribeKicker": "Subscribe",
    "home.subscribeTitle": "Get updates by email.",
    "home.subscribeBody": "Prepare to receive site updates, new writing, and news-style notes by email. For now, this registration is stored in this browser.",
    "home.subscribeEmailLabel": "Email",
    "home.subscribeTopicsLabel": "What to receive",
    "home.subscribeTopicUpdates": "Site updates",
    "home.subscribeTopicNews": "News and announcements",
    "home.subscribeTopicCreator": "Creator notes",
    "home.subscribeButton": "Save subscription",
    "home.subscribeSaved": "Subscription details saved. Real email delivery will activate after a server connection is added.",
    "home.subscribeInvalid": "Enter a valid email address.",
    "home.subscribeNeedTopic": "Choose at least one update type.",
    "creator.eyebrow": "Creator",
    "creator.title": "Build the first playable scene.",
    "creator.lead":
      "A practical Unity workflow that connects the idea, scene structure, objects, C# rules, game feel, testing, and build into one clear production path.",
    "creator.heroCtaWorkflow": "Start Workflow",
    "creator.heroCtaResources": "View Resources",
    "creator.mediaLabel": "Studio asset",
    "creator.mediaValue": "Prototype, code, build",
    "creator.ledgerFocusLabel": "Focus",
    "creator.ledgerFocusValue": "Small playable",
    "creator.ledgerStepsLabel": "Steps",
    "creator.ledgerStepsValue": "7 steps + pricing",
    "creator.ledgerEngineLabel": "Engine",
    "creator.ledgerOutputLabel": "Output",
    "creator.ledgerOutputValue": "Playable build",
    "creator.stageRailKicker": "Browse by stage",
    "creator.stagePlanTitle": "Plan",
    "creator.stagePlanBody": "Core loop and goal",
    "creator.stageBuildTitle": "Build",
    "creator.stageBuildBody": "Scenes, objects, C#",
    "creator.stageTuneTitle": "Tune",
    "creator.stageTuneBody": "Feel and feedback",
    "creator.stageShipTitle": "Ship",
    "creator.stageShipBody": "Testing, build, pricing",
    "creator.stepOneEyebrow": "Step 01",
    "creator.stepOneTitle": "Choose a small idea to start with.",
    "creator.stepOneBody":
      "If you begin with an open world, online multiplayer, or a huge story game, the project becomes heavy very quickly. Your first game should be explainable in one sentence. For example: “the player avoids obstacles to earn points,” “the player collects items in a small map to open a door,” or “the player reaches the goal before time runs out while avoiding enemies.” Once that sentence is clear, the required features naturally become smaller.",
    "creator.stepOnePointA": "Limit core controls to one to three actions such as movement, jumping, or interaction.",
    "creator.stepOnePointB": "The first goal is not a perfect game. It is a small version that can be played from start to finish.",
    "creator.stepOnePointC": "In the idea document, write only the goal, controls, win condition, and fail condition first.",
    "creator.stepTwoEyebrow": "Step 02",
    "creator.stepTwoTitle": "Create the Unity project and scene structure.",
    "creator.stepTwoBody":
      "When creating a new project in Unity Hub, choose a 2D template for a 2D game or a 3D template for a 3D game. After opening the project, you will often use the Scene, Game, Hierarchy, Inspector, and Project windows. The Scene view is where you place the world, and the Game view shows the actual play screen. The Hierarchy lists the objects in the current scene, and the Inspector lets you edit the selected object's settings.",
    "creator.stepTwoPointA": "Create folders such as Scenes, Scripts, Prefabs, Art, Audio, and Materials before the project grows.",
    "creator.stepTwoPointB": "Name scenes by purpose, such as MainMenu, Level01, and GameOver.",
    "creator.stepTwoPointC": "Turn objects you reuse often into Prefabs so they are easier to manage.",
    "creator.stepThreeEyebrow": "Step 03",
    "creator.stepThreeTitle": "Understand GameObjects and Components.",
    "creator.stepThreeBody":
      "In Unity, most things are GameObjects. The player, camera, enemies, floor, items, and buttons can all be GameObjects. A GameObject itself is close to an empty container, while Components provide the actual behavior. Transform controls position, rotation, and scale. Sprite Renderer or Mesh Renderer makes an object visible. Collider and Rigidbody handle collision and physics. Scripts are also attached as Components.",
    "creator.stepThreePointA": "Separate what is visible, what moves, and what collides, then identify which Component handles each part.",
    "creator.stepThreePointB": "A player object often has a renderer, collider, and movement script attached together.",
    "creator.stepThreePointC": "Adjusting values in the Inspector while testing the feel is one of Unity's biggest strengths.",
    "creator.stepFourEyebrow": "Step 04",
    "creator.stepFourTitle": "Use C# scripts to define rules.",
    "creator.stepFourBody":
      "Game behavior in Unity is usually written with C# scripts. At first, do not try to memorize the whole language. Break the work into small goals: receive input, change position, detect collision, increase score, or update UI. Start is commonly used for initialization that runs once, and Update is commonly used for input or state changes that need to be checked every frame.",
    "creator.stepFourPointA": "Split player movement, camera follow, score management, and game state management into separate scripts.",
    "creator.stepFourPointB": "Expose tuning values in the Inspector with public fields or SerializeField.",
    "creator.stepFourPointC": "When an error appears, read the first Console error and check the file name and line number.",
    "creator.stepFiveEyebrow": "Step 05",
    "creator.stepFiveTitle": "Iterate on levels and game feel.",
    "creator.stepFiveBody":
      "Once the features start working, the next step is feel. Movement speed, jump height, enemy speed, camera distance, item placement, and checkpoint positions all shape the player's experience. Unity's Play Mode is strong for this type of iteration. Change values, play the game, and reduce parts that feel too hard, unclear, or boring.",
    "creator.stepFivePointA": "Arrange the opening so the player understands the goal within the first 30 seconds.",
    "creator.stepFivePointB": "Keep restart flow short so failure quickly leads to another attempt.",
    "creator.stepFivePointC": "Difficulty often feels better when adjusted with placement, timing, and recovery chances instead of only adding more enemies.",
    "creator.stepSixEyebrow": "Step 06",
    "creator.stepSixTitle": "Add UI, sound, and feedback.",
    "creator.stepSixBody":
      "A game is not finished with rules alone. The player needs to notice what they did and what changed. Add UI for score, health, objectives, or remaining time. Add sounds for clicks, jumps, collisions, and success. Small feedback such as screen shake, particles, and color changes can make the game feel much more responsive when used briefly and carefully.",
    "creator.stepSixPointA": "UI should be readable first and easy to tap on smaller screens.",
    "creator.stepSixPointB": "Place sound on important actions only to reduce fatigue.",
    "creator.stepSixPointC": "Keep feedback effects short so they do not interrupt play.",
    "creator.stepSevenEyebrow": "Step 07",
    "creator.stepSevenTitle": "Test and build the game.",
    "creator.stepSevenBody":
      "As the game gets closer to completion, problems become harder for the creator to see. Ask someone else to play a short session and watch where they get stuck, which button they expect to press, and whether they want to try again. Then choose the target platform in Build Settings and create a build. PC, WebGL, and mobile each have different control, performance, and screen ratio issues, so check the actual build in the environment where people will play.",
    "creator.stepSevenPointA": "Write bug reports with reproduction steps, expected result, and actual result.",
    "creator.stepSevenPointB": "Before building, remove unused test objects and temporary debug logs.",
    "creator.stepSevenPointC": "Release the first version small, collect feedback, and use it to shape the next version.",
    "creator.pricingEyebrow": "Pricing",
    "creator.pricingTitle": "Understand Unity pricing before you start.",
    "creator.pricingBody":
      "Unity offers plans such as Personal for learners and small indie teams, Pro for professional developers and teams, Enterprise for large organizations, and Industry for industrial real-time 3D applications. If you are learning or making a small game, you can usually begin with the free Personal plan, but businesses above certain revenue or funding thresholds may need a paid plan. Pricing and terms can change, so always check Unity's official pricing page before purchasing.",
    "creator.pricingPointA": "Personal is a free plan that works well for hobbyists, learners, and small indie teams starting out.",
    "creator.pricingPointB": "Pro is a paid seat-based plan for professional developers and teams with larger revenue or funding.",
    "creator.pricingPointC": "Enterprise and Industry are custom plans for larger organizations, industrial 3D use cases, and dedicated support needs.",
    "creator.pricingPointD": "From 2026, Pro and Enterprise pricing and packaging changes may apply, so the latest terms should be checked.",
    "creator.planPersonalTitle": "Personal",
    "creator.planPersonalBody": "Good for starting free, especially for games and entertainment applications.",
    "creator.planProTitle": "Pro",
    "creator.planProBody": "For professional developers and teams, with console publishing and additional cloud features.",
    "creator.planEnterpriseTitle": "Enterprise",
    "creator.planEnterpriseBody": "A custom plan for large organizations with dedicated support and expanded operations features.",
    "creator.planIndustryTitle": "Industry",
    "creator.planIndustryBody": "For non-game industrial real-time 3D, product visualization, and training simulations.",
    "creator.pricingNote":
      "Note: Unity's official pricing page lists Personal as free, Pro as a paid seat-based plan, and Enterprise and Industry as custom pricing. Actual costs may vary by region, taxes, renewal date, and contract terms.",
    "creator.resourcesEyebrow": "Resources",
    "creator.resourcesTitle": "Official resources worth using first",
    "creator.resourcesBody":
      "Unity provides official documentation and Unity Learn resources for core concepts, 2D production, editor usage, scripting, and sample projects. When you get stuck, it is better to search for documentation directly related to the feature you are building instead of watching random videos endlessly.",
    "creator.docsLink": "Unity Documentation",
    "creator.learnLink": "Unity Learn",
    "creator.twoDLink": "Unity 2D Tools",
    "feedback.eyebrow": "Feedback",
    "feedback.title": "The signal that makes the site more accurate.",
    "feedback.lead": "Report broken screens, awkward copy, or flows that block payments and settings. Even a short note can guide the next fix.",
    "feedback.cta": "Leave feedback on Google Forms",
    "feedback.panelEyebrow": "Signal desk",
    "feedback.panelMetric": "3 queues",
    "feedback.panelTitle": "Short notes are fine.",
    "feedback.panelBody": "The page, expected result, and actual result are enough.",
    "feedback.statusOne": "Bug report",
    "feedback.statusTwo": "Design issue",
    "feedback.statusThree": "Feature idea",
    "feedback.topicOneTitle": "Bugs and broken screens",
    "feedback.topicOneBody": "Report buttons that do not respond, mobile layouts that look wrong, or page navigation that gets blocked.",
    "feedback.topicTwoTitle": "Text that feels unclear",
    "feedback.topicTwoBody": "Send awkward English or Korean copy, overly stiff notices, or setting names that are hard to understand.",
    "feedback.topicThreeTitle": "Useful next features",
    "feedback.topicThreeBody": "Suggest improvements for sharing, accessibility, pricing, settings, or the custom context menu.",
    "support.eyebrow": "Support",
    "support.title": "Choosing a support type makes the request easier to sort.",
    "support.lead": "Use the same form for non-urgent questions, checkout access issues, and privacy requests, but include the purpose clearly.",
    "support.routeOneLabel": "Bug",
    "support.routeOneTitle": "Screen or button issue",
    "support.routeOneBody": "Include the page, the button you tried, and what you expected to happen.",
    "support.routeTwoLabel": "Payment",
    "support.routeTwoTitle": "Payment and plan access",
    "support.routeTwoBody": "Report blocked flows around Pricing, Stripe links, or payment blocking settings.",
    "support.routeThreeLabel": "Policy",
    "support.routeThreeTitle": "Privacy and terms requests",
    "support.routeThreeBody": "Point out copy in Privacy, License, or Terms that should be clearer.",
    "feedback.privacyEyebrow": "Privacy",
    "feedback.privacyTitle": "Only enter the personal details you need.",
    "feedback.privacyBody": "The feedback form opens in Google Forms. If you do not need a reply, it is better to leave your name, email, and contact details blank.",
    "accessibility.title": "Accessibility is managed as a core site feature.",
    "accessibility.lead":
      "This site is designed for easier navigation through keyboard access, visible focus states, language switching, reading modes, and display density controls.",
    "accessibility.mediaLabel": "Accessibility",
    "accessibility.mediaValue": "Keyboard, contrast, readable controls",
    "accessibility.summaryKeyboard": "Keyboard",
    "accessibility.summaryKeyboardValue": "Skip link and focus",
    "accessibility.summaryContrast": "Contrast",
    "accessibility.summaryContrastValue": "Dark readable UI",
    "accessibility.summaryLanguage": "Language",
    "accessibility.summaryLanguageValue": "Korean and English",
    "accessibility.summaryControls": "Controls",
    "accessibility.summaryControlsValue": "Settings page",
    "accessibility.keyboardTitle": "You can navigate with the keyboard.",
    "accessibility.keyboardBody":
      "Every page includes a skip link to the main content, and buttons and links use focus-visible states. Context menu, share, QR, and print dialogs are opened through button controls.",
    "accessibility.contrastTitle": "The default interface uses a dark high-contrast layout.",
    "accessibility.contrastBody":
      "Dark and lights-off themes are managed with shared tokens so text and controls stay visible. The sidebar now uses a solid gray rail with reduced decorative color.",
    "accessibility.readingTitle": "Readable display settings are available.",
    "accessibility.readingBody":
      "Settings can adjust language, density, Kid mode, and fast rendering. Kid mode changes readable scale and motion reduction by level.",
    "accessibility.motionTitle": "Motion and heavy effects can be reduced.",
    "accessibility.motionBody":
      "Fast rendering lowers blur, shadow, and animation load. Motion is also limited when the device asks for reduced motion.",
    "accessibility.feedbackTitle": "Tell Support when something is uncomfortable.",
    "accessibility.feedbackBody":
      "If keyboard flow, reading contrast, language switching, or mobile layout feels wrong, report it through Feedback. Accessibility reports are treated as priority signals for the next fix.",
    "accessibility.settingsLink": "Open accessibility settings",
    "accessibility.feedbackLink": "Report issue to Support",
    "accessibility.updated": "Last updated: June 9, 2026",
    "privacy.eyebrow": "Privacy Policy",
    "privacy.title": "Privacy, made readable.",
    "privacy.lead":
      "This site does not create accounts or store payment details directly. Display preferences stay on your device, and external services follow their own policies.",
    "privacy.mediaLabel": "Privacy model",
    "privacy.mediaValue": "Local settings, external checkout",
    "privacy.summaryStorage": "Storage",
    "privacy.summaryStorageValue": "Local only",
    "privacy.summaryAccount": "Accounts",
    "privacy.summaryAccountValue": "Not required",
    "privacy.summaryPayments": "Payments",
    "privacy.summaryPaymentsValue": "Stripe checkout",
    "privacy.summaryControl": "Control",
    "privacy.summaryControlValue": "Clear anytime",
    "privacy.localTitle": "Cookies and browser storage",
    "privacy.localBody":
      "This site does not use login tracking cookies or advertising cookies. Display preferences such as theme, language, density, and sidebar state are stored in this browser's localStorage, and only the choice that you acknowledged the cookie notice is stored as the profile_storage_consent cookie.",
    "privacy.cookieEssentialTitle": "Required cookies",
    "privacy.cookieEssentialBody": "Needed for security and basic behavior, and cannot be turned off.",
    "privacy.cookiePreferenceTitle": "Preference cookie",
    "privacy.cookiePreferenceBody": "Stores whether you acknowledged the cookie notice, and can be turned on or off from the Cookie settings popup in Settings.",
    "privacy.cookieAdsTitle": "Advertising and analytics cookies",
    "privacy.cookieAdsBody": "Not currently used.",
    "privacy.noAccountTitle": "A site you can read without an account",
    "privacy.noAccountBody":
      "This site currently does not run its own login, sign-up flow, or user profile database. It does not create or store names, passwords, or account identifiers.",
    "privacy.externalTitle": "When you open an external service",
    "privacy.externalBody":
      "Feedback forms, Stripe checkout, and external sharing links may open another service. Information entered or processed there follows that service's privacy and security rules.",
    "privacy.stripeTitle": "Payment details are handled by Stripe.",
    "privacy.stripeBody":
      "Pro, Teams, and Ultra purchases are processed through Stripe Checkout. This site does not directly store card numbers, security codes, or payment authentication details.",
    "privacy.stripeLink": "Stripe Privacy Policy",
    "privacy.clearTitle": "You can clear it anytime.",
    "privacy.clearBody":
      "Stored site preferences can be removed from the Settings page cleanup tools or your browser's site data menu. After clearing them, theme and display preferences return to defaults.",
    "privacy.updated": "Last updated: June 3, 2026",
    "license.eyebrow": "Open Source License",
    "license.title": "License, written plainly.",
    "license.lead":
      "This page separates what can be reused from what remains owner-controlled: site code, images, logo, copy, and system fonts.",
    "license.mediaLabel": "License registry",
    "license.mediaValue": "Code open, assets reserved",
    "license.summaryCode": "Code",
    "license.summaryCodeValue": "HTML/CSS/JS",
    "license.summaryAssets": "Assets",
    "license.summaryAssetsValue": "Owner reserved",
    "license.summaryFonts": "Fonts",
    "license.summaryFontsValue": "System license",
    "license.summaryNotice": "Notice",
    "license.summaryNoticeValue": "Keep attribution",
    "license.mitTitle": "The code can be reused.",
    "license.mitBody":
      "The base HTML, CSS, and JavaScript structure of this site is the reusable part that can be published under an MIT-style open source license. It stays intentionally static so it can be copied, studied, modified, and deployed easily.",
    "license.assetsTitle": "Images and logos are separate assets.",
    "license.assetsBody":
      "The logo, generated images, profile images, brand name, and personal copy are treated as owner assets. Reusing the code does not mean those assets should be copied or redistributed as-is.",
    "license.fontsTitle": "Fonts follow the operating system license.",
    "license.fontsBody":
      "This site does not bundle external webfont files. It uses system fonts provided by each device, so font usage follows the license terms of the operating system or device.",
    "license.noticeTitle": "Keep the copyright notice.",
    "license.noticeBody":
      "When publishing modified copies of the code, keeping the original copyright notice and license guidance is recommended so attribution and usage terms remain clear.",
    "license.permissionTitle": "Ask first for personal assets.",
    "license.permissionBody":
      "Please ask permission before using material tied to the owner, such as the site name, logo, images, payment copy, or personal introduction text.",
    "license.updated": "Last updated: June 3, 2026",
    "terms.title": "Terms of use, kept short and clear.",
    "terms.lead":
      "This page explains the basic rules for reading the profile site, saving display settings, sending feedback, and opening payment links.",
    "terms.mediaLabel": "Terms registry",
    "terms.mediaValue": "Read, support, report",
    "terms.summaryUse": "Use",
    "terms.summaryUseValue": "Public reading",
    "terms.summarySupport": "Support",
    "terms.summarySupportValue": "External checkout",
    "terms.summaryData": "Data",
    "terms.summaryDataValue": "Local settings",
    "terms.summaryChanges": "Changes",
    "terms.summaryChangesValue": "Updated here",
    "terms.acceptTitle": "Continuing to use the site means you accept these terms.",
    "terms.acceptBody":
      "This is a static website for a public profile, creation notes, pricing guidance, settings, and privacy information. Reading content or opening links means using the site under these terms and the Privacy Policy.",
    "terms.contentTitle": "Information is for guidance.",
    "terms.contentBody":
      "Emergency response, development, pricing, and support copy is provided for site introduction and guidance. Do not treat it as professional medical, legal, or financial advice, and verify important decisions with official organizations or providers.",
    "terms.checkoutTitle": "Payments and external forms are handled by outside services.",
    "terms.checkoutBody":
      "Features that open Stripe Checkout, Google Forms, or sharing services follow those services' terms and privacy rules. This site does not directly process card numbers or external form responses.",
    "terms.localTitle": "Settings are managed in the browser.",
    "terms.localBody":
      "Theme, language, density, and payment-blocking preferences are stored in localStorage for the same browser. You can clear site data from Settings or Usage.",
    "terms.fairUseTitle": "Please use the site fairly.",
    "terms.fairUseBody":
      "Do not disrupt the site, create excessive automated requests, or copy personal assets such as images and logos without permission. Reuse rules for code and assets are explained on the License page.",
    "terms.contactTitle": "Tell Support when something is wrong.",
    "terms.contactBody":
      "Broken links, incorrect copy, checkout access issues, and privacy requests can be sent through Support feedback. These terms may be updated to make the rules clearer.",
    "terms.updated": "Last updated: June 7, 2026",
    "feedback.warningTitle": "You are leaving for an external form.",
    "feedback.warningBody": "Google Forms will open on a new page. Only enter personal information such as your name or contact details if it is necessary.",
    "feedback.cancel": "Cancel",
    "feedback.continue": "Continue",
    "updates.eyebrow": "Latest updates",
    "updates.title": "See what changed recently.",
    "updates.lead": "Recent visible changes such as the sidebar, accessibility page, and cookie settings are collected in one place.",
    "updates.summaryNav": "Sidebar",
    "updates.summaryNavValue": "Latest updates added",
    "updates.summaryPrivacy": "Privacy",
    "updates.summaryPrivacyValue": "Cookie settings popup",
    "updates.summaryAccess": "Access",
    "updates.summaryAccessValue": "Accessibility page",
    "updates.latestLabel": "2026.06.10",
    "updates.latestTitle": "Latest updates was added to the sidebar.",
    "updates.latestBody": "Every page now has a sidebar link near the top that opens this updates page.",
    "updates.cookieTitle": "Cookie settings popup was added.",
    "updates.cookieBody": "The Settings page lets visitors review required cookies and turn the preference cookie on or off.",
    "updates.accessTitle": "Accessibility page was added.",
    "updates.accessBody": "Keyboard navigation, contrast, language, density, and Kid mode support now live on a dedicated page.",
    "updates.nextTitle": "Next check",
    "updates.nextBody": "As the sidebar grows, mobile menu spacing and collapsed-sidebar spacing will stay on the polish list.",
    "updates.openSettings": "Open settings",
    "updates.openAccessibility": "Open Accessibility",
    "settings.title": "Settings management console",
    "settings.lead":
      "Manage public status, display behavior, performance, and storage settings from one screen.",
    "settings.overviewProfile": "Profile",
    "settings.overviewProfileValue": "Public",
    "settings.overviewTheme": "Theme",
    "settings.overviewThemeValue": "Synced",
    "settings.overviewPayments": "Payments",
    "settings.overviewPaymentsAllowed": "Allowed",
    "settings.overviewPaymentsBlocked": "Blocked",
    "settings.overviewStorage": "Storage",
    "settings.sidebarEyebrow": "Workspace",
    "settings.sidebarTitle": "Controls",
    "settings.groupIdentity": "Identity & access",
    "settings.groupIdentityBody": "Manage the public profile and how visitors connect with you.",
    "settings.groupExperience": "Experience",
    "settings.groupExperienceBody": "Adjust theme, language, and accessibility for visitors.",
    "settings.groupBeta": "Beta lab",
    "settings.groupBetaBody": "Keep experimental features separated and easy to turn off.",
    "settings.groupSystem": "System",
    "settings.groupSystemBody": "Manage rendering, storage usage, and browser cache.",
    "settings.groupBrand": "Brand system",
    "settings.groupBrandBody": "Match accent color and display density to the site tone.",
    "settings.profileTab": "Profile",
    "settings.privacyTab": "Privacy",
    "settings.paymentTab": "Payments",
    "settings.displayTab": "Display",
    "settings.navigationTab": "Navigation",
    "settings.notificationsTab": "Notifications",
    "settings.betaTab": "Beta",
    "settings.languageTab": "Language",
    "settings.accessibilityTab": "Accessibility",
    "settings.performanceTab": "Performance",
    "settings.storageTab": "Storage",
    "settings.accentTab": "Accent",
    "settings.layoutTab": "Layout",
    "settings.profileTitle": "Public profile",
    "settings.profileBody":
      "Show your role and introduction in search and shared links.",
    "settings.contactTitle": "Contact visibility",
    "settings.contactBody":
      "Guide visitors to the Feedback tab for inquiries and improvement ideas.",
    "settings.profileOn": "Public profile on",
    "settings.profileOff": "Public profile off",
    "settings.contactOn": "Contact visibility on",
    "settings.contactOff": "Contact visibility off",
    "settings.notificationsTitle": "Notifications",
    "settings.notificationsBody": "Allow this browser to show important site update notifications.",
    "settings.notificationsOn": "Notifications on",
    "settings.notificationsOff": "Notifications off",
    "settings.notificationsReady": "Ready",
    "settings.notificationsAllowed": "Allowed",
    "settings.notificationsBlocked": "Blocked in browser",
    "settings.notificationsUnsupported": "Not supported",
    "settings.notificationsTest": "Test",
    "settings.notificationsTestTitle": "Test notification",
    "settings.notificationsTestBody": "Notifications are working.",
    "settings.betaTitle": "Beta features",
    "settings.betaBody": "Try experimental features such as new search UI, Activity filters, and mobile action customization.",
    "settings.betaOn": "Beta features on",
    "settings.betaOff": "Beta features off",
    "settings.betaStatusOn": "On",
    "settings.betaStatusOff": "Off",
    "settings.betaOpen": "View features",
    "settings.betaDialogTitle": "Beta features",
    "settings.betaDialogBody": "Choose experimental features to try early in this browser.",
    "settings.betaRedesignTitle": "Settings page redesign",
    "settings.betaRedesignBody": "Switch Settings to a more modern split layout with quiet panel styling.",
    "settings.betaRedesignApply": "Apply",
    "settings.betaRedesignActive": "Turn off",
    "settings.paymentBlockTitle": "Payment blocking",
    "settings.paymentBlockBody": "When this is on, paid plan buttons on the Pricing page will not open external Stripe checkout.",
    "settings.paymentBlockOn": "Payment blocking on",
    "settings.paymentBlockOff": "Payment blocking off",
    "settings.sidebarNavOn": "Sidebar navigation on",
    "settings.sidebarNavOff": "Sidebar navigation off",
    "settings.navigationEnabled": "Sidebar",
    "settings.navigationDisabled": "Top bar",
    "settings.navigationConfigure": "Configure",
    "settings.navigationDialogTitle": "Choose navigation layout",
    "settings.navigationDialogBody": "Choose whether the desktop menu stays fixed on the left or remains compact at the top.",
    "settings.navigationSidebarTitle": "Sidebar",
    "settings.navigationSidebarBody": "Keeps navigation fixed on the left for faster page switching.",
    "settings.navigationTopbarTitle": "Top bar",
    "settings.navigationTopbarBody": "Keeps navigation grouped at the top so the page content has more width.",
    "settings.fastRenderOn": "Fast rendering on",
    "settings.fastRenderOff": "Fast rendering off",
    "settings.fastRenderStandard": "Standard",
    "settings.fastRenderFast": "Fast",
    "settings.kidModeOn": "Kid mode on",
    "settings.kidModeOff": "Kid mode off",
    "settings.contextMenuOn": "Custom context menu on",
    "settings.contextMenuOff": "Custom context menu off",
    "settings.contextMenuConfigure": "Configure",
    "settings.themeTitle": "Theme mode",
    "settings.themeBody": "Manage the profile with Dark or Lights Off mode.",
    "settings.themeScopeLabel": "Compatibility",
    "settings.themeScopeValue": "all routes use normalized theme tokens",
    "settings.lightsOff": "Lights Off",
    "settings.themeDark": "Dark",
    "settings.navigationTitle": "Sidebar navigation",
    "settings.navigationBody": "Show the desktop menu as a vertical button list on the left side.",
    "settings.languageTitle": "Language",
    "settings.languageBody": "Choose the language used across the profile and settings pages.",
    "settings.languageKorean": "Korean",
    "settings.languageEnglish": "English",
    "settings.fastRenderTitle": "Fast rendering",
    "settings.fastRenderBody": "Reduces blur, shadows, and animation so the interface renders more lightly.",
    "settings.kidModeTitle": "Kid mode",
    "settings.kidModeBody": "Choose how much the interface should increase readability and reduce motion.",
    "settings.kidModeOffLevel": "Off",
    "settings.kidModeSoftLevel": "Soft",
    "settings.kidModeStrongLevel": "Strong",
    "settings.accessibilityTitle": "Accessibility guidance",
    "settings.accessibilityBody": "Review support for keyboard flow, contrast, language, Kid mode, and reduced motion.",
    "settings.accessibilityOpen": "Open Accessibility",
    "settings.contextMenuTitle": "Custom context menu",
    "settings.contextMenuBody": "Use a styled right-click menu with quick actions.",
    "settings.contextMenuDialogTitle": "Choose right-click menu mode",
    "settings.contextMenuDialogBody": "Use the custom menu for quick site actions, or choose the browser default if you prefer native behavior.",
    "settings.contextMenuCustomTitle": "Custom menu",
    "settings.contextMenuCustomBody": "Open site actions like copy, share, QR code, search, and print from one menu.",
    "settings.contextMenuNativeTitle": "Browser default",
    "settings.contextMenuNativeBody": "Use the browser's native right-click menu without replacing it.",
    "settings.cookieSettingsTitle": "Cookie settings",
    "settings.cookieSettingsBody": "Turn the browser storage notice cookie on or off in a popup. Required items stay on for basic site behavior.",
    "settings.cookieSettingsButton": "Cookie settings",
    "settings.cookieDialogTitle": "Cookie settings",
    "settings.cookieDialogBody": "Choose which cookies this site can use. This site currently does not use advertising or analytics cookies.",
    "settings.cookieEssentialTitle": "Required cookies",
    "settings.cookieEssentialBody": "Needed for security and basic behavior. This item cannot be turned off.",
    "settings.cookieEssentialOn": "Required cookies on",
    "settings.cookiePreferenceTitle": "Preference cookie",
    "settings.cookiePreferenceBody": "Stores that you have acknowledged the browser storage notice in this browser.",
    "settings.cookiePreferenceOn": "Preference cookie on",
    "settings.cookiePreferenceOff": "Preference cookie off",
    "settings.cookieStatusOn": "Preference cookie is on.",
    "settings.cookieStatusOff": "Preference cookie is off.",
    "settings.cookieLearnMore": "Learn more",
    "quickSettings.eyebrow": "Quick settings",
    "quickSettings.title": "Quick settings",
    "quickSettings.body": "Adjust only the most common display settings here. Detailed controls stay on the full Settings page.",
    "quickSettings.general": "General",
    "quickSettings.controls": "Controls",
    "quickSettings.themeHint": "Choose a quiet display theme.",
    "quickSettings.languageHint": "Switch the interface language.",
    "quickSettings.notificationsHint": "Ask this browser for site notification permission.",
    "quickSettings.fastRenderHint": "Reduce blur, shadows, and animation.",
    "quickSettings.fullSettings": "Open full settings",
    "quickSettings.statusReady": "Quick settings are ready.",
    "quickSettings.statusSaved": "Setting saved.",
    "quickSettings.statusNotificationsOn": "Notifications are on.",
    "quickSettings.statusNotificationsOff": "Notifications are off.",
    "settings.clearCacheTitle": "Clear browser cache",
    "settings.clearCacheBody":
      "Removes this site's saved theme, language, and display preferences and restores defaults.",
    "settings.clearCacheButton": "Clear cache",
    "settings.clearCacheWarning":
      "Saved theme, language, and display settings will be deleted. Do you want to continue?",
    "settings.clearCacheCancel": "Cancel",
    "settings.clearCacheConfirm": "Clear",
    "settings.clearCacheDone": "Saved settings have been cleared.",
    "settings.storageUsageTitle": "Storage usage",
    "settings.storageUsageLoading": "Checking storage usage.",
    "settings.storageUsageUnsupported": "This browser does not support storage usage details.",
    "usage.limitsTitle": "General usage limits",
    "usage.dailyLimitTitle": "5-hour usage limit",
    "usage.weeklyLimitTitle": "Weekly usage limit",
    "usage.remainingPercent": "{percent}% left",
    "usage.resetAt": "Resets at {time}",
    "usage.resetOn": "Resets on {date}",
    "usage.learnMore": "Learn more about usage limits",
    "usage.learnDialogTitle": "How usage limits work",
    "usage.learnDialogBody": "These limits are calculated only in the current browser, not on a server account. The 5-hour limit and 7-day weekly limit start from the moment you first visit, then reset automatically after each window expires.",
    "usage.learnPointLocalTitle": "Browser based",
    "usage.learnPointLocalBody": "The record stays in this device's browser storage.",
    "usage.learnPointResetTitle": "Automatic reset",
    "usage.learnPointResetBody": "A new window starts on the next visit after 5 hours or 7 days pass.",
    "usage.learnPointPrivateTitle": "No server storage",
    "usage.learnPointPrivateBody": "It is not connected to a login account or payment history.",
    "usage.upgradeTitle": "Get more limits?",
    "usage.upgradeButton": "Upgrade to plan",
    "usage.settingsTitle": "Usage page",
    "usage.settingsBody": "Review the 5-hour and weekly usage limits on the Usage page.",
    "usage.open": "Open Usage",
    "usage.summaryValue": "Open page",
    "settings.accentTitle": "Accent color",
    "settings.accentBody": "Choose the point color used for buttons, progress bars, focus states, and supported page links.",
    "settings.accentScopeLabel": "Applies to",
    "settings.accentScopeValue": "shared controls and supported page accents",
    "settings.accentNeutral": "Neutral",
    "settings.accentBlue": "Blue",
    "settings.accentGreen": "Green",
    "settings.accentRose": "Rose",
    "settings.accentOrange": "Orange",
    "settings.accentPurple": "Purple",
    "settings.accentProGold": "Pro Gold",
    "settings.accentTeamCyan": "Team Cyan",
    "settings.premiumLocked": "This accent color is available after supporting.",
    "settings.densityTitle": "Display density",
    "settings.densityBody": "Choose the spacing used for profile details and work lists.",
    "settings.densityCompact": "Compact",
    "settings.densityComfortable": "Comfortable",
    "settings.densitySpacious": "Spacious",
    "info.licensesTab": "Open Source Licenses",
    "info.privacyTab": "Privacy Policy",
    "info.copyrightTab": "Copyright",
    "info.licensesBody":
      "This profile template is built with plain HTML, CSS, and JavaScript without external frameworks. System fonts follow the license of each operating system.",
    "info.privacyBody":
      "This site stores only theme, language, and setting preferences in your browser local storage. No separate server-side profile data is collected.",
    "info.copyrightBody":
      "© 2026 Profile Site. All profile copy, images, and interface components belong to their respective owners.",
    "plans.free": "Free",
    "plans.freePrice": "$0",
    "plans.pro": "Pro",
    "plans.proPrice": "Confirm in Stripe",
    "plans.team": "Team",
    "plans.teamPrice": "Confirm in Stripe",
    "plans.ultra": "Ultra",
    "plans.ultraPrice": "Confirm in Stripe",
    "plans.monthly": "Monthly",
    "plans.recommended": "Recommended",
    "plans.topTier": "Top tier",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Choose the setup that fits your profile.",
    "pricing.lead":
      "Free includes a 5-hour limit and a weekly limit starting from the first visit. Paid checkout remains optional after the limit.",
    "pricing.adaptiveNote": "Usage limits are calculated only in this browser. Stripe confirms paid prices.",
    "pricing.summaryCheckout": "Checkout",
    "pricing.summaryCheckoutValue": "Stripe test links",
    "pricing.summaryCurrency": "Currency",
    "pricing.summaryCurrencyValue": "Final amount in checkout",
    "pricing.summaryAccess": "Access",
    "pricing.summaryAccessValue": "Checkout after limit",
    "pricing.freeBody": "The basic plan. It shows the 5-hour limit and weekly limit in the current browser.",
    "pricing.freeOne": "5-hour usage limit",
    "pricing.freeTwo": "Weekly usage limit",
    "pricing.freeThree": "Resets from the first visit time",
    "pricing.freeFour": "Pricing opens when the limit is used",
    "pricing.chooseFree": "Start with Free",
    "pricing.proBody": "A personal paid checkout option after the free usage limit is used.",
    "pricing.proOne": "Pro checkout path after the free limit",
    "pricing.proTwo": "Training and certification sections",
    "pricing.proThree": "Pro-only accent color",
    "pricing.proFour": "Expanded personal profile structure",
    "pricing.choosePro": "Choose Pro",
    "pricing.teamBody":
      "A checkout option for team profiles, shared introductions, and organized activity records after the free limit.",
    "pricing.teamOne": "Team intro and shared profile structure",
    "pricing.teamTwo": "Member roles and activity summaries",
    "pricing.teamThree": "Training, project, and operation structure",
    "pricing.teamFour": "Team-only color and priority feedback flow",
    "pricing.chooseTeam": "Choose Team",
    "pricing.ultraBody": "The top-tier checkout option after the free limit, with the highest priority and joint planning participation.",
    "pricing.ultraOne": "First, the response",
    "pricing.ultraTwo": "Request priority processing",
    "pricing.ultraThree": "Participating in joint planning",
    "pricing.ultraFour": "Unreleased cuts",
    "pricing.chooseUltra": "Choose Ultra",
    "pricing.subscribeEyebrow": "Subscription",
    "pricing.subscribeWarningTitle": "You are leaving for an external checkout.",
    "pricing.subscribeWarningBody": "The selected checkout page will open on a new page. Please confirm the plan name and amount before paying.",
    "pricing.subscribeCancel": "Cancel",
    "pricing.subscribeContinue": "Continue",
    "pricing.paymentBlockedTitle": "Payments are blocked.",
    "pricing.paymentBlockedBody": "Payment blocking is turned on in Settings, so Stripe checkout will not open.",
    "pricing.paymentBlockedClose": "OK",
    "pricing.compareEyebrow": "Compare",
    "pricing.compareTitle": "Feature comparison",
    "pricing.compareFeature": "Feature",
    "pricing.comparePlanPicker": "Free usage window",
    "pricing.comparePlanHint": "5-hour and weekly limits from first visit.",
    "pricing.compareFreeBadge": "Starter",
    "pricing.comparePaidBadge": "Stripe checkout",
    "pricing.compareForever": "/ forever",
    "pricing.compareFreeNote": "Local usage tracking and core profile tools.",
    "pricing.compareProNote": "Personal checkout path after the free limit.",
    "pricing.compareTeamNote": "Shared profile and priority feedback flow.",
    "pricing.compareUltraBar": "Top response",
    "pricing.compareUltraNote": "Highest priority and joint planning access.",
    "pricing.compareGuarantee": "30-day money-back guarantee",
    "pricing.compareCoreFeatures": "Profile features",
    "pricing.compareTeamFeatures": "Team and priority",
    "pricing.compareProfile": "Profile structure",
    "pricing.compareUsage": "Browser usage limit",
    "pricing.compareFreeUsage": "5-hour + weekly limit",
    "pricing.compareCheckoutUsage": "Checkout after limit",
    "pricing.compareExperience": "Field experience entries",
    "pricing.compareCredentials": "Training and credentials",
    "pricing.compareAccent": "Premium accent color",
    "pricing.compareTeam": "Team or organization page",
    "pricing.compareBasic": "Basic",
    "pricing.compareAdvanced": "Expanded",
    "pricing.compareOrg": "Organization",
    "pricing.compareTopTier": "Top tier",
    "pricing.compareUnlimited": "Unlimited",
    "pricing.compareYes": "Included",
    "pricing.compareNo": "No",
    "pricing.compareUltraPurple": "Ultra Purple",
    "pricing.comparePriority": "Request priority processing",
    "pricing.comparePriorityValue": "Priority",
    "pricing.compareTopPriority": "Top priority",
    "pricing.comparePlanning": "Joint planning participation",
    "pricing.compareUnreleased": "Unreleased cuts",
    "pricing.faqEyebrow": "FAQ",
    "pricing.faqTitle": "Frequently asked questions",
    "pricing.faqOneQuestion": "Where does payment happen?",
    "pricing.faqOneAnswer": "The Pro, Team, and Ultra plans are handled through Stripe checkout links.",
    "pricing.faqTwoQuestion": "What happens after the free usage limit is used?",
    "pricing.faqTwoAnswer":
      "When the Free limit is used, the Usage page opens Pricing. Paid plans currently use direct Stripe checkout links, and automatic limit unlocking is not connected yet.",
    "pricing.faqThreeQuestion": "Do prices change with live exchange rates?",
    "pricing.faqThreeAnswer":
      "The pricing cards are guidance only. Final currency and payment amount should be confirmed in Stripe checkout.",
    "pricing.faqFourQuestion": "Are usage limits real billing?",
    "pricing.faqFourAnswer":
      "No. Usage limits are a local browser-side display. Real payment only happens inside Stripe checkout.",
    "error.eyebrow": "404",
    "error.code": "404_NOT_FOUND",
    "error.title": "This route lost its way.",
    "error.body": "This path moved or has not been published yet. Open the nearest destination below.",
    "error.home": "Go home",
    "error.pricing": "View Pricing",
    "error.feedback": "Report issue",
    "error.consoleLabel": "Route recovery",
    "error.statusLabel": "Last check",
    "error.statusValue": "No matching route found",
    "offline.eyebrow": "Offline",
    "offline.code": "NETWORK_OFFLINE",
    "offline.title": "No network or Wi-Fi connection.",
    "offline.body": "The page could not be loaded because the device appears to be offline. Check your connection, then try again.",
    "offline.retry": "Try again",
    "offline.home": "Open cached home",
    "offline.panelLabel": "Connection status",
    "offline.panelValue": "Waiting for network",
    "offline.panelHint": "This page can appear after the site has been visited once.",
    "offline.tipOneTitle": "Check Wi-Fi or mobile data",
    "offline.tipOneBody": "Reconnect to Wi-Fi, enable mobile data, or turn off airplane mode before trying again.",
    "offline.tipTwoTitle": "Reload after reconnecting",
    "offline.tipTwoBody": "Use the retry button once the connection is restored. Cached pages may still open while offline.",
    "offline.tipThreeTitle": "Some features need the internet",
    "offline.tipThreeBody": "External sharing, forms, checkout links, and QR image generation may need a live network connection.",
    "errorFaq.eyebrow": "FAQ",
    "errorFaq.title": "Frequently asked questions",
    "errorFaq.oneQuestion": "Why am I seeing a 404 page?",
    "errorFaq.oneAnswer":
      "The address may be typed incorrectly, the page name may have changed, or the route may not be public yet.",
    "errorFaq.twoQuestion": "Where should I go next?",
    "errorFaq.twoAnswer":
      "Use the Home, Pricing, Bio, FAQ, and Settings links to move to pages that are ready.",
    "errorFaq.threeQuestion": "What if the problem keeps happening?",
    "errorFaq.threeAnswer":
      "Use the Feedback tab or the Google Forms link to share the broken address.",
    "errorFaq.fourQuestion": "Can an ad blocker affect this page?",
    "errorFaq.fourAnswer":
      "Some ad blockers can hide buttons, community links, or notice banners. If something is missing, please allow this site in your blocker.",
    "errorRoute.homeLabel": "Start over",
    "errorRoute.homeTitle": "Home",
    "errorRoute.homeBody": "Return to the latest notes and primary links.",
    "errorRoute.faqLabel": "Need context",
    "errorRoute.faqTitle": "FAQ",
    "errorRoute.faqBody": "Check the common questions and site flow.",
    "errorRoute.settingsLabel": "Adjust site",
    "errorRoute.settingsTitle": "Settings",
    "errorRoute.settingsBody": "Tune theme, language, and browsing preferences.",
    "share.copy": "Copy page link",
    "share.copied": "Page link copied",
    "share.eyebrow": "Share",
    "share.title": "Share this page",
    "share.body": "Copy this link and share it wherever you want.",
    "share.linkLabel": "Share link",
    "share.close": "Close",
    "share.native": "Device share",
    "quickActions.label": "Mobile quick actions",
    "quickActions.home": "Home",
    "quickActions.search": "Search",
    "quickActions.share": "Share",
    "quickActions.settings": "Settings",
    "qr.eyebrow": "QR Code",
    "qr.title": "Create QR Code",
    "qr.body": "Show the current page link as a scannable QR code.",
    "qr.alt": "QR code for the current page link",
    "qr.openImage": "Open new tab image",
    "qr.copy": "Copy link",
    "qr.copied": "QR link copied",
    "qr.close": "Close",
    "source.eyebrow": "Source",
    "source.title": "Page source",
    "source.body": "View the current page HTML source inside this site.",
    "source.meta": "Current page",
    "source.loading": "Loading source.",
    "source.copy": "Copy source",
    "source.copied": "Source copied.",
    "source.close": "Close",
    "source.unavailable": "Source could not be loaded, so the current DOM snapshot is shown.",
    "print.eyebrow": "Print",
    "print.title": "Print settings",
    "print.body": "Use a print-friendly layout that hides buttons, menus, popups, and tidies the page content.",
    "print.optionCleanTitle": "Clean layout",
    "print.optionCleanBody": "Navigation and interactive UI are hidden.",
    "print.optionReadableTitle": "Readable text",
    "print.optionReadableBody": "The page prints with a light background and clear text.",
    "print.optionLinksTitle": "Link friendly",
    "print.optionLinksBody": "You can also save as PDF from the browser print dialog.",
    "print.confirm": "Print",
    "adblock.message":
      "An ad blocker may limit some site features. If something looks broken, please allow this site.",
    "adblock.dismiss": "Dismiss",
    "bio.eyebrow": "Bio",
    "bio.title": "Calm under pressure.",
    "bio.lead":
      "Even in dangerous moments, I slow my breathing first, read the scene, and connect the decisions that need to happen next.",
    "bio.actionPrinciples": "View principles",
    "bio.actionNotes": "View notes",
    "bio.mediaLabel": "Field profile",
    "bio.mediaValue": "Prepared, quiet, precise.",
    "bio.summaryRoleLabel": "Role",
    "bio.summaryRoleValue": "Emergency responder",
    "bio.summaryFocusLabel": "Field focus",
    "bio.summaryFocusValue": "Scene judgment · care handoff",
    "bio.summaryResponseLabel": "Response style",
    "bio.summaryResponseValue": "Calm · speed · teamwork",
    "bio.summaryBuildLabel": "Creative work",
    "bio.summaryBuildValue": "Game UI · tools · documentation",
    "bio.sectionOneTitle": "How I work in the field",
    "bio.sectionOneBody":
      "In emergencies, calm presence matters as much as quick judgment. I assess the patient's condition, communicate clearly with guardians and teammates, and help keep the scene organized for safe care.",
    "bio.sectionTwoTitle": "Standards I value",
    "bio.sectionTwoBody":
      "I work from sound assessment, precise team communication, and respect for every patient. In urgent moments, staying close to procedure and fundamentals leads to better outcomes.",
    "bio.sectionThreeTitle": "Where I am heading",
    "bio.sectionThreeBody":
      "I want to use field experience to contribute to better emergency response, training, and documentation culture. My goal is to help people move through their hardest moments with more safety and clarity.",
    "bio.principlesEyebrow": "Principles",
    "bio.principlesTitle": "Quiet judgment. Precise movement.",
    "bio.principleOneTitle": "People come first.",
    "bio.principleOneBody": "Life and safety are the standard behind every decision.",
    "bio.principleTwoTitle": "Read the scene, then set order.",
    "bio.principleTwoBody": "Gather information, rank priorities, and give the team a direction to move.",
    "bio.principleThreeTitle": "Record and improve.",
    "bio.principleThreeBody": "Leave experience behind so the next response can be safer.",
    "bio.notesEyebrow": "Field notes",
    "bio.notesTitle": "Short notes from the field",
    "bio.noteOneTitle": "Public safety response support",
    "bio.noteOneBody": "Sorted movement paths and visible risks first in a crowded space.",
    "bio.noteTwoTitle": "Traffic collision support",
    "bio.noteTwoBody": "Prioritized secondary-incident prevention and patient stability.",
    "bio.noteThreeTitle": "Documentation system cleanup",
    "bio.noteThreeBody": "Organized repeated response information so it can be found faster.",
    "bio.directionEyebrow": "Direction statement",
    "bio.directionQuote": "Technology comes from equipment, judgment from experience, and trust from attitude.",
    "bio.directionBody":
      "I am moving toward connecting people and systems through field-tested principles, while helping build a safer response culture.",
    "bio.likesEyebrow": "Interests",
    "bio.likesTitle": "Areas I focus on",
    "bio.likesLead": "This area is a simple template that can be edited later as interests change.",
    "bio.likeOne": "Game UI & UX",
    "bio.likeTwo": "Roblox systems",
    "bio.likeThree": "Field records",
    "bio.likeFour": "Tool design",
    "bio.likeFive": "Emergency response",
    "bio.likeSix": "Knowledge systems",
    "about.title": "About the system.",
    "about.lead":
      "A public profile designed to keep response values, creation notes, support paths, privacy, and settings in their proper places.",
    "about.principlesButton": "View principles",
    "about.routesButton": "See routes",
    "about.mediaLabel": "Signal",
    "about.mediaValue": "Response, creation, trust",
    "about.ledgerPurposeLabel": "Purpose",
    "about.ledgerPurposeValue": "Public profile",
    "about.ledgerScopeLabel": "Scope",
    "about.ledgerScopeValue": "Response + creation",
    "about.ledgerPrivacyLabel": "Privacy",
    "about.ledgerPrivacyValue": "Local-first preferences",
    "about.ledgerPaymentsLabel": "Payments",
    "about.ledgerPaymentsValue": "External Stripe checkout",
    "about.principlesKicker": "Operating principles",
    "about.principlesTitle": "Keep the system useful when it matters.",
    "about.principlesLead":
      "The site is arranged around a few durable rules: reduce noise, keep trust boundaries clear, and make every route earn its place.",
    "about.principleOneTitle": "Serve first",
    "about.principleOneBody": "Put clarity and usefulness ahead of decoration.",
    "about.principleTwoTitle": "Stay calm",
    "about.principleTwoBody": "Organize information so visitors do not have to fight the interface.",
    "about.principleThreeTitle": "Tell the truth",
    "about.principleThreeBody": "Keep privacy, payment, and product claims plain and easy to verify.",
    "about.principleFourTitle": "Build small systems",
    "about.principleFourBody": "Separate long information into dedicated pages instead of crowding the homepage.",
    "about.principleFiveTitle": "Leave room to improve",
    "about.principleFiveBody": "Make the site easy to revise as the profile, tools, and support options evolve.",
    "about.routesKicker": "Route index",
    "about.routesTitle": "Every page has one job.",
    "about.routesLead": "The homepage can stay light because the detailed information lives in focused, predictable routes.",
    "about.routeHome": "First view and main navigation paths.",
    "about.routeBio": "Responder profile, values, and interests.",
    "about.routeCreator": "Game creation and tool-building notes.",
    "about.routePricing": "Support plans and Stripe payment links.",
    "about.routeSettings": "Theme, language, density, and payment blocking.",
    "about.routePrivacy": "Local data notes and external checkout boundaries.",
    "about.trustTitle": "Privacy. Payments. Trust.",
    "about.trustLead":
      "The site keeps preferences local, explains public policies in dedicated pages, and sends checkout activity to Stripe instead of handling card details itself.",
    "about.trustLocalTitle": "Local preferences",
    "about.trustLocalBody": "Theme, language, and layout settings stay in the browser.",
    "about.trustStripeTitle": "Stripe checkout",
    "about.trustStripeBody": "Payment links open Stripe-hosted checkout pages.",
    "about.trustControlTitle": "Visitor control",
    "about.trustControlBody": "Settings include payment blocking and comfort controls.",
    "about.nextTitle": "Next direction.",
    "about.nextBody":
      "The site can grow into stronger stories, cleaner support tools, and better public documentation without losing its calm structure.",
    "about.nextButton": "Open feedback",
    "careerFaq.eyebrow": "FAQ",
    "careerFaq.title": "How to become an EMT in the United States",
    "careerFaq.lead":
      "Rules vary by state, but the usual path is EMT training, an exam, and a state license.",
    "careerFaq.oneQuestion": "1. What is the difference between EMT and Paramedic?",
    "careerFaq.oneAnswer":
      "EMT is the starting level and focuses on basic emergency care. A Paramedic trains longer and can do more advanced care, such as giving medicine, reading ECGs, and managing airways.",
    "careerFaq.twoQuestion": "2. What do you need to start?",
    "careerFaq.twoAnswer":
      "Most programs may ask for a high school diploma or GED, CPR/BLS certification, a background check, and immunization records. Check the school and state rules before applying.",
    "careerFaq.threeQuestion": "3. What are the basic steps?",
    "careerFaq.threeAnswer":
      "Take a state-approved EMT course, finish practice hours, pass an exam such as the NREMT, then apply for the license in the state where you want to work.",
    "careerFaq.fourQuestion": "4. How long does Paramedic training take?",
    "careerFaq.fourAnswer":
      "After EMT, Paramedic training usually takes about one to two more years. It may include clinical practice, ambulance practice, and a national exam.",
    "careerFaq.fiveQuestion": "5. Is licensure different in each state?",
    "careerFaq.fiveAnswer":
      "Yes. Even after passing an exam, you still need the license for the state where you work. If you move to another state, check whether extra steps are needed.",
    "careerFaq.sixQuestion": "6. What should you prepare?",
    "careerFaq.sixAnswer":
      "Fitness, communication, calm thinking, and teamwork are important. It also helps to learn patient privacy rules and local EMS rules.",
    "gameFaq.eyebrow": "FAQ",
    "gameFaq.title": "How to start game development",
    "gameFaq.oneQuestion": "1. What should you make first?",
    "gameFaq.oneAnswer":
      "Make one small game from start to finish. Pick one tool, such as Unity, Godot, or Roblox Studio, and practice movement, collision, scoring, and UI.",
    "gameFaq.twoQuestion": "2. Which language should you learn first?",
    "gameFaq.twoAnswer":
      "Unity uses C#, Unreal uses C++, Godot uses GDScript or C#, and Roblox uses Lua. At first, choose one engine and one language.",
    "gameFaq.threeQuestion": "3. What goes in a portfolio?",
    "gameFaq.threeAnswer":
      "Add finished small games, gameplay videos, features you built, and problems you solved. A playable result matters more than an idea.",
    "gameFaq.fourQuestion": "4. Is solo development okay?",
    "gameFaq.fourAnswer":
      "Yes. Solo projects help you understand the full process. Later, small team projects can help you learn collaboration.",
    "meetFaq.eyebrow": "FAQ",
    "meetFaq.title": "Can I contact or meet you?",
    "meetFaq.oneQuestion": "1. Can we meet in person?",
    "meetFaq.oneAnswer":
      "Online contact is the best first step. An in-person meeting can be discussed only when the purpose, schedule, place, and safety expectations are clear.",
    "meetFaq.twoQuestion": "2. Where should I send a message?",
    "meetFaq.twoAnswer":
      "Use the Feedback page. For non-urgent messages, include the purpose and useful details.",
    "siteFaq.eyebrow": "FAQ",
    "siteFaq.title": "Using and running the site",
    "siteFaq.deployQuestion": "1. How do I deploy the site?",
    "siteFaq.deployAnswer":
      "Upload the files to GitHub and connect the project to Vercel. This is a static site, so it can deploy without a build step if the Root Directory is correct.",
    "siteFaq.contactQuestion": "2. Where should I send questions?",
    "siteFaq.contactAnswer":
      "Use the Feedback tab at the top. Write the purpose and the details needed to understand the request.",
    "siteFaq.feedbackQuestion": "3. How can feedback be sent?",
    "siteFaq.feedbackAnswer":
      "Use the Google Forms button on the Feedback page. You can send bugs, improvement ideas, or anything that is hard to use.",
    "siteFaq.codexQuestion": "4. Can Codex be used to develop a site?",
    "siteFaq.codexAnswer":
      "Yes. Codex can build an HTML, CSS, and JavaScript site, adjust the design, add pages, check mobile layout, and run pre-deployment checks. Payments, login, and personal data features still need separate security planning and external service setup.",
    "siteFaq.privacyQuestion": "5. How is privacy handled?",
    "siteFaq.privacyAnswer":
      "This site stores only theme, language, and display settings in the browser. Anything entered in Google Forms is handled as Google Forms submission data.",
  },
};

const normalizeTheme = (theme) => {
  if (theme === "dark" || theme === "lights-off") return theme;
  if (theme === "light") return "dark";
  if (theme === "dim" || theme === "dark-mode" || theme === "true") return "dark";
  if (theme === "lightsout" || theme === "lights-out" || theme === "black" || theme === "off") {
    return "lights-off";
  }
  return "";
};

const normalizeLanguage = (language) => (language === "ko" || language === "en" ? language : "en");

const normalizeDensity = (density) => {
  if (density === "compact" || density === "comfortable" || density === "spacious") return density;
  return "comfortable";
};

const normalizeBooleanSetting = (value, fallback = false) => {
  if (value === true || value === "true" || value === "1" || value === "on") return true;
  if (value === false || value === "false" || value === "0" || value === "off") return false;
  return fallback;
};

const getInitialSidebarCollapsed = () =>
  normalizeBooleanSetting(localStorage.getItem("profile-sidebar-collapsed"), false);

const getInitialTheme = () => {
  const savedTheme = normalizeTheme(localStorage.getItem("profile-theme"));
  if (savedTheme) return savedTheme;
  return "dark";
};

const getInitialLanguage = () => normalizeLanguage(localStorage.getItem("profile-language"));

let currentLanguage = getInitialLanguage();

const translate = (key) => translations[currentLanguage][key] || translations.ko[key] || key;

const CLIPBOARD_HISTORY_KEY = "profile-clipboard-history";
const MAX_CLIPBOARD_ITEMS = 8;

const getClipboardHistory = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(CLIPBOARD_HISTORY_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => item?.text).slice(0, MAX_CLIPBOARD_ITEMS) : [];
  } catch {
    return [];
  }
};

const getClipboardKindLabel = (kind = "text") =>
  translate(
    {
      link: "clipboard.itemLink",
      title: "clipboard.itemTitle",
      source: "clipboard.itemSource",
      selection: "clipboard.itemSelection",
      qr: "clipboard.itemQr",
      share: "clipboard.itemShare",
      manual: "clipboard.itemManual",
    }[kind] || "clipboard.itemText",
  );

const formatClipboardTime = (timestamp) => {
  try {
    return new Intl.DateTimeFormat(currentLanguage === "ko" ? "ko-KR" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(timestamp));
  } catch {
    return "";
  }
};

const saveClipboardHistory = (items) => {
  localStorage.setItem(CLIPBOARD_HISTORY_KEY, JSON.stringify(items.slice(0, MAX_CLIPBOARD_ITEMS)));
};

const renderClipboardCenter = () => {
  if (!clipboardList || !clipboardStatus || !clipboardClear) return;

  const items = getClipboardHistory();
  clipboardList.innerHTML = "";
  clipboardClear.disabled = items.length === 0;
  clipboardStatus.textContent = items.length
    ? `${translate("clipboard.latest")} · ${formatClipboardTime(items[0].createdAt)}`
    : translate("clipboard.empty");

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "clipboard-empty";
    empty.textContent = translate("clipboard.empty");
    clipboardList.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "clipboard-item";
    row.innerHTML = `
      <div>
        <span>${getClipboardKindLabel(item.kind)}</span>
        <strong></strong>
        <small>${formatClipboardTime(item.createdAt)}</small>
      </div>
      <button type="button" class="button cache-confirm-button" data-clipboard-copy="${item.id}" data-i18n="clipboard.copyAgain">${translate("clipboard.copyAgain")}</button>
    `;
    row.querySelector("strong").textContent = item.text;
    clipboardList.appendChild(row);
  });
};

const rememberClipboardItem = (text, kind = "text") => {
  const cleaned = String(text || "").trim();
  if (!cleaned) return;

  const compact = cleaned.length > 500 ? `${cleaned.slice(0, 500)}...` : cleaned;
  const items = getClipboardHistory().filter((item) => item.text !== compact);
  items.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text: compact,
    kind,
    createdAt: Date.now(),
    path: window.location.pathname || "/",
  });
  saveClipboardHistory(items);
  renderClipboardCenter();
};

const showCopyToast = (messageKey = "toast.copyText") => {
  const message = translate(messageKey);
  let toast = document.querySelector("[data-copy-toast]");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "copy-toast";
    toast.dataset.copyToast = "";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  window.clearTimeout(copyToastTimeoutId);
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.remove("is-hiding");
  toast.classList.add("is-visible");
  copyToastTimeoutId = window.setTimeout(() => {
    toast.classList.add("is-hiding");
    toast.classList.remove("is-visible");
    copyToastTimeoutId = window.setTimeout(() => {
      toast.hidden = true;
      toast.classList.remove("is-hiding");
    }, 180);
  }, 1700);
};

const selectionContainsImage = () => {
  const selection = window.getSelection?.();
  if (!selection || selection.rangeCount === 0) return false;

  for (let index = 0; index < selection.rangeCount; index += 1) {
    const fragment = selection.getRangeAt(index).cloneContents();
    if (fragment.querySelector?.("img")) return true;
  }

  return false;
};

const getCurrentNativeCopyToastKey = (target = document.activeElement) => {
  const selectedText = getEditableSelectionText(target) || window.getSelection?.().toString().trim() || "";
  if (selectedText) return "toast.copyText";
  if (selectionContainsImage()) return "toast.copyImage";
  return "";
};

const rememberNativeCopyTarget = (target = document.activeElement) => {
  const messageKey = getCurrentNativeCopyToastKey(target);
  if (!messageKey) return;

  lastNativeCopyToastKey = messageKey;
  lastNativeCopyToastAt = Date.now();
};

const getNativeCopyToastKey = (event) => {
  const selectedKey = getCurrentNativeCopyToastKey(event.target);
  if (selectedKey) return selectedKey;

  if (event.target?.closest?.("img:not(.brand-logo img)")) return "toast.copyImage";

  const clipboardTypes = [...(event.clipboardData?.types || [])];
  if (clipboardTypes.some((type) => type.startsWith("image/"))) return "toast.copyImage";
  if (selectionContainsImage()) return "toast.copyImage";
  if (Date.now() - lastNativeCopyToastAt < 12000) return lastNativeCopyToastKey;

  return "";
};

const showNativeCopyToastSoon = (messageKey) => {
  if (!messageKey || Date.now() < copyEventSuppressedUntil) return;

  window.setTimeout(() => {
    if (Date.now() < copyEventSuppressedUntil) return;
    showCopyToast(messageKey);
  }, 60);
};

const getContextMenuAudioContext = () => {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return null;

  if (!contextMenuAudioContext) {
    contextMenuAudioContext = new AudioContextConstructor();
  }

  return contextMenuAudioContext;
};

const playContextMenuClickSound = () => {
  try {
    const audioContext = getContextMenuAudioContext();
    if (!audioContext) return;

    audioContext.resume?.().catch(() => {});

    const start = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(720, start);
    oscillator.frequency.exponentialRampToValueAtTime(1040, start + 0.045);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.055, start + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.07);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.075);
  } catch {
    contextMenuAudioContext = null;
  }
};

const prices = {
  krw: {
    free: "₩0",
    pro: "Stripe에서 확인",
    team: "Stripe에서 확인",
    ultra: "Stripe에서 확인",
  },
  usd: {
    free: "$0",
    pro: "Confirm in Stripe",
    team: "Confirm in Stripe",
    ultra: "Confirm in Stripe",
  },
};

const siteSearchIndex = [
  {
    titleKey: "search.homeTitle",
    bodyKey: "search.homeBody",
    url: "/",
    keywords: {
      ko: "home 프로필 구급대원 응급 대응 소개 주요 역량 공유 contact",
      en: "home profile emergency responder intro strengths share contact",
    },
  },
  {
    titleKey: "search.creatorTitle",
    bodyKey: "search.creatorBody",
    url: "/Creator",
    keywords: {
      ko: "creator unity 유니티 게임 개발 c# 스크립트 씬 가격 요금제 pricing personal pro enterprise industry",
      en: "creator unity game development c# script scene pricing personal pro enterprise industry",
    },
  },
  {
    titleKey: "search.bioTitle",
    bodyKey: "search.bioBody",
    url: "/Bio",
    keywords: {
      ko: "bio 자기소개 좋아하는 것 게임 ui ux roblox baldi bbq",
      en: "bio about favorite things game ui ux roblox baldi bbq",
    },
  },
  {
    titleKey: "search.aboutTitle",
    bodyKey: "search.aboutBody",
    url: "/about",
    keywords: {
      ko: "about us 소개 사이트 목적 구성 운영 방향 공개 프로필 피드백",
      en: "about us site purpose structure direction public profile feedback",
    },
  },
  {
    titleKey: "search.faqTitle",
    bodyKey: "search.faqBody",
    url: "/FAQ",
    keywords: {
      ko: "faq emt paramedic 미국 응급구조사 게임 개발자 배포 문의 개인정보",
      en: "faq emt paramedic united states game developer deployment contact privacy",
    },
  },
  {
    titleKey: "search.pricingTitle",
    bodyKey: "search.pricingBody",
    url: "/Pricing",
    keywords: {
      ko: "pricing 가격 요금제 free pro team ultra stripe 결제 비교표",
      en: "pricing plans free pro team ultra stripe checkout comparison",
    },
  },
  {
    titleKey: "search.updatesTitle",
    bodyKey: "search.updatesBody",
    url: "/updates",
    keywords: {
      ko: "최신 업데이트 변경 사항 릴리스 사이드바 쿠키 설정 접근성 새 기능",
      en: "latest updates changes release notes sidebar cookie settings accessibility new features",
    },
  },
  {
    titleKey: "search.activityTitle",
    bodyKey: "search.activityBody",
    url: "/activity",
    keywords: {
      ko: "activity 활동 최근 방문 기록 타임라인 검색 공유 로컬 저장소 지우기",
      en: "activity recent visits actions timeline search share local storage clear",
    },
  },
  {
    titleKey: "search.sitemapTitle",
    bodyKey: "search.sitemapBody",
    url: "/sitemap",
    keywords: {
      ko: "sitemap 사이트맵 전체 페이지 링크 구조 검색엔진 xml 정책 설정 도구",
      en: "sitemap site map all pages links structure search engine xml policy settings tools",
    },
  },
  {
    titleKey: "search.serverErrorTitle",
    bodyKey: "search.serverErrorBody",
    url: "/500",
    keywords: {
      ko: "500 서버 오류 server error 장애 복구 상태 status 피드백",
      en: "500 server error outage recovery status feedback",
    },
  },
  {
    titleKey: "search.maintenanceTitle",
    bodyKey: "search.maintenanceBody",
    url: "/maintenance",
    keywords: {
      ko: "maintenance 점검 서비스 정비 업데이트 상태 status 기업 안내",
      en: "maintenance planned service update status company notice",
    },
  },
  {
    titleKey: "search.comingSoonTitle",
    bodyKey: "search.comingSoonBody",
    url: "/coming-soon",
    keywords: {
      ko: "coming soon 준비 중 새 기능 베타 업데이트 출시 예정 미리보기",
      en: "coming soon planned feature beta updates upcoming preview",
    },
  },
  {
    titleKey: "search.trustTitle",
    bodyKey: "search.trustBody",
    url: "/trust",
    keywords: {
      ko: "trust center 신뢰 센터 보안 개인정보 접근성 상태 법적 안내 기업 사이트",
      en: "trust center security privacy accessibility status legal company site",
    },
  },
  {
    titleKey: "search.statusTitle",
    bodyKey: "search.statusBody",
    url: "/status",
    keywords: {
      ko: "status 상태 운영 라우트 알림 저장소 공유 메타 점검 operational",
      en: "status operational routes notifications storage sharing metadata health check",
    },
  },
  {
    titleKey: "search.securityTitle",
    bodyKey: "search.securityBody",
    url: "/security",
    keywords: {
      ko: "security 보안 쿠키 로컬 저장소 결제 알림 권한 외부 서비스",
      en: "security cookies local storage checkout notifications permissions external services",
    },
  },
  {
    titleKey: "search.settingsTitle",
    bodyKey: "search.settingsBody",
    url: "/settings",
    keywords: {
      ko: "settings 설정 테마 언어 강조 컬러 우클릭 메뉴 캐시 저장용량 kid mode 접근성 사이드바 내비게이션",
      en: "settings theme language accent color context menu cache storage kid mode accessibility sidebar navigation",
    },
  },
  {
    titleKey: "search.accessibilityTitle",
    bodyKey: "search.accessibilityBody",
    url: "/accessibility",
    keywords: {
      ko: "accessibility 접근성 키보드 포커스 색 대비 언어 화면 밀도 kid mode 움직임 감소",
      en: "accessibility keyboard focus contrast language display density kid mode reduced motion",
    },
  },
  {
    titleKey: "search.privacyTitle",
    bodyKey: "search.privacyBody",
    url: "/privacy",
    keywords: {
      ko: "privacy 개인정보처리방침 로컬 저장소 localstorage 외부 링크 피드백 결제",
      en: "privacy policy localstorage local preferences external links feedback payments",
    },
  },
  {
    titleKey: "search.licenseTitle",
    bodyKey: "search.licenseBody",
    url: "/license",
    keywords: {
      ko: "license 오픈소스 라이선스 mit 코드 이미지 로고 저작권",
      en: "license open source mit code images logo copyright",
    },
  },
  {
    titleKey: "search.termsTitle",
    bodyKey: "search.termsBody",
    url: "/terms",
    keywords: {
      ko: "terms 이용약관 약관 사용 조건 외부 결제 피드백 로컬 설정",
      en: "terms terms of use conditions external checkout feedback local settings",
    },
  },
  {
    titleKey: "search.feedbackTitle",
    bodyKey: "search.feedbackBody",
    url: "/feedback",
    keywords: {
      ko: "feedback 피드백 버그 문의 개선 google forms",
      en: "feedback bug report contact improvement google forms",
    },
  },
];

const setTheme = (theme) => {
  const themeLabelKeys = {
    dark: "settings.themeDark",
    "lights-off": "settings.lightsOff",
  };
  const resolvedTheme = normalizeTheme(theme) || "dark";

  document.documentElement.dataset.theme = resolvedTheme;
  localStorage.setItem("profile-theme", resolvedTheme);

  themeChoices.forEach((button) => {
    const isActive = button.dataset.themeChoice === resolvedTheme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (themeLabel) themeLabel.textContent = translate(themeLabelKeys[resolvedTheme] || "settings.themeDark");
  themeStatuses.forEach((status) => {
    status.textContent = translate(themeLabelKeys[resolvedTheme] || "settings.themeDark");
    status.dataset.themeState = resolvedTheme;
  });
  syncQuickSettingsControls();
};

const setLanguage = (language) => {
  const languageLabelKeys = {
    ko: "settings.languageKorean",
    en: "settings.languageEnglish",
  };
  const resolvedLanguage = normalizeLanguage(language);

  currentLanguage = resolvedLanguage;
  document.documentElement.lang = resolvedLanguage;
  localStorage.setItem("profile-language", resolvedLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-sidebar-label-key]").forEach((element) => {
    element.textContent = translate(element.dataset.sidebarLabelKey);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-mobile-quick-actions]").forEach((element) => {
    element.setAttribute("aria-label", translate("quickActions.label"));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
  });

  if (clipboardDialog && !clipboardDialog.hidden) renderClipboardCenter();

  languageChoices.forEach((button) => {
    const isActive = button.dataset.languageChoice === resolvedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (languageLabel) {
    languageLabel.textContent = translate(languageLabelKeys[resolvedLanguage] || "settings.languageEnglish");
  }

  shareLinkButton?.setAttribute("aria-label", translate("share.copy"));

  setTheme(document.documentElement.dataset.theme || getInitialTheme());
  setAccent(document.documentElement.dataset.accent || "neutral");
  setCurrency(localStorage.getItem("profile-currency") || (resolvedLanguage === "ko" ? "krw" : "usd"));
  setFastRender(document.documentElement.dataset.fastRender === "true");
  setKidMode(document.documentElement.dataset.kidMode || "off");
  settingToggles.forEach((button) => {
    updateSettingToggle(button, button.classList.contains("is-on"));
  });
  updateNavLayoutControls(document.documentElement.dataset.navLayout || "sidebar");
  updateCookiePreferenceControls(getCookiePreferences().preferences);
  updateBetaStatus(localStorage.getItem("profile-beta-settings-redesign") === "true");
  updateNotificationStatus(localStorage.getItem("profile-setting-notifications") === "true");
  updateStorageEstimate();
  renderActivityPage();
  syncQuickSettingsControls();
};

const getToggleLabelKey = (key, isOn) => {
  const labels = {
    "profile-public": isOn ? "settings.profileOn" : "settings.profileOff",
    "contact-visible": isOn ? "settings.contactOn" : "settings.contactOff",
    notifications: isOn ? "settings.notificationsOn" : "settings.notificationsOff",
    "beta-features": isOn ? "settings.betaOn" : "settings.betaOff",
    "payment-block": isOn ? "settings.paymentBlockOn" : "settings.paymentBlockOff",
    "sidebar-nav": isOn ? "settings.sidebarNavOn" : "settings.sidebarNavOff",
    "fast-render": isOn ? "settings.fastRenderOn" : "settings.fastRenderOff",
    "kid-mode": isOn ? "settings.kidModeOn" : "settings.kidModeOff",
    "custom-context-menu": isOn ? "settings.contextMenuOn" : "settings.contextMenuOff",
  };

  return labels[key];
};

const updateBetaStatus = (isOn) => {
  document.documentElement.dataset.betaFeatures = isOn ? "true" : "false";
  document.documentElement.dataset.settingsRedesign = isOn ? "true" : "false";
  document.body?.classList.toggle("settings-redesign", isOn);
  betaStatuses.forEach((status) => {
    status.textContent = translate(isOn ? "settings.betaStatusOn" : "settings.betaStatusOff");
    status.dataset.betaState = isOn ? "on" : "off";
  });
  betaRedesignStates.forEach((status) => {
    status.textContent = translate(isOn ? "settings.betaRedesignActive" : "settings.betaRedesignApply");
    status.dataset.betaFeatureState = isOn ? "active" : "idle";
  });
};

const openBetaLabDialog = () => {
  if (!betaLabDialog) return;
  betaLabDialog.classList.remove("is-closing");
  betaLabDialog.hidden = false;
};

const closeBetaLabDialog = () => {
  if (!betaLabDialog || betaLabDialog.hidden) return;
  betaLabDialog.classList.add("is-closing");
  window.setTimeout(() => {
    betaLabDialog.hidden = true;
    betaLabDialog.classList.remove("is-closing");
  }, 180);
};

const toggleBetaFeature = (feature) => {
  if (feature !== "settings-redesign") return;
  const nextValue = localStorage.getItem("profile-beta-settings-redesign") !== "true";
  localStorage.setItem("profile-beta-settings-redesign", String(nextValue));
  localStorage.setItem("profile-setting-beta-features", String(nextValue));
  updateBetaStatus(nextValue);
};

const setupBetaLabDialog = () => {
  betaLabOpen?.addEventListener("click", openBetaLabDialog);
  betaLabCloseButtons.forEach((button) => button.addEventListener("click", closeBetaLabDialog));
  betaLabDialog?.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === betaLabDialog) closeBetaLabDialog();
  });
  betaFeatureButtons.forEach((button) => {
    button.addEventListener("click", () => toggleBetaFeature(button.dataset.betaFeature));
  });
};

const getNotificationPermissionState = () => {
  if (!("Notification" in window)) return "unsupported";
  return Notification.permission;
};

const updateNotificationStatus = (isOn) => {
  const permission = getNotificationPermissionState();
  let statusKey = "settings.notificationsReady";
  if (permission === "granted" && isOn) statusKey = "settings.notificationsAllowed";
  if (permission === "denied") statusKey = "settings.notificationsBlocked";
  if (permission === "unsupported") statusKey = "settings.notificationsUnsupported";

  notificationStatuses.forEach((status) => {
    status.textContent = translate(statusKey);
    status.dataset.notificationState = permission;
  });

  notificationTestButtons.forEach((button) => {
    const isUnavailable = permission === "denied" || permission === "unsupported";
    button.disabled = isUnavailable;
    button.setAttribute("aria-disabled", String(isUnavailable));
  });
};

const syncQuickSettingsControls = () => {
  const theme = document.documentElement.dataset.theme || getInitialTheme();
  const language = currentLanguage || getInitialLanguage();
  const notificationsOn = localStorage.getItem("profile-setting-notifications") === "true";
  const fastRenderOn = document.documentElement.dataset.fastRender === "true";

  quickSettingsThemeButtons.forEach((button) => {
    const isActive = button.dataset.quickTheme === theme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  quickSettingsLanguageButtons.forEach((button) => {
    const isActive = button.dataset.quickLanguage === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (quickSettingsNotificationToggle) {
    quickSettingsNotificationToggle.classList.toggle("is-on", notificationsOn);
    quickSettingsNotificationToggle.setAttribute("aria-pressed", String(notificationsOn));
    quickSettingsNotificationToggle.disabled = getNotificationPermissionState() === "unsupported";
  }

  if (quickSettingsFastRenderToggle) {
    quickSettingsFastRenderToggle.classList.toggle("is-on", fastRenderOn);
    quickSettingsFastRenderToggle.setAttribute("aria-pressed", String(fastRenderOn));
  }
};

const setQuickSettingsStatus = (key) => {
  if (!quickSettingsStatus) return;
  quickSettingsStatus.textContent = translate(key);
};

const openQuickSettingsDialog = () => {
  if (!quickSettingsDialog) return;
  syncQuickSettingsControls();
  setQuickSettingsStatus("quickSettings.statusReady");
  quickSettingsDialog.classList.remove("is-closing");
  quickSettingsDialog.hidden = false;
};

const closeQuickSettingsDialog = () => {
  if (!quickSettingsDialog || quickSettingsDialog.hidden) return;
  quickSettingsDialog.classList.add("is-closing");
  window.setTimeout(() => {
    quickSettingsDialog.hidden = true;
    quickSettingsDialog.classList.remove("is-closing");
  }, 180);
};

const setupQuickSettingsDialog = () => {
  quickSettingsOpenButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openQuickSettingsDialog();
    });
  });

  quickSettingsCloseButtons.forEach((button) => button.addEventListener("click", closeQuickSettingsDialog));
  quickSettingsDialog?.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === quickSettingsDialog) closeQuickSettingsDialog();
  });

  quickSettingsThemeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(button.dataset.quickTheme);
      setQuickSettingsStatus("quickSettings.statusSaved");
      syncQuickSettingsControls();
    });
  });

  quickSettingsLanguageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.quickLanguage);
      setQuickSettingsStatus("quickSettings.statusSaved");
      syncQuickSettingsControls();
    });
  });

  quickSettingsNotificationToggle?.addEventListener("click", async () => {
    const requestedEnable = !quickSettingsNotificationToggle.classList.contains("is-on");
    quickSettingsNotificationToggle.disabled = true;
    const enabled = await resolveNotificationToggle(requestedEnable);
    quickSettingsNotificationToggle.disabled = false;
    localStorage.setItem("profile-setting-notifications", String(enabled));
    const notificationToggle = document.querySelector('[data-toggle-key="notifications"]');
    if (notificationToggle) updateSettingToggle(notificationToggle, enabled);
    updateNotificationStatus(enabled);
    showNotificationPermissionMessage(getNotificationPermissionState(), enabled, requestedEnable);
    setQuickSettingsStatus(enabled ? "quickSettings.statusNotificationsOn" : "quickSettings.statusNotificationsOff");
    syncQuickSettingsControls();
  });

  quickSettingsFastRenderToggle?.addEventListener("click", () => {
    setFastRender(!quickSettingsFastRenderToggle.classList.contains("is-on"));
    const fastRenderToggle = document.querySelector('[data-toggle-key="fast-render"]');
    if (fastRenderToggle) updateSettingToggle(fastRenderToggle, document.documentElement.dataset.fastRender === "true");
    setQuickSettingsStatus("quickSettings.statusSaved");
    syncQuickSettingsControls();
  });
};

const updatePaymentBlockSummary = (isBlocked) => {
  paymentBlockStatuses.forEach((status) => {
    status.textContent = translate(
      isBlocked ? "settings.overviewPaymentsBlocked" : "settings.overviewPaymentsAllowed"
    );
    status.dataset.paymentState = isBlocked ? "blocked" : "allowed";
  });
};

const updateSettingToggle = (button, isOn) => {
  button.classList.toggle("is-on", isOn);
  button.setAttribute("aria-pressed", String(isOn));

  if (button.dataset.toggleKey === "fast-render") {
    document.documentElement.dataset.fastRender = isOn ? "true" : "false";
  }

  if (button.dataset.toggleKey === "kid-mode") {
    setKidMode(isOn ? "strong" : "off");
  }

  if (button.dataset.toggleKey === "sidebar-nav") {
    document.documentElement.dataset.navLayout = isOn ? "sidebar" : "top";
  }

  if (button.dataset.toggleKey === "payment-block") {
    updatePaymentBlockSummary(isOn);
  }

  if (button.dataset.toggleKey === "notifications") {
    updateNotificationStatus(isOn);
  }

  if (button.dataset.toggleKey === "beta-features") {
    updateBetaStatus(isOn);
  }

  const labelKey = getToggleLabelKey(button.dataset.toggleKey, isOn);
  if (labelKey) button.setAttribute("aria-label", translate(labelKey));

  syncQuickSettingsControls();
};

const resolveNotificationToggle = async (nextValue) => {
  if (!nextValue) return false;
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;

  try {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  } catch {
    return false;
  }
};

const showNotificationPermissionMessage = (permission, enabled, requestedEnable = enabled) => {
  if (!("Notification" in window)) {
    showCopyToast("toast.notificationsUnsupported");
    return;
  }

  if (permission === "granted" && enabled) {
    showCopyToast("toast.notificationsAllowed");
    return;
  }

  if (permission === "denied") {
    showCopyToast("toast.notificationsBlocked");
    return;
  }

  if (requestedEnable) {
    showCopyToast("toast.notificationsDismissed");
  }
};

const showTestNotification = async () => {
  const enabled = await resolveNotificationToggle(true);
  showNotificationPermissionMessage(getNotificationPermissionState(), enabled, true);
  localStorage.setItem("profile-setting-notifications", String(enabled));

  const notificationToggle = document.querySelector('[data-toggle-key="notifications"]');
  if (notificationToggle) updateSettingToggle(notificationToggle, enabled);
  if (!enabled || getNotificationPermissionState() !== "granted") return;

  const notification = new Notification(translate("settings.notificationsTestTitle"), {
    body: translate("settings.notificationsTestBody"),
    icon: "/assets/icon-192.png",
    badge: "/assets/favicon-96.png",
    tag: "profile-test-notification",
  });

  window.setTimeout(() => notification.close?.(), 5000);
};

const setupSettingToggles = () => {
  settingToggles.forEach((button) => {
    const storageKey = `profile-setting-${button.dataset.toggleKey}`;
    const savedValue = localStorage.getItem(storageKey);
    let isOn = normalizeBooleanSetting(savedValue, button.classList.contains("is-on"));

    if (button.dataset.toggleKey === "notifications" && getNotificationPermissionState() !== "granted") {
      isOn = false;
    }

    updateSettingToggle(button, isOn);
    localStorage.setItem(storageKey, String(isOn));

    button.addEventListener("click", async () => {
      let nextValue = !button.classList.contains("is-on");

      if (button.dataset.toggleKey === "notifications") {
        const requestedEnable = nextValue;
        button.disabled = true;
        nextValue = await resolveNotificationToggle(nextValue);
        button.disabled = false;
        showNotificationPermissionMessage(getNotificationPermissionState(), nextValue, requestedEnable);
      }

      localStorage.setItem(storageKey, String(nextValue));
      if (button.dataset.toggleKey === "fast-render") {
        document.documentElement.dataset.fastRender = nextValue ? "true" : "false";
      }
      if (button.dataset.toggleKey === "kid-mode") {
        setKidMode(nextValue ? "strong" : "off");
      }
      if (button.dataset.toggleKey === "sidebar-nav") {
        document.documentElement.dataset.navLayout = nextValue ? "sidebar" : "top";
      }
      updateSettingToggle(button, nextValue);
    });
  });
};

const setupNotificationTest = () => {
  notificationTestButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showTestNotification().catch(() => {
        updateNotificationStatus(false);
      });
    });
  });
};

const updateNavLayoutControls = (layout) => {
  const resolvedLayout = layout === "top" ? "top" : "sidebar";

  document.documentElement.dataset.navLayout = resolvedLayout;
  if (resolvedLayout === "top") setSidebarCollapsed(false, false);

  navLayoutChoices.forEach((button) => {
    const isActive = button.dataset.navLayoutChoice === resolvedLayout;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
};

const setNavLayout = (layout) => {
  const resolvedLayout = layout === "top" ? "top" : "sidebar";
  localStorage.setItem("profile-setting-sidebar-nav", String(resolvedLayout === "sidebar"));
  updateNavLayoutControls(resolvedLayout);
};

const showNavLayoutDialog = () => {
  if (!navLayoutDialog) return;

  updateNavLayoutControls(document.documentElement.dataset.navLayout || "sidebar");
  navLayoutDialog.classList.remove("is-closing");
  navLayoutDialog.hidden = false;
};

const closeNavLayoutDialog = () => {
  if (!navLayoutDialog || navLayoutDialog.hidden) return;

  navLayoutDialog.classList.add("is-closing");
  window.setTimeout(() => {
    navLayoutDialog.hidden = true;
    navLayoutDialog.classList.remove("is-closing");
  }, 170);
};

const setupNavLayoutDialog = () => {
  const savedValue = localStorage.getItem("profile-setting-sidebar-nav");
  const initialLayout = normalizeBooleanSetting(savedValue, true) ? "sidebar" : "top";
  updateNavLayoutControls(initialLayout);
  setSidebarCollapsed(initialLayout === "sidebar" && getInitialSidebarCollapsed(), false);
  localStorage.setItem("profile-setting-sidebar-nav", String(initialLayout === "sidebar"));

  navLayoutOpen?.addEventListener("click", showNavLayoutDialog);
  navLayoutCloseButtons.forEach((button) => {
    button.addEventListener("click", closeNavLayoutDialog);
  });
  navLayoutDialog?.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === navLayoutDialog) closeNavLayoutDialog();
  });
  navLayoutChoices.forEach((button) => {
    button.addEventListener("click", () => {
      setNavLayout(button.dataset.navLayoutChoice);
    });
  });
};

const updateContextMenuModeControls = (mode) => {
  const resolvedMode = mode === "native" ? "native" : "custom";

  contextModeChoices.forEach((button) => {
    const isActive = button.dataset.contextMenuChoice === resolvedMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
};

const setContextMenuMode = (mode) => {
  const resolvedMode = mode === "native" ? "native" : "custom";
  localStorage.setItem("profile-setting-custom-context-menu", String(resolvedMode === "custom"));
  updateContextMenuModeControls(resolvedMode);
};

const showContextMenuModeDialog = () => {
  if (!contextModeDialog) return;

  const currentMode = normalizeBooleanSetting(
    localStorage.getItem("profile-setting-custom-context-menu"),
    true,
  )
    ? "custom"
    : "native";
  updateContextMenuModeControls(currentMode);
  contextModeDialog.classList.remove("is-closing");
  contextModeDialog.hidden = false;
};

const closeContextMenuModeDialog = () => {
  if (!contextModeDialog || contextModeDialog.hidden) return;

  contextModeDialog.classList.add("is-closing");
  window.setTimeout(() => {
    contextModeDialog.hidden = true;
    contextModeDialog.classList.remove("is-closing");
  }, 170);
};

const setupContextMenuModeDialog = () => {
  const initialMode = normalizeBooleanSetting(
    localStorage.getItem("profile-setting-custom-context-menu"),
    true,
  )
    ? "custom"
    : "native";
  updateContextMenuModeControls(initialMode);
  localStorage.setItem("profile-setting-custom-context-menu", String(initialMode === "custom"));

  contextModeOpen?.addEventListener("click", showContextMenuModeDialog);
  contextModeCloseButtons.forEach((button) => {
    button.addEventListener("click", closeContextMenuModeDialog);
  });
  contextModeDialog?.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === contextModeDialog) closeContextMenuModeDialog();
  });
  contextModeChoices.forEach((button) => {
    button.addEventListener("click", () => {
      setContextMenuMode(button.dataset.contextMenuChoice);
    });
  });
};

const setFastRender = (isOn) => {
  const nextValue = Boolean(isOn);
  document.documentElement.dataset.fastRender = nextValue ? "true" : "false";
  localStorage.setItem("profile-setting-fast-render", String(nextValue));
  localStorage.setItem("profile-fast-render", String(nextValue));
  fastRenderSwipe?.classList.toggle("is-on", nextValue);
  fastRenderSwipe?.setAttribute("aria-pressed", String(nextValue));
  fastRenderSwipe?.setAttribute(
    "aria-label",
    translate(nextValue ? "settings.fastRenderOn" : "settings.fastRenderOff"),
  );
  syncQuickSettingsControls();
};

const setupFastRenderSwipe = () => {
  if (!fastRenderSwipe) return;

  const savedValue =
    localStorage.getItem("profile-setting-fast-render") ||
    localStorage.getItem("profile-fast-render");
  setFastRender(normalizeBooleanSetting(savedValue, false));

  const updateFromPointer = (event) => {
    const rect = fastRenderSwipe.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    setFastRender(ratio >= 0.5);
  };

  fastRenderSwipe.addEventListener("click", () => {
    setFastRender(!fastRenderSwipe.classList.contains("is-on"));
  });

  fastRenderSwipe.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    fastRenderSwipe.setPointerCapture?.(event.pointerId);
  });

  fastRenderSwipe.addEventListener("pointermove", (event) => {
    if (event.buttons !== 1) return;
    updateFromPointer(event);
  });

  fastRenderSwipe.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setFastRender(true);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setFastRender(false);
    }
  });
};

const normalizeKidMode = (mode) => {
  if (mode === "true") return "strong";
  if (mode === "soft" || mode === "strong") return mode;
  return "off";
};

const setKidMode = (mode) => {
  const kidModeLabelKeys = {
    off: "settings.kidModeOffLevel",
    soft: "settings.kidModeSoftLevel",
    strong: "settings.kidModeStrongLevel",
  };
  const resolvedMode = normalizeKidMode(mode);

  document.documentElement.dataset.kidMode = resolvedMode;
  localStorage.setItem("profile-setting-kid-mode", resolvedMode);

  kidModeChoices.forEach((button) => {
    const isActive = button.dataset.kidModeChoice === resolvedMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (kidModeLabel) {
    kidModeLabel.textContent = translate(kidModeLabelKeys[resolvedMode] || "settings.kidModeOffLevel");
  }
};

const setDensity = (density) => {
  const densityLabelKeys = {
    compact: "settings.densityCompact",
    comfortable: "settings.densityComfortable",
    spacious: "settings.densitySpacious",
  };
  const resolvedDensity = normalizeDensity(density);

  document.documentElement.dataset.density = resolvedDensity;
  localStorage.setItem("profile-density", resolvedDensity);

  densityChoices.forEach((button) => {
    const isActive = button.dataset.densityChoice === resolvedDensity;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (densityLabel) {
    densityLabel.textContent = translate(densityLabelKeys[resolvedDensity] || "settings.densityComfortable");
  }
};

const setCurrency = (currency) => {
  const resolvedCurrency = currentLanguage === "ko" ? "krw" : "usd";
  localStorage.setItem("profile-currency", resolvedCurrency);
  currencySwitch?.setAttribute("data-currency", resolvedCurrency);

  currencyChoices.forEach((button) => {
    const isActive = button.dataset.currencyChoice === resolvedCurrency;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  priceLabels.forEach((label) => {
    label.textContent = prices[resolvedCurrency]?.[label.dataset.pricePlan] || label.textContent;
  });
};

const setAccent = (accent) => {
  const accentLabelKeys = {
    neutral: "settings.accentNeutral",
    blue: "settings.accentBlue",
    green: "settings.accentGreen",
    rose: "settings.accentRose",
    orange: "settings.accentOrange",
    purple: "settings.accentPurple",
    "pro-gold": "settings.accentProGold",
    "team-cyan": "settings.accentTeamCyan",
  };
  const lockedAccents = new Set(["pro-gold", "team-cyan"]);
  const fallbackAccent = "neutral";
  const requestedAccent = accentLabelKeys[accent] ? accent : fallbackAccent;
  const selectedButton = accentChoices.find((button) => button.dataset.accentChoice === requestedAccent);
  const resolvedAccent = selectedButton?.dataset.premiumPlan || lockedAccents.has(requestedAccent)
    ? fallbackAccent
    : requestedAccent;

  document.documentElement.dataset.accent = resolvedAccent;
  localStorage.setItem("profile-accent", resolvedAccent);

  accentChoices.forEach((button) => {
    const isActive = button.dataset.accentChoice === resolvedAccent;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (accentPreview) accentPreview.dataset.accentPreview = resolvedAccent;
  if (accentLabel) {
    accentLabel.textContent = translate(accentLabelKeys[resolvedAccent] || "settings.accentNeutral");
  }
};

const showPremiumNote = () => {
  if (!premiumNote) return;

  premiumNote.hidden = false;
  window.clearTimeout(showPremiumNote.timeoutId);
  showPremiumNote.timeoutId = window.setTimeout(() => {
    premiumNote.hidden = true;
  }, 2600);
};

const setupPremiumAccentLocks = () => {
  accentChoices.forEach((button) => {
    if (!button.dataset.premiumPlan) return;

    button.classList.add("is-locked");
    button.setAttribute("aria-disabled", "true");

    if (!button.querySelector(".lock-badge")) {
      const lockBadge = document.createElement("span");
      lockBadge.className = "lock-badge";
      lockBadge.setAttribute("aria-hidden", "true");
      lockBadge.textContent = "Lock";
      button.appendChild(lockBadge);
    }
  });
};

const createShareDialog = () => {
  if (!document.querySelector("[data-share-dialog]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog share-dialog";
    dialog.dataset.shareDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel share-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="share-dialog-title">
        <button class="dialog-close-button" type="button" data-share-close aria-label="닫기" data-i18n-aria-label="share.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="share.eyebrow">Share</p>
        <h2 id="share-dialog-title" data-i18n="share.title">페이지 공유</h2>
        <p data-i18n="share.body">아래 링크를 복사해서 원하는 곳에 공유할 수 있습니다.</p>
        <label class="share-link-field">
          <span data-i18n="share.linkLabel">공유 링크</span>
          <input type="text" data-share-url readonly />
        </label>
        <div class="share-socials" aria-label="외부 공유" data-i18n-aria-label="aria.externalShare">
          <button type="button" data-share-target="native" data-i18n="share.native">기기 공유</button>
          <button type="button" data-share-target="x">X</button>
          <button type="button" data-share-target="facebook">Facebook</button>
          <button type="button" data-share-target="linkedin">LinkedIn</button>
          <button type="button" data-share-target="bluesky">Bluesky</button>
        </div>
        <p class="share-status" data-share-status hidden data-i18n="share.copied">페이지 링크 복사됨</p>
        <div class="cache-warning-actions">
          <button class="button cache-confirm-button share-copy-button" type="button" data-share-copy data-i18n="share.copy">페이지 링크 복사</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  shareDialog = document.querySelector("[data-share-dialog]");
  shareClose = document.querySelector("[data-share-close]");
  shareCopy = document.querySelector("[data-share-copy]");
  shareUrl = document.querySelector("[data-share-url]");
  shareStatus = document.querySelector("[data-share-status]");
  shareTargets = [...document.querySelectorAll("[data-share-target]")];
};

const createSiteSearchDialog = () => {
  if (document.querySelector("[data-site-search-dialog]")) return;

  const dialog = document.createElement("div");
  dialog.className = "cache-dialog search-dialog";
  dialog.dataset.siteSearchDialog = "";
  dialog.hidden = true;
  dialog.innerHTML = `
    <div class="cache-dialog-panel search-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="search-dialog-title">
      <button class="dialog-close-button" type="button" data-site-search-close aria-label="닫기" data-i18n-aria-label="search.close">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      </button>
      <p class="eyebrow" data-i18n="search.eyebrow">Search</p>
      <h2 id="search-dialog-title" data-i18n="search.title">사이트 검색</h2>
      <label class="search-field">
        <span data-i18n="search.label">검색어</span>
        <input type="search" data-site-search-input data-i18n-placeholder="search.placeholder" placeholder="Unity, 요금제, FAQ처럼 입력하세요" autocomplete="off" />
      </label>
      <div class="search-results" data-site-search-results></div>
    </div>
  `;
  document.body.appendChild(dialog);
};

const createQrDialog = () => {
  if (!document.querySelector("[data-qr-dialog]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog qr-dialog";
    dialog.dataset.qrDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel qr-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="qr-dialog-title">
        <button class="dialog-close-button" type="button" data-qr-close aria-label="닫기" data-i18n-aria-label="qr.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="qr.eyebrow">QR Code</p>
        <h2 id="qr-dialog-title" data-i18n="qr.title">QR 코드 만들기</h2>
        <p data-i18n="qr.body">현재 페이지 링크를 스캔 가능한 QR 코드로 표시합니다.</p>
        <div class="qr-preview">
          <img data-qr-image alt="현재 페이지 링크 QR 코드" data-i18n-aria-label="qr.alt" />
        </div>
        <label class="share-link-field">
          <span data-i18n="share.linkLabel">공유 링크</span>
          <input type="text" data-qr-url readonly />
        </label>
        <p class="share-status" data-qr-status hidden data-i18n="qr.copied">QR 링크 복사됨</p>
        <div class="cache-warning-actions">
          <button class="button cache-confirm-button" type="button" data-qr-open-image data-i18n="qr.openImage">Open new tab image</button>
          <button class="button cache-confirm-button" type="button" data-qr-copy data-i18n="qr.copy">링크 복사</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  qrDialog = document.querySelector("[data-qr-dialog]");
  qrClose = document.querySelector("[data-qr-close]");
  qrOpenImage = document.querySelector("[data-qr-open-image]");
  qrCopy = document.querySelector("[data-qr-copy]");
  qrImage = document.querySelector("[data-qr-image]");
  qrUrl = document.querySelector("[data-qr-url]");
  qrStatus = document.querySelector("[data-qr-status]");
};

const createSourceDialog = () => {
  if (!document.querySelector("[data-source-dialog]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog source-dialog";
    dialog.dataset.sourceDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel source-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="source-dialog-title">
        <button class="dialog-close-button" type="button" data-source-close aria-label="닫기" data-i18n-aria-label="source.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="source.eyebrow">Source</p>
        <h2 id="source-dialog-title" data-i18n="source.title">페이지 소스</h2>
        <p data-i18n="source.body">현재 페이지의 HTML 소스를 사이트 안에서 확인합니다.</p>
        <div class="source-toolbar">
          <span data-source-meta data-i18n="source.meta">Current page</span>
          <p class="share-status" data-source-status hidden data-i18n="source.copied">소스가 복사되었습니다.</p>
        </div>
        <pre class="source-code" tabindex="0"><code data-source-code data-i18n="source.loading">소스를 불러오는 중입니다.</code></pre>
        <div class="cache-warning-actions">
          <button class="button cache-confirm-button" type="button" data-source-copy data-i18n="source.copy">소스 복사</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  sourceDialog = document.querySelector("[data-source-dialog]");
  sourceClose = document.querySelectorAll("[data-source-close]");
  sourceCopy = document.querySelector("[data-source-copy]");
  sourceCode = document.querySelector("[data-source-code]");
  sourceMeta = document.querySelector("[data-source-meta]");
  sourceStatus = document.querySelector("[data-source-status]");
};

const createPrintDialog = () => {
  if (!document.querySelector("[data-print-dialog]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog print-dialog";
    dialog.dataset.printDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel print-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="print-dialog-title">
        <button class="dialog-close-button" type="button" data-print-close aria-label="닫기" data-i18n-aria-label="source.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="print.eyebrow">Print</p>
        <h2 id="print-dialog-title" data-i18n="print.title">인쇄 설정</h2>
        <p data-i18n="print.body">인쇄 전용 레이아웃으로 버튼, 메뉴, 팝업을 숨기고 본문을 정리합니다.</p>
        <div class="print-options">
          <article>
            <strong data-i18n="print.optionCleanTitle">Clean layout</strong>
            <span data-i18n="print.optionCleanBody">내비게이션과 인터랙션 UI를 숨깁니다.</span>
          </article>
          <article>
            <strong data-i18n="print.optionReadableTitle">Readable text</strong>
            <span data-i18n="print.optionReadableBody">밝은 배경과 선명한 글자색으로 인쇄합니다.</span>
          </article>
          <article>
            <strong data-i18n="print.optionLinksTitle">Link friendly</strong>
            <span data-i18n="print.optionLinksBody">브라우저 인쇄 설정에서 PDF 저장도 가능합니다.</span>
          </article>
        </div>
        <div class="cache-warning-actions">
          <button class="button cache-confirm-button" type="button" data-print-confirm data-i18n="print.confirm">Print</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  printDialog = document.querySelector("[data-print-dialog]");
  printClose = document.querySelector("[data-print-close]");
  printConfirm = document.querySelector("[data-print-confirm]");
};

const createClipboardDialog = () => {
  if (!document.querySelector("[data-clipboard-dialog]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog clipboard-dialog";
    dialog.dataset.clipboardDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel clipboard-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="clipboard-dialog-title">
        <button class="dialog-close-button" type="button" data-clipboard-close aria-label="닫기" data-i18n-aria-label="clipboard.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="clipboard.eyebrow">Clipboard</p>
        <h2 id="clipboard-dialog-title" data-i18n="clipboard.title">Clipboard Center</h2>
        <p data-i18n="clipboard.body">이 사이트에서 복사한 링크, 제목, 텍스트만 이 브라우저에 임시로 저장합니다.</p>
        <p class="clipboard-status" data-clipboard-status></p>
        <div class="clipboard-list" data-clipboard-list></div>
        <div class="cache-warning-actions">
          <button class="button cache-cancel-button" type="button" data-clipboard-close data-i18n="clipboard.close">닫기</button>
          <button class="button cache-confirm-button" type="button" data-clipboard-clear data-i18n="clipboard.clear">전체 삭제</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  clipboardDialog = document.querySelector("[data-clipboard-dialog]");
  clipboardCloseButtons = [...document.querySelectorAll("[data-clipboard-close]")];
  clipboardList = document.querySelector("[data-clipboard-list]");
  clipboardStatus = document.querySelector("[data-clipboard-status]");
  clipboardClear = document.querySelector("[data-clipboard-clear]");
};

const createClipboardWarningDialog = () => {
  if (!document.querySelector("[data-clipboard-warning-dialog]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog clipboard-warning-dialog";
    dialog.dataset.clipboardWarningDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel clipboard-warning-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="clipboard-warning-title">
        <button class="dialog-close-button" type="button" data-clipboard-warning-close aria-label="닫기" data-i18n-aria-label="clipboard.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="clipboard.eyebrow">Clipboard</p>
        <h2 id="clipboard-warning-title" data-i18n="clipboard.warningTitle">민감정보 주의</h2>
        <p class="clipboard-warning" role="note" data-i18n="clipboard.warningBody">Clipboard Center는 이 브라우저의 로컬 저장소에 복사 기록을 남깁니다. 비밀번호, API 토큰, 결제 정보, 개인정보는 저장하지 않는 것이 좋습니다.</p>
        <div class="cache-warning-actions">
          <button class="button cache-cancel-button" type="button" data-clipboard-warning-close data-i18n="clipboard.close">닫기</button>
          <button class="button cache-confirm-button" type="button" data-clipboard-warning-continue data-i18n="clipboard.warningContinue">계속 열기</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  clipboardWarningDialog = document.querySelector("[data-clipboard-warning-dialog]");
  clipboardWarningCloseButtons = [...document.querySelectorAll("[data-clipboard-warning-close]")];
  clipboardWarningContinue = document.querySelector("[data-clipboard-warning-continue]");
};

const createQuickSettingsDialog = () => {
  if (!document.querySelector("[data-quick-settings-dialog]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog quick-settings-dialog";
    dialog.dataset.quickSettingsDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel quick-settings-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="quick-settings-title">
        <button class="dialog-close-button" type="button" data-quick-settings-close aria-label="닫기" data-i18n-aria-label="share.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="quickSettings.eyebrow">Quick settings</p>
        <h2 id="quick-settings-title" data-i18n="quickSettings.title">빠른 설정</h2>
        <p data-i18n="quickSettings.body">자주 쓰는 표시 설정만 빠르게 조정합니다. 자세한 항목은 전체 설정에서 관리합니다.</p>
        <div class="quick-settings-grid">
          <section class="quick-settings-section" aria-labelledby="quick-settings-general-title">
            <h3 id="quick-settings-general-title" data-i18n="quickSettings.general">General</h3>
            <div class="quick-settings-row">
              <div>
                <strong data-i18n="settings.themeTitle">Theme mode</strong>
                <span data-i18n="quickSettings.themeHint">Choose a quiet display theme.</span>
              </div>
              <div class="quick-settings-segment" role="group" aria-label="Theme mode" data-i18n-aria-label="aria.themeMode">
                <button type="button" data-quick-theme="dark" data-i18n="settings.themeDark">다크</button>
                <button type="button" data-quick-theme="lights-off" data-i18n="settings.lightsOff">Lights Off</button>
              </div>
            </div>
            <div class="quick-settings-row">
              <div>
                <strong data-i18n="settings.languageTitle">Language</strong>
                <span data-i18n="quickSettings.languageHint">Switch the interface language.</span>
              </div>
              <div class="quick-settings-segment" role="group" aria-label="Language" data-i18n-aria-label="aria.language">
                <button type="button" data-quick-language="ko" data-i18n="settings.languageKorean">한국어</button>
                <button type="button" data-quick-language="en" data-i18n="settings.languageEnglish">English</button>
              </div>
            </div>
          </section>
          <section class="quick-settings-section" aria-labelledby="quick-settings-controls-title">
            <h3 id="quick-settings-controls-title" data-i18n="quickSettings.controls">Controls</h3>
            <button class="quick-settings-toggle" type="button" data-quick-notifications aria-pressed="false">
              <span>
                <strong data-i18n="settings.notificationsTitle">Notifications</strong>
                <small data-i18n="quickSettings.notificationsHint">Ask this browser for site notification permission.</small>
              </span>
              <i aria-hidden="true"></i>
            </button>
            <button class="quick-settings-toggle" type="button" data-quick-fast-render aria-pressed="false">
              <span>
                <strong data-i18n="settings.fastRenderTitle">Fast rendering</strong>
                <small data-i18n="quickSettings.fastRenderHint">Reduce blur, shadows, and animation.</small>
              </span>
              <i aria-hidden="true"></i>
            </button>
          </section>
        </div>
        <p class="quick-settings-status" data-quick-settings-status role="status" aria-live="polite"></p>
        <div class="quick-settings-actions">
          <a class="button secondary-button" href="/settings#storage" data-i18n="settings.cookieSettingsButton">쿠키 설정</a>
          <a class="button secondary-button" href="/accessibility" data-i18n="settings.accessibilityOpen">Accessibility 열기</a>
          <a class="button cache-confirm-button" href="/settings" data-i18n="quickSettings.fullSettings">전체 설정 열기</a>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  quickSettingsDialog = document.querySelector("[data-quick-settings-dialog]");
  quickSettingsCloseButtons = [...document.querySelectorAll("[data-quick-settings-close]")];
  quickSettingsOpenButtons = [...document.querySelectorAll("[data-quick-settings-open]")];
  quickSettingsThemeButtons = [...document.querySelectorAll("[data-quick-theme]")];
  quickSettingsLanguageButtons = [...document.querySelectorAll("[data-quick-language]")];
  quickSettingsNotificationToggle = document.querySelector("[data-quick-notifications]");
  quickSettingsFastRenderToggle = document.querySelector("[data-quick-fast-render]");
  quickSettingsStatus = document.querySelector("[data-quick-settings-status]");
};

const storageConsentKey = "profile-storage-consent";
const storageConsentCookieName = "profile_storage_consent";
const cookiePreferenceKey = "profile-cookie-preferences";

const getStorageConsentCookie = () =>
  document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${storageConsentCookieName}=`))
    ?.split("=")[1] || "";

const hasStorageConsent = () =>
  localStorage.getItem(storageConsentKey) === "accepted" ||
  getStorageConsentCookie() === "accepted";

const getCookiePreferences = () => {
  try {
    const savedPreferences = JSON.parse(localStorage.getItem(cookiePreferenceKey) || "{}");
    if (typeof savedPreferences.preferences === "boolean") {
      return { essential: true, preferences: savedPreferences.preferences };
    }
  } catch (error) {
    localStorage.removeItem(cookiePreferenceKey);
  }

  return { essential: true, preferences: hasStorageConsent() };
};

const saveCookiePreferences = (preferences) => {
  localStorage.setItem(
    cookiePreferenceKey,
    JSON.stringify({
      essential: true,
      preferences: Boolean(preferences.preferences),
    }),
  );
};

const setStorageConsent = () => {
  localStorage.setItem(storageConsentKey, "accepted");
  saveCookiePreferences({ preferences: true });
  document.cookie = `${storageConsentCookieName}=accepted; Max-Age=31536000; Path=/; SameSite=Lax`;
};

const clearStorageConsent = () => {
  localStorage.removeItem(storageConsentKey);
  document.cookie = `${storageConsentCookieName}=; Max-Age=0; Path=/; SameSite=Lax`;
};

const createCookieNotice = () => {
  if (
    hasStorageConsent() ||
    localStorage.getItem(cookiePreferenceKey) ||
    document.querySelector("[data-cookie-notice]")
  ) {
    return;
  }

  const notice = document.createElement("section");
  notice.className = "cookie-notice";
  notice.dataset.cookieNotice = "";
  notice.setAttribute("aria-label", "브라우저 저장 안내");
  notice.setAttribute("data-i18n-aria-label", "cookie.title");
  notice.innerHTML = `
    <div class="cookie-notice-copy">
      <p class="eyebrow" data-i18n="cookie.eyebrow">Privacy</p>
      <h2 data-i18n="cookie.title">브라우저 저장 안내</h2>
      <p data-i18n="cookie.body">이 사이트는 테마, 언어, 사이드바 상태처럼 화면을 편하게 보기 위한 설정을 이 브라우저에 저장합니다. 로그인 추적용 쿠키나 광고 쿠키는 사용하지 않습니다.</p>
    </div>
    <div class="cookie-notice-actions">
      <a href="/privacy#cookies" data-i18n="cookie.learnMore">자세히 알아보기</a>
      <a href="/settings#storage" data-i18n="cookie.settings">Settings 보기</a>
      <button type="button" data-cookie-accept data-i18n="cookie.accept">확인</button>
    </div>
  `;
  document.body.appendChild(notice);
};

const closeCookieNotice = () => {
  const notice = document.querySelector("[data-cookie-notice]");
  if (!notice) return;

  setStorageConsent();
  notice.classList.add("is-closing");
  window.setTimeout(() => notice.remove(), 190);
};

const setupCookieNotice = () => {
  createCookieNotice();
  document.querySelector("[data-cookie-accept]")?.addEventListener("click", closeCookieNotice);
};

const updateCookiePreferenceControls = (isOn) => {
  cookiePreferenceToggle?.classList.toggle("is-on", isOn);
  cookiePreferenceToggle?.setAttribute("aria-pressed", String(isOn));
  cookiePreferenceToggle?.setAttribute(
    "aria-label",
    translate(isOn ? "settings.cookiePreferenceOn" : "settings.cookiePreferenceOff"),
  );
  if (cookieSettingsStatus) {
    cookieSettingsStatus.textContent = translate(
      isOn ? "settings.cookieStatusOn" : "settings.cookieStatusOff",
    );
  }
};

const setCookiePreference = (isOn) => {
  const nextValue = Boolean(isOn);

  if (nextValue) setStorageConsent();
  else clearStorageConsent();

  saveCookiePreferences({ preferences: nextValue });
  updateCookiePreferenceControls(nextValue);

  const notice = document.querySelector("[data-cookie-notice]");
  if (notice) {
    notice.classList.add("is-closing");
    window.setTimeout(() => notice.remove(), 190);
  }
};

const showCookieSettingsDialog = () => {
  if (!cookieSettingsDialog) return;

  updateCookiePreferenceControls(getCookiePreferences().preferences);
  cookieSettingsDialog.classList.remove("is-closing");
  cookieSettingsDialog.hidden = false;
};

const closeCookieSettingsDialog = () => {
  if (!cookieSettingsDialog || cookieSettingsDialog.hidden) return;

  cookieSettingsDialog.classList.add("is-closing");
  window.setTimeout(() => {
    cookieSettingsDialog.hidden = true;
    cookieSettingsDialog.classList.remove("is-closing");
  }, 170);
};

const setupCookieSettingsDialog = () => {
  updateCookiePreferenceControls(getCookiePreferences().preferences);
  cookieSettingsOpen?.addEventListener("click", showCookieSettingsDialog);
  cookieSettingsCloseButtons.forEach((button) => {
    button.addEventListener("click", closeCookieSettingsDialog);
  });
  cookieSettingsDialog?.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === cookieSettingsDialog) closeCookieSettingsDialog();
  });
  cookiePreferenceToggle?.addEventListener("click", () => {
    setCookiePreference(!cookiePreferenceToggle.classList.contains("is-on"));
  });
};

const selectHomeTab = (selectedTab) => {
  if (!selectedTab) return;

  homeTabs.forEach((button) => {
    const isActive = button.dataset.homeTab === selectedTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  homePanels.forEach((panel) => {
    const isActive = panel.dataset.homePanel === selectedTab;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
};

const normalizeSearchText = (value) => value.toLowerCase().replace(/\s+/g, " ").trim();

const getSearchResultsMarkup = (query = "") => {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) {
    return `<p class="search-empty">${translate("search.empty")}</p>`;
  }

  const results = siteSearchIndex
    .map((item) => {
      const searchable = normalizeSearchText(
        [
          translate(item.titleKey),
          translate(item.bodyKey),
          item.keywords.ko,
          item.keywords.en,
        ].join(" "),
      );
      const score = searchable.includes(normalizedQuery) ? normalizedQuery.length : 0;
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!results.length) {
    return `<p class="search-empty">${translate("search.noResults")}</p>`;
  }

  return results
    .map(
      (item) => `
        <button type="button" class="search-result" data-search-url="${item.url}">
          <strong>${translate(item.titleKey)}</strong>
          <span>${translate(item.bodyKey)}</span>
        </button>
      `,
    )
    .join("");
};

const renderSearchResults = (query = "") => {
  const resultsContainer = document.querySelector("[data-site-search-results]");
  if (!resultsContainer) return;

  resultsContainer.innerHTML = getSearchResultsMarkup(query);
};

const renderSearchPageResults = (query = "") => {
  const resultsContainer = document.querySelector("[data-search-page-results]");
  if (!resultsContainer) return;

  resultsContainer.innerHTML = getSearchResultsMarkup(query);
};

const showSiteSearchDialog = () => {
  const dialog = document.querySelector("[data-site-search-dialog]");
  const input = document.querySelector("[data-site-search-input]");
  if (!dialog || !input) return;

  recordActivity("action", translate("activity.openSearch"));
  dialog.classList.remove("is-closing");
  dialog.hidden = false;
  input.value = "";
  renderSearchResults();
  window.setTimeout(() => input.focus(), 40);
};

const closeSiteSearchDialog = () => {
  const dialog = document.querySelector("[data-site-search-dialog]");
  if (!dialog || dialog.hidden) return;

  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    dialog.hidden = true;
    dialog.classList.remove("is-closing");
  }, 170);
};

const setupSiteSearch = () => {
  const dialog = document.querySelector("[data-site-search-dialog]");
  const input = document.querySelector("[data-site-search-input]");
  const closeButton = document.querySelector("[data-site-search-close]");
  const resultsContainer = document.querySelector("[data-site-search-results]");
  const openButtons = [...document.querySelectorAll("[data-site-search-open]")];

  openButtons.forEach((button) => button.addEventListener("click", showSiteSearchDialog));
  input?.addEventListener("input", () => renderSearchResults(input.value));
  closeButton?.addEventListener("click", closeSiteSearchDialog);
  dialog?.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === dialog) closeSiteSearchDialog();
  });
  resultsContainer?.addEventListener("click", (event) => {
    const result = event.target.closest?.("[data-search-url]");
    if (!result) return;
    window.location.href = result.dataset.searchUrl;
  });
};

const setupMobileQuickActions = () => {
  const bar = document.querySelector("[data-mobile-quick-actions]");
  if (!bar) return;

  bar.addEventListener("click", (event) => {
    const button = event.target.closest?.("[data-mobile-quick-action]");
    if (!button) return;

    const action = button.dataset.mobileQuickAction;
    if (action === "search") {
      showSiteSearchDialog();
      return;
    }

    if (action === "share") {
      showShareDialog();
      return;
    }

    if (action === "quick-settings") {
      openQuickSettingsDialog();
    }
  });
};

const setupSearchPage = () => {
  const input = document.querySelector("[data-search-page-input]");
  const resultsContainer = document.querySelector("[data-search-page-results]");
  if (!input || !resultsContainer) return;

  const params = new URLSearchParams(window.location.search);
  input.value = params.get("q") || "";
  renderSearchPageResults(input.value);

  input.addEventListener("input", () => {
    renderSearchPageResults(input.value);
  });

  resultsContainer.addEventListener("click", (event) => {
    const result = event.target.closest?.("[data-search-url]");
    if (!result) return;
    window.location.href = result.dataset.searchUrl;
  });
};

const activityLogKey = "profile-activity-log";
const homeSubscriptionKey = "profile-home-email-subscription";
const maxActivityItems = 48;

const getStoredHomeSubscription = () => {
  try {
    const value = JSON.parse(localStorage.getItem(homeSubscriptionKey) || "null");
    return value && typeof value.email === "string" ? value : null;
  } catch {
    localStorage.removeItem(homeSubscriptionKey);
    return null;
  }
};

const setHomeSubscribeStatus = (key, type = "info") => {
  if (!homeSubscribeStatus) return;
  homeSubscribeStatus.textContent = translate(key);
  homeSubscribeStatus.dataset.statusType = type;
};

const setupHomeSubscribeForm = () => {
  if (!homeSubscribeForm || !homeSubscribeEmail) return;

  const saved = getStoredHomeSubscription();
  if (saved) {
    homeSubscribeEmail.value = saved.email;
    const selectedTopics = new Set(saved.topics || []);
    homeSubscribeTopics.forEach((input) => {
      input.checked = selectedTopics.has(input.value);
    });
    setHomeSubscribeStatus("home.subscribeSaved", "success");
  }

  homeSubscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = homeSubscribeEmail.value.trim();
    const topics = homeSubscribeTopics.filter((input) => input.checked).map((input) => input.value);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setHomeSubscribeStatus("home.subscribeInvalid", "error");
      homeSubscribeEmail.focus();
      return;
    }

    if (topics.length === 0) {
      setHomeSubscribeStatus("home.subscribeNeedTopic", "error");
      return;
    }

    localStorage.setItem(
      homeSubscriptionKey,
      JSON.stringify({
        email,
        topics,
        createdAt: new Date().toISOString(),
      }),
    );
    setHomeSubscribeStatus("home.subscribeSaved", "success");
    recordActivity("action", "Email subscription saved");
  });
};

const getActivityLog = () => {
  try {
    const items = JSON.parse(localStorage.getItem(activityLogKey) || "[]");
    return Array.isArray(items) ? items.filter((item) => item && item.createdAt) : [];
  } catch {
    return [];
  }
};

const saveActivityLog = (items) => {
  localStorage.setItem(activityLogKey, JSON.stringify(items.slice(0, maxActivityItems)));
};

const getPageActivityLabel = () => {
  const activeNavLabel = document.querySelector(".nav-links .is-active span")?.textContent?.trim();
  const heading = document.querySelector("h1")?.textContent?.trim();
  return activeNavLabel || heading || document.title.replace(/\s*[·|-].*$/, "") || "Page";
};

const recordActivity = (type, label, url = window.location.pathname) => {
  const now = Date.now();
  const normalizedType = type === "action" ? "action" : "visit";
  const items = getActivityLog();
  const previous = items[0];

  if (
    previous &&
    previous.type === normalizedType &&
    previous.label === label &&
    previous.url === url &&
    now - Number(previous.createdAt) < 30000
  ) {
    return;
  }

  saveActivityLog([
    {
      id: `${now}-${Math.random().toString(36).slice(2, 8)}`,
      type: normalizedType,
      label,
      url,
      createdAt: now,
    },
    ...items,
  ]);
};

const formatActivityTime = (createdAt) => {
  const formatter = new Intl.DateTimeFormat(currentLanguage === "ko" ? "ko-KR" : "en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return formatter.format(new Date(createdAt));
};

const escapeActivityText = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const getSafeActivityUrl = (url) => {
  const value = String(url || "/");
  return value.startsWith("/") && !value.startsWith("//") ? value : "/";
};

const renderActivityPage = () => {
  const list = document.querySelector("[data-activity-list]");
  if (!list) return;

  const items = getActivityLog();
  const visits = items.filter((item) => item.type === "visit").length;
  const actions = items.filter((item) => item.type === "action").length;
  const latest = items[0]?.createdAt ? formatActivityTime(items[0].createdAt) : "--";

  document.querySelectorAll("[data-activity-visits]").forEach((element) => {
    element.textContent = String(visits);
  });
  document.querySelectorAll("[data-activity-actions]").forEach((element) => {
    element.textContent = String(actions);
  });
  document.querySelectorAll("[data-activity-latest]").forEach((element) => {
    element.textContent = latest;
  });

  if (!items.length) {
    list.innerHTML = `
      <article class="activity-empty">
        <strong>${translate("activity.emptyTitle")}</strong>
        <span>${translate("activity.emptyBody")}</span>
      </article>
    `;
    return;
  }

  list.innerHTML = items
    .map((item) => {
      const typeLabel = item.type === "action" ? translate("activity.actions") : translate("activity.visits");
      const href = getSafeActivityUrl(item.url);
      return `
        <article class="activity-item">
          <span class="activity-dot" aria-hidden="true"></span>
          <div>
            <strong>${escapeActivityText(item.label)}</strong>
            <span>${escapeActivityText(typeLabel)} · ${escapeActivityText(formatActivityTime(item.createdAt))}</span>
          </div>
          <a href="${escapeActivityText(href)}">${escapeActivityText(href)}</a>
        </article>
      `;
    })
    .join("");
};

const setupActivityPage = () => {
  const clearButton = document.querySelector("[data-activity-clear]");
  clearButton?.addEventListener("click", () => {
    localStorage.removeItem(activityLogKey);
    renderActivityPage();
  });
  renderActivityPage();
};

const recordPageActivity = () => {
  recordActivity("visit", `${translate("activity.visit")}: ${getPageActivityLabel()}`);
};

const clearSiteCache = () => {
  closeClearCacheWarning();

  [
    "profile-theme",
    "profile-language",
    "profile-density",
    "profile-currency",
    "profile-accent",
    "profile-fast-render",
    "profile-setting-profile-public",
    "profile-setting-contact-visible",
    "profile-setting-payment-block",
    "profile-setting-beta-features",
    "profile-beta-settings-redesign",
    "profile-setting-notifications",
    "profile-setting-sidebar-nav",
    "profile-sidebar-collapsed",
    "profile-setting-fast-render",
    "profile-setting-kid-mode",
    "profile-setting-custom-context-menu",
    "profile-cookie-preferences",
    "profile-browser-usage-total-ms",
    "profile-browser-usage-used-ms",
    "profile-browser-usage-window-start-ms",
    activityLogKey,
    homeSubscriptionKey,
  ].forEach((key) => localStorage.removeItem(key));
  clearStorageConsent();

  document.documentElement.dataset.theme = "dark";
  document.documentElement.dataset.accent = "neutral";
  document.documentElement.dataset.fastRender = "false";
  document.documentElement.dataset.kidMode = "off";
  document.documentElement.dataset.navLayout = "sidebar";
  setLanguage("en");
  setDensity("comfortable");
  setCurrency("usd");
  setAccent("neutral");
  setNavLayout("sidebar");
  setContextMenuMode("custom");
  setFastRender(false);
  setKidMode("off");

  settingToggles.forEach((button) => {
    const defaultOn = !["fast-render", "payment-block", "notifications"].includes(button.dataset.toggleKey);
    localStorage.setItem(`profile-setting-${button.dataset.toggleKey}`, String(defaultOn));
    updateSettingToggle(button, defaultOn);
  });

  if (!clearCacheNote) return;
  clearCacheNote.hidden = false;
  window.clearTimeout(clearSiteCache.timeoutId);
  clearSiteCache.timeoutId = window.setTimeout(() => {
    clearCacheNote.hidden = true;
  }, 2600);
  updateStorageEstimate();
};

const formatBytes = (bytes) => {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";

  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const maximumFractionDigits = value >= 10 || unitIndex === 0 ? 0 : 1;
  return `${value.toLocaleString(undefined, { maximumFractionDigits })} ${units[unitIndex]}`;
};

const browserUsageLimitMs = 5 * 60 * 60 * 1000;
const browserUsageWeeklyLimitMs = 7 * browserUsageLimitMs;
const browserUsageWeekMs = 7 * 24 * 60 * 60 * 1000;
const browserUsageStartedAt = Date.now();
let browserUsageWindowStart = Number.parseInt(localStorage.getItem("profile-browser-usage-window-start-ms") || "0", 10);
let browserUsageBaseMs = Number.parseInt(
  localStorage.getItem("profile-browser-usage-used-ms") || localStorage.getItem("profile-browser-usage-total-ms") || "0",
  10,
);
let browserUsageWeeklyWindowStart = Number.parseInt(localStorage.getItem("profile-browser-usage-week-start-ms") || "0", 10);
let browserUsageWeeklyBaseMs = Number.parseInt(localStorage.getItem("profile-browser-usage-week-used-ms") || "0", 10);
let browserUsageRedirected = false;
let browserUsageWindowStateChanged = false;
let browserUsageWeeklyWindowStateChanged = false;
if (!Number.isFinite(browserUsageWindowStart) || browserUsageWindowStart <= 0) {
  browserUsageWindowStart = browserUsageStartedAt;
  browserUsageWindowStateChanged = true;
}
if (!Number.isFinite(browserUsageBaseMs) || browserUsageBaseMs < 0) {
  browserUsageBaseMs = 0;
  browserUsageWindowStateChanged = true;
}
if (!Number.isFinite(browserUsageWeeklyWindowStart) || browserUsageWeeklyWindowStart <= 0) {
  browserUsageWeeklyWindowStart = browserUsageStartedAt;
  browserUsageWeeklyWindowStateChanged = true;
}
if (!Number.isFinite(browserUsageWeeklyBaseMs) || browserUsageWeeklyBaseMs < 0) {
  browserUsageWeeklyBaseMs = 0;
  browserUsageWeeklyWindowStateChanged = true;
}
if (browserUsageWindowStateChanged) {
  localStorage.setItem("profile-browser-usage-window-start-ms", String(browserUsageWindowStart));
  localStorage.setItem("profile-browser-usage-used-ms", String(browserUsageBaseMs));
  localStorage.removeItem("profile-browser-usage-total-ms");
}
if (browserUsageWeeklyWindowStateChanged) {
  localStorage.setItem("profile-browser-usage-week-start-ms", String(browserUsageWeeklyWindowStart));
  localStorage.setItem("profile-browser-usage-week-used-ms", String(browserUsageWeeklyBaseMs));
}

const formatUsageResetTime = (timestamp) => {
  const date = new Date(timestamp);
  const locale = currentLanguage === "ko" ? "ko-KR" : "en-US";
  const timeText = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  return translate("usage.resetAt").replace("{time}", timeText);
};

const formatUsageResetDate = (timestamp) => {
  const date = new Date(timestamp);
  const locale = currentLanguage === "ko" ? "ko-KR" : "en-US";
  const dateText = new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
  }).format(date);

  return translate("usage.resetOn").replace("{date}", dateText);
};

const refreshBrowserUsageWindow = () => {
  const now = Date.now();
  if (now - browserUsageWindowStart < browserUsageLimitMs) return;

  browserUsageWindowStart = now;
  browserUsageBaseMs = 0;
  browserUsageRedirected = false;
  localStorage.setItem("profile-browser-usage-window-start-ms", String(browserUsageWindowStart));
  localStorage.setItem("profile-browser-usage-used-ms", "0");
  localStorage.removeItem("profile-browser-usage-total-ms");
};

const refreshBrowserUsageWeeklyWindow = () => {
  const now = Date.now();
  if (now - browserUsageWeeklyWindowStart < browserUsageWeekMs) return;

  browserUsageWeeklyWindowStart = now;
  browserUsageWeeklyBaseMs = 0;
  localStorage.setItem("profile-browser-usage-week-start-ms", String(browserUsageWeeklyWindowStart));
  localStorage.setItem("profile-browser-usage-week-used-ms", "0");
};

refreshBrowserUsageWindow();
refreshBrowserUsageWeeklyWindow();

const getCurrentBrowserUsageMs = () => {
  refreshBrowserUsageWindow();
  return browserUsageBaseMs + (Date.now() - Math.max(browserUsageStartedAt, browserUsageWindowStart));
};

const getCurrentWeeklyUsageMs = () => {
  refreshBrowserUsageWeeklyWindow();
  return browserUsageWeeklyBaseMs + (Date.now() - Math.max(browserUsageStartedAt, browserUsageWeeklyWindowStart));
};

const persistBrowserUsage = () => {
  refreshBrowserUsageWindow();
  refreshBrowserUsageWeeklyWindow();
  localStorage.setItem("profile-browser-usage-window-start-ms", String(browserUsageWindowStart));
  localStorage.setItem("profile-browser-usage-used-ms", String(Math.min(getCurrentBrowserUsageMs(), browserUsageLimitMs)));
  localStorage.setItem("profile-browser-usage-week-start-ms", String(browserUsageWeeklyWindowStart));
  localStorage.setItem("profile-browser-usage-week-used-ms", String(Math.min(getCurrentWeeklyUsageMs(), browserUsageWeeklyLimitMs)));
  localStorage.removeItem("profile-browser-usage-total-ms");
};

const updateBrowserUsage = () => {
  refreshBrowserUsageWindow();
  refreshBrowserUsageWeeklyWindow();
  if (
    !browserUsageDailyRemaining &&
    !browserUsageWeeklyRemaining
  ) return;

  const totalMs = Math.min(getCurrentBrowserUsageMs(), browserUsageLimitMs);
  const weeklyMs = Math.min(getCurrentWeeklyUsageMs(), browserUsageWeeklyLimitMs);
  const dailyRemainingRatio = Math.max(1 - totalMs / browserUsageLimitMs, 0);
  const weeklyRemainingRatio = Math.max(1 - weeklyMs / browserUsageWeeklyLimitMs, 0);
  const dailyRemainingPercent = Math.ceil(dailyRemainingRatio * 100);
  const weeklyRemainingPercent = Math.ceil(weeklyRemainingRatio * 100);

  if (browserUsageDailyReset) browserUsageDailyReset.textContent = formatUsageResetTime(browserUsageWindowStart + browserUsageLimitMs);
  if (browserUsageDailyRemaining) {
    browserUsageDailyRemaining.textContent = translate("usage.remainingPercent").replace("{percent}", String(dailyRemainingPercent));
  }
  if (browserUsageDailyBar) browserUsageDailyBar.style.transform = `scaleX(${dailyRemainingRatio})`;
  if (browserUsageWeeklyReset) browserUsageWeeklyReset.textContent = formatUsageResetDate(browserUsageWeeklyWindowStart + browserUsageWeekMs);
  if (browserUsageWeeklyRemaining) {
    browserUsageWeeklyRemaining.textContent = translate("usage.remainingPercent").replace("{percent}", String(weeklyRemainingPercent));
  }
  if (browserUsageWeeklyBar) browserUsageWeeklyBar.style.transform = `scaleX(${weeklyRemainingRatio})`;
  if (totalMs >= browserUsageLimitMs && !browserUsageRedirected) {
    browserUsageRedirected = true;
    persistBrowserUsage();
    window.setTimeout(() => {
      window.location.href = "/Pricing";
    }, 650);
  }
};

const updateStorageEstimate = async () => {
  if (!storageMeter) return;

  if (!navigator.storage?.estimate) {
    storageMeter.classList.add("is-unsupported");
    storagePercents.forEach((storagePercent) => {
      storagePercent.textContent = "--";
    });
    if (storageUsage) storageUsage.textContent = translate("settings.storageUsageUnsupported");
    if (storageBar) storageBar.style.transform = "scaleX(0)";
    return;
  }

  const estimate = await navigator.storage.estimate();
  const usage = estimate.usage || 0;
  const quota = estimate.quota || 0;
  const percent = quota > 0 ? Math.min((usage / quota) * 100, 100) : 0;

  storagePercents.forEach((storagePercent) => {
    storagePercent.textContent = `${percent.toFixed(percent < 1 ? 2 : 1)}%`;
  });
  if (storageUsage) storageUsage.textContent = `${formatBytes(usage)} / ${formatBytes(quota)}`;
  if (storageBar) storageBar.style.transform = `scaleX(${Math.max(percent / 100, usage > 0 ? 0.02 : 0)})`;
};

const showClearCacheWarning = () => {
  if (!clearCacheWarning) {
    clearSiteCache();
    return;
  }

  if (clearCacheNote) clearCacheNote.hidden = true;
  clearCacheWarning.hidden = false;
};

const showFeedbackWarning = (event) => {
  if (!feedbackWarning) return;

  event?.preventDefault();
  feedbackWarning.hidden = false;
};

const showSubscribeWarning = (button) => {
  if (localStorage.getItem("profile-setting-payment-block") === "true") {
    pendingSubscribeUrl = "";
    if (!subscribeWarning) {
      window.alert(translate("pricing.paymentBlockedBody"));
      return;
    }

    const title = subscribeWarning.querySelector("#subscribe-dialog-title");
    const body = subscribeWarning.querySelector("[data-i18n='pricing.subscribeWarningBody']");

    subscribeWarning.dataset.paymentBlocked = "true";
    if (title) title.textContent = translate("pricing.paymentBlockedTitle");
    if (body) body.textContent = translate("pricing.paymentBlockedBody");
    if (subscribeConfirm) subscribeConfirm.hidden = true;
    if (subscribeCancel) subscribeCancel.textContent = translate("pricing.paymentBlockedClose");
    subscribeWarning.hidden = false;
    return;
  }

  pendingSubscribeUrl = button.dataset.subscribeUrl || "";
  if (subscribeWarning) delete subscribeWarning.dataset.paymentBlocked;
  if (subscribeConfirm) subscribeConfirm.hidden = false;
  if (subscribeCancel) subscribeCancel.textContent = translate("pricing.subscribeCancel");
  if (!subscribeWarning) {
    if (pendingSubscribeUrl) window.open(pendingSubscribeUrl, "_blank", "noopener,noreferrer");
    return;
  }

  subscribeWarning.hidden = false;
};

const showUsageLearnDialog = () => {
  if (!usageLearnDialog) return;

  usageLearnDialog.hidden = false;
};

const openFeedbackForm = () => {
  closeFeedbackWarning();
  window.open(feedbackFormUrl, "_blank", "noopener,noreferrer");
};

const openSubscriptionCheckout = () => {
  const url = pendingSubscribeUrl;
  closeSubscribeWarning();
  pendingSubscribeUrl = "";
  if (url) window.open(url, "_blank", "noopener,noreferrer");
};

const positionSelectMenu = (select, menu) => {
  if (!select || !menu || menu.hidden) return;

  select.classList.remove("is-open-up");
  const selectRect = select.getBoundingClientRect();
  const menuHeight = menu.offsetHeight;
  const spaceBelow = window.innerHeight - selectRect.bottom;
  const spaceAbove = selectRect.top;
  select.classList.toggle("is-open-up", spaceBelow < menuHeight + 16 && spaceAbove > spaceBelow);
};

const positionOpenSelectMenus = () => {
  positionSelectMenu(themeSelect, themeMenu);
  positionSelectMenu(languageSelect, languageMenu);
  positionSelectMenu(densitySelect, densityMenu);
  positionSelectMenu(kidModeSelect, kidModeMenu);
  positionSelectMenu(accentSelect, accentMenu);
};

const setAccentMenuOpen = (isOpen) => {
  accentSelect?.classList.toggle("is-open", isOpen);
  accentTrigger?.setAttribute("aria-expanded", String(isOpen));
  if (accentMenu) accentMenu.hidden = !isOpen;
  if (isOpen) positionSelectMenu(accentSelect, accentMenu);
  else accentSelect?.classList.remove("is-open-up");
};

const setSettingSelectOpen = (select, trigger, menu, isOpen) => {
  select?.classList.toggle("is-open", isOpen);
  trigger?.setAttribute("aria-expanded", String(isOpen));
  if (menu) menu.hidden = !isOpen;
  if (isOpen) positionSelectMenu(select, menu);
  else select?.classList.remove("is-open-up");
};

const closeClearCacheWarning = () => {
  if (!clearCacheWarning || clearCacheWarning.hidden) return;

  clearCacheWarning.classList.add("is-closing");
  window.setTimeout(() => {
    clearCacheWarning.hidden = true;
    clearCacheWarning.classList.remove("is-closing");
  }, 170);
};

const closeFeedbackWarning = () => {
  if (!feedbackWarning || feedbackWarning.hidden) return;

  feedbackWarning.classList.add("is-closing");
  window.setTimeout(() => {
    feedbackWarning.hidden = true;
    feedbackWarning.classList.remove("is-closing");
  }, 170);
};

const closeSubscribeWarning = () => {
  if (!subscribeWarning || subscribeWarning.hidden) return;

  subscribeWarning.classList.add("is-closing");
  window.setTimeout(() => {
    subscribeWarning.hidden = true;
    subscribeWarning.classList.remove("is-closing");
    delete subscribeWarning.dataset.paymentBlocked;
    const title = subscribeWarning.querySelector("#subscribe-dialog-title");
    const body = subscribeWarning.querySelector("[data-i18n='pricing.subscribeWarningBody']");
    if (title) title.textContent = translate("pricing.subscribeWarningTitle");
    if (body) body.textContent = translate("pricing.subscribeWarningBody");
    if (subscribeConfirm) subscribeConfirm.hidden = false;
    if (subscribeCancel) subscribeCancel.textContent = translate("pricing.subscribeCancel");
  }, 170);
};

const closeUsageLearnDialog = () => {
  if (!usageLearnDialog || usageLearnDialog.hidden) return;

  usageLearnDialog.classList.add("is-closing");
  window.setTimeout(() => {
    usageLearnDialog.hidden = true;
    usageLearnDialog.classList.remove("is-closing");
  }, 170);
};

const closeShareDialog = () => {
  if (!shareDialog || shareDialog.hidden) return;

  shareDialog.classList.add("is-closing");
  window.setTimeout(() => {
    shareDialog.hidden = true;
    shareDialog.classList.remove("is-closing");
  }, 170);
};

const closeQrDialog = () => {
  if (!qrDialog || qrDialog.hidden) return;

  qrDialog.classList.add("is-closing");
  window.setTimeout(() => {
    qrDialog.hidden = true;
    qrDialog.classList.remove("is-closing");
  }, 170);
};

const closeSourceDialog = () => {
  if (!sourceDialog || sourceDialog.hidden) return;

  sourceDialog.classList.add("is-closing");
  window.setTimeout(() => {
    sourceDialog.hidden = true;
    sourceDialog.classList.remove("is-closing");
  }, 170);
};

const closePrintDialog = () => {
  if (!printDialog || printDialog.hidden) return;

  printDialog.classList.add("is-closing");
  window.setTimeout(() => {
    printDialog.hidden = true;
    printDialog.classList.remove("is-closing");
  }, 170);
};

const showClipboardDialog = () => {
  if (!clipboardDialog) return;

  renderClipboardCenter();
  clipboardDialog.classList.remove("is-closing");
  clipboardDialog.hidden = false;
};

const showClipboardWarningDialog = () => {
  if (!clipboardWarningDialog) {
    showClipboardDialog();
    return;
  }

  clipboardWarningDialog.classList.remove("is-closing");
  clipboardWarningDialog.hidden = false;
};

const closeClipboardDialog = () => {
  if (!clipboardDialog || clipboardDialog.hidden) return;

  clipboardDialog.classList.add("is-closing");
  window.setTimeout(() => {
    clipboardDialog.hidden = true;
    clipboardDialog.classList.remove("is-closing");
  }, 170);
};

const closeClipboardWarningDialog = () => {
  if (!clipboardWarningDialog || clipboardWarningDialog.hidden) return;

  clipboardWarningDialog.classList.add("is-closing");
  window.setTimeout(() => {
    clipboardWarningDialog.hidden = true;
    clipboardWarningDialog.classList.remove("is-closing");
  }, 170);
};

const continueToClipboardCenter = () => {
  closeClipboardWarningDialog();
  window.setTimeout(showClipboardDialog, 180);
};

const copyClipboardHistoryItem = async (itemId) => {
  const item = getClipboardHistory().find((entry) => entry.id === itemId);
  if (!item) return;

  await writeClipboardText(item.text, item.kind === "title" ? "toast.copyTitle" : "toast.copyText", item.kind);
};

const clearClipboardHistory = () => {
  localStorage.removeItem(CLIPBOARD_HISTORY_KEY);
  renderClipboardCenter();
  showCopyToast("toast.clipboardCleared");
};

const closeContextMenu = () => {
  if (!contextMenu || contextMenu.hidden) return;
  window.clearTimeout(contextMenuCloseTimeoutId);
  contextMenu.classList.add("is-closing");
  contextMenuCloseTimeoutId = window.setTimeout(() => {
    contextMenu.hidden = true;
    contextMenu.classList.remove("is-closing");
    contextTargetLink = null;
    contextTargetImage = null;
  }, 130);
};

const isNativeContextTarget = (target) =>
  Boolean(
    target.closest?.(
      "select, .share-link-field, .share-link-field *",
    ),
  );

const shouldUseNativeContextMenu = () =>
  window.matchMedia?.("(max-width: 760px), (hover: none), (pointer: coarse)").matches;

const isEditableTextTarget = (target) =>
  Boolean(target?.matches?.("input:not([type]), input[type='text'], input[type='search'], input[type='email'], input[type='url'], input[type='tel'], textarea, [contenteditable='true']"));

const isKeyboardInputTarget = (target) =>
  Boolean(target?.closest?.("input, textarea, select, [contenteditable='true']"));

const getEditableSelectionText = (target) => {
  if (!isEditableTextTarget(target) || typeof target.selectionStart !== "number") return "";
  return target.value.slice(target.selectionStart, target.selectionEnd).trim();
};

const getSelectedText = () =>
  getEditableSelectionText(contextTargetElement) || window.getSelection?.().toString().trim() || "";

const getContextImageTarget = (target) => {
  const image = target.closest?.("img");
  if (!image || image.closest(".brand-logo")) return null;
  return image;
};

const getImageDownloadName = (image) => {
  try {
    const url = new URL(image.currentSrc || image.src, window.location.href);
    const fileName = decodeURIComponent(url.pathname.split("/").filter(Boolean).pop() || "");
    return fileName || "image";
  } catch {
    return "image";
  }
};

const saveContextImage = () => {
  if (!contextTargetImage) return;

  const imageUrl = contextTargetImage.currentSrc || contextTargetImage.src;
  if (!imageUrl) return;

  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = getImageDownloadName(contextTargetImage);
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  showCopyToast("toast.imageSaved");
};

const readClipboardText = async () => {
  if (!navigator.clipboard?.readText) return "";
  try {
    return (await navigator.clipboard.readText()).trim();
  } catch {
    return "";
  }
};

const updateContextMenuSeparators = () => {
  if (!contextMenu) return;

  let hasVisibleActionBefore = false;
  let pendingSeparator = null;

  Array.from(contextMenu.children).forEach((item) => {
    if (item.classList?.contains("context-menu-separator")) {
      item.hidden = true;
      pendingSeparator = item;
      return;
    }

    const isVisibleAction = item.matches?.("button") && !item.hidden;
    if (!isVisibleAction) return;

    if (pendingSeparator && hasVisibleActionBefore) {
      pendingSeparator.hidden = false;
    }

    pendingSeparator = null;
    hasVisibleActionBefore = true;
  });
};

const setPasteButtonState = (button, text) => {
  contextClipboardText = text;
  button.hidden = text.length === 0;
  button.disabled = text.length === 0;
  button.setAttribute("aria-disabled", String(text.length === 0));
  updateContextMenuSeparators();
};

const canCastPage = () =>
  "PresentationRequest" in window && Boolean(navigator.presentation);

const updateContextCastState = () => {
  const castButton = contextMenu?.querySelector('[data-context-action="cast"]');
  if (!castButton) return;

  const canCast = canCastPage();
  castButton.hidden = !canCast;
  castButton.disabled = !canCast;
  castButton.setAttribute("aria-disabled", String(!canCast));
  updateContextMenuSeparators();
};

const updateContextPasteState = async () => {
  const pasteButton = contextMenu?.querySelector('[data-context-action="paste"]');
  if (!pasteButton) return;

  const checkId = ++contextClipboardCheckId;
  setPasteButtonState(pasteButton, "");
  const text = await readClipboardText();
  if (checkId === contextClipboardCheckId && !contextMenu?.hidden) {
    setPasteButtonState(pasteButton, text);
  }
};

const showContextMenu = (event) => {
  if (
    !contextMenu ||
    shouldUseNativeContextMenu() ||
    !normalizeBooleanSetting(localStorage.getItem("profile-setting-custom-context-menu"), true) ||
    isNativeContextTarget(event.target)
  ) {
    return;
  }

  event.preventDefault();
  contextTargetElement = event.target;
  contextTargetLink = event.target.closest?.("a[href]") || null;
  contextTargetImage = getContextImageTarget(event.target);
  window.clearTimeout(contextMenuCloseTimeoutId);
  contextMenu.classList.remove("is-closing");
  contextMenu.hidden = false;

  const selectedText = getSelectedText();
  const editableSelectionText = getEditableSelectionText(contextTargetElement);
  const copySelectionButton = contextMenu.querySelector('[data-context-action="copy-selection"]');
  if (copySelectionButton) copySelectionButton.hidden = selectedText.length === 0;
  const cutButton = contextMenu.querySelector('[data-context-action="cut"]');
  if (cutButton) cutButton.hidden = editableSelectionText.length === 0;
  const openLinkButton = contextMenu.querySelector('[data-context-action="open-link"]');
  const copyLinkButton = contextMenu.querySelector('[data-context-action="copy-link"]');
  const saveImageButton = contextMenu.querySelector('[data-context-action="save-image"]');
  if (openLinkButton) openLinkButton.hidden = !contextTargetLink;
  if (copyLinkButton) copyLinkButton.hidden = !contextTargetLink;
  if (saveImageButton) {
    saveImageButton.hidden = !contextTargetImage;
    saveImageButton.disabled = !contextTargetImage;
    saveImageButton.setAttribute("aria-disabled", String(!contextTargetImage));
  }
  updateContextMenuSeparators();

  const menuRect = contextMenu.getBoundingClientRect();
  const margin = 10;
  const x = Math.min(event.clientX, window.innerWidth - menuRect.width - margin);
  const y = Math.min(event.clientY, window.innerHeight - menuRect.height - margin);

  contextMenu.style.left = `${Math.max(margin, x)}px`;
  contextMenu.style.top = `${Math.max(margin, y)}px`;
  updateContextPasteState();
  updateContextCastState();
};

const writeClipboardText = async (text, messageKey = "toast.copyText", clipboardKind = "text") => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    copyEventSuppressedUntil = Date.now() + 500;
    document.execCommand?.("copy");
    fallback.remove();
  }
  rememberClipboardItem(text, clipboardKind);
  showCopyToast(messageKey);
};

const getPageTextForCopy = () => {
  const contentRoot = document.querySelector("main") || document.body;
  const textSelectors = "h1, h2, h3, h4, p, li, dt, dd, blockquote, figcaption, th, td";
  const textItems = [...contentRoot.querySelectorAll(textSelectors)]
    .filter((element) => !element.closest("nav, form, dialog, .cache-dialog, .context-menu, .mobile-quick-actions"))
    .map((element) => element.innerText.trim().replace(/\s+/g, " "))
    .filter(Boolean);
  const title = document.querySelector("h1")?.innerText?.trim() || document.title;
  const uniqueItems = textItems.filter((item, index) => textItems.indexOf(item) === index);

  return [title, ...uniqueItems.filter((item) => item !== title)].filter(Boolean).join("\n");
};

const copyPageLink = async () => {
  await writeClipboardText(window.location.href, "toast.copyLink", "link");
};

const pasteClipboardText = async () => {
  const text = contextClipboardText || (await readClipboardText());
  if (!text || !isEditableTextTarget(contextTargetElement)) return;

  contextTargetElement.focus?.();

  if (document.execCommand?.("insertText", false, text)) return;

  const start = contextTargetElement.selectionStart ?? contextTargetElement.value.length;
  const end = contextTargetElement.selectionEnd ?? start;
  const currentValue = contextTargetElement.value ?? "";
  contextTargetElement.value = `${currentValue.slice(0, start)}${text}${currentValue.slice(end)}`;
  const cursor = start + text.length;
  contextTargetElement.setSelectionRange?.(cursor, cursor);
  contextTargetElement.dispatchEvent(new Event("input", { bubbles: true }));
};

const selectAllContextText = () => {
  if (isEditableTextTarget(contextTargetElement)) {
    contextTargetElement.focus?.();
    if (typeof contextTargetElement.select === "function") {
      contextTargetElement.select();
      return;
    }
    const length = contextTargetElement.value?.length ?? contextTargetElement.textContent?.length ?? 0;
    contextTargetElement.setSelectionRange?.(0, length);
    return;
  }

  const targetRoot = document.querySelector("main") || document.body;
  const selection = window.getSelection?.();
  if (!selection || !targetRoot) return;

  const range = document.createRange();
  range.selectNodeContents(targetRoot);
  selection.removeAllRanges();
  selection.addRange(range);
};

const cutSelectedText = async () => {
  if (!isEditableTextTarget(contextTargetElement) || typeof contextTargetElement.selectionStart !== "number") return;

  const start = contextTargetElement.selectionStart;
  const end = contextTargetElement.selectionEnd ?? start;
  if (end <= start) return;

  const currentValue = contextTargetElement.value ?? "";
  const selectedText = currentValue.slice(start, end);
  if (!selectedText.trim()) return;

  await writeClipboardText(selectedText, "toast.cutText", "selection");
  contextTargetElement.focus?.();
  contextTargetElement.value = `${currentValue.slice(0, start)}${currentValue.slice(end)}`;
  contextTargetElement.setSelectionRange?.(start, start);
  contextTargetElement.dispatchEvent(new Event("input", { bubbles: true }));
};

const castCurrentPage = async () => {
  if (!canCastPage()) return;

  const request = new PresentationRequest([window.location.href]);
  navigator.presentation.defaultRequest = request;
  await request.start();
};

const handleContextMenuAction = async (action) => {
  closeContextMenu();

  if (action === "close") return;

  if (action === "copy") {
    await copyPageLink();
    return;
  }

  if (action === "copy-selection") {
    const selectedText = getSelectedText();
    if (selectedText) await writeClipboardText(selectedText, "toast.copyText", "selection");
    return;
  }

  if (action === "text-copy") {
    const pageText = getPageTextForCopy();
    if (pageText) await writeClipboardText(pageText, "toast.copyText", "text");
    return;
  }

  if (action === "select-all") {
    selectAllContextText();
    return;
  }

  if (action === "open-link") {
    if (contextTargetLink) window.open(contextTargetLink.href, "_blank", "noopener,noreferrer");
    return;
  }

  if (action === "copy-link") {
    if (contextTargetLink) await writeClipboardText(contextTargetLink.href, "toast.copyLink", "link");
    return;
  }

  if (action === "save-image") {
    saveContextImage();
    return;
  }

  if (action === "copy-title") {
    await writeClipboardText(document.title || window.location.href, "toast.copyTitle", "title");
    return;
  }

  if (action === "clipboard") {
    showClipboardWarningDialog();
    return;
  }

  if (action === "paste") {
    await pasteClipboardText();
    return;
  }

  if (action === "cut") {
    await cutSelectedText();
    return;
  }

  if (action === "search") {
    showSiteSearchDialog();
    return;
  }

  if (action === "share") {
    showShareDialog();
    return;
  }

  if (action === "qr") {
    showQrDialog();
    return;
  }

  if (action === "cast") {
    await castCurrentPage();
    return;
  }

  if (action === "top") {
    scrollPageTo("top");
    return;
  }

  if (action === "refresh") {
    window.location.reload();
    return;
  }

  if (action === "back") {
    window.history.back();
    return;
  }

  if (action === "forward") {
    window.history.forward();
    return;
  }

  if (action === "print") {
    showPrintDialog();
    return;
  }

  if (action === "source") {
    await showSourceDialog();
    return;
  }

  if (action === "creator") {
    window.location.href = "/Creator";
    return;
  }

  if (action === "feedback") {
    window.location.href = "/feedback";
    return;
  }

  if (action === "settings") {
    openQuickSettingsDialog();
  }
};

const addRipple = (event) => {
  if (event.button !== 0) return;

  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  const isSidebarNav =
    target.matches(".nav-links a, .nav-search-button") &&
    document.documentElement.dataset.navLayout === "sidebar" &&
    window.matchMedia("(min-width: 1024px)").matches;
  const isMobileNav =
    target.matches(".nav-links a, .nav-search-button") &&
    window.matchMedia("(max-width: 760px), (hover: none), (pointer: coarse)").matches;

  if (isSidebarNav || isMobileNav) return;

  const rippleSize = Math.hypot(rect.width, rect.height) * 2.45;

  ripple.className = "ripple";
  ripple.style.setProperty("--ripple-size", `${rippleSize}px`);
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;

  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
};

const updateToggleTrackPosition = (button, event) => {
  const rect = button.getBoundingClientRect();
  button.style.setProperty("--track-x", `${event.clientX - rect.left}px`);
  button.style.setProperty("--track-y", `${event.clientY - rect.top}px`);
};

const stopToggleRightTrack = (button) => {
  button.classList.remove("is-right-tracking");
};

const setupToggleRightTrack = () => {
  settingToggles.forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      if (event.button !== 2) return;

      event.preventDefault();
      updateToggleTrackPosition(button, event);
      button.classList.add("is-right-tracking");
      button.setPointerCapture?.(event.pointerId);
    });

    button.addEventListener("pointermove", (event) => {
      if (!button.classList.contains("is-right-tracking")) return;
      updateToggleTrackPosition(button, event);
    });

    button.addEventListener("pointerup", (event) => {
      if (event.button === 2) stopToggleRightTrack(button);
    });

    button.addEventListener("pointercancel", () => stopToggleRightTrack(button));
    button.addEventListener("contextmenu", (event) => event.preventDefault());
  });
};

const showShareDialog = () => {
  if (!shareDialog) return;

  recordActivity("action", translate("activity.openShare"));
  if (shareUrl) shareUrl.value = window.location.href;
  if (shareStatus) shareStatus.hidden = true;
  shareDialog.hidden = false;
  window.setTimeout(() => shareUrl?.select(), 40);
};

const copyShareLink = async () => {
  const url = shareUrl?.value || window.location.href;

  try {
    await navigator.clipboard.writeText(url);
  } catch {
    shareUrl?.select();
    copyEventSuppressedUntil = Date.now() + 500;
    document.execCommand?.("copy");
  }
  rememberClipboardItem(url, "share");
  showCopyToast("toast.copyLink");

  shareLinkButton?.classList.add("is-copied");
  shareLinkButton?.setAttribute("aria-label", translate("share.copied"));
  recordActivity("action", translate("activity.copyLink"));
  if (shareStatus) shareStatus.hidden = false;
  window.setTimeout(() => {
    shareLinkButton?.classList.remove("is-copied");
    shareLinkButton?.setAttribute("aria-label", translate("share.copy"));
  }, 1800);
};

const shareToExternalTarget = async (target) => {
  const url = shareUrl?.value || window.location.href;
  const title = document.title || "Emergency Responder Profile";

  if (target === "native") {
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }

    await copyShareLink();
    return;
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedBlueskyText = encodeURIComponent(`${title}\n${url}`);
  const shareUrls = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    bluesky: `https://bsky.app/intent/compose?text=${encodedBlueskyText}`,
  };

  if (!shareUrls[target]) return;
  window.open(shareUrls[target], "_blank", "noopener,noreferrer,width=720,height=640");
};

const getQrImageUrl = (url) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&data=${encodeURIComponent(url)}`;

const showQrDialog = () => {
  if (!qrDialog) return;

  const url = window.location.href;
  qrDialog.classList.remove("is-closing");
  qrDialog.hidden = false;
  if (qrUrl) qrUrl.value = url;
  createQrCode();
  if (qrStatus) qrStatus.hidden = true;
};

const createQrCode = () => {
  const url = qrUrl?.value || window.location.href;
  if (qrImage) {
    qrImage.src = getQrImageUrl(url);
    qrImage.alt = translate("qr.alt");
  }
  if (qrStatus) qrStatus.hidden = true;
};

const openQrImageInNewTab = () => {
  createQrCode();
  const imageUrl = qrImage?.src || getQrImageUrl(qrUrl?.value || window.location.href);
  window.open(imageUrl, "_blank", "noopener,noreferrer");
};

const copyQrLink = async () => {
  await writeClipboardText(qrUrl?.value || window.location.href, "toast.copyLink", "qr");
  if (qrStatus) qrStatus.hidden = false;
};

const getCurrentPageSource = async () => {
  try {
    if (window.location.protocol !== "file:") {
      const response = await fetch(window.location.href, { cache: "no-store" });
      if (response.ok) return await response.text();
    }
  } catch {
    // Fall back to the currently rendered DOM below.
  }

  return `<!doctype html>\n${document.documentElement.outerHTML}`;
};

const showSourceDialog = async () => {
  if (!sourceDialog || !sourceCode) return;

  sourceDialog.classList.remove("is-closing");
  sourceDialog.hidden = false;
  if (sourceStatus) sourceStatus.hidden = true;
  if (sourceMeta) sourceMeta.textContent = `${translate("source.meta")} · ${window.location.pathname || "/"}`;
  sourceCode.textContent = translate("source.loading");

  const source = await getCurrentPageSource();
  sourceCode.textContent = source;
  sourceCode.dataset.rawSource = source;
};

const copySourceCode = async () => {
  const source = sourceCode?.dataset.rawSource || sourceCode?.textContent || "";
  if (!source) return;

  await writeClipboardText(source, "toast.copySource", "source");
  if (!sourceStatus) return;
  sourceStatus.hidden = false;
  window.setTimeout(() => {
    sourceStatus.hidden = true;
  }, 1800);
};

const showPrintDialog = () => {
  if (!printDialog) {
    window.print();
    return;
  }

  printDialog.classList.remove("is-closing");
  printDialog.hidden = false;
};

const runPrintFlow = () => {
  closePrintDialog();
  window.setTimeout(() => {
    window.print();
  }, 190);
};

const detectAdblock = () => {
  if (!adblockBait || !adblockNotice || localStorage.getItem("adblock-notice-dismissed") === "true") {
    return;
  }

  window.setTimeout(() => {
    const style = window.getComputedStyle(adblockBait);
    const isBlocked =
      adblockBait.offsetParent === null ||
      adblockBait.offsetHeight === 0 ||
      style.display === "none" ||
      style.visibility === "hidden";

    if (isBlocked) adblockNotice.hidden = false;
  }, 700);
};

const setActiveLink = () => {
  if (!sections.length) return;

  const midpoint = window.scrollY + window.innerHeight * 0.42;
  const activeSection =
    sections.findLast((section) => section.offsetTop <= midpoint) || sections[0];

  navLinks.forEach((link) => {
    link.classList.toggle(
      "is-active",
      link.getAttribute("href") === `#${activeSection.id}`,
    );
  });
};

const setMobileMenuOpen = (isOpen) => {
  const topbar = mobileMenuButton?.closest(".topbar");

  topbar?.classList.toggle("is-open", isOpen);
  mobileMenuButton?.setAttribute("aria-expanded", String(isOpen));
};

const setSidebarCollapsed = (isCollapsed, persist = true) => {
  const resolved = Boolean(isCollapsed);

  document.documentElement.dataset.sidebarCollapsed = String(resolved);
  if (persist) localStorage.setItem("profile-sidebar-collapsed", String(resolved));

  mobileMenuButton?.setAttribute("aria-expanded", String(!resolved));
  mobileMenuButton?.setAttribute(
    "aria-label",
    resolved ? translate("nav.expandSidebar") : translate("nav.collapseSidebar"),
  );
};

const toggleSidebarCollapsed = () => {
  setMobileMenuOpen(false);
  setSidebarCollapsed(document.documentElement.dataset.sidebarCollapsed !== "true");
};

const setupBrandLogo = () => {
  if (!brandLogoImage) return;

  brandLogoImage.setAttribute("draggable", "false");

  brandLogoImage.addEventListener("load", () => {
    brandLogoImage.closest(".brand-logo")?.classList.add("has-image");
  });

  brandLogoImage.addEventListener("error", () => {
    brandLogoImage.closest(".brand-logo")?.classList.remove("has-image");
  });

  brandLogoImage.addEventListener("dragstart", (event) => event.preventDefault());
  brandLogoImage.addEventListener("contextmenu", (event) => event.preventDefault());
};

const updateScrollProgress = () => {
  if (!scrollProgress) return;

  const scrollableHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
};

const updateScrollActions = () => {
  if (!scrollActions) return;

  const scrollableHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const canScroll = scrollableHeight > 120;
  const isPastTop = window.scrollY > 180;
  const isNearBottom = scrollableHeight - window.scrollY < 180;

  scrollActions.classList.toggle("is-visible", canScroll && (isPastTop || !isNearBottom));
  scrollActionButtons.forEach((button) => {
    const target = button.dataset.scrollTo;
    button.disabled =
      !canScroll ||
      (target === "top" && !isPastTop) ||
      (target === "bottom" && isNearBottom);
  });
};

const scrollPageTo = (target) => {
  const top =
    target === "bottom"
      ? document.documentElement.scrollHeight - window.innerHeight
      : 0;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: document.documentElement.dataset.fastRender === "true" ? "auto" : "smooth",
  });
};

const goToActionUrl = (button) => {
  const targetUrl = button.dataset.goUrl;
  if (!targetUrl) return;

  if (targetUrl.startsWith("#")) {
    if (button.dataset.homeOpen) selectHomeTab(button.dataset.homeOpen);
    document.querySelector(targetUrl)?.scrollIntoView({
      behavior: document.documentElement.dataset.fastRender === "true" ? "auto" : "smooth",
      block: "start",
    });
    return;
  }

  if (button.dataset.goTarget === "_blank") {
    window.open(targetUrl, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = targetUrl;
};

const setLoadingProgress = (progress) => {
  loadingBar?.style.setProperty("--loading-progress", String(progress));
};

const showPageLoader = () => {
  if (!pageLoader) return;

  pageLoader.hidden = false;
  pageLoader.classList.remove("is-hidden", "is-leaving");
  window.requestAnimationFrame(() => pageLoader.classList.add("is-visible"));
};

const finishPageLoader = () => {
  if (!pageLoader || pageLoader.classList.contains("is-hidden")) return;

  pageLoader.classList.remove("is-visible");
  pageLoader.classList.add("is-leaving");
  window.setTimeout(() => {
    pageLoader.classList.add("is-hidden");
    pageLoader.hidden = true;
  }, 260);
};

const showLoadingBar = () => {
  if (!loadingBar) return;

  showPageLoader();
  loadingBar.classList.remove("is-hidden", "is-complete");
  setLoadingProgress(0.2);
  window.requestAnimationFrame(() => setLoadingProgress(0.72));
};

const finishLoadingBar = () => {
  if (!loadingBar) {
    finishPageLoader();
    return;
  }

  setLoadingProgress(0.94);
  window.setTimeout(() => {
    loadingBar.classList.add("is-complete");
    window.setTimeout(() => {
      loadingBar.classList.add("is-hidden");
      finishPageLoader();
    }, 260);
  }, 140);
};

const isInternalPageLink = (link) => {
  if (!link) return false;

  const url = new URL(link.href, window.location.href);
  return (
    ["http:", "https:", "file:"].includes(url.protocol) &&
    url.origin === window.location.origin &&
    url.pathname !== window.location.pathname &&
    !link.hasAttribute("download") &&
    link.target !== "_blank"
  );
};

const registerOfflineWorker = () => {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
};

const setupOfflineRetry = () => {
  document.querySelectorAll("[data-offline-retry]").forEach((button) => {
    button.addEventListener("click", () => {
      if (navigator.onLine) {
        window.location.href = "/";
        return;
      }

      window.location.reload();
    });
  });
};

setActiveLink();
registerOfflineWorker();
window.addEventListener("scroll", setActiveLink, { passive: true });
updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollActions();
window.addEventListener("scroll", updateScrollActions, { passive: true });
window.addEventListener("resize", updateScrollActions);

showLoadingBar();
window.addEventListener("load", finishLoadingBar);
window.addEventListener("pageshow", (event) => {
  if (event.persisted) finishLoadingBar();
});
window.setTimeout(finishLoadingBar, 2600);

createShareDialog();
createSiteSearchDialog();
createQrDialog();
createSourceDialog();
createPrintDialog();
createClipboardDialog();
createClipboardWarningDialog();
createQuickSettingsDialog();
createMobileQuickActions();
setupCookieNotice();
setLanguage(currentLanguage);
recordPageActivity();
setupActivityPage();
if (homeTabs.length) {
  const activeHomeTab =
    homeTabs.find((button) => button.classList.contains("is-active"))?.dataset.homeTab ||
    homeTabs[0].dataset.homeTab;
  selectHomeTab(activeHomeTab);
}
setupSiteSearch();
setupMobileQuickActions();
setupSearchPage();
setupHomeSubscribeForm();
setupOfflineRetry();
setTheme(getInitialTheme());
setupSettingToggles();
setupBetaLabDialog();
setupNotificationTest();
setupNavLayoutDialog();
setupContextMenuModeDialog();
setupCookieSettingsDialog();
setupQuickSettingsDialog();
setupFastRenderSwipe();
setupToggleRightTrack();
setupBrandLogo();
setDensity(localStorage.getItem("profile-density") || "comfortable");
setKidMode(localStorage.getItem("profile-setting-kid-mode") || "off");
setupPremiumAccentLocks();
setAccent(localStorage.getItem("profile-accent") || "neutral");
setCurrency(localStorage.getItem("profile-currency") || (currentLanguage === "ko" ? "krw" : "usd"));
updateStorageEstimate();
updateBrowserUsage();
const browserUsageIntervalId = window.setInterval(() => {
  updateBrowserUsage();
  persistBrowserUsage();
}, 1000);

themeChoices.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.themeChoice);
    setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  });
});

languageChoices.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageChoice);
    setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
  });
});

themeTrigger?.addEventListener("click", () => {
  setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
  setSettingSelectOpen(densitySelect, densityTrigger, densityMenu, false);
  setSettingSelectOpen(kidModeSelect, kidModeTrigger, kidModeMenu, false);
  setAccentMenuOpen(false);
  setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, !themeSelect?.classList.contains("is-open"));
});

languageTrigger?.addEventListener("click", () => {
  setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  setSettingSelectOpen(densitySelect, densityTrigger, densityMenu, false);
  setSettingSelectOpen(kidModeSelect, kidModeTrigger, kidModeMenu, false);
  setAccentMenuOpen(false);
  setSettingSelectOpen(
    languageSelect,
    languageTrigger,
    languageMenu,
    !languageSelect?.classList.contains("is-open"),
  );
});

densityChoices.forEach((button) => {
  button.addEventListener("click", () => {
    setDensity(button.dataset.densityChoice);
    setSettingSelectOpen(densitySelect, densityTrigger, densityMenu, false);
  });
});

densityTrigger?.addEventListener("click", () => {
  setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
  setSettingSelectOpen(kidModeSelect, kidModeTrigger, kidModeMenu, false);
  setAccentMenuOpen(false);
  setSettingSelectOpen(
    densitySelect,
    densityTrigger,
    densityMenu,
    !densitySelect?.classList.contains("is-open"),
  );
});

kidModeChoices.forEach((button) => {
  button.addEventListener("click", () => {
    setKidMode(button.dataset.kidModeChoice);
    setSettingSelectOpen(kidModeSelect, kidModeTrigger, kidModeMenu, false);
  });
});

kidModeTrigger?.addEventListener("click", () => {
  setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
  setSettingSelectOpen(densitySelect, densityTrigger, densityMenu, false);
  setAccentMenuOpen(false);
  setSettingSelectOpen(
    kidModeSelect,
    kidModeTrigger,
    kidModeMenu,
    !kidModeSelect?.classList.contains("is-open"),
  );
});

currencyChoices.forEach((button) => {
  button.addEventListener("click", () => setCurrency(button.dataset.currencyChoice));
});

homeTabs.forEach((tab) => {
  tab.addEventListener("click", () => selectHomeTab(tab.dataset.homeTab));
});

accentChoices.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.premiumPlan) {
      showPremiumNote();
      return;
    }

    setAccent(button.dataset.accentChoice);
    setAccentMenuOpen(false);
  });
});

accentTrigger?.addEventListener("click", () => {
  setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
  setSettingSelectOpen(densitySelect, densityTrigger, densityMenu, false);
  setSettingSelectOpen(kidModeSelect, kidModeTrigger, kidModeMenu, false);
  setAccentMenuOpen(!accentSelect?.classList.contains("is-open"));
});

window.addEventListener("resize", positionOpenSelectMenus);
window.addEventListener("scroll", positionOpenSelectMenus, { passive: true });

mobileMenuButton?.addEventListener("click", () => {
  if (
    desktopSidebarQuery.matches &&
    document.documentElement.dataset.navLayout === "sidebar"
  ) {
    toggleSidebarCollapsed();
    return;
  }

  const topbar = mobileMenuButton.closest(".topbar");
  setMobileMenuOpen(!topbar?.classList.contains("is-open"));
});

document.addEventListener("click", (event) => {
  const topbar = mobileMenuButton?.closest(".topbar");

  if (!topbar?.classList.contains("is-open")) return;
  if (event.target instanceof Element && topbar.contains(event.target)) return;

  setMobileMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setMobileMenuOpen(false);
  closeUsageLearnDialog();
});

mobileMenu?.querySelectorAll("a, .nav-search-button").forEach((link) => {
  link.addEventListener("click", () => setMobileMenuOpen(false));
});

clearCacheButton?.addEventListener("click", showClearCacheWarning);
clearCacheCancel?.addEventListener("click", () => {
  closeClearCacheWarning();
});
clearCacheConfirm?.addEventListener("click", clearSiteCache);
clearCacheWarning?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === clearCacheWarning) closeClearCacheWarning();
});
window.addEventListener("pagehide", () => {
  persistBrowserUsage();
  window.clearInterval(browserUsageIntervalId);
});
feedbackOpen?.addEventListener("click", showFeedbackWarning);
feedbackCancel?.addEventListener("click", closeFeedbackWarning);
feedbackConfirm?.addEventListener("click", openFeedbackForm);
feedbackWarning?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === feedbackWarning) closeFeedbackWarning();
});
subscribeButtons.forEach((button) => {
  button.addEventListener("click", () => showSubscribeWarning(button));
});
subscribeCancel?.addEventListener("click", closeSubscribeWarning);
subscribeConfirm?.addEventListener("click", openSubscriptionCheckout);
subscribeWarning?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === subscribeWarning) closeSubscribeWarning();
});
usageLearnOpen?.addEventListener("click", showUsageLearnDialog);
usageLearnCloseButtons.forEach((button) => {
  button.addEventListener("click", closeUsageLearnDialog);
});
usageLearnDialog?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === usageLearnDialog) closeUsageLearnDialog();
});
shareLinkButton?.addEventListener("click", showShareDialog);
shareClose?.addEventListener("click", closeShareDialog);
shareCopy?.addEventListener("click", copyShareLink);
shareTargets.forEach((button) => {
  button.addEventListener("click", () => {
    shareToExternalTarget(button.dataset.shareTarget).catch(() => {});
  });
});
shareDialog?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === shareDialog) closeShareDialog();
});
qrClose?.addEventListener("click", closeQrDialog);
qrOpenImage?.addEventListener("click", openQrImageInNewTab);
qrCopy?.addEventListener("click", copyQrLink);
qrDialog?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === qrDialog) closeQrDialog();
});
sourceClose?.forEach?.((button) => {
  button.addEventListener("click", closeSourceDialog);
});
sourceCopy?.addEventListener("click", () => {
  copySourceCode().catch(() => {});
});
sourceDialog?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === sourceDialog) closeSourceDialog();
});
printClose?.addEventListener("click", closePrintDialog);
printConfirm?.addEventListener("click", runPrintFlow);
printDialog?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === printDialog) closePrintDialog();
});
clipboardCloseButtons.forEach((button) => {
  button.addEventListener("click", closeClipboardDialog);
});
clipboardClear?.addEventListener("click", clearClipboardHistory);
clipboardList?.addEventListener("click", (event) => {
  const button = event.target.closest?.("[data-clipboard-copy]");
  if (!button) return;
  copyClipboardHistoryItem(button.dataset.clipboardCopy).catch(() => {});
});
clipboardDialog?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === clipboardDialog) closeClipboardDialog();
});
clipboardWarningCloseButtons.forEach((button) => {
  button.addEventListener("click", closeClipboardWarningDialog);
});
clipboardWarningContinue?.addEventListener("click", continueToClipboardCenter);
clipboardWarningDialog?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === clipboardWarningDialog) closeClipboardWarningDialog();
});
scrollActionButtons.forEach((button) => {
  button.addEventListener("click", () => scrollPageTo(button.dataset.scrollTo));
});
actionButtons.forEach((button) => {
  button.addEventListener("click", () => goToActionUrl(button));
});
contextMenuActions.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.disabled && button.getAttribute("aria-disabled") !== "true") {
      playContextMenuClickSound();
    }
    handleContextMenuAction(button.dataset.contextAction).catch(() => {});
  });
});
adblockDismiss?.addEventListener("click", () => {
  localStorage.setItem("adblock-notice-dismissed", "true");
  if (adblockNotice) adblockNotice.hidden = true;
});

document.addEventListener("contextmenu", showContextMenu);

document.addEventListener("click", (event) => {
  if (!contextMenu?.contains(event.target)) closeContextMenu();
  if (!accentSelect?.contains(event.target)) setAccentMenuOpen(false);
  if (!themeSelect?.contains(event.target)) {
    setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  }
  if (!languageSelect?.contains(event.target)) {
    setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
  }
  if (!densitySelect?.contains(event.target)) {
    setSettingSelectOpen(densitySelect, densityTrigger, densityMenu, false);
  }
  if (!kidModeSelect?.contains(event.target)) {
    setSettingSelectOpen(kidModeSelect, kidModeTrigger, kidModeMenu, false);
  }

  const link = event.target.closest?.("a[href]");
  if (
    event.button === 0 &&
    !event.defaultPrevented &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    isInternalPageLink(link)
  ) {
    showLoadingBar();
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  const hasCtrlOrMeta = event.ctrlKey || event.metaKey;
  const isTyping = isKeyboardInputTarget(event.target);

  if (event.key === "Escape") {
    closeContextMenu();
    closeSiteSearchDialog();
    closeShareDialog();
    closeQrDialog();
    closeSourceDialog();
    closePrintDialog();
    closeClipboardDialog();
    closeClipboardWarningDialog();
    closeNavLayoutDialog();
    closeContextMenuModeDialog();
    closeCookieSettingsDialog();
    closeQuickSettingsDialog();
    closeClearCacheWarning();
    closeFeedbackWarning();
    closeSubscribeWarning();
    return;
  }

  if (isTyping) return;

  if (key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    closeContextMenu();
    showSiteSearchDialog();
    return;
  }

  if (hasCtrlOrMeta && key === "k" && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    closeContextMenu();
    showSiteSearchDialog();
    return;
  }

  if (hasCtrlOrMeta && event.shiftKey && key === "c" && !event.altKey) {
    event.preventDefault();
    closeContextMenu();
    copyPageLink().catch(() => {});
    return;
  }

  if (hasCtrlOrMeta && event.shiftKey && key === "s" && !event.altKey) {
    event.preventDefault();
    closeContextMenu();
    showShareDialog();
    return;
  }

  if (hasCtrlOrMeta && event.shiftKey && key === "q" && !event.altKey) {
    event.preventDefault();
    closeContextMenu();
    showQrDialog();
    return;
  }

  if (event.key === "Home" && !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey) {
    event.preventDefault();
    closeContextMenu();
    scrollPageTo("top");
    return;
  }

  if (event.key === "End" && !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey) {
    event.preventDefault();
    closeContextMenu();
    scrollPageTo("bottom");
  }
});

document.addEventListener("copy", (event) => {
  if (Date.now() < copyEventSuppressedUntil) return;

  const messageKey = getNativeCopyToastKey(event);
  const selectedText = getEditableSelectionText(event.target) || window.getSelection?.().toString().trim() || "";
  if (selectedText) rememberClipboardItem(selectedText, "manual");
  showNativeCopyToastSoon(messageKey);
});

document.addEventListener("selectionchange", () => {
  rememberNativeCopyTarget();
});

document.addEventListener("pointerup", (event) => {
  rememberNativeCopyTarget(event.target);
});

document.addEventListener(
  "keydown",
  (event) => {
    const key = event.key.toLowerCase();
    const hasCopyModifier = event.ctrlKey || event.metaKey;
    if (!hasCopyModifier || key !== "c" || event.altKey || event.defaultPrevented) return;
    if (event.shiftKey) return;

    rememberNativeCopyTarget(event.target);
    const messageKey = getCurrentNativeCopyToastKey(event.target);
    showNativeCopyToastSoon(messageKey);
  },
  true,
);

highlightTargets.forEach((target) => {
  target.addEventListener("pointerdown", addRipple);
});

detectAdblock();

infoTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedTab = tab.dataset.infoTab;

    infoTabs.forEach((button) => {
      const isActive = button.dataset.infoTab === selectedTab;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    infoPanels.forEach((panel) => {
      const isActive = panel.dataset.infoPanel === selectedTab;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});
