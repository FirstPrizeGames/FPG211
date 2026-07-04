const navIconMarkup = {
  search:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>',
  chevron:
    '<svg class="nav-flyout-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6" /></svg>',
  help:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9.2 9a3 3 0 1 1 5.6 1.5c-.6.8-1.5 1.1-2.1 1.8-.5.5-.7.9-.7 1.7" /><path d="M12 17h.01" /></svg>',
  keyboard:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h.01" /><path d="M11 10h.01" /><path d="M15 10h.01" /><path d="M19 10h.01" /><path d="M7 14h.01" /><path d="M11 14h6" /></svg>',
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
  personalization:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v4" /><path d="M12 17v4" /><path d="M3 12h4" /><path d="M17 12h4" /><circle cx="12" cy="12" r="4" /><path d="m5.6 5.6 2.8 2.8" /><path d="m15.6 15.6 2.8 2.8" /><path d="m18.4 5.6-2.8 2.8" /><path d="m8.4 15.6-2.8 2.8" /></svg>',
  store:
    '<svg class="nav-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 10h16" /><path d="M5 10l1-5h12l1 5" /><path d="M6 10v9h12v-9" /><path d="M9 14h6" /><path d="M9 19v-5" /><path d="M15 19v-5" /></svg>',
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

const routeDocumentGuards = [
  { path: "/settings", selector: ".settings-page", fallback: "/settings/index.html" },
  { path: "/usage", selector: ".usage-page", fallback: "/usage/index.html" },
];

const repairRouteDocumentMismatch = () => {
  const currentPath = window.location.pathname.replace(/\/index\.html$/i, "").replace(/\/+$/, "") || "/";
  const guard = routeDocumentGuards.find((item) => currentPath === item.path);
  if (!guard || document.querySelector(guard.selector)) return false;
  if (sessionStorage.getItem(`route-repair:${currentPath}`) === "true") return false;

  sessionStorage.setItem(`route-repair:${currentPath}`, "true");
  const repairUrl = `${guard.fallback}?v=20260704-font-assets-not-applied`;
  window.location.replace(repairUrl);
  return true;
};

repairRouteDocumentMismatch();

const isOfflinePage =
  document.body.classList.contains("offline-body") ||
  window.location.pathname.replace(/\/index\.html$/i, "").replace(/\/+$/, "") === "/offline";
const isSystemRecoveryPage = isOfflinePage || document.body.classList.contains("error-body");

const setupUsagePageEarlyRecovery = () => {
  if (!document.querySelector(".usage-page")) return;

  const now = Date.now();
  const hourMs = 60 * 60 * 1000;
  const dailyLimitMs = 5 * hourMs;
  const weekMs = 7 * 24 * hourMs;
  const monthMs = 30 * 24 * hourMs;
  const weeklyLimitMs = 7 * dailyLimitMs;
  const monthlyLimitMs = 30 * dailyLimitMs;
  const resetLimit = 2;
  const activeStartedAt = document.visibilityState === "visible" ? now : 0;
  const accountingVersion = "visible-session-v1";
  if (localStorage.getItem("profile-browser-usage-accounting-version") !== accountingVersion) {
    localStorage.setItem("profile-browser-usage-window-start-ms", String(now));
    localStorage.setItem("profile-browser-usage-used-ms", "0");
    localStorage.setItem("profile-browser-usage-week-start-ms", String(now));
    localStorage.setItem("profile-browser-usage-week-used-ms", "0");
    localStorage.setItem("profile-browser-usage-month-start-ms", String(now));
    localStorage.setItem("profile-browser-usage-month-used-ms", "0");
    localStorage.removeItem("profile-browser-usage-total-ms");
    localStorage.setItem("profile-browser-usage-accounting-version", accountingVersion);
  }

  const readNumber = (key, fallback) => {
    const value = Number.parseInt(localStorage.getItem(key) || "", 10);
    return Number.isFinite(value) && value >= 0 ? value : fallback;
  };
  const writeNumber = (key, value) => localStorage.setItem(key, String(value));
  const isKoreanUsage = () => document.documentElement.lang === "ko";
  const formatTime = (timestamp) =>
    isKoreanUsage()
      ? `${new Intl.DateTimeFormat("ko-KR", {
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date(timestamp))} 초기화`
      : `Resets at ${new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(timestamp))}`;
  const formatDate = (timestamp) =>
    isKoreanUsage()
      ? `${new Intl.DateTimeFormat("ko-KR", {
          month: "long",
          day: "numeric",
        }).format(new Date(timestamp))} 초기화`
      : `Resets on ${new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    }).format(new Date(timestamp))}`;

  let dailyStart = readNumber("profile-browser-usage-window-start-ms", now);
  let dailyUsed = readNumber("profile-browser-usage-used-ms", 0);
  let weeklyStart = readNumber("profile-browser-usage-week-start-ms", now);
  let weeklyUsed = readNumber("profile-browser-usage-week-used-ms", 0);
  let monthlyStart = readNumber("profile-browser-usage-month-start-ms", now);
  let monthlyUsed = readNumber("profile-browser-usage-month-used-ms", 0);
  let resetStart = readNumber("profile-browser-usage-reset-week-start-ms", 0);
  let resetCount = readNumber("profile-browser-usage-reset-week-count", 0);

  if (now - dailyStart >= dailyLimitMs) {
    dailyStart = now;
    dailyUsed = 0;
  }
  if (now - weeklyStart >= weekMs) {
    weeklyStart = now;
    weeklyUsed = 0;
  }
  if (now - monthlyStart >= monthMs) {
    monthlyStart = now;
    monthlyUsed = 0;
  }
  if (resetStart > 0 && now - resetStart >= weekMs) {
    resetStart = now;
    resetCount = 0;
  }
  if (resetStart <= 0) {
    resetStart = now;
    resetCount = 0;
  }

  writeNumber("profile-browser-usage-window-start-ms", dailyStart);
  writeNumber("profile-browser-usage-used-ms", dailyUsed);
  writeNumber("profile-browser-usage-week-start-ms", weeklyStart);
  writeNumber("profile-browser-usage-week-used-ms", weeklyUsed);
  writeNumber("profile-browser-usage-month-start-ms", monthlyStart);
  writeNumber("profile-browser-usage-month-used-ms", monthlyUsed);
  writeNumber("profile-browser-usage-reset-week-start-ms", resetStart);
  writeNumber("profile-browser-usage-reset-week-count", resetCount);

  const updateRow = (resetSelector, remainingSelector, barSelector, start, used, limit, resetWindowMs, dateFormatter) => {
    const elapsed = activeStartedAt > 0 ? Math.max(0, now - Math.max(activeStartedAt, start)) : 0;
    const total = Math.min(used + elapsed, limit);
    const ratio = Math.max(1 - total / limit, 0);
    const percent = Math.ceil(ratio * 100);
    const reset = document.querySelector(resetSelector);
    const remaining = document.querySelector(remainingSelector);
    const bar = document.querySelector(barSelector);
    if (reset) reset.textContent = dateFormatter(start + resetWindowMs);
    if (remaining) remaining.textContent = `${percent}% left`;
    if (bar) bar.style.transform = `scaleX(${ratio})`;
  };

  const updateUsageUi = () => {
    updateRow("[data-browser-daily-reset]", "[data-browser-daily-remaining]", "[data-browser-daily-bar]", dailyStart, dailyUsed, dailyLimitMs, dailyLimitMs, formatTime);
    updateRow("[data-browser-weekly-reset]", "[data-browser-weekly-remaining]", "[data-browser-weekly-bar]", weeklyStart, weeklyUsed, weeklyLimitMs, weekMs, formatDate);
    updateRow("[data-browser-monthly-reset]", "[data-browser-monthly-remaining]", "[data-browser-monthly-bar]", monthlyStart, monthlyUsed, monthlyLimitMs, monthMs, formatDate);

    const remaining = Math.max(resetLimit - resetCount, 0);
    const status = document.querySelector("[data-usage-reset-status]");
    const button = document.querySelector("[data-usage-reset-button]");
    if (status) {
      status.textContent =
        remaining > 0
          ? isKoreanUsage()
            ? `이번 주 ${remaining}번 더 초기화할 수 있습니다.`
            : `${remaining} resets left this week.`
          : isKoreanUsage()
            ? `이번 주 초기화 횟수를 모두 사용했습니다. ${new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric" }).format(new Date(resetStart + weekMs))}에 다시 사용할 수 있습니다.`
            : `No resets left this week. Resets on ${new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric" }).format(new Date(resetStart + weekMs))}.`;
    }
    if (button) button.disabled = remaining <= 0;
  };

  const ensureUsageResetDialog = () => {
    let dialog = document.querySelector("[data-usage-reset-warning]");
    if (dialog) return dialog;
    dialog = document.createElement("div");
    dialog.className = "cache-dialog";
    dialog.dataset.usageResetWarning = "";
    dialog.hidden = true;
    const isKo = isKoreanUsage();
    dialog.innerHTML = `
      <div class="cache-dialog-panel" role="dialog" aria-modal="true">
        <button class="dialog-close-button" type="button" data-usage-reset-warning-close aria-label="${isKo ? "닫기" : "Close"}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow">${isKo ? "사용량 초기화" : "Usage reset"}</p>
        <h2>${isKo ? "한도를 초기화할까요?" : "Reset usage limits?"}</h2>
        <p>${isKo ? "5시간, 주간, 월간 사용 한도가 지금부터 다시 시작됩니다. 이번 주 초기화 가능 횟수 1회를 사용합니다." : "The 5-hour, weekly, and monthly usage limits will restart from now. This uses 1 reset from this week's allowance."}</p>
        <div class="cache-warning-actions">
          <button class="button cache-cancel-button" type="button" data-usage-reset-warning-close>${isKo ? "취소" : "Cancel"}</button>
          <button class="button cache-confirm-button usage-reset-confirm-button" type="button" data-usage-reset-warning-confirm>${isKo ? "초기화" : "Reset"}</button>
        </div>
      </div>
    `;
    document.body.append(dialog);
    return dialog;
  };

  const openResetDialog = () => {
    const remaining = Math.max(resetLimit - resetCount, 0);
    if (remaining <= 0) {
      updateUsageUi();
      return;
    }
    const dialog = ensureUsageResetDialog();
    dialog.hidden = false;
  };

  const closeResetDialog = () => {
    const dialog = document.querySelector("[data-usage-reset-warning]");
    if (dialog) dialog.hidden = true;
  };

  const confirmReset = () => {
    const current = Date.now();
    dailyStart = current;
    weeklyStart = current;
    monthlyStart = current;
    dailyUsed = 0;
    weeklyUsed = 0;
    monthlyUsed = 0;
    resetCount = Math.min(resetCount + 1, resetLimit);
    writeNumber("profile-browser-usage-window-start-ms", dailyStart);
    writeNumber("profile-browser-usage-used-ms", 0);
    writeNumber("profile-browser-usage-week-start-ms", weeklyStart);
    writeNumber("profile-browser-usage-week-used-ms", 0);
    writeNumber("profile-browser-usage-month-start-ms", monthlyStart);
    writeNumber("profile-browser-usage-month-used-ms", 0);
    writeNumber("profile-browser-usage-reset-week-start-ms", resetStart);
    writeNumber("profile-browser-usage-reset-week-count", resetCount);
    closeResetDialog();
    updateUsageUi();
  };

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (window.__profileUsageMainReady) return;
      if (target.closest("[data-usage-reset-button]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        openResetDialog();
        return;
      }
      if (target.closest("[data-usage-reset-warning-close]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeResetDialog();
        return;
      }
      if (target.closest("[data-usage-reset-warning-confirm]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        confirmReset();
        return;
      }
      if (target.closest("[data-usage-learn-open]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const dialog = document.querySelector("[data-usage-learn-dialog]");
        if (dialog) dialog.hidden = false;
        return;
      }
      if (target.closest("[data-usage-learn-close]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const dialog = document.querySelector("[data-usage-learn-dialog]");
        if (dialog) dialog.hidden = true;
      }
    },
    true,
  );

  updateUsageUi();
};

setupUsagePageEarlyRecovery();

const setupSettingsPageEarlyRecovery = () => {
  if (!document.querySelector(".settings-page")) return;

  const selectConfigs = [
    {
      select: document.querySelector("[data-theme-select]"),
      trigger: document.querySelector("[data-theme-trigger]"),
      menu: document.querySelector("[data-theme-menu]"),
      triggerSelector: "[data-theme-trigger]",
      choiceSelector: "[data-theme-choice]",
      dataKey: "themeChoice",
      storageKey: "profile-theme",
      apply: (value) => {
        const resolved = ["dark", "lights-off"].includes(value) ? value : "dark";
        document.documentElement.dataset.theme = resolved;
        localStorage.setItem("profile-theme", resolved);
      },
    },
    {
      select: document.querySelector("[data-language-select]"),
      trigger: document.querySelector("[data-language-trigger]"),
      menu: document.querySelector("[data-language-menu]"),
      triggerSelector: "[data-language-trigger]",
      choiceSelector: "[data-language-choice]",
      dataKey: "languageChoice",
      storageKey: "profile-language",
      apply: (value) => {
        const preference = value === "auto" || value === "en" || value === "ko" ? value : "auto";
        const resolved = preference === "auto"
          ? ((((navigator.languages || [navigator.language]) || [])
              .map((language) => String(language || "").toLowerCase())
              .find((language) => language.startsWith("ko") || language.startsWith("en")) || "ko").startsWith("en")
              ? "en"
              : "ko")
          : preference;
        document.documentElement.lang = resolved;
        localStorage.setItem("profile-language", preference);
      },
    },
  ];

  const closeMenus = (except = null) => {
    selectConfigs.forEach(({ select, trigger, menu }) => {
      if (select === except) return;
      select?.classList.remove("is-open", "is-open-up");
      trigger?.setAttribute("aria-expanded", "false");
      if (menu) menu.hidden = true;
    });
  };

  const openMenu = (config) => {
    const isOpen = Boolean(config.select?.classList.contains("is-open"));
    closeMenus(config.select);
    config.select?.classList.toggle("is-open", !isOpen);
    config.trigger?.setAttribute("aria-expanded", String(!isOpen));
    if (config.menu) config.menu.hidden = isOpen;
  };

  const setChoiceActive = (config, value) => {
    config.menu?.querySelectorAll(config.choiceSelector).forEach((button) => {
      const isActive = button.dataset[config.dataKey] === value;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  };

  const updateToggle = (button, isOn) => {
    button.classList.toggle("is-on", isOn);
    button.setAttribute("aria-pressed", String(isOn));

    const key = button.dataset.toggleKey;
    localStorage.setItem(`profile-setting-${key}`, String(isOn));
    if (key === "kid-mode") {
      document.documentElement.dataset.kidMode = isOn ? "strong" : "off";
      localStorage.setItem("profile-setting-kid-mode", String(isOn));
    }
  };

  const openDialog = (selector) => {
    const dialog = document.querySelector(selector);
    if (!dialog) return;
    dialog.classList.remove("is-closing");
    dialog.hidden = false;
  };

  const closeDialog = (selector) => {
    const dialog = document.querySelector(selector);
    if (!dialog) return;
    dialog.classList.add("is-closing");
    window.setTimeout(() => {
      dialog.hidden = true;
      dialog.classList.remove("is-closing");
    }, 160);
  };

  const setContextMenuModeEarly = (mode) => {
    const resolved = mode === "native" ? "native" : "custom";
    localStorage.setItem("profile-setting-custom-context-menu", String(resolved === "custom"));
    document.querySelectorAll("[data-context-menu-choice]").forEach((button) => {
      const isActive = button.dataset.contextMenuChoice === resolved;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  };

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const toggle = target.closest("[data-toggle-key]");
      if (toggle instanceof HTMLButtonElement) {
        event.preventDefault();
        event.stopImmediatePropagation();
        updateToggle(toggle, !toggle.classList.contains("is-on"));
        showCopyToast("settings.saved");
        return;
      }

      if (target.closest("[data-context-menu-open]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        openDialog("[data-context-mode-dialog]");
        return;
      }

      if (target.closest("[data-cookie-settings-open]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        openDialog("[data-cookie-settings-dialog]");
        return;
      }

      if (target.closest("[data-context-mode-close]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeDialog("[data-context-mode-dialog]");
        return;
      }

      if (target.closest("[data-cookie-settings-close]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeDialog("[data-cookie-settings-dialog]");
        return;
      }

      const contextMenuChoice = target.closest("[data-context-menu-choice]");
      if (contextMenuChoice instanceof HTMLButtonElement) {
        event.preventDefault();
        event.stopImmediatePropagation();
        setContextMenuModeEarly(contextMenuChoice.dataset.contextMenuChoice);
        showCopyToast("settings.saved");
        return;
      }

      const cookiePreferenceToggle = target.closest("[data-cookie-preference-toggle]");
      if (cookiePreferenceToggle instanceof HTMLButtonElement) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const isOn = cookiePreferenceToggle.getAttribute("aria-pressed") === "true";
        cookiePreferenceToggle.classList.toggle("is-on", !isOn);
        cookiePreferenceToggle.setAttribute("aria-pressed", String(!isOn));
        localStorage.setItem("profile-cookie-preferences", JSON.stringify({ preferences: !isOn }));
        const status = document.querySelector("[data-cookie-settings-status]");
        if (status) status.textContent = !isOn ? "Preference storage is on." : "Preference storage is off.";
        return;
      }

      const triggerConfig = selectConfigs.find((config) => target.closest(config.triggerSelector));
      if (triggerConfig) {
        event.preventDefault();
        event.stopImmediatePropagation();
        openMenu(triggerConfig);
        return;
      }

      const choiceConfig = selectConfigs.find((config) => target.closest(config.choiceSelector));
      if (choiceConfig) {
        const choice = target.closest(choiceConfig.choiceSelector);
        if (!(choice instanceof HTMLButtonElement)) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        if (choice.dataset.premiumPlan) {
          const note = document.querySelector("[data-premium-note]");
          if (note) note.hidden = false;
        } else {
          const value = choice.dataset[choiceConfig.dataKey];
          if (choiceConfig.storageKey === "profile-language") {
            setLanguage(value);
          } else {
            choiceConfig.apply(value);
          }
          setChoiceActive(choiceConfig, value);
          showCopyToast("settings.saved");
        }
        closeMenus();
        return;
      }

      if (!target.closest(".setting-select")) closeMenus();
    },
    true,
  );
};

setupSettingsPageEarlyRecovery();

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

let navFlyoutId = 0;

const createNavFlyout = ({ icon, labelKey, fallback, items = [] }) => {
  const wrapper = document.createElement("div");
  const flyoutId = `nav-flyout-${navFlyoutId++}`;
  wrapper.className = "nav-flyout";

  const trigger = document.createElement("button");
  trigger.className = "nav-flyout-trigger";
  trigger.type = "button";
  trigger.dataset.navFlyoutTrigger = "";
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-haspopup", "menu");
  trigger.setAttribute("aria-controls", flyoutId);
  trigger.innerHTML = `${icon}<span data-i18n="${labelKey}">${fallback}</span>${navIconMarkup.chevron}`;

  const panel = document.createElement("div");
  panel.className = "nav-flyout-panel";
  panel.id = flyoutId;
  panel.hidden = true;
  panel.setAttribute("role", "menu");

  items.forEach((item) => {
    const anchor = createNavAnchor(item);
    anchor.setAttribute("role", "menuitem");
    if (item.className) anchor.classList.add(item.className);
    panel.append(anchor);
  });

  if (panel.querySelector(".is-active")) wrapper.classList.add("has-active-item");
  wrapper.append(trigger, panel);
  return wrapper;
};

const createTopSearchButton = () => {
  if (isSystemRecoveryPage) return;
  if (document.body.classList.contains("official-home-body")) return;
  if (document.body.classList.contains("search-body")) return;
  if (document.querySelector("[data-top-search]")) return;

  const button = document.createElement("button");
  button.className = "top-search-button";
  button.type = "button";
  button.dataset.topSearch = "";
  button.dataset.siteSearchOpen = "";
  button.innerHTML = `${navIconMarkup.search}<span data-i18n="nav.search">Search</span><kbd>Ctrl+K</kbd>`;
  document.body.append(button);
};

const createSidebarAccountItem = ({ href, action, icon, labelKey, fallback, className }) => {
  const item = document.createElement(href ? "a" : "button");
  item.className = "sidebar-account-item";
  if (className) item.classList.add(className);
  if (href) {
    item.href = href;
    if (normalizeNavPath(window.location.pathname) === normalizeNavPath(href)) item.classList.add("is-active");
  } else {
    item.type = "button";
    if (action) item.dataset.sidebarAccountAction = action;
  }
  item.innerHTML = `${icon}<span data-i18n="${labelKey}">${fallback}</span>`;
  return item;
};

const createSidebarHelpMenu = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "sidebar-help-menu";

  const trigger = document.createElement("button");
  trigger.className = "sidebar-account-item sidebar-help-trigger";
  trigger.type = "button";
  trigger.dataset.sidebarHelpTrigger = "";
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-haspopup", "menu");
  trigger.innerHTML = `${navIconMarkup.help}<span data-i18n="nav.help">Help</span>${navIconMarkup.chevron}`;

  const panel = document.createElement("div");
  panel.className = "sidebar-help-panel";
  panel.hidden = true;
  panel.setAttribute("role", "menu");

  [
    { href: "/FAQ", icon: navIconMarkup.faq, labelKey: "nav.faq", fallback: "FAQ" },
    { action: "keyboard-shortcuts", icon: navIconMarkup.keyboard, labelKey: "keyboardShortcuts.nav", fallback: "Keyboard shortcuts" },
    { href: "/feedback", icon: navIconMarkup.support, labelKey: "nav.support", fallback: "Support" },
    { href: "/status", icon: navIconMarkup.status, labelKey: "nav.status", fallback: "Status" },
    { divider: true },
    { href: "/trust", icon: navIconMarkup.trust, labelKey: "nav.trustCenter", fallback: "Trust Center" },
    { href: "/security", icon: navIconMarkup.security, labelKey: "nav.security", fallback: "Security" },
    { href: "/privacy", icon: navIconMarkup.privacy, labelKey: "nav.privacy", fallback: "Privacy Policy" },
    { divider: true },
    { href: "/terms", icon: navIconMarkup.terms, labelKey: "nav.terms", fallback: "Terms" },
    { href: "/license", icon: navIconMarkup.license, labelKey: "nav.license", fallback: "License" },
  ].forEach((item) => {
    if (item.divider) {
      const divider = document.createElement("div");
      divider.className = "sidebar-help-divider";
      divider.setAttribute("role", "separator");
      panel.append(divider);
      return;
    }

    const element = item.action ? document.createElement("button") : createNavAnchor(item);
    if (item.action) {
      element.type = "button";
      element.dataset.keyboardShortcutsOpen = "";
      element.innerHTML = `${item.icon}<span data-i18n="${item.labelKey}">${item.fallback}</span>`;
    }
    element.classList.add("sidebar-help-link");
    element.setAttribute("role", "menuitem");
    panel.append(element);
  });

  if (panel.querySelector(".is-active")) wrapper.classList.add("has-active-item");
  wrapper.append(trigger, panel);
  return wrapper;
};

const createSidebarAccountMenu = () => {
  if (isSystemRecoveryPage) return;
  if (document.querySelector("[data-sidebar-account]")) return;

  document.querySelectorAll(".topbar:not([data-official-home-nav])").forEach((topbar, index) => {
    const menuId = `sidebar-account-menu-${index}`;
    const account = document.createElement("div");
    account.className = "sidebar-account";
    account.dataset.sidebarAccount = "";

    const panel = document.createElement("div");
    panel.className = "sidebar-account-panel";
    panel.id = menuId;
    panel.hidden = true;
    panel.setAttribute("role", "menu");

    [
      { href: "/Pricing", icon: navIconMarkup.pricing, labelKey: "sidebar.upgrade", fallback: "Upgrade plan" },
      { action: "profile", icon: navIconMarkup.bio, labelKey: "sidebar.profile", fallback: "Profile" },
      { href: "/settings", icon: navIconMarkup.settings, labelKey: "nav.settings", fallback: "Settings" },
    ].forEach((item) => panel.append(createSidebarAccountItem(item)));

    panel.append(createSidebarHelpMenu());

    const trigger = document.createElement("button");
    trigger.className = "sidebar-account-trigger";
    trigger.type = "button";
    trigger.dataset.sidebarAccountTrigger = "";
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-haspopup", "menu");
    trigger.setAttribute("aria-controls", menuId);
    trigger.innerHTML = `
      <img class="sidebar-account-avatar" src="/assets/well-avatar.webp" alt="" width="192" height="192" loading="lazy" decoding="async" />
      <span class="sidebar-account-copy">
        <strong data-profile-name>My name</strong>
        <small data-profile-plan>Free</small>
      </span>
    `;

    account.append(panel, trigger);
    topbar.append(account);
  });
};

const createUserProfileDialog = () => {
  if (document.querySelector("[data-user-profile-dialog]")) return;

  const dialog = document.createElement("section");
  dialog.className = "user-profile-dialog";
  dialog.dataset.userProfileDialog = "";
  dialog.hidden = true;
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "user-profile-title");
  dialog.innerHTML = `
    <div class="user-profile-panel">
      <button class="user-profile-close" type="button" data-user-profile-close aria-label="Close">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      </button>
      <div class="user-profile-head">
        <div class="user-profile-avatar-wrap">
          <img class="user-profile-avatar" src="/assets/well-avatar.webp" alt="" width="192" height="192" loading="lazy" decoding="async" data-profile-avatar-preview />
        </div>
        <div class="user-profile-summary">
          <p class="eyebrow" data-i18n="profileDialog.eyebrow">Profile</p>
          <h2 id="user-profile-title" data-profile-name>My name</h2>
          <p data-i18n="profileDialog.body">Name, photo, visibility, and plan.</p>
          <span class="user-profile-plan-pill" data-profile-plan>Free</span>
        </div>
      </div>
      <div class="user-profile-section">
        <div class="user-profile-section-copy">
          <h3 data-i18n="profileDialog.accountSection">Account details</h3>
        </div>
        <label class="user-profile-control">
          <span data-i18n="profileDialog.nameControl">User name</span>
          <input type="text" value="My name" maxlength="40" data-profile-name-input />
        </label>
      </div>
      <div class="user-profile-section">
        <div class="user-profile-section-copy">
          <h3 data-i18n="profileDialog.photoSection">Profile photo</h3>
          <strong data-profile-avatar-status data-i18n="profileDialog.avatarDefault">Ambulance image</strong>
        </div>
        <div class="user-profile-photo-actions">
          <label class="user-profile-upload">
            <span data-i18n="profileDialog.photoControl">Add profile photo</span>
            <input type="file" accept="image/png,image/jpeg,image/webp" data-profile-avatar-input />
          </label>
          <button class="user-profile-mini-button" type="button" data-profile-avatar-reset data-i18n="profileDialog.photoReset">Reset photo</button>
        </div>
      </div>
      <div class="user-profile-section">
        <div class="user-profile-section-copy">
          <h3 data-i18n="profileDialog.privacySection">Privacy</h3>
        </div>
        <div class="user-profile-visibility-field">
          <span data-i18n="profileDialog.visibility">Profile visibility</span>
          <button class="user-profile-toggle" type="button" data-profile-visibility-toggle aria-pressed="true">
            <strong data-profile-visibility-status data-i18n="profileDialog.visibilityOn">Visible</strong>
          </button>
        </div>
      </div>
      <div class="user-profile-actions">
        <button class="button" type="button" data-profile-reset data-i18n="profileDialog.reset">Reset</button>
        <button class="button primary" type="button" data-profile-save data-i18n="profileDialog.save">Save</button>
      </div>
    </div>
  `;
  document.body.append(dialog);
};

const createKeyboardShortcutsDialog = () => {
  if (document.querySelector("[data-keyboard-shortcuts-dialog]")) return;

  const dialog = document.createElement("div");
  dialog.className = "cache-dialog keyboard-shortcuts-dialog";
  dialog.dataset.keyboardShortcutsDialog = "";
  dialog.hidden = true;
  dialog.innerHTML = `
    <div class="cache-dialog-panel keyboard-shortcuts-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="keyboard-shortcuts-title">
      <button class="dialog-close-button" type="button" data-keyboard-shortcuts-close aria-label="닫기" data-i18n-aria-label="share.close">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      </button>
      <p class="eyebrow" data-i18n="keyboardShortcuts.eyebrow">SHORTCUTS</p>
      <h2 id="keyboard-shortcuts-title" data-i18n="keyboardShortcuts.title">Keyboard shortcuts</h2>
      <p data-i18n="keyboardShortcuts.body">Use these shortcuts to move faster around the site.</p>
      <dl class="keyboard-shortcuts-list">
        <div><dt><kbd>Ctrl</kbd><kbd>K</kbd></dt><dd data-i18n="keyboardShortcuts.search">Open search</dd></div>
        <div><dt><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>C</kbd></dt><dd data-i18n="keyboardShortcuts.copy">Copy page link</dd></div>
        <div><dt><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>S</kbd></dt><dd data-i18n="keyboardShortcuts.share">Open share</dd></div>
        <div><dt><kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>Q</kbd></dt><dd data-i18n="keyboardShortcuts.qr">Create QR code</dd></div>
        <div><dt><kbd>Ctrl</kbd><kbd>P</kbd></dt><dd data-i18n="keyboardShortcuts.print">Open print options</dd></div>
        <div><dt><kbd>Esc</kbd></dt><dd data-i18n="keyboardShortcuts.close">Close popup or menu</dd></div>
      </dl>
    </div>
  `;
  document.body.append(dialog);
};

const createSettingsDialog = () => {
  if (document.body.classList.contains("settings-modal-body")) return;
  if (document.querySelector("[data-settings-dialog]")) return;

  const dialog = document.createElement("div");
  dialog.className = "settings-dialog";
  dialog.dataset.settingsDialog = "";
  dialog.hidden = true;
  dialog.innerHTML = `
    <section class="settings-modal" aria-labelledby="settings-dialog-title">
      <aside class="settings-modal-nav" aria-label="Settings sections">
        <button class="settings-modal-close" type="button" aria-label="Close settings" data-settings-dialog-close data-i18n-aria-label="share.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <button class="settings-modal-tab is-active" type="button" data-settings-modal-tab="general">
          ${navIconMarkup.settings}
          <span>General</span>
        </button>
        <button class="settings-modal-tab" type="button" data-settings-modal-tab="accessibility">
          ${navIconMarkup.accessibility}
          <span data-i18n="nav.accessibility">Accessibility</span>
        </button>
        <button class="settings-modal-tab" type="button" data-settings-modal-tab="security">
          ${navIconMarkup.security}
          <span data-i18n="nav.security">Security</span>
        </button>
        <button class="settings-modal-tab" type="button" data-settings-modal-tab="profile">
          ${navIconMarkup.bio}
          <span>Profile</span>
        </button>
        <button class="settings-modal-tab" type="button" data-settings-modal-tab="context">
          ${navIconMarkup.terms}
          <span>Context menu</span>
        </button>
      </aside>

      <div class="settings-modal-content">
        <section class="settings-modal-panel is-active" data-settings-modal-panel="general" aria-labelledby="settings-dialog-title">
          <h2 id="settings-dialog-title">General</h2>
          <div class="settings-modal-row">
            <div>
              <strong data-i18n="settings.themeTitle">테마 모드</strong>
              <span data-i18n="settings.themeBody">프로필 화면을 다크 또는 밝기 끄기 모드로 관리합니다.</span>
            </div>
            <div class="setting-select" data-theme-select>
              <button class="setting-select-trigger" type="button" aria-expanded="false" data-theme-trigger>
                <span data-theme-label data-i18n="settings.themeDark">다크</span>
                <span class="setting-select-chevron" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></span>
              </button>
              <div class="setting-select-menu" role="listbox" data-theme-menu hidden>
                <button class="is-active" type="button" role="option" aria-selected="true" data-theme-choice="dark" data-i18n="settings.themeDark">다크</button>
                <button type="button" role="option" aria-selected="false" data-theme-choice="lights-off" data-i18n="settings.lightsOff">Lights Off</button>
              </div>
            </div>
          </div>
          <div class="settings-modal-row">
            <div>
              <strong data-i18n="settings.languageTitle">언어</strong>
              <span data-i18n="settings.languageBody">프로필과 설정 화면에 표시되는 언어를 선택합니다.</span>
            </div>
            <div class="setting-select" data-language-select>
              <button class="setting-select-trigger" type="button" aria-expanded="false" data-language-trigger>
                <span data-language-label data-i18n="settings.languageAuto">자동 감지</span>
                <span class="setting-select-chevron" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></span>
              </button>
              <div class="setting-select-menu" role="listbox" data-language-menu hidden>
                <button class="is-active" type="button" role="option" aria-selected="true" data-language-choice="auto" data-i18n="settings.languageAuto">자동 감지</button>
                <button type="button" role="option" aria-selected="false" data-language-choice="ko" data-i18n="settings.languageKorean">한국어</button>
                <button type="button" role="option" aria-selected="false" data-language-choice="en" data-i18n="settings.languageEnglish">English</button>
              </div>
            </div>
          </div>
        </section>

        <section class="settings-modal-panel" data-settings-modal-panel="accessibility" hidden>
          <h2 data-i18n="nav.accessibility">Accessibility</h2>
          <div class="settings-modal-row">
            <div>
              <strong>Reduced motion</strong>
              <span data-i18n="settings.kidModeBody">과한 전환 효과와 애니메이션 부담을 줄여 화면을 차분하게 표시합니다.</span>
            </div>
            <button class="toggle" type="button" aria-pressed="false" data-toggle-key="kid-mode"></button>
          </div>
          <div class="settings-modal-row">
            <div>
              <strong data-i18n="settings.accessibilityTitle">접근성 안내</strong>
              <span data-i18n="settings.accessibilityBody">키보드 이동, 색 대비, 언어, 모바일 표시 기준을 확인합니다.</span>
            </div>
            <a class="settings-modal-link" href="/accessibility" data-i18n="settings.accessibilityOpen">Accessibility 열기</a>
          </div>
        </section>

        <section class="settings-modal-panel" data-settings-modal-panel="security" hidden>
          <h2 data-i18n="nav.security">Security</h2>
          <div class="settings-modal-row">
            <div>
              <strong data-i18n="settings.cookieSettingsTitle">쿠키 설정</strong>
              <span data-i18n="settings.cookieSettingsBody">브라우저 저장 안내 쿠키를 팝업에서 켜거나 끕니다. 필수 항목은 사이트 기본 동작을 위해 유지됩니다.</span>
            </div>
            <button class="settings-modal-button" type="button" data-cookie-settings-open data-i18n="settings.cookieSettingsButton">Cookie settings</button>
          </div>
          <div class="settings-modal-row">
            <div>
              <strong data-i18n="settings.siteDataTitle">사이트 데이터</strong>
              <span data-i18n="settings.siteDataBody">이 브라우저에 저장된 테마, 언어, 프로필, Activity, Usage, 쿠키 안내 선택을 삭제합니다.</span>
            </div>
            <button class="settings-modal-button is-danger" type="button" data-clear-cache data-i18n="settings.siteDataButton">Delete data</button>
          </div>
          <div class="settings-modal-row">
            <div>
              <strong data-i18n="nav.security">Security</strong>
              <span>Review public security and privacy information.</span>
            </div>
            <a class="settings-modal-link" href="/security" data-i18n="nav.security">Security</a>
          </div>
        </section>

        <section class="settings-modal-panel" data-settings-modal-panel="profile" hidden>
          <h2>Profile</h2>
          <div class="settings-modal-profile">
            <img class="settings-modal-avatar" src="/assets/well-avatar.webp" alt="" width="192" height="192" loading="lazy" decoding="async" data-profile-avatar-preview />
            <div>
              <strong data-profile-name>My name</strong>
              <span>Plan: <span data-profile-plan>Free</span></span>
            </div>
          </div>
          <label class="settings-modal-field">
            <span>Username</span>
            <input type="text" value="My name" maxlength="40" data-profile-name-input />
          </label>
          <div class="settings-modal-row">
            <div>
              <strong>Profile photo</strong>
              <span data-profile-avatar-status>Ambulance image</span>
            </div>
            <label class="settings-modal-button">
              Add photo
              <input class="sr-only" type="file" accept="image/png,image/jpeg,image/webp" data-profile-avatar-input />
            </label>
          </div>
          <div class="settings-modal-row">
            <div>
              <strong>Profile visibility</strong>
              <span data-profile-visibility-status>Visible</span>
            </div>
            <button class="toggle is-on" type="button" aria-pressed="true" data-profile-visibility-toggle></button>
          </div>
          <div class="settings-modal-actions">
            <button class="settings-modal-button" type="button" data-profile-avatar-reset>Reset photo</button>
            <button class="settings-modal-button" type="button" data-profile-reset data-i18n="profileDialog.reset">Reset</button>
            <button class="settings-modal-button is-primary" type="button" data-profile-save data-i18n="profileDialog.save">Save</button>
          </div>
        </section>

        <section class="settings-modal-panel" data-settings-modal-panel="context" hidden>
          <h2>Context menu</h2>
          <div class="settings-modal-row">
            <div>
              <strong data-i18n="settings.contextMenuTitle">커스텀 우클릭 메뉴</strong>
              <span data-i18n="settings.contextMenuBody">빠른 작업을 담은 디자인 우클릭 메뉴를 사용합니다.</span>
            </div>
          </div>
          <div class="settings-modal-choice-list" role="listbox" aria-label="Context menu mode" data-i18n-aria-label="aria.contextMenuMode">
            <button class="settings-modal-choice is-active" type="button" role="option" aria-selected="true" data-context-menu-choice="custom">
              <strong data-i18n="settings.contextMenuCustomTitle">Custom menu</strong>
              <span data-i18n="settings.contextMenuCustomBody">Copy, share, QR code, search, print 같은 사이트 작업을 한 메뉴에서 엽니다.</span>
            </button>
            <button class="settings-modal-choice" type="button" role="option" aria-selected="false" data-context-menu-choice="native">
              <strong data-i18n="settings.contextMenuNativeTitle">Browser default</strong>
              <span data-i18n="settings.contextMenuNativeBody">브라우저가 제공하는 기본 우클릭 메뉴를 그대로 사용합니다.</span>
            </button>
          </div>
        </section>
      </div>
    </section>
    <div class="cache-dialog" data-clear-cache-warning hidden>
      <div class="cache-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="cache-dialog-title">
        <p class="eyebrow" data-i18n="settings.siteDataTab">Site data</p>
        <h2 id="cache-dialog-title" data-i18n="settings.siteDataDialogTitle">사이트 데이터 삭제</h2>
        <p data-i18n="settings.clearCacheWarning">
          이 브라우저에 저장된 사이트 설정, 프로필, Activity, Usage 기록, 쿠키 안내 선택이 삭제됩니다. 계속하시겠습니까?
        </p>
        <div class="cache-warning-actions">
          <button class="button cache-cancel-button" type="button" data-clear-cache-cancel data-i18n="settings.clearCacheCancel">취소</button>
          <button class="button cache-confirm-button site-data-confirm-button" type="button" data-clear-cache-confirm data-i18n="settings.siteDataConfirm">삭제하기</button>
        </div>
      </div>
    </div>
    <div class="cache-dialog cookie-settings-dialog" data-cookie-settings-dialog hidden>
      <div class="cache-dialog-panel cookie-settings-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-dialog-title">
        <button class="dialog-close-button" type="button" data-cookie-settings-close aria-label="닫기" data-i18n-aria-label="share.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="settings.storageTab">Storage</p>
        <h2 id="cookie-settings-dialog-title" data-i18n="settings.cookieDialogTitle">쿠키 설정</h2>
        <p data-i18n="settings.cookieDialogBody">
          이 사이트에서 사용하는 쿠키 종류를 선택합니다. 현재 광고나 분석 쿠키는 사용하지 않습니다.
        </p>
        <a class="cookie-settings-more" href="/privacy#cookies" data-i18n="settings.cookieLearnMore">자세히 알아보기</a>
        <div class="cookie-choice-list" aria-label="쿠키 종류 선택" data-i18n-aria-label="aria.cookieSettings">
          <div class="cookie-choice is-required">
            <span class="cookie-choice-copy">
              <strong data-i18n="settings.cookieEssentialTitle">필수 쿠키</strong>
              <small data-i18n="settings.cookieEssentialBody">보안과 기본 동작에 필요한 항목입니다. 이 항목은 끌 수 없습니다.</small>
            </span>
            <button class="toggle is-on" type="button" aria-pressed="true" disabled data-i18n-aria-label="settings.cookieEssentialOn"></button>
          </div>
          <div class="cookie-choice">
            <span class="cookie-choice-copy">
              <strong data-i18n="settings.cookiePreferenceTitle">설정 저장 쿠키</strong>
              <small data-i18n="settings.cookiePreferenceBody">브라우저 저장 안내를 확인했다는 선택을 이 브라우저에 저장합니다.</small>
            </span>
            <button class="toggle" type="button" aria-pressed="false" data-cookie-preference-toggle></button>
          </div>
        </div>
        <p class="cookie-settings-status" data-cookie-settings-status role="status" aria-live="polite"></p>
      </div>
    </div>
  `;
  document.body.append(dialog);
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
  if (isSystemRecoveryPage) return;
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
      href: "/settings",
      icon: navIconMarkup.settings,
      labelKey: "quickActions.settings",
      fallback: "Settings",
    },
  ].forEach((item) => inner.append(createMobileQuickActionButton(item)));

  document.body.append(bar);
};

const enhanceSidebarNavigation = () => {
  if (isSystemRecoveryPage) return;
  const navGroups = [
    {
      label: "MAIN",
      labelKey: "nav.groupMain",
      items: [
        { href: "/", icon: navIconMarkup.home, labelKey: "nav.home", fallback: "Home" },
        { href: "/portal", icon: navIconMarkup.analytics, labelKey: "nav.portal", fallback: "Portal" },
        { href: "/updates", icon: navIconMarkup.updates, labelKey: "nav.updates", fallback: "Latest updates" },
        { href: "/activity", icon: navIconMarkup.activity, labelKey: "nav.activity", fallback: "Activity" },
        { href: "/Creator", icon: navIconMarkup.creator, labelKey: "nav.creator", fallback: "Creator" },
        { href: "/Bio", icon: navIconMarkup.bio, labelKey: "nav.bio", fallback: "Bio" },
        { href: "/about", icon: navIconMarkup.about, labelKey: "nav.aboutUs", fallback: "About us" },
      ],
    },
    {
      label: "MANAGE",
      labelKey: "nav.groupManage",
      items: [
        { href: "/Pricing", icon: navIconMarkup.pricing, labelKey: "nav.pricing", fallback: "Pricing" },
        { href: "/usage", icon: navIconMarkup.analytics, labelKey: "usage.nav", fallback: "Usage" },
      ],
    },
    {
      label: "TRUST",
      labelKey: "nav.groupTrust",
      items: [
        { href: "/accessibility", icon: navIconMarkup.accessibility, labelKey: "nav.accessibility", fallback: "Accessibility" },
      ],
    },
  ];

  document.querySelectorAll(".nav-links:not([data-official-home-menu])").forEach((nav) => {
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
        if (item.type === "flyout") {
          menu.append(createNavFlyout(item));
          return;
        }

        const anchor = createNavAnchor(item);
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
createTopSearchButton();
createSidebarAccountMenu();
createUserProfileDialog();
createKeyboardShortcutsDialog();
createSettingsDialog();

const createStandardFooter = () => {
  if (isSystemRecoveryPage) return;
  if (document.querySelector("[data-site-footer]")) return;

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.dataset.siteFooter = "";
  footer.innerHTML = `
    <div class="site-footer-brand">
      <strong data-i18n="footer.brand">First PrizeGames</strong>
      <span data-i18n="footer.tagline">Trust, status, privacy, and support links in one place.</span>
    </div>
    <nav class="site-footer-links" aria-label="Footer links" data-i18n-aria-label="aria.footerLinks">
      <a href="/trust" data-i18n="nav.trustCenter">Trust Center</a>
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

const setNavFlyoutOpen = (flyout, isOpen) => {
  if (!(flyout instanceof HTMLElement)) return;
  const trigger = flyout.querySelector("[data-nav-flyout-trigger]");
  const panel = flyout.querySelector(".nav-flyout-panel");

  flyout.classList.toggle("is-open", isOpen);
  trigger?.setAttribute("aria-expanded", String(isOpen));
  if (panel instanceof HTMLElement) panel.hidden = !isOpen;
};

const closeNavFlyouts = (exceptFlyout = null) => {
  document.querySelectorAll(".nav-flyout.is-open").forEach((flyout) => {
    if (flyout !== exceptFlyout) setNavFlyoutOpen(flyout, false);
  });
};

const setSidebarAccountOpen = (account, isOpen) => {
  if (!(account instanceof HTMLElement)) return;
  if (!isOpen) account.querySelectorAll(".sidebar-help-menu.is-open").forEach((menu) => setSidebarHelpOpen(menu, false));
  const trigger = account.querySelector("[data-sidebar-account-trigger]");
  const panel = account.querySelector(".sidebar-account-panel");
  account.classList.toggle("is-open", isOpen);
  trigger?.setAttribute("aria-expanded", String(isOpen));
  if (panel instanceof HTMLElement) panel.hidden = !isOpen;
};

const closeSidebarAccountMenus = (exceptAccount = null) => {
  document.querySelectorAll(".sidebar-account.is-open").forEach((account) => {
    if (account !== exceptAccount) setSidebarAccountOpen(account, false);
  });
};

const resetSidebarHelpPanelPosition = (panel) => {
  if (!(panel instanceof HTMLElement)) return;
  ["position", "top", "right", "bottom", "left", "transform", "maxHeight"].forEach((property) => {
    panel.style.removeProperty(property);
  });
};

const positionSidebarHelpPanel = (menu) => {
  if (!(menu instanceof HTMLElement)) return;
  const trigger = menu.querySelector("[data-sidebar-help-trigger]");
  const panel = menu.querySelector(".sidebar-help-panel");
  if (!(trigger instanceof HTMLElement) || !(panel instanceof HTMLElement) || panel.hidden) return;

  const margin = 12;
  const gap = 12;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const maxPanelHeight = Math.max(220, viewportHeight - margin * 2);

  panel.style.position = "fixed";
  panel.style.right = "auto";
  panel.style.bottom = "auto";
  panel.style.left = "0px";
  panel.style.top = "0px";
  panel.style.transform = "none";
  panel.style.maxHeight = `${maxPanelHeight}px`;

  const triggerRect = trigger.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const panelWidth = panelRect.width || 246;
  const panelHeight = Math.min(panel.scrollHeight || panelRect.height || 320, maxPanelHeight);
  const preferredLeft = triggerRect.right + gap;
  const fallbackLeft = triggerRect.left - panelWidth - gap;
  const left =
    preferredLeft + panelWidth <= viewportWidth - margin
      ? preferredLeft
      : Math.max(margin, Math.min(fallbackLeft, viewportWidth - panelWidth - margin));
  const centeredTop = triggerRect.top + triggerRect.height / 2 - panelHeight / 2;
  const top = Math.max(margin, Math.min(centeredTop, viewportHeight - panelHeight - margin));

  panel.style.left = `${Math.round(left)}px`;
  panel.style.top = `${Math.round(top)}px`;
};

const setSidebarHelpOpen = (menu, isOpen) => {
  if (!(menu instanceof HTMLElement)) return;
  const trigger = menu.querySelector("[data-sidebar-help-trigger]");
  const panel = menu.querySelector(".sidebar-help-panel");
  menu.classList.toggle("is-open", isOpen);
  trigger?.setAttribute("aria-expanded", String(isOpen));
  if (panel instanceof HTMLElement) {
    panel.hidden = !isOpen;
    if (isOpen) {
      positionSidebarHelpPanel(menu);
    } else {
      resetSidebarHelpPanelPosition(panel);
    }
  }
};

const closeSidebarHelpMenus = (exceptMenu = null) => {
  document.querySelectorAll(".sidebar-help-menu.is-open").forEach((menu) => {
    if (menu !== exceptMenu) setSidebarHelpOpen(menu, false);
  });
};

const repositionOpenSidebarHelpMenus = () => {
  document.querySelectorAll(".sidebar-help-menu.is-open").forEach((menu) => positionSidebarHelpPanel(menu));
};

const openUserProfileDialog = () => {
  const dialog = document.querySelector("[data-user-profile-dialog]");
  if (!dialog) return;
  dialog.classList.remove("is-closing");
  dialog.hidden = false;
};

const closeUserProfileDialog = () => {
  const dialog = document.querySelector("[data-user-profile-dialog]");
  if (!dialog || dialog.hidden) return;
  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    dialog.hidden = true;
    dialog.classList.remove("is-closing");
  }, 140);
};

const openKeyboardShortcutsDialog = () => {
  const dialog = document.querySelector("[data-keyboard-shortcuts-dialog]");
  if (!dialog) return;
  dialog.classList.remove("is-closing");
  dialog.hidden = false;
  dialog.querySelector("[data-keyboard-shortcuts-close]")?.focus({ preventScroll: true });
};

const closeKeyboardShortcutsDialog = () => {
  const dialog = document.querySelector("[data-keyboard-shortcuts-dialog]");
  if (!dialog || dialog.hidden) return;
  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    dialog.hidden = true;
    dialog.classList.remove("is-closing");
  }, 160);
};

const openSettingsDialog = () => {
  const dialog = document.querySelector("[data-settings-dialog]");
  if (!dialog) return false;
  dialog.hidden = false;
  dialog.classList.remove("is-closing");
  closeSidebarHelpMenus();
  closeSidebarAccountMenus();
  closeContextMenu();
  dialog.querySelector("[data-settings-dialog-close]")?.focus({ preventScroll: true });
  return true;
};

const closeSettingsDialog = () => {
  const dialog = document.querySelector("[data-settings-dialog]");
  if (!dialog || dialog.hidden) return;
  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    dialog.hidden = true;
    dialog.classList.remove("is-closing");
  }, 160);
};

const isSettingsRouteLink = (link) => {
  if (!(link instanceof HTMLAnchorElement)) return false;
  const url = new URL(link.href, window.location.href);
  return url.origin === window.location.origin && normalizeNavPath(url.pathname) === "/settings";
};

document.addEventListener("click", (event) => {
  const settingsLink = event.target.closest?.("a[href]");
  if (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    isSettingsRouteLink(settingsLink) &&
    !document.body.classList.contains("settings-modal-body")
  ) {
    event.preventDefault();
    openSettingsDialog();
    return;
  }

  if (event.target.closest?.("[data-settings-dialog-close]")) {
    closeSettingsDialog();
    return;
  }

  const settingsDialog = event.target.closest?.("[data-settings-dialog]");
  if (settingsDialog && event.target === settingsDialog) {
    closeSettingsDialog();
    return;
  }

  const accountTrigger = event.target.closest?.("[data-sidebar-account-trigger]");
  const account = event.target.closest?.(".sidebar-account");

  if (accountTrigger) {
    const activeAccount = accountTrigger.closest(".sidebar-account");
    const willOpen = !activeAccount?.classList.contains("is-open");
    closeSidebarAccountMenus(activeAccount);
    closeNavFlyouts();
    setSidebarAccountOpen(activeAccount, willOpen);
    return;
  }

  const helpTrigger = event.target.closest?.("[data-sidebar-help-trigger]");
  if (helpTrigger) {
    const activeHelpMenu = helpTrigger.closest(".sidebar-help-menu");
    const willOpen = !activeHelpMenu?.classList.contains("is-open");
    closeSidebarHelpMenus(activeHelpMenu);
    closeNavFlyouts();
    setSidebarHelpOpen(activeHelpMenu, willOpen);
    return;
  }

  if (!account) {
    closeSidebarHelpMenus();
    closeSidebarAccountMenus();
  }
  if (event.target.closest?.(".sidebar-account-panel a")) closeSidebarAccountMenus();

  const accountAction = event.target.closest?.("[data-sidebar-account-action]");
  if (accountAction?.dataset.sidebarAccountAction === "profile") {
    closeSidebarAccountMenus();
    openUserProfileDialog();
    return;
  }

  if (event.target.closest?.("[data-keyboard-shortcuts-open]")) {
    closeSidebarHelpMenus();
    closeSidebarAccountMenus();
    openKeyboardShortcutsDialog();
    return;
  }

  if (event.target.closest?.("[data-keyboard-shortcuts-close]")) {
    closeKeyboardShortcutsDialog();
    return;
  }

  const keyboardShortcutsDialog = event.target.closest?.("[data-keyboard-shortcuts-dialog]");
  if (keyboardShortcutsDialog && event.target === keyboardShortcutsDialog) {
    closeKeyboardShortcutsDialog();
    return;
  }

  if (event.target.closest?.("[data-user-profile-close]")) {
    closeUserProfileDialog();
    return;
  }

  const profileDialog = event.target.closest?.("[data-user-profile-dialog]");
  if (profileDialog && event.target === profileDialog) {
    closeUserProfileDialog();
    return;
  }

  const flyoutTrigger = event.target.closest?.("[data-nav-flyout-trigger]");
  const flyout = event.target.closest?.(".nav-flyout");

  if (flyoutTrigger) {
    const activeFlyout = flyoutTrigger.closest(".nav-flyout");
    const willOpen = !activeFlyout?.classList.contains("is-open");
    closeNavFlyouts(activeFlyout);
    setNavFlyoutOpen(activeFlyout, willOpen);
    return;
  }

  if (!flyout) closeNavFlyouts();
  if (event.target.closest?.(".nav-flyout-panel a")) closeNavFlyouts();

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

document.addEventListener("contextmenu", (event) => {
  const helpTrigger = event.target.closest?.("[data-sidebar-help-trigger]");
  if (!helpTrigger) return;

  event.preventDefault();
  closeContextMenu();
  const activeHelpMenu = helpTrigger.closest(".sidebar-help-menu");
  closeSidebarHelpMenus(activeHelpMenu);
  setSidebarHelpOpen(activeHelpMenu, true);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeUserProfileDialog();
  closeKeyboardShortcutsDialog();
  closeSidebarHelpMenus();
  closeSidebarAccountMenus();
  closeNavFlyouts();
  document.querySelectorAll(".nav-menu-group.is-open").forEach((group) => {
    group.classList.remove("is-open");
    group.querySelector(".nav-group-trigger")?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("resize", repositionOpenSidebarHelpMenus);
window.addEventListener("scroll", repositionOpenSidebarHelpMenus, true);

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

const setupContextMenuEarlyRecovery = () => {
  const menu = ensureContextMenu();
  if (!menu || menu.dataset.earlyContextRecovery === "true") return;
  menu.dataset.earlyContextRecovery = "true";
  let earlyCloseTimeoutId = 0;
  let earlyTargetElement = null;
  let earlyTargetLink = null;
  let earlyTargetImage = null;

  const hideMenu = () => {
    window.clearTimeout(earlyCloseTimeoutId);
    menu.hidden = true;
    menu.classList.remove("is-closing");
    earlyTargetLink = null;
    earlyTargetImage = null;
  };

  const readBooleanSetting = (value, fallback = true) => {
    if (value === true || value === "true" || value === "1" || value === "on") return true;
    if (value === false || value === "false" || value === "0" || value === "off") return false;
    return fallback;
  };
  const canUseCustomMenu = () =>
    window.matchMedia?.("(max-width: 760px)").matches !== true &&
    readBooleanSetting(localStorage.getItem("profile-setting-custom-context-menu"), true);
  const isNativeTarget = (target) =>
    Boolean(target?.closest?.("select, .share-link-field, .share-link-field *"));
  const isEditableTarget = (target) =>
    Boolean(target?.matches?.("input:not([type]), input[type='text'], input[type='search'], input[type='email'], input[type='url'], input[type='tel'], textarea, [contenteditable='true']"));
  const getEditableText = (target) =>
    isEditableTarget(target) && typeof target.selectionStart === "number"
      ? target.value.slice(target.selectionStart, target.selectionEnd).trim()
      : "";
  const getImageTarget = (target) => {
    const image = target?.closest?.("img");
    return image && !image.closest(".brand-logo") ? image : null;
  };
  const showEarlyToast = (message) => {
    let toast = document.querySelector("[data-copy-toast]");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "copy-toast";
      toast.dataset.copyToast = "";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.append(toast);
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
  };
  const writeText = async (text) => {
    if (!text) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.append(textArea);
        textArea.select();
        document.execCommand?.("copy");
        textArea.remove();
      }
      showEarlyToast("Copied");
    } catch {
      showEarlyToast("Copy was blocked");
    }
  };
  const getPageText = () =>
    (document.querySelector("main")?.innerText || document.body.innerText || "").replace(/\s+\n/g, "\n").trim();
  const selectAllText = () => {
    if (isEditableTarget(earlyTargetElement)) {
      earlyTargetElement.focus?.();
      earlyTargetElement.select?.();
      return;
    }
    const range = document.createRange();
    range.selectNodeContents(document.querySelector("main") || document.body);
    const selection = window.getSelection?.();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };
  const cutEditableSelection = () => {
    if (!isEditableTarget(earlyTargetElement)) return;
    const start = earlyTargetElement.selectionStart;
    const end = earlyTargetElement.selectionEnd;
    const value = earlyTargetElement.value;
    if (typeof start !== "number" || typeof end !== "number" || start === end) return;
    writeText(value.slice(start, end)).catch(() => {});
    earlyTargetElement.value = `${value.slice(0, start)}${value.slice(end)}`;
    earlyTargetElement.setSelectionRange?.(start, start);
    earlyTargetElement.dispatchEvent(new Event("input", { bubbles: true }));
  };
  const pasteIntoEditable = async () => {
    if (!isEditableTarget(earlyTargetElement) || !navigator.clipboard?.readText) return;
    try {
      const text = await navigator.clipboard.readText();
      const start = earlyTargetElement.selectionStart ?? earlyTargetElement.value.length;
      const end = earlyTargetElement.selectionEnd ?? start;
      const value = earlyTargetElement.value;
      earlyTargetElement.focus?.();
      earlyTargetElement.value = `${value.slice(0, start)}${text}${value.slice(end)}`;
      earlyTargetElement.setSelectionRange?.(start + text.length, start + text.length);
      earlyTargetElement.dispatchEvent(new Event("input", { bubbles: true }));
      showEarlyToast("Pasted");
    } catch {
      showEarlyToast("Paste was blocked");
    }
  };
  const saveEarlyImage = () => {
    if (!earlyTargetImage) return;
    const link = document.createElement("a");
    link.href = earlyTargetImage.currentSrc || earlyTargetImage.src;
    link.download = "image";
    document.body.append(link);
    link.click();
    link.remove();
  };
  const refreshSeparators = () => {
    let hasVisibleActionBefore = false;
    let pendingSeparator = null;
    Array.from(menu.children).forEach((item) => {
      if (item.classList?.contains("context-menu-separator")) {
        item.hidden = true;
        pendingSeparator = item;
        return;
      }
      const isVisibleAction = item.matches?.("button") && !item.hidden;
      if (!isVisibleAction) return;
      if (pendingSeparator && hasVisibleActionBefore) pendingSeparator.hidden = false;
      pendingSeparator = null;
      hasVisibleActionBefore = true;
    });
  };

  document.addEventListener(
    "contextmenu",
    (event) => {
      if (window.__fpgFullContextMenuReady === true) return;
      const target = event.target instanceof Element ? event.target : null;
      if (!target || event.defaultPrevented || !canUseCustomMenu() || isNativeTarget(target)) return;

      event.preventDefault();
      window.clearTimeout(earlyCloseTimeoutId);
      earlyTargetElement = target;
      earlyTargetLink = target.closest?.("a[href]") || null;
      earlyTargetImage = getImageTarget(target);

      const selectedText = getEditableText(earlyTargetElement) || window.getSelection?.().toString().trim() || "";
      const copySelectionButton = menu.querySelector('[data-context-action="copy-selection"]');
      const cutButton = menu.querySelector('[data-context-action="cut"]');
      const openLinkButton = menu.querySelector('[data-context-action="open-link"]');
      const copyLinkButton = menu.querySelector('[data-context-action="copy-link"]');
      const saveImageButton = menu.querySelector('[data-context-action="save-image"]');
      const pasteButton = menu.querySelector('[data-context-action="paste"]');
      if (copySelectionButton) copySelectionButton.hidden = selectedText.length === 0;
      if (cutButton) cutButton.hidden = getEditableText(earlyTargetElement).length === 0;
      if (openLinkButton) openLinkButton.hidden = !earlyTargetLink;
      if (copyLinkButton) copyLinkButton.hidden = !earlyTargetLink;
      if (saveImageButton) {
        saveImageButton.hidden = !earlyTargetImage;
        saveImageButton.disabled = !earlyTargetImage;
        saveImageButton.setAttribute("aria-disabled", String(!earlyTargetImage));
      }
      if (pasteButton) {
        const canPaste = isEditableTarget(earlyTargetElement) && Boolean(navigator.clipboard?.readText);
        pasteButton.disabled = !canPaste;
        pasteButton.setAttribute("aria-disabled", String(!canPaste));
      }

      menu.hidden = false;
      menu.classList.remove("is-closing");
      const rect = menu.getBoundingClientRect();
      const margin = 10;
      menu.style.left = `${Math.max(margin, Math.min(event.clientX, window.innerWidth - rect.width - margin))}px`;
      menu.style.top = `${Math.max(margin, Math.min(event.clientY, window.innerHeight - rect.height - margin))}px`;
      refreshSeparators();
    },
    true,
  );

  menu.addEventListener(
    "click",
    (event) => {
      if (window.__fpgFullContextMenuReady === true) return;
      const target = event.target instanceof Element ? event.target : null;
      const button = target?.closest?.("[data-context-action]");
      if (!button) return;
      const action = button.dataset.contextAction;
      if (action === "close") {
        hideMenu();
        return;
      }
      if (action === "copy") {
        writeText(window.location.href).catch(() => {});
        hideMenu();
        return;
      }
      if (action === "copy-selection") {
        const text = getEditableText(earlyTargetElement) || window.getSelection?.().toString().trim() || "";
        writeText(text).catch(() => {});
        hideMenu();
        return;
      }
      if (action === "copy-link" && earlyTargetLink) {
        writeText(earlyTargetLink.href).catch(() => {});
        hideMenu();
        return;
      }
      if (action === "copy-title") {
        writeText(document.title || window.location.href).catch(() => {});
        hideMenu();
        return;
      }
      if (action === "text-copy") {
        writeText(getPageText()).catch(() => {});
        hideMenu();
        return;
      }
      if (action === "select-all") {
        selectAllText();
        hideMenu();
        return;
      }
      if (action === "cut") {
        cutEditableSelection();
        hideMenu();
        return;
      }
      if (action === "paste") {
        pasteIntoEditable().catch(() => {});
        hideMenu();
        return;
      }
      if (action === "open-link" && earlyTargetLink) {
        window.open(earlyTargetLink.href, "_blank", "noopener,noreferrer");
        hideMenu();
        return;
      }
      if (action === "save-image") {
        saveEarlyImage();
        hideMenu();
        return;
      }
      if (action === "share") {
        if (navigator.share) {
          navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
        } else {
          writeText(window.location.href).catch(() => {});
        }
        hideMenu();
        return;
      }
      if (action === "search") {
        window.location.href = "/search";
        return;
      }
      if (action === "qr") {
        writeText(window.location.href).catch(() => {});
        hideMenu();
        return;
      }
      if (action === "print") {
        window.print();
        hideMenu();
        return;
      }
      if (action === "source") {
        window.open(`view-source:${window.location.href}`, "_blank", "noopener,noreferrer");
        hideMenu();
        return;
      }
      if (action === "clipboard") {
        showEarlyToast("Clipboard center is available after the page finishes loading.");
        hideMenu();
        return;
      }
      if (action === "cast") {
        if ("PresentationRequest" in window) {
          const request = new PresentationRequest([window.location.href]);
          request.start?.().catch(() => {});
        } else {
          showEarlyToast("Cast is not available in this browser.");
        }
        hideMenu();
        return;
      }
      if (action === "back") {
        window.history.back();
        hideMenu();
        return;
      }
      if (action === "forward") {
        window.history.forward();
        hideMenu();
        return;
      }
      if (action === "refresh") {
        window.location.reload();
        return;
      }
      if (action === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        hideMenu();
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
        if (!openSettingsDialog()) window.location.href = "/settings";
      }
    },
    true,
  );

  document.addEventListener("click", (event) => {
    if (window.__fpgFullContextMenuReady === true) return;
    const target = event.target instanceof Element ? event.target : null;
    if (menu.hidden || target?.closest?.("[data-context-menu]")) return;
    hideMenu();
  });
};

setupContextMenuEarlyRecovery();

const navLinks = [...document.querySelectorAll(".nav-links a")];
const themeChoices = [...document.querySelectorAll("[data-theme-choice]")];
const languageChoices = [...document.querySelectorAll("[data-language-choice]")];
const themeSelect = document.querySelector("[data-theme-select]");
const themeTrigger = document.querySelector("[data-theme-trigger]");
const themeMenu = document.querySelector("[data-theme-menu]");
const themeLabel = document.querySelector("[data-theme-label]");
const languageSelect = document.querySelector("[data-language-select]");
const languageTrigger = document.querySelector("[data-language-trigger]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageLabel = document.querySelector("[data-language-label]");
const clearCacheButton = document.querySelector("[data-clear-cache]");
const clearCacheWarning = document.querySelector("[data-clear-cache-warning]");
const clearCacheCancel = document.querySelector("[data-clear-cache-cancel]");
const clearCacheConfirm = document.querySelector("[data-clear-cache-confirm]");
const clearCacheNote = document.querySelector("[data-clear-cache-note]");
const storageMeter = document.querySelector("[data-storage-meter]");
const storagePercents = [...document.querySelectorAll("[data-storage-percent]")];
const themeStatuses = [...document.querySelectorAll("[data-theme-status]")];
const storageBar = document.querySelector("[data-storage-bar]");
const storageUsage = document.querySelector("[data-storage-usage]");
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
const contextModeOpen = document.querySelector("[data-context-menu-open]");
const contextModeDialog = document.querySelector("[data-context-mode-dialog]");
const contextModeCloseButtons = [...document.querySelectorAll("[data-context-mode-close]")];
const contextModeChoices = [...document.querySelectorAll("[data-context-menu-choice]")];
const cookieSettingsOpen = document.querySelector("[data-cookie-settings-open]");
const cookieSettingsDialog = document.querySelector("[data-cookie-settings-dialog]");
const cookieSettingsCloseButtons = [...document.querySelectorAll("[data-cookie-settings-close]")];
const cookiePreferenceToggle = document.querySelector("[data-cookie-preference-toggle]");
const cookieSettingsStatus = document.querySelector("[data-cookie-settings-status]");
const browserUsageDailyReset = document.querySelector("[data-browser-daily-reset]");
const browserUsageDailyRemaining = document.querySelector("[data-browser-daily-remaining]");
const browserUsageDailyBar = document.querySelector("[data-browser-daily-bar]");
const browserUsageWeeklyReset = document.querySelector("[data-browser-weekly-reset]");
const browserUsageWeeklyRemaining = document.querySelector("[data-browser-weekly-remaining]");
const browserUsageWeeklyBar = document.querySelector("[data-browser-weekly-bar]");
const browserUsageMonthlyReset = document.querySelector("[data-browser-monthly-reset]");
const browserUsageMonthlyRemaining = document.querySelector("[data-browser-monthly-remaining]");
const browserUsageMonthlyBar = document.querySelector("[data-browser-monthly-bar]");
const usageResetButton = document.querySelector("[data-usage-reset-button]");
const usageResetStatus = document.querySelector("[data-usage-reset-status]");
let usageResetWarningDialog = document.querySelector("[data-usage-reset-warning]");
let usageResetWarningCloseButtons = [...document.querySelectorAll("[data-usage-reset-warning-close]")];
let usageResetWarningConfirm = document.querySelector("[data-usage-reset-warning-confirm]");
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
    ".mobile-menu-button, .button, .feedback-cta, .contact-links a, .icon-button, .adblock-notice button, .settings-sidebar a, .currency-switch button, .setting-select-trigger, .setting-select-menu button, .share-socials button, .scroll-actions button, .context-menu button, .nav-search-button, .top-search-button, .nav-flyout-trigger, .nav-flyout-panel a",
  ),
];
const sections = navLinks
  .filter((link) => link.getAttribute("href")?.startsWith("#"))
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const translations = window.profileTranslations || { ko: {}, en: {} };
const normalizeTheme = (theme) => {
  if (theme === "dark" || theme === "lights-off") return theme;
  if (theme === "light") return "dark";
  if (theme === "dim" || theme === "dark-mode" || theme === "true") return "dark";
  if (theme === "lightsout" || theme === "lights-out" || theme === "black" || theme === "off") {
    return "lights-off";
  }
  return "";
};

const normalizeLanguage = (language) => {
  const value = String(language || "").toLowerCase();
  if (value.startsWith("ko")) return "ko";
  if (value.startsWith("en")) return "en";
  return "";
};

const normalizeLanguagePreference = (language) => {
  const value = String(language || "").toLowerCase();
  if (value === "auto" || value === "system" || value === "browser" || value === "detect") return "auto";
  return normalizeLanguage(value);
};

const detectBrowserLanguage = () => {
  const languages = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  return languages.map(normalizeLanguage).find(Boolean) || "ko";
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

const getResolvedLanguage = (preference) =>
  normalizeLanguagePreference(preference) === "auto"
    ? detectBrowserLanguage()
    : normalizeLanguage(preference) || detectBrowserLanguage();

const getInitialLanguagePreference = () => normalizeLanguagePreference(localStorage.getItem("profile-language")) || "auto";
const getInitialLanguage = () => getResolvedLanguage(getInitialLanguagePreference());

let currentLanguagePreference = getInitialLanguagePreference();
let currentLanguage = getResolvedLanguage(currentLanguagePreference);

const translate = (key) => translations[currentLanguage][key] || translations.ko[key] || key;

const USER_PROFILE_NAME_KEY = "profile-user-name";
const USER_PROFILE_AVATAR_KEY = "profile-user-avatar";
const USER_PROFILE_VISIBILITY_KEY = "profile-setting-profile-public";
const DEFAULT_USER_PROFILE_NAME = "My name";
const DEFAULT_USER_PROFILE_AVATAR = "/assets/well-avatar.webp";
const USER_PROFILE_PLAN = "Free";

const getUserProfileName = () => {
  const value = localStorage.getItem(USER_PROFILE_NAME_KEY)?.trim();
  return value || DEFAULT_USER_PROFILE_NAME;
};

const getUserProfileAvatar = () => localStorage.getItem(USER_PROFILE_AVATAR_KEY) || DEFAULT_USER_PROFILE_AVATAR;
const getUserProfileVisibility = () => normalizeBooleanSetting(localStorage.getItem(USER_PROFILE_VISIBILITY_KEY), true);

const syncUserProfileUI = () => {
  const name = getUserProfileName();
  const avatar = getUserProfileAvatar();
  const hasCustomAvatar = avatar !== DEFAULT_USER_PROFILE_AVATAR;
  const isVisible = getUserProfileVisibility();

  document.querySelectorAll("[data-profile-name]").forEach((element) => {
    element.textContent = name;
  });
  document.querySelectorAll("[data-profile-plan]").forEach((element) => {
    element.textContent = USER_PROFILE_PLAN;
  });
  document.querySelectorAll(".sidebar-account-avatar, [data-profile-avatar-preview]").forEach((image) => {
    image.src = avatar;
  });

  const nameInput = document.querySelector("[data-profile-name-input]");
  if (nameInput) nameInput.value = name;

  document.querySelectorAll("[data-profile-avatar-status]").forEach((element) => {
    element.textContent = translate(hasCustomAvatar ? "profileDialog.avatarCustom" : "profileDialog.avatarDefault");
  });
  document.querySelectorAll("[data-profile-visibility-status]").forEach((element) => {
    element.textContent = translate(isVisible ? "profileDialog.visibilityOn" : "profileDialog.visibilityOff");
  });
  document.querySelectorAll("[data-profile-visibility-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(isVisible));
  });
};

const saveUserProfileName = () => {
  const input = document.querySelector("[data-profile-name-input]");
  const nextName = input?.value.trim() || DEFAULT_USER_PROFILE_NAME;
  localStorage.setItem(USER_PROFILE_NAME_KEY, nextName);
  syncUserProfileUI();
  showCopyToast("profileDialog.saved");
};

const resetUserProfile = () => {
  localStorage.setItem(USER_PROFILE_NAME_KEY, DEFAULT_USER_PROFILE_NAME);
  localStorage.removeItem(USER_PROFILE_AVATAR_KEY);
  localStorage.setItem(USER_PROFILE_VISIBILITY_KEY, "true");
  const avatarInput = document.querySelector("[data-profile-avatar-input]");
  if (avatarInput) avatarInput.value = "";
  syncUserProfileUI();
  showCopyToast("profileDialog.resetSaved");
};

const resetUserProfileAvatar = () => {
  localStorage.removeItem(USER_PROFILE_AVATAR_KEY);
  const avatarInput = document.querySelector("[data-profile-avatar-input]");
  if (avatarInput) avatarInput.value = "";
  syncUserProfileUI();
  showCopyToast("profileDialog.photoResetSaved");
};

const toggleUserProfileVisibility = () => {
  const nextValue = !getUserProfileVisibility();
  localStorage.setItem(USER_PROFILE_VISIBILITY_KEY, String(nextValue));
  syncUserProfileUI();
  showCopyToast(nextValue ? "profileDialog.visibilitySavedOn" : "profileDialog.visibilitySavedOff");
};

const readUserProfileAvatar = (file) => {
  if (!file?.type?.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      localStorage.setItem(USER_PROFILE_AVATAR_KEY, String(reader.result || ""));
      syncUserProfileUI();
      showCopyToast("profileDialog.photoSaved");
    } catch {
      showCopyToast("profileDialog.photoTooLarge");
    }
  });
  reader.readAsDataURL(file);
};

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
  toast.dataset.toastTone = messageKey === "settings.saved" ? "success" : "default";
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
    pro: "$20 / 약 ₩28,000",
    team: "예약 필요",
    ultra: "Stripe에서 확인",
  },
  usd: {
    free: "$0",
    pro: "$20 / approx. ₩28,000",
    team: "Reservation required",
    ultra: "Confirm in Stripe",
  },
};

const siteSearchIndex = [
  {
    titleKey: "search.homeTitle",
    bodyKey: "search.homeBody",
    url: "/",
    keywords: {
      ko: "home 공식 첫 화면 first prize games 프로필 응급 대응 소개 신뢰 포털",
      en: "home official first screen first prize games profile emergency response trust portal",
    },
  },
  {
    titleKey: "search.portalTitle",
    bodyKey: "search.portalBody",
    url: "/portal",
    keywords: {
      ko: "portal 포털 기존 home 공유 구독 업데이트 피드백 빠른 이동",
      en: "portal old home share subscribe updates feedback quick navigation",
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
      ko: "settings 설정 테마 언어 우클릭 메뉴 캐시 저장용량 kid mode 접근성 사이드바 내비게이션",
      en: "settings theme language context menu cache storage kid mode accessibility sidebar navigation",
    },
  },
  {
    titleKey: "search.accessibilityTitle",
    bodyKey: "search.accessibilityBody",
    url: "/accessibility",
    keywords: {
      ko: "accessibility 접근성 키보드 포커스 색 대비 언어 움직임 감소",
      en: "accessibility keyboard focus contrast language mobile display standards",
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

const syncQuickSettingsControls = () => {};

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
    auto: "settings.languageAuto",
    ko: "settings.languageKorean",
    en: "settings.languageEnglish",
  };
  const languagePreference = normalizeLanguagePreference(language) || "auto";
  const resolvedLanguage = getResolvedLanguage(languagePreference);

  currentLanguagePreference = languagePreference;
  currentLanguage = resolvedLanguage;
  document.documentElement.lang = resolvedLanguage;
  localStorage.setItem("profile-language", languagePreference);

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
    const isActive = button.dataset.languageChoice === languagePreference;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (languageLabel) {
    languageLabel.textContent = translate(languageLabelKeys[languagePreference] || "settings.languageAuto");
  }

  shareLinkButton?.setAttribute("aria-label", translate("share.copy"));
  document.documentElement.dataset.i18nReady = "true";

  setTheme(document.documentElement.dataset.theme || getInitialTheme());
  setCurrency(localStorage.getItem("profile-currency") || (resolvedLanguage === "ko" ? "krw" : "usd"));
  setKidMode(document.documentElement.dataset.kidMode || "off");
  settingToggles.forEach((button) => {
    updateSettingToggle(button, button.classList.contains("is-on"));
  });
  updateCookiePreferenceControls(getCookiePreferences().preferences);
  updateStorageEstimate();
  renderActivityPage();
  syncQuickSettingsControls();
  syncUserProfileUI();
};

const getToggleLabelKey = (key, isOn) => {
  const labels = {
    "kid-mode": isOn ? "settings.kidModeOn" : "settings.kidModeOff",
    "custom-context-menu": isOn ? "settings.contextMenuOn" : "settings.contextMenuOff",
  };

  return labels[key];
};

const updateSettingToggle = (button, isOn) => {
  button.classList.toggle("is-on", isOn);
  button.setAttribute("aria-pressed", String(isOn));

  if (button.dataset.toggleKey === "kid-mode") {
    setKidMode(isOn ? "strong" : "off");
  }

  const labelKey = getToggleLabelKey(button.dataset.toggleKey, isOn);
  if (labelKey) button.setAttribute("aria-label", translate(labelKey));

  syncQuickSettingsControls();
};

const setupSettingToggles = () => {
  settingToggles.forEach((button) => {
    const storageKey = `profile-setting-${button.dataset.toggleKey}`;
    const savedValue = localStorage.getItem(storageKey);
    let isOn = normalizeBooleanSetting(savedValue, button.classList.contains("is-on"));

    updateSettingToggle(button, isOn);
    localStorage.setItem(storageKey, String(isOn));

    button.addEventListener("click", () => {
      let nextValue = !button.classList.contains("is-on");

      localStorage.setItem(storageKey, String(nextValue));
      if (button.dataset.toggleKey === "kid-mode") {
        setKidMode(nextValue ? "strong" : "off");
      }
      updateSettingToggle(button, nextValue);
      showCopyToast("settings.saved");
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
      showCopyToast("settings.saved");
    });
  });
};

const setupUserProfileDialog = () => {
  syncUserProfileUI();

  document.querySelectorAll("[data-profile-save]").forEach((button) => {
    button.addEventListener("click", saveUserProfileName);
  });
  document.querySelectorAll("[data-profile-reset]").forEach((button) => {
    button.addEventListener("click", resetUserProfile);
  });
  document.querySelectorAll("[data-profile-avatar-reset]").forEach((button) => {
    button.addEventListener("click", resetUserProfileAvatar);
  });
  document.querySelectorAll("[data-profile-visibility-toggle]").forEach((button) => {
    button.addEventListener("click", toggleUserProfileVisibility);
  });
  document.querySelectorAll("[data-profile-name-input]").forEach((input) => {
    input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") saveUserProfileName();
  });
  });
  document.querySelectorAll("[data-profile-avatar-input]").forEach((input) => {
    input.addEventListener("change", (event) => {
    readUserProfileAvatar(event.target.files?.[0]);
  });
  });
};

const normalizeKidMode = (mode) => {
  if (mode === "true") return "strong";
  if (mode === "soft" || mode === "strong") return mode;
  return "off";
};

const setKidMode = (mode) => {
  const resolvedMode = normalizeKidMode(mode);

  document.documentElement.dataset.kidMode = resolvedMode;
  localStorage.setItem("profile-setting-kid-mode", resolvedMode);
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
        <div class="cache-warning-actions clipboard-actions">
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

const createUsageResetWarningDialog = () => {
  if (!document.querySelector("[data-usage-reset-warning]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog usage-reset-warning-dialog";
    dialog.dataset.usageResetWarning = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel usage-reset-warning-panel" role="dialog" aria-modal="true" aria-labelledby="usage-reset-warning-title">
        <button class="dialog-close-button" type="button" data-usage-reset-warning-close aria-label="닫기" data-i18n-aria-label="share.close">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <p class="eyebrow" data-i18n="usage.resetWarningEyebrow">Usage reset</p>
        <h2 id="usage-reset-warning-title" data-i18n="usage.resetWarningTitle">한도를 초기화할까요?</h2>
        <p data-i18n="usage.resetWarningBody">5시간, 주간, 월간 사용 한도가 모두 지금부터 다시 시작됩니다. 이번 주 초기화 가능 횟수 1회가 사용됩니다.</p>
        <div class="cache-warning-actions">
          <button class="button cache-cancel-button" type="button" data-usage-reset-warning-close data-i18n="usage.resetWarningCancel">취소</button>
          <button class="button cache-confirm-button usage-reset-confirm-button" type="button" data-usage-reset-warning-confirm data-i18n="usage.resetWarningConfirm">초기화</button>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
  }

  usageResetWarningDialog = document.querySelector("[data-usage-reset-warning]");
  usageResetWarningCloseButtons = [...document.querySelectorAll("[data-usage-reset-warning-close]")];
  usageResetWarningConfirm = document.querySelector("[data-usage-reset-warning-confirm]");
};

const createWelcomeDialog = () => {
  if (isSystemRecoveryPage) return;
  if (document.querySelector("[data-welcome-dialog]")) return;

  const dialog = document.createElement("div");
  dialog.className = "cache-dialog welcome-dialog";
  dialog.dataset.welcomeDialog = "";
  dialog.hidden = true;
  dialog.innerHTML = `
    <div class="cache-dialog-panel welcome-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="welcome-dialog-title">
      <button class="dialog-close-button" type="button" data-welcome-close aria-label="닫기" data-i18n-aria-label="share.close">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      </button>
      <p class="eyebrow" data-i18n="welcome.eyebrow">Welcome</p>
      <h2 id="welcome-dialog-title" data-i18n="welcome.title">First PrizeGames에 오신 것을 환영합니다</h2>
      <p data-i18n="welcome.body">처음 방문했다면 여기서 주요 페이지와 설정을 빠르게 둘러볼 수 있습니다.</p>
      <div class="welcome-feature-list" aria-label="Welcome highlights" data-i18n-aria-label="welcome.highlightsLabel">
        <article>
          ${navIconMarkup.updates}
          <div class="welcome-feature-copy">
            <strong data-i18n="welcome.updatesTitle">최신 업데이트</strong>
            <span data-i18n="welcome.updatesBody">최근 변경 사항과 새 기능을 확인합니다.</span>
          </div>
        </article>
        <article>
          ${navIconMarkup.settings}
          <div class="welcome-feature-copy">
            <strong data-i18n="welcome.settingsTitle">개인화 설정</strong>
            <span data-i18n="welcome.settingsBody">테마, 언어, 알림, 접근성 옵션을 조정합니다.</span>
          </div>
        </article>
        <article>
          ${navIconMarkup.trust}
          <div class="welcome-feature-copy">
            <strong data-i18n="welcome.trustTitle">신뢰 정보</strong>
            <span data-i18n="welcome.trustBody">개인정보, 보안, 상태 페이지로 바로 이동합니다.</span>
          </div>
        </article>
      </div>
      <div class="cache-warning-actions welcome-actions">
        <button class="button cache-cancel-button" type="button" data-welcome-close data-i18n="welcome.dismiss">나중에 보기</button>
        <a class="button cache-confirm-button" href="/updates" data-welcome-primary data-i18n="welcome.primary">둘러보기</a>
      </div>
    </div>
  `;
  document.body.appendChild(dialog);
};

const setupWelcomeDialog = () => {
  if (isSystemRecoveryPage) return;
  const welcomeSeenKey = "profile-welcome-seen";
  const dialog = document.querySelector("[data-welcome-dialog]");
  if (!dialog || localStorage.getItem(welcomeSeenKey) === "true") return;
  if (!document.body.classList.contains("official-home-body")) {
    dialog.hidden = true;
    return;
  }
  if (!hasStorageConsent()) return;

  const closeWelcome = () => {
    localStorage.setItem(welcomeSeenKey, "true");
    dialog.classList.add("is-closing");
    window.setTimeout(() => {
      dialog.hidden = true;
      dialog.classList.remove("is-closing");
    }, 180);
  };

  dialog.querySelectorAll("[data-welcome-close]").forEach((button) => {
    button.addEventListener("click", closeWelcome);
  });

  dialog.querySelector("[data-welcome-primary]")?.addEventListener("click", () => {
    localStorage.setItem(welcomeSeenKey, "true");
  });

  dialog.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === dialog) closeWelcome();
  });

  window.setTimeout(() => {
    if (localStorage.getItem(welcomeSeenKey) === "true") return;
    dialog.hidden = false;
    dialog.querySelector("[data-welcome-close]")?.focus({ preventScroll: true });
  }, 900);
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
  if (isSystemRecoveryPage) return;
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

const searchRecentKey = "profile-search-recent";
const searchFilterLabels = {
  pages: "search.filterPages",
  settings: "search.filterSettings",
  help: "search.filterHelp",
  legal: "search.filterLegal",
};

const normalizeSearchText = (value) => value.toLowerCase().replace(/\s+/g, " ").trim();

const getSearchCategory = (item) => {
  const url = item.url || "";
  if (["/settings", "/accessibility"].includes(url)) return "settings";
  if (["/FAQ", "/feedback", "/updates", "/activity"].includes(url)) return "help";
  if (["/privacy", "/license", "/terms", "/trust", "/security", "/status"].includes(url)) return "legal";
  return "pages";
};

const getStoredRecentSearches = () => {
  try {
    const values = JSON.parse(localStorage.getItem(searchRecentKey) || "[]");
    return Array.isArray(values) ? values.filter(Boolean).slice(0, 5) : [];
  } catch (error) {
    return [];
  }
};

const saveRecentSearch = (query) => {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return;

  const displayQuery = String(query || "").trim().slice(0, 48);
  const nextValues = [
    displayQuery,
    ...getStoredRecentSearches().filter((item) => normalizeSearchText(item) !== normalizedQuery),
  ].slice(0, 5);
  localStorage.setItem(searchRecentKey, JSON.stringify(nextValues));
};

const getSearchResultsMarkup = (query = "", filter = "all") => {
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
      return { ...item, category: getSearchCategory(item), score };
    })
    .filter((item) => item.score > 0)
    .filter((item) => filter === "all" || item.category === filter)
    .sort((a, b) => b.score - a.score);

  if (!results.length) {
    return `<p class="search-empty">${translate("search.noResults")}</p>`;
  }

  return results
    .map(
      (item) => `
        <button type="button" class="search-result" data-search-url="${item.url}">
          <span class="search-result-meta">${translate(searchFilterLabels[item.category] || "search.filterPages")}</span>
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

const renderSearchPageResults = (query = "", filter = "all") => {
  const resultsContainer = document.querySelector("[data-search-page-results]");
  if (!resultsContainer) return;

  resultsContainer.innerHTML = getSearchResultsMarkup(query, filter);
};

const renderRecentSearches = () => {
  const recentContainer = document.querySelector("[data-search-recent-list]");
  if (!recentContainer) return;

  const recentSearches = getStoredRecentSearches();
  const suggestions = ["Pricing", "Privacy", "Accessibility", "FAQ"];
  const values = recentSearches.length ? recentSearches : suggestions;

  recentContainer.innerHTML = values
    .map(
      (value) => `
        <button type="button" data-search-recent-query="${value}">
          <span>${value}</span>
        </button>
      `,
    )
    .join("");
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

  });
};

const setupSearchPage = () => {
  const input = document.querySelector("[data-search-page-input]");
  const resultsContainer = document.querySelector("[data-search-page-results]");
  const filterButtons = [...document.querySelectorAll("[data-search-page-filter]")];
  const recentContainer = document.querySelector("[data-search-recent-list]");
  if (!input || !resultsContainer) return;

  const params = new URLSearchParams(window.location.search);
  let activeFilter = "all";
  input.value = params.get("q") || "";
  renderSearchPageResults(input.value, activeFilter);
  renderRecentSearches();

  input.addEventListener("input", () => {
    renderSearchPageResults(input.value, activeFilter);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      saveRecentSearch(input.value);
      renderRecentSearches();
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.searchPageFilter || "all";
      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });
      renderSearchPageResults(input.value, activeFilter);
    });
  });

  resultsContainer.addEventListener("click", (event) => {
    const result = event.target.closest?.("[data-search-url]");
    if (!result) return;
    saveRecentSearch(input.value || result.innerText || "");
    window.location.href = result.dataset.searchUrl;
  });

  recentContainer?.addEventListener("click", (event) => {
    const recentButton = event.target.closest?.("[data-search-recent-query]");
    if (!recentButton) return;
    input.value = recentButton.dataset.searchRecentQuery || "";
    input.focus();
    renderSearchPageResults(input.value, activeFilter);
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

const formatActivityDate = (createdAt) => {
  const formatter = new Intl.DateTimeFormat(currentLanguage === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
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

  const activityGroups = items.reduce((groups, item) => {
    const key = formatActivityDate(item.createdAt);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
    return groups;
  }, new Map());

  list.innerHTML = Array.from(activityGroups.entries())
    .map(([dateLabel, groupItems], groupIndex) => {
      return `
        <article class="activity-date-group">
          <header>
            <time>${escapeActivityText(dateLabel)}</time>
            ${groupIndex === 0 ? `<span>${translate("activity.latest")}</span>` : ""}
          </header>
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
        </article>
      `;
    })
    .join("");
};

const setupActivityPage = () => {
  document.querySelectorAll("[data-activity-clear]").forEach((clearButton) => clearButton.addEventListener("click", () => {
    localStorage.removeItem(activityLogKey);
    renderActivityPage();
  }));
  renderActivityPage();
};

const recordPageActivity = () => {
  recordActivity("visit", `${translate("activity.visit")}: ${getPageActivityLabel()}`);
};

const clearSiteCache = () => {
  closeClearCacheWarning();

  [
    "profile-theme",
    "profile-user-name",
    "profile-user-avatar",
    "profile-language",
    "profile-currency",
    "profile-setting-profile-public",
    "profile-sidebar-collapsed",
    "profile-setting-kid-mode",
    "profile-setting-custom-context-menu",
    "profile-welcome-seen",
    "profile-cookie-preferences",
    "profile-browser-usage-total-ms",
    "profile-browser-usage-used-ms",
    "profile-browser-usage-window-start-ms",
    "profile-browser-usage-week-start-ms",
    "profile-browser-usage-week-used-ms",
    "profile-browser-usage-month-start-ms",
    "profile-browser-usage-month-used-ms",
    "profile-browser-usage-reset-week-start-ms",
    "profile-browser-usage-reset-week-count",
    "profile-browser-usage-accounting-version",
    activityLogKey,
    homeSubscriptionKey,
  ].forEach((key) => localStorage.removeItem(key));
  clearStorageConsent();
  if (window.caches?.keys) {
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key.startsWith("profile-offline-")).map((key) => caches.delete(key))),
      )
      .then(updateStorageEstimate)
      .catch(() => {});
  }

  document.documentElement.dataset.theme = "dark";
  document.documentElement.dataset.kidMode = "off";
  document.documentElement.dataset.navLayout = "sidebar";
  setLanguage("en");
  setCurrency("usd");
  setContextMenuMode("custom");
  setKidMode("off");

  settingToggles.forEach((button) => {
    const defaultOn = button.dataset.toggleKey === "kid-mode" ? false : button.classList.contains("is-on");
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
const browserUsageMonthlyLimitMs = 30 * browserUsageLimitMs;
const browserUsageMonthMs = 30 * 24 * 60 * 60 * 1000;
const browserUsageResetLimit = 2;
const browserUsageStartedAt = Date.now();
const browserUsageAccountingVersion = "visible-session-v1";
if (localStorage.getItem("profile-browser-usage-accounting-version") !== browserUsageAccountingVersion) {
  localStorage.setItem("profile-browser-usage-window-start-ms", String(browserUsageStartedAt));
  localStorage.setItem("profile-browser-usage-used-ms", "0");
  localStorage.setItem("profile-browser-usage-week-start-ms", String(browserUsageStartedAt));
  localStorage.setItem("profile-browser-usage-week-used-ms", "0");
  localStorage.setItem("profile-browser-usage-month-start-ms", String(browserUsageStartedAt));
  localStorage.setItem("profile-browser-usage-month-used-ms", "0");
  localStorage.removeItem("profile-browser-usage-total-ms");
  localStorage.setItem("profile-browser-usage-accounting-version", browserUsageAccountingVersion);
}
let browserUsageActiveStartedAt = document.visibilityState === "visible" ? browserUsageStartedAt : 0;
let browserUsageWindowStart = Number.parseInt(localStorage.getItem("profile-browser-usage-window-start-ms") || "0", 10);
let browserUsageBaseMs = Number.parseInt(
  localStorage.getItem("profile-browser-usage-used-ms") || localStorage.getItem("profile-browser-usage-total-ms") || "0",
  10,
);
let browserUsageWeeklyWindowStart = Number.parseInt(localStorage.getItem("profile-browser-usage-week-start-ms") || "0", 10);
let browserUsageWeeklyBaseMs = Number.parseInt(localStorage.getItem("profile-browser-usage-week-used-ms") || "0", 10);
let browserUsageMonthlyWindowStart = Number.parseInt(localStorage.getItem("profile-browser-usage-month-start-ms") || "0", 10);
let browserUsageMonthlyBaseMs = Number.parseInt(localStorage.getItem("profile-browser-usage-month-used-ms") || "0", 10);
let browserUsageResetWeekStart = Number.parseInt(
  localStorage.getItem("profile-browser-usage-reset-week-start-ms") || "0",
  10,
);
let browserUsageResetWeekCount = Number.parseInt(
  localStorage.getItem("profile-browser-usage-reset-week-count") || "0",
  10,
);
let browserUsageRedirected = false;
let browserUsageWindowStateChanged = false;
let browserUsageWeeklyWindowStateChanged = false;
let browserUsageMonthlyWindowStateChanged = false;
let browserUsageResetWindowStateChanged = false;
let usageLimitNotice = null;
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
if (!Number.isFinite(browserUsageMonthlyWindowStart) || browserUsageMonthlyWindowStart <= 0) {
  browserUsageMonthlyWindowStart = browserUsageStartedAt;
  browserUsageMonthlyWindowStateChanged = true;
}
if (!Number.isFinite(browserUsageMonthlyBaseMs) || browserUsageMonthlyBaseMs < 0) {
  browserUsageMonthlyBaseMs = 0;
  browserUsageMonthlyWindowStateChanged = true;
}
if (!Number.isFinite(browserUsageResetWeekStart) || browserUsageResetWeekStart <= 0) {
  browserUsageResetWeekStart = 0;
  browserUsageResetWindowStateChanged = true;
}
if (!Number.isFinite(browserUsageResetWeekCount) || browserUsageResetWeekCount < 0) {
  browserUsageResetWeekCount = 0;
  browserUsageResetWindowStateChanged = true;
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
if (browserUsageMonthlyWindowStateChanged) {
  localStorage.setItem("profile-browser-usage-month-start-ms", String(browserUsageMonthlyWindowStart));
  localStorage.setItem("profile-browser-usage-month-used-ms", String(browserUsageMonthlyBaseMs));
}
if (browserUsageResetWindowStateChanged) {
  localStorage.setItem("profile-browser-usage-reset-week-start-ms", String(browserUsageResetWeekStart));
  localStorage.setItem("profile-browser-usage-reset-week-count", String(browserUsageResetWeekCount));
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

const formatUsageDateValue = (timestamp, includeYear = false) => {
  const date = new Date(timestamp);
  const locale = currentLanguage === "ko" ? "ko-KR" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    ...(includeYear ? { year: "numeric" } : {}),
    month: "long",
    day: "numeric",
  }).format(date);
};

const formatUsageResetDate = (timestamp) => {
  const dateText = formatUsageDateValue(timestamp);

  return translate("usage.resetOn").replace("{date}", dateText);
};

const formatUsageResetFullDate = (timestamp) => {
  const dateText = formatUsageDateValue(timestamp, true);

  return translate("usage.resetOn").replace("{date}", dateText);
};

const getUsageLimitNotice = () => {
  if (usageLimitNotice) return usageLimitNotice;

  usageLimitNotice = document.querySelector("[data-usage-limit-notice]");
  if (usageLimitNotice) return usageLimitNotice;

  usageLimitNotice = document.createElement("aside");
  usageLimitNotice.className = "usage-limit-notice";
  usageLimitNotice.dataset.usageLimitNotice = "";
  usageLimitNotice.hidden = true;
  usageLimitNotice.setAttribute("role", "alert");
  usageLimitNotice.setAttribute("aria-live", "assertive");
  usageLimitNotice.innerHTML = `
    <strong data-i18n="usage.limitNoticeTitle">${translate("usage.limitNoticeTitle")}</strong>
    <span data-i18n="usage.limitNoticeBody">${translate("usage.limitNoticeBody")}</span>
    <a href="/Pricing" data-i18n="usage.limitNoticeButton">${translate("usage.limitNoticeButton")}</a>
  `;
  document.body.appendChild(usageLimitNotice);
  return usageLimitNotice;
};

const setUsageLimitNoticeVisible = (isVisible) => {
  const notice = getUsageLimitNotice();
  notice.hidden = !isVisible;
  notice.classList.toggle("is-visible", isVisible);
};

const refreshBrowserUsageWindow = () => {
  const now = Date.now();
  if (now - browserUsageWindowStart < browserUsageLimitMs) return;

  browserUsageWindowStart = now;
  browserUsageBaseMs = 0;
  browserUsageRedirected = false;
  setUsageLimitNoticeVisible(false);
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

const refreshBrowserUsageMonthlyWindow = () => {
  const now = Date.now();
  if (now - browserUsageMonthlyWindowStart < browserUsageMonthMs) return;

  browserUsageMonthlyWindowStart = now;
  browserUsageMonthlyBaseMs = 0;
  localStorage.setItem("profile-browser-usage-month-start-ms", String(browserUsageMonthlyWindowStart));
  localStorage.setItem("profile-browser-usage-month-used-ms", "0");
};

const refreshBrowserUsageResetWindow = () => {
  const now = Date.now();
  if (browserUsageResetWeekStart <= 0) return;
  if (now - browserUsageResetWeekStart < browserUsageWeekMs) return;

  browserUsageResetWeekStart = now;
  browserUsageResetWeekCount = 0;
  localStorage.setItem("profile-browser-usage-reset-week-start-ms", String(browserUsageResetWeekStart));
  localStorage.setItem("profile-browser-usage-reset-week-count", "0");
};

refreshBrowserUsageWindow();
refreshBrowserUsageWeeklyWindow();
refreshBrowserUsageMonthlyWindow();
refreshBrowserUsageResetWindow();

const getUsageResetRemaining = () => {
  refreshBrowserUsageResetWindow();
  return Math.max(browserUsageResetLimit - browserUsageResetWeekCount, 0);
};

const updateUsageResetControl = () => {
  if (!usageResetButton && !usageResetStatus) return;

  const remaining = getUsageResetRemaining();
  const resetDate = formatUsageDateValue(browserUsageResetWeekStart + browserUsageWeekMs, true);
  if (usageResetButton) usageResetButton.disabled = remaining <= 0;
  if (usageResetStatus) {
    usageResetStatus.textContent =
      remaining > 0
        ? translate("usage.resetStatus").replace("{count}", String(remaining))
        : translate("usage.resetStatusEmpty").replace("{date}", resetDate);
  }
};

const resetBrowserUsageLimits = () => {
  if (getUsageResetRemaining() <= 0) {
    updateUsageResetControl();
    return;
  }

  const now = Date.now();
  refreshBrowserUsageResetWindow();
  if (browserUsageResetWeekStart <= 0) {
    browserUsageResetWeekStart = now;
    browserUsageResetWeekCount = 0;
  }
  browserUsageWindowStart = now;
  browserUsageBaseMs = 0;
  browserUsageWeeklyWindowStart = now;
  browserUsageWeeklyBaseMs = 0;
  browserUsageMonthlyWindowStart = now;
  browserUsageMonthlyBaseMs = 0;
  browserUsageRedirected = false;
  browserUsageResetWeekCount = Math.min(browserUsageResetWeekCount + 1, browserUsageResetLimit);
  localStorage.setItem("profile-browser-usage-window-start-ms", String(browserUsageWindowStart));
  localStorage.setItem("profile-browser-usage-used-ms", "0");
  localStorage.setItem("profile-browser-usage-week-start-ms", String(browserUsageWeeklyWindowStart));
  localStorage.setItem("profile-browser-usage-week-used-ms", "0");
  localStorage.setItem("profile-browser-usage-month-start-ms", String(browserUsageMonthlyWindowStart));
  localStorage.setItem("profile-browser-usage-month-used-ms", "0");
  localStorage.setItem("profile-browser-usage-reset-week-start-ms", String(browserUsageResetWeekStart));
  localStorage.setItem("profile-browser-usage-reset-week-count", String(browserUsageResetWeekCount));
  localStorage.removeItem("profile-browser-usage-total-ms");
  setUsageLimitNoticeVisible(false);
  updateBrowserUsage();
  updateUsageResetControl();
};

const showUsageResetWarningDialog = () => {
  if (getUsageResetRemaining() <= 0) {
    updateUsageResetControl();
    return;
  }

  if (!usageResetWarningDialog) createUsageResetWarningDialog();
  if (!usageResetWarningDialog) return;
  usageResetWarningDialog.hidden = false;
  usageResetWarningDialog.classList.remove("is-closing");
  lockBodyScroll();
  window.setTimeout(() => {
    usageResetWarningConfirm?.focus({ preventScroll: true });
  }, 30);
};

const closeUsageResetWarningDialog = () => {
  if (!usageResetWarningDialog || usageResetWarningDialog.hidden) return;
  usageResetWarningDialog.classList.add("is-closing");
  window.setTimeout(() => {
    usageResetWarningDialog.hidden = true;
    usageResetWarningDialog.classList.remove("is-closing");
    unlockBodyScroll();
    usageResetButton?.focus({ preventScroll: true });
  }, 160);
};

const confirmUsageResetWarningDialog = () => {
  resetBrowserUsageLimits();
  closeUsageResetWarningDialog();
};

const getBrowserUsageActiveElapsed = (windowStart) =>
  browserUsageActiveStartedAt > 0
    ? Math.max(0, Date.now() - Math.max(browserUsageActiveStartedAt, windowStart))
    : 0;

const getCurrentBrowserUsageMs = () => {
  refreshBrowserUsageWindow();
  return browserUsageBaseMs + getBrowserUsageActiveElapsed(browserUsageWindowStart);
};

const getCurrentWeeklyUsageMs = () => {
  refreshBrowserUsageWeeklyWindow();
  return browserUsageWeeklyBaseMs + getBrowserUsageActiveElapsed(browserUsageWeeklyWindowStart);
};

const getCurrentMonthlyUsageMs = () => {
  refreshBrowserUsageMonthlyWindow();
  return browserUsageMonthlyBaseMs + getBrowserUsageActiveElapsed(browserUsageMonthlyWindowStart);
};

const persistBrowserUsage = () => {
  refreshBrowserUsageWindow();
  refreshBrowserUsageWeeklyWindow();
  refreshBrowserUsageMonthlyWindow();
  browserUsageBaseMs = Math.min(getCurrentBrowserUsageMs(), browserUsageLimitMs);
  browserUsageWeeklyBaseMs = Math.min(getCurrentWeeklyUsageMs(), browserUsageWeeklyLimitMs);
  browserUsageMonthlyBaseMs = Math.min(getCurrentMonthlyUsageMs(), browserUsageMonthlyLimitMs);
  localStorage.setItem("profile-browser-usage-window-start-ms", String(browserUsageWindowStart));
  localStorage.setItem("profile-browser-usage-used-ms", String(browserUsageBaseMs));
  localStorage.setItem("profile-browser-usage-week-start-ms", String(browserUsageWeeklyWindowStart));
  localStorage.setItem("profile-browser-usage-week-used-ms", String(browserUsageWeeklyBaseMs));
  localStorage.setItem("profile-browser-usage-month-start-ms", String(browserUsageMonthlyWindowStart));
  localStorage.setItem("profile-browser-usage-month-used-ms", String(browserUsageMonthlyBaseMs));
  localStorage.removeItem("profile-browser-usage-total-ms");
  browserUsageActiveStartedAt = document.visibilityState === "visible" ? Date.now() : 0;
};

const updateBrowserUsage = () => {
  refreshBrowserUsageWindow();
  refreshBrowserUsageWeeklyWindow();
  refreshBrowserUsageMonthlyWindow();

  const totalMs = Math.min(getCurrentBrowserUsageMs(), browserUsageLimitMs);
  const weeklyMs = Math.min(getCurrentWeeklyUsageMs(), browserUsageWeeklyLimitMs);
  const monthlyMs = Math.min(getCurrentMonthlyUsageMs(), browserUsageMonthlyLimitMs);
  const dailyRemainingRatio = Math.max(1 - totalMs / browserUsageLimitMs, 0);
  const weeklyRemainingRatio = Math.max(1 - weeklyMs / browserUsageWeeklyLimitMs, 0);
  const monthlyRemainingRatio = Math.max(1 - monthlyMs / browserUsageMonthlyLimitMs, 0);
  const dailyRemainingPercent = Math.ceil(dailyRemainingRatio * 100);
  const weeklyRemainingPercent = Math.ceil(weeklyRemainingRatio * 100);
  const monthlyRemainingPercent = Math.ceil(monthlyRemainingRatio * 100);
  const hasReachedLimit =
    totalMs >= browserUsageLimitMs ||
    weeklyMs >= browserUsageWeeklyLimitMs ||
    monthlyMs >= browserUsageMonthlyLimitMs;

  setUsageLimitNoticeVisible(hasReachedLimit);
  updateUsageResetControl();

  if (
    !browserUsageDailyRemaining &&
    !browserUsageWeeklyRemaining &&
    !browserUsageMonthlyRemaining
  ) return;

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
  if (browserUsageMonthlyReset) browserUsageMonthlyReset.textContent = formatUsageResetDate(browserUsageMonthlyWindowStart + browserUsageMonthMs);
  if (browserUsageMonthlyRemaining) {
    browserUsageMonthlyRemaining.textContent = translate("usage.remainingPercent").replace("{percent}", String(monthlyRemainingPercent));
  }
  if (browserUsageMonthlyBar) browserUsageMonthlyBar.style.transform = `scaleX(${monthlyRemainingRatio})`;
  if (hasReachedLimit && !browserUsageRedirected) {
    browserUsageRedirected = true;
    persistBrowserUsage();
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
  pendingSubscribeUrl = button.dataset.subscribeUrl || "";
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
  window.matchMedia?.("(max-width: 760px)").matches;

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
    event.defaultPrevented ||
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
    if (!openSettingsDialog()) window.location.href = "/settings";
  }
};

const addRipple = (event) => {
  if (event.button !== 0) return;

  const target = event.currentTarget;
  if (target.closest?.(".settings-modal")) return;

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
  const title = document.title || "First PrizeGames";

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
  if (document.body.classList.contains("official-home-body")) {
    setMobileMenuOpen(false);
    return;
  }

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
    behavior: "smooth",
  });
};

const goToActionUrl = (button) => {
  const targetUrl = button.dataset.goUrl;
  if (!targetUrl) return;

  if (targetUrl.startsWith("#")) {
    if (button.dataset.homeOpen) selectHomeTab(button.dataset.homeOpen);
    document.querySelector(targetUrl)?.scrollIntoView({
      behavior: "smooth",
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
createUsageResetWarningDialog();
createWelcomeDialog();
createMobileQuickActions();
setupCookieNotice();
setLanguage(currentLanguagePreference);
setupWelcomeDialog();
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
setupContextMenuModeDialog();
setupCookieSettingsDialog();
setupUserProfileDialog();
setupToggleRightTrack();
setupBrandLogo();
setKidMode(localStorage.getItem("profile-setting-kid-mode") || "off");
setCurrency(localStorage.getItem("profile-currency") || (currentLanguage === "ko" ? "krw" : "usd"));
updateStorageEstimate();
updateBrowserUsage();
const browserUsageIntervalId = window.setInterval(() => {
  if (document.visibilityState !== "visible") return;
  updateBrowserUsage();
  persistBrowserUsage();
}, 1000);

themeChoices.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.themeChoice);
    showCopyToast("settings.saved");
    setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  });
});

languageChoices.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageChoice);
    showCopyToast("settings.saved");
    setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
  });
});

