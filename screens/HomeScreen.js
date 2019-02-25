import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Image } from "react-native";
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem, Button } from "native-base";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import CustomCardItem from "../components/CustomCardItem";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        {/* Top of header */}
        <Header style={[{ backgroundColor: "#232f3f", height: 90 }, styles.androidHeader]}>
          <Left style={{ flexDirection: "row" }}>
            <Icon
              onPress={() => this.props.navigation.openDrawer()}
              name="md-menu"
              style={{ color: "#fff", marginRight: 15 }}
            />
            <Image source={require("../assets/logo.png")} style={{ marginTop: 5 }} />
          </Left>
          <Right>
            <Icon name="md-cart" style={{ color: "#fff" }} />
          </Right>
        </Header>

        {/* Search bar background */}
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 90,
            height: 95,
            backgroundColor: "#232f3f",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 5
          }}
        >
          {/* Search bar */}
          <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: "space-between" }}>
            <Item style={{ backgroundColor: "#fff", borderRadius: 4, height: 40 }}>
              <Input style={{ paddingLeft: 15 }} placeholder="Search" />
              <Button
                style={{
                  height: "100%",
                  width: 55,
                  backgroundColor: "#febd68",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4
                }}
              >
                <Icon name="search" style={{ fontSize: 30, color: "#000" }} />
              </Button>
            </Item>

            {/* Header links */}
            <View
              style={{
                height: 50,
                flexDirection: "row",
                paddingHorizontal: 5,
                alignItems: "center"
              }}
            >
              <Text style={{ paddingRight: 20, fontSize: 16, color: "#fff" }}>Deals</Text>
              <Text style={{ paddingRight: 20, fontSize: 16, color: "#fe8f01" }}>Prime</Text>
              <Text style={{ paddingRight: 20, fontSize: 16, color: "#3cc0b5" }}>Video</Text>
              <Text style={{ paddingRight: 20, fontSize: 16, color: "#82d9e3" }}>Music</Text>
            </View>
          </View>
        </View>

        <Content style={{ backgroundColor: "#d5d5d6", marginTop: 95 }}>
          {/* Deliver to Jeffrey */}
          <View
            style={{
              height: 50,
              backgroundColor: "#364759",
              flexDirection: "row",
              paddingHorizontal: 12,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ color: "#fff" }}>
              <SLIcon name="location-pin" style={{ fontSize: 18, color: "#fff" }} /> Deliver to Jeffrey - Cambridge A1B 2C3
            </Text>
          </View>

          {/* Swiper */}
          <Swiper autoplay={true} showsButtons showsPagination={false} style={{ height: 125 }}>
            <View style={{ flex: 1 }}>
              <Image
                style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
                source={require("../assets/swiper1.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
                source={require("../assets/swiper2.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
                source={require("../assets/swiper3.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
                source={require("../assets/swiper4.jpg")}
              />
            </View>
          </Swiper>

          {/* More items to consider */}
          <Card>
            <CardItem
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#d5dbdb",
                borderBottomStartRadius: 20,
                borderBottomEndRadius: 20
              }}
            >
              <Text style={{ fontSize: 22 }}>More items to consider</Text>
            </CardItem>
            <CustomCardItem
              itemName="Red Dead Redemption 2"
              itemCreator="Rockstar Games"
              itemPrice="$49.96"
              oldPrice="$79.99"
              imageUri={require("../assets/recommended1.jpg")}
              rating={4}
              totalRatings={154}
            />
            <CustomCardItem
              itemName="Super Mario Party"
              itemCreator="Nintendo"
              itemPrice="$79.89"
              oldPrice="$79.99"
              imageUri={require("../assets/recommended2.jpg")}
              rating={4.5}
              totalRatings={190}
            />
            <CustomCardItem
              itemName="Fallout 76"
              itemCreator="Bethesda"
              itemPrice="$37.74"
              oldPrice="$79.99"
              imageUri={require("../assets/recommended3.jpg")}
              rating={2.5}
              totalRatings={52}
            />
            {/* See more > */}
            <CardItem
              style={{
                borderTopWidth: 1,
                borderTopColor: "#d5dbdb",
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontSize: 15, color: "#4278c4" }}>See more</Text>
              <View>
                <Ionicon name="ios-arrow-forward" size={25} color="#4278c4" />
              </View>
            </CardItem>
          </Card>

          {/* Inspired by your browsing history */}
          <Card style={{ marginTop: -0.5 }}>
            <CardItem
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#d5dbdb",
                borderBottomStartRadius: 20,
                borderBottomEndRadius: 20
              }}
            >
              <Text style={{ fontSize: 22 }}>Inspired by your browsing history</Text>
            </CardItem>
            <CustomCardItem
              itemName="New 1060Plus Graphics Drawing Tablet"
              itemCreator="Huion"
              itemPrice="$89.99"
              oldPrice="$109.99"
              imageUri={require("../assets/history1.jpg")}
              rating={4.5}
              totalRatings={299}
            />
            <CustomCardItem
              itemName="4-Port Hub USB Adapter"
              itemCreator="QICENT Direct"
              itemPrice="$36.99"
              oldPrice="$49.99"
              imageUri={require("../assets/history2.jpg")}
              rating={4.5}
              totalRatings={123}
            />
            <CustomCardItem
              itemName="MicroSXCD 128GB EVO+ Memory Card"
              itemCreator="Samsung"
              itemPrice="$39.99"
              oldPrice="$59.99"
              imageUri={require("../assets/history3.jpg")}
              rating={4}
              totalRatings={2743}
            />
            {/* See more > */}
            <CardItem
              style={{
                borderTopWidth: 1,
                borderTopColor: "#d5dbdb",
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontSize: 15, color: "#4278c4" }}>See more</Text>
              <View>
                <Ionicon name="ios-arrow-forward" size={25} color="#4278c4" />
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
