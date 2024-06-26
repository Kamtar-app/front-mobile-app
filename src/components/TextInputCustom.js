import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "./../assets/styles/constants/colors";
import { texts } from "./../assets/styles/constants/texts";

export const TextInputCustom = ({
  placeholder,
  startIcon = null,
  endIcon = null,
  value = null,
  onChange = null,
  secureTextEntry = false,
}) => {
  return (
    <View style={stylestextInputCustom.inputContainer}>
      <View style={stylestextInputCustom.containerIcon}>{startIcon}</View>
      <TextInput
        style={stylestextInputCustom.input}
        placeholder={placeholder}
        placeholderTextColor="white"
        color="white"
        onChange={onChange}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {endIcon && (
        <View style={stylestextInputCustom.containerEndIcon}>{endIcon}</View>
      )}
    </View>
  );
};

const stylestextInputCustom = StyleSheet.create({
  text: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: 17,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    position: "relative",
  },
  //   searchIcon: {
  //     padding: 10,
  //     position: "absolute",
  //     left: -45,
  //     top: 0,
  //   },
  inputContainer: {
    backgroundColor: "#FFFFFF34",
    borderRadius: 7,
    marginBottom: 12,
    width: "100%",
  },
  input: {
    padding: 10,
    marginLeft: "15%",
    marginRight: "15%",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ff00ff00",
    width: "70%",
    fontFamily: texts.fontFamilyMedium,
  },
  containerIcon: {
    // width: 20,
    // height: 10,
    position: "absolute",
    left: "5%",
    transform: [{ translateY: 15 }],
  },
  icon: {
    // width: "100%",
    // aspectRatio: 1,
    // color: colors.white,
    // fill: colors.white,
  },
  containerEndIcon: {
    position: "absolute",
    right: "5%",
    transform: [{ translateY: 17 }],
  },
  endIcon: {
    width: 10,
    height: 10,
    position: "absolute",
    left: "90%",
    transform: [{ translateY: 20 }],
  },
});
