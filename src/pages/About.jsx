import "./About.css";

export default function About() {
  return (
    <main className="page about-page">
      <section className="container about-grid">
        {/* IDENTITY */}
        <article className="card about-card id-card">
          <div className="id-top">
            <div className="role">Frontend Developer</div>
            <h1 className="name">Bae Junil</h1>
            <p className="brief">
              React 기반의 인터랙션과 성능 최적화에 집중하는 프론트엔드 개발자.
              <br />
              데이터 흐름을 단순하게, UI를 명확하게.
            </p>
          </div>
          <a href="/portfolio" className="more">Portfolio ↗</a>
        </article>

        {/* CREDENTIALS */}
        <article className="card about-card small-card">
          <h3 className="card-title">Credentials</h3>
          <ul className="bullets">
            <li>계원예술대학교 디지털미디어디자인 – 프로그래밍 세부전공</li>
            <li>학업 성취 장학(1학년 2학기)</li>
            <li>GitHub · Vercel · Firebase 배포 경험</li>
          </ul>
          <a className="ghost-link" href="/history">More about me ↗</a>
        </article>

        {/* SERVICES */}
        <article className="card about-card services-card">
          <h3 className="card-title">Services I Offer</h3>
          <ul className="pills">
            <li>React SPA 설계/구현</li>
            <li>반응형 · 접근성(A11y) 적용</li>
            <li>Firebase 연동(Auth/DB/Storage)</li>
            <li>성능/번들 최적화</li>
            <li>디자인 핸드오프 · Figma 협업</li>
          </ul>
          <a className="ghost-link" href="/skills">See full skills ↗</a>
        </article>

        {/* SHOWCASE */}
        <article className="card about-card small-card">
          <h3 className="card-title">Showcase</h3>
          <ul className="bullets">
            <li>Project H — Emotional Hometown Kiosk</li>
            <li>Trip Tiny — Small Town Travel Guide</li>
          </ul>
          <a className="ghost-link" href="/portfolio">Projects ↗</a>
        </article>

        {/* TECH AXIS */}
        <article className="card about-card tech-card">
          <h3 className="card-title">Specialization</h3>
          <div className="tech-row">
            <span className="tech">React</span>
            <span className="tech">Router</span>
            <span className="tech">Firebase</span>
            <span className="tech">A11y</span>
          </div>
          <p className="muted">메인 스택 축 — 실무형 활용/구현 중심</p>
        </article>

        {/* SOCIAL */}
        <article className="card about-card social-card">
          <h3 className="card-title">Profiles</h3>
          <div className="link-row">
            <a href="https://github.com/ji009868" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="mailto:ji009868@naver.com">Email ↗</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </article>

        {/* STATS */}
        <article className="card about-card stats-card">
          <div className="stat">
            <div className="stat-num">03</div>
            <div className="stat-label">Years learning</div>
          </div>
          <div className="stat">
            <div className="stat-num">60+</div>
            <div className="stat-label">Collaborations</div>
          </div>
          <div className="stat">
            <div className="stat-num">100+</div>
            <div className="stat-label">UI components</div>
          </div>
        </article>

        {/* CTA */}
        <article className="card about-card cta-card">
          <div>
            <h2 className="cta-title">함께 해결할 문제가 있으신가요?</h2>
            <p className="muted">목표를 명확히 정의하고, 빠르게 가설을 검증합니다.</p>
          </div>
          <a
            className="btn btn-accent"
            href="mailto:ji009868@naver.com?subject=Collaboration%20Inquiry"
          >
            Let’s work together
          </a>
        </article>
      </section>
    </main>
  );
}
