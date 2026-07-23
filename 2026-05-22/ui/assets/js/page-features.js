(() => {
  if (window.__profilePageFeaturesReady) return;

  const activityLogKey = "profile-activity-log";
  const homeSubscriptionKey = "profile-home-email-subscription";
  const maxActivityItems = 48;
  const translate = (key) => window.profileI18n?.translate?.(key) || key;
  const language = () => window.profileI18n?.getLanguage?.() || document.documentElement.lang || "en";

  const getStoredHomeSubscription = () => {
    try {
      const value = JSON.parse(localStorage.getItem(homeSubscriptionKey) || "null");
      return value && typeof value.email === "string" ? value : null;
    } catch {
      localStorage.removeItem(homeSubscriptionKey);
      return null;
    }
  };

  const setupHomeSubscribeForm = () => {
    const form = document.querySelector("[data-home-subscribe-form]");
    const emailInput = document.querySelector("[data-home-subscribe-email]");
    const topicInputs = [...document.querySelectorAll("[data-home-subscribe-topic]")];
    const status = document.querySelector("[data-home-subscribe-status]");
    if (!form || !emailInput) return;

    const setStatus = (key, type = "info") => {
      if (!status) return;
      status.textContent = translate(key);
      status.dataset.statusType = type;
    };

    const saved = getStoredHomeSubscription();
    if (saved) {
      emailInput.value = saved.email;
      const selectedTopics = new Set(saved.topics || []);
      topicInputs.forEach((input) => {
        input.checked = selectedTopics.has(input.value);
      });
      setStatus("home.subscribeSaved", "success");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = emailInput.value.trim();
      const topics = topicInputs.filter((input) => input.checked).map((input) => input.value);
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValidEmail) {
        setStatus("home.subscribeInvalid", "error");
        emailInput.focus();
        return;
      }

      if (topics.length === 0) {
        setStatus("home.subscribeNeedTopic", "error");
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
      setStatus("home.subscribeSaved", "success");
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

  const formatActivityTime = (createdAt) =>
    new Intl.DateTimeFormat(language() === "ko" ? "ko-KR" : "en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(createdAt));

  const formatActivityDate = (createdAt) =>
    new Intl.DateTimeFormat(language() === "ko" ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(createdAt));

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

  const formatActivityCount = (count) => {
    const key = count === 1 ? "activity.itemCountOne" : "activity.itemCount";
    return translate(key).replace("{count}", String(count));
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

    const activityGroups = items.reduce((groups, item) => {
      const key = formatActivityDate(item.createdAt);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
      return groups;
    }, new Map());

    list.innerHTML = Array.from(activityGroups.entries())
      .map(([dateLabel, groupItems], groupIndex) => {
        const contentId = `activity-date-content-${groupIndex}`;
        const isExpanded = groupIndex === 0;

        return `
          <article class="activity-date-group${isExpanded ? " is-expanded" : ""}" data-activity-date-group>
            <header>
              <button class="activity-date-toggle" type="button" data-activity-date-toggle aria-expanded="${isExpanded}" aria-controls="${contentId}">
                <span class="activity-date-toggle-main">
                  <time>${escapeActivityText(dateLabel)}</time>
                  <span class="activity-date-count">${escapeActivityText(formatActivityCount(groupItems.length))}</span>
                </span>
                <span class="activity-date-toggle-meta">
                  ${groupIndex === 0 ? `<span>${translate("activity.latest")}</span>` : ""}
                  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
                </span>
              </button>
            </header>
            <div id="${contentId}" data-activity-date-content${isExpanded ? "" : " hidden"}>
              ${groupItems
                .map((item) => {
                  const typeLabel = item.type === "action" ? translate("activity.typeAction") : translate("activity.typeVisit");
                  const href = getSafeActivityUrl(item.url);
                  return `
                    <div class="activity-item">
                      <span class="activity-type-badge">${escapeActivityText(typeLabel)}</span>
                      <div>
                        <strong>${escapeActivityText(item.label)}</strong>
                        <span>${escapeActivityText(formatActivityTime(item.createdAt))}</span>
                      </div>
                      <a href="${escapeActivityText(href)}">${escapeActivityText(href)}</a>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");
  };

  const setupActivityPage = () => {
    document.querySelectorAll("[data-activity-list]").forEach((list) => {
      list.addEventListener("click", (event) => {
        const toggle = event.target.closest("[data-activity-date-toggle]");
        if (!toggle || !list.contains(toggle)) return;

        const group = toggle.closest("[data-activity-date-group]");
        const content = group?.querySelector("[data-activity-date-content]");
        if (!group || !content) return;

        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        group.classList.toggle("is-expanded", !isExpanded);
        toggle.setAttribute("aria-expanded", String(!isExpanded));
        content.hidden = isExpanded;
      });

      list.addEventListener("keydown", (event) => {
        const toggle = event.target.closest("[data-activity-date-toggle]");
        if (!toggle || !list.contains(toggle) || !["Enter", " "].includes(event.key)) return;

        event.preventDefault();
        toggle.click();
      });
    });

    document.querySelectorAll("[data-activity-clear]").forEach((clearButton) => {
      clearButton.addEventListener("click", () => {
        localStorage.removeItem(activityLogKey);
        renderActivityPage();
      });
    });
    renderActivityPage();
  };

  const setReleaseGroupExpanded = (group, isExpanded) => {
    const toggle = group?.querySelector("[data-release-toggle]");
    const content = group?.querySelector("[data-release-content]");
    if (!toggle || !content) return;

    group.classList.toggle("is-expanded", isExpanded);
    toggle.setAttribute("aria-expanded", String(isExpanded));
    content.hidden = !isExpanded;
  };

  const setupReleaseGroups = () => {
    const groups = [...document.querySelectorAll("[data-release-group]")];
    if (!groups.length) return;

    groups.forEach((group) => {
      const toggle = group.querySelector("[data-release-toggle]");
      if (!toggle) return;

      setReleaseGroupExpanded(group, toggle.getAttribute("aria-expanded") === "true");
      toggle.addEventListener("click", () => {
        setReleaseGroupExpanded(group, toggle.getAttribute("aria-expanded") !== "true");
      });
    });

    const revealHashGroup = () => {
      const group = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (group?.matches("[data-release-group]")) setReleaseGroupExpanded(group, true);
    };

    document.querySelectorAll('.updates-release-rail a[href^="#release-"]').forEach((link) => {
      link.addEventListener("click", () => {
        const group = document.getElementById(link.hash.slice(1));
        if (group?.matches("[data-release-group]")) setReleaseGroupExpanded(group, true);
      });
    });

    window.addEventListener("hashchange", revealHashGroup);
    revealHashGroup();
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

  const recordPageActivity = () => {
    recordActivity("visit", `${translate("activity.visit")}: ${getPageActivityLabel()}`);
  };

  window.profilePageFeatures = Object.freeze({
    recordActivity,
    renderActivityPage,
  });
  window.__profilePageFeaturesReady = true;

  setupHomeSubscribeForm();
  setupActivityPage();
  setupReleaseGroups();
  setupOfflineRetry();
  recordPageActivity();
  window.addEventListener("profile-language-change", renderActivityPage);
})();
