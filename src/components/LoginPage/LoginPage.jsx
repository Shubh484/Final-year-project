import React from "react";
import { useState } from "react";

// icons
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

// style
import "./loginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("username:", username);
    console.log("password:", password);
  };

  const handleOnClick = () => {
    if (username === "shubh" && password === "1234") {
      console.log("loggedin");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <div className="login-form-wrapper">
        <div className="login">
          <h2>Member Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="username">
              <span className="icon">
                <FaUserAlt />
              </span>
              <input
                className="input-field"
                type="text"
                id="username"
                value={username}
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password">
              <span className="icon">
                <FaLock />
              </span>
              <input
                className="input-field"
                type="password"
                id="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button">
              <button
                className="btn-content"
                type="submit"
                onClick={handleOnClick}
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
