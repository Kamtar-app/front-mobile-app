import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ConversationHeader } from "../components/ChatScreen/ConversationHeader";
import { ConversationMessageExternal } from "../components/ChatScreen/ConversationMessageExternal";
import { ConversationMessageInternal } from "../components/ChatScreen/ConversationMessageInternal";
import { TextInputChat } from "../components/ChatScreen/TextInputChat";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";

export const ChatScreen = ({}) => {
  const [textInput, setTextInput] = useState("");
  const [elements, setElements] = useState([]);

  return (
    <View style={styles.container}>
      <ConversationHeader
        username={"John"}
        profilePicture={require("./../../assets/images/camion.jpg")}
      />
      <View style={styles.body}>
        <ConversationMessageExternal
          profilePicture={require("./../../assets/images/camion.jpg")}
          children={<Text>Je suis un test</Text>}
        />
        <ConversationMessageExternal
          profilePicture={require("./../../assets/images/camion.jpg")}
        >
          {`hello  sdfsfs sdf  sf s df s fd s fs df s fd sf s \npk \ndfgdfgd hello world`}
        </ConversationMessageExternal>
        <ConversationMessageInternal>OKO message</ConversationMessageInternal>
        <ConversationMessageExternal
          profilePicture={require("./../../assets/images/camion.jpg")}
        >
          OKO message
        </ConversationMessageExternal>
        {elements.map((item, index) => (
          <ConversationMessageInternal key={index}>
            {item}
          </ConversationMessageInternal>
        ))}
        <TextInputChat
          elements={elements}
          setElements={setElements}
          textInput={textInput}
          setTextInput={setTextInput}
          style={styles.input}
        />
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
  text: {
    fontSize: 17,
    color: colors.white,
    fontFamily: texts.fontFamilyMedium,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
