import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";

const App = () => {
  const [counter, setCounter] = useState(0);

  const listData = useMemo(
    () => [
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
      { id: "3", name: "Item 3" },
      { id: "4", name: "Item 4" },
      { id: "5", name: "Item 5" },
      { id: "6", name: "Item 6" },
    ],
    [],
  );

  return (
    <>
      <Text style={styles.title}>useMemo Example</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.text}>{counter}</Text>
        <Button
          title="Increase Counter"
          onPress={() => setCounter((counter) => counter + 1)}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={listData}
          renderItem={({ item }) => {
            console.log(`${item.name} Rendered`);
            return (
              <View style={styles.listItem}>
                <Text>{item.name}</Text>
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
    height: "30%",
    width: "80%",
  },
  listItem: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  counterContainer: {
    marginVertical: 30,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
  },
});

export default App;
