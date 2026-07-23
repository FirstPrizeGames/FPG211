(() => {
  if (window.__profileUsageReady) return;

  const excludedUsagePaths = new Set([
    "/404",
    "/404.html",
    "/500",
    "/offline",
    "/maintenance",
    "/coming-soon",
  ]);
  const currentUsagePath = window.location.pathname.replace(/\/index\.html$/i, "").replace(/\/+$/, "") || "/";
  const usageIsExcluded =
    document.documentElement.hasAttribute("data-usage-excluded") || excludedUsagePaths.has(currentUsagePath);

  if (usageIsExcluded) {
    window.__profileUsageReady = true;
    document.documentElement.dataset.usageTracking = "excluded";
    return;
  }

  const isUsagePage = Boolean(document.querySelector(".usage-page"));
  const dailyReset = document.querySelector("[data-browser-daily-reset]");
  const dailyRemaining = document.querySelector("[data-browser-daily-remaining]");
  const dailyBar = document.querySelector("[data-browser-daily-bar]");
  const weeklyReset = document.querySelector("[data-browser-weekly-reset]");
  const weeklyRemaining = document.querySelector("[data-browser-weekly-remaining]");
  const weeklyBar = document.querySelector("[data-browser-weekly-bar]");
  const monthlyReset = document.querySelector("[data-browser-monthly-reset]");
  const monthlyRemaining = document.querySelector("[data-browser-monthly-remaining]");
  const monthlyBar = document.querySelector("[data-browser-monthly-bar]");
  const resetButton = document.querySelector("[data-usage-reset-button]");
  const resetStatus = document.querySelector("[data-usage-reset-status]");
  const authGate = document.querySelector("[data-usage-auth-gate]");
  const authContent = [...document.querySelectorAll("[data-usage-auth-content]")];
  const learnOpen = document.querySelector("[data-usage-learn-open]");
  const learnDialog = document.querySelector("[data-usage-learn-dialog]");
  const learnCloseButtons = [...document.querySelectorAll("[data-usage-learn-close]")];

  const hourMs = 60 * 60 * 1000;
  const dailyLimitMs = 5 * hourMs;
  const weekMs = 7 * 24 * hourMs;
  const weeklyLimitMs = 7 * dailyLimitMs;
  const monthMs = 30 * 24 * hourMs;
  const monthlyLimitMs = 30 * dailyLimitMs;
  const resetLimit = 2;
  const accountingVersion = "signed-in-visible-v2";
  const authStartedKey = "profile-browser-usage-auth-started";
  const keys = {
    version: "profile-browser-usage-accounting-version",
    dailyStart: "profile-browser-usage-window-start-ms",
    dailyUsed: "profile-browser-usage-used-ms",
    legacyUsed: "profile-browser-usage-total-ms",
    weeklyStart: "profile-browser-usage-week-start-ms",
    weeklyUsed: "profile-browser-usage-week-used-ms",
    monthlyStart: "profile-browser-usage-month-start-ms",
    monthlyUsed: "profile-browser-usage-month-used-ms",
    resetStart: "profile-browser-usage-reset-week-start-ms",
    resetCount: "profile-browser-usage-reset-week-count",
  };

  const t = (key) => window.profileI18n?.translate?.(key) || key;
  const language = () => window.profileI18n?.getLanguage?.() || document.documentElement.lang || "en";
  const readNumber = (key, fallback) => {
    const value = Number.parseInt(localStorage.getItem(key) || "", 10);
    return Number.isFinite(value) && value >= 0 ? value : fallback;
  };
  const writeNumber = (key, value) => localStorage.setItem(key, String(value));
  const isAuthenticated = () =>
    document.documentElement.dataset.authState === "signed-in" && Boolean(window.profileAuthUser);

  const resetStoredAccounting = (now) => {
    writeNumber(keys.dailyStart, now);
    writeNumber(keys.dailyUsed, 0);
    writeNumber(keys.weeklyStart, now);
    writeNumber(keys.weeklyUsed, 0);
    writeNumber(keys.monthlyStart, now);
    writeNumber(keys.monthlyUsed, 0);
    writeNumber(keys.resetStart, now);
    writeNumber(keys.resetCount, 0);
    localStorage.removeItem(keys.legacyUsed);
    localStorage.removeItem(authStartedKey);
    localStorage.setItem(keys.version, accountingVersion);
  };

  const startedAt = Date.now();
  if (localStorage.getItem(keys.version) !== accountingVersion) resetStoredAccounting(startedAt);

  let activeStartedAt = 0;
  let dailyStart = readNumber(keys.dailyStart, startedAt);
  let dailyUsed = readNumber(keys.dailyUsed, readNumber(keys.legacyUsed, 0));
  let weeklyStart = readNumber(keys.weeklyStart, startedAt);
  let weeklyUsed = readNumber(keys.weeklyUsed, 0);
  let monthlyStart = readNumber(keys.monthlyStart, startedAt);
  let monthlyUsed = readNumber(keys.monthlyUsed, 0);
  let resetStart = readNumber(keys.resetStart, 0);
  let resetCount = readNumber(keys.resetCount, 0);
  let wasAuthenticated = false;
  let limitNotice = null;
  let resetDialog = null;
  let resetCloseButtons = [];
  let resetConfirm = null;

  const normalizeState = () => {
    const now = Date.now();
    if (!Number.isFinite(dailyStart) || dailyStart <= 0) dailyStart = now;
    if (!Number.isFinite(dailyUsed) || dailyUsed < 0) dailyUsed = 0;
    if (!Number.isFinite(weeklyStart) || weeklyStart <= 0) weeklyStart = now;
    if (!Number.isFinite(weeklyUsed) || weeklyUsed < 0) weeklyUsed = 0;
    if (!Number.isFinite(monthlyStart) || monthlyStart <= 0) monthlyStart = now;
    if (!Number.isFinite(monthlyUsed) || monthlyUsed < 0) monthlyUsed = 0;
    if (!Number.isFinite(resetStart) || resetStart < 0) resetStart = 0;
    if (!Number.isFinite(resetCount) || resetCount < 0) resetCount = 0;
    writeNumber(keys.dailyStart, dailyStart);
    writeNumber(keys.dailyUsed, dailyUsed);
    writeNumber(keys.weeklyStart, weeklyStart);
    writeNumber(keys.weeklyUsed, weeklyUsed);
    writeNumber(keys.monthlyStart, monthlyStart);
    writeNumber(keys.monthlyUsed, monthlyUsed);
    writeNumber(keys.resetStart, resetStart);
    writeNumber(keys.resetCount, resetCount);
    localStorage.removeItem(keys.legacyUsed);
  };

  normalizeState();

  const initializeForFirstAuthentication = () => {
    if (localStorage.getItem(authStartedKey) === "true") {
      if (resetStart <= 0) {
        resetStart = Date.now();
        resetCount = 0;
        writeNumber(keys.resetStart, resetStart);
        writeNumber(keys.resetCount, resetCount);
      }
      return;
    }

    const now = Date.now();
    dailyStart = now;
    dailyUsed = 0;
    weeklyStart = now;
    weeklyUsed = 0;
    monthlyStart = now;
    monthlyUsed = 0;
    resetStart = now;
    resetCount = 0;
    writeNumber(keys.dailyStart, now);
    writeNumber(keys.dailyUsed, 0);
    writeNumber(keys.weeklyStart, now);
    writeNumber(keys.weeklyUsed, 0);
    writeNumber(keys.monthlyStart, now);
    writeNumber(keys.monthlyUsed, 0);
    writeNumber(keys.resetStart, now);
    writeNumber(keys.resetCount, 0);
    localStorage.setItem(authStartedKey, "true");
    localStorage.removeItem(keys.legacyUsed);
  };

  const formatDateValue = (timestamp, includeYear = false) =>
    new Intl.DateTimeFormat(language() === "ko" ? "ko-KR" : "en-US", {
      ...(includeYear ? { year: "numeric" } : {}),
      month: "long",
      day: "numeric",
    }).format(new Date(timestamp));

  const formatResetTime = (timestamp) => {
    const value = new Intl.DateTimeFormat(language() === "ko" ? "ko-KR" : "en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date(timestamp));
    return t("usage.resetAt").replace("{time}", value);
  };

  const formatResetDate = (timestamp) =>
    t("usage.resetOn").replace("{date}", formatDateValue(timestamp));

  const syncDialogLock = () => {
    const resetOpen = resetDialog && !resetDialog.hidden;
    const learnOpenState = learnDialog && !learnDialog.hidden;
    document.body.classList.toggle("usage-dialog-open", Boolean(resetOpen || learnOpenState));
  };

  const getLimitNotice = () => {
    if (limitNotice) return limitNotice;
    limitNotice = document.querySelector("[data-usage-limit-notice]");
    if (limitNotice) return limitNotice;

    limitNotice = document.createElement("aside");
    limitNotice.className = "usage-limit-notice";
    limitNotice.dataset.usageLimitNotice = "";
    limitNotice.hidden = true;
    limitNotice.setAttribute("role", "alert");
    limitNotice.setAttribute("aria-live", "assertive");
    limitNotice.innerHTML = `
      <strong data-i18n="usage.limitNoticeTitle">${t("usage.limitNoticeTitle")}</strong>
      <span data-i18n="usage.limitNoticeBody">${t("usage.limitNoticeBody")}</span>
      <a href="/Pricing" data-i18n="usage.limitNoticeButton">${t("usage.limitNoticeButton")}</a>
    `;
    document.body.appendChild(limitNotice);
    return limitNotice;
  };

  const setLimitNoticeVisible = (visible) => {
    if (!visible && !limitNotice) return;
    const notice = getLimitNotice();
    notice.hidden = !visible;
    notice.classList.toggle("is-visible", visible);
  };

  const refreshWindows = () => {
    const now = Date.now();
    if (now - dailyStart >= dailyLimitMs) {
      dailyStart = now;
      dailyUsed = 0;
      writeNumber(keys.dailyStart, dailyStart);
      writeNumber(keys.dailyUsed, 0);
      setLimitNoticeVisible(false);
    }
    if (now - weeklyStart >= weekMs) {
      weeklyStart = now;
      weeklyUsed = 0;
      writeNumber(keys.weeklyStart, weeklyStart);
      writeNumber(keys.weeklyUsed, 0);
    }
    if (now - monthlyStart >= monthMs) {
      monthlyStart = now;
      monthlyUsed = 0;
      writeNumber(keys.monthlyStart, monthlyStart);
      writeNumber(keys.monthlyUsed, 0);
    }
    if (resetStart > 0 && now - resetStart >= weekMs) {
      resetStart = now;
      resetCount = 0;
      writeNumber(keys.resetStart, resetStart);
      writeNumber(keys.resetCount, 0);
    }
  };

  const activeElapsed = (windowStart) =>
    activeStartedAt > 0 ? Math.max(0, Date.now() - Math.max(activeStartedAt, windowStart)) : 0;
  const currentDaily = () => dailyUsed + activeElapsed(dailyStart);
  const currentWeekly = () => weeklyUsed + activeElapsed(weeklyStart);
  const currentMonthly = () => monthlyUsed + activeElapsed(monthlyStart);

  const persist = ({ restart = true } = {}) => {
    refreshWindows();
    dailyUsed = Math.min(currentDaily(), dailyLimitMs);
    weeklyUsed = Math.min(currentWeekly(), weeklyLimitMs);
    monthlyUsed = Math.min(currentMonthly(), monthlyLimitMs);
    writeNumber(keys.dailyStart, dailyStart);
    writeNumber(keys.dailyUsed, dailyUsed);
    writeNumber(keys.weeklyStart, weeklyStart);
    writeNumber(keys.weeklyUsed, weeklyUsed);
    writeNumber(keys.monthlyStart, monthlyStart);
    writeNumber(keys.monthlyUsed, monthlyUsed);
    localStorage.removeItem(keys.legacyUsed);
    activeStartedAt = restart && isAuthenticated() && document.visibilityState === "visible" ? Date.now() : 0;
  };

  const resetRemaining = () => {
    refreshWindows();
    return Math.max(resetLimit - resetCount, 0);
  };

  const updateResetControl = () => {
    if (!resetButton && !resetStatus) return;
    if (!isAuthenticated()) {
      if (resetButton) resetButton.disabled = true;
      if (resetStatus) resetStatus.textContent = t("usage.signInStatus");
      return;
    }

    const remaining = resetRemaining();
    if (resetButton) resetButton.disabled = remaining <= 0;
    if (resetStatus) {
      resetStatus.textContent =
        remaining > 0
          ? t("usage.resetStatus").replace("{count}", String(remaining))
          : t("usage.resetStatusEmpty").replace("{date}", formatDateValue(resetStart + weekMs, true));
    }
  };

  const updateRow = (reset, remaining, bar, start, used, limit, resetAt, formatter) => {
    const total = Math.min(used + activeElapsed(start), limit);
    const ratio = Math.max(1 - total / limit, 0);
    const percent = Math.ceil(ratio * 100);
    if (reset) reset.textContent = formatter(resetAt);
    if (remaining) remaining.textContent = t("usage.remainingPercent").replace("{percent}", String(percent));
    if (bar) bar.style.transform = `scaleX(${ratio})`;
    return total >= limit;
  };

  const update = () => {
    if (!isAuthenticated()) {
      setLimitNoticeVisible(false);
      updateResetControl();
      return;
    }

    refreshWindows();
    const dailyReached = updateRow(
      dailyReset,
      dailyRemaining,
      dailyBar,
      dailyStart,
      dailyUsed,
      dailyLimitMs,
      dailyStart + dailyLimitMs,
      formatResetTime,
    );
    const weeklyReached = updateRow(
      weeklyReset,
      weeklyRemaining,
      weeklyBar,
      weeklyStart,
      weeklyUsed,
      weeklyLimitMs,
      weeklyStart + weekMs,
      formatResetDate,
    );
    const monthlyReached = updateRow(
      monthlyReset,
      monthlyRemaining,
      monthlyBar,
      monthlyStart,
      monthlyUsed,
      monthlyLimitMs,
      monthlyStart + monthMs,
      formatResetDate,
    );
    setLimitNoticeVisible(dailyReached || weeklyReached || monthlyReached);
    updateResetControl();
  };

  const createResetDialog = () => {
    if (!isUsagePage) return null;
    resetDialog = document.querySelector("[data-usage-reset-warning]");
    if (!resetDialog) {
      resetDialog = document.createElement("div");
      resetDialog.className = "cache-dialog usage-reset-warning-dialog";
      resetDialog.dataset.usageResetWarning = "";
      resetDialog.hidden = true;
      resetDialog.innerHTML = `
        <div class="cache-dialog-panel usage-reset-warning-panel" role="dialog" aria-modal="true" aria-labelledby="usage-reset-warning-title">
          <button class="dialog-close-button" type="button" data-usage-reset-warning-close aria-label="${t("share.close")}">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
          <p class="eyebrow" data-i18n="usage.resetWarningEyebrow">${t("usage.resetWarningEyebrow")}</p>
          <h2 id="usage-reset-warning-title" data-i18n="usage.resetWarningTitle">${t("usage.resetWarningTitle")}</h2>
          <p data-i18n="usage.resetWarningBody">${t("usage.resetWarningBody")}</p>
          <div class="cache-warning-actions">
            <button class="button cache-cancel-button" type="button" data-usage-reset-warning-close data-i18n="usage.resetWarningCancel">${t("usage.resetWarningCancel")}</button>
            <button class="button cache-confirm-button usage-reset-confirm-button" type="button" data-usage-reset-warning-confirm data-i18n="usage.resetWarningConfirm">${t("usage.resetWarningConfirm")}</button>
          </div>
        </div>
      `;
      document.body.appendChild(resetDialog);
    }

    resetCloseButtons = [...resetDialog.querySelectorAll("[data-usage-reset-warning-close]")];
    resetConfirm = resetDialog.querySelector("[data-usage-reset-warning-confirm]");
    return resetDialog;
  };

  const closeResetDialog = () => {
    if (!resetDialog || resetDialog.hidden) return;
    resetDialog.classList.add("is-closing");
    window.setTimeout(() => {
      resetDialog.hidden = true;
      resetDialog.classList.remove("is-closing");
      syncDialogLock();
      resetButton?.focus({ preventScroll: true });
    }, 160);
  };

  const openResetDialog = () => {
    if (!isAuthenticated() || resetRemaining() <= 0) {
      updateResetControl();
      return;
    }
    if (!resetDialog) createResetDialog();
    if (!resetDialog) return;
    resetDialog.hidden = false;
    resetDialog.classList.remove("is-closing");
    syncDialogLock();
    window.setTimeout(() => resetConfirm?.focus({ preventScroll: true }), 30);
  };

  const resetLimits = () => {
    if (!isAuthenticated() || resetRemaining() <= 0) {
      updateResetControl();
      return;
    }
    const now = Date.now();
    if (resetStart <= 0) {
      resetStart = now;
      resetCount = 0;
    }
    dailyStart = now;
    dailyUsed = 0;
    weeklyStart = now;
    weeklyUsed = 0;
    monthlyStart = now;
    monthlyUsed = 0;
    resetCount = Math.min(resetCount + 1, resetLimit);
    writeNumber(keys.dailyStart, dailyStart);
    writeNumber(keys.dailyUsed, 0);
    writeNumber(keys.weeklyStart, weeklyStart);
    writeNumber(keys.weeklyUsed, 0);
    writeNumber(keys.monthlyStart, monthlyStart);
    writeNumber(keys.monthlyUsed, 0);
    writeNumber(keys.resetStart, resetStart);
    writeNumber(keys.resetCount, resetCount);
    localStorage.removeItem(keys.legacyUsed);
    activeStartedAt = document.visibilityState === "visible" ? now : 0;
    setLimitNoticeVisible(false);
    update();
    closeResetDialog();
  };

  const openLearnDialog = () => {
    if (!learnDialog) return;
    learnDialog.hidden = false;
    learnDialog.classList.remove("is-closing");
    syncDialogLock();
  };

  const closeLearnDialog = () => {
    if (!learnDialog || learnDialog.hidden) return;
    learnDialog.classList.add("is-closing");
    window.setTimeout(() => {
      learnDialog.hidden = true;
      learnDialog.classList.remove("is-closing");
      syncDialogLock();
      learnOpen?.focus({ preventScroll: true });
    }, 160);
  };

  const syncAuthentication = () => {
    const authState = document.documentElement.dataset.authState || "loading";
    const signedIn = isAuthenticated();
    const loading = authState === "loading";
    authContent.forEach((element) => {
      element.hidden = !signedIn;
    });
    if (authGate) authGate.hidden = signedIn || loading;

    if (wasAuthenticated && !signedIn && activeStartedAt > 0) persist({ restart: false });
    wasAuthenticated = signedIn;
    if (signedIn) {
      initializeForFirstAuthentication();
      if (document.visibilityState === "visible" && activeStartedAt <= 0) activeStartedAt = Date.now();
    } else {
      activeStartedAt = 0;
      setLimitNoticeVisible(false);
      closeResetDialog();
    }
    update();
  };

  createResetDialog();
  resetButton?.addEventListener("click", openResetDialog);
  resetCloseButtons.forEach((button) => button.addEventListener("click", closeResetDialog));
  resetConfirm?.addEventListener("click", resetLimits);
  resetDialog?.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === resetDialog) closeResetDialog();
  });
  learnOpen?.addEventListener("click", openLearnDialog);
  learnCloseButtons.forEach((button) => button.addEventListener("click", closeLearnDialog));
  learnDialog?.addEventListener("click", (event) => {
    if (event.button === 0 && event.target === learnDialog) closeLearnDialog();
  });

  window.addEventListener("profile-auth-change", syncAuthentication);
  window.addEventListener("profile-language-change", update);
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeResetDialog();
    closeLearnDialog();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      if (activeStartedAt > 0) persist({ restart: false });
      activeStartedAt = 0;
      return;
    }
    activeStartedAt = isAuthenticated() ? Date.now() : 0;
    update();
  });
  window.addEventListener("pagehide", () => {
    if (activeStartedAt > 0) persist({ restart: false });
    window.clearInterval(intervalId);
  });

  const intervalId = window.setInterval(() => {
    if (!isAuthenticated() || document.visibilityState !== "visible") return;
    update();
    persist();
  }, 1000);

  window.__profileUsageReady = true;
  syncAuthentication();
})();
