import React from "react";
import styles from "./ThankyouPopup.module.scss";

const ThankyouPopup = () => {
  return (
    <div className={styles.ThankyouPopup}>
      <div className={styles.ThankyouPopupContent}>
        <h2>Thank you for Joining 😁</h2>
      </div>
    </div>
  );
};

export default ThankyouPopup;
