import React from "react";
import styles from "./WaitlistPopup.module.scss";

const WaitlistPopup = ({ setIsPop, setCommunityPopup }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPop(false);
    setCommunityPopup(true);
  };

  return (
    <div className={styles.WaitlistPopup}>
      <div className={styles.WaitlistPopupContent}>
        <form onSubmit={handleSubmit} action="">
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
