import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import molloLogo from "../../assets/images/mollo-logo.svg";

const Navbar = () => {
  const [isNavItemOpen, setIsNavItemOpen] = useState(false);

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
        <Link to="/auth">Login</Link>
        <Link to="/auth">
          <Button variant="purple" content="Sign Up" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
