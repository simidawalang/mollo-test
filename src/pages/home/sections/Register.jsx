import React from "react";
import Pill from "../../../components/ui/Pill";

const Register = () => {
  return (
    <section id="register">
      <div className="purple-bg">
        <div>
          <h2>Register For Free</h2>
          <p>
            Mollo is available on Google Play and the App Store.To enjoy
            ultimate financial security
          </p>
          <a href="/">
          <Pill>PlayStore</Pill></a>
        </div>
      </div>
    </section>
  );
};

export default Register;
