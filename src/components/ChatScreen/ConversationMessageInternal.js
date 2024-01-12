import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { ConversationBubble } from "../ConversationBubble";
import { Check } from "../icons/Check";

export const ConversationMessageInternal = ({ children }) => {
  return (
    <View style={stylesConversationMessageInternal.container}>
      <ConversationBubble isExternalMessage={false}>
        {children}
      </ConversationBubble>
      {/* <Image
          source={require("../../assets/icon.png")}
          style={stylesConversationMessageInternal.profilePicture}
        /> */}
      <View
        style={stylesConversationMessageInternal.containerUserProfilPicture}
      >
        <Check style={stylesConversationMessageInternal.check} />
      </View>
    </View>
  );
};

const stylesConversationMessageInternal = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 13,
    justifyContent: "flex-end",
  },
  containerUserProfilPicture: {
    width: 15,
    height: 15,
    marginLeft: 10,
    borderRadius: 50,
    backgroundColor: "#FE6E1F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    width: 12,
    borderRadius: 50,
    height: 12,
  },
});
