import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import molloLogo from "../../assets/images/mollo-logo.svg";
import authImage from "../../assets/images/auth-img.png";

const Login = () => {
  return (
    <div className="auth">
      <Link to="/">
        <img
          src={molloLogo}
          alt="mollo logo"
          width={100}
          height={20}
          style={{ margin: "40px 100px" }}
        />
      </Link>
      <div className="auth-page">
        <form className="auth-form">
          <h1>Sign In to Mollo</h1>
          <p>
            Please enter your Mollo password and the email address associated
            with your account to sign in.
          </p>
          <div>
            <Input
              type="email"
              label="Email"
              placeholder="johndoe@example.com"
            />
            <Input type="password" label="Password" placeholder="******" />
          </div>
          <Button type="submit" variant="purple" content="Sign In" />

          <Link to="/auth/signup">
            Don't have an account? <strong>Sign up</strong>
          </Link>
        </form>
        <img src={authImage} alt="placeholder" />
      </div>
    </div>
  );
};

export default Login;
