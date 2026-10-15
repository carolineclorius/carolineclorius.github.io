import "./ReflectionSection.css";
import CheckIcon from "../../assets/images/shared/checkmark.svg";

function ReflectionSection({ items, title = "Reflection", hideIcon = false }) {
  if (!items?.length) return null;

  return (
    <section className="reflection">
      <h2 className="reflection__title">{title}</h2>

      <ul
        className={`reflection__list ${
          hideIcon ? "reflection__list--full" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item} className="reflection__item">
            {!hideIcon && (
              <img
                src={CheckIcon}
                alt=""
                aria-hidden="true"
                className="reflection__icon"
              />
            )}

            <p className="reflection__text">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReflectionSection;
