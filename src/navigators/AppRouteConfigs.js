import { createStackNavigator } from "react-navigation";
import LoggedIn from "../screens/LoggedIn";
import LoggedInTabNavigator from "./LoggedInTabNavigator";

const AppRouteConfigs = createStackNavigator({
  LoggedIn: {
    screen: LoggedInTabNavigator,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
});

export default AppRouteConfigs;
