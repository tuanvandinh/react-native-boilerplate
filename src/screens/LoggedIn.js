import React, { Component } from "react";
import { transparentHeaderStyle } from "../styles/navigation";
import LoggedInTabNavigator from "../navigators/LoggedInTabNavigator";

class LoggedIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    gesturesEnabled: false
  });
  render() {
    return <LoggedInTabNavigator />;
  }
}

export default LoggedIn;
