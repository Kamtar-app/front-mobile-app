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

export const ButtonUnderlinedCustom = ({ text, screen }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={stylesButtonCustom.bouton}
      onPress={() => {
        navigation.navigate(screen);
      }}
    >
      <Text style={stylesButtonCustom.texteBouton}>{text}</Text>
    </TouchableOpacity>
  );
};

const stylesButtonCustom = StyleSheet.create({
  bouton: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: 10,
  },
  texteBouton: {
    color: colors.white,
    fontSize: 15,
    textDecorationLine: "underline",
    fontFamily: "Mulish-Light",
  },
});
