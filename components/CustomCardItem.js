import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Card, CardItem, Right } from "native-base";
import StarRating from "react-native-star-rating";

export default class CustomCardItem extends Component {
  render() {
    return (
      <CardItem>
        <View>
          <Image style={{ height: 90, width: 70 }} source={this.props.imageUri} />
        </View>
        <Right style={{ flex: 1, alignItems: "flex-start", height: 90, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 15 }}>{this.props.itemName}</Text>
          <Text style={{ color: "#808080", fontSize: 12 }}>by {this.props.itemCreator}</Text>
          <Text style={{ fontSize: 15 }}>
            {this.props.itemPrice}
            {"  "}
            <Text
              style={{
                color: "#808080",
                fontWeight: "normal",
                textDecorationLine: "line-through",
                textDecorationStyle: "solid"
              }}
            >
              {this.props.oldPrice}
            </Text>
          </Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "baseline" }}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={this.props.rating}
              starSize={12}
              fullStarColor="#f8b700"
              emptyStarColor="#c38e14"
            />
            <Text style={{ fontSize: 12, color: "#2060b9" }}> {this.props.totalRatings}</Text>
          </View>
        </Right>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({});
