import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Pin } from "../icons/Pin";
import { colors } from "../../assets/styles/constants/colors";
import { AppContext } from "../../context/AppContext";
import { calculateDistance } from "../../utils/location";
import { cropString } from "../../utils/string";

export const DestinationPreview = ({ title, street, latitude, longitude }) => {
    const { location } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Pin />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {cropString(title, 22)}
                    </Text>
                    <Text style={styles.street}>
                        {cropString(street, 30)}
                    </Text>
                </View>
                {
                    location &&
                    <Text style={styles.distance}>
                        {calculateDistance(location.latitude, location.longitude, latitude, longitude)} Km
                    </Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: "row",
    },
    title: {
        fontSize: 17,
        fontWeight: "700",
        color: "white",
        marginBottom: 5,
    },
    content: {
        width: "85%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    street: {
        fontSize: 15,
        fontWeight: "400",
        color: colors.grey
    },
    distance: {
        fontSize: 16,
        color: colors.grey,
        fontWeight: "700",
    }
});





