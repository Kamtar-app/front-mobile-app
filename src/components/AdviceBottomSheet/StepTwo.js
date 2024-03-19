// StepTwo.js

import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { colors } from "../../assets/styles/constants/colors";
import { texts } from "../../assets/styles/constants/texts";
import { ButtonCustom } from "../ButtonCustom";
import { ArrowTwo } from "../icons/ArrowTwo";

export const StepTwo = ({ handleContinuePress, step }) => {
  const [commentContent, setCommentContent] = useState("");

  const handlePress = () => {
    handleContinuePress("", commentContent);
  };

  return (
    <>
      <View style={styles.marge}>
        {/* <Step ActiveStep={step} /> */}
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
          value={commentContent}
          onChangeText={(text) => setCommentContent(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonCustom
          text={"Continuer"}
          icon={<ArrowTwo color={colors.white} />}
          onPress={handlePress}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  marge: {
    justifyContent: "center",
    marginHorizontal: 24,
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
