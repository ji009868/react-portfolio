import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import PortfolioDetail from "./pages/PortfolioDetail.jsx";
import "./App.css"; // 또는 index.css

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand">
            BAE <span>JUNIL</span>
          </Link>
          
          <nav className="site-nav">
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} BAE JUNIL. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;