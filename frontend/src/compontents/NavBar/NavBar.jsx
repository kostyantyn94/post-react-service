import { Link } from "react-router-dom";
import NavItem from "../NavItem";
import SourceCodeLink from "../SourceCodeLink";

function NavBar() {
  const isAuth = false;

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>

        <SourceCodeLink left />

        <ul className="nav navbar-nav pull-xs-right">
          <NavItem text="Home" icon="ion-compose" url="/" />

          {isAuth && (
            <>
              <NavItem text="New Article" icon="ion-compose" url="/editor" />
            </>
          )}

          {!isAuth && (
            <>
              <NavItem text="Login" icon="ion-log-in" url="/login" />
              <NavItem text="Sign up" url="/register" />
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
