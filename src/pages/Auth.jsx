import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import authImage from "../assets/images/auth-img.png";

const Auth = () => {
  const [authState, setAuthState] = useState(false);

  const authStateHandler = () => {
    setAuthState(!authState);
  };

  return (
    <div className="auth-page">
      <form className="auth-form">
        <h1>Sign {authState ? "In" : "Up"} to Mollo</h1>
        <p>
          Please enter your Mollo password and the email address associated with
          your account to sign in.
        </p>
        <div>
          {!authState && (
            <>
              <Input type="text" label="Fullname" placeholder="John Doe" />
              <Input type="tel" label="Phone Number" placeholder="John Doe" />
            </>
          )}
          <Input type="email" label="Email" placeholder="johndoe@example.com" />
          <Input type="password" label="Password" placeholder="******" />
        </div>
        <Button type="submit" variant="purple" content={`Sign ${authState ? 'In': 'Up'}`} />
        <p onClick={authStateHandler}>
          {authState ? (
            <>
              Don't have an account? <strong>Sign up</strong>
            </>
          ) : (
            <>
              Already have an account? <strong>Sign in</strong>
            </>
          )}
        </p>
      </form>
      <img src={authImage} alt="placeholder" />
    </div>
  );
};

export default Auth;
