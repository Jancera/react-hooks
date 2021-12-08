import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
} from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "setText":
      return { ...state, text: action.payload };
    case "toogleRedBox":
      return { ...state, showRedBox: action.payload };
    default:
      return state;
  }
};

const initialValue = {
  text: "",
  showRedBox: false,
};

const App = () => {
  const [value, setValue] = useState(0);
  const [randomList, setRandomList] = useState([]);

  const generateList = () => {};

  return (
    <>
      <Text style={styles.title}>useReducer Example</Text>
      <View style={styles.container}>
        <Text style={styles.text}>{value}</Text>

        <Button
          title="Increase counter"
          onPress={() => setValue((value) => value + 1)}
        />
        <Button title="Generate List" onPress={generateList} />
        <FlatList
          data={randomList}
          style={styles.list}
          randerItem={({ item }) => {
            return (
              <View>
                <Text>{item.number}</Text>
              </View>
            );
          }}
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
  list: {
    borderWidth: 3,
    borderColor: "black",
    width: "50%",
    height: "50%",
  },
});

export default App;
