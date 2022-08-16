import React, { useState, useEffect } from "react";
import styles from '../styles/SignUp.module.css'
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {GoogleButton} from 'react-google-button'
import { useNavigate } from "react-router-dom";


const SignUp = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function signUpRegular() {
    createUserWithEmailAndPassword(props.auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //navigation('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  return (
    <div className={styles.mainContainer}>
    <div className={styles.pageContainer}>
    <div className={styles.formContainer}>
      <h3 className={styles.h3}>Sign Up</h3>
      <GoogleButton type="light" className={styles.googleBtn} onClick={props.signIn}/>
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
        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
      </FloatingLabel>
      <FloatingLabel
        className={styles.formInput}
        controlId="floatingPassword"
        label="Password"
      >
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </FloatingLabel>
      <FloatingLabel
        className={styles.formInput}
        controlId="floatingName"
        label="First Name"
      >
        <Form.Control type="firstName" placeholder="First Name" />
      </FloatingLabel>
      <FloatingLabel
        className={styles.formInput}
        controlId="floatingName"
        label="Last Name"
      >
        <Form.Control type="lastName" placeholder="Last Name" />
      </FloatingLabel>
      <div className={styles.loginbtnwrapper}>
        <Button className={styles.loginbtn} onClick={() => {signUpRegular()}}>Sign Up</Button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SignUp;
