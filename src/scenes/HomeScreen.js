import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Link,
} from "react-native";
import { TextInputCustom } from "../components/TextInputCustom";
import { ButtonCustom } from "../components/ButtonCustom";
import { ButtonUnderlinedCustom } from "../components/ButtonUnderlinedCustom";
import { SigninScreen } from "./SigninScreen";
import { ChatScreen } from "./ChatScreen";
import { HiddenEye } from "../components/icons/HiddenEye";
// import { Eye } from "../components/icons/Eye";
import { Password } from "../components/icons/Password";
import Mail from "./../../assets/icons/mail.svg";
import MotDePasse from "./../../assets/icons/motdepasse_icon.svg";
import Yeux from "./../../assets/icons/motdepasse_cache_icon.svg";
import image from "./../../assets/images/img_fond_accueil.jpg";
import { colors } from "./../assets/styles/constants/colors";
import { texts } from "./../assets/styles/constants/texts";
import { useNavigation } from "@react-navigation/native";
import { WelcomeScreen } from "./WelcomeScreen";

export const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.view}>
          <View style={styles.containerLogo}>
            <HiddenEye style={styles.logo} color="#000" />
          </View>
          <TextInputCustom
            placeholder={"Email"}
            startIcon={<Mail style={styles.icon} />}
          />
          <TextInputCustom
            placeholder={"Mot de passe"}
            startIcon={<Password color="#fff" />}
          />
          <TouchableOpacity
            style={styles.containerText}
            onPress={() => {
              navigation.navigate(SigninScreen);
            }}
          >
            <Text style={styles.text}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
          <ButtonCustom text={"Connexion"} screen={"WelcomeScreen"} />
          <ButtonUnderlinedCustom text={"S'inscrire"} screen={"SignupScreen"} />
          <ButtonUnderlinedCustom text={"ChatScreen"} screen={"ChatScreen"} />
          {/* <View style={styles.containerText}>
            <Text style={styles.text}>Vous êtes partenaires ? </Text>
            <ButtonUnderlinedCustom
              text={"Cliquez ici"}
              screen={"SigninScreen"}
            />
          </View> */}
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
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  view: {
    padding: 40,
  },
  containerLogo: {
    display: "flex",
    alignItems: "center",
    marginBottom: 235,
  },
  logo: {
    fontSize: 50,
  },
  containerText: {
    display: "flex",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 17,
    color: colors.white,
    fontFamily: texts.fontFamilyMedium,
  },
  // containerText: {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  // },
  // text: {
  //   fontFamily: texts.fontFamilyLight,
  //   color: colors.white,
  //   fontSize: 15,
  //   alignItems: "flex-start",
  // },
  icon: {
    width: 20,
    height: 20,
  },
});
