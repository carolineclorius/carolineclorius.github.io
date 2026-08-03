// Import the decorative frames used for the interest labels
import interestFrame1 from "../../assets/images/1interestframe.svg";
import interestFrame2 from "../../assets/images/2interestframe.svg";
import interestFrame3 from "../../assets/images/3interestframe.svg";
import interestFrame5 from "../../assets/images/5interestframe.svg";
import interestFrame6 from "../../assets/images/6interestframe.svg";

// Import the collage image
import groupPictures from "../../assets/images/grouppictures.svg";

// Import component styles
import "./AboutLife.css";

// Store the interest labels and their matching decorative frames
const interests = [
  { label: "Culture", frame: interestFrame1 },
  { label: "Travel", frame: interestFrame2 },
  { label: "Music", frame: interestFrame3 },
  { label: "Books", frame: interestFrame1 },
  { label: "Museums", frame: interestFrame5 },
  { label: "Exploring new places", frame: interestFrame5 },
  { label: "Quality time", frame: interestFrame6 },
];

function AboutLife() {
  return (
    <section className="about-life">
      {/* Text and interests */}
      <div className="about-life__text">
        <div>
          <h2 className="title">Beyond design</h2>

          <p className="about-life__description">
            Outside of design, I find inspiration in people, culture and new
            experiences. I enjoy travelling, reading, spending time with friends
            and family, and exploring everything from concerts and museums to
            festivals and stand-up.
          </p>
        </div>

        <div>
          <h2 className="title">I am inspired by</h2>

          {/* Generate the interest labels from the interests array */}
          <ul className="interest-list">
            {interests.map((interest) => (
              <li className="interest-item" key={interest.label}>
                {/* Decorative frame */}
                <img
                  src={interest.frame}
                  alt=""
                  aria-hidden="true"
                  className="interest-item__frame"
                />

                <p>{interest.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image collage */}
      <div className="about-gallery">
        <img
          src={groupPictures}
          alt="A collage of moments and experiences that inspire me"
          className="about-gallery__image"
        />
      </div>
    </section>
  );
}

export default AboutLife;
