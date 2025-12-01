import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import PortfolioDetail from "./pages/PortfolioDetail.jsx";
import "./App.css"; // 또는 index.css

function App() {
  const location = useLocation();
  const isAboutActive = location.pathname === "/" || location.pathname.startsWith("/about");

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <NavLink to="/about" className="brand">
            BAE <span>JUNIL</span>
          </NavLink>

          <div className="nav-right">
            <nav className="site-nav">
              <NavLink
                to="/about"
                className={() => `nav-link ${isAboutActive ? "active" : ""}`}
              >
                About
              </NavLink>
              <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Skills
              </NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Works
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Contact
              </NavLink>
            </nav>

            <a
              href="/react-portfolio/%EC%9D%B4%EB%A0%A5%EC%84%9C_%EB%B0%B0%EC%A4%80%EC%9D%BC.pdf"
              download
              className="nav-link nav-resume"
            >
              Resume
            </a>
          </div>
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
