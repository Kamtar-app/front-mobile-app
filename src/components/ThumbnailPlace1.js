export const ThumbnailPlace1 = ({ imageURL, city, name, type }) => {
    return (
        <View style={stylesThumbnailPlace1.card}>
            <Image
                source={{ uri: imageURL }}
                style={stylesThumbnailPlace1.backgroundImage}
            />
            <View style={stylesThumbnailPlace1.textContainer}>
                <Text style={stylesThumbnailPlace1.city}>{city}</Text>
                <Text style={stylesThumbnailPlace1.name}>{name}</Text>
                <Text style={stylesThumbnailPlace1.type}>{type}</Text>
            </View>
            <Image
                style={stylesThumbnailPlace1.like}
                source={require("./assets/icon.png")}
            />
        </View>
    );
};

const stylesThumbnailPlace1 = StyleSheet.create({
    card: {
        width: 210,
        height: 210,
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 15,
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "85%",
        padding: 10,
    },
    city: {
        color: "white",
        textTransf7orm: "uppercase",
        fontSize: 10,
        fontWeight: "bold",
    },
    name: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
    },
    type: {
        color: "white",
        fontSize: 10,
    },
    like: {
        margin: 15,
        width: 25,
        height: 25,
        position: "absolute",
        top: 0,
        right: 0,
    },
});