export const TextInputCustom = ({ placeholder, startIcon = null, endIcon = null }) => {
    return (
        <View style={stylestextInputCustom.inputContainer}>
            <Image style={stylestextInputCustom.icon} source={require("./assets/icon.png")} />
            <TextInput
                style={stylestextInputCustom.input}
                placeholder={placeholder}
                placeholderTextColor="white"
            />
            <Image style={stylestextInputCustom.icon} source={require("./assets/icon.png")} />
        </View>
    );
};

const stylestextInputCustom = StyleSheet.create({
    text: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    searchSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        position: "relative",
    },
    searchIcon: {
        padding: 10,
        position: "absolute",
        left: -45,
        top: 0,
    },
    input: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        width: "100%",
    },
});