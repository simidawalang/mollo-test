import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import molloLogo from "../../assets/images/mollo-logo.svg";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <img src={molloLogo} alt="Mollo Logo" width={100} height={25} />
      </a>
      <ul className="nav-list">
        <li>Company</li>
        <li>Features</li>
        <li>Help</li>
      </ul>
      <div className="auth-links">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">
          <Button variant="purple" content="Sign Up" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
