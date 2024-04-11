import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logoImg from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logoImg} alt="logo" className={styles.logoImg} />
      </div>

      <div className={styles.navBtn}>
        <button>Join Waitlist</button>
      </div>
    </div>
  );
};

export default Navbar;
