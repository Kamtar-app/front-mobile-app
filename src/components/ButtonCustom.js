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

export const ButtonCustom = ({ text, onPress = null, icon = null }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={stylesButtonCustom.button} onPress={onPress}>
      <Text style={stylesButtonCustom.textButton}>{text}</Text>
      <View>{icon}</View>
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
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
