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
import { ArrowTwo } from "../icons/ArrowTwo";
import { useNavigation } from "@react-navigation/native";

export const Banner = ({ id }) => {
  const navigation = useNavigation();
  const handleNavigateToMap = () => {
    navigation.navigate("MapScreen", { placeId: id });
  };

  return (
    <View style={stylesBanner.container}>
      {/* TODO Manon : ajouter un lien vers la map */}
      <View style={stylesBanner.buttonContainer}>
        <ButtonCustom
          text={"Y aller"}
          icon={<ArrowTwo color="white" size={20} />}
          style={stylesBanner.button}
          onPress={handleNavigateToMap}
        />
      </View>
    </View>
  );
};

const stylesBanner = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: colors.black,
    position: "absolute",
    zIndex: -1,
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttonContainer: {
    width: 140,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.black,
  },
});
