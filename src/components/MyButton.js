import React from "react";
import { Button, StyleSheet } from "react-native";

const MyButton = ({ setState }) => {
  return (
    <Button
      title="Toogle Title"
      onPress={() => setState((value) => !value)}
    />
  );
};

const styles = StyleSheet.create({});

export default MyButton;
