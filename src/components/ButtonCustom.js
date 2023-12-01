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

export const ButtonCustom = ({ text, screen = null, onPress = null }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={stylesButtonCustom.bouton} onPress={onPress}>
      <Text style={stylesButtonCustom.texteBouton}>{text}</Text>
    </TouchableOpacity>
  );
};

const stylesButtonCustom = StyleSheet.create({
  bouton: {
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    paddingVertical: 17,
    borderRadius: 35,
  },
  texteBouton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    fontFamily: texts.fontFamilySemiBold,
  },
});
