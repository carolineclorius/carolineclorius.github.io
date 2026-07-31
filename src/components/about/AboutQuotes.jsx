// Import React state for changing between recommendations
import { useRef, useState } from "react";

// Import component styles
import "./AboutQuotes.css";

// Import the decorative quote frame
import quoteFrame from "../../assets/images/quoteframe.svg";

// Store the recommendations displayed in the quote carousel
const Quotes = [
  {
    quote:
      "Caroline is a very conscientious and loyal employee. She has approached new tasks with a positive attitude, and she is not afraid to take on new challenges.",
    secondParagraph:
      "Caroline is professionally skilled, as well as an outgoing and cheerful person who quickly settled in well at the school.",
    recommendation: "I give Caroline my highest recommendations.",
    name: "- Mette Lynge Jacobsen",
    role: "Head of department at Dybbøl-skolen",
  },
  {
    quote:
      "Caroline approaches design challenges with curiosity, structure and a strong focus on the people using the solution.",
    secondParagraph:
      "She is thoughtful in her process and contributes positively to collaborative work.",
    recommendation: "She is a reliable and engaged designer.",
    name: "- Example Name",
    role: "Example role",
  },
  {
    quote:
      "Caroline combines visual sensitivity with a strong ability to communicate ideas clearly.",
    secondParagraph:
      "She works independently while remaining open to feedback and new perspectives.",
    recommendation: "I would gladly work with Caroline again.",
    name: "- Example Name",
    role: "Example role",
  },
];

function AboutQuotes() {
  // Track which recommendation is currently displayed
  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef(0);

  // Get the active recommendation from the array
  const currentQuote = Quotes[activeIndex];

  const showPreviousQuote = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? Quotes.length - 1 : currentIndex - 1,
    );
  };

  const showNextQuote = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === Quotes.length - 1 ? 0 : currentIndex + 1,
    );
  };
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartX.current;
    const minimumSwipeDistance = 50;

    if (swipeDistance > minimumSwipeDistance) {
      showPreviousQuote();
    } else if (swipeDistance < -minimumSwipeDistance) {
      showNextQuote();
    }
  };

  return (
    <section className="quotes-section">
      <div
        className="quotes-card"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Decorative background shape */}
        <img
          src={quoteFrame}
          alt=""
          aria-hidden="true"
          className="about-quotes__shape"
        />

        <h2>What people say</h2>

        {/* Display the active recommendation */}
        <blockquote>
          <p>“{currentQuote.quote}</p>
          <p>{currentQuote.secondParagraph}</p>
          <p>{currentQuote.recommendation}”</p>
        </blockquote>

        {/* Recommendation author */}
        <footer>
          <p className="name">{currentQuote.name}</p>
          <p>{currentQuote.role}</p>
        </footer>

        {/* Navigation buttons for changing recommendation */}
        <div className="quotes-dots" aria-label="Show recommendation">
          {Quotes.map((item, index) => (
            <button
              key={item.name + index}
              type="button"
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show recommendation ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutQuotes;
