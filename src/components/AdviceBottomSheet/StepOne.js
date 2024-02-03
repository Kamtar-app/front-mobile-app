import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SearchBar } from "../HomeScreen/SearchBar";
import { Parking } from "../icons/Parking";
import { colors } from "../../assets/styles/constants/colors";
import { Step } from "./Step";
import { Star } from "../icons/Star";
import { texts } from "../../assets/styles/constants/texts";
import { ButtonCustom } from "../ButtonCustom";
import { ArrowTwo } from "../icons/ArrowTwo";

export const StepOne = ({ handleContinuePress, step }) => {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [rating, setRating] = useState(0);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
    setButtonEnabled(true);
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
        <Step ActiveStep={step} />
        <Text style={styles.title}>Comment était votre lieu d'arrivé ?</Text>
        <View style={styles.starContainer}>{renderStars()}</View>
        <Text style={styles.textContainer}>
          Évaluez votre éxperience pour aider les autres conducteurs à trouver
          un lieu.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCustom
          text={"Continuer"}
          icon={
            <ArrowTwo color={rating > 0 ? colors.white : colors.darkWhite} />
          }
          color={rating > 0 ? colors.primary : colors.primaryGray}
          textColor={rating > 0 ? colors.white : colors.darkWhite}
          onPress={handleContinuePress}
          disabled={rating > 0 ? buttonEnabled : !buttonEnabled}
        />
        <ButtonCustom text={"Évaluer plus tard"} color={colors.darkGrey2} />
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
