import React, {useEffect, useState} from 'react'
import { collection, doc, getDocs } from 'firebase/firestore';
import styles from '../styles/Dashboard.module.css'
import { auth, db } from '../Components/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navigation from '../Components/Navbar';
import DashBoardItem from '../Components/DashboardItem';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';



const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [userInquiries, setUserInquiries] = useState([]);
    const [uid, setUid] = useState();
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                getData(user.uid);
            }
            else{
                router.push('/');
            }
        })
    }, [])


    async function getData(userId){
        const querySnapshot = await getDocs(collection(db, 'searches'));
        const inquiries = [];
        querySnapshot.forEach((doc) => {
            console.log('the user id is')
            console.log(doc.data().uid)
            if(doc.data().uid === userId){
                console.log('ran through')
                inquiries.push({
                    state: doc.data().state,
                    county: doc.data().county,
                    address: doc.data().address,
                })
            }
        })
        setUserInquiries(inquiries);
    }

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        console.log(user);

      })
      .catch((error) => {
        // An error happened.
      });
  };
    return(
<div className={styles.container}>
<Navigation user={user} signOut={signOutWithGoogle}/>
<div className={styles.title}>Your Dashboard</div>
<div className={styles.main}>
    <div>Your Inquiries</div>
    {userInquiries.map((data) => {
        return(
        <DashBoardItem state={data.state} county={data.county} address={data.address}/>
        );
    })}
</div>
</div>
    );
}

export default Dashboard;