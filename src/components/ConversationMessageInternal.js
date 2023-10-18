export const ConversationMessageInternal = ({ children }) => {
    return (
        <View style={stylesConversationMessageInternal.container}>
            <ConversationBubble isExternalMessage={false}>
                {children}
            </ConversationBubble>
            <View style={stylesConversationMessageInternal.containerUserProfilPicture}>
                <Image
                    source={require("./assets/icon.png")}
                    style={stylesConversationMessageInternal.profilePicture}
                />
            </View>
        </View>)
}

const stylesConversationMessageInternal = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "flex-end",
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "flex-end"
    },
    containerUserProfilPicture: {
        width: 12,
        height: 12,
        marginLeft: 10,
        backgroundColor: "#FE6E1F"
    },
    profilePicture: {
        width: 12,
        borderRadius: 50,
        height: 12,
    },
});