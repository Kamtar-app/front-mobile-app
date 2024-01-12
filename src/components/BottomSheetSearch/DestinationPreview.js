import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Pin } from "../icons/Pin";
import { colors } from "../../assets/styles/constants/colors";

export const DestinationPreview = ({ title, street, distance }) => {
    return (
        <View style={styles.container}>
            <Pin />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.street}>{street.substring(0, 30)}{street.length > 30 ? "..." :"" }</Text>
            </View>
            <Text style={styles.distance}>{distance} Km</Text>
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
        fontSize: 19,
        fontWeight: "700",
        color: "white",
        marginBottom: 5
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





