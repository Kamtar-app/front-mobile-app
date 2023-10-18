
export const ConversationHeader = ({ username }) => {
    return (<View style={stylesConversationHeader.container}>
        <View style={stylesConversationHeader.firstContainer}>
            <Image
                source={require("./assets/icon.png")}
                style={stylesConversationHeader.backArrow}
            />
            <Image
                source={require("./assets/icon.png")}
                style={stylesConversationHeader.profilePicture}
            />
            <Text style={stylesConversationHeader.username}>{username}</Text>
        </View>
        <View style={stylesConversationHeader.secondContainer}>
            <Image
                source={require("./assets/icon.png")}
                style={stylesConversationHeader.vocalCallIcon}
            />
        </View>
    </View>)
}

const stylesConversationHeader = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        height: 60,
        marginTop: 40
    },
    firstContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    backArrow: {
        width: 25,
        height: 25,
    },
    profilePicture: {
        width: 55,
        height: 55,
        marginLeft: 20,
        borderRadius: 50
    },
    username: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    vocalCallIcon: {
        width: 30,
        height: 30,
    }
});