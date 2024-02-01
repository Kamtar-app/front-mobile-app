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

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { SearchBar } from "../HomeScreen/SearchBar";
import { ThumbnailPlaceType } from "../HomeScreen/ThumbnailPlaceType";
import { Restaurant } from "../icons/Restaurant";
import { Fuel } from "../icons/Fuel";
import { Shower } from "../icons/Shower";
import { Toilet } from "../icons/Toilet";
import { Garage } from "../icons/Garage";
import { CarWash } from "../icons/CarWash";
import { Truck } from "../icons/Truck";
import { Parking } from "../icons/Parking";
import { colors } from "../../assets/styles/constants/colors";
import { Step } from "./Step";
import { Star } from "../icons/Star";
import { texts } from "../../assets/styles/constants/texts";
import { ButtonCustom } from "../ButtonCustom";
import { ArrowTwo } from "../icons/ArrowTwo";

export const RatingBottomSheet = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["60%"], []);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    bottomSheetModalRef.current.present();
  }, []);

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

  const handleContinuePress = () => {
    // Action à exécuter lors du clic sur le bouton "Continuer"
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: colors.darkGrey2 }}
          handleIndicatorStyle={{ backgroundColor: "white" }}
        >
          <ScrollView>
            <View style={styles.contentContainer}>
              <View style={styles.marge}>
                <Step />
                <Text style={styles.title}>
                  Comment était votre lieu d'arrivé ?
                </Text>
                <View style={styles.starContainer}>{renderStars()}</View>
                <Text style={styles.textContainer}>
                  Évaluez votre éxperience pour aider les autres conducteurs à
                  trouver un lieu.
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <ButtonCustom
                  text={"Continuer"}
                  icon={
                    <ArrowTwo
                      color={rating > 0 ? colors.white : colors.darkWhite}
                    />
                  }
                  color={rating > 0 ? colors.primary : colors.primaryGray}
                  textColor={rating > 0 ? colors.white : colors.darkWhite}
                  onPress={handleContinuePress}
                  disabled={rating > 0 ? buttonEnabled : !buttonEnabled}
                />
                <ButtonCustom
                  text={"Évaluer plus tard"}
                  color={colors.darkGrey2}
                />
              </View>
            </View>
            <View style={styles.horizontalBar} />
          </ScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  contentContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
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
