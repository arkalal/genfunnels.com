import React from "react";
import styles from "./JoinCommunityPopup.module.scss";
import { FaDiscord } from "react-icons/fa";
import { connect } from "react-redux";
import * as dispatcher from "../../../../redux/store/dispatchers";

const JoinCommunityPopup = ({
  dispatchCommunityPopup,
  dispatchThankyouPopup,
}) => {
  const joinCommunity = () => {
    window.open("https://discord.gg/6ZqJ8z4e", "_blank");
    dispatchCommunityPopup(false);
    dispatchThankyouPopup(true);
  };

  return (
    <div className={styles.JoinCommunityPopup}>
      <div className={styles.JoinCommunityPopupContent}>
        <div className={styles.JoinCommunityPopupInfo}>
          <h2>Hurray! 🎉 You are on WaitList 😊</h2>
          <p>
            Join the community below 👇 to get full access to talk to us for any
            personalised features for your business or Website. 🚀
          </p>
          <p>
            Let us know more about you and help us to solve your problems with
            our AI automation platform ✅👨🏻‍💻
          </p>

          <div className={styles.JoinCommunityPopupOptions}>
            <div className={styles.JoinCommunityPopupBtns}>
              <button onClick={joinCommunity}>
                {" "}
                <FaDiscord className={styles.FaDiscordCommunityPopup} /> Join
                Community
              </button>
              <button onClick={() => dispatchCommunityPopup(false)}>
                Cancel
              </button>
            </div>

            <p>
              Note: If you click cancel you cannot join the community anymore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, dispatcher)(JoinCommunityPopup);
