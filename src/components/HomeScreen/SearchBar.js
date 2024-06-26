import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/styles/constants/colors";
import { texts } from "../../assets/styles/constants/texts";
import { Glass } from "../icons/Glass";

export const SearchBar = ({
  setSearchText,
  searchText,
  endIcon = null,
  openBottomSheet = null,
  placeholder = "Où allons nous ?",
  width = null
}) => {
  const handleTextInputFocus = () => {
    if (openBottomSheet) {
      openBottomSheet();
    }
  };

  return (
    <View style={width === null ? [stylestextInputCustom.inputContainer] : [stylestextInputCustom.inputContainer, { width: width }]}>
      <View style={stylestextInputCustom.containerIcon}>
        <Glass color={colors.grey} />
      </View>
      <TextInput
        style={stylestextInputCustom.input}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        onFocus={handleTextInputFocus}
        value={searchText}
        onChangeText={setSearchText}
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
    // width: "100%",
    backgroundColor: "#E0E0E0",
    borderRadius: 35,
    marginBottom: 20,
    marginHorizontal: 20,
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
    right: "2%",
    top: "15%",
  },
  endIcon: {
    width: 10,
    height: 10,
    position: "absolute",
    left: "90%",
    transform: [{ translateY: 20 }],
  },
});
