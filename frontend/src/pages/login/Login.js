import { useUser } from "context/userContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";

export const Login = () => {
  // toggling UI
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
  };
  const {
    state: { isAuthenticated, error},
    loginSubmitHandler,
    email,
    name,
    password,
    setEmail,
    setPassword,
    setName,
  } = useUser();
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login Successful ")
      navigate('/')
    }
    if(error){
      toast.error(error)
    }
  }, [isAuthenticated, error]);

  return (
    <main className="login-main">
      <div className="form-container">
        <div className="form-btn">
          <span id="register-toggler" onClick={toggleRegister}>
            Register
          </span>
          <span id="login-toggler" onClick={toggleLogin}>
            Login
          </span>
          <hr id="indicator" style={{ transform: indicatorTransform }} />
        </div>

        <form
          onSubmit={loginSubmitHandler}
          id="loginForm"
          style={{ transform: loginTransform }}
        >
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-outline" onClick={() => {setEmail("admin@gmail.com"); setPassword("password")}}>Login for Testing</button>
          <button type="submit" className="btn">
            Login
          </button>
          <a className="forgot-password" href="">
            Forgot Password
          </a>
        </form>

        <form action="" id="regForm" style={{ transform: regTransform }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </main>
  );
};
