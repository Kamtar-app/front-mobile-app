import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ConversationHeader } from "../components/ChatScreen/ConversationHeader";
import { ConversationMessageExternal } from "../components/ChatScreen/ConversationMessageExternal";
import { ConversationMessageInternal } from "../components/ChatScreen/ConversationMessageInternal";
import { TextInputChat } from "../components/ChatScreen/TextInputChat";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";
import { Map } from "../components/PlaceScreen/Map";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "./../../map-style.json";
import { Marker } from "react-native-svg";
import { SearchBar } from "../components/HomeScreen/SearchBar";
import { BottomSheetSearch } from "../components/BottomSheetSearch/BottomSheetSearch";
import { BottomSheetSteps } from "../components/BottomSheetSteps";

export const MapScreen = ({ }) => {
    const [textInput, setTextInput] = useState("");
    const [elements, setElements] = useState([]);
    const bottomSheetSearchRef = useRef();
    const bottomSheetStepsRef = useRef();

    const initialRegion = {
        latitude: 48.8566,
        longitude: 2.3522,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const openBottomSheetSearch = () => {
        bottomSheetSearchRef.current.openBottomSheet();
    };

    const openBottomSheetSteps = () => {
        bottomSheetStepsRef.current.openBottomSheet();
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
            >
            </MapView>
            <BottomSheetSearch 
                ref={bottomSheetSearchRef} 
                openBottomSheetSteps={openBottomSheetSteps}
            />
            <BottomSheetSteps 
                ref={bottomSheetStepsRef}
                openBottomSheetSearch={openBottomSheetSearch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        width: "100%",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
