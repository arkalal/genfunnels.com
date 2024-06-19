import Actions from "./actions";

const defaultState = {
  waitlistPopup: false,
  communityPopup: false,
  thankyouPopup: false,
};

const genFunnelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.WAITLIST_POPUP:
      return {
        ...state,
        waitlistPopup: action.data,
      };
    case Actions.COMMUNITY_POPUP:
      return {
        ...state,
        communityPopup: action.data,
      };
    case Actions.THANK_YOU_POPUP:
      return {
        ...state,
        thankyouPopup: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};

export default genFunnelsReducer;
