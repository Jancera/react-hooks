import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import List from "./src/components/List";

const App = () => {
  const [counter, setCounter] = useState(0);

  const fakeData = useMemo(
    () => [
      { id: "1", name: `Item ${counter}` },
      { id: "2", name: "Item 2" },
      { id: "3", name: "Item 3" },
      { id: "4", name: "Item 4" },
      { id: "5", name: "Item 5" },
      { id: "6", name: "Item 6" },
    ],
    [counter],
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
        <List data={fakeData} />
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
  counterContainer: {
    marginVertical: 30,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
});

export default App;
