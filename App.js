import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Input from "./src/components/Input";

const App = () => {
  const [boolean, setBoolean] = useState(false);

  return (
    <>
      <Text style={styles.title}>useEffect Example</Text>
      <View style={styles.container}>
        {boolean && <Input />}
        <Button
          title={boolean ? "Hide input" : "Show input"}
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
