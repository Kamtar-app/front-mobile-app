export const ConversationPreview = ({ username, lastMessage, hour, messageNumber }) => {
    return (
        <View style={stylesConversationPreview.container}>
            <View style={stylesConversationPreview.containerContent}>
                <Image
                    source={require("./assets/icon.png")}
                    style={stylesConversationPreview.profilePicture}
                />
                <View style={stylesConversationPreview.content}>
                    <Text style={stylesConversationPreview.username}>{username}</Text>
                    <Text style={stylesConversationPreview.lastMessage}>{lastMessage}</Text>
                </View>
            </View>
            <View style={stylesConversationPreview.metadata}>
                <Text style={stylesConversationPreview.hour}>{hour}</Text>
                <View style={stylesConversationPreview.messageNumberContainer}>
                    <Text style={stylesConversationPreview.roundText}>{messageNumber}</Text>
                </View>
            </View>
        </View>
    )
}

const stylesConversationPreview = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    containerContent: {
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    content: {
        flexDirection: "column",
    },
    username: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    },
    lastMessage: {
        color: "#000000",
        fontSize: 15
    },
    metadata: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    hour: {
        fontSize: 12,
        textAlign: "left",
        marginBottom: 5
    },
    messageNumberContainer: {
        width: 20,
        height: 20,
        backgroundColor: "#FE6E1F",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageNumber: {
        fontSize: 12,
        backgroundColor: "green",
        alignSelf: 'stretch',
    },
    profilePicture: {
        width: 55,
        height: 55,
        marginRight: 10,
        borderRadius: 50
    },
});
