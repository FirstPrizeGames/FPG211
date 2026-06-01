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
const storageBar = document.querySelector("[data-storage-bar]");
const storageUsage = document.querySelector("[data-storage-usage]");
const shareLinkButton = document.querySelector("[data-share-link]");
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
const fastRenderSwipe = document.querySelector("[data-fast-render-swipe]");
const homeTabs = [...document.querySelectorAll("[data-home-tab]")];
const homePanels = [...document.querySelectorAll("[data-home-panel]")];
const infoTabs = [...document.querySelectorAll("[data-info-tab]")];
const infoPanels = [...document.querySelectorAll("[data-info-panel]")];
const loadingBar = document.querySelector(".loading-bar");
const scrollProgress = document.querySelector(".scroll-progress");
const scrollActions = document.querySelector("[data-scroll-actions]");
const scrollActionButtons = [...document.querySelectorAll("[data-scroll-to]")];
const actionButtons = [...document.querySelectorAll("[data-go-url]")];
const contextMenu = document.querySelector("[data-context-menu]");
const contextMenuActions = [...document.querySelectorAll("[data-context-action]")];
const mobileMenuButton = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const brandLogoImage = document.querySelector(".brand-logo img");
const feedbackOpen = document.querySelector("[data-feedback-open]");
const feedbackWarning = document.querySelector("[data-feedback-warning]");
const feedbackCancel = document.querySelector("[data-feedback-cancel]");
const feedbackConfirm = document.querySelector("[data-feedback-confirm]");
const feedbackFormUrl = "https://forms.gle/214q7yY6gbTUwK9u7";
let pendingSubscribeUrl = "";
let contextMenuCloseTimeoutId = 0;
let contextClipboardText = "";
let contextClipboardCheckId = 0;
let contextTargetElement = null;
let contextTargetLink = null;
let contextTargetImage = null;
const highlightTargets = [
  ...document.querySelectorAll(
    ".mobile-menu-button, .button, .feedback-cta, .contact-links a, .icon-button, .adblock-notice button, .settings-sidebar a, .faq-topic-nav a, .currency-switch button, .setting-select-trigger, .setting-select-menu button, .accent-trigger, .accent-menu button, .home-tabs button, .info-tabs button, .share-socials button, .scroll-actions button, .context-menu button",
  ),
];
const sections = navLinks
  .filter((link) => link.getAttribute("href")?.startsWith("#"))
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const translations = {
  ko: {
    "accessibility.skip": "본문으로 바로 이동",
    "nav.home": "Home",
    "nav.creator": "Creator",
    "nav.about": "About",
    "nav.aboutUs": "About us",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.pricing": "Pricing",
    "nav.bio": "Bio",
    "nav.faq": "FAQ",
    "nav.settings": "Settings",
    "nav.privacy": "Privacy Policy",
    "nav.license": "License",
    "nav.feedback": "Feedback",
    "nav.menu": "메뉴",
    "context.close": "닫기",
    "context.copy": "페이지 링크 복사",
    "context.copySelection": "선택한 텍스트 복사",
    "context.openLink": "새 탭에서 링크 열기",
    "context.copyLink": "링크 주소 복사",
    "context.saveImage": "이미지 저장",
    "context.copyTitle": "페이지 제목 복사",
    "context.paste": "붙여넣기",
    "context.search": "사이트 검색",
    "context.share": "공유 열기",
    "context.qr": "QR 코드 만들기",
    "context.top": "맨 위로 이동",
    "context.refresh": "새로고침",
    "context.back": "뒤로 가기",
    "context.forward": "앞으로 가기",
    "context.print": "인쇄",
    "context.source": "페이지 소스 보기",
    "context.creator": "Creator 열기",
    "context.feedback": "Feedback 열기",
    "context.settings": "설정 열기",
    "search.eyebrow": "Search",
    "search.title": "사이트 검색",
    "search.label": "검색어",
    "search.placeholder": "Unity, 요금제, FAQ처럼 입력하세요",
    "search.empty": "검색어를 입력하면 관련 페이지가 표시됩니다.",
    "search.noResults": "일치하는 결과가 없습니다.",
    "search.close": "닫기",
    "search.open": "열기",
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
    "search.settingsTitle": "Settings",
    "search.settingsBody": "테마, 언어, 강조 컬러, 우클릭 메뉴, 저장용량 설정을 관리합니다.",
    "search.privacyTitle": "Privacy Policy",
    "search.privacyBody": "로컬 설정 저장, 외부 링크, 피드백 개인정보 기준을 확인합니다.",
    "search.licenseTitle": "Open Source License",
    "search.licenseBody": "사이트 코드, 이미지, 로고, 시스템 글꼴의 라이선스 기준을 확인합니다.",
    "search.feedbackTitle": "Feedback",
    "search.feedbackBody": "버그, 개선 의견, 사용성 피드백을 Google Forms로 보냅니다.",
    "aria.home": "홈",
    "aria.profileMenu": "프로필 메뉴",
    "aria.homeTabs": "홈 섹션 탭",
    "aria.creatorMenu": "Creator 메뉴",
    "aria.bioMenu": "자기소개 메뉴",
    "aria.aboutMenu": "About us 메뉴",
    "aria.faqMenu": "FAQ 메뉴",
    "aria.pricingMenu": "요금제 메뉴",
    "aria.settingsMenu": "설정 메뉴",
    "aria.privacyMenu": "개인정보처리방침 메뉴",
    "aria.licenseMenu": "오픈소스 라이선스 메뉴",
    "aria.feedbackMenu": "피드백 메뉴",
    "aria.feedbackGuide": "피드백 안내",
    "aria.feedbackTopics": "피드백 주제",
    "aria.feedbackPrivacy": "개인정보 안내",
    "aria.errorMenu": "오류 페이지 메뉴",
    "aria.offlineMenu": "오프라인 페이지 메뉴",
    "aria.profileSummary": "프로필 요약",
    "aria.creatorGuide": "Unity 제작 가이드",
    "aria.creatorPricing": "Unity 요금제 요약",
    "aria.contactSection": "연락 섹션으로 이동",
    "aria.workSection": "작업 섹션으로 이동",
    "aria.copyPageLink": "페이지 링크 복사",
    "aria.externalShare": "외부 공유",
    "aria.siteInfo": "사이트 정보",
    "aria.siteInfoTabs": "사이트 정보 탭",
    "aria.scrollControls": "페이지 스크롤 컨트롤",
    "aria.scrollTop": "맨 위로 이동",
    "aria.scrollBottom": "맨 아래로 이동",
    "aria.errorFaq": "404 자주 묻는 질문",
    "aria.bioContent": "자기소개",
    "aria.bioSummary": "자기소개 요약",
    "aria.aboutSummary": "About us 요약",
    "aria.aboutValues": "About us 가치",
    "aria.aboutSystem": "사이트 구성",
    "aria.likes": "좋아하는 것들",
    "aria.faqTopics": "FAQ 주제 이동",
    "aria.emtFaq": "미국 응급구조사 FAQ",
    "aria.gameFaq": "게임 개발자 FAQ",
    "aria.meetFaq": "만남 FAQ",
    "aria.siteFaq": "사이트 운영 FAQ",
    "aria.faqSummary": "FAQ 요약",
    "aria.pricingControls": "요금제 표시 설정",
    "aria.currency": "통화 선택",
    "aria.pricingInfo": "요금제 정보",
    "aria.ultraPlan": "Ultra 요금제",
    "aria.planComparison": "요금제 비교",
    "aria.planComparisonTable": "요금제 기능 비교",
    "aria.faq": "자주 묻는 질문",
    "aria.settingsPanel": "프로필 설정",
    "aria.settingsCategories": "설정 분류",
    "aria.settingsOverview": "설정 상태 요약",
    "aria.navLayout": "내비게이션 레이아웃 선택",
    "aria.contextMenuMode": "우클릭 메뉴 방식 선택",
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
    "aria.density": "화면 밀도 선택",
    "faqTopics.emt": "EMT",
    "faqTopics.game": "게임 개발자",
    "faqTopics.meet": "만남",
    "faqTopics.site": "사이트",
    "faq.heroTitle": "궁금한 내용을 주제별로 쉽게 찾을 수 있습니다.",
    "faq.heroLead":
      "EMT, 게임 개발, 연락 방법, 사이트 운영을 짧은 답변으로 정리했습니다.",
    "faq.summaryTopics": "Topics",
    "faq.summaryAnswers": "Answers",
    "faq.summaryFormat": "Format",
    "faq.summaryFormatValue": "Quick read",
    "faq.topicEmtBody": "EMT 시작 과정",
    "faq.topicGameBody": "게임 개발 첫 단계",
    "faq.topicMeetBody": "연락 방법",
    "faq.topicSiteBody": "배포와 개인정보",
    "home.heroEyebrow": "Personal Profile",
    "home.heroTitle": "응급 현장과 게임 제작을 함께 기록합니다.",
    "home.lead":
      "현장에서는 침착한 판단을, 제작에서는 작은 아이디어를 플레이 가능한 형태로 만드는 과정을 중요하게 생각합니다.",
    "home.roleLabel": "Role",
    "home.roleValue": "구급대원",
    "home.focusLabel": "Focus",
    "home.focusValue": "Prehospital Care",
    "home.buildLabel": "Build",
    "home.buildValue": "Unity Game Dev",
    "home.viewWork": "View Work",
    "home.heroNoteLabel": "Updated",
    "home.heroNoteValue": "Profile, game work, and site tools",
    "home.tabsTitle": "필요한 정보만 빠르게 볼 수 있게 나눴습니다.",
    "home.aboutTitle": "가장 긴급한 순간에 차분하게 도착합니다.",
    "home.aboutBody":
      "응급 현장에서 환자의 상태를 빠르게 파악하고 필요한 처치를 연결하는 일을 하고 있습니다. 긴박한 순간일수록 기본에 충실한 판단, 팀과의 명확한 소통, 환자를 향한 존중을 중요하게 생각합니다.",
    "home.selectedWork": "Game Work",
    "home.workTitle": "게임을 만들고 개발하는 작업",
    "home.workOneTitle": "게임 아이디어와 기획",
    "home.workOneBody":
      "작은 플레이 목표를 먼저 정하고, 조작 방식, 승리 조건, 실패 조건을 간단한 문서로 정리합니다.",
    "home.workTwoTitle": "Unity와 C# 개발",
    "home.workTwoBody":
      "씬, 프리팹, 컴포넌트를 정리하고 C# 스크립트로 이동, 충돌, 점수, UI 같은 핵심 기능을 구현합니다.",
    "home.workThreeTitle": "테스트와 배포 준비",
    "home.workThreeBody":
      "직접 플레이하며 난이도와 버그를 점검하고, PC, WebGL, 모바일 환경에서 화면 비율과 성능을 확인합니다.",
    "home.contactTitle": "이 페이지를 공유하고 필요한 의견을 남겨주세요.",
    "creator.eyebrow": "Creator",
    "creator.title": "Unity로 게임을 만드는 기본 흐름",
    "creator.lead":
      "Unity는 2D와 3D 게임을 모두 만들 수 있는 엔진입니다. 처음에는 큰 게임보다 작은 플레이 가능한 장면을 완성하는 것을 목표로 잡고, 아이디어, 씬 구성, 오브젝트, C# 스크립트, UI, 테스트, 빌드 순서로 차근차근 진행하는 편이 좋습니다.",
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
    "feedback.title": "의견을 남겨주세요.",
    "feedback.lead": "버그, 개선 아이디어, 보기 불편한 부분을 알려주시면 다음 업데이트에 반영할 수 있습니다.",
    "feedback.cta": "Google Forms로 피드백 남기기",
    "feedback.panelEyebrow": "Guide",
    "feedback.panelTitle": "짧아도 괜찮습니다.",
    "feedback.panelBody": "어떤 페이지에서 문제가 있었는지, 무엇을 기대했는지, 실제로 무엇이 보였는지만 적어도 충분합니다.",
    "feedback.statusOne": "버그 제보",
    "feedback.statusTwo": "디자인 문제",
    "feedback.statusThree": "기능 제안",
    "feedback.topicOneTitle": "버그와 깨진 화면",
    "feedback.topicOneBody": "버튼이 반응하지 않거나, 모바일에서 레이아웃이 이상하거나, 페이지 이동이 막히는 문제를 알려주세요.",
    "feedback.topicTwoTitle": "읽기 불편한 문구",
    "feedback.topicTwoBody": "어색한 영어/한국어 문장, 너무 딱딱한 안내, 이해하기 어려운 설정 이름을 보낼 수 있습니다.",
    "feedback.topicThreeTitle": "다음에 필요한 기능",
    "feedback.topicThreeBody": "공유, 접근성, 가격 페이지, 설정, 우클릭 메뉴처럼 더 개선되면 좋은 부분을 제안해 주세요.",
    "feedback.privacyEyebrow": "Privacy",
    "feedback.privacyTitle": "개인정보는 필요한 만큼만 입력하세요.",
    "feedback.privacyBody": "피드백 양식은 외부 Google Forms에서 열립니다. 답장을 원하지 않는다면 이름, 이메일, 연락처를 비워두는 편이 좋습니다.",
    "privacy.eyebrow": "Privacy Policy",
    "privacy.title": "개인정보와 사이트 설정을 투명하게 다룹니다.",
    "privacy.lead": "이 페이지는 사이트가 어떤 정보를 사용하고, 어떤 정보는 저장하지 않는지 간단히 설명합니다.",
    "privacy.summaryStorage": "Storage",
    "privacy.summaryStorageValue": "Local only",
    "privacy.summaryAccount": "Accounts",
    "privacy.summaryAccountValue": "Not required",
    "privacy.summaryPayments": "Payments",
    "privacy.summaryPaymentsValue": "External links",
    "privacy.localTitle": "브라우저에 저장되는 설정",
    "privacy.localBody": "테마, 언어, 강조 컬러, 화면 밀도, 사이드바 여부 같은 사용자 설정은 브라우저의 localStorage에 저장됩니다.",
    "privacy.noAccountTitle": "계정 없이 볼 수 있는 사이트",
    "privacy.noAccountBody": "현재 사이트는 자체 로그인, 회원가입, 서버 데이터베이스를 사용하지 않습니다.",
    "privacy.externalTitle": "외부 서비스로 이동하는 기능",
    "privacy.externalBody": "Feedback, Patreon 결제, 외부 공유 기능은 해당 외부 서비스의 개인정보 처리 기준을 따릅니다.",
    "privacy.clearTitle": "설정 삭제",
    "privacy.clearBody": "설정 페이지의 브라우저 캐시 정리 기능이나 브라우저 설정을 통해 저장된 사이트 데이터를 삭제할 수 있습니다.",
    "privacy.updated": "마지막 업데이트: 2026년 5월 31일",
    "license.eyebrow": "Open Source License",
    "license.title": "사이트 코드와 사용 범위를 명확하게 정리합니다.",
    "license.lead": "이 페이지는 사이트 템플릿, 코드, 이미지와 브랜드 자산을 어떻게 다룰 수 있는지 안내합니다.",
    "license.summaryCode": "Code",
    "license.summaryCodeValue": "HTML/CSS/JS",
    "license.summaryAssets": "Assets",
    "license.summaryAssetsValue": "Owner reserved",
    "license.summaryFonts": "Fonts",
    "license.summaryFontsValue": "System license",
    "license.mitTitle": "코드 라이선스",
    "license.mitBody": "이 사이트의 기본 HTML, CSS, JavaScript 구조는 MIT 스타일의 오픈소스 라이선스로 재사용할 수 있도록 정리할 수 있습니다.",
    "license.assetsTitle": "이미지와 로고",
    "license.assetsBody": "로고, 프로필 이미지, 브랜드 이름, 개인 문구는 사이트 소유자의 자산으로 별도 허가 없이 재배포하지 않는 것을 기준으로 합니다.",
    "license.fontsTitle": "시스템 글꼴",
    "license.fontsBody": "사이트는 외부 폰트 파일 없이 운영체제의 시스템 글꼴을 사용하며, 각 운영체제의 라이선스를 따릅니다.",
    "license.noticeTitle": "고지 유지",
    "license.noticeBody": "코드를 공개하거나 재사용할 때는 원 저작권 고지와 라이선스 안내를 함께 유지하는 것을 권장합니다.",
    "license.updated": "마지막 업데이트: 2026년 5월 31일",
    "feedback.warningTitle": "외부 양식으로 이동합니다.",
    "feedback.warningBody": "Google Forms가 새 페이지에서 열립니다. 이름이나 연락처 같은 개인정보는 필요한 경우에만 입력해 주세요.",
    "feedback.cancel": "취소",
    "feedback.continue": "계속하기",
    "settings.title": "설정 관리 콘솔",
    "settings.lead":
      "공개 상태, 표시 방식, 성능, 저장소 설정을 한 화면에서 관리합니다.",
    "settings.overviewProfile": "Profile",
    "settings.overviewProfileValue": "Public",
    "settings.overviewTheme": "Theme",
    "settings.overviewThemeValue": "Synced",
    "settings.overviewStorage": "Storage",
    "settings.sidebarEyebrow": "Workspace",
    "settings.sidebarTitle": "Controls",
    "settings.groupIdentity": "Identity & access",
    "settings.groupIdentityBody": "공개 프로필과 방문자 연결 방식을 관리합니다.",
    "settings.groupExperience": "Experience",
    "settings.groupExperienceBody": "방문자가 보는 화면의 테마, 언어, 접근성을 조정합니다.",
    "settings.groupSystem": "System",
    "settings.groupSystemBody": "렌더링, 저장용량, 브라우저 캐시를 관리합니다.",
    "settings.groupBrand": "Brand system",
    "settings.groupBrandBody": "강조 컬러와 화면 밀도를 사이트 톤에 맞춥니다.",
    "settings.profileTab": "Profile",
    "settings.privacyTab": "Privacy",
    "settings.displayTab": "Display",
    "settings.navigationTab": "Navigation",
    "settings.languageTab": "Language",
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
    "settings.themeBody": "프로필 화면의 밝기를 라이트, 다크, 밝기 끄기 모드로 선택합니다.",
    "settings.lightsOff": "밝기 끄기",
    "settings.themeLight": "라이트",
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
    "settings.contextMenuTitle": "커스텀 우클릭 메뉴",
    "settings.contextMenuBody": "빠른 작업을 담은 디자인 우클릭 메뉴를 사용합니다.",
    "settings.contextMenuDialogTitle": "우클릭 메뉴 방식 선택",
    "settings.contextMenuDialogBody": "빠른 작업이 필요한 경우 커스텀 메뉴를 사용하고, 브라우저 기본 동작을 우선하려면 기본 메뉴를 선택합니다.",
    "settings.contextMenuCustomTitle": "Custom menu",
    "settings.contextMenuCustomBody": "Copy, share, QR code, search, print 같은 사이트 작업을 한 메뉴에서 엽니다.",
    "settings.contextMenuNativeTitle": "Browser default",
    "settings.contextMenuNativeBody": "브라우저가 제공하는 기본 우클릭 메뉴를 그대로 사용합니다.",
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
    "settings.accentTitle": "강조 컬러",
    "settings.accentBody": "버튼, 진행 바, 포커스 표시 등에 사용할 포인트 컬러를 선택합니다.",
    "settings.accentNeutral": "Neutral",
    "settings.accentBlue": "Blue",
    "settings.accentGreen": "Green",
    "settings.accentRose": "Rose",
    "settings.accentOrange": "Orange",
    "settings.accentPurple": "Purple",
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
      "© 2026 Profile Site. 모든 프로필 문구, 이미지, 구성 요소의 권리는 해당 소유자에게 있습니다.",
    "plans.free": "Free",
    "plans.freePrice": "₩0",
    "plans.pro": "Pro",
    "plans.proPrice": "₩29,000",
    "plans.team": "Team",
    "plans.teamPrice": "₩169,000",
    "plans.ultra": "Ultra",
    "plans.ultraPrice": "₩299,000",
    "plans.monthly": "월간",
    "plans.recommended": "추천",
    "plans.topTier": "최상위",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "프로필 활용 방식에 맞게 선택하세요.",
    "pricing.lead":
      "구급대원 경력 소개, 교육 이력 정리, 포트폴리오 확장까지 필요한 범위에 맞춰 구성했습니다.",
    "pricing.freeBody": "구급대원으로서의 기본 소개와 공유 흐름을 담기 좋은 구성입니다.",
    "pricing.freeOne": "핵심 소개와 직무 요약",
    "pricing.freeTwo": "주요 역량 3개 표시",
    "pricing.freeThree": "테마, 언어, 접근성 설정",
    "pricing.freeFour": "공유 및 피드백 흐름",
    "pricing.chooseFree": "Free로 시작",
    "pricing.proBody": "현장 경험, 교육 이수, 자격 사항을 더 자세히 보여주기 위한 구성입니다.",
    "pricing.proOne": "현장 대응 경험 강조",
    "pricing.proTwo": "교육/자격 정보 섹션",
    "pricing.proThree": "Pro 전용 강조 컬러",
    "pricing.proFour": "추천서와 활동 이력 확장",
    "pricing.choosePro": "Pro 선택",
    "pricing.teamBody": "팀 단위 프로필, 공동 소개, 활동 정리를 위한 확장 플랜입니다.",
    "pricing.teamOne": "팀 소개와 공동 프로필 구성",
    "pricing.teamTwo": "구성원별 역할 및 활동 정리",
    "pricing.teamThree": "교육, 프로젝트, 운영 정보 구조화",
    "pricing.teamFour": "Team 전용 컬러와 우선 피드백 흐름",
    "pricing.chooseTeam": "Team 선택",
    "pricing.ultraBody": "가장 빠른 대응과 공동 기획 참여를 원하는 사용자를 위한 최상위 플랜입니다.",
    "pricing.ultraOne": "First, the response",
    "pricing.ultraTwo": "Request priority processing",
    "pricing.ultraThree": "Participating in joint planning",
    "pricing.ultraFour": "Unreleased cuts",
    "pricing.chooseUltra": "Ultra 선택",
    "pricing.subscribeEyebrow": "Subscription",
    "pricing.subscribeWarningTitle": "외부 결제 페이지로 이동합니다.",
    "pricing.subscribeWarningBody": "Patreon checkout이 새 페이지에서 열립니다. 결제 전 플랜 이름과 금액을 다시 확인해 주세요.",
    "pricing.subscribeCancel": "취소",
    "pricing.subscribeContinue": "계속하기",
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
    "pricing.faqOneAnswer": "Pro, Team, Ultra 플랜은 Patreon checkout 링크를 통해 진행됩니다.",
    "pricing.faqTwoQuestion": "결제하면 프리미엄 컬러가 자동으로 풀리나요?",
    "pricing.faqTwoAnswer":
      "현재는 링크 연결 방식이라 자동 잠금 해제는 아직 지원하지 않습니다. 나중에 Patreon 연동을 추가하면 자동으로 연결할 수 있습니다.",
    "pricing.faqThreeQuestion": "달러와 한화 표시는 실제 환율인가요?",
    "pricing.faqThreeAnswer":
      "현재는 안내용 고정 가격입니다. 실제 결제 금액은 Patreon checkout 화면을 기준으로 확인해야 합니다.",
    "pricing.faqFourQuestion": "Team 플랜은 누구에게 적합한가요?",
    "pricing.faqFourAnswer":
      "팀 소개, 구성원 역할, 프로젝트나 활동 정보를 한 페이지에서 정리하려는 경우에 적합합니다.",
    "error.eyebrow": "404",
    "error.code": "404_NOT_FOUND",
    "error.title": "페이지를 찾을 수 없습니다.",
    "error.body": "요청한 주소가 변경되었거나 아직 준비되지 않은 페이지일 수 있습니다.",
    "error.home": "홈으로 이동",
    "error.faq": "FAQ 보기",
    "error.feedback": "Feedback 보내기",
    "error.settings": "설정 열기",
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
    "offline.tipThreeBody": "외부 공유, Forms, Patreon 링크, QR 이미지 열기 기능은 네트워크 연결이 필요할 수 있습니다.",
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
    "share.copy": "페이지 링크 복사",
    "share.copied": "페이지 링크 복사됨",
    "share.eyebrow": "Share",
    "share.title": "페이지 공유",
    "share.body": "아래 링크를 복사해서 원하는 곳에 공유할 수 있습니다.",
    "share.linkLabel": "공유 링크",
    "share.close": "닫기",
    "share.native": "기기 공유",
    "qr.eyebrow": "QR Code",
    "qr.title": "QR 코드 만들기",
    "qr.body": "현재 페이지 링크를 스캔 가능한 QR 코드로 표시합니다.",
    "qr.alt": "현재 페이지 링크 QR 코드",
    "qr.openImage": "Open new tab image",
    "qr.copy": "링크 복사",
    "qr.copied": "QR 링크 복사됨",
    "qr.close": "닫기",
    "adblock.message":
      "광고 차단기가 일부 사이트 기능을 제한할 수 있습니다. 문제가 보이면 이 사이트를 허용 목록에 추가해 주세요.",
    "adblock.dismiss": "닫기",
    "bio.eyebrow": "Bio",
    "bio.title": "응급 현장에 필요한 침착함을 믿습니다.",
    "bio.lead":
      "저는 환자의 가장 불안한 순간에 도착해 상황을 빠르게 읽고, 필요한 처치와 이송을 연결하는 구급대원입니다.",
    "bio.summaryRoleLabel": "Role",
    "bio.summaryRoleValue": "구급대원",
    "bio.summaryFocusLabel": "Focus",
    "bio.summaryFocusValue": "침착한 현장 대응",
    "bio.summaryBuildLabel": "Build",
    "bio.summaryBuildValue": "게임 UI와 도구",
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
    "bio.likesLead": "이 영역은 나중에 취향이나 관심사가 바뀌면 쉽게 수정할 수 있는 템플릿입니다.",
    "bio.likeOne": "게임 UI & UX 디자인, 게임 개발",
    "bio.likeTwo": "Roblox, Baldi's Basics 게임",
    "bio.likeThree": "현장에서 사람을 돕는 일",
    "bio.likeFour": "BBQ 파티",
    "bio.likeFive": "새로운 도구 배우기",
    "about.eyebrow": "About us",
    "about.title": "침착한 응급 대응과 창작 작업을 함께 담은 공개 프로필입니다.",
    "about.lead":
      "이 사이트는 응급 대응의 가치, 게임 제작 기록, 후원 정보, 피드백 경로를 조용하고 읽기 쉬운 형태로 모아 둔 공간입니다.",
    "about.bioButton": "Bio 읽기",
    "about.feedbackButton": "Feedback 남기기",
    "about.snapshotFocusLabel": "Focus",
    "about.snapshotFocusValue": "응급 대응",
    "about.snapshotBuildLabel": "Build",
    "about.snapshotBuildValue": "Unity와 사이트 도구",
    "about.snapshotModeLabel": "Mode",
    "about.snapshotModeValue": "공개, 수정 가능, 가벼운 구조",
    "about.valueOneTitle": "명확한 목적",
    "about.valueOneBody":
      "방문자가 이 프로필이 무엇을 보여주는지, 어떤 작업을 만들고 있는지, 다음에 어디로 이동하면 되는지 복잡하지 않게 이해하도록 설계했습니다.",
    "about.valueTwoTitle": "실용적인 신뢰",
    "about.valueTwoBody":
      "개인정보, 라이선스, 피드백, 요금제, FAQ를 각각의 페이지로 나눠 중요한 정보를 찾기 쉽고 수정하기 쉽게 유지합니다.",
    "about.valueThreeTitle": "현대적인 접근성",
    "about.valueThreeBody":
      "테마 모드, 언어 선택, 키보드 포커스, 모바일 메뉴, 줄어든 시각 효과를 통해 여러 기기에서 편하게 볼 수 있게 했습니다.",
    "about.systemEyebrow": "Site system",
    "about.systemTitle": "이 페이지 네트워크에 들어있는 것",
    "about.systemLead": "각 라우트가 맡은 역할을 분리해서 홈 화면은 가볍게 유지하고, 자세한 정보는 알맞은 페이지에 배치했습니다.",
    "about.systemBio": "실명 없이 정리한 개인 프로필",
    "about.systemCreator": "Unity 게임 제작 기록",
    "about.systemFaq": "EMT, 게임 개발, 배포, 개인정보 답변",
    "about.systemSettings": "테마, 언어, 강조 컬러, 내비게이션 설정",
    "about.closingEyebrow": "Direction",
    "about.closingTitle": "작고 유용하며 개선하기 쉬운 사이트를 목표로 합니다.",
    "about.closingBody":
      "AI 기능, 로그인, 프리미엄 접근, 분석, 결제 같은 기능은 나중에 정말 필요할 때 이 기반 위에 추가할 수 있습니다.",
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
    "nav.home": "Home",
    "nav.creator": "Creator",
    "nav.about": "About",
    "nav.aboutUs": "About us",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.pricing": "Pricing",
    "nav.bio": "Bio",
    "nav.faq": "FAQ",
    "nav.settings": "Settings",
    "nav.privacy": "Privacy Policy",
    "nav.license": "License",
    "nav.feedback": "Feedback",
    "nav.menu": "Menu",
    "context.close": "Close",
    "context.copy": "Copy page link",
    "context.copySelection": "Copy selected text",
    "context.openLink": "Open link in new tab",
    "context.copyLink": "Copy link address",
    "context.saveImage": "Save image as",
    "context.copyTitle": "Copy page title",
    "context.paste": "Paste",
    "context.search": "Search site",
    "context.share": "Open share",
    "context.qr": "Create QR Code",
    "context.top": "Back to top",
    "context.refresh": "Refresh",
    "context.back": "Back",
    "context.forward": "Forward",
    "context.print": "Print page",
    "context.source": "View page source",
    "context.creator": "Open Creator",
    "context.feedback": "Open Feedback",
    "context.settings": "Open settings",
    "search.eyebrow": "Search",
    "search.title": "Search site",
    "search.label": "Search query",
    "search.placeholder": "Try Unity, pricing, or FAQ",
    "search.empty": "Type a query to show related pages.",
    "search.noResults": "No matching results.",
    "search.close": "Close",
    "search.open": "Open",
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
    "search.settingsTitle": "Settings",
    "search.settingsBody": "Manage theme, language, accent color, context menu, and storage settings.",
    "search.privacyTitle": "Privacy Policy",
    "search.privacyBody": "Review local preference storage, external links, and feedback privacy notes.",
    "search.licenseTitle": "Open Source License",
    "search.licenseBody": "Review the license rules for the site code, images, logo, and system fonts.",
    "search.feedbackTitle": "Feedback",
    "search.feedbackBody": "Send bugs, improvement ideas, and usability feedback through Google Forms.",
    "aria.home": "Home",
    "aria.profileMenu": "Profile menu",
    "aria.homeTabs": "Home section tabs",
    "aria.creatorMenu": "Creator menu",
    "aria.bioMenu": "Bio menu",
    "aria.aboutMenu": "About us menu",
    "aria.faqMenu": "FAQ menu",
    "aria.pricingMenu": "Pricing menu",
    "aria.settingsMenu": "Settings menu",
    "aria.privacyMenu": "Privacy policy menu",
    "aria.licenseMenu": "Open source license menu",
    "aria.feedbackMenu": "Feedback menu",
    "aria.feedbackGuide": "Feedback guide",
    "aria.feedbackTopics": "Feedback topics",
    "aria.feedbackPrivacy": "Privacy note",
    "aria.errorMenu": "Error page menu",
    "aria.offlineMenu": "Offline page menu",
    "aria.profileSummary": "Profile summary",
    "aria.creatorGuide": "Unity creation guide",
    "aria.creatorPricing": "Unity pricing summary",
    "aria.contactSection": "Go to contact section",
    "aria.workSection": "Go to work section",
    "aria.copyPageLink": "Copy page link",
    "aria.externalShare": "External share options",
    "aria.siteInfo": "Site information",
    "aria.siteInfoTabs": "Site information tabs",
    "aria.scrollControls": "Page scroll controls",
    "aria.scrollTop": "Scroll to top",
    "aria.scrollBottom": "Scroll to bottom",
    "aria.errorFaq": "404 frequently asked questions",
    "aria.bioContent": "Bio",
    "aria.bioSummary": "Bio summary",
    "aria.aboutSummary": "About us summary",
    "aria.aboutValues": "About us values",
    "aria.aboutSystem": "Site system",
    "aria.likes": "Favorite things",
    "aria.faqTopics": "FAQ topic navigation",
    "aria.emtFaq": "United States EMT FAQ",
    "aria.gameFaq": "Game developer FAQ",
    "aria.meetFaq": "Meeting FAQ",
    "aria.siteFaq": "Site operations FAQ",
    "aria.faqSummary": "FAQ summary",
    "aria.pricingControls": "Pricing display settings",
    "aria.currency": "Currency selection",
    "aria.pricingInfo": "Pricing information",
    "aria.ultraPlan": "Ultra plan",
    "aria.planComparison": "Plan comparison",
    "aria.planComparisonTable": "Plan feature comparison",
    "aria.faq": "Frequently asked questions",
    "aria.settingsPanel": "Profile settings",
    "aria.settingsCategories": "Settings categories",
    "aria.settingsOverview": "Settings status summary",
    "aria.navLayout": "Navigation layout selection",
    "aria.contextMenuMode": "Context menu mode selection",
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
    "aria.density": "Display density selection",
    "faqTopics.emt": "EMT",
    "faqTopics.game": "Game Developer",
    "faqTopics.meet": "Meet",
    "faqTopics.site": "Site",
    "faq.heroTitle": "Find common questions by topic.",
    "faq.heroLead":
      "Short answers about EMT, game development, contact options, and site operation.",
    "faq.summaryTopics": "Topics",
    "faq.summaryAnswers": "Answers",
    "faq.summaryFormat": "Format",
    "faq.summaryFormatValue": "Quick read",
    "faq.topicEmtBody": "How EMT starts",
    "faq.topicGameBody": "First steps in game dev",
    "faq.topicMeetBody": "How to contact",
    "faq.topicSiteBody": "Deployment and privacy",
    "home.heroEyebrow": "Personal Profile",
    "home.heroTitle": "Recording emergency work and game creation in one place.",
    "home.lead":
      "In the field, I value calm judgment. In creation, I value turning small ideas into playable experiences.",
    "home.roleLabel": "Role",
    "home.roleValue": "Emergency Responder",
    "home.focusLabel": "Focus",
    "home.focusValue": "Prehospital Care",
    "home.buildLabel": "Build",
    "home.buildValue": "Unity Game Dev",
    "home.viewWork": "View Work",
    "home.heroNoteLabel": "Updated",
    "home.heroNoteValue": "Profile, game work, and site tools",
    "home.tabsTitle": "The essentials are split into quick tabs.",
    "home.aboutTitle": "Arriving calmly when every second matters.",
    "home.aboutBody":
      "I assess patients quickly in emergency scenes and connect them to the care they need. In urgent moments, I value sound fundamentals, clear team communication, and respect for every patient.",
    "home.selectedWork": "Game Work",
    "home.workTitle": "Making and developing games",
    "home.workOneTitle": "Game ideas and planning",
    "home.workOneBody":
      "Start with a small play goal, then outline controls, win conditions, and fail states in a simple design note.",
    "home.workTwoTitle": "Unity and C# development",
    "home.workTwoBody":
      "Organize scenes, prefabs, and components, then build movement, collision, scoring, and UI with C# scripts.",
    "home.workThreeTitle": "Testing and release prep",
    "home.workThreeBody":
      "Playtest difficulty and bugs, then check aspect ratio and performance across PC, WebGL, and mobile builds.",
    "home.contactTitle": "Share this page or send feedback when needed.",
    "creator.eyebrow": "Creator",
    "creator.title": "A practical workflow for making games with Unity",
    "creator.lead":
      "Unity is an engine for creating both 2D and 3D games. At the beginning, it is better to finish a small playable scene instead of trying to build a huge game. Move step by step through the idea, scene structure, objects, C# scripts, UI, testing, and build process.",
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
    "feedback.title": "Share your feedback.",
    "feedback.lead": "Send bugs, improvement ideas, or anything that feels uncomfortable to use so it can be improved in the next update.",
    "feedback.cta": "Leave feedback on Google Forms",
    "feedback.panelEyebrow": "Guide",
    "feedback.panelTitle": "Short notes are fine.",
    "feedback.panelBody": "It is enough to say which page had a problem, what you expected, and what actually appeared.",
    "feedback.statusOne": "Bug report",
    "feedback.statusTwo": "Design issue",
    "feedback.statusThree": "Feature idea",
    "feedback.topicOneTitle": "Bugs and broken screens",
    "feedback.topicOneBody": "Report buttons that do not respond, mobile layouts that look wrong, or page navigation that gets blocked.",
    "feedback.topicTwoTitle": "Text that feels unclear",
    "feedback.topicTwoBody": "Send awkward English or Korean copy, overly stiff notices, or setting names that are hard to understand.",
    "feedback.topicThreeTitle": "Useful next features",
    "feedback.topicThreeBody": "Suggest improvements for sharing, accessibility, pricing, settings, or the custom context menu.",
    "feedback.privacyEyebrow": "Privacy",
    "feedback.privacyTitle": "Only enter the personal details you need.",
    "feedback.privacyBody": "The feedback form opens in Google Forms. If you do not need a reply, it is better to leave your name, email, and contact details blank.",
    "privacy.eyebrow": "Privacy Policy",
    "privacy.title": "Privacy and site settings are handled transparently.",
    "privacy.lead": "This page explains what the site uses and what it does not store.",
    "privacy.summaryStorage": "Storage",
    "privacy.summaryStorageValue": "Local only",
    "privacy.summaryAccount": "Accounts",
    "privacy.summaryAccountValue": "Not required",
    "privacy.summaryPayments": "Payments",
    "privacy.summaryPaymentsValue": "External links",
    "privacy.localTitle": "Settings stored in your browser",
    "privacy.localBody": "User settings such as theme, language, accent color, display density, and sidebar navigation are stored in browser localStorage.",
    "privacy.noAccountTitle": "No account required",
    "privacy.noAccountBody": "This site currently does not use its own login, sign-up flow, or server database.",
    "privacy.externalTitle": "Features that open external services",
    "privacy.externalBody": "Feedback, Patreon checkout, and external sharing features follow the privacy practices of those external services.",
    "privacy.clearTitle": "Clearing settings",
    "privacy.clearBody": "You can remove stored site data through the browser cache cleanup feature in Settings or through your browser settings.",
    "privacy.updated": "Last updated: May 31, 2026",
    "license.eyebrow": "Open Source License",
    "license.title": "Site code and usage rules are kept clear.",
    "license.lead": "This page explains how the site template, code, images, and brand assets may be handled.",
    "license.summaryCode": "Code",
    "license.summaryCodeValue": "HTML/CSS/JS",
    "license.summaryAssets": "Assets",
    "license.summaryAssetsValue": "Owner reserved",
    "license.summaryFonts": "Fonts",
    "license.summaryFontsValue": "System license",
    "license.mitTitle": "Code license",
    "license.mitBody": "The basic HTML, CSS, and JavaScript structure of this site can be organized for reuse under an MIT-style open source license.",
    "license.assetsTitle": "Images and logo",
    "license.assetsBody": "The logo, profile images, brand name, and personal copy are treated as owner assets and should not be redistributed without permission.",
    "license.fontsTitle": "System fonts",
    "license.fontsBody": "The site uses operating system fonts instead of external font files, so those fonts follow each operating system's license.",
    "license.noticeTitle": "Keep notices",
    "license.noticeBody": "When publishing or reusing the code, keeping the original copyright notice and license guidance is recommended.",
    "license.updated": "Last updated: May 31, 2026",
    "feedback.warningTitle": "You are leaving for an external form.",
    "feedback.warningBody": "Google Forms will open on a new page. Only enter personal information such as your name or contact details if it is necessary.",
    "feedback.cancel": "Cancel",
    "feedback.continue": "Continue",
    "settings.title": "Settings management console",
    "settings.lead":
      "Manage public status, display behavior, performance, and storage settings from one screen.",
    "settings.overviewProfile": "Profile",
    "settings.overviewProfileValue": "Public",
    "settings.overviewTheme": "Theme",
    "settings.overviewThemeValue": "Synced",
    "settings.overviewStorage": "Storage",
    "settings.sidebarEyebrow": "Workspace",
    "settings.sidebarTitle": "Controls",
    "settings.groupIdentity": "Identity & access",
    "settings.groupIdentityBody": "Manage the public profile and how visitors connect with you.",
    "settings.groupExperience": "Experience",
    "settings.groupExperienceBody": "Adjust theme, language, and accessibility for visitors.",
    "settings.groupSystem": "System",
    "settings.groupSystemBody": "Manage rendering, storage usage, and browser cache.",
    "settings.groupBrand": "Brand system",
    "settings.groupBrandBody": "Match accent color and display density to the site tone.",
    "settings.profileTab": "Profile",
    "settings.privacyTab": "Privacy",
    "settings.displayTab": "Display",
    "settings.navigationTab": "Navigation",
    "settings.languageTab": "Language",
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
    "settings.themeBody": "Choose a light, dark, or lights-off appearance for the profile.",
    "settings.lightsOff": "Lights Off",
    "settings.themeLight": "Light",
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
    "settings.contextMenuTitle": "Custom context menu",
    "settings.contextMenuBody": "Use a styled right-click menu with quick actions.",
    "settings.contextMenuDialogTitle": "Choose right-click menu mode",
    "settings.contextMenuDialogBody": "Use the custom menu for quick site actions, or choose the browser default if you prefer native behavior.",
    "settings.contextMenuCustomTitle": "Custom menu",
    "settings.contextMenuCustomBody": "Open site actions like copy, share, QR code, search, and print from one menu.",
    "settings.contextMenuNativeTitle": "Browser default",
    "settings.contextMenuNativeBody": "Use the browser's native right-click menu without replacing it.",
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
    "settings.accentTitle": "Accent color",
    "settings.accentBody": "Choose the point color used for buttons, progress bars, and focus states.",
    "settings.accentNeutral": "Neutral",
    "settings.accentBlue": "Blue",
    "settings.accentGreen": "Green",
    "settings.accentRose": "Rose",
    "settings.accentOrange": "Orange",
    "settings.accentPurple": "Purple",
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
      "© 2026 Profile Site. All profile copy, images, and interface components belong to their respective owners.",
    "plans.free": "Free",
    "plans.freePrice": "$0",
    "plans.pro": "Pro",
    "plans.proPrice": "$20",
    "plans.team": "Team",
    "plans.teamPrice": "$120",
    "plans.ultra": "Ultra",
    "plans.ultraPrice": "$200",
    "plans.monthly": "Monthly",
    "plans.recommended": "Recommended",
    "plans.topTier": "Top tier",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Choose the setup that fits your profile.",
    "pricing.lead":
      "Built for emergency responder career summaries, training records, and profile expansion.",
    "pricing.freeBody": "A focused setup for your essential responder profile and sharing flow.",
    "pricing.freeOne": "Core introduction and role summary",
    "pricing.freeTwo": "Three key strengths",
    "pricing.freeThree": "Theme, language, and accessibility settings",
    "pricing.freeFour": "Sharing and feedback flow",
    "pricing.chooseFree": "Start with Free",
    "pricing.proBody": "A fuller setup for field experience, training history, and certifications.",
    "pricing.proOne": "Highlighted response experience",
    "pricing.proTwo": "Training and certification sections",
    "pricing.proThree": "Pro-only accent color",
    "pricing.proFour": "Testimonials and activity history",
    "pricing.choosePro": "Choose Pro",
    "pricing.teamBody":
      "An expanded plan for team profiles, shared introductions, and organized activity records.",
    "pricing.teamOne": "Team intro and shared profile structure",
    "pricing.teamTwo": "Member roles and activity summaries",
    "pricing.teamThree": "Training, project, and operation structure",
    "pricing.teamFour": "Team-only color and priority feedback flow",
    "pricing.chooseTeam": "Choose Team",
    "pricing.ultraBody": "The top-tier plan for the fastest response and participation in joint planning.",
    "pricing.ultraOne": "First, the response",
    "pricing.ultraTwo": "Request priority processing",
    "pricing.ultraThree": "Participating in joint planning",
    "pricing.ultraFour": "Unreleased cuts",
    "pricing.chooseUltra": "Choose Ultra",
    "pricing.subscribeEyebrow": "Subscription",
    "pricing.subscribeWarningTitle": "You are leaving for an external checkout.",
    "pricing.subscribeWarningBody": "Patreon checkout will open on a new page. Please confirm the plan name and amount before paying.",
    "pricing.subscribeCancel": "Cancel",
    "pricing.subscribeContinue": "Continue",
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
    "pricing.faqOneAnswer": "The Pro, Team, and Ultra plans are handled through Patreon checkout links.",
    "pricing.faqTwoQuestion": "Will premium colors unlock automatically after payment?",
    "pricing.faqTwoAnswer":
      "Not yet. This site currently uses direct Patreon links. Automatic unlocks can be added later with a Patreon integration.",
    "pricing.faqThreeQuestion": "Are the USD and KRW prices live exchange rates?",
    "pricing.faqThreeAnswer":
      "No. They are fixed display prices. The final amount should be confirmed on the Patreon checkout page.",
    "pricing.faqFourQuestion": "Who is the Team plan for?",
    "pricing.faqFourAnswer":
      "It fits teams that want to organize a shared introduction, member roles, projects, and activity information in one place.",
    "error.eyebrow": "404",
    "error.code": "404_NOT_FOUND",
    "error.title": "Page not found.",
    "error.body": "The page may have moved, or it may not be ready yet.",
    "error.home": "Go home",
    "error.faq": "Open FAQ",
    "error.feedback": "Send feedback",
    "error.settings": "Open settings",
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
    "offline.tipThreeBody": "External sharing, forms, Patreon links, and QR image generation may need a live network connection.",
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
    "share.copy": "Copy page link",
    "share.copied": "Page link copied",
    "share.eyebrow": "Share",
    "share.title": "Share this page",
    "share.body": "Copy this link and share it wherever you want.",
    "share.linkLabel": "Share link",
    "share.close": "Close",
    "share.native": "Device share",
    "qr.eyebrow": "QR Code",
    "qr.title": "Create QR Code",
    "qr.body": "Show the current page link as a scannable QR code.",
    "qr.alt": "QR code for the current page link",
    "qr.openImage": "Open new tab image",
    "qr.copy": "Copy link",
    "qr.copied": "QR link copied",
    "qr.close": "Close",
    "adblock.message":
      "An ad blocker may limit some site features. If something looks broken, please allow this site.",
    "adblock.dismiss": "Dismiss",
    "bio.eyebrow": "Bio",
    "bio.title": "I believe in calm action when every second matters.",
    "bio.lead":
      "I am an emergency responder who arrives during a patient's most uncertain moments, reads the scene quickly, and connects them to the care and transport they need.",
    "bio.summaryRoleLabel": "Role",
    "bio.summaryRoleValue": "Emergency responder",
    "bio.summaryFocusLabel": "Focus",
    "bio.summaryFocusValue": "Calm field response",
    "bio.summaryBuildLabel": "Build",
    "bio.summaryBuildValue": "Game UI and tools",
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
    "bio.likesLead": "This area is a simple template that can be edited later as interests change.",
    "bio.likeOne": "Game UI & UX design, game development",
    "bio.likeTwo": "Roblox, Baldi's Basics",
    "bio.likeThree": "Helping people in the field",
    "bio.likeFour": "BBQ Party",
    "bio.likeFive": "Learning new tools",
    "about.eyebrow": "About us",
    "about.title": "A public profile built around calm response and creative work.",
    "about.lead":
      "This site brings together emergency response values, game creation notes, support options, and clear feedback paths in one quiet, readable place.",
    "about.bioButton": "Read the bio",
    "about.feedbackButton": "Leave feedback",
    "about.snapshotFocusLabel": "Focus",
    "about.snapshotFocusValue": "Emergency response",
    "about.snapshotBuildLabel": "Build",
    "about.snapshotBuildValue": "Unity and site tools",
    "about.snapshotModeLabel": "Mode",
    "about.snapshotModeValue": "Public, editable, lightweight",
    "about.valueOneTitle": "Clear purpose",
    "about.valueOneBody":
      "The site is designed to explain who the profile represents, what kind of work is being built, and where visitors should go next without forcing them through clutter.",
    "about.valueTwoTitle": "Practical trust",
    "about.valueTwoBody":
      "Privacy, license, feedback, pricing, and FAQ pages are separated so important information stays easy to find and easy to update.",
    "about.valueThreeTitle": "Modern accessibility",
    "about.valueThreeBody":
      "Theme modes, language options, keyboard focus, mobile navigation, and reduced visual noise make the profile more comfortable across devices.",
    "about.systemEyebrow": "Site system",
    "about.systemTitle": "What this page network includes",
    "about.systemLead": "Each route has a job, so the homepage can stay focused and the deeper details can live where they belong.",
    "about.systemBio": "Personal profile without a real name",
    "about.systemCreator": "Unity game creation notes",
    "about.systemFaq": "EMT, game dev, deployment, and privacy answers",
    "about.systemSettings": "Theme, language, accent, and navigation controls",
    "about.closingEyebrow": "Direction",
    "about.closingTitle": "Built to stay small, useful, and easy to improve.",
    "about.closingBody":
      "Future features can grow from this foundation: AI tools, sign-in, premium access, analytics, or payments can be added later only when they are genuinely needed.",
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
    team: "₩169,000",
    ultra: "₩299,000",
  },
  usd: {
    free: "$0",
    pro: "$20",
    team: "$120",
    ultra: "$200",
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
      ko: "pricing 가격 요금제 free pro team ultra patreon 결제 비교표",
      en: "pricing plans free pro team ultra patreon checkout comparison",
    },
  },
  {
    titleKey: "search.settingsTitle",
    bodyKey: "search.settingsBody",
    url: "/settings",
    keywords: {
      ko: "settings 설정 테마 언어 강조 컬러 우클릭 메뉴 캐시 저장용량 kid mode 사이드바 내비게이션",
      en: "settings theme language accent color context menu cache storage kid mode sidebar navigation",
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
    light: "settings.themeLight",
    dark: "settings.themeDark",
    "lights-off": "settings.lightsOff",
  };

  document.documentElement.dataset.theme = theme;
  localStorage.setItem("profile-theme", theme);

  themeChoices.forEach((button) => {
    const isActive = button.dataset.themeChoice === theme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (themeLabel) themeLabel.textContent = translate(themeLabelKeys[theme] || "settings.themeLight");
};

const setLanguage = (language) => {
  const languageLabelKeys = {
    ko: "settings.languageKorean",
    en: "settings.languageEnglish",
  };

  currentLanguage = language;
  document.documentElement.lang = language;
  localStorage.setItem("profile-language", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
  });

  languageChoices.forEach((button) => {
    const isActive = button.dataset.languageChoice === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (languageLabel) {
    languageLabel.textContent = translate(languageLabelKeys[language] || "settings.languageEnglish");
  }

  shareLinkButton?.setAttribute("aria-label", translate("share.copy"));

  setTheme(document.documentElement.dataset.theme || getInitialTheme());
  setAccent(document.documentElement.dataset.accent || "neutral");
  setCurrency(localStorage.getItem("profile-currency") || (language === "ko" ? "krw" : "usd"));
  setFastRender(document.documentElement.dataset.fastRender === "true");
  setKidMode(document.documentElement.dataset.kidMode || "off");
  settingToggles.forEach((button) => {
    updateSettingToggle(button, button.classList.contains("is-on"));
  });
  updateNavLayoutControls(document.documentElement.dataset.navLayout || "sidebar");
  updateStorageEstimate();
};

const getToggleLabelKey = (key, isOn) => {
  const labels = {
    "profile-public": isOn ? "settings.profileOn" : "settings.profileOff",
    "contact-visible": isOn ? "settings.contactOn" : "settings.contactOff",
    "sidebar-nav": isOn ? "settings.sidebarNavOn" : "settings.sidebarNavOff",
    "fast-render": isOn ? "settings.fastRenderOn" : "settings.fastRenderOff",
    "kid-mode": isOn ? "settings.kidModeOn" : "settings.kidModeOff",
    "custom-context-menu": isOn ? "settings.contextMenuOn" : "settings.contextMenuOff",
  };

  return labels[key];
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

const updateNavLayoutControls = (layout) => {
  const resolvedLayout = layout === "top" ? "top" : "sidebar";

  document.documentElement.dataset.navLayout = resolvedLayout;

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
  const initialLayout = savedValue === "false" ? "top" : "sidebar";
  updateNavLayoutControls(initialLayout);

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

  const currentMode =
    localStorage.getItem("profile-setting-custom-context-menu") === "false" ? "native" : "custom";
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
  const initialMode =
    localStorage.getItem("profile-setting-custom-context-menu") === "false" ? "native" : "custom";
  updateContextMenuModeControls(initialMode);

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
};

const setupFastRenderSwipe = () => {
  if (!fastRenderSwipe) return;

  const savedValue =
    localStorage.getItem("profile-setting-fast-render") ||
    localStorage.getItem("profile-fast-render");
  setFastRender(savedValue === "true");

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

  document.documentElement.dataset.density = density;
  localStorage.setItem("profile-density", density);

  densityChoices.forEach((button) => {
    const isActive = button.dataset.densityChoice === density;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (densityLabel) {
    densityLabel.textContent = translate(densityLabelKeys[density] || "settings.densityComfortable");
  }
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
    orange: "settings.accentOrange",
    purple: "settings.accentPurple",
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

const createShareDialog = () => {
  if (!document.querySelector("[data-share-dialog]")) {
    const dialog = document.createElement("div");
    dialog.className = "cache-dialog share-dialog";
    dialog.dataset.shareDialog = "";
    dialog.hidden = true;
    dialog.innerHTML = `
      <div class="cache-dialog-panel share-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="share-dialog-title">
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
          <button class="button cache-cancel-button" type="button" data-share-close data-i18n="share.close">닫기</button>
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
      <p class="eyebrow" data-i18n="search.eyebrow">Search</p>
      <h2 id="search-dialog-title" data-i18n="search.title">사이트 검색</h2>
      <label class="search-field">
        <span data-i18n="search.label">검색어</span>
        <input type="search" data-site-search-input data-i18n-placeholder="search.placeholder" placeholder="Unity, 요금제, FAQ처럼 입력하세요" autocomplete="off" />
      </label>
      <div class="search-results" data-site-search-results></div>
      <div class="cache-warning-actions">
        <button class="button cache-cancel-button" type="button" data-site-search-close data-i18n="search.close">닫기</button>
      </div>
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
          <button class="button cache-cancel-button" type="button" data-qr-close data-i18n="qr.close">닫기</button>
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

const renderSearchResults = (query = "") => {
  const resultsContainer = document.querySelector("[data-site-search-results]");
  if (!resultsContainer) return;

  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) {
    resultsContainer.innerHTML = `<p class="search-empty">${translate("search.empty")}</p>`;
    return;
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
    resultsContainer.innerHTML = `<p class="search-empty">${translate("search.noResults")}</p>`;
    return;
  }

  resultsContainer.innerHTML = results
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

const showSiteSearchDialog = () => {
  const dialog = document.querySelector("[data-site-search-dialog]");
  const input = document.querySelector("[data-site-search-input]");
  if (!dialog || !input) return;

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
    "profile-setting-sidebar-nav",
    "profile-setting-fast-render",
    "profile-setting-kid-mode",
    "profile-setting-custom-context-menu",
  ].forEach((key) => localStorage.removeItem(key));

  document.documentElement.dataset.theme = "light";
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
    const defaultOn = button.dataset.toggleKey !== "fast-render";
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
  if (!subscribeWarning) {
    if (pendingSubscribeUrl) window.open(pendingSubscribeUrl, "_blank", "noopener,noreferrer");
    return;
  }

  subscribeWarning.hidden = false;
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

const setAccentMenuOpen = (isOpen) => {
  accentSelect?.classList.toggle("is-open", isOpen);
  accentTrigger?.setAttribute("aria-expanded", String(isOpen));
  if (accentMenu) accentMenu.hidden = !isOpen;
};

const setSettingSelectOpen = (select, trigger, menu, isOpen) => {
  select?.classList.toggle("is-open", isOpen);
  trigger?.setAttribute("aria-expanded", String(isOpen));
  if (menu) menu.hidden = !isOpen;
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
};

const readClipboardText = async () => {
  if (!navigator.clipboard?.readText) return "";
  try {
    return (await navigator.clipboard.readText()).trim();
  } catch {
    return "";
  }
};

const setPasteButtonState = (button, text) => {
  contextClipboardText = text;
  button.disabled = text.length === 0;
  button.setAttribute("aria-disabled", String(text.length === 0));
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
    localStorage.getItem("profile-setting-custom-context-menu") === "false" ||
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
  const copySelectionButton = contextMenu.querySelector('[data-context-action="copy-selection"]');
  if (copySelectionButton) copySelectionButton.hidden = selectedText.length === 0;
  const openLinkButton = contextMenu.querySelector('[data-context-action="open-link"]');
  const copyLinkButton = contextMenu.querySelector('[data-context-action="copy-link"]');
  const saveImageButton = contextMenu.querySelector('[data-context-action="save-image"]');
  if (openLinkButton) openLinkButton.hidden = !contextTargetLink;
  if (copyLinkButton) copyLinkButton.hidden = !contextTargetLink;
  if (saveImageButton) {
    saveImageButton.disabled = !contextTargetImage;
    saveImageButton.setAttribute("aria-disabled", String(!contextTargetImage));
  }

  const menuRect = contextMenu.getBoundingClientRect();
  const margin = 10;
  const x = Math.min(event.clientX, window.innerWidth - menuRect.width - margin);
  const y = Math.min(event.clientY, window.innerHeight - menuRect.height - margin);

  contextMenu.style.left = `${Math.max(margin, x)}px`;
  contextMenu.style.top = `${Math.max(margin, y)}px`;
  updateContextPasteState();
};

const writeClipboardText = async (text) => {
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
    document.execCommand?.("copy");
    fallback.remove();
  }
};

const copyPageLink = async () => {
  await writeClipboardText(window.location.href);
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

const handleContextMenuAction = async (action) => {
  closeContextMenu();

  if (action === "close") return;

  if (action === "copy") {
    await copyPageLink();
    return;
  }

  if (action === "copy-selection") {
    const selectedText = getSelectedText();
    if (selectedText) await writeClipboardText(selectedText);
    return;
  }

  if (action === "open-link") {
    if (contextTargetLink) window.open(contextTargetLink.href, "_blank", "noopener,noreferrer");
    return;
  }

  if (action === "copy-link") {
    if (contextTargetLink) await writeClipboardText(contextTargetLink.href);
    return;
  }

  if (action === "save-image") {
    saveContextImage();
    return;
  }

  if (action === "copy-title") {
    await writeClipboardText(document.title || window.location.href);
    return;
  }

  if (action === "paste") {
    await pasteClipboardText();
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
    window.print();
    return;
  }

  if (action === "source") {
    window.open(`view-source:${window.location.href}`, "_blank", "noopener,noreferrer");
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
    window.location.href = "/settings";
  }
};

const addRipple = (event) => {
  if (event.button !== 0) return;

  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  const isSidebarNav =
    target.matches(".nav-links a") &&
    document.documentElement.dataset.navLayout === "sidebar" &&
    window.matchMedia("(min-width: 1024px)").matches;
  const isMobileNav =
    target.matches(".nav-links a") &&
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
    document.execCommand?.("copy");
  }

  shareLinkButton?.classList.add("is-copied");
  shareLinkButton?.setAttribute("aria-label", translate("share.copied"));
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
  await writeClipboardText(qrUrl?.value || window.location.href);
  if (qrStatus) qrStatus.hidden = false;
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

const showLoadingBar = () => {
  if (!loadingBar) return;

  loadingBar.classList.remove("is-hidden", "is-complete");
  setLoadingProgress(0.2);
  window.requestAnimationFrame(() => setLoadingProgress(0.72));
};

const finishLoadingBar = () => {
  if (!loadingBar) return;

  setLoadingProgress(0.94);
  window.setTimeout(() => {
    loadingBar.classList.add("is-complete");
    window.setTimeout(() => loadingBar.classList.add("is-hidden"), 260);
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

createShareDialog();
createSiteSearchDialog();
createQrDialog();
setLanguage(currentLanguage);
if (homeTabs.length) {
  const activeHomeTab =
    homeTabs.find((button) => button.classList.contains("is-active"))?.dataset.homeTab ||
    homeTabs[0].dataset.homeTab;
  selectHomeTab(activeHomeTab);
}
setupSiteSearch();
setupOfflineRetry();
setTheme(getInitialTheme());
setupSettingToggles();
setupNavLayoutDialog();
setupContextMenuModeDialog();
setupFastRenderSwipe();
setupToggleRightTrack();
setupBrandLogo();
setDensity(localStorage.getItem("profile-density") || "comfortable");
setKidMode(localStorage.getItem("profile-setting-kid-mode") || "off");
setupPremiumAccentLocks();
setAccent(localStorage.getItem("profile-accent") || "neutral");
setCurrency(localStorage.getItem("profile-currency") || (currentLanguage === "ko" ? "krw" : "usd"));
updateStorageEstimate();

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

mobileMenuButton?.addEventListener("click", () => {
  const topbar = mobileMenuButton.closest(".topbar");
  setMobileMenuOpen(!topbar?.classList.contains("is-open"));
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
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
scrollActionButtons.forEach((button) => {
  button.addEventListener("click", () => scrollPageTo(button.dataset.scrollTo));
});
actionButtons.forEach((button) => {
  button.addEventListener("click", () => goToActionUrl(button));
});
contextMenuActions.forEach((button) => {
  button.addEventListener("click", () => {
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
    closeNavLayoutDialog();
    closeContextMenuModeDialog();
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
