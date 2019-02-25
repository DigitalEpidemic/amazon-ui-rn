import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { ListItem, Container } from "native-base";
import Ionicon from "react-native-vector-icons/Ionicons";

export default class CustomFlatList extends Component {
  renderHeader(headerText) {
    return <Text style={styles.header}>{headerText}</Text>;
  }

  render() {
    return (
      <FlatList
        style={{ borderTopWidth: 1, borderTopColor: "#d5dbdb" }}
        data={this.props.itemsInList}
        ListHeaderComponent={this.props.noHeader ? null : this.renderHeader(this.props.headerText)}
        renderItem={({ item }) => (
          <ListItem style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }} noBorder key={item}>
            <Text style={{ fontSize: 15 }}>{item}</Text>
            <Text>
              {item === this.props.addArrowTo ? (
                <Ionicon style={styles.arrow} name="ios-arrow-forward" size={25} color="#879595" />
              ) : null}
            </Text>
          </ListItem>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    color: "#959396",
    paddingLeft: 18,
    paddingTop: 10,
    paddingBottom: 6
  },
  arrow: {
    flex: 1,
    alignSelf: "flex-end"
  }
});
