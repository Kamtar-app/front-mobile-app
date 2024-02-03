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
import { HomeScreen } from "../../screens/HomeScreen";
import { Image } from "react-native-svg";

export const StepThree = ({ step }) => {
  const [buttonEnabled, setButtonEnabled] = useState(false);

  return (
    <>
      <View style={styles.marge}>
        <Step ActiveStep={step} />
        <Text style={styles.title}>Merci !</Text>
        <Image
          source={require("../../../assets/images/camion_advice.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCustom
          text={"Retour à l'accueil"}
          onPress={() => {
            navigation.navigate(HomeScreen);
          }}
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
  buttonContainer: {
    marginVertical: 20,
  },
  image: {
    width: 85,
    height: 55,
    backgroundColor: "red",
  },
});
