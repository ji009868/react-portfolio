import "./Skills.css";

export default function Skills() {
  return (
    <main className="page skills-page">
      <section className="skills-section container">
        <header className="skills-header">
          <h1 className="title">Skills &amp; Tools</h1>
        </header>

        {/* =========================
            MAIN — 업무 범위 중심
        ========================== */}
        <section aria-labelledby="main-skills">
          <h2 id="main-skills" className="section-title">
            Main Skills
          </h2>
          <div className="skill-grid">
            <div className="card skill-card">
              <h4>HTML</h4>
              <ul>
                <li>시맨틱 태그 구조 설계 및 접근성 고려 마크업 구현</li>
                <li>header, nav, main, article, aside, footer 요소 배치</li>
                <li>폼·미디어·테이블 요소 구성 및 레이블·대체 텍스트 적용</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>CSS</h4>
              <ul>
                <li>Flexbox·Grid를 활용한 반응형 레이아웃 설계</li>
                <li>@keyframes 기반 인터랙션 및 애니메이션 구현</li>
                <li>Media Query 적용을 통한 다양한 해상도 대응</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>JavaScript (ES6+)</h4>
              <ul>
                <li>DOM 조작 및 이벤트 처리 로직 구현</li>
                <li>fetch + async/await 기반 비동기 통신 구성</li>
                <li>모듈화·함수형 패턴을 활용한 재사용 가능한 코드 설계</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>React</h4>
              <ul>
                <li>Hooks(⟪useState, useEffect, useMemo⟫)를 활용한 SPA 구현</li>
                <li>컴포넌트 구조 및 상태 흐름 설계</li>
                <li>로딩·에러 상태 관리 및 UI 전환 애니메이션 구성</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>React Router / 상태관리</h4>
              <ul>
                <li>중첩 라우팅 및 동적 파라미터 기반 화면 전환 구성</li>
                <li>Zustand / React Query를 활용한 상태 관리 적용</li>
                <li>Lazy Loading 및 코드 스플리팅을 통한 초기 로딩 최적화</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>접근성 (A11y)</h4>
              <ul>
                <li>시맨틱 구조, 포커스 순서, 키보드 탐색 최적화</li>
                <li>명도 대비 및 ARIA 속성 적용</li>
                <li>스크린리더 환경 대응을 위한 대화형 요소 설계</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>API / 네트워킹</h4>
              <ul>
                <li>RESTful API 통신 및 오류 처리 로직 구성</li>
                <li>환경 변수(.env) 기반 API 키 관리 및 보안 설정</li>
                <li>검색·정렬·페이지네이션 비동기 데이터 처리 구현</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>Git / GitHub</h4>
              <ul>
                <li>GitHub Flow 기반 브랜치 전략 및 협업 워크플로우 운영</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>Firebase</h4>
              <ul>
                <li>Auth·Firestore·Storage·Hosting 통합 연동</li>
                <li>보안 규칙·인덱싱 설정을 통한 데이터 접근 제어</li>
                <li>Firebase Functions 기반 백엔드 로직 구현</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================
            SUB — 우대사항 중심
        ========================== */}
        <section aria-labelledby="sub-skills">
          <h2 id="sub-skills" className="section-title">
            Sub Skills
          </h2>
          <div className="skill-grid">
            <div className="card skill-card">
              <h4>Figma 협업</h4>
              <ul>
                <li>디자이너와의 컴포넌트 단위 공동 작업 프로세스 구축</li>
                <li>간격·색상·타이포 기준 핸드오프 가이드 반영</li>
                <li>프로토타입 기반 인터랙션 정의 및 구현</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>간단한 백엔드</h4>
              <ul>
                <li>Express·Firebase Functions 기반 REST API 구성</li>
                <li>라우팅·미들웨어 구조 설계 및 요청 검증 로직 적용</li>
                <li>로그·모니터링 환경 구축을 통한 안정성 확보</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================
            ETC — 확장 역량
        ========================== */}
        <section aria-labelledby="etc-skills">
          <h2 id="etc-skills" className="section-title">
            Etc.
          </h2>
          <div className="skill-grid">
            <div className="card skill-card">
              <h4>디자인 툴</h4>
              <ul>
                <li>Photoshop·Illustrator·After Effects를 활용한 그래픽·모션 제작</li>
                <li>3ds Max 모델링·렌더링 기초 작업 경험</li>
                <li>브랜딩 가이드 → UI 토큰 변환 및 적용</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>제2외국어</h4>
              <ul>
                <li>일본어 JLPT N3 수준 독해 및 기본 커뮤니케이션</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
