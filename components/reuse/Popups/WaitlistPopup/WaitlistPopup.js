import React from "react";
import styles from "./WaitlistPopup.module.scss";

const WaitlistPopup = () => {
  return (
    <div className={styles.WaitlistPopup}>
      <div className={styles.WaitlistPopupContent}>
        <p>Join Waitlist</p>
      </div>
    </div>
  );
};

export default WaitlistPopup;
