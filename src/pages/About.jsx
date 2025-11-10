function About() {
    return (
        <main className="page">
            {/* Hero (제목/설명/컬러 토큰 노출) */}
            <section className="hero">
                <div className="meta">
                    <h1>배준일 — Frontend Portfolio</h1>
                    <p style={{ color: 'var(--muted)', margin: 0 }}>
                        새로운 기술에 도전하는 프론트엔드 개발자 배준일입니다.
                    </p>
                    <hr className="sep" />
                    <div className="meta-row">
                        <span className="tag">React</span>
                        <span className="tag">Next.js</span>
                        <span className="tag">Firebase</span>
                        <span className="tag">Electron</span>
                        <span className="tag">Figma</span>
                        <span className="tag">Adobe</span>
                    </div>
                </div>

                {/* 섬네일 박스 */}
                <aside className="card" style={{ padding: 16 }}>
                    <div className="thumb">THUMBNAIL 1280×800</div>
                    <p style={{ margin: '10px 0 0', fontSize: 14, color: 'var(--muted)' }}>
                    </p>
                </aside>
            </section>

            {/* 사용 기술 상세 나열 */}
            <section style={{ marginTop: 18 }}>
                {/* <h2>사용기술</h2>
                <ul style={{ marginTop: 8 }}>
                    <li><b>Frontend:</b> React, Next.js, JavaScript(ES6+), HTML, CSS</li>
                    <li><b>Infra:</b> Firebase (Firestore, Storage, Hosting, Functions)</li>
                    <li><b>App:</b> Electron (전시/키오스크 패키징)</li>
                    <li><b>Design:</b> Figma, Illustrator, Photoshop</li>
                    <li><b>Motion/Video:</b> After Effects, Premiere Pro</li>
                </ul> */}
            </section>
        </main>
    );
}
export default About;
