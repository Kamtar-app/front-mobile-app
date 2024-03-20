import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const NavBarItem = ({ active, action, children }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(action);
  }

  return (
    <TouchableOpacity
      style={[stylesNavBar.navBarItem, active() === true && stylesNavBar.active]}
      onPress={() => {
        handlePress()
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

const stylesNavBar = StyleSheet.create({
  navBarItem: {
    borderRadius: 35,
    padding: 12,
  },
  active: {
    backgroundColor: "#FE6E1F",
  },
});
