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
              새로운 기술에 도전하는 프론트엔드 개발자
            </p>
          </div>
          <a href="/portfolio" className="more">Portfolio ↗</a>
        </article>

        {/* CREDENTIALS */}
        <article className="card about-card small-card">
          <h3 className="card-title">Credentials</h3>
          <ul className="bullets">
            <li>계원예술대학교 디지털미디어디자인 – 프로그래밍 세부전공</li>
          </ul>
          <a className="ghost-link" href="/history">More about me ↗</a>
        </article>

        {/* SERVICES */}
        <article className="card about-card services-card">
          <h3 className="card-title">Services I Offer</h3>
          <ul className="pills">

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
            <span className="tech">HTML,CSS</span>
            <span className="tech">JavaScript</span>
          </div>
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
            <div className="stat-num">02</div>
            <div className="stat-label">Years learning</div>
          </div>
          <div className="stat">

          </div>
          <div className="stat">

          </div>
        </article>

        {/* CTA */}
        <article className="card about-card cta-card">
          <div>
            <h2 className="cta-title"></h2>
            <p className="muted"></p>
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
