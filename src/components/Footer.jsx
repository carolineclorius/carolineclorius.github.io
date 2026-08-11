// Import component styles
import "./Footer.css";

// Import footer icons
import mailIcon from "../assets/images/mail-icon.svg";
import phoneIcon from "../assets/images/phone-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import resumeIcon from "../assets/images/resume-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      {/* Decorative divider */}
      <div className="footer__top"></div>

      {/* Footer content */}
      <div className="footer__content">
        {/* Footer heading */}
        <div className="footer__title">
          <h3>Contact</h3>
        </div>

        {/* Email link */}
        <a href="mailto:carolinemajlandt@hotmail.com" className="footer__item">
          <img src={mailIcon} alt="" aria-hidden="true" />
          <span>carolinemajlandt@hotmail.com</span>
        </a>

        {/* Phone link */}
        <a href="tel:+4540742142" className="footer__item">
          <img src={phoneIcon} alt="" aria-hidden="true" />
          <span>40 74 21 42</span>
        </a>

        {/* LinkedIn profile */}
        <a
          href="https://www.linkedin.com/in/caroline-majlandt-clorius-2a0347406/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__item"
        >
          <img src={linkedinIcon} alt="" aria-hidden="true" />
          <span>LinkedIn</span>
        </a>

        {/* Resume download */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__item"
        >
          <img src={resumeIcon} alt="" aria-hidden="true" />
          <span>Resume</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
