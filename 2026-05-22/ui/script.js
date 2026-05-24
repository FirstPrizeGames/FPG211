const navLinks = [...document.querySelectorAll(".nav-links a")];
const themeChoices = [...document.querySelectorAll("[data-theme-choice]")];
const languageChoices = [...document.querySelectorAll("[data-language-choice]")];
const densityChoices = [...document.querySelectorAll("[data-density-choice]")];
const accentChoices = [...document.querySelectorAll("[data-accent-choice]")];
const accentSelect = document.querySelector("[data-accent-select]");
const accentTrigger = document.querySelector("[data-accent-trigger]");
const accentMenu = document.querySelector("[data-accent-menu]");
const accentPreview = document.querySelector("[data-accent-preview]");
const accentLabel = document.querySelector("[data-accent-label]");
const premiumNote = document.querySelector("[data-premium-note]");
const clearCacheButton = document.querySelector("[data-clear-cache]");
const clearCacheNote = document.querySelector("[data-clear-cache-note]");
const shareLinkButton = document.querySelector("[data-share-link]");
const adblockBait = document.querySelector(".adblock-bait");
const adblockNotice = document.querySelector("[data-adblock-notice]");
const adblockDismiss = document.querySelector("[data-adblock-dismiss]");
const currencySwitch = document.querySelector("[data-currency-switch]");
const currencyChoices = [...document.querySelectorAll("[data-currency-choice]")];
const priceLabels = [...document.querySelectorAll("[data-price-plan]")];
const settingToggles = [...document.querySelectorAll("[data-toggle-key]")];
const infoTabs = [...document.querySelectorAll("[data-info-tab]")];
const infoPanels = [...document.querySelectorAll("[data-info-panel]")];
const loadingBar = document.querySelector(".loading-bar");
const scrollProgress = document.querySelector(".scroll-progress");
const highlightTargets = [
  ...document.querySelectorAll(
    ".nav-links a, .button, .contact-links a, .icon-button, .adblock-notice button, .settings-sidebar a, .currency-switch button, .theme-segment button, .language-segment button, .density-segment button, .accent-trigger, .accent-menu button, .info-tabs button, .toggle",
  ),
];
const sections = navLinks
  .filter((link) => link.getAttribute("href")?.startsWith("#"))
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const translations = {
  ko: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.pricing": "Pricing",
    "nav.bio": "Bio",
    "nav.settings": "Settings",
    "home.lead":
      "현장에서 빠른 판단과 침착한 대응으로 생명을 지키는 구급대원입니다.",
    "home.roleLabel": "Role",
    "home.roleValue": "구급대원",
    "home.focusLabel": "Focus",
    "home.focusValue": "Prehospital Care",
    "home.viewWork": "View Work",
    "home.aboutTitle": "가장 긴급한 순간에 차분하게 도착합니다.",
    "home.aboutBody":
      "응급 현장에서 환자의 상태를 빠르게 파악하고 필요한 처치를 연결하는 일을 하고 있습니다. 긴박한 순간일수록 기본에 충실한 판단, 팀과의 명확한 소통, 환자를 향한 존중을 중요하게 생각합니다.",
    "home.selectedWork": "Selected Work",
    "home.workTitle": "주요 역량",
    "home.workOneTitle": "응급환자 초기 평가",
    "home.workOneBody":
      "현장 도착 직후 환자의 의식, 호흡, 순환 상태를 빠르게 확인하고 우선순위를 판단합니다.",
    "home.workTwoTitle": "응급상황 대응",
    "home.workTwoBody":
      "심정지, 외상, 호흡곤란 등 주요 응급상황에서 절차에 따라 침착하게 처치와 이송을 지원합니다.",
    "home.workThreeTitle": "현장 소통과 안전 확인",
    "home.workThreeBody":
      "환자, 보호자, 동료와 필요한 정보를 명확히 공유하고 안전한 현장 운영을 돕습니다.",
    "home.contactTitle": "새로운 협업을 기다리고 있습니다.",
    "settings.title": "프로필 설정",
    "settings.lead":
      "공개 정보, 알림, 표시 방식을 차분하게 관리할 수 있는 개인 프로필 설정 화면입니다.",
    "settings.profileTab": "Profile",
    "settings.privacyTab": "Privacy",
    "settings.displayTab": "Display",
    "settings.languageTab": "Language",
    "settings.performanceTab": "Performance",
    "settings.storageTab": "Storage",
    "settings.accentTab": "Accent",
    "settings.layoutTab": "Layout",
    "settings.profileTitle": "프로필 공개",
    "settings.profileBody": "검색과 공유 링크에서 이름, 역할, 소개 문구를 표시합니다.",
    "settings.contactTitle": "연락처 표시",
    "settings.contactBody": "메일 주소를 프로필 하단에 노출하고 협업 문의를 받을 수 있게 합니다.",
    "settings.profileOn": "프로필 공개 켜짐",
    "settings.profileOff": "프로필 공개 꺼짐",
    "settings.contactOn": "연락처 표시 켜짐",
    "settings.contactOff": "연락처 표시 꺼짐",
    "settings.fastRenderOn": "빠른 렌더링 켜짐",
    "settings.fastRenderOff": "빠른 렌더링 꺼짐",
    "settings.themeTitle": "테마 모드",
    "settings.themeBody": "프로필 화면의 밝기를 라이트, 다크, 밝기 끄기 모드로 선택합니다.",
    "settings.lightsOff": "밝기 끄기",
    "settings.languageTitle": "언어",
    "settings.languageBody": "프로필과 설정 화면에 표시되는 언어를 선택합니다.",
    "settings.fastRenderTitle": "빠른 렌더링",
    "settings.fastRenderBody": "블러, 그림자, 애니메이션을 줄여 화면을 더 가볍게 표시합니다.",
    "settings.clearCacheTitle": "브라우저 캐시 정리",
    "settings.clearCacheBody": "이 사이트에 저장된 테마, 언어, 표시 설정을 삭제하고 기본값으로 되돌립니다.",
    "settings.clearCacheButton": "캐시 정리",
    "settings.clearCacheDone": "저장된 설정을 정리했습니다.",
    "settings.accentTitle": "강조 컬러",
    "settings.accentBody": "버튼, 진행 바, 포커스 표시 등에 사용할 포인트 컬러를 선택합니다.",
    "settings.accentNeutral": "Neutral",
    "settings.accentBlue": "Blue",
    "settings.accentGreen": "Green",
    "settings.accentRose": "Rose",
    "settings.accentProGold": "Pro Gold",
    "settings.accentTeamCyan": "Team Cyan",
    "settings.premiumLocked": "이 강조 컬러는 Patreon 후원 후 사용할 수 있습니다.",
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
      "© 2026 First PrizeGames. 모든 프로필 문구, 이미지, 구성 요소의 권리는 해당 소유자에게 있습니다.",
    "plans.free": "Free",
    "plans.freePrice": "₩0",
    "plans.pro": "Pro",
    "plans.proPrice": "₩29,000",
    "plans.team": "Team",
    "plans.teamPrice": "문의",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "프로필 활용 방식에 맞게 선택하세요.",
    "pricing.lead":
      "구급대원 경력 소개, 교육 이력 정리, 포트폴리오 확장까지 필요한 범위에 맞춰 구성했습니다.",
    "pricing.freeBody": "구급대원으로서의 기본 소개와 연락 정보를 담기 좋은 구성입니다.",
    "pricing.freeOne": "핵심 소개와 직무 요약",
    "pricing.freeTwo": "주요 역량 3개 표시",
    "pricing.freeThree": "테마, 언어, 접근성 설정",
    "pricing.freeFour": "기본 연락 링크",
    "pricing.chooseFree": "Free로 시작",
    "pricing.proBody": "현장 경험, 교육 이수, 자격 사항을 더 자세히 보여주기 위한 구성입니다.",
    "pricing.proOne": "현장 대응 경험 강조",
    "pricing.proTwo": "교육/자격 정보 섹션",
    "pricing.proThree": "Pro 전용 강조 컬러",
    "pricing.proFour": "추천서와 활동 이력 확장",
    "pricing.choosePro": "Pro 선택",
    "pricing.teamBody": "구급대, 교육팀, 응급의료 관련 조직 소개에 맞춘 확장 구성입니다.",
    "pricing.teamOne": "팀/기관 소개 페이지",
    "pricing.teamTwo": "구성원 프로필 정리",
    "pricing.teamThree": "교육 및 활동 정보 구조화",
    "pricing.teamFour": "Team 전용 컬러와 공유 문의 흐름",
    "pricing.contactSales": "문의하기",
    "pricing.compareEyebrow": "Compare",
    "pricing.compareTitle": "기능 비교",
    "pricing.compareFeature": "기능",
    "pricing.compareProfile": "개인 프로필 구성",
    "pricing.compareExperience": "현장 경험 정리",
    "pricing.compareCredentials": "교육/자격 섹션",
    "pricing.compareAccent": "프리미엄 강조 컬러",
    "pricing.compareTeam": "팀/기관 소개",
    "pricing.compareBasic": "기본",
    "pricing.compareAdvanced": "확장",
    "pricing.compareOrg": "조직형",
    "pricing.compareUnlimited": "무제한",
    "pricing.compareYes": "포함",
    "pricing.compareNo": "없음",
    "pricing.faqEyebrow": "FAQ",
    "pricing.faqTitle": "자주 묻는 질문",
    "pricing.faqOneQuestion": "결제는 어디에서 진행되나요?",
    "pricing.faqOneAnswer": "Pro와 Team 플랜은 Patreon checkout 링크를 통해 진행됩니다.",
    "pricing.faqTwoQuestion": "결제하면 프리미엄 컬러가 자동으로 풀리나요?",
    "pricing.faqTwoAnswer":
      "현재는 링크 연결 방식이라 자동 잠금 해제는 아직 지원하지 않습니다. 나중에 Patreon 연동을 추가하면 자동으로 연결할 수 있습니다.",
    "pricing.faqThreeQuestion": "달러와 한화 표시는 실제 환율인가요?",
    "pricing.faqThreeAnswer":
      "현재는 안내용 고정 가격입니다. 실제 결제 금액은 Patreon checkout 화면을 기준으로 확인해야 합니다.",
    "pricing.faqFourQuestion": "Team 플랜은 누구에게 적합한가요?",
    "pricing.faqFourAnswer":
      "구급대, 교육팀, 응급의료 관련 조직처럼 여러 사람의 프로필과 활동 정보를 함께 보여주려는 경우에 적합합니다.",
    "error.eyebrow": "404",
    "error.code": "404_NOT_FOUND",
    "error.title": "페이지를 찾을 수 없습니다.",
    "error.body": "요청한 주소가 변경되었거나 아직 준비되지 않은 페이지일 수 있습니다.",
    "error.home": "홈으로 이동",
    "error.settings": "설정 열기",
    "share.copy": "페이지 링크 복사",
    "share.copied": "페이지 링크 복사됨",
    "adblock.message":
      "광고 차단기가 일부 사이트 기능을 제한할 수 있습니다. 문제가 보이면 이 사이트를 허용 목록에 추가해 주세요.",
    "adblock.dismiss": "닫기",
    "bio.eyebrow": "Bio",
    "bio.title": "응급 현장에 필요한 침착함을 믿습니다.",
    "bio.lead":
      "저는 환자의 가장 불안한 순간에 도착해 상황을 빠르게 읽고, 필요한 처치와 이송을 연결하는 구급대원입니다.",
    "bio.sectionOneTitle": "현장에서의 태도",
    "bio.sectionOneBody":
      "응급 상황에서는 빠른 판단만큼 차분한 태도가 중요하다고 생각합니다. 환자의 상태를 확인하고, 보호자와 동료에게 필요한 정보를 명확히 전달하며, 안전한 처치가 이어질 수 있도록 현장을 정리합니다.",
    "bio.sectionTwoTitle": "중요하게 생각하는 기준",
    "bio.sectionTwoBody":
      "기본에 충실한 평가, 팀과의 정확한 소통, 환자를 향한 존중을 기준으로 움직입니다. 긴박한 순간일수록 절차와 원칙을 놓치지 않는 것이 더 나은 결과로 이어진다고 믿습니다.",
    "bio.sectionThreeTitle": "앞으로의 방향",
    "bio.sectionThreeBody":
      "현장 경험을 바탕으로 더 나은 응급의료 대응과 교육, 기록 문화에 기여하고 싶습니다. 누군가에게 가장 힘든 순간을 조금 더 안전하게 지나가게 하는 사람이 되는 것이 목표입니다.",
    "bio.likesEyebrow": "Likes",
    "bio.likesTitle": "좋아하는 것들",
    "bio.likeOne": "게임 UI & UX 디자인, 게임 개발",
    "bio.likeTwo": "Roblox, Baldi's Basics 게임",
    "bio.likeThree": "환자 살리는 것을 목표로 함",
    "bio.likeFour": "BBQ 파티",
    "bio.likeFive": "더 많은",
  },
  en: {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.pricing": "Pricing",
    "nav.bio": "Bio",
    "nav.settings": "Settings",
    "home.lead":
      "An emergency responder who protects lives through quick judgment and calm action in the field.",
    "home.roleLabel": "Role",
    "home.roleValue": "Emergency Responder",
    "home.focusLabel": "Focus",
    "home.focusValue": "Prehospital Care",
    "home.viewWork": "View Work",
    "home.aboutTitle": "Arriving calmly when every second matters.",
    "home.aboutBody":
      "I assess patients quickly in emergency scenes and connect them to the care they need. In urgent moments, I value sound fundamentals, clear team communication, and respect for every patient.",
    "home.selectedWork": "Selected Work",
    "home.workTitle": "Core strengths",
    "home.workOneTitle": "Initial patient assessment",
    "home.workOneBody":
      "Quickly checks consciousness, breathing, circulation, and priority needs on arrival.",
    "home.workTwoTitle": "Emergency response",
    "home.workTwoBody":
      "Supports treatment and transport for cardiac arrest, trauma, respiratory distress, and other urgent cases.",
    "home.workThreeTitle": "Scene communication and safety",
    "home.workThreeBody":
      "Shares essential information with patients, guardians, and teammates while supporting safe scene operations.",
    "home.contactTitle": "Open to thoughtful new collaborations.",
    "settings.title": "Profile settings",
    "settings.lead":
      "Manage public information, notifications, display mode, and language in one calm profile settings screen.",
    "settings.profileTab": "Profile",
    "settings.privacyTab": "Privacy",
    "settings.displayTab": "Display",
    "settings.languageTab": "Language",
    "settings.performanceTab": "Performance",
    "settings.storageTab": "Storage",
    "settings.accentTab": "Accent",
    "settings.layoutTab": "Layout",
    "settings.profileTitle": "Public profile",
    "settings.profileBody":
      "Show your name, role, and introduction in search and shared links.",
    "settings.contactTitle": "Contact visibility",
    "settings.contactBody":
      "Show your email at the bottom of the profile so collaborators can reach you.",
    "settings.profileOn": "Public profile on",
    "settings.profileOff": "Public profile off",
    "settings.contactOn": "Contact visibility on",
    "settings.contactOff": "Contact visibility off",
    "settings.fastRenderOn": "Fast rendering on",
    "settings.fastRenderOff": "Fast rendering off",
    "settings.themeTitle": "Theme mode",
    "settings.themeBody": "Choose a light, dark, or lights-off appearance for the profile.",
    "settings.lightsOff": "Lights Off",
    "settings.languageTitle": "Language",
    "settings.languageBody": "Choose the language used across the profile and settings pages.",
    "settings.fastRenderTitle": "Fast rendering",
    "settings.fastRenderBody": "Reduces blur, shadows, and animation so the interface renders more lightly.",
    "settings.clearCacheTitle": "Clear browser cache",
    "settings.clearCacheBody":
      "Removes this site's saved theme, language, and display preferences and restores defaults.",
    "settings.clearCacheButton": "Clear cache",
    "settings.clearCacheDone": "Saved settings have been cleared.",
    "settings.accentTitle": "Accent color",
    "settings.accentBody": "Choose the point color used for buttons, progress bars, and focus states.",
    "settings.accentNeutral": "Neutral",
    "settings.accentBlue": "Blue",
    "settings.accentGreen": "Green",
    "settings.accentRose": "Rose",
    "settings.accentProGold": "Pro Gold",
    "settings.accentTeamCyan": "Team Cyan",
    "settings.premiumLocked": "This accent color is available after supporting on Patreon.",
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
      "© 2026 First PrizeGames. All profile copy, images, and interface components belong to their respective owners.",
    "plans.free": "Free",
    "plans.freePrice": "$0",
    "plans.pro": "Pro",
    "plans.proPrice": "$20",
    "plans.team": "Team",
    "plans.teamPrice": "Contact",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Choose the setup that fits your profile.",
    "pricing.lead":
      "Built for emergency responder career summaries, training records, and profile expansion.",
    "pricing.freeBody": "A focused setup for your essential responder profile and contact details.",
    "pricing.freeOne": "Core introduction and role summary",
    "pricing.freeTwo": "Three key strengths",
    "pricing.freeThree": "Theme, language, and accessibility settings",
    "pricing.freeFour": "Basic contact links",
    "pricing.chooseFree": "Start with Free",
    "pricing.proBody": "A fuller setup for field experience, training history, and certifications.",
    "pricing.proOne": "Highlighted response experience",
    "pricing.proTwo": "Training and certification sections",
    "pricing.proThree": "Pro-only accent color",
    "pricing.proFour": "Testimonials and activity history",
    "pricing.choosePro": "Choose Pro",
    "pricing.teamBody":
      "An expanded setup for emergency teams, training groups, and medical-response organizations.",
    "pricing.teamOne": "Team or organization page",
    "pricing.teamTwo": "Member profile structure",
    "pricing.teamThree": "Training and activity information architecture",
    "pricing.teamFour": "Team-only color and shared inquiry flow",
    "pricing.contactSales": "Contact",
    "pricing.compareEyebrow": "Compare",
    "pricing.compareTitle": "Feature comparison",
    "pricing.compareFeature": "Feature",
    "pricing.compareProfile": "Profile structure",
    "pricing.compareExperience": "Field experience entries",
    "pricing.compareCredentials": "Training and credentials",
    "pricing.compareAccent": "Premium accent color",
    "pricing.compareTeam": "Team or organization page",
    "pricing.compareBasic": "Basic",
    "pricing.compareAdvanced": "Expanded",
    "pricing.compareOrg": "Organization",
    "pricing.compareUnlimited": "Unlimited",
    "pricing.compareYes": "Included",
    "pricing.compareNo": "No",
    "pricing.faqEyebrow": "FAQ",
    "pricing.faqTitle": "Frequently asked questions",
    "pricing.faqOneQuestion": "Where does payment happen?",
    "pricing.faqOneAnswer": "The Pro and Team plans are handled through Patreon checkout links.",
    "pricing.faqTwoQuestion": "Will premium colors unlock automatically after payment?",
    "pricing.faqTwoAnswer":
      "Not yet. This site currently uses direct Patreon links. Automatic unlocks can be added later with a Patreon integration.",
    "pricing.faqThreeQuestion": "Are the USD and KRW prices live exchange rates?",
    "pricing.faqThreeAnswer":
      "No. They are fixed display prices. The final amount should be confirmed on the Patreon checkout page.",
    "pricing.faqFourQuestion": "Who is the Team plan for?",
    "pricing.faqFourAnswer":
      "It is designed for emergency teams, training groups, and medical-response organizations that need multiple profiles and shared activity information.",
    "error.eyebrow": "404",
    "error.code": "404_NOT_FOUND",
    "error.title": "Page not found.",
    "error.body": "The page may have moved, or it may not be ready yet.",
    "error.home": "Go home",
    "error.settings": "Open settings",
    "share.copy": "Copy page link",
    "share.copied": "Page link copied",
    "adblock.message":
      "An ad blocker may limit some site features. If something looks broken, please allow this site.",
    "adblock.dismiss": "Dismiss",
    "bio.eyebrow": "Bio",
    "bio.title": "I believe in calm action when every second matters.",
    "bio.lead":
      "I am an emergency responder who arrives during a patient's most uncertain moments, reads the scene quickly, and connects them to the care and transport they need.",
    "bio.sectionOneTitle": "How I work in the field",
    "bio.sectionOneBody":
      "In emergencies, calm presence matters as much as quick judgment. I assess the patient's condition, communicate clearly with guardians and teammates, and help keep the scene organized for safe care.",
    "bio.sectionTwoTitle": "Standards I value",
    "bio.sectionTwoBody":
      "I work from sound assessment, precise team communication, and respect for every patient. In urgent moments, staying close to procedure and fundamentals leads to better outcomes.",
    "bio.sectionThreeTitle": "Where I am heading",
    "bio.sectionThreeBody":
      "I want to use field experience to contribute to better emergency response, training, and documentation culture. My goal is to help people move through their hardest moments with more safety and clarity.",
    "bio.likesEyebrow": "Likes",
    "bio.likesTitle": "Things I like",
    "bio.likeOne": "Game UI & UX design, game development",
    "bio.likeTwo": "Roblox, Baldi's Basics",
    "bio.likeThree": "Aims to save the patient",
    "bio.likeFour": "BBQ Party",
    "bio.likeFive": "More",
  },
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("profile-theme");
  if (savedTheme === "dark" || savedTheme === "light" || savedTheme === "lights-off") {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("profile-language");
  return savedLanguage === "en" || savedLanguage === "ko" ? savedLanguage : "en";
};

