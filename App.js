import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root, configureStore } from "./src/navigators/AppNavigator";
import "./src/util/i18n";

console.disableYellowBox = true;

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={configureStore({})}>
        <Root />
      </Provider>
    );
  }
}

export default App;
