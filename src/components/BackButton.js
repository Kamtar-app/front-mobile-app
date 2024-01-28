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
import { BackArrowTwo } from "./icons/BackArrowTwo";

export const BackButton = ({
  bg = colors.black,
  icon = <BackArrowTwo color={colors.lightGrey} />,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={[stylesBackButton.button, { backgroundColor: bg }]}
      onPress={handlePress}
    >
      <View>{icon}</View>
    </TouchableOpacity>
  );
};

const stylesBackButton = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 35,
    position: "absolute",
    left: 15,
    top: 50,
  },
});
