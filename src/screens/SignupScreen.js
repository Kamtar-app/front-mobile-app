import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Link,
} from "react-native";
import { TextInputCustom } from "../components/TextInputCustom";
import { ButtonCustom } from "../components/ButtonCustom";
import { ButtonUnderlinedCustom } from "../components/ButtonUnderlinedCustom";
import { WelcomeScreen } from "./WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackground } from "react-native";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";
import image from "./../../assets/images/img_fond_accueil.jpg";
import { Password } from "../components/icons/Password";
import { HiddenEye } from "../components/icons/HiddenEye";
import { Mail } from "../components/icons/Mail";
import { Profil } from "../components/icons/Profil";

export const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.containerImage}
        imageStyle={styles.image}
      >
        <View style={styles.view}>
          <View style={styles.containerAvatar}>
            <Profil color="#fff" size="46" />
          </View>
          <TextInputCustom
            placeholder={"Nom"}
            startIcon={<Profil color="#fff" size="20" />}
          />
          <TextInputCustom
            placeholder={"Email"}
            startIcon={<Mail color="#fff" />}
          />
          <TextInputCustom
            placeholder={"Mot de passe"}
            secureTextEntry={true}
            startIcon={<Password color="#fff" />}
            endIcon={<HiddenEye color="#fff" />}
          />
          <TextInputCustom
            placeholder={"Confirmation"}
            secureTextEntry={true}
            startIcon={<Password color="#fff" />}
            endIcon={<HiddenEye color="#fff" />}
          />
          <View style={styles.containerButton}>
            <ButtonCustom text={"Inscription"} />
          </View>
          <ButtonUnderlinedCustom
            text={"Se connecter"}
            screen={"SigninScreen"}
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
  containerAvatar: {
    width: 150,
    height: 150,
    backgroundColor: colors.white,
    borderRadius: 100,
    opacity: 0.5,
    marginTop: 60,
    marginBottom: 65,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "flex-start",
  },
  containerButton: {
    marginTop: 20,
    width: "100%",
  },
});
