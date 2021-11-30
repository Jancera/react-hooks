import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

const App = () => {
  const [text, setText] = useState("");
  const [boolean, setBoolean] = useState(false);

  return (
    <>
      {boolean && <Text style={styles.title}>useState Example</Text>}
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Button
          title={boolean ? "Hide title" : "Show title"}
          onPress={() => setBoolean(!boolean)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
