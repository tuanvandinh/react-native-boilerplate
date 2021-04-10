import AppRouteConfigs from "../navigators/AppRouteConfigs";

const firstAction = AppRouteConfigs.router.getActionForPathAndParams(
  "LoggedIn"
);
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction);

//const loggedInStatus = createReducer(
//  {},
//  {
//    [types.SET_LOGGED_IN_STATE](state, action) {
//      return action;
//    },
//  },
//);

export const nav = (state = initialNavState, action) => {
  let nextState = AppRouteConfigs.router.getStateForAction(action, state);
  return nextState || state;
};
