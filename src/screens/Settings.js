import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MainContext } from "../context/MainContext";

const Settings = () => {
  const { info } = useContext(MainContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info.username}</Text>
      <Text style={styles.text}>{info.channel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  text: {
    fontSize: 30,
  },
});

export default Settings;
