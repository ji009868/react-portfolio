import { useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`page contact-page ${visible ? "fade-in" : ""}`}>
      <div className="container">
        <h1 className="contact-title">Contact me</h1>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact Info</h3>
            <p className="contact-desc">
              이메일, 깃허브, 그리고 이력서를 통해 바로 연락하거나 프로필을 확인하세요.
            </p>

            <a className="email-link" href="mailto:ji009868@naver.com">
              ji009868@naver.com
            </a>

            <div className="sns-links">
              <a href="https://github.com/ji009868" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="/react-portfolio/%EC%9D%B4%EB%A0%A5%EC%84%9C_%EB%B0%B0%EC%A4%80%EC%9D%BC.pdf"
                download
              >
                이력서 다운로드
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>Send Message</h3>
            <form className="contact-form">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Your email" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="How can I help?"></textarea>
              </label>
              <button type="submit" className="btn btn-accent send-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
