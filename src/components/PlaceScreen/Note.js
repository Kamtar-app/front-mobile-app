import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { colors } from "../../assets/styles/constants/colors";
import { texts } from "../../assets/styles/constants/texts";
import { Star } from "../icons/Star";

export const Note = ({ note, total }) => {
  const starsArray = Array(5).fill(null);

  const getColor = (index) => {
    if (index < note) {
      return colors.primary;
    } else {
      return colors.primaryGray;
    }
  };

  return (
    <View style={styleNote.container}>
      <Text style={styleNote.value}>{note}</Text>
      <View style={styleNote.stars}>
        {starsArray.map((_, index) => (
          <View key={index} style={styleNote.star}>
            <Star color={getColor(index + 1)} size={15} />
          </View>
        ))}
      </View>
      <Text style={styleNote.text}>{total} avis</Text>
    </View>
  );
};

const styleNote = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "50%",
  },
  value: {
    marginBottom: 10,
    fontFamily: texts.fontFamilySemiBold,
    fontSize: 65,
    lineHeight: 70,
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
