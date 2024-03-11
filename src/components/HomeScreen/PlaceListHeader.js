import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Arrow } from "../icons/Arrow";
import { colors } from "../../assets/styles/constants/colors";
import { useNavigation } from "@react-navigation/native";

export const PlaceListHeader = ({ label }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("ListPlaceScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{label}</Text>
      </View>
      <TouchableOpacity style={styles.right} onPress={handleNavigation}>
        <Text style={styles.label}>Tout voir</Text>
        <Arrow />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  left: {
    flex: 1,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 12,
    marginRight: 5,
    color: colors.grey,
  },
});
