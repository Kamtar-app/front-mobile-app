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

export const MessagesScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <MessageHeader />
        <View>
          <Text>En ligne</Text>
          <View></View>
        </View>
        <View>
          <Text>Conversations</Text>
          <View>
            <ConversationPreview
              username={"John"}
              lastMessage={"Tu manges à St Malo ?"}
              hour={"11:57"}
              messageNumber={"1"}
            />
          </View>
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
  thumbnailList: {
    paddingLeft: 20,
  },
  placeList: {
    marginTop: 15,
    paddingLeft: 20,
  },
});
