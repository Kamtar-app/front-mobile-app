import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../assets/styles/constants/colors";
import { Star } from "./icons/Star";
import { Heart } from "./icons/Heart";
import { PlaceScreen } from "./../screens/PlaceScreen";

export const ThumbnailPlace1 = ({
  imageURL,
  city,
  name,
  type,
  average = 9.1,
  small = false,
  width = 210,
  placeColor = colors.black,
  id = 1,
  closeAllBottomSheet = null
}) => {
  const navigation = useNavigation();

  const goToPlaceDetail = (id) => {
    if(closeAllBottomSheet){
      closeAllBottomSheet();
    }
    navigation.navigate("PlaceScreen", { id: String(id) });
  };

  return (
    <TouchableOpacity
      style={[styles.card, { height: small ? 160 : 210, width: width }]}
      onPress={() => goToPlaceDetail(id)}
    >
      <Image source={{ uri: imageURL }} style={[styles.backgroundImage]} />
      <View style={styles.like}>
        <Heart />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.content}>{city}</Text>
          <View style={styles.row}>
            <Star />
            <Text style={[styles.content, styles.note]}>{average}</Text>
          </View>
        </View>
        <Text style={[styles.name, { color: placeColor }]}>{name}</Text>
        <Text style={styles.content}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 15,
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    color: colors.grey,
    fontSize: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 6,
  },
  type: {
    color: "white",
    fontSize: 10,
    marginTop: 6,
  },
  like: {
    margin: 15,
    width: 25,
    height: 25,
    position: "absolute",
    top: 0,
    right: 0,
  },
  note: {
    marginLeft: 6,
    color: "#F4B742",
  },
});
