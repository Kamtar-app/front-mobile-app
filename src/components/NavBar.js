import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

import { NavBarItem } from "./NavBarItem";
import { Home } from "./icons/Home";
import { Map } from "./icons/Map";
import { Conversation } from "./icons/Conversation";
import { Account } from "./icons/Account";
import { useContext, useEffect } from "react";
import { Routes } from "../assets/routes";
import { AppContext } from "../context/AppContext";


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
