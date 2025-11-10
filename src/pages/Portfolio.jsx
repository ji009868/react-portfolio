function Card({ title, desc, tags = [], href = '#', thumb = 'THUMB 1280×800' }) {
  return (
    <article className="proj-card">
      <div className="proj-thumb">{thumb}</div>
      <div className="proj-body">
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p style={{ margin: '6px 0 0', color: 'var(--muted)', fontSize: 14 }}>{desc}</p>
      </div>
      <div className="proj-meta">
        {tags.map((t) => <span key={t} className="tag">{t}</span>)}
        <a href={href} target="_blank" rel="noreferrer" className="tag" style={{ marginLeft: 'auto' }}>
          열기 ↗
        </a>
      </div>
    </article>
  );
}

function Portfolio() {
  const items = [
    {
      title: 'React Portfolio (본 사이트)',
      desc: '리액트 라우팅/깃허브 페이지 배포',
      tags: ['React', 'Vite', 'Router'],
      href: 'https://ji009868.github.io/react-portfolio/',
    },
    {
      title: 'Sasha Sloan Website',
      desc: '3페이지 구성 / 전환 / 아티스트 소개',
      tags: ['HTML', 'CSS'],
      href: 'https://ji009868.github.io/sashasloan1/',
    },
    {
      title: 'Small Towns (Trip Tiny)',
      desc: '소도시 여행 가이드 / 상세·리스트',
      tags: ['React', 'Routing', 'UI'],
      href: 'https://ji009868.github.io/small-towns/',
    },
    {
      title: 'NOLO KWDMD',
      desc: 'Firebase Hosting / 간단 페이지',
      tags: ['Firebase'],
      href: 'https://nolo-kwdmd.web.app/',
    },
    {
      title: 'ReadyMag — Nom Nom App',
      desc: '콘셉트 사이트',
      tags: ['ReadyMag', 'Design'],
      href: 'https://readymag.website/5453908',
    },
    {
      title: 'Life of Cat (묘생 초기)',
      desc: 'JS 선택형 인터랙션 실험',
      tags: ['JavaScript', 'Game'],
      href: 'https://ji009868.github.io/lifeofcat/',
    },
  ];

  return (
    <main className="page">
      <h2>Projects</h2>
      {/* TODO: Replace thumbnail placeholders with actual screenshots later */}
      <div className="grid-3" style={{ marginTop: 12 }}>
        {items.map((it) => (
          <Card key={it.title} {...it} />
        ))}
      </div>
    </main>
  );
}
export default Portfolio;
