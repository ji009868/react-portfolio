import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import History from './History.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';

function App() {
  const graduationDate = new Date('2025-12-31');
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
      const today = new Date();
      const differenceInTime = graduationDate.getTime() - today.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setRemainingDays(differenceInDays);
  }, []);

  return (
    <>
      <h1>👨‍💻 000의 포트폴리오 사이트</h1>
      <div>
          <h2>🎓 졸업까지 D-{remainingDays}</h2>
      </div>
      <nav>
        <Link to="/history">📜 이력</Link> | {" "}
        <Link to="/portfolio">🖼️ 포트폴리오</Link> | {" "}
        <Link to="/about">🙋‍♂️ 자기소개</Link>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
