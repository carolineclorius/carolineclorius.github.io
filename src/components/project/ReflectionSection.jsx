import "./ReflectionSection.css";
import CheckIcon from "../../assets/images/shared/checkmark.svg";

function ReflectionSection({ items }) {
  if (!items?.length) return null;

  return (
    <section className="reflection">
      <h2 className="reflection__title">Reflection</h2>

      <ul className="reflection__list">
        {items.map((item) => (
          <li key={item} className="reflection__item">
            <img
              src={CheckIcon}
              alt=""
              aria-hidden="true"
              className="reflection__icon"
            />

            <p className="reflection__text">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReflectionSection;