themeTrigger?.addEventListener("click", () => {
  setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
  setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, !themeSelect?.classList.contains("is-open"));
});

languageTrigger?.addEventListener("click", () => {
  setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  setSettingSelectOpen(
    languageSelect,
    languageTrigger,
    languageMenu,
    !languageSelect?.classList.contains("is-open"),
  );
});

currencyChoices.forEach((button) => {
  button.addEventListener("click", () => setCurrency(button.dataset.currencyChoice));
});

homeTabs.forEach((tab) => {
  tab.addEventListener("click", () => selectHomeTab(tab.dataset.homeTab));
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
  closeKeyboardShortcutsDialog();
  closeUsageLearnDialog();
});

mobileMenu?.querySelectorAll("a, .nav-search-button, .nav-flyout-panel a").forEach((link) => {
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
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    persistBrowserUsage();
    browserUsageActiveStartedAt = 0;
    return;
  }

  browserUsageActiveStartedAt = Date.now();
  updateBrowserUsage();
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
usageResetButton?.addEventListener("click", showUsageResetWarningDialog);
usageResetWarningCloseButtons.forEach((button) => {
  button.addEventListener("click", closeUsageResetWarningDialog);
});
usageResetWarningConfirm?.addEventListener("click", confirmUsageResetWarningDialog);
usageResetWarningDialog?.addEventListener("click", (event) => {
  if (event.button === 0 && event.target === usageResetWarningDialog) closeUsageResetWarningDialog();
});
window.__profileUsageMainReady = true;
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
window.__fpgFullContextMenuReady = true;

document.addEventListener("click", (event) => {
  if (!contextMenu?.contains(event.target)) closeContextMenu();
  if (!themeSelect?.contains(event.target)) {
    setSettingSelectOpen(themeSelect, themeTrigger, themeMenu, false);
  }
  if (!languageSelect?.contains(event.target)) {
    setSettingSelectOpen(languageSelect, languageTrigger, languageMenu, false);
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
    closeSettingsDialog();
    closeSiteSearchDialog();
    closeShareDialog();
    closeQrDialog();
    closeSourceDialog();
    closePrintDialog();
    closeClipboardDialog();
    closeClipboardWarningDialog();
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

const setupSettingsControlRecovery = () => {
  if (!document.body.classList.contains("settings-body")) return;

  const closeSettingMenus = (except = null) => {
    [
      [themeSelect, themeTrigger, themeMenu],
      [languageSelect, languageTrigger, languageMenu],
    ].forEach(([select, trigger, menu]) => {
      if (select !== except) setSettingSelectOpen(select, trigger, menu, false);
    });
  };

  const toggleSelect = (select, trigger, menu) => {
    const isOpen = Boolean(select?.classList.contains("is-open"));
    closeSettingMenus(select);
    setSettingSelectOpen(select, trigger, menu, !isOpen);
  };

  document.addEventListener(
    "click",
    async (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const toggle = target.closest("[data-toggle-key]");
      if (toggle instanceof HTMLButtonElement && document.body.contains(toggle)) {
        event.preventDefault();
        event.stopImmediatePropagation();

        let nextValue = !toggle.classList.contains("is-on");

        localStorage.setItem(`profile-setting-${toggle.dataset.toggleKey}`, String(nextValue));
        if (toggle.dataset.toggleKey === "profile-public") {
          localStorage.setItem(USER_PROFILE_VISIBILITY_KEY, String(nextValue));
          syncUserProfileUI();
        }
        updateSettingToggle(toggle, nextValue);
        return;
      }

      if (target.closest("[data-theme-trigger]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        toggleSelect(themeSelect, themeTrigger, themeMenu);
        return;
      }

      if (target.closest("[data-language-trigger]")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        toggleSelect(languageSelect, languageTrigger, languageMenu);
        return;
      }

      const themeChoice = target.closest("[data-theme-choice]");
      if (themeChoice instanceof HTMLButtonElement) {
        event.preventDefault();
        event.stopImmediatePropagation();
        setTheme(themeChoice.dataset.themeChoice);
        showCopyToast("settings.saved");
        closeSettingMenus();
        return;
      }

      const languageChoice = target.closest("[data-language-choice]");
      if (languageChoice instanceof HTMLButtonElement) {
        event.preventDefault();
        event.stopImmediatePropagation();
        setLanguage(languageChoice.dataset.languageChoice);
        showCopyToast("settings.saved");
        closeSettingMenus();
        return;
      }

      if (!target.closest(".setting-select")) closeSettingMenus();
    },
    true,
  );
};

const setupSettingsModalTabs = () => {
  const tabs = [...document.querySelectorAll("[data-settings-modal-tab]")];
  const panels = [...document.querySelectorAll("[data-settings-modal-panel]")];
  if (!tabs.length || !panels.length) return;

  const selectPanel = (panelName) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.settingsModalTab === panelName;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.settingsModalPanel === panelName;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  tabs.forEach((tab) => {
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", String(tab.classList.contains("is-active")));
    tab.addEventListener("click", () => selectPanel(tab.dataset.settingsModalTab));
  });

  panels.forEach((panel) => panel.setAttribute("role", "tabpanel"));
};

setupSettingsModalTabs();
setupSettingsControlRecovery();

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
