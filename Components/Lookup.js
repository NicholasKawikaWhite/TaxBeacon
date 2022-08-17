import React, {useState, useEffect} from 'react';
import Image from "next/image";
import styles from "../Components/Lookup.module.css";
import Main from "../Components/MainConent";
import { Form, Button } from "react-bootstrap";
import { db } from './firebaseConfig';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut,
  } from "firebase/auth";
import {
	collection,
	getDocs,
	getFirestore,
	addDoc,
	serverTimestamp,
	deleteDoc,
  } from "firebase/firestore";
  import { useRouter } from 'next/router';
import { userAgentFromString } from 'next/server';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';

const LookupForm = () => {
	const [state, setState] = useState(null);
	const [county, setCounty] = useState(null);
	const [address, setAddress] = useState(null);
	const [warning, setWarning] = useState(null);
	const router = useRouter();
	const [user] = useAuthState(auth);

	const hi = async() => {
		const querySnapshot = await getDocs(collection(db, "posts"));
		console.log(querySnapshot);
	}


	const pushToDb = async() => {
		try {
			const docRef = await addDoc(collection(db, "searches"), {
			  createdAt: serverTimestamp(),
			  state: state,
			  county: county,
			  address: address,
			  uid: user.uid,
			});
			console.log("Document written with ID: ", docRef.id);
			setState(null);
			setCounty(null);
			setAddress(null);
		  } catch (e) {
			console.error("Error adding document: ", e);
		  }
	}

  return (
	  <div className={styles.mainContainer}>
		  <div className={styles.container}>
	<Form>
	<Form.Group className="mb-3" controlId="validationCustom02">
	  <Form.Label>State - Full Name</Form.Label>
	  <Form.Control
		type="State"
		placeholder="Ex: Ohio"
		value={state}
		autoFocus
		onChange={(e) => setState(e.target.value)}
	  />
	</Form.Group>
	<Form.Group className="mb-3" controlId="validationCustom02">
	  <Form.Label>County</Form.Label>
	  <Form.Control
		type="County"
		value={county}
		placeholder="Ex: Franklin"
		onChange={(e) => setCounty(e.target.value)}
	  />
	</Form.Group>
	<Form.Group className="mb-3" controlId="validationCustom02">
	  <Form.Label>Address - Number and Street Only</Form.Label>
	  <Form.Control
		type="Address"
		value={address}
		placeholder="Ex: 77-8402 Joel ln."
		onChange={(e) => setAddress(e.target.value)}
	  />
	</Form.Group>
	{warning ? <p>One or more fields is incomplete!!</p> : <p></p>}
	<Button
          onClick={() => {
            if(state != null && county != null && address != null){
              setWarning(false);
              pushToDb();
			  router.push('/dashboard')
            }else{
              setWarning(true)
            }

          }}
	>Submit</Button>
  </Form>
  </div>
  </div>
  );
};

export default LookupForm;

{/* <div className={styles.container}>
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Property Tax Key Number</Form.Label>
          <Form.Control id="TextInput" placeholder="Tax Key Number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">State</Form.Label>
          <Form.Select id="disabledSelect">
              <option>Select State</option>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">County</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Button className={styles.search} type="submit">Search</Button>
      </fieldset>
    </Form>
    </div> */}
