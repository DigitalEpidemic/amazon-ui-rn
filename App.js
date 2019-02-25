import React from "react";
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from "react-native";
import { DrawerNavigator, SideDrawer, createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import { Icon, Container, Content, Header, Left, Right, Body, List, ListItem, Button } from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";
import CustomFlatList from "./components/CustomFlatList";

export default class App extends React.Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const CustomSideDrawer = props => {
  return (
    <Container>
      <Header style={[{ backgroundColor: "#232f3f", height: 120 }, styles.androidHeader]}>
        <Left style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 15 }}>
            <FAIcon name="user-circle" size={22} style={{ color: "#fff" }} />
            <Text style={{ marginLeft: 5, fontSize: 18, color: "#fff" }}>
              Hello, <Text style={{ fontWeight: "bold" }}>Jeffrey</Text>
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingBottom: 10,
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Button style={{ height: 35, width: 82, borderRadius: 0, backgroundColor: "#364759" }}>
              <Text style={{ color: "#fff", width: "100%", textAlign: "center", fontWeight: "bold" }}>Account</Text>
            </Button>
            <Button style={{ height: 35, width: 82, borderRadius: 0, backgroundColor: "#364759" }}>
              <Text style={{ color: "#fff", width: "100%", textAlign: "center", fontWeight: "bold" }}>Orders</Text>
            </Button>
            <Button style={{ height: 35, width: 82, borderRadius: 0, backgroundColor: "#364759" }}>
              <Text style={{ color: "#fff", width: "100%", textAlign: "center", fontWeight: "bold" }}>Lists</Text>
            </Button>
          </View>
        </Left>
      </Header>
      <Content>
        <CustomFlatList
          noHeader
          itemsInList={["Home", "Today's Deals", "Your Browsing History", "Shop By Department"]}
          addArrowTo={"Shop By Department"}
        />
        <CustomFlatList
          headerText={"PROGRAMS & FEATURES"}
          itemsInList={["Prime", "Prime Video", "Prime Music", "See All Programs & Features"]}
          addArrowTo={"See All Programs & Features"}
        />
        <CustomFlatList
          headerText={"HELP & SETTINGS"}
          itemsInList={["Your Account", "English", "Canada", "Customer Service", "Sign Out"]}
        />
      </Content>
    </Container>
  );
};

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
    contentComponent: CustomSideDrawer,
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
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});
