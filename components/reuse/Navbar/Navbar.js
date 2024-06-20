"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logoImg from "../../../assets/images/logo.png";
import WaitlistPopup from "../Popups/WaitlistPopup/WaitlistPopup";
import JoinCommunityPopup from "../Popups/JoinCommunityPopup/JoinCommunityPopup";
import * as dispatcher from "../../../redux/store/dispatchers";
import { connect } from "react-redux";
import ReduxProvider from "../../../redux/ReduxProvider";
import ThankyouPopup from "../Popups/ThankyouPopup/ThankyouPopup";

const Navbar = ({
  waitlistPopup,
  communityPopup,
  thankyouPopup,
  dispatchWaitlistPopup,
}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logoImg} alt="logo" className={styles.logoImg} />
      </div>

      <div className={styles.navBtn}>
        <button onClick={() => dispatchWaitlistPopup(true)}>
          Join Waitlist
        </button>
      </div>

      {waitlistPopup && (
        <ReduxProvider>
          <WaitlistPopup />
        </ReduxProvider>
      )}

      {communityPopup && (
        <>
          <ReduxProvider>
            <JoinCommunityPopup />
          </ReduxProvider>
        </>
      )}

      {thankyouPopup && (
        <>
          <ReduxProvider>
            <ThankyouPopup />
          </ReduxProvider>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ gen }) => {
  return {
    waitlistPopup: gen.waitlistPopup,
    communityPopup: gen.communityPopup,
    thankyouPopup: gen.thankyouPopup,
  };
};

export default connect(mapStateToProps, dispatcher)(Navbar);
