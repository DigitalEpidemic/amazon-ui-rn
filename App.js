import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerNavigator, SideDrawer, createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";

export default class App extends React.Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const drawer = new createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => <FontAwesome name="home" size={22} style={{ color: tintColor }} />
      }
    }
  },
  {
    drawerWidth: 280,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    contentComponent: SideDrawer,
    contentOptions: {
      activeTintColor: "#FFF",
      activeBackgroundColor: "#555",
      inactiveTintColor: "#EEE"
    }
  }
);

const AppDrawerNavigator = createAppContainer(drawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
