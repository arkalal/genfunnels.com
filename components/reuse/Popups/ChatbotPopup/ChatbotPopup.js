import React from "react";
import styles from "./ChatbotPopup.module.scss";
import WaitlistChatbot from "../../WaitlistChatbot/WaitlistChatbot";

const ChatbotPopup = ({ setIsPop }) => {
  return (
    <div className={styles.ChatbotPopup}>
      <div className={styles.ChatbotPopupContent}>
        <WaitlistChatbot setIsPop={setIsPop} />
      </div>
    </div>
  );
};

export default ChatbotPopup;
