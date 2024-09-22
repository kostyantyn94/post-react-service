import { Link } from "react-router-dom";
import SourceCodeLink from "../SourceCodeLink";

function Footer() {
  return (
    <div className="container">
      <Link to="/" className="logo-font">
        conduit
      </Link>
      <span className="attribution">
        Made by{" "}
        <a
          href="https://github.com/kostyantyn94"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kostyantyn Karimov
        </a>{" "}
        using React, Node,js, Sequelize, MySQL
      </span>

      <SourceCodeLink right />
    </div>
  );
}

export default Footer;
