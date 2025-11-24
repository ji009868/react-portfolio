import { useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 페이지가 마운트될 때 페이드인 트리거
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`page contact-page ${visible ? "fade-in" : ""}`}>
      {/* 화면 전체를 채우는 섹션 */}
      <section className="contact-block contact-hero">
        {/* LEFT */}
        <div className="contact-left">
          <h1 className="headline">NEED A WEBSITE?</h1>
          <p className="sub">프로젝트 문의는 아래 이메일로 연락 주세요.</p>

          {/* 워드마크 느낌의 큰 타이포 */}
          <div className="wordmark" aria-hidden="true">
            JUNIL
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <h3 className="right-title">Let’s talk</h3>

          <a
            className="email"
            href="mailto:ji009868@naver.com?subject=Project%20Inquiry%20from%20Portfolio"
          >
            ji009868@naver.com
          </a>

          <ul className="links">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Github (opens in new tab)"
              >
                Github ↗
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram (opens in new tab)"
              >
                Instagram ↗
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
