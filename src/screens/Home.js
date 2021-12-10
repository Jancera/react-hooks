import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import BlueSquare from "../components/BlueSquare";

import { MainContext, useMainContext } from "../context/MainContext";

const Home = () => {
  const { counter, increaseCounter, decreaseCounter } =
    useContext(MainContext);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Button title="Increase" onPress={() => increaseCounter(1)} />
      <Button title="Decrease" onPress={() => decreaseCounter(1)} />
      {/* <BlueSquare>
        <Text>Content passed as children</Text>
      </BlueSquare> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
export default Home;
