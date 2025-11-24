import { useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <main className={`page contact-page ${visible ? "fade-in" : ""}`}>
      <section className="contact-hero">
        <div className="container contact-container">
          <div className="contact-left">
            {/* 문구 수정: 더 진취적인 표현 */}
            <h1 className="headline">
              GOT A <br /> PROJECT?
            </h1>
            <p className="sub-text">
              새로운 가치를 만들 준비가 되셨나요?<br />
              비즈니스 문제를 기술로 해결해 드립니다.
            </p>
          </div>

          <div className="contact-right">
            <h3>Contact Info</h3>
            <a className="email-link" href="mailto:ji009868@naver.com">
              ji009868@naver.com ↗
            </a>
            
            <div className="sns-links">
              <a href="https://github.com/ji009868" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}