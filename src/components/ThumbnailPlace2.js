export const ThumbnailPlace2 = ({ imageURL, city, name, type, note }) => {
    return (
        <View style={stylesThumbnailPlace2.card}>
            <Image
                source={{ uri: imageURL }}
                style={stylesThumbnailPlace2.backgroundImage}
            />
            <View style={stylesThumbnailPlace2.textContainer}>
                <Text style={stylesThumbnailPlace2.city}>{city}</Text>
                <Text style={stylesThumbnailPlace2.name}>{name}</Text>
                <Text style={stylesThumbnailPlace2.type}>{type}</Text>
            </View>
            <View style={stylesThumbnailPlace2.noteContainer}>
                <Image
                    source={require("./assets/icon.png")}
                    style={stylesThumbnailPlace2.star}
                />
                <Text style={stylesThumbnailPlace2.note}>{note}</Text>
            </View>
        </View>
    );
};

const stylesThumbnailPlace2 = StyleSheet.create({
    card: {
        width: 210,
        height: 210,
        overflow: "hidden",
        marginRight: 15,
        borderRadius: 20,
    },
    backgroundImage: {
        borderRadius: 20,
        width: "100%",
        height: "70%",
    },
    textContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "90%",
        padding: 10,
        paddingTop: 5,
        height: "30%",
    },
    city: {
        color: "#5F5F5F",
        textTransform: "uppercase",
        fontSize: 10,
        fontWeight: "bold",
    },
    name: {
        color: "#000000",
        fontSize: 10,
        fontWeight: "bold",
    },
    type: {
        color: "#5F5F5F",
        fontSize: 10,
    },
    noteContainer: {
        position: "absolute",
        top: "73%",
        right: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    star: {
        width: 10,
        height: 10,
        marginRight: 3,
    },
    note: {
        color: "#F4B742",
        fontSize: 10,
    },
});