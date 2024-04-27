import React from "react";
import styles from "./Intro.module.scss";
import { IoCheckmark } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroHeader}>
        <h1>
          {" "}
          Automate your business with <br /> AI today, and{" "}
          <span>Scale Profits 🤑</span>{" "}
        </h1>
        <p>
          Our intelligent system learns from every interaction, with
          personalized experiences <br /> that remind your visitors why they
          cannot wait until tomorrow <br /> to close the deal.
        </p>
      </div>

      <div className={styles.IntroSteps}>
        <div className={styles.IntroStep}>
          <h2> 🧑🏻‍💻 Build your AI Assistant/Funnels</h2>
          <p>
            Create PoopUp messages in 2 minutes, no code required. Write about{" "}
            the <br /> #1 problem your visitors have. Trigger an emotional
            response. <br /> Use icons people recognize.
          </p>
        </div>

        <div className={styles.IntroStep}>
          <h2>📈 Watch your conversions grow</h2>
          <p>
            {" "}
            Create PoopUp messages in 2 minutes, no code required. Write about{" "}
            the <br /> #1 problem your visitors have. Trigger an emotional
            response. <br /> Use icons people recognize.
          </p>
        </div>
      </div>

      <div className={styles.IntroPricing}>
        <div className={styles.IntroPricingHeader}>
          <h1>Pay Once, Get Lifetime Access</h1>
        </div>

        <div className={styles.pricingCard}>
          <div className={styles.pricingCardHeader}>
            <h2>Premium</h2>
            <p>Create and integrate AI funnels and chatbots</p>
          </div>

          <div className={styles.priceAmount}>
            <h1>$69</h1>
            <span>USD</span>
          </div>

          <div className={styles.pricingCardFeatures}>
            <div className={styles.pricingCardFeature}>
              <IoCheckmark />
              <p>Unlimited AI Funnels</p>
            </div>
            <div className={styles.pricingCardFeature}>
              <IoCheckmark />
              <p>Unlimited Chatbots</p>
            </div>
            <div className={styles.pricingCardFeature}>
              <IoCheckmark />
              <p>Unlimited Integrations</p>
            </div>
            <div className={styles.pricingCardFeature}>
              <IoCheckmark />
              <p>24/7 Support</p>
            </div>
            <div className={styles.pricingCardFeature}>
              <IoCheckmark />
              <p>Intelligent AI Analytics</p>
            </div>
          </div>

          <div className={styles.priceBtn}>
            <button>
              <p>Join Waitlist</p> <GoArrowRight />
            </button>
          </div>
          <p className={styles.pricingTagline}>Pay once. Access forever.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
