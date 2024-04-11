import React from "react";
import styles from "./Banner.module.scss";
import { IoCheckmark } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerTitle}>
        <h1>
          Convert visitors into customers <br /> with Generative AI Funnels.
        </h1>
      </div>

      <div className={styles.bannerDesc}>
        <p>
          Easily create, customise and integrate actionable AI Assistants
          <br /> in websites and build complete end-to-end funnels, driving{" "}
          <br />
          engagements and conversions.
        </p>
      </div>

      <div className={styles.bannerChecks}>
        <div className={styles.bannerCheck}>
          <IoCheckmark />
          <p>Boost your conversion rate 🚀</p>
        </div>

        <div className={styles.bannerCheck}>
          <IoCheckmark />
          <p>Drive more sales 💰</p>
        </div>

        <div className={styles.bannerCheck}>
          <IoCheckmark />
          <p>Engage with your audience 🤝</p>
        </div>

        <div className={styles.bannerCheck}>
          <IoCheckmark />
          <p>Pay once, use forever 👨🏻‍💻</p>
        </div>
      </div>

      <div className={styles.bannerBtn}>
        <button>
          <p>Chat with Us</p> <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
