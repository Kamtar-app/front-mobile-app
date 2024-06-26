import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/styles/constants/colors";

export const ThumbnailPlaceType = ({ label, labelColor, backgroundColor, children }) => {
    return (
        <View style={stylesThumbnailPlaceType.container}>
            <View style={[stylesThumbnailPlaceType.iconContainer, { backgroundColor: backgroundColor}]}>
                {children}
            </View>
            <Text style={[stylesThumbnailPlaceType.label, {color: labelColor}]}>{label}</Text>
        </View>
    );
};

const stylesThumbnailPlaceType = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12
    },
    iconContainer: {
        width: 70,
        height: 70,
        overflow: "hidden",
        borderRadius: 70,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 11,
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