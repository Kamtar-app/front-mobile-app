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
import { Star } from "../icons/Star";

export const Note = ({ note, total }) => {
  return (
    <View style={styleNote.container}>
      <Text style={styleNote.value}>{note}</Text>
      <View style={styleNote.stars}>
        <View style={styleNote.star}>
          <Star color={colors.primary} size={15} />
        </View>
        <View style={styleNote.star}>
          <Star color={colors.primary} size={15} />
        </View>
        <View style={styleNote.star}>
          <Star color={colors.primary} size={15} />
        </View>
        <View style={styleNote.star}>
          <Star color={colors.primary} size={15} />
        </View>
        <View style={styleNote.star}>
          <Star color={colors.primary} size={15} />
        </View>
      </View>
      <Text style={styleNote.text}>{total} avis</Text>
    </View>
  );
};

const styleNote = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  value: {
    marginBottom: 10,
    fontFamily: texts.fontFamilySemiBold,
    fontSize: 65,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    marginLeft: 5,
  },
  text: {
    fontSize: 13,
    fontFamily: texts.fontFamilyRegular,
  },
});
