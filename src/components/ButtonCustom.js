import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

export const ButtonCustom = ({ text }) => {
    return (
        <TouchableOpacity style={stylesButtonCustom.bouton} onPress={() => { }}>
            <Text style={stylesButtonCustom.texteBouton}>{text}</Text>
        </TouchableOpacity>
    );
};

const stylesButtonCustom = StyleSheet.create({
    bouton: {
        backgroundColor: "red",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        borderRadius: 35,
    },
    texteBouton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17,
    },
});