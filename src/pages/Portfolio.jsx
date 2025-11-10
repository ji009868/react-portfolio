import { Link } from "react-router-dom";
import "./Portfolio.css";
import projects from "../data/projects";

export default function Portfolio() {
  return (
    <main className="page portfolio-page">
      <h2>Portfolio</h2>
      <p style={{ color: "var(--muted)" }}>
        카드를 클릭하면 상세 페이지로 이동합니다.
      </p>

      <section className="portfolio-list">
        {projects.map((p, idx) => (
          <article
            key={p.id}
            className={`portfolio-item ${idx % 2 ? "reverse" : ""}`}
          >
            <Link className="thumb" to={`/portfolio/${p.id}`}>
              <img src={p.cover} alt={`${p.title} thumbnail`} />
            </Link>

            <div className="info">
              <div className="meta">
                <span className="industry">{p.industry}</span>
                <span className="year">{p.year}</span>
              </div>
              <h3 className="title">
                <Link to={`/portfolio/${p.id}`}>{p.title}</Link>
              </h3>
              <p className="subtitle">{p.subtitle}</p>
              <p className="desc">{p.description}</p>

              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
