// src/App.jsx
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import History from "./pages/History.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
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
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/history">History</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* 라우팅 영역 */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </div>

      {/* 푸터 */}
      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} BAE JUNIL
        </div>
      </footer>
    </>
  );
}

export default App;
