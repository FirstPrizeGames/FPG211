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
const clearCacheWarning = document.querySelector("[data-clear-cache-warning]");
const clearCacheCancel = document.querySelector("[data-clear-cache-cancel]");
const clearCacheConfirm = document.querySelector("[data-clear-cache-confirm]");
const clearCacheNote = document.querySelector("[data-clear-cache-note]");
const storageMeter = document.querySelector("[data-storage-meter]");
const storagePercent = document.querySelector("[data-storage-percent]");
const storageBar = document.querySelector("[data-storage-bar]");
const storageUsage = document.querySelector("[data-storage-usage]");
const shareLinkButton = document.querySelector("[data-share-link]");
const shareDialog = document.querySelector("[data-share-dialog]");
const shareClose = document.querySelector("[data-share-close]");
const shareCopy = document.querySelector("[data-share-copy]");
const shareUrl = document.querySelector("[data-share-url]");
const shareStatus = document.querySelector("[data-share-status]");
const shareTargets = [...document.querySelectorAll("[data-share-target]")];
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
const scrollActions = document.querySelector("[data-scroll-actions]");
const scrollActionButtons = [...document.querySelectorAll("[data-scroll-to]")];
const actionButtons = [...document.querySelectorAll("[data-go-url]")];
const mobileMenuButton = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const brandLogoImage = document.querySelector(".brand-logo img");
const feedbackOpen = document.querySelector("[data-feedback-open]");
const feedbackWarning = document.querySelector("[data-feedback-warning]");
const feedbackCancel = document.querySelector("[data-feedback-cancel]");
const feedbackConfirm = document.querySelector("[data-feedback-confirm]");
const feedbackFormUrl = "https://forms.gle/214q7yY6gbTUwK9u7";
const highlightTargets = [
  ...document.querySelectorAll(
    ".brand-logo, .nav-links a, .mobile-menu-button, .button, .feedback-cta, .contact-links a, .icon-button, .adblock-notice button, .settings-sidebar a, .faq-topic-nav a, .currency-switch button, .theme-segment button, .language-segment button, .density-segment button, .accent-trigger, .accent-menu button, .info-tabs button, .share-socials button, .scroll-actions button, .toggle",
  ),
];
const sections = navLinks
  .filter((link) => link.getAttribute("href")?.startsWith("#"))
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const translations = {
  ko: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.pricing": "Pricing",
    "nav.bio": "Bio",
    "nav.faq": "FAQ",
    "nav.settings": "Settings",
    "nav.feedback": "Feedback",
    "nav.menu": "메뉴",
    "faqTopics.emt": "EMT",
    "faqTopics.game": "게임 개발자",
    "faqTopics.meet": "만남",
    "faqTopics.site": "사이트",
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
    "home.contactTitle": "이 페이지를 공유하고 필요한 의견을 남겨주세요.",
    "feedback.eyebrow": "Feedback",
    "feedback.title": "의견을 남겨주세요.",
    "feedback.lead": "버그, 개선 아이디어, 보기 불편한 부분을 알려주시면 다음 업데이트에 반영할 수 있습니다.",
    "feedback.cta": "Google Forms로 피드백 남기기",
    "feedback.warningTitle": "외부 양식으로 이동합니다.",
    "feedback.warningBody": "Google Forms가 새 페이지에서 열립니다. 이름이나 연락처 같은 개인정보는 필요한 경우에만 입력해 주세요.",
    "feedback.cancel": "취소",
    "feedback.continue": "계속하기",
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
    "settings.profileBody": "검색과 공유 링크에서 역할과 소개 문구를 표시합니다.",
    "settings.contactTitle": "연락처 표시",
    "settings.contactBody": "Feedback 탭을 통해 문의와 개선 의견을 받을 수 있게 안내합니다.",
    "settings.profileOn": "프로필 공개 켜짐",
    "settings.profileOff": "프로필 공개 꺼짐",
    "settings.contactOn": "연락처 표시 켜짐",
    "settings.contactOff": "연락처 표시 꺼짐",
    "settings.fastRenderOn": "빠른 렌더링 켜짐",
    "settings.fastRenderOff": "빠른 렌더링 꺼짐",
    "settings.kidModeOn": "Kid mode 켜짐",
    "settings.kidModeOff": "Kid mode 꺼짐",
    "settings.themeTitle": "테마 모드",
    "settings.themeBody": "프로필 화면의 밝기를 라이트, 다크, 밝기 끄기 모드로 선택합니다.",
    "settings.lightsOff": "밝기 끄기",
    "settings.languageTitle": "언어",
    "settings.languageBody": "프로필과 설정 화면에 표시되는 언어를 선택합니다.",
    "settings.fastRenderTitle": "빠른 렌더링",
    "settings.fastRenderBody": "블러, 그림자, 애니메이션을 줄여 화면을 더 가볍게 표시합니다.",
    "settings.kidModeTitle": "Kid mode",
    "settings.kidModeBody": "더 큰 글자, 또렷한 대비, 줄어든 움직임으로 화면을 편하게 표시합니다.",
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
    "plans.teamPrice": "문의",
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
    "bio.likeThree": "현장에서 사람을 돕는 일",
    "bio.likeFour": "BBQ 파티",
    "bio.likeFive": "새로운 도구 배우기",
    "careerFaq.eyebrow": "FAQ",
    "careerFaq.title": "미국에서 응급구조사가 되는 기본 경로",
    "careerFaq.lead":
      "미국에서는 주마다 세부 요건이 다르지만, 일반적으로 EMT 교육, 국가 시험, 주 면허 과정을 거쳐 현장 응급의료 분야에 진입합니다.",
    "careerFaq.oneQuestion": "1. EMT와 Paramedic은 어떻게 다른가요?",
    "careerFaq.oneAnswer":
      "EMT는 응급의료 입문 단계로 기본 평가, CPR, 산소 투여, 출혈 조절, 기본 처치를 배웁니다. Paramedic은 더 긴 교육을 거쳐 약물 투여, 심전도 해석, 고급 기도 관리 같은 고급 처치를 수행할 수 있습니다.",
    "careerFaq.twoQuestion": "2. 시작하려면 무엇이 필요한가요?",
    "careerFaq.twoAnswer":
      "보통 고등학교 졸업 또는 GED, CPR/BLS 자격, 신원 조회, 예방접종 기록, 운전면허가 요구될 수 있습니다. 정확한 조건은 교육기관과 주 EMS 사무소 기준을 확인해야 합니다.",
    "careerFaq.threeQuestion": "3. EMT가 되는 순서는 어떻게 되나요?",
    "careerFaq.threeAnswer":
      "주 승인 EMT 과정을 수료하고, 실습과 임상 시간을 마친 뒤 NREMT 같은 인증 시험을 통과합니다. 이후 거주하거나 근무할 주에 면허를 신청하면 EMT로 일할 수 있습니다.",
    "careerFaq.fourQuestion": "4. Paramedic이 되려면 얼마나 걸리나요?",
    "careerFaq.fourAnswer":
      "EMT 이후 Paramedic 과정은 보통 1년에서 2년 정도 걸립니다. 프로그램에 따라 대학 학점, 임상 실습, 구급차 현장 실습, 국가 인증 시험이 포함됩니다.",
    "careerFaq.fiveQuestion": "5. 주마다 면허가 다른가요?",
    "careerFaq.fiveAnswer":
      "네. NREMT 인증은 많은 주에서 사용하지만, 실제 근무 권한은 주 면허와 지역 의료지침에 따릅니다. 이사하거나 다른 주에서 일하려면 해당 주의 EMS 사무소에서 상호 인정 또는 추가 요건을 확인해야 합니다.",
    "careerFaq.sixQuestion": "6. 준비할 때 중요한 점은 무엇인가요?",
    "careerFaq.sixAnswer":
      "체력, 의사소통, 침착한 판단, 팀워크가 중요합니다. 또한 지역 EMS 시스템, 병원 전 응급처치 기준, 환자 개인정보 보호 규정을 꾸준히 익히는 것이 도움이 됩니다.",
    "gameFaq.eyebrow": "FAQ",
    "gameFaq.title": "게임 개발자로 가는 기본 경로",
    "gameFaq.oneQuestion": "1. 게임 개발은 어디서 시작하면 좋나요?",
    "gameFaq.oneAnswer":
      "작은 게임을 직접 완성하는 것부터 시작하는 것이 좋습니다. Unity, Unreal Engine, Godot, Roblox Studio 중 하나를 고르고, 캐릭터 이동, 충돌, 점수, UI처럼 기본 기능을 만들어보면 전체 흐름을 빠르게 이해할 수 있습니다.",
    "gameFaq.twoQuestion": "2. 어떤 언어를 배우면 좋나요?",
    "gameFaq.twoAnswer":
      "Unity는 C#, Unreal Engine은 C++, Godot은 GDScript 또는 C#, Roblox는 Lua를 많이 사용합니다. 처음에는 엔진 하나와 언어 하나를 정해서 작게 반복하는 편이 더 안정적입니다.",
    "gameFaq.threeQuestion": "3. 포트폴리오는 어떻게 만들면 되나요?",
    "gameFaq.threeAnswer":
      "완성된 작은 게임 2~3개, 플레이 영상, 담당한 기능 설명, 문제를 어떻게 해결했는지 정리한 문서가 도움이 됩니다. 단순한 아이디어보다 실제로 플레이 가능한 결과물이 더 강합니다.",
    "gameFaq.fourQuestion": "4. 혼자 개발해도 괜찮나요?",
    "gameFaq.fourAnswer":
      "괜찮습니다. 처음에는 혼자 전체 과정을 경험해보는 것이 좋고, 이후에는 아트, 사운드, 기획, 프로그래밍 역할을 나누는 작은 팀 프로젝트를 해보면 협업 감각을 키울 수 있습니다.",
    "meetFaq.eyebrow": "FAQ",
    "meetFaq.title": "당신을 만날 수 있나요?",
    "meetFaq.oneQuestion": "1. 직접 만날 수 있나요?",
    "meetFaq.oneAnswer":
      "현재는 온라인 연락과 협업 문의를 먼저 받는 방식이 가장 좋습니다. 필요한 경우에는 일정, 목적, 장소, 안전한 만남 방식이 분명할 때 따로 논의할 수 있습니다.",
    "meetFaq.twoQuestion": "2. 어디로 연락하면 되나요?",
    "meetFaq.twoAnswer":
      "사이트의 Contact 링크나 Feedback 페이지를 통해 문의할 수 있습니다. 급하지 않은 내용은 목적과 필요한 정보를 함께 남겨주세요.",
    "siteFaq.eyebrow": "FAQ",
    "siteFaq.title": "사이트 운영 안내",
    "siteFaq.deployQuestion": "1. 사이트 배포는 어떻게 하나요?",
    "siteFaq.deployAnswer":
      "GitHub에 파일을 올리고 Vercel에서 프로젝트를 연결하면 배포할 수 있습니다. 이 사이트는 정적 페이지라서 Root Directory만 올바르게 지정하면 별도 빌드 없이 공개할 수 있습니다.",
    "siteFaq.contactQuestion": "2. 문의는 어디로 하면 되나요?",
    "siteFaq.contactAnswer":
      "상단 Feedback 탭을 통해 문의와 개선 의견을 보낼 수 있습니다. 일반 문의는 목적과 필요한 정보를 함께 남겨주세요.",
    "siteFaq.feedbackQuestion": "3. 피드백은 어떻게 남기나요?",
    "siteFaq.feedbackAnswer":
      "Feedback 페이지의 Google Forms 버튼을 통해 버그, 개선 아이디어, 보기 불편한 부분을 보낼 수 있습니다.",
    "siteFaq.privacyQuestion": "4. 개인정보는 어떻게 처리되나요?",
    "siteFaq.privacyAnswer":
      "이 사이트는 기본적으로 브라우저 로컬 저장소에 테마, 언어, 표시 설정만 저장합니다. Google Forms에 입력한 내용은 해당 양식의 제출 데이터로 처리됩니다.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.pricing": "Pricing",
    "nav.bio": "Bio",
    "nav.faq": "FAQ",
    "nav.settings": "Settings",
    "nav.feedback": "Feedback",
    "nav.menu": "Menu",
    "faqTopics.emt": "EMT",
    "faqTopics.game": "Game Developer",
    "faqTopics.meet": "Meet",
    "faqTopics.site": "Site",
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
    "home.contactTitle": "Share this page or send feedback when needed.",
    "feedback.eyebrow": "Feedback",
    "feedback.title": "Share your feedback.",
    "feedback.lead": "Send bugs, improvement ideas, or anything that feels uncomfortable to use so it can be improved in the next update.",
    "feedback.cta": "Leave feedback on Google Forms",
    "feedback.warningTitle": "You are leaving for an external form.",
    "feedback.warningBody": "Google Forms will open on a new page. Only enter personal information such as your name or contact details if it is necessary.",
    "feedback.cancel": "Cancel",
    "feedback.continue": "Continue",
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
      "Show your role and introduction in search and shared links.",
    "settings.contactTitle": "Contact visibility",
    "settings.contactBody":
      "Guide visitors to the Feedback tab for inquiries and improvement ideas.",
    "settings.profileOn": "Public profile on",
    "settings.profileOff": "Public profile off",
    "settings.contactOn": "Contact visibility on",
    "settings.contactOff": "Contact visibility off",
    "settings.fastRenderOn": "Fast rendering on",
    "settings.fastRenderOff": "Fast rendering off",
    "settings.kidModeOn": "Kid mode on",
    "settings.kidModeOff": "Kid mode off",
    "settings.themeTitle": "Theme mode",
    "settings.themeBody": "Choose a light, dark, or lights-off appearance for the profile.",
    "settings.lightsOff": "Lights Off",
    "settings.languageTitle": "Language",
    "settings.languageBody": "Choose the language used across the profile and settings pages.",
    "settings.fastRenderTitle": "Fast rendering",
    "settings.fastRenderBody": "Reduces blur, shadows, and animation so the interface renders more lightly.",
    "settings.kidModeTitle": "Kid mode",
    "settings.kidModeBody": "Makes the interface easier to read with larger text, stronger contrast, and reduced motion.",
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
    "plans.teamPrice": "Contact",
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
    "bio.likeThree": "Helping people in the field",
    "bio.likeFour": "BBQ Party",
    "bio.likeFive": "Learning new tools",
    "careerFaq.eyebrow": "FAQ",
    "careerFaq.title": "How to become an emergency medical provider in the United States",
    "careerFaq.lead":
      "Requirements vary by state, but the usual path starts with EMT training, a certification exam, and state licensure before moving into field emergency medical work.",
    "careerFaq.oneQuestion": "1. What is the difference between an EMT and a Paramedic?",
    "careerFaq.oneAnswer":
      "EMT is the entry level for emergency medical care and focuses on assessment, CPR, oxygen, bleeding control, and basic treatment. A Paramedic completes more training and may provide advanced care such as medications, ECG interpretation, and advanced airway management.",
    "careerFaq.twoQuestion": "2. What do you usually need before starting?",
    "careerFaq.twoAnswer":
      "Programs may require a high school diploma or GED, CPR/BLS certification, background checks, immunization records, and a driver's license. Exact requirements should be checked with the training program and the state EMS office.",
    "careerFaq.threeQuestion": "3. What is the basic EMT pathway?",
    "careerFaq.threeAnswer":
      "Complete a state-approved EMT course, finish required skills and clinical work, pass a certification exam such as the NREMT, then apply for licensure in the state where you plan to work.",
    "careerFaq.fourQuestion": "4. How long does it take to become a Paramedic?",
    "careerFaq.fourAnswer":
      "After EMT, Paramedic programs commonly take about one to two years. Depending on the program, they may include college credit, clinical rotations, ambulance field internships, and a national certification exam.",
    "careerFaq.fiveQuestion": "5. Is licensure different in each state?",
    "careerFaq.fiveAnswer":
      "Yes. NREMT certification is widely used, but the authority to work comes from state licensure and local medical protocols. If you move or work in another state, check that state's EMS office for reciprocity or extra requirements.",
    "careerFaq.sixQuestion": "6. What should someone focus on while preparing?",
    "careerFaq.sixAnswer":
      "Physical readiness, communication, calm judgment, and teamwork matter a lot. It also helps to keep learning local EMS systems, prehospital care standards, and patient privacy rules.",
    "gameFaq.eyebrow": "FAQ",
    "gameFaq.title": "A basic path toward becoming a game developer",
    "gameFaq.oneQuestion": "1. Where should game development start?",
    "gameFaq.oneAnswer":
      "Start by finishing a small playable game. Pick one tool such as Unity, Unreal Engine, Godot, or Roblox Studio, then build basics like character movement, collision, scoring, and UI to understand the full loop.",
    "gameFaq.twoQuestion": "2. Which programming language should you learn?",
    "gameFaq.twoAnswer":
      "Unity commonly uses C#, Unreal Engine uses C++, Godot uses GDScript or C#, and Roblox uses Lua. At first, it is usually better to choose one engine and one language, then repeat small projects.",
    "gameFaq.threeQuestion": "3. What should go into a portfolio?",
    "gameFaq.threeAnswer":
      "Two or three finished small games, gameplay videos, notes on the features you built, and short explanations of problems you solved can help. A playable result is stronger than an idea alone.",
    "gameFaq.fourQuestion": "4. Is solo development okay?",
    "gameFaq.fourAnswer":
      "Yes. Solo projects are useful for learning the whole process. Later, small team projects with art, sound, design, and programming roles can help you build collaboration skills.",
    "meetFaq.eyebrow": "FAQ",
    "meetFaq.title": "Can I meet you?",
    "meetFaq.oneQuestion": "1. Can we meet in person?",
    "meetFaq.oneAnswer":
      "For now, online contact and collaboration inquiries are the best first step. If needed, an in-person meeting can be discussed when the schedule, purpose, place, and safety expectations are clear.",
    "meetFaq.twoQuestion": "2. Where should I contact you?",
    "meetFaq.twoAnswer":
      "Use the Feedback page for inquiries or improvement ideas. For non-urgent messages, include the purpose and any useful details.",
    "siteFaq.eyebrow": "FAQ",
    "siteFaq.title": "Site operation guide",
    "siteFaq.deployQuestion": "1. How do I deploy the site?",
    "siteFaq.deployAnswer":
      "Upload the files to GitHub and connect the project in Vercel. Because this is a static site, it can be published without a separate build as long as the Root Directory is set correctly.",
    "siteFaq.contactQuestion": "2. Where should inquiries go?",
    "siteFaq.contactAnswer":
      "Use the Feedback tab in the top menu for inquiries or improvement ideas. For general inquiries, include the purpose and useful details.",
    "siteFaq.feedbackQuestion": "3. How can feedback be sent?",
    "siteFaq.feedbackAnswer":
      "Use the Google Forms button on the Feedback page to send bugs, improvement ideas, or anything that feels uncomfortable to use.",
    "siteFaq.privacyQuestion": "4. How is privacy handled?",
    "siteFaq.privacyAnswer":
      "By default, this site stores only theme, language, and display preferences in browser local storage. Anything entered in Google Forms is handled as form submission data.",
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
  updateStorageEstimate();
};

