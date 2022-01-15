import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const List = ({ data }) => {
  console.log("List Rendered");

  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={({ item }) => {
        return (
          <View style={styles.listItem}>
            <Text>{item.name}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    borderWidth: 3,
    borderColor: "black",
    height: "30%",
    width: "80%",
  },
  listItem: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(List);
