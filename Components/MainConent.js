import React from "react";
import { Button, Text } from "react-bootstrap";
import Image from "next/image";
import styles from "../Components/MainContent.module.css";
import { useRouter } from 'next/router'

const Main = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
        <div className={styles.centered}>
            <h1>Tax Beacon</h1>
            {/* <h2>The Guiding Light in Property Info</h2> */}
            {/* <p>Quick and Up-to-Date Access to Property Tax Inforamtion</p> */}
            <p>The Guiding Light in Property Info</p>
            <Button onClick={() => {router.push('/search')}}>
              Search A Property Now
            </Button>
        </div>
      <div className={styles.flexBox}>
        <div className={styles.split}>
            <h1>Improving Your Workflow</h1>
        </div>
        <div className={styles.split}>
            <h1>Keeping You In Charge</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
