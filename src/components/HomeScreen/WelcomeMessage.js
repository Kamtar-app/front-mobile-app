import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/styles/constants/colors";

export const WelcomeMessage = ({ label }) => {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.inline}>
        <Text style={styles.text}>Salut </Text>
        <Text style={styles.textOrange}>Edgar</Text>
        <Text style={styles.text}>,</Text>
      </View>
      <Text style={styles.text}>Prêt pour la route ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inline: {
    flexDirection: "row"
  },
  messageContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 37,
    marginLeft: 20,
    marginBottom: 25
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.black,
  },
  textOrange: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.primary,
  },
});
