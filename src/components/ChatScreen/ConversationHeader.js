import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { BackArrow } from "../icons/BackArrow";
import { Phone } from "../icons/Phone";
import { Camera } from "../icons/Camera";
import { useNavigation } from "@react-navigation/native";

export const ConversationHeader = ({ username, profilePicture }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={stylesConversationHeader.container}>
      <View style={stylesConversationHeader.firstContainer}>
        <TouchableOpacity onPress={handlePress}>
          <BackArrow style={stylesConversationHeader.backArrow} />
        </TouchableOpacity>
        <Image
          source={profilePicture}
          style={stylesConversationHeader.profilePicture}
        />
        <Text style={stylesConversationHeader.username}>{username}</Text>
      </View>
      <View style={stylesConversationHeader.secondContainer}>
        <Phone />
        <Camera />
      </View>
    </View>
  );
};

const stylesConversationHeader = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 80,
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    position: "relative",
    zIndex: 1,
  },
  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    width: 25,
    height: 25,
  },
  profilePicture: {
    width: 55,
    height: 55,
    marginLeft: 20,
    borderRadius: 50,
  },
  username: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  secondContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: 50,
    justifyContent: "space-between",
  },
});