let currentLanguage = getInitialLanguage();

const translate = (key) => translations[currentLanguage][key] || translations.ko[key] || key;

const prices = {
  krw: {
    free: "₩0",
    pro: "₩29,000",
    team: "문의",
  },
  usd: {
    free: "$0",
    pro: "$20",
    team: "Contact",
  },
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("profile-theme", theme);

  themeChoices.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.themeChoice === theme);
  });
};

const setLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language;
  localStorage.setItem("profile-language", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  languageChoices.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.languageChoice === language);
  });

  shareLinkButton?.setAttribute("aria-label", translate("share.copy"));

  setTheme(document.documentElement.dataset.theme || getInitialTheme());
  setAccent(document.documentElement.dataset.accent || "neutral");
  setCurrency(localStorage.getItem("profile-currency") || (language === "ko" ? "krw" : "usd"));
  settingToggles.forEach((button) => {
    updateSettingToggle(button, button.classList.contains("is-on"));
  });
};

const getToggleLabelKey = (key, isOn) => {
  const labels = {
    "profile-public": isOn ? "settings.profileOn" : "settings.profileOff",
    "contact-visible": isOn ? "settings.contactOn" : "settings.contactOff",
    "fast-render": isOn ? "settings.fastRenderOn" : "settings.fastRenderOff",
  };

  return labels[key];
};

