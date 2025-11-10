function Contact() {
  return (
    <main className="page">
      <h2>Contact</h2>
      <p style={{ color: 'var(--muted)' }}>
      </p>
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: 'grid', gap: 8 }}>
          <div><b>Email</b> — <a href="mailto:hello@yourmail.dev">ji009868@naver.com</a></div>
          <div><b>GitHub</b> — <a href="https://github.com/ji009868" target="_blank" rel="noreferrer">github.com/ji009868</a></div>
          <div><b>Portfolio</b> — <a href="https://ji009868.github.io/react-portfolio/" target="_blank" rel="noreferrer">react-portfolio</a></div>
        </div>
      </div>
    </main>
  );
}
export default Contact;
