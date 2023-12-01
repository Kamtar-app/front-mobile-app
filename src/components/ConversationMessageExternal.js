import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { ConversationBubble } from "./ConversationBubble";

export const ConversationMessageExternal = ({ children }) => {
  return (
    <View style={stylesConversationMessageExternal.container}>
      <Image
        source={require("../../assets/icon.png")}
        style={stylesConversationMessageExternal.profilePicture}
      />
      <ConversationBubble isExternalMessage={true}>
        {children}
      </ConversationBubble>
    </View>
  );
};

const stylesConversationMessageExternal = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-start",
  },
  profilePicture: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
  },
});
