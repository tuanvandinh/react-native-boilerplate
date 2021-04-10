import React from "react";
import PropTypes from "prop-types";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
//import Icon from "react-native-vector-icons/dist/FontAwesome";
import DefaultContainer from "../containers/DefaultContainer"; //stack nav

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon name={name} size={size} color={tintColor} />
  );
  icon.propTypes = {
    tintColor: PropTypes.string.isRequired
  };

  return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator({
  Report: {
    screen: DefaultContainer,
    navigationOptions: ({ screenProps: { t } }) => {
      return {
        tabBarLabel: "default",
        tabBarIcon: ""
      };
    }
  }
});

//export default LoggedInTabNavigator;
export default createStackNavigator(
  { LoggedInTabNavigator },
  { headerMode: "none" }
);
