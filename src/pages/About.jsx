import "./About.css";
import { Link } from "react-router-dom";

// ✅ 프로젝트 데이터를 파일 내부에 직접 정의 (경로 오류 방지용)
const projects = [
  {
    id: "project-h",
    title: "Project H",
    cover: "/react-portfolio/project_h.png",
  },
  {
    id: "pit-stop",
    title: "Pit Stop",
    cover: "/react-portfolio/4.png",
  },
  {
    id: "back-to-the-memory",
    title: "Back To The Memory",
    cover: "/react-portfolio/5.png",
  },
  {
    id: "trip-tiny",
    title: "Trip Tiny",
    cover: "/react-portfolio/thumb_triptiny.png",
  },
  {
    id: "sasha-sloan",
    title: "Sasha Sloan",
    cover: "/react-portfolio/thumb_sasha.png",
  },
];

export default function About() {
  return (
    <main className="page about-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-badge">Frontend Developer</p>
          
          <h1 className="hero-title">
            새로운 기술을 <br />
            <span className="text-gradient">깊이 있게 탐구합니다.</span>
          </h1>
          
          <p className="hero-desc">
            사용자의 경험을 설계하고 비즈니스 가치를 만드는 개발자 <strong>배준일</strong>입니다.
          </p>
          
          <div className="hero-actions">
            <a href="/resume.pdf" download className="btn btn-accent">
              Resume Download ↓
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
            <span className="label">Profile</span>
            <h2 className="name">BAE JUNIL</h2>
            <p className="role-desc">
              단순 구현을 넘어<br />
              원리를 이해하는 개발을 지향합니다.
            </p>
          </div>
          <Link to="/contact" className="link-arrow">Contact Me ↗</Link>
        </article>

        {/* Credentials (Education) */}
        <article className="card edu-card">
          <span className="label">Education</span>
          <h3 className="card-heading">계원예술대학교</h3>
          <p className="card-text">디지털미디어디자인 <br/> 프로그래밍 전공</p>
          {/* ✅ 수정됨: 졸업 시기 2026.02 */}
          <p className="card-subtext">2026.02 졸업</p>
        </article>

        {/* Showcase : 모든 프로젝트 매핑 */}
        <article className="card showcase-card">
          <div className="card-header-row">
            <span className="label">All Works</span>
            <Link to="/portfolio" className="more-link">View List ↗</Link>
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

        {/* ✅ Specialization : 모든 기술 스택 추가 */}
        <article className="card tech-card">
          <span className="label">Specialization</span>
          <div className="tech-list-wrapper">
            
            {/* Frontend Core */}
            <div className="tech-group">
              <strong>Core & Frontend</strong>
              <div className="tags">
                <span>React</span>
                <span>JavaScript(ES6+)</span>
                <span>HTML/CSS</span>
                <span>React Router</span>
                <span>Zustand/Recoil</span>
              </div>
            </div>

            {/* Backend & Tools */}
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

            {/* Design & Etc */}
            <div className="tech-group">
              <strong>Design & Etc</strong>
              <div className="tags">
                <span>Figma</span>
                <span>Photoshop</span>
                <span>After Effects</span>
              </div>
            </div>

          </div>
          <Link to="/skills" className="link-arrow mt-auto">Details ↗</Link>
        </article>

        {/* CTA */}
        <article className="card cta-card">
          <div className="cta-content">
            <h2>Let's build something great.</h2>
            <p>함께 성장할 준비가 되셨나요?</p>
          </div>
          <Link to="/contact" className="btn btn-accent">Let's Talk</Link>
        </article>

      </section>
    </main>
  );
}