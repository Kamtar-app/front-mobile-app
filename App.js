import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "react-native";
import { Linking } from "react-native";

export default function App() {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: "red", marginLeft: 20, marginRight: 20 },
            ]}
        >
            <StatusBar style="auto" />
            <NavBar />

            <ThumbnailPlaceType label={"Parking"} />
            {/* <ThumbnailPlace2
                imageURL="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
                city="Caulnes • 5 KM"
                name="Restaurant de la gare"
                type="Restaurant • Sanitaire • Douche • Parking sécurisé"
                note="5"
            /> */}
            {/* <ThumbnailPlace1
                imageURL="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
                city="Caulnes • 5 KM"
                name="Restaurant de la gare"
                type="Restaurant • Sanitaire • Douche • Parking sécurisé"
            /> */}
            {/* <ButtonCustom text={"Connexion"} /> */}
            {/* <TextInputCustom placeholder={"Email"} /> */}
        </View>
    );
}

const ThumbnailPlaceType = ({ label }) => {
    return (
        <View style={stylesThumbnailPlaceType.container}>
            <View style={stylesThumbnailPlaceType.iconContainer}>
                <Image
                    source={require("./assets/icon.png")}
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

const ThumbnailPlace2 = ({ imageURL, city, name, type, note }) => {
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

const ThumbnailPlace1 = ({ imageURL, city, name, type }) => {
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

const NavBarItem = () => {
    return (
        <TouchableOpacity style={stylesNavBar.navBarItem} onPress={() => {}}>
            <Image
                style={stylesNavBar.navBarItemIcon}
                source={require("./assets/icon.png")}
            />
        </TouchableOpacity>
    );
};

const NavBar = () => {
    return (
        <View style={stylesNavBar.navBar}>
            <NavBarItem />
            <NavBarItem />
            <NavBarItem />
            <NavBarItem />
        </View>
    );
};

const stylesNavBar = StyleSheet.create({
    navBar: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "#000000",
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingVertical: 15,
        borderRadius: 50,
        paddingHorizontal: 20,
    },
    navBarItem: {
        backgroundColor: "#FE6E1F",
        borderRadius: 35,
    },
    navBarItemIcon: {
        margin: 12,
        width: 20,
        height: 20,
    },
});

const ButtonCustom = ({ text }) => {
    return (
        <TouchableOpacity style={stylesBtn.bouton} onPress={() => {}}>
            <Text style={stylesBtn.texteBouton}>{text}</Text>
        </TouchableOpacity>
    );
};

const stylesBtn = StyleSheet.create({
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

const styles2 = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        paddingRigth: 15,
        paddingLeft: 15,
        paddingTop: 17,
        paddingBottom: 17,
        borderRadius: 28,
    },
    input: {
        flex: 1,
        fontSize: 17,
        marginLeft: 15,
        color: "white",
    },
    icon: {
        marginRight: 10,
        width: 25,
        height: 25,
        color: "white",
    },
});

const TextInputCustom = ({ placeholder, startIcon = null, endIcon = null }) => {
    return (
        <View style={styles2.inputContainer}>
            <Image style={styles2.icon} source={require("./assets/icon.png")} />
            {/* <Ionicons name="ios-person" size={24} color="gray" style={styles2.icon} /> */}
            <TextInput
                style={styles2.input}
                placeholder={placeholder}
                placeholderTextColor="white"
            />
            <Image style={styles2.icon} source={require("./assets/icon.png")} />
            {/* <Ionicons name="ios-lock-closed" size={24} color="gray" style={styles2.icon} /> */}
        </View>
    );
};

const colors = StyleSheet.create({
    primary: "#000",
    secondary: "#fff",
});

const textInputCustomStyle = StyleSheet.create({
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

// const GoogleMapsComponent = () => {
//   const openGoogleMaps = () => {
//     // Coordonnées de la destination, des étapes et du point de départ
//     const destinationLat = 37.78825;
//     const destinationLng = -122.4324;
//     const waypoint1Lat = 37.773972;
//     const waypoint1Lng = -122.431297;
//     const waypoint2Lat = 37.789173;
//     const waypoint2Lng = -122.419333;

//     // URL de l'application Google Maps avec les paramètres de destination et d'étapes
//     const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${waypoint1Lat},${waypoint1Lng}&destination=${destinationLat},${destinationLng}&waypoints=${waypoint2Lat},${waypoint2Lng}&travelmode=driving`;

//     // Ouvrir Google Maps
//     Linking.openURL(googleMapsUrl)
//       .catch((err) => console.error('Erreur lors de l\'ouverture de Google Maps :', err));
//   }

//   return (
//     <View>
//       <Button
//         title="Ouvrir Google Maps"
//         onPress={openGoogleMaps}
//       />
//     </View>
//   );
// }
