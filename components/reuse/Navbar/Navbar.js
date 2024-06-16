"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logoImg from "../../../assets/images/logo.png";
import WaitlistPopup from "../Popups/WaitlistPopup/WaitlistPopup";

const Navbar = () => {
  const [IsPop, setIsPop] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logoImg} alt="logo" className={styles.logoImg} />
      </div>

      <div className={styles.navBtn}>
        <button onClick={() => setIsPop(true)}>Join Waitlist</button>
      </div>

      {IsPop && <WaitlistPopup setIsPop={setIsPop} />}
    </div>
  );
};

export default Navbar;
