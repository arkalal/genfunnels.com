import React from "react";
import styles from "./Footer.module.scss";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import logoImg from "../../assets/images/logo.png";
import ownerImg from "../../assets/images/arkaAvatar.jpeg";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerCard}>
        <div className={styles.footCardContent}>
          <h1>Get Customers in Automation</h1>
          <p>Make your visitors convert into paying customers in autopilot</p>
          <button>
            <p>Chat with Us</p> <GoArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.footerIntro}>
        <div className={styles.footerLogo}>
          <Image src={logoImg} alt="logo" className={styles.logoImg} />
        </div>

        <div className={styles.footerCopyright}>
          <p>© 2021 GenFunnels. All rights reserved.</p>
        </div>

        <div className={styles.footerOwnerIntro}>
          <Image src={ownerImg} alt="logo" className={styles.ownerLogo} />
          <p>
            Hey Curious 👋 I am Arka Lal Chakravarty, the creator of GenFunnels.
            You can follow my work on{" "}
            <span>
              {" "}
              <a href="https://twitter.com/arka_codes" target="_blank">
                Twitter
              </a>{" "}
            </span>{" "}
            and{" "}
            <span>
              {" "}
              <a href="https://www.linkedin.com/in/arkalal/" target="_blank">
                Linkedin
              </a>
            </span>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
