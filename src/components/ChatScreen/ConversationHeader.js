import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { BackArrow } from "../icons/BackArrow";
import { useNavigation } from "@react-navigation/native";

export const ConversationHeader = ({ username, profilePicture }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity onPress={handlePress}>
          <BackArrow style={styles.backArrow} />
        </TouchableOpacity>
        <Image
          source={profilePicture}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.secondContainer}>
        <Image
          source={require("../../../assets/images/talkie-walkie.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    alignItems: "center",
    height: "100%",
    width: 20,
    justifyContent: "center",
    marginRight: 20
  },
  image: {
    height: 45,
  },
});
