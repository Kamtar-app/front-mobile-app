import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TextInputCustom } from "../components/TextInputCustom";
import { ButtonCustom } from "../components/ButtonCustom";
import { ButtonUnderlinedCustom } from "../components/ButtonUnderlinedCustom";
import { ImageBackground } from "react-native";
import { colors } from "./../assets/styles/constants/colors";
import { texts } from "./../assets/styles/constants/texts";
import { Profil } from "./../../assets/icons/profil_icon.svg";
import image from "./../../assets/images/img_fond_accueil.jpg";
import { Password } from "../components/icons/Password";
import { Mail } from "../components/icons/Mail";

export const SigninScreen = ({ navigation }) => {
  // const [hasPermission, setHasPermission] = useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.containerImage}
        imageStyle={styles.image}
      >
        <View style={styles.view}>
          {/* <View style={styles.avatar}>{Profil}</View> */}
          <TextInputCustom placeholder={"Nom"} />
          <TextInputCustom
            placeholder={"Email"}
            startIcon={<Mail color="#fff" />}
          />
          <TextInputCustom
            placeholder={"Mot de passe"}
            startIcon={<Password color="#fff" />}
          />
          <TextInputCustom placeholder={"Confirmation du mot de passe"} />
          <ButtonCustom text={"Inscription"} onPress={null} />
          <ButtonUnderlinedCustom
            text={"Se connecter"}
            screen={"SignupScreen"}
          />
        </View>
      </ImageBackground>
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
  avatar: {
    width: 150,
    height: 150,
    backgroundColor: colors.white,
    borderRadius: 100,
    opacity: 0.5,
    marginBottom: 65,
  },
  containerText: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontFamily: texts.fontFamilyLight,
    color: colors.white,
    fontSize: 15,
    // backgroundColor: "green",
    alignItems: "flex-start",
  },
});
