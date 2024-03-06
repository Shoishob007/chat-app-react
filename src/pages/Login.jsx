import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Nobaber Chat</span>
        <span className="title">Sign In</span>
        <form>
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>Don't have any account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
