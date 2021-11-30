import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Component Mounted");
    return () => console.log("Component Unmounted");
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
    height: "30%",
    borderWidth: 5,
    borderColor: "red",
  },
  input: {
    width: "80%",
    backgroundColor: "#e7e7e7",
    borderRadius: 15,
    fontSize: 25,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default Input;
