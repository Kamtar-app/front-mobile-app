import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  PermissionsAndroid,
  TextInput,
  Image,
  TouchableOpacity,
  Link,
  Platform,
} from "react-native";
import { TextInputCustom } from "../components/TextInputCustom";
import { ButtonCustom } from "../components/ButtonCustom";
import { ButtonUnderlinedCustom } from "../components/ButtonUnderlinedCustom";
import { ImageBackground } from "react-native";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";
import { Profil } from "./../../assets/icons/profil_icon.svg";
import image from "./../../assets/images/img_fond_accueil.jpg";
import * as Location from "expo-location";
import { NavBar } from "../components/NavBar";

export const WelcomeScreen = ({ navigation }) => {
  // const [hasPermission, setHasPermission] = useState(null);
  const [name, setName] = useState("Manon");
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();

  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Please grant location permissions");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    console.log("Location:");
    console.log(currentLocation);
  };

  // const geocode = async () => {
  //   const geocodedLocation = await Location.geocodeAsync(address);
  //   console.log("Geocoded Address:");
  //   console.log(geocodedLocation);
  // };

  // const reverseGeocode = async () => {
  //   const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
  //     longitude: location.coords.longitude,
  //     latitude: location.coords.latitude,
  //   });

  //   console.log("Reverse Geocoded:");
  //   console.log(reverseGeocodedAddress);
  // };
  // }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.containerImage}
        imageStyle={styles.image}
      >
        <View style={styles.view}>
          <View style={styles.containerText}>
            <Text style={styles.text}>
              Bonjour {name},{"\n"} Bienvenue sur
            </Text>
            <Text style={styles.orangeText}>Kamtar</Text>
          </View>
          <Text style={styles.largeText}>
            Veuillez activer votre GPS pour découvrir de meilleures suggestions
            sur votre trajet.
          </Text>
          {/* <Button title="Geocode Address" onPress={geocode} /> */}
          <ButtonCustom text={"Activer le GPS"} onPress={getPermissions} />
          {/* <ButtonCustom text={"Inscription"} onPress={getPermissions} /> */}
        </View>
      </ImageBackground>
      <NavBar /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  image: {
    backgroundColor: "#2D2D2Dff",
  },
  view: {
    padding: 40,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  text: {
    fontFamily: texts.fontFamilyLight,
    color: colors.white,
    fontSize: 35,
    alignItems: "flex-start",
  },
  largeText: {
    fontFamily: texts.fontFamilyLight,
    color: colors.white,
    fontSize: 20,
    alignItems: "flex-start",
  },
  orangeText: {
    color: colors.primary,
  },
});
