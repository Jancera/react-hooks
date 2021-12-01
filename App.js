import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";

const App = () => {
  const [text, setText] = useState("");

  const inputRef = useRef();
  const dataRef = useRef();

  const saveInput = () => {
    dataRef.current = text;
  };

  return (
    <>
      <Text style={styles.title}>useRef Example</Text>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          title="Clear input"
          onPress={() => inputRef.current.clear()}
        />
        <Button
          title="Focus input"
          onPress={() => inputRef.current.focus()}
        />
        <Button
          title="isFocused"
          onPress={() => console.log(inputRef.current.isFocused())}
        />
        <Button title="Save Input" onPress={saveInput} />
        <Button
          title="Log Saved Input"
          onPress={() => console.log(dataRef.current)}
        />
        <Button
          title="setNativeProps"
          onPress={() =>
            inputRef.current.setNativeProps({
              borderWidth: 3,
              borderColor: "red",
              text: "New",
            })
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#e7e7e7",
    padding: 10,
    borderRadius: 10,
    fontSize: 25,
    marginVertical: 10,
    width: "80%",
  },
});

export default App;
