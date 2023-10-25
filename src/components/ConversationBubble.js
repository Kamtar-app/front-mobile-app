import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";

export const ConversationBubble = ({ children, isExternalMessage }) => {
    return (
        <View style={{
            ...stylesConversationBubble.container,
            ...{
                borderBottomLeftRadius: isExternalMessage === false ? 15 : 0,
                borderBottomRightRadius: isExternalMessage === true ? 15 : 0,
                backgroundColor: isExternalMessage === true ? "#F2F2F2" : "#000000",
            }
        }}>
            <Text style={{
                ...{
                    color: isExternalMessage === true ? "#000000" : "#ffffff",
                }
            }}>{children}</Text>
        </View>
    )
}

const stylesConversationBubble = StyleSheet.create({
    container: {
        width: "65%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
});