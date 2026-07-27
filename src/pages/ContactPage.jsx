// Import page styles
import "./ContactPage.css";

// Import the contact illustration
import contactImage from "../assets/images/contact-image.svg";

// Import contact icons
import mailIcon from "../assets/images/mail-icon.svg";
import phoneIcon from "../assets/images/phone-icon.svg";
import locationIcon from "../assets/images/location-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import resumeIcon from "../assets/images/resume-icon.svg";

function ContactPage() {
  return (
    <section className="page contact">
      <h1>Contact</h1>

      {/* Contact information and illustration */}
      <div className="contact__content">
        {/* Contact text and links */}
        <div className="contact__left">
          <h3 className="fed-h3">Let's talk</h3>

          <h3>And create something that makes a difference.</h3>

          {/* Contact details */}
          <div className="contact__info">
            <a href="mailto:carolinemajlandt@hotmail.com">
              <img src={mailIcon} alt="" />
              <span>carolinemajlandt@hotmail.com</span>
            </a>

            <a href="tel:+4540742142">
              <img src={phoneIcon} alt="" />
              <span>40 74 21 42</span>
            </a>

            <div>
              <img src={locationIcon} alt="" />
              <span>Aarhus C</span>
            </div>

            <a
              href="https://www.linkedin.com/in/caroline-majlandt-clorius-2a0347406/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="" />
              <span>LinkedIn</span>
            </a>

            <a href="/resume.pdf">
              <img src={resumeIcon} alt="" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Contact illustration */}
        <div className="contact__right">
          <img src={contactImage} alt="Caroline" />
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
