import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { colors } from "../../assets/styles/constants/colors";
import { Star } from "../icons/Star";
import { texts } from "../../assets/styles/constants/texts";

export const AdviceCard = ({
  rate,
  date,
  comment,
  profil,
  name,
  dateMember,
}) => {
  const starsArray = Array(5).fill(null);

  return (
    <View style={styleAdviceCard.container}>
      <View style={styleAdviceCard.dateContainer}>
        <View style={styleAdviceCard.stars}>
          {starsArray.map((_, index) => (
            <View key={index} style={styleAdviceCard.star}>
              {index < rate ? (
                <Star color={colors.primary} />
              ) : (
                <Star color={colors.grey} />
              )}
            </View>
          ))}
        </View>
        <Text style={styleAdviceCard.value}>{date}</Text>
      </View>
      <Text style={styleAdviceCard.text}>{comment}</Text>
      <View style={styleAdviceCard.person}>
        <Image source={{ uri: profil }} style={styleAdviceCard.image} />
        <View style={styleAdviceCard.memberContainer}>
          <Text style={styleAdviceCard.text}>{name}</Text>
          <Text style={styleAdviceCard.dateMember}>
            Membre depuis {dateMember}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styleAdviceCard = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.greyCard,
    borderRadius: 10,
    padding: 15,
    marginLeft: 20,
    width: 200,
    marginBottom: 30,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
  },
  value: {
    marginRight: 10,
    fontFamily: texts.fontFamilySemiBold,
    fontSize: 10,
    lineHeight: 12,
    marginLeft: 5,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    marginRight: 2,
  },
  person: {
    marginTop: 28,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: 12,
    fontFamily: texts.fontFamilySemiBold,
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 20,
    marginRight: 5,
  },
  memberContainer: {
    display: "flex",
    flexDirection: "column",
  },
  dateMember: {
    fontSize: 7,
  },
});
