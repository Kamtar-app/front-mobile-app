import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const NavBarItem = ({ active, action, children }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[stylesNavBar.navBarItem, active && stylesNavBar.active]}
      onPress={() => {
        navigation.navigate(action);
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
