import "./About.css";
import { Link } from "react-router-dom";

const projects = [
  { id: "project-h", title: "Project H", cover: "/react-portfolio/project_h.png" },
  { id: "pit-stop", title: "Pit Stop", cover: "/react-portfolio/4.png" },
  { id: "back-to-the-memory", title: "Back To The Memory", cover: "/react-portfolio/5.png" },
  { id: "trip-tiny", title: "Trip Tiny", cover: "/react-portfolio/thumb_triptiny.png" },
  { id: "sasha-sloan", title: "Sasha Sloan", cover: "/react-portfolio/thumb_sasha.png" },
];

export default function About() {
  return (
    <main className="page about-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-badge">Frontend Developer</p>

          <h1 className="hero-title">
            새로운 기술을
            <br />
            <span className="text-gradient">깊이 있게 탐구합니다</span>
          </h1>

          <p className="hero-desc">
            변화하는 요구사항에 맞춰 유연하게 기술을 적용하는 개발자 <strong>배준일</strong>입니다.
          </p>

          <div className="hero-actions">
            <a
              href="/react-portfolio/%EC%9D%B4%EB%A0%A5%EC%84%9C_%EB%B0%B0%EC%A4%80%EC%9D%BC.pdf"
              download
              className="btn btn-accent"
            >
              이력서 다운로드
            </a>
          </div>
        </div>

        <div className="hero-bg-text">DEEP DIVE</div>
      </section>

      {/* 2. BENTO GRID SECTION */}
      <section className="container about-grid">
        {/* Identity Card */}
        <article className="card id-card">
          <div className="card-top">
            <div className="card-top-text">
              <span className="label">Profile</span>
              <h2 className="name">BAE JUNIL</h2>
              <p className="role-desc">
                새로운 기술을
                <br />
                깊이 있게 탐구합니다.
              </p>
            </div>
            <div className="profile-photo">
              <img src="/react-portfolio/profile.png" alt="Profile" />
            </div>
          </div>
          <Link to="/contact" className="link-arrow">
            Contact Me →
          </Link>
        </article>

        {/* Credentials (Education) */}
        <article className="card edu-card">
          <span className="label">Education</span>
          <h3 className="card-heading">계원예술대학교</h3>
          <p className="card-text">
            디지털미디어디자인과
            <br />
            프로그래밍 세부전공
          </p>
          <p className="card-subtext">2026.02 졸업</p>
        </article>

        {/* Showcase */}
        <article className="card showcase-card">
          <div className="card-header-row">
            <span className="label">All Works</span>
            <Link to="/portfolio" className="more-link">
              View List →
            </Link>
          </div>
          <div className="showcase-thumbs">
            {projects.map((p) => (
              <Link key={p.id} to={`/portfolio/${p.id}`} className="thumb-item">
                <img src={p.cover} alt={p.title} />
                <span className="thumb-overlay">{p.title}</span>
              </Link>
            ))}
          </div>
        </article>

        {/* Specialization */}
        <article className="card tech-card">
          <span className="label">Specialization</span>
          <div className="tech-list-wrapper">
            <div className="tech-group">
              <strong>Core & Frontend</strong>
              <div className="tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>React Router</span>
                <span>Zustand/Recoil</span>
              </div>
            </div>
            <div className="tech-group">
              <strong>Backend & Tools</strong>
              <div className="tags">
                <span>Firebase</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Git/GitHub</span>
                <span>Electron</span>
              </div>
            </div>
            <div className="tech-group">
              <strong>Design & Etc</strong>
              <div className="tags">
                <span>Figma</span>
                <span>Photoshop</span>
                <span>After Effects</span>
                <span>JLPT N3</span>
              </div>
            </div>
          </div>
          <Link to="/skills" className="link-arrow mt-auto">
            Details →
          </Link>
        </article>

        {/* CTA */}
        <article className="card cta-card">
          <div className="cta-content">
            <h2>Contact Me</h2>
          </div>
          <Link to="/contact" className="btn btn-accent">
            Let's Talk
          </Link>
        </article>
      </section>
    </main>
  );
}
