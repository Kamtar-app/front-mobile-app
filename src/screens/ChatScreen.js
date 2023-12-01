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
} from "react-native";
import { TextInputCustom } from "../components/TextInputCustom";
import { ConversationHeader } from "../components/ConversationHeader";
import { ConversationMessageExternal } from "../components/ConversationMessageExternal";
import { ConversationMessageInternal } from "../components/ConversationMessageInternal";
import { ButtonCustom } from "../components/ButtonCustom";
import { ButtonUnderlinedCustom } from "../components/ButtonUnderlinedCustom";
import { SigninScreen } from "./SigninScreen";
import Mail from "./../../assets/icons/mail.svg";
import image from "./../../assets/images/img_fond_accueil.jpg";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";

export const ChatScreen = ({}) => {
  const [textInput, setTextInput] = useState("");
  const [valeurConstante, setValeurConstante] = useState(null);

  const handlePress = () => {
    // Mettre à jour la constante avec la valeur actuelle du champ de saisie
    setValeurConstante(textInput);
    // Faire autre chose avec la valeur si nécessaire
    // Par exemple, l'envoyer à une fonction externe ou la traiter d'une autre manière
    console.log("Valeur de la constante:", valeurConstante);
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
    console.log(e.target);
    console.log(textInput);
  };

  return (
    <View style={styles.container}>
      <ConversationHeader username={"John"} />
      <View style={styles.body}>
        <ConversationMessageExternal children={<Text>Je suis un test</Text>} />
        <ConversationMessageExternal>
          {`hello  sdfsfs sdf  sf s df s fd s fs df s fd sf s \npk \ndfgdfgd hello world`}
        </ConversationMessageExternal>
        <ConversationMessageInternal>OKO message</ConversationMessageInternal>
        <ConversationMessageExternal>OKO message</ConversationMessageExternal>
        <ConversationMessageInternal>
          {/* {valeurConstante && { valeurConstante }} */}
          test
        </ConversationMessageInternal>
        <View style={styles.inputContainer}>
          <TextInputCustom
            placeholder={"Ecrivez votre message"}
            onChange={handleChange}
            endIcon={<Mail color="#fff" />}
            value={textInput}
          />
          <TouchableOpacity style={styles.containerText} onPress={handlePress}>
            <Text>bouton</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  body: {
    padding: 25,
    backgroundColor: "#592317",
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
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
  icon: {
    width: 20,
    height: 20,
  },
  inputContainer: {
    backgroundColor: colors.white,
  },
});
