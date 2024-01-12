import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/styles/constants/colors";
import { ButtonCustom } from "../ButtonCustom";
import { Arrow } from "../icons/Arrow";

export const Banner = ({}) => {
  return (
    <View style={stylesBanner.container}>
      {/* TODO Manon : ajouter un lien vers la map */}
      <ButtonCustom text={"Y aller"} icon={<Arrow />} />
    </View>
  );
};

const stylesBanner = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: colors.black,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
});
