import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "./../assets/styles/constants/colors";
import { texts } from "./../assets/styles/constants/texts";
import { Like } from "./icons/Like";

export const LikeButton = ({ bg = colors.black }) => {
  const [filled, setFilled] = useState(false);

  const handlePress = () => {
    setFilled(!filled);
  };

  return (
    <TouchableOpacity
      style={[stylesLikeButton.button, { backgroundColor: bg }]}
      onPress={handlePress}
    >
      <View>
        <Like color={colors.lightGrey} filled={filled} />
      </View>
    </TouchableOpacity>
  );
};

const stylesLikeButton = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 35,
    position: "absolute",
    right: 15,
    top: 50,
  },
});
