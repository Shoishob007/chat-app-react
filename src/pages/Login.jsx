import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Nobaber Chat</span>
        <span className="title">Sign In</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          {error && <span>There was an error!</span>}
        </form>
        <p>
          Don't have any account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