const getToggleLabelKey = (key, isOn) => {
  const labels = {
    "profile-public": isOn ? "settings.profileOn" : "settings.profileOff",
    "contact-visible": isOn ? "settings.contactOn" : "settings.contactOff",
    "fast-render": isOn ? "settings.fastRenderOn" : "settings.fastRenderOff",
    "kid-mode": isOn ? "settings.kidModeOn" : "settings.kidModeOff",
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
    document.documentElement.dataset.kidMode = isOn ? "true" : "false";
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
        document.documentElement.dataset.kidMode = nextValue ? "true" : "false";
      }
      updateSettingToggle(button, nextValue);
    });
  });
};

const setDensity = (density) => {
  document.documentElement.dataset.density = density;
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
    "profile-setting-fast-render",
    "profile-setting-kid-mode",
  ].forEach((key) => localStorage.removeItem(key));

  document.documentElement.dataset.theme = "light";
  document.documentElement.dataset.accent = "neutral";
  document.documentElement.dataset.fastRender = "false";
  document.documentElement.dataset.kidMode = "false";
  setLanguage("en");
  setDensity("comfortable");
  setCurrency("usd");
  setAccent("neutral");

  settingToggles.forEach((button) => {
    const defaultOn = !["fast-render", "kid-mode"].includes(button.dataset.toggleKey);
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
    if (storagePercent) storagePercent.textContent = "--";
    if (storageUsage) storageUsage.textContent = translate("settings.storageUsageUnsupported");
    if (storageBar) storageBar.style.transform = "scaleX(0)";
    return;
  }

  const estimate = await navigator.storage.estimate();
  const usage = estimate.usage || 0;
  const quota = estimate.quota || 0;
  const percent = quota > 0 ? Math.min((usage / quota) * 100, 100) : 0;

  if (storagePercent) storagePercent.textContent = `${percent.toFixed(percent < 1 ? 2 : 1)}%`;
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

const openFeedbackForm = () => {
  closeFeedbackWarning();
  window.open(feedbackFormUrl, "_blank", "noopener,noreferrer");
};

const setAccentMenuOpen = (isOpen) => {
  accentSelect?.classList.toggle("is-open", isOpen);
  accentTrigger?.setAttribute("aria-expanded", String(isOpen));
  if (accentMenu) accentMenu.hidden = !isOpen;
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

const closeShareDialog = () => {
  if (!shareDialog || shareDialog.hidden) return;

  shareDialog.classList.add("is-closing");
  window.setTimeout(() => {
    shareDialog.hidden = true;
    shareDialog.classList.remove("is-closing");
  }, 170);
};

const addRipple = (event) => {
  if (event.button !== 0) return;

  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
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
  const shareUrls = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  if (!shareUrls[target]) return;
  window.open(shareUrls[target], "_blank", "noopener,noreferrer,width=720,height=640");
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

setActiveLink();
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

setLanguage(currentLanguage);
setTheme(getInitialTheme());
setupSettingToggles();
setupToggleRightTrack();
setupBrandLogo();
setDensity(localStorage.getItem("profile-density") || "comfortable");
setupPremiumAccentLocks();
setAccent(localStorage.getItem("profile-accent") || "neutral");
setCurrency(localStorage.getItem("profile-currency") || (currentLanguage === "ko" ? "krw" : "usd"));
updateStorageEstimate();

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
scrollActionButtons.forEach((button) => {
  button.addEventListener("click", () => scrollPageTo(button.dataset.scrollTo));
});
actionButtons.forEach((button) => {
  button.addEventListener("click", () => goToActionUrl(button));
});
adblockDismiss?.addEventListener("click", () => {
  localStorage.setItem("adblock-notice-dismissed", "true");
  if (adblockNotice) adblockNotice.hidden = true;
});

document.addEventListener("click", (event) => {
  if (!accentSelect?.contains(event.target)) setAccentMenuOpen(false);

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
