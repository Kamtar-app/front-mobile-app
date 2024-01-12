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

export const CardCharacteristic = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 11,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    width: "30%",
    marginBottom: 15,
    justifyContent: "space-around",
  },
  text: {
    fontFamily: texts.fontFamilyBold,
    fontSize: 12,
    marginTop: 30,
    backgroundColor: "red",
  },
});
