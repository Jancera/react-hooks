import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "setText":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const initialValue = {
  text: "",
};

const App = () => {
  const [string, setString] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <Text style={styles.title}>useReducer Example</Text>
      <View style={styles.container}>
        <Text style={styles.text}>{state.text}</Text>
        {/* <TextInput
          style={styles.input}
          value={state.text}
          onChangeText={(text) => {
            dispatch({ type: "setText", payload: text });
          }}
        /> */}
        <Button
          title="Set text"
          onPress={() =>
            dispatch({ type: "setText", payload: "New Text" })
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
