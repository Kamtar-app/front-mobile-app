import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

const NavBarItem = () => {
    return (
        <TouchableOpacity style={stylesNavBar.navBarItem} onPress={() => { }}>
            <Image
                style={stylesNavBar.navBarItemIcon}
                source={require("../../assets/icon.png")}
            />
        </TouchableOpacity>
    );
};

const stylesNavBar = StyleSheet.create({
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