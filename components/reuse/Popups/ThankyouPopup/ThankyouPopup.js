import React from "react";
import styles from "./ThankyouPopup.module.scss";
import * as dispatcher from "../../../../redux/store/dispatchers";
import { connect } from "react-redux";

const ThankyouPopup = ({ dispatchThankyouPopup }) => {
  return (
    <div className={styles.ThankyouPopup}>
      <div className={styles.ThankyouPopupContent}>
        <div className={styles.ThankyouPopupInfo}>
          <h2>
            Thank you for Joining 😁..Lets connect inside the community 👀✅
          </h2>

          <button onClick={() => dispatchThankyouPopup(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, dispatcher)(ThankyouPopup);
