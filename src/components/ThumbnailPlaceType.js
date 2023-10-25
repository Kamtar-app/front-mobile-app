import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

export const ThumbnailPlaceType = ({ label }) => {
    return (
        <View style={stylesThumbnailPlaceType.container}>
            <View style={stylesThumbnailPlaceType.iconContainer}>
                <Image
                    source={require("../../assets/icon.png")}
                    style={stylesThumbnailPlaceType.icon}
                />
            </View>
            <Text style={stylesThumbnailPlaceType.label}>{label}</Text>
        </View>
    );
};

const stylesThumbnailPlaceType = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer: {
        width: 70,
        height: 70,
        overflow: "hidden",
        borderRadius: 70,
        backgroundColor: "black",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    icon: {
        width: 35,
        height: 35,
    },
    label: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
    },
});