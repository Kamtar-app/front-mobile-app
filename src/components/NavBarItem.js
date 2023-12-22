import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export const NavBarItem = ({ active, action, children }) => {
    return (
        <TouchableOpacity style={[stylesNavBar.navBarItem, active && stylesNavBar.active]} onPress={action}>
            {children}
        </TouchableOpacity>
    );
};


const stylesNavBar = StyleSheet.create({
    navBarItem: {
        borderRadius: 35,
        padding: 12
    },
    active : {
        backgroundColor: "#FE6E1F"
    }
});