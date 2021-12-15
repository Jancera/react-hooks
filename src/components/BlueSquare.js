import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MainContext } from "../context/MainContext";

const BlueSquare = ({ children }) => {
  const { info } = useContext(MainContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: "blue",
    margin: 30,
  },
  text: {
    fontSize: 30,
  },
});

export default BlueSquare;
