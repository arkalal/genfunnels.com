import React from "react";
import styles from "./WaitlistPopup.module.scss";

const WaitlistPopup = () => {
  return (
    <div className={styles.WaitlistPopup}>
      <div className={styles.WaitlistPopupContent}>
        <form action="">
          <input placeholder="First Name" type="text" />
          <input placeholder="Last Name" type="text" />
          <input placeholder="Email" type="email" />

          <button type="submit">Submit and Join</button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistPopup;
