import "./Skills.css";

export default function Skills() {
  return (
    <main className="page skills-page">
      <section className="skills-section container">
        <header className="skills-header">
          <h1 className="page-title">Skills</h1>
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
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/html.png" alt="" aria-hidden="true" />
                </span>
                HTML
              </h4>
              <ul>
                <li>
                  <span className="highlight">시맨틱 태그</span> 구조 설계 및{" "}
                  <span className="highlight">접근성</span>(A11y)을 고려한 마크업
                </li>
                <li>header, nav, main 등 의미론적 요소의 적절한 배치</li>
                <li>
                  폼·테이블 요소의 <span className="highlight">웹 표준 준수</span>{" "}
                  및 대체 텍스트 적용
                </li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/css.png" alt="" aria-hidden="true" />
                </span>
                CSS
              </h4>
              <ul>
                <li>
                  Flexbox·Grid를 활용한{" "}
                  <span className="highlight">반응형 레이아웃</span> 설계
                </li>
                <li>
                  Keyframes 및 Transition을 이용한{" "}
                  <span className="highlight">인터랙션 애니메이션</span> 구현
                </li>
                <li>Media Query를 적용하여 모바일/태블릿/데스크탑 환경 대응</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/javascript.webp" alt="" aria-hidden="true" />
                </span>
                JavaScript (ES6+)
              </h4>
              <ul>
                <li>
                  <span className="highlight">DOM 조작</span> 및 <span className="highlight">이벤트 위임</span> 처리
                </li>
                <li>
                  Async/Await 기반의{" "}
                  <span className="highlight">비동기 데이터 통신</span> 처리
                </li>
                <li>ES6 모듈 시스템을 활용한 재사용 가능한 함수 설계</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/react.png" alt="" aria-hidden="true" />
                </span>
                React
              </h4>
              <ul>
                <li>
                  Hooks(useState, useEffect
                  등)를 활용한 <span className="highlight">함수형 컴포넌트</span> 개발
                </li>
                <li>
                  재사용성을 고려한{" "}
                  <span className="highlight">컴포넌트 분리</span> 및 <span className="highlight">폴더 구조화</span>
                </li>
                <li>Custom Hooks를 활용한 비즈니스 로직 캡슐화</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/react.png" alt="" aria-hidden="true" />
                </span>
                React Ecosystem
              </h4>
              <ul>
                <li>
                  React Router를 이용한{" "}
                  <span className="highlight">SPA 라우팅</span> 및 <span className="highlight">동적 페이지 전환</span>
                  전환
                </li>
                <li>
                  Zustand/Recoil을 활용한{" "}
                  <span className="highlight">전역 상태 관리</span>
                </li>
                <li>React Query를 이용한 <span className="highlight">서버 데이터 캐싱</span> 및 <span className="highlight">동기화</span></li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/perf.svg" alt="" aria-hidden="true" />
                </span>
                Optimization
              </h4>
              <ul>
                <li>
                  Lazy Loading 및 Code Splitting을 통한{" "}
                  <span className="highlight">초기 로딩 속도 개선</span>
                </li>
                <li>Lighthouse 점수 개선을 위한 이미지 최적화 및 SEO 적용</li>
                <li>
                  불필요한 리렌더링 방지(useMemo, useCallback)를 통한 <span className="highlight">성능 최적화</span>
                </li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/api.png" alt="" aria-hidden="true" />
                </span>
                API / Network
              </h4>
              <ul>
                <li>
                  RESTful API 연동 및 <span className="highlight">에러 핸들링</span>
                </li>
                <li>환경 변수(.env)를 활용한 API 키 보안 관리</li>
                <li>Axios/Fetch API를 활용한 HTTP 요청 모듈화</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/git.png" alt="" aria-hidden="true" />
                </span>
                Git / Collaboration
              </h4>
              <ul>
                <li>
                  Git Flow 기반의 <span className="highlight">브랜치 전략</span>
                  운영
                </li>
                <li>Pull Request(PR) 및 코드 리뷰를 통한 협업 경험</li>
                <li>Notion/Slack을 활용한 팀 커뮤니케이션</li>
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
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/figma.svg" alt="" aria-hidden="true" />
                </span>
                Figma & Design
              </h4>
              <ul>
                <li>
                  디자이너와의 핸드오프 프로세스
                  이해
                </li>
                <li>디자인 시스템(컬러, 타이포, 간격)의 코드로의 이식</li>
                <li>프로토타이핑 툴 활용 및 UI 기획 참여</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/node.png" alt="" aria-hidden="true" />
                </span>
                Node.js
              </h4>
              <ul>
                <li>
                  Express 기반 미들웨어 설계와{" "}
                  <span className="highlight">REST API 라우팅</span>
                </li>
                <li>환경 변수로 비밀키를 분리하고 에러를 안전하게 처리</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/mongodb.svg" alt="" aria-hidden="true" />
                </span>
                Database
              </h4>
              <ul>
                <li>
                  MongoDB/Mongoose로 <span className="highlight">데이터 스키마 설계</span>
                </li>
                 <li>인덱스·관계 설계로 <span className="highlight">데이터 무결성</span> 유지</li>
                <li>Firebase Auth·Firestore + Storage/Hosting으로 <span className="highlight">인증·배포 일원화</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================
            ETC
        ========================== */}
        <section aria-labelledby="etc-skills">
          <h2 id="etc-skills" className="section-title">
            Etc.
          </h2>
          <div className="skill-grid">
            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/adobe.png" alt="" aria-hidden="true" />
                </span>
                Creative Tools
              </h4>
              <ul>
                <li>
                  Photoshop·Illustrator를 활용한{" "}
                  <span className="highlight">그래픽 에셋 편집</span>
                </li>
                <li>After Effects를 이용한 <span className="highlight">모션 그래픽</span> 이해</li>
              </ul>
            </div>

            <div className="card skill-card">
              <h4>
                <span className="skill-icon">
                  <img src="/react-portfolio/icon/globe.svg" alt="" aria-hidden="true" />
                </span>
                Language
              </h4>
              <ul>
                <li>일본어 JLPT N3 (기본 회화 및 독해 가능)</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}








