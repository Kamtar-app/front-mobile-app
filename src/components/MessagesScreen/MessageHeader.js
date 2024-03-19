import { StyleSheet, Text, View } from "react-native";
import { texts } from "../../assets/styles/constants/texts";
import { AddPeople } from "../icons/AddPeople";
import { Glass } from "../icons/Glass";
import { colors } from "../../assets/styles/constants/colors";

export const MessageHeader = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <View style={styles.iconContainer}>
        <AddPeople />
        <Glass color={colors.black} width={26} height={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
    width: 65,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: texts.fontFamilyBold,
    fontSize: 40,
  },
  thumbnailList: {
    paddingLeft: 20,
  },
  placeList: {
    marginTop: 15,
    paddingLeft: 20,
  },
});
