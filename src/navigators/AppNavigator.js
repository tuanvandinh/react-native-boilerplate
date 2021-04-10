import React from "react";
import { compose, createStore, applyMiddleware } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers";
import { connect } from "react-redux";
import AppRouteConfigs from "./AppRouteConfigs";
import { AsyncStorage } from "react-native";
import { withTranslation } from "react-i18next";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const App = reduxifyNavigator(AppRouteConfigs, "root");
const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });
//AsyncStorage.clear().then(() => console.log("Cleared"));

const configureStore = initialState => {
  const enhancer = compose(
    applyMiddleware(middleware, thunkMiddleware, loggerMiddleware)
  );
  return createStore(reducers, initialState, enhancer);
};

class Root extends React.Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <AppWithNavigationState
        screenProps={{
          t,
          i18n
        }}
      />
    );
  }
}
Root = withTranslation()(Root);
//const Root = () => <AppWithNavigationState />;

export { configureStore, Root };
