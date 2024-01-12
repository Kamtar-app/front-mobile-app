import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/styles/constants/colors";
import { Star } from "../icons/Star";
import { texts } from "../../assets/styles/constants/texts";

export const AdviceCard = ({ date, comment, profil, name }) => {
  return (
    <View style={styleAdviceCard.container}>
      <View>
        <View style={styleAdviceCard.stars}>
          <View style={styleAdviceCard.star}>
            <Star color={colors.primary} />
          </View>
          <View style={styleAdviceCard.star}>
            <Star color={colors.primary} />
          </View>
          <View style={styleAdviceCard.star}>
            <Star color={colors.primary} />
          </View>
          <View style={styleAdviceCard.star}>
            <Star color={colors.primary} />
          </View>
          <View style={styleAdviceCard.star}>
            <Star color={colors.primary} />
          </View>
        </View>
        <Text style={styleAdviceCard.value}>{date}</Text>
      </View>
      <Text style={styleAdviceCard.text}>{comment}</Text>
      <View>
        <Image source={profil} />
        <Text style={styleAdviceCard.text}>{name}</Text>
      </View>
    </View>
  );
};

const styleAdviceCard = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    padding: 15,
    marginRight: 20,
    width: 200,
  },
  value: {
    marginRight: 10,
    fontFamily: texts.fontFamilyRegular,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    marginRight: 2,
  },
});
