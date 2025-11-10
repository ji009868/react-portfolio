// Skills.jsx — 기술 및 포트폴리오 정리 섹션
// 컬러 시스템: #56AFDF / #FFD25F / #F5F7FB / #0F172A

export default function Skills() {
  return (
    <main className="page">
      <h2>Skills & Projects</h2>
      <p style={{ color: "var(--muted)" }}>
        교안 ‘툴 사용 능력 표기’를 참고하여 사용기술과 포트폴리오 프로젝트를
        정리했습니다.
      </p>

      {/* ========= Main Skills ========= */}
      <section style={{ marginTop: 24 }}>
        <h3>🧩 Main Skills</h3>
        <div className="grid-3" style={{ marginTop: 12 }}>
          <div className="card" style={{ padding: 16 }}>
            <h4>HTML</h4>
            <ul>
              <li>시맨틱 태그 구조를 이해하고 활용할 수 있습니다.</li>
              <li>HTML5 요소를 이용한 페이지 레이아웃 구성이 가능합니다.</li>
              <li>폼, 미디어, 테이블 요소를 활용할 수 있습니다.</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <h4>CSS</h4>
            <ul>
              <li>Flexbox와 Grid 시스템으로 레이아웃을 설계할 수 있습니다.</li>
              <li>keyframes를 이용한 애니메이션 효과를 구현할 수 있습니다.</li>
              <li>media query로 반응형 웹을 구성할 수 있습니다.</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <h4>JavaScript</h4>
            <ul>
              <li>DOM 조작 및 이벤트 처리를 이해하고 구현할 수 있습니다.</li>
              <li>fetch / async-await으로 비동기 통신을 구현할 수 있습니다.</li>
              <li>React, Node.js 등 라이브러리 연동이 가능합니다.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========= Sub Skills ========= */}
      <section style={{ marginTop: 32 }}>
        <h3>💻 Sub Skills</h3>
        <div className="grid-3" style={{ marginTop: 12 }}>
          <div className="card" style={{ padding: 16 }}>
            <h4>React / Next.js</h4>
            <p style={{ color: "var(--muted)" }}>
              컴포넌트 기반 설계, 라우팅, 상태 관리, 훅 활용, Firebase 연동 경험
            </p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <h4>Firebase / Node.js</h4>
            <p style={{ color: "var(--muted)" }}>
              Firestore 데이터 CRUD, Storage 이미지 업로드, Hosting 및 Functions
              구현 경험
            </p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <h4>Git / Github</h4>
            <p style={{ color: "var(--muted)" }}>
              Git 버전 관리와 협업 브랜치 전략, GitHub Pages 및 Actions 배포 경험
            </p>
          </div>
        </div>
      </section>

      {/* ========= Tools ========= */}
      <section style={{ marginTop: 32 }}>
        <h3>🛠️ Design & Tool</h3>
        <div className="grid-3" style={{ marginTop: 12 }}>
          <div className="card" style={{ padding: 16 }}>
            <h4>Figma</h4>
            <p style={{ color: "var(--muted)" }}>
              UI/UX 설계, 와이어프레임, 프로토타입 제작 및 팀 협업 경험
            </p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <h4>Illustrator / Photoshop</h4>
            <p style={{ color: "var(--muted)" }}>
              아이콘, 그래픽 에셋 제작 및 편집, 시각 디자인 요소 제작
            </p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <h4>After Effects / Premiere Pro</h4>
            <p style={{ color: "var(--muted)" }}>
              모션그래픽 제작, 영상 편집, 자막·색보정 등 후반작업 수행
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
