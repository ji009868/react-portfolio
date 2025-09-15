import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import History from './pages/History.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import Dday from './Dday.jsx';

function App() {
  return (
    <>
      <h1>👨‍💻 배준일의 포트폴리오 사이트</h1>
      <header>
        <Dday />
      </header>
      <nav>
        <Link to="/about">🙋‍♂️ 나에 대해</Link> | {" "}
        <Link to="/skills">🛠️ 기술 스택</Link> | {" "}
        <Link to="/experience">📜 경험</Link> | {" "}
        <Link to="/contact">📞 연락하기</Link> | {" "}
        <Link to="/history">📜 이력</Link> | {" "}
        <Link to="/portfolio">🖼️ 포트폴리오</Link>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  )
}

export default App
