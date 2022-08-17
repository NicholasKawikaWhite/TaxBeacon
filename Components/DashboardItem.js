import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import styles from './DashboardItem.module.css'

const DashBoardItem = (props) => {
  return (
      <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.flex}>State: {props.state}</div>
        <div className={styles.flex}>County: {props.county}</div>
        <div className={styles.flex}>Address: {props.address}</div>
      </div>
      </div>
  );
};

export default DashBoardItem;
