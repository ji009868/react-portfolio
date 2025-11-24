import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import "./PortfolioDetail.css";

export default function PortfolioDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const p = projects.find((x) => x.id === id);

  if (!p) {
    return (
      <main className="page detail-page error">
        <div className="container">
          <h2>Project Not Found</h2>
          <button onClick={() => nav("/portfolio")}>Back to List</button>
        </div>
      </main>
    );
  }

  return (
    <main className="page detail-page">
      <div className="container">
        {/* Top Navigation */}
        <div className="detail-nav">
          <button className="back-btn" onClick={() => nav(-1)}>← Back</button>
        </div>

        {/* Hero */}
        <header className="detail-hero">
          <h1 className="detail-title">{p.title}</h1>
          <p className="detail-sub">{p.subtitle}</p>
          
          <div className="detail-meta-grid">
            <div className="meta-item">
              <span className="label">Role</span>
              <div className="val">{p.role.join(", ")}</div>
            </div>
            <div className="meta-item">
              <span className="label">Year</span>
              <div className="val">{p.year}</div>
            </div>
            <div className="meta-item">
              <span className="label">Tech Stack</span>
              <div className="val tags">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </header>

        {/* Main Image */}
        <div className="detail-main-img">
          <img src={p.cover} alt={p.title} />
        </div>

        {/* Content Split */}
        <div className="detail-content">
          <section className="section-process">
            <h3>Process & Challenges</h3>
            <ol className="process-list">
              {p.process.map((step, i) => (
                <li key={i}>
                  <span className="num">{i + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="section-result">
            <h3>Result & Impact</h3>
            <ul className="result-list">
              {p.results.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </section>
        </div>
        
        {/* Gallery */}
        {p.gallery && (
          <section className="detail-gallery">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              {p.gallery.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt={`Gallery ${i}`} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}