import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../Components/Navbar'
import Main from '../Components/MainConent'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '../Components/firebaseConfig'

export default function Home() {

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Tax Beacon</title>
        <meta name="description" content="Tax Beacon, Property tax services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation signOut={signOutWithGoogle} user={user}/>

      <main className={styles.main}>
        <Main/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
