import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "./../assets/styles/constants/colors";
import { texts } from "./../assets/styles/constants/texts";

export const ButtonCustom = ({
  text,
  onPress = null,
  icon = null,
  color = colors.primary,
  textColor = colors.white,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[stylesButtonCustom.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[stylesButtonCustom.textButton, { color: textColor }]}>
        {text}
      </Text>
      {icon ? <View style={stylesButtonCustom.icon}>{icon}</View> : ""}
    </TouchableOpacity>
  );
};

const stylesButtonCustom = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 35,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    // backgroundColor: "red",
    lineHeight: 19,
  },
  icon: {
    marginLeft: 10,
    // display: "flex",
    // flexGrow: 1,
    // justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
});
