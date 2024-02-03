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

export const StepTwo = ({ handleContinuePress, step }) => {
  return (
    <>
      <View style={styles.marge}>
        <Step ActiveStep={step} />
        <Text style={styles.title}>
          Que devraient savoir les autres conducteurs ?
        </Text>
        <TextInput
          placeholder="Les conducteurs apprécient les détails tels que :

              L’état des sanitaires, douches,..
              Le nombre de place de parking
              La sécurité du lieu
              La qualité de la restauration"
          style={styles.textInput}
          placeholderTextColor={colors.grey}
          multiline={true}
          numberOfLines={5}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCustom
          text={"Continuer"}
          icon={<ArrowTwo color={colors.white} />}
          onPress={handleContinuePress}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  marge: {
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: 27,
    fontFamily: texts.fontFamilyBold,
    textAlign: "center",
    marginVertical: 35,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grey,
    padding: 10,
    color: colors.lightGrey,
  },
});
