import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../Avatar";
import Dropdownitem from "./Dropdownitem";
import userLogout from "../../services/userLogout";

function DropdownMenu() {
  const [dropdown, setDropdown] = useState(false);
  const { loggedUser, setAuthState } = useAuth();
  const { username, image } = loggedUser || {};

  const logout = () => {
    setAuthState(userLogout);
  };

  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <li className="nav-item dropdown">
      <div
        className="nav-link dropdown-toggle cursor-pointer"
        onClick={handleClick}
      >
        <Avatar alt={username} className="user-pic" src={image} />
        {username}
      </div>

      <div
        className="dropdown-menu"
        style={{ display: dropdown ? "block" : "none" }}
        onMouseLeave={handleClick}
      >
        <Dropdownitem
          icon="ion-person"
          text="Profile"
          url={`/profile/${username}`}
          state={loggedUser}
        />

        <Dropdownitem icon="ion-gear-a" text="Settings" url={`/settings`} />
        <div className="dropdown-divider"></div>
        <Dropdownitem icon="ion-log-out" text="Logout" handler={logout} />
      </div>
    </li>
  );
}

export default DropdownMenu;
