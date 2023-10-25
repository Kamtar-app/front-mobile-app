import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

export const ActualLocalisation = ({ localisation }) => {
    return (
        <View style={stylesActualLocalisation.container}>
            <Text style={stylesActualLocalisation.title}>
                Localisation actuelle
            </Text>
            <View style={stylesActualLocalisation.iconContainer}>
                <Image
                    source={require("../../assets/icon.png")}
                    style={stylesActualLocalisation.icon}
                />
                <Text style={stylesActualLocalisation.label}>{localisation}</Text>
            </View>
        </View>
    );
};

const stylesActualLocalisation = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#646464",
        marginBottom: 5,
        fontSize: 10
    },
    iconContainer: {
        overflow: "hidden",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    icon: {
        width: 10,
        height: 10,
    },
    label: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
        color: "#000000",
        marginLeft: 6
    },
});
