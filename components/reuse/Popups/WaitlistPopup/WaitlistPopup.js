import React from "react";
import styles from "./WaitlistPopup.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import * as dispatcher from "../../../../redux/store/dispatchers";
import { connect } from "react-redux";

const WaitlistPopup = ({ dispatchWaitlistPopup, dispatchCommunityPopup }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatchWaitlistPopup(false);
    dispatchCommunityPopup(true);
  };

  return (
    <div className={styles.WaitlistPopup}>
      <div className={styles.WaitlistPopupContent}>
        <IoCloseOutline
          onClick={() => dispatchWaitlistPopup(false)}
          className={styles.WaitlistPopupClose}
        />

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

export default connect(null, dispatcher)(WaitlistPopup);