const updateSettingToggle = (button, isOn) => {
  button.classList.toggle("is-on", isOn);
  button.setAttribute("aria-pressed", String(isOn));

  if (button.dataset.toggleKey === "fast-render") {
    document.documentElement.dataset.fastRender = isOn ? "true" : "false";
  }

  const labelKey = getToggleLabelKey(button.dataset.toggleKey, isOn);
  if (labelKey) button.setAttribute("aria-label", translate(labelKey));
};

const setupSettingToggles = () => {
  settingToggles.forEach((button) => {
    const storageKey = `profile-setting-${button.dataset.toggleKey}`;
    const savedValue = localStorage.getItem(storageKey);
    const isOn = savedValue === null ? button.classList.contains("is-on") : savedValue === "true";

    updateSettingToggle(button, isOn);

    button.addEventListener("click", () => {
      const nextValue = !button.classList.contains("is-on");
      localStorage.setItem(storageKey, String(nextValue));
      if (button.dataset.toggleKey === "fast-render") {
        document.documentElement.dataset.fastRender = nextValue ? "true" : "false";
      }
      updateSettingToggle(button, nextValue);
    });
  });
};

const setDensity = (density) => {
  localStorage.setItem("profile-density", density);

  densityChoices.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.densityChoice === density);
  });
};

