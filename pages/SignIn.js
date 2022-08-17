import React, { useState, useEffect } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import styles from "../styles/SignIn.module.css";
import { GoogleButton } from "react-google-button";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "../Components/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const SignIn = (props) => {

  const [user] = useAuthState(auth);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if(user){
      router.push('/');
    }
  })

  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        router.push('/search');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      })
  };

  function signInRegular() {
    signInWithEmailAndPassword(props.auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        console.log("made it");
        //redirect('/');
        // ...
      })
      .catch((error) => {
        console.log("nope");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className={styles.mainContainer}>
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h3 className={styles.h3}>Login</h3>
        <GoogleButton
          type="light"
          className={styles.googleBtn}
          onClick={() => {SignInWithGoogle()}}
        />
        <div className={styles.separator}>
          <div className={styles.line}></div>
          <p>Or</p>
          <div className={styles.line}></div>
        </div>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className={styles.formInput}
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          className={styles.formInput}
          controlId="floatingPassword"
          label="Password"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <div className={styles.loginbtnwrapper}>
          <Button
            className={styles.loginbtn}
            onClick={() => {
              signInRegular();
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
      <div className={styles.signupWrapper}>
        <div className={styles.flexChildL}>
          <p>
            Forgot Password?{" "}
            <a className={styles.loginOpacity} href="https://www.google.com">
              Reset
            </a>
          </p>
        </div>
        <div className={styles.flexChildR}>
          <p>
            Dont have an account?{" "}
            <a className={styles.loginOpacity} href="/signup">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
