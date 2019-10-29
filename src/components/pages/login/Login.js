import React from "react";
import "../login/Login.css";

export default function Login() {
  return (
    <div className="login">
      <form action="post" className="login__form">
        <div className="login__header">Login</div>
        <div className="email">
          {/* <label htmlFor="email" className="email__label">
            Email
          </label> */}
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />{" "}
          <br />
        </div>
        <div className="password">
          {/* <label htmlFor="password" className="password__label">
            Password
          </label> */}
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" name="submit"></button>
      </form>
    </div>
  );
}
