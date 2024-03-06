import React from "react";
import ProfileImage from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Nobaber Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="profileImage" />
          <label htmlFor="profileImage">
            <img src={ProfileImage} alt="" />
            <span>Add your profile photo</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Sign In</p>
      </div>
    </div>
  );
};

export default Register;
