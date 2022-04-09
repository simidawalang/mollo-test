import React from "react";
import { Link } from "react-router-dom";
import molloLogo from "../../assets/images/mollo-logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={molloLogo} alt="Mollo Logo" width={100} height={25} />
    </nav>
  );
};

export default Navbar;
