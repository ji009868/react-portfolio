import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import "./PortfolioDetail.css";

export default function PortfolioDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const p = projects.find((x) => x.id === id);

  if (!p) {
    return (
      <main className="page">
        <h2>Not Found</h2>
        <p>프로젝트를 찾을 수 없습니다.</p>
        <Link className="btn" to="/portfolio">← Back to Portfolio</Link>
      </main>
    );
  }

  return (
    <main className="page detail-page">
      <div className="detail-topbar">
        <button className="ghost" onClick={() => nav(-1)}>← Back</button>
        <div className="spacer" />
        <span className="chip">{p.industry}</span>
        <span className="chip">{p.year}</span>
      </div>

      <header className="detail-hero">
        <div className="hero-media">
          <img src={p.cover} alt={`${p.title} cover`} />
        </div>
        <div className="hero-info">
          <h1>{p.title}</h1>
          <p className="subtitle">{p.subtitle}</p>
          <p className="lead">{p.description}</p>
          <div className="chips">
            {p.tech.map((t) => (
              <span key={t} className="chip main">{t}</span>
            ))}
          </div>
          <div className="roles">
            <strong>Role</strong>
            <ul>{p.role.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
        </div>
      </header>

      {p.gallery?.length > 0 && (
        <section className="detail-gallery">
          {p.gallery.map((g, i) => (
            <figure key={g}>
              <img src={g} alt={`${p.title} ${i + 1}`} />
            </figure>
          ))}
        </section>
      )}

      <section className="detail-split">
        <div className="card">
          <h3>Process & Workflow</h3>
          <ol className="steps">
            {p.process.map((s, i) => <li key={i}><span className="num">{i+1}</span>{s}</li>)}
          </ol>
        </div>
        <div className="card">
          <h3>Result & Impact</h3>
          <ul className="bullets">
            {p.results.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
