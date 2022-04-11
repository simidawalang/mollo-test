import React from "react";
import DownloadLinks from "../../../components/ui/DownloadLinks";
import transferFundsImg from "../../../assets/images/register-img.svg";

const Register = () => {
  return (
    <section id="register">
      <img className="register-img" src={transferFundsImg} alt="" />
      <div className="purple-bg">
        <div className="register-info">
          <h2>Register For Free</h2>
          <p>
            Mollo is available on Google Play and the App Store. To enjoy
            ultimate financial security
          </p>
          <DownloadLinks />
        </div>
      </div>
    </section>
  );
};

export default Register;
