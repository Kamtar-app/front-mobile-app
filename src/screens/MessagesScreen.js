import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Image,
    TouchableOpacity,
    Link,
    ScrollView,
} from "react-native";
import { colors } from "../assets/styles/constants/colors";
import { ActualLocalisation } from "../components/HomeScreen/ActualLocalisation";
import { WelcomeMessage } from "../components/HomeScreen/WelcomeMessage";
import { SearchBar } from "../components/HomeScreen/SearchBar";
import { ThumbnailPlaceType } from "../components/HomeScreen/ThumbnailPlaceType";
import { Parking } from "../components/icons/Parking";
import { Restaurant } from "../components/icons/Restaurant";
import { Fuel } from "../components/icons/Fuel";
import { Shower } from "../components/icons/Shower";
import { Toilet } from "../components/icons/Toilet";
import { Garage } from "../components/icons/Garage";
import { CarWash } from "../components/icons/CarWash";
import { Truck } from "../components/icons/Truck";
import { PlaceListHeader } from "../components/HomeScreen/PlaceListHeader";
import { ThumbnailPlace1 } from "../components/HomeScreen/ThumbnailPlace1";
import { NavBar } from "../components/NavBar";
import { MessageHeader } from "../components/MessagesScreen/MessageHeader";
import { ConversationPreview } from "../components/MessagesScreen/ConversationPreview";

export const MessagesScreen = ({ }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <MessageHeader />
                <View>
                    <Text>En ligne</Text>
                    <View>

                    </View>
                </View>
                <View>
                    <Text>Conversations</Text>
                    <View>
                        <ConversationPreview
                            username={"John"}
                            lastMessage={"Tu manges à St Malo ?"}
                            hour={"11:57"}
                            messageNumber={"1"}
                        />
                    </View>
                </View>
            </ScrollView>
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    thumbnailList: {
        paddingLeft: 20,
    },
    placeList: {
        marginTop: 15,
        paddingLeft: 20,
    },
});
