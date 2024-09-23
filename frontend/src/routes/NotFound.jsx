import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className="not-found">
        <h1>404 Not Found</h1>
        <Link to="/">Go to home page</Link>
      </div>
    </div>
  );
}

export default NotFound;
