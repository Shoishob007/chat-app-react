import React, { useState } from "react";
import ProfileImage from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    console.log(displayName);
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      uploadTask.on(
        "state_changed",
        (snap) => console.log("received update"),
        (error) => {
          setError(true);
        },
        async () => {
          `enter code here`;
          const fileUrl = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(res.user, {
            displayName,
            photoURL: fileUrl,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: fileUrl,
          });

          await setDoc(doc(db, "userChats", res.user.uid),{})
        }
      );
    } catch (error) {
      setError(true);
    }
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
          {error && <span>There was an error!</span>}
        </form>
        <p>Already have an account? Sign In</p>
      </div>
    </div>
  );
};

export default Register;
