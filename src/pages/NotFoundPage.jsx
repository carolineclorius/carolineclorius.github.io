import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">
        The link points to a page that does not exist in the portfolio.
      </p>
      <Link className="button" to="/">
        Go to homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
