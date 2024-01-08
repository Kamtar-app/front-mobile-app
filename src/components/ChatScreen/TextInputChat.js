import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Send } from "../icons/Send";
import { colors } from "../../assets/styles/constants/colors";

export const TextInputChat = ({
  elements,
  setElements,
  textInput,
  setTextInput,
}) => {
  const handlePress = () => {
    const newElement = textInput;
    setElements([...elements, newElement]);
    setTextInput("");
    console.log(textInput);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={"Ecrivez votre message"}
        onChangeText={(value) => setTextInput(value)}
        placeholderTextColor="#C0C0C0"
        value={textInput}
        style={styles.containerText}
      />
      <TouchableOpacity style={styles.containerButton} onPress={handlePress}>
        <View style={styles.send}>
          <Send />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerText: {
    height: "100%",
    width: "80%",
    marginLeft: 12,
  },
  containerButton: {
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
    right: 10,
    top: "17%",
  },
  inputContainer: {
    backgroundColor: colors.white,
    height: 45,
    borderRadius: 30,
    position: "relative",
    backgroundColor: "#F2F2F2",
  },
  send: {
    backgroundColor: "#FE6E1F",
    width: 30,
    height: 30,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
