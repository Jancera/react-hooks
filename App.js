import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import List from "./src/components/List";

const fakeData = [
  { id: "1", value: 10 },
  { id: "2", value: 20 },
  { id: "3", value: 30 },
  { id: "4", value: 40 },
  { id: "5", value: 50 },
];

const App = () => {
  const [value, setValue] = useState(0);

  const onItemClick = useCallback((item) => {
    console.log(`This is the item value: ${item.number}`);
  }, []);

  return (
    <>
      <Text style={styles.title}>useReducer Example</Text>
      <View style={styles.container}>
        <Text style={styles.text}>{value}</Text>
        <Button
          title="Increase counter"
          onPress={() => setValue((value) => value + 1)}
        />
        <List data={fakeData} onItemClick={onItemClick} />
        <Button title="Generate List" onPress={() => {}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
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
