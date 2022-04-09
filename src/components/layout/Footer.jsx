import React from "react";
import logoFooter from "../../assets/images/mollo-footer-logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedIn from "../../assets/icons/linked-in.svg";
import youtube from "../../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <img src={logoFooter} alt="Mollo logo" width={147} height={35} />
        <div>
          <h3>Company</h3>
          <ul>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Media Center</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Enquiry</li>
          </ul>
        </div>
        <div>
          <div className="social-media-links">
              <img src={twitter} alt="twitter logo" />
              <img src={facebook} alt="facebook logo" />
              <img src={linkedIn} alt="linkedIn logo" />
              <img src={youtube} alt="youtube logo" />
              <img src={instagram} alt="instagram logo" />
          </div>
        </div>
      </div>
      <p className="copyright-text">Copyright © 2021 Mollo Technology. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
