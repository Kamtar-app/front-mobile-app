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
import { MessageHeader } from "../components/MessagesScreen/MessageHeader";
import { ConversationPreview } from "../components/MessagesScreen/ConversationPreview";
import { NavBar } from "../components/NavBar";
import { texts } from "../assets/styles/constants/texts";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../assets/styles/constants/colors";

export const MessagesScreen = ({}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ChatScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <MessageHeader />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.leftButton]}>
            <Text style={styles.buttonText}>Personnel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextGrey}>Entreprise</Text>
          </TouchableOpacity>
        </View>

        {/* <View>
          <Text>En ligne</Text>
          <View></View>
        </View> */}
        <View>
          <Text style={styles.title}>Conversations</Text>
          <TouchableOpacity onPress={handlePress}>
            <View>
              <ConversationPreview
                username={"John"}
                lastMessage={"Ça roule à toute, bise"}
                hour={"11:57"}
                messageNumber={"1"}
                profilePicture={require("./../../assets/images/camion.jpg")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scrollview: {
    paddingHorizontal: 20,
  },
  thumbnailList: {
    paddingLeft: 20,
  },
  placeList: {
    marginTop: 15,
    paddingLeft: 20,
  },
  title: {
    fontFamily: texts.fontFamilyBold,
    fontSize: 20,
    marginTop: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 30,
    paddingVertical: 5,
  },
  leftButton: {
    backgroundColor: colors.lightGrey,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: texts.fontFamilySemiBold,
  },
  buttonTextGrey: {
    fontSize: 16,
    fontFamily: texts.fontFamilySemiBold,
    color: colors.grey,
  },
});
