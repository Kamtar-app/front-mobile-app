import { StyleSheet, Text, View } from "react-native";
import { texts } from "../../assets/styles/constants/texts";

export const MessageHeader = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <View>{/* Add frieds + search icon */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontFamily: texts.fontFamilyBold,
    fontSize: 40,
    marginTop: 70,
  },
  thumbnailList: {
    paddingLeft: 20,
  },
  placeList: {
    marginTop: 15,
    paddingLeft: 20,
  },
});
