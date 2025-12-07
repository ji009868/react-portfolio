import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <main className="page portfolio-page">
      <div className="container">
        <header className="portfolio-header">
          <h1 className="page-title">Works</h1>
        </header>

        <div className="portfolio-list">
          {projects.map((p) => (
            <article key={p.id} className="portfolio-item">
              {/* 이미지 영역 */}
              <div className="thumb-area">
                <img src={p.cover} alt={p.title} />
              </div>

              {/* 텍스트 정보 영역 */}
              <div className="info-area">
                <div className="meta">
                  <span className="industry">{p.industry}</span>
                  <span className="year">{p.year}</span>
                </div>
                
                <h3 className="title">{p.title}</h3>
                <p className="subtitle">{p.subtitle}</p>
                <p className="desc">{p.description}</p>

                <div className="tech-tags">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                
                {/* 💡 카드 전체를 덮는 투명 링크 (접근성 및 클릭 편의성) */}
                <Link to={`/portfolio/${p.id}`} className="full-card-link">
                  <span className="sr-only">View Details for {p.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
