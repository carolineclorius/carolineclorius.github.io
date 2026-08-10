import { Link } from "react-router";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <section className="page not-found">
      <div className="not-found_content">
        <h3 className="not-found_number">404</h3>
        <h1>Page not found</h1>
        <p className="not-found_text">
          Looks like this page got a little lost.
          <br />
          Let’s get you back to something meaningful.
        </p>
        <Link className="button" to="/">
          <h3>Go to homepage</h3>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
