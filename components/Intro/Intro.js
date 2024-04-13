import React from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroHeader}>
        <h1>
          {" "}
          Automate your business with <br /> AI today, and scale profits 🤑{" "}
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
    </div>
  );
};

export default Intro;
