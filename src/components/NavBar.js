import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
    return (
        <View style={stylesNavBar.navBar}>
            <NavBarItem />
            <NavBarItem />
            <NavBarItem />
            <NavBarItem />
        </View>
    );
};

const stylesNavBar = StyleSheet.create({
    navBar: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "#000000",
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 15,
        borderRadius: 50,
        paddingHorizontal: 20,
    },
    navBarItem: {
        backgroundColor: "#FE6E1F",
        borderRadius: 35,
    },
    navBarItemIcon: {
        margin: 12,
        width: 20,
        height: 20,
    },
});
