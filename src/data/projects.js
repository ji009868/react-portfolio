const projects = [
  {
    id: "project-h",
    title: "Project H",
    subtitle: "Emotional Hometown Kiosk — AI × React",
    year: "2025",
    industry: "Interactive / Exhibition",
    description:
      "AI 기반으로 개인의 감성을 해석해 ‘정서적 고향’ 이미지를 생성하는 인터랙티브 키오스크. React + Firebase로 제작하고 Electron으로 전시용 앱 패키징",
    role: ["Front-end", "Back-end"],
    tech: ["React", "Firebase", "Electron"],
    cover: "/react-portfolio/project_h.png",
    gallery: [
      "/react-portfolio/project_h_1.png",
      "/react-portfolio/project_h_2.png",
      "/react-portfolio/project_h_3.png",
      "/react-portfolio/project_h_4.png",
    ],
    process: [
      { title: "문제정의", detail: "관객의 ‘정서적 고향’을 데이터로 표현하기" },
      { title: "설계", detail: "5문항 설문 → 키워드 매핑 → 프롬프트 생성" },
      { title: "개발", detail: "React Kiosk UI, Firestore 저장, Functions 이미지 생성" },
      { title: "전시", detail: "Electron 빌드, 통계 대시보드, SMS 공유" },
    ],
    results: [
      { title: "AI 프롬프트 튜닝 고도화", detail: "‘키워드→이미지’ 생성 일치율 향상" },
      { title: "로딩 구조 최적화", detail: "전시 기간 평균 대기시간 단축" },
      { title: "키오스크 UX 안정화", detail: "전시 중 오류·중단 없는 안정적 운영" },
      { title: "실시간 데이터 집계 구현", detail: "관객 참여 현황 파악 및 운영 효율 개선" },
    ],
  },
  {
    id: "pit-stop",
    title: "Pit Stop",
    subtitle: "F1 Fan Community — Node.js × Express",
    year: "2025",
    industry: "Web / Server Programming",
    description:
      "Node.js와 Express로 개발 중인 F1 커뮤니티 사이트. 경기 예측, 리뷰, 굿즈 쇼핑, 마이페이지 기능을 통해 팬들의 참여를 유도하는 플랫폼",
    role: ["Full-stack", "Server Programming", "Database"],
    tech: ["Node.js", "MongoDB", "REST API"],
    cover: "/react-portfolio/pitstop.png",
    gallery: [
      "/react-portfolio/pitstop.png",
      "/react-portfolio/pitstop_1.png",
      "/react-portfolio/pitstop_2.png",
    ],
    process: [
      { title: "서버 구축", detail: "Express 기반 MVC 구조 설정 및 공통 미들웨어 설계" },
      { title: "DB 연동", detail: "MongoDB Atlas 연결 후 예측/리뷰/장바구니 CRUD 구현" },
      { title: "API 설계", detail: "/predict, /review, /shop 등 REST API 구성" },
      { title: "View Layer", detail: "EJS 템플릿 엔진으로 SSR 페이지 렌더링" },
      { title: "기능 구현", detail: "로그인, 예측, 리뷰, 쇼핑, 마이페이지 기능 제작" },
    ],
    results: [
      "회원 예측/리뷰/장바구니 데이터 통합 관리",
      "Express 미들웨어(requestTime) 활용 카운터·타이머 구현",
      "DB 연동 이후에도 안정 동작하는 UI 에러 핸들링 기능 개발",
    ],
  },
  {
    id: "trip-tiny",
    title: "Trip Tiny",
    subtitle: "Small Towns Travel Guide",
    year: "2024",
    industry: "Web / UX",
    description:
      "각국의 소도시를 이미지 중심으로 소개하는 React 기반 여행 가이드. 추천/저장 플로우와 반응형 레이아웃 설계",
    role: ["Front-end"],
    tech: ["React"],
    cover: "/react-portfolio/thumb_triptiny.png",
    gallery: [
      "/react-portfolio/triptiny_1.png",
      "/react-portfolio/triptiny_2.png",
      "/react-portfolio/triptiny_3.png",
      "/react-portfolio/triptiny_4.png",
    ],
    process: [
      {
        title: "React 컴포넌트 구조 설계",
        detail: "재사용성을 고려하여 Header, Card, Grid Layout 등 UI 요소를 컴포넌트 단위로 모듈화",
      },
      {
        title: "데이터 바인딩 및 렌더링 최적화",
        detail: "JSON 형태의 소도시 데이터를 props로 전달하고 map()으로 동적 리스트 렌더링 구현",
      },
      {
        title: "반응형 갤러리 UI 구현",
        detail: "Flexbox와 CSS Grid로 데스크톱·태블릿·모바일에서 깨짐 없는 이미지 갤러리 구성",
      },
      {
        title: "GitHub Pages 배포 파이프라인 구축",
        detail: "gh-pages 패키지로 React 빌드 결과물을 정적 웹사이트로 자동 배포",
      },
    ],
    results: [
      { title: "컴포넌트 기반 개발", detail: "재사용성과 유지보수성이 높은 모듈형 구조 확립" },
      { title: "데이터 기반 UI 확장성 확보", detail: "데이터 추가만으로 콘텐츠가 확장되는 유연한 구조 구현" },
      { title: "SPA 경험 제공", detail: "페이지 새로고침 없이 부드러운 화면 전환과 빠른 로딩 속도 달성" },
      { title: "반응형 웹 최적화", detail: "모든 디바이스에서 일관된 사용자 경험과 시각적 완성도 유지" },
    ],
  },
  {
    id: "sasha-sloan",
    title: "Sasha Sloan",
    subtitle: "Artist Website (HTML/CSS)",
    year: "2024",
    industry: "Web / Music",
    description:
      "뮤지션 소개 3페이지 사이트. JS 없이 CSS 전환만으로 부드러운 페이지 전환 구현",
    role: ["Front-end"],
    tech: ["HTML", "CSS"],
    cover: "/react-portfolio/thumb_sasha.png",
    gallery: [
      "/react-portfolio/sasha_1.png",
      "/react-portfolio/sasha_2.png",
      "/react-portfolio/sasha_3.png",
      "/react-portfolio/sasha_4.png",
    ],
    process: [
      {
        title: "기획 및 콘셉트 정의",
        detail: "아티스트의 음악적 색깔(Melancholy, Dark Pop)을 시각화하기 위한 컬러 팔레트와 무드보드 설정",
      },
      {
        title: "정보 구조 설계 (IA)",
        detail: "사용자가 프로필·앨범·사진에 빠르게 도달하도록 탭 기반 직관적 내비게이션 구성",
      },
      {
        title: "반응형 UI 개발",
        detail: "PC/모바일 모두에서 이미지와 텍스트 가독성을 유지하는 반응형 그리드와 미디어 쿼리 구현",
      },
      {
        title: "미디어 최적화 및 배포",
        detail: "고해상도 앨범 아트·유튜브 영상 임베딩 시 로딩 지연 최소화, GitHub Pages로 정적 웹 호스팅",
      },
    ],
    results: [
      { title: "아티스트 아이덴티티 시각화", detail: "다크 테마 적용으로 음악적 분위기와 웹 디자인의 일체감 형성" },
      { title: "정보 탐색 경로 단축", detail: "직관적인 탭 메뉴 구조로 페이지 이탈률 감소 및 접근성 향상" },
      { title: "다양한 디바이스 호환성 확보", detail: "모바일/데스크톱 등 모든 환경에서 깨짐 없는 레이아웃 제공" },
      { title: "정적 웹 배포 최적화", detail: "별도 서버 구축 없이 안정적인 서비스 운영 및 유지보수 용이성 확보" },
    ],
  },
];

export default projects;
