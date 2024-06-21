import React from "react";
import styles from "./JoinCommunityPopup.module.scss";
import { FaDiscord } from "react-icons/fa";
import { connect } from "react-redux";
import * as dispatcher from "../../../../redux/store/dispatchers";
import axios from "../../../../axios/api";
import { useRouter } from "next/navigation";

const JoinCommunityPopup = ({
  dispatchCommunityPopup,
  dispatchThankyouPopup,
  waitlistEmail,
}) => {
  const router = useRouter();

  const joinCommunity = async () => {
    try {
      const res = await axios.put("/waitlist", {
        email: waitlistEmail,
        isCommunity: true,
      });

      if (res.status === 200) {
        const discordLink = "https://discord.gg/6ZqJ8z4e";

        setTimeout(() => {
          router.push(discordLink);
        }, 2000);

        dispatchCommunityPopup(false);
        dispatchThankyouPopup(true);
      }
    } catch (error) {
      console.log(error);
    }
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

const mapStateToProps = ({ gen }) => {
  return {
    waitlistEmail: gen.waitlistEmail,
  };
};

export default connect(mapStateToProps, dispatcher)(JoinCommunityPopup);
