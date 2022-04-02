import React, { useState } from "react";
import "./login.css";

export const Login = () => {
  const [regTransform, setRegTransform] = useState("translateX(0)");
  const [loginTransform, setLoginTransform] = useState("translateX(0)");
  const [indicatorTransform, setIndicatorTransform] = useState(
    "translateX(6.25rem)"
  );

  const toggleLogin = () => {
    setRegTransform("translateX(0)");
    setLoginTransform("translateX(0)");
    setIndicatorTransform("translateX(6.25rem)");
  };

  const toggleRegister = () => {
    setRegTransform("translateX(18.75rem)");
    setLoginTransform("translateX(18.75rem)");
    setIndicatorTransform("translateX(0px)");
  }
  return (
    <main class="login-main">
      <div class="form-container">
        <div class="form-btn">
          <span id="register-toggler" onClick={toggleRegister}>Register</span>
          <span id="login-toggler" onClick={toggleLogin}>Login</span>
          <hr id="indicator" style={{transform: indicatorTransform}}/>
        </div>

        <form action="" id="loginForm" style={{transform: loginTransform}}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button class="btn btn-outline">Login for Testing</button>
          <button type="submit" class="btn">
            Login
          </button>
          <a class="forgot-password" href="">
            Forgot Password
          </a>
        </form>

        <form action="" id="regForm" style={{transform: regTransform}}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" class="btn">
            Register
          </button>
        </form>
      </div>
    </main>
  );
};
