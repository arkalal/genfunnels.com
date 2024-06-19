import Actions from "./actions";

export const dispatchWaitlistPopup = (data) => {
  return {
    type: Actions.WAITLIST_POPUP,
    data,
  };
};

export const dispatchCommunityPopup = (data) => {
  return {
    type: Actions.COMMUNITY_POPUP,
    data,
  };
};
export const dispatchThankyouPopup = (data) => {
  return {
    type: Actions.THANK_YOU_POPUP,
    data,
  };
};
