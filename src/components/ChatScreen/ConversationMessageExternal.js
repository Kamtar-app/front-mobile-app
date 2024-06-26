import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { ConversationBubble } from "../ConversationBubble";

export const ConversationMessageExternal = ({ children, profilePicture }) => {
  return (
    <View style={stylesConversationMessageExternal.container}>
      <Image
        source={profilePicture}
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
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  profilePicture: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
  },
});
