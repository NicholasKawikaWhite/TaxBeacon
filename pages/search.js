import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Search.module.css'
import Navigation from '../Components/Navbar'
import Main from '../Components/MainConent'
import LookupForm from '../Components/Lookup'
import { Form, Button, } from 'react-bootstrap'
import {useRouter} from 'next/router';
import { auth } from '../Components/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const Search = () => {
  const router = useRouter();
  const [user] = useAuthState(auth)

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        console.log(user);

      })
      .catch((error) => {
        // An error happened.
      });
  };
  
  useEffect(() => {
    if(!user){
      router.push('/SignIn')
    }
  })

  const [state, setState] = useState(null);
  const [county, setCounty] = useState(null);
  const [address, setAddress] = useState(null);

  const readFormWriteData = async () => {
    try {
      const docRef = await addDoc(collection(db, "searches"), {
        createdAt: serverTimestamp(),
        state: state,
        county: county,
        address: address,
        uid: props.user.uid,
        userEmail: props.user.email,
        name: props.user.displayName,
      });
      console.log("Document written with ID: ", docRef.id);
      setState(null);
      setCounty(null);
      setAddress(null);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
    return ( 
<div className={styles.container}>
      <Head>
        <title>Tax Beacon</title>
        <meta name="description" content="Tax Beacons Stuffs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation user={user} signOut={signOutWithGoogle}/>

      <main className={styles.main}>
        <LookupForm/>
      </main>

    </div>
     );
}
 
export default Search;