// StepOne.js

import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Star } from "../icons/Star";
import { colors } from "../../assets/styles/constants/colors";
import { texts } from "../../assets/styles/constants/texts";
import { ButtonCustom } from "../ButtonCustom";
import { ArrowTwo } from "../icons/ArrowTwo";
import { StepTwo } from "./StepTwo";

export const StepOne = ({ handleContinuePress, step }) => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [rating, setRating] = useState(0);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
    setButtonEnabled(true);
  };

  const handlePress = () => {
    handleContinuePress(rating, "");
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <Star
            size={40}
            color={rating >= i ? colors.primary : colors.primaryGray}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <>
      <View style={styles.marge}>
        {/* <Step ActiveStep={step} /> */}
        <Text style={styles.title}>Comment était votre lieu d'arrivé ?</Text>
        <View style={styles.starContainer}>{renderStars()}</View>
        <Text style={styles.textContainer}>
          Évaluez votre expérience pour aider les autres conducteurs à trouver
          un lieu.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCustom
          text={"Continuer"}
          icon={
            <ArrowTwo color={buttonEnabled ? colors.white : colors.darkWhite} />
          }
          color={buttonEnabled ? colors.primary : colors.primaryGray}
          textColor={buttonEnabled ? colors.white : colors.darkWhite}
          onPress={handlePress}
          disabled={!buttonEnabled}
        />
        <ButtonCustom
          text={"Évaluer plus tard"}
          color={colors.darkGrey2}
          onPress={() => handleContinuePress(0)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  marge: {
    marginHorizontal: 24,
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: 27,
    fontFamily: texts.fontFamilyBold,
    textAlign: "center",
    marginVertical: 35,
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    color: colors.white,
    fontFamily: texts.fontFamilyMedium,
    textAlign: "center",
    fontSize: 13,
    marginTop: 25,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});
