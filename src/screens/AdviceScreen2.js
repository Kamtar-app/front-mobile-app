import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Link,
  ScrollView,
} from "react-native";
import { colors } from "../assets/styles/constants/colors";
import { ActualLocalisation } from "../components/HomeScreen/ActualLocalisation";
import { WelcomeMessage } from "../components/HomeScreen/WelcomeMessage";
import { SearchBar } from "../components/HomeScreen/SearchBar";
import { ThumbnailPlaceType } from "../components/HomeScreen/ThumbnailPlaceType";
import { Parking } from "../components/icons/Parking";
import { Restaurant } from "../components/icons/Restaurant";
import { Fuel } from "../components/icons/Fuel";
import { Shower } from "../components/icons/Shower";
import { Toilet } from "../components/icons/Toilet";
import { Garage } from "../components/icons/Garage";
import { CarWash } from "../components/icons/CarWash";
import { Truck } from "../components/icons/Truck";
import { PlaceListHeader } from "../components/HomeScreen/PlaceListHeader";
import { ThumbnailPlace1 } from "../components/ThumbnailPlace1";
import { ThumbnailPlace2 } from "../components/HomeScreen/ThumbnailPlace2";
import { NavBar } from "../components/NavBar";
import { RatingBottomSheet } from "../components/AdviceBottomSheet/RatingBottomSheet";

export const AdviceScreen = ({}) => {
  return (
    <View style={styles.container}>
      <RatingBottomSheet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
