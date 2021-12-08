import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const List = ({ data, onItemClick }) => {
  console.log("List rendered");
  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => onItemClick(item)}
          >
            <Text>{item.value}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    borderWidth: 3,
    borderColor: "black",
    width: "80%",
    height: "30%",
    marginVertical: 30,
  },
  listItem: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default React.memo(List);
