// 통합 프로젝트 데이터 — 리스트/상세 공용
const projects = [
  {
    id: "project-h",
    title: "Project H",
    subtitle: "Emotional Hometown Kiosk — AI × React",
    year: "2025",
    industry: "Interactive / Exhibition",
    description:
      "AI 기반으로 개인의 감성을 해석해 ‘정서적 고향’ 이미지를 생성하는 인터랙티브 키오스크. React + Firebase로 제작하고 Electron으로 전시용 앱 패키징.",
    role: ["Front-end", "Prompt Design", "Firebase"],
    tech: ["React", "Firebase", "Firestore", "Functions", "Electron"],
    cover: "/thumb_projecth.jpg",
    gallery: ["/h_01.jpg", "/h_02.jpg", "/h_03.jpg"],
    process: [
      "문제정의: 관객의 ‘정서적 고향’을 데이터로 표현하기",
      "설계: 5문항 설문 → 키워드 매핑 → 프롬프트 생성",
      "개발: React Kiosk UI, Firestore 저장, Functions 이미지 생성",
      "전시: Electron 빌드, 통계 대시보드, SMS 공유",
    ],
    results: [
      "프롬프트 튜닝으로 ‘키워드-이미지’ 일치율 체감 향상",
      "전시 기간 평균 대기시간 20% 단축(로딩 최적화)",
      "참여자 피드백 기반 UI 배치 개선",
    ],
  },
{
  id: "pit-stop",
  title: "Pit Stop",
  subtitle: "F1 Fan Community — Node.js × Express",
  year: "2025",
  industry: "Web / Server Programming",
  description:
    "Node.js와 Express로 개발 중인 F1 팬 커뮤니티 웹사이트입니다. 경기 예측, 리뷰, 굿즈 쇼핑, 마이존 기능을 통해 팬들이 소통하고 참여할 수 있는 플랫폼을 구축하고 있습니다.",
  role: ["Full-stack", "Server Programming", "Database"],
  tech: ["Node.js", "Express", "MongoDB", "REST API"],
  cover: "/thumb_pitstop.jpg",
  gallery: ["/pit_01.jpg", "/pit_02.jpg"],
  process: [
    "서버 구축: Express 기반 MVC 구조 설정 및 미들웨어 설계",
    "DB 연동: MongoDB Atlas 연결 및 예측/투표/장바구니 CRUD 구현",
    "API 설계: /predict, /review, /shop 등 REST API 구성",
    "View Layer: EJS 템플릿 엔진을 활용한 SSR 페이지 렌더링",
    "기능 구현: 로그인, 예측, 리뷰, 쇼핑, 마이존 기능 제작 중",
  ],
  results: [
    "회원별 예측/리뷰/장바구니 데이터를 통합 관리",
    "Express 미들웨어(requestTime) 활용 카운트다운 타이머 구현",
    "DB 연동 및 라우팅 정상 작동 — UI 및 세부 기능 개발 중",
  ],
},
{
  id: "back-to-the-memory",
  title: "Back To The Memory",
  subtitle: "Interactive Web — SF Retro Motion",
  year: "2025",
  industry: "Web Interaction / Motion Design",
  description:
    "영화 ‘백 투 더 퓨처’의 타임머신을 모티브로 한 인터랙티브 웹 프로젝트입니다. ‘시간여행을 통한 추억 회상’을 주제로, SVG 애니메이션과 3D Transform을 활용해 감성적인 몰입 경험을 연출하고 있습니다.",
  role: ["Front-end", "Animation Design", "JS Logic"],
  tech: ["HTML", "CSS", "JavaScript", "SVG Animation"],
  cover: "/thumb_memory.jpg",
  gallery: ["/memory_01.jpg", "/memory_02.jpg"],
  process: [
    "기획: 과거 회상 콘셉트 설정 — SF + 레트로 무드 조화",
    "시각설계: 웜톤 조명, 어두운 배경으로 회상의 감성 연출",
    "SVG 애니메이션: 계기판, 불타는 바퀴자국 Keyframe 구현",
    "스크롤 트리거: 만화/음악/여행 섹션 등장 시 타임라인 모션 적용",
    "3D Transform: 이미지 및 오브젝트에 마우스 기울기 인터랙션 추가",
  ],
  results: [
    "SVG 애니메이션 완성 — 스크롤 기반 전환 효과 구현",
    "텍스트 애니메이션 및 시각효과 통합 중",
    "최종 인터랙션 완성 후 영상 클립으로 전환 예정",
  ],
},
  {
    id: "trip-tiny",
    title: "Trip Tiny",
    subtitle: "Small Towns Travel Guide",
    year: "2024",
    industry: "Web / UX",
    description:
      "각국의 소도시를 이미지 중심으로 소개하는 React 기반 여행 가이드. 추천/저장 플로우와 반응형 레이아웃 설계.",
    role: ["Front-end", "UI/UX"],
    tech: ["React", "React Router", "Responsive"],
    cover: "/thumb_triptiny.jpg",
    gallery: ["/t_01.jpg", "/t_02.jpg"],
    process: [
      "리서치: 소도시 데이터 구조 및 카드 디자인",
      "개발: 리스트/상세 라우팅, 상태 공유",
      "테스트: 모바일 우선 반응형 최적화",
    ],
    results: ["체류 시간 증가, 이탈률 감소", "추천 리스트 저장 기능 추가"],
  },
  {
    id: "sasha-sloan",
    title: "Sasha Sloan",
    subtitle: "Artist Website (HTML/CSS)",
    year: "2023",
    industry: "Web / Music",
    description:
      "뮤지션 소개 3페이지 사이트. JS 없이 CSS 전환만으로 부드러운 페이지 전환 구현.",
    role: ["Design", "Markup"],
    tech: ["HTML", "CSS"],
    cover: "/thumb_sasha.jpg",
    gallery: ["/s_01.jpg", "/s_02.jpg"],
    process: ["콘셉트 보드", "레이아웃/타이포", "CSS 전환 설계"],
    results: ["경량 페이지(로딩 빠름)", "명확한 정보 구조"],
  },
];

export default projects;
