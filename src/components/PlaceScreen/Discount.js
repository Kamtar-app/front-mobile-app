import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { colors } from "../../assets/styles/constants/colors";
import { Ticket } from "../icons/Ticket";
import { ArrowTwo } from "../icons/ArrowTwo";
import { texts } from "../../assets/styles/constants/texts";

export const Discount = ({ text, discount = "-10%" }) => {
  return (
    <View style={styleAdviceCard.container}>
      <View style={styleAdviceCard.wrapper}>
        <View style={styleAdviceCard.dateContainer}>
          <View style={styleAdviceCard.discountContainer}>
            <Ticket color={colors.primary} />
            <Text style={styleAdviceCard.discount}>{discount}</Text>
          </View>
        </View>
        <View style={styleAdviceCard.textContainer}>
          <Text style={styleAdviceCard.text}>{text}</Text>
        </View>
        <View style={styleAdviceCard.arrowContainer}>
          <ArrowTwo />
        </View>
      </View>
    </View>
  );
};

const styleAdviceCard = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.greyCard,
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 13,
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  discountContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderColor: colors.lighterPrimary,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.lightPrimary,
  },
  discount: {
    fontFamily: texts.fontFamilyMedium,
    color: colors.primary,
    fontSize: 10,
    lineHeight: 12,
    marginLeft: 5,
  },
  textContainer: {
    flexGrow: 1,
  },
  text: {
    marginLeft: 10,
    fontSize: 10,
    fontFamily: texts.fontFamilyMedium,
    lineHeight: 20,
  },
  arrowContainer: {
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
