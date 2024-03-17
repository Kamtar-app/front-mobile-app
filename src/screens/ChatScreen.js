import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ConversationHeader } from "../components/ChatScreen/ConversationHeader";
import { ConversationMessageExternal } from "../components/ChatScreen/ConversationMessageExternal";
import { ConversationMessageInternal } from "../components/ChatScreen/ConversationMessageInternal";
import { TextInputChat } from "../components/ChatScreen/TextInputChat";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";

export const ChatScreen = ({}) => {
  const [textInput, setTextInput] = useState("");
  const [elements, setElements] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, []);

  const handleScrollview = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <ConversationHeader
        username={"John"}
        profilePicture={require("./../../assets/images/camion.jpg")}
      />
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollViewContent}
        >
          <ConversationMessageExternal
            profilePicture={require("./../../assets/images/camion.jpg")}
            children={<Text>Premier message</Text>}
          />
          <ConversationMessageInternal>
            Nullam iaculis
          </ConversationMessageInternal>
          <ConversationMessageInternal>
            Pellentesque
          </ConversationMessageInternal>
          <ConversationMessageExternal
            profilePicture={require("./../../assets/images/camion.jpg")}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            bibendum dolor. Proin ultrices arcu a nisi dignissim, ac
            sollicitudin nisi tincidunt. Sed sollicitudin felis in feugiat
            fermentum.
          </ConversationMessageExternal>
          {elements.map((item, index) => (
            <ConversationMessageInternal key={index}>
              {item}
            </ConversationMessageInternal>
          ))}
        </ScrollView>
        <TextInputChat
          elements={elements}
          setElements={setElements}
          textInput={textInput}
          setTextInput={setTextInput}
          style={styles.input}
          scrollview={handleScrollview}
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
  scrollViewContent: {
    justifyContent: "flex-end",
    height: "100%",
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
