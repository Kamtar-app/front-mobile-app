import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/styles/constants/colors";

export const Banner = ({}) => {
  return <View style={stylesBanner.container}></View>;
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
