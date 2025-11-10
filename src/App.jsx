import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import History from './pages/History.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import PortfolioDetail from "./pages/PortfolioDetail.jsx";


function App() {
  return (
    <>
      {/* 상단 고정 헤더 */}
      <header className="site-header">
        <div className="container nav">
          <div className="brand">
            <span>BAE JUNIL</span>
          </div>
          <nav>
            <Link to="/about">나에 대해</Link>
            <Link to="/skills">기술 스택</Link>
            <Link to="/experience">경험</Link>
            <Link to="/portfolio">포트폴리오</Link>
            <Link to="/history">이력</Link>
            <Link to="/contact">연락하기</Link>
          </nav>
        </div>
      </header>

      {/* 라우팅 영역 */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </div>

      {/* 푸터 */}
      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} Bae Junil
        </div>
      </footer>
    </>
  );
}

export default App;