const setCurrency = (currency) => {
  localStorage.setItem("profile-currency", currency);
  currencySwitch?.setAttribute("data-currency", currency);

  currencyChoices.forEach((button) => {
    const isActive = button.dataset.currencyChoice === currency;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  priceLabels.forEach((label) => {
    label.textContent = prices[currency]?.[label.dataset.pricePlan] || label.textContent;
  });
};

const setAccent = (accent) => {
  const accentLabelKeys = {
    neutral: "settings.accentNeutral",
    blue: "settings.accentBlue",
    green: "settings.accentGreen",
    rose: "settings.accentRose",
    "pro-gold": "settings.accentProGold",
    "team-cyan": "settings.accentTeamCyan",
  };
  const selectedButton = accentChoices.find((button) => button.dataset.accentChoice === accent);
  const resolvedAccent = selectedButton?.dataset.premiumPlan ? "neutral" : accent;

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

const clearSiteCache = () => {
  [
    "profile-theme",
    "profile-language",
    "profile-density",
    "profile-currency",
    "profile-accent",
    "profile-fast-render",
    "profile-setting-profile-public",
    "profile-setting-contact-visible",
    "profile-setting-fast-render",
  ].forEach((key) => localStorage.removeItem(key));

  document.documentElement.dataset.theme = "light";
  document.documentElement.dataset.accent = "neutral";
  document.documentElement.dataset.fastRender = "false";
  setLanguage("en");
  setDensity("comfortable");
  setCurrency("usd");
  setAccent("neutral");

  settingToggles.forEach((button) => {
    const defaultOn = button.dataset.toggleKey !== "fast-render";
    updateSettingToggle(button, defaultOn);
  });

  if (!clearCacheNote) return;
  clearCacheNote.hidden = false;
  window.clearTimeout(clearSiteCache.timeoutId);
  clearSiteCache.timeoutId = window.setTimeout(() => {
    clearCacheNote.hidden = true;
  }, 2600);
};

const setAccentMenuOpen = (isOpen) => {
  accentSelect?.classList.toggle("is-open", isOpen);
  accentTrigger?.setAttribute("aria-expanded", String(isOpen));
  if (accentMenu) accentMenu.hidden = !isOpen;
};

const addRipple = (event) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  const rippleSize = Math.hypot(rect.width, rect.height) * 2;

  ripple.className = "ripple";
  ripple.style.setProperty("--ripple-size", `${rippleSize}px`);
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;

  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
};

const copyShareLink = async () => {
  if (!shareLinkButton) return;

  try {
    await navigator.clipboard.writeText(window.location.href);
    shareLinkButton.classList.add("is-copied");
    shareLinkButton.setAttribute("aria-label", translate("share.copied"));
    window.setTimeout(() => {
      shareLinkButton.classList.remove("is-copied");
      shareLinkButton.setAttribute("aria-label", translate("share.copy"));
    }, 1800);
  } catch {
    shareLinkButton.setAttribute("aria-label", translate("share.copy"));
  }
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

const updateScrollProgress = () => {
  if (!scrollProgress) return;

  const scrollableHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });
updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loadingBar?.classList.add("is-hidden");
  }, 920);
});

setLanguage(currentLanguage);
setTheme(getInitialTheme());
setupSettingToggles();
setDensity(localStorage.getItem("profile-density") || "comfortable");
setupPremiumAccentLocks();
setAccent(localStorage.getItem("profile-accent") || "neutral");
setCurrency(localStorage.getItem("profile-currency") || (currentLanguage === "ko" ? "krw" : "usd"));

themeChoices.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
});

languageChoices.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageChoice));
});

densityChoices.forEach((button) => {
  button.addEventListener("click", () => setDensity(button.dataset.densityChoice));
});

currencyChoices.forEach((button) => {
  button.addEventListener("click", () => setCurrency(button.dataset.currencyChoice));
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
  setAccentMenuOpen(!accentSelect?.classList.contains("is-open"));
});

clearCacheButton?.addEventListener("click", clearSiteCache);
shareLinkButton?.addEventListener("click", copyShareLink);
adblockDismiss?.addEventListener("click", () => {
  localStorage.setItem("adblock-notice-dismissed", "true");
  if (adblockNotice) adblockNotice.hidden = true;
});

document.addEventListener("click", (event) => {
  if (!accentSelect?.contains(event.target)) setAccentMenuOpen(false);
});

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
