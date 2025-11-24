import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="page about-page">
      {/* 1. HERO SECTION : 애플 스타일 대형 타이포 & 풀스크린 느낌 */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-badge">Frontend Developer</p>
          <h1 className="hero-title">
            사용자의 경험을 <br />
            <span className="text-gradient">설계하고 구현합니다.</span>
          </h1>
          <p className="hero-desc">
            단순한 코드 작성을 넘어,<br />
            비즈니스 문제를 해결하고 가치를 만드는 개발자 <strong>배준일</strong>입니다.
          </p>
          
          <div className="hero-actions">
            {/* History 페이지 대신 이력서 다운로드 버튼 배치 */}
            <a href="/resume.pdf" download className="btn btn-accent">
              Resume Download ↓
            </a>
          </div>
        </div>
        
        {/* 배경 장식용 흐릿한 텍스트 */}
        <div className="hero-bg-text">IMPACT</div>
      </section>

      {/* 2. BENTO GRID SECTION */}
      <section className="container about-grid">
        
        {/* Identity Card */}
        <article className="card id-card">
          <div className="card-top">
            <span className="label">Profile</span>
            <h2 className="name">BAE JUNIL</h2>
            <p className="role-desc">
              UX/UI에 대한 이해를 바탕으로<br />
              디자이너와 원활하게 소통합니다.
            </p>
          </div>
          <Link to="/contact" className="link-arrow">Contact Me ↗</Link>
        </article>

        {/* Credentials (Education) */}
        <article className="card edu-card">
          <span className="label">Education</span>
          <h3 className="card-heading">계원예술대학교</h3>
          <p className="card-text">디지털미디어디자인 <br/> (프로그래밍 전공)</p>
          <p className="card-subtext">2024.02 졸업</p>
        </article>

        {/* Showcase (이미지 썸네일 방식) */}
        <article className="card showcase-card">
          <div className="card-header-row">
            <span className="label">Featured Works</span>
            <Link to="/portfolio" className="more-link">View All ↗</Link>
          </div>
          <div className="showcase-thumbs">
            {/* 실제 데이터 이미지나 플레이스홀더 사용 */}
            <Link to="/portfolio/project-h" className="thumb-item">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" alt="Project H" />
              <span className="thumb-overlay">Project H</span>
            </Link>
            <Link to="/portfolio/trip-tiny" className="thumb-item">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80" alt="Trip Tiny" />
              <span className="thumb-overlay">Trip Tiny</span>
            </Link>
          </div>
        </article>

        {/* Specialization (Skills 요약) */}
        <article className="card tech-card">
          <span className="label">Specialization</span>
          <div className="tech-list-wrapper">
            <div className="tech-group">
              <strong>Core</strong>
              <div className="tags">
                <span>React</span>
                <span>JavaScript(ES6+)</span>
                <span>HTML/CSS</span>
              </div>
            </div>
            <div className="tech-group">
              <strong>Tools & Sub</strong>
              <div className="tags">
                <span>Firebase</span>
                <span>Figma</span>
                <span>Git/GitHub</span>
              </div>
            </div>
          </div>
          <Link to="/skills" className="link-arrow mt-auto">Details ↗</Link>
        </article>

        {/* Contact CTA */}
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