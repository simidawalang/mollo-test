import React from "react";
import molloLogo from "../../assets/images/mollo-logo.svg";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <img src={molloLogo} alt="Mollo Logo" width={100} height={25} />
      </a>
    </nav>
  );
};

export default Navbar;
