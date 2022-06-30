import React from "react";
import { Button, Text } from "react-bootstrap";
import Image from "next/image";
import styles from "../Components/MainContent.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
        <div className={styles.centered}>
            <h1>Tax Beacon</h1>
            <p>Quick and Up-to-Date Access to Property Tax Inforamtion</p>
        </div>
      <div className={styles.flexBox}>
        <div className={styles.split}>
            <h1>Improving Your Workflow</h1>
        </div>
        <div className={styles.split}>
            <h1>Brah</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
