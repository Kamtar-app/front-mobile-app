import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Pin } from "../icons/Pin";
import { Cross } from "../icons/Cross";
import { colors } from "../../assets/styles/constants/colors";
import { Check } from "../icons/Check";
import { Star } from "../icons/Star";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

export const Filters = ({ close }) => {

    const sortList = [
        "Le plus populaire",
        "Le plus proche",
        "Recemment ajouté",
    ];

    const filterPlaceTypeList = [
        "Carburant",
        "Douche",
        "Entreprise",
        "Garage",
        "Parking",
        "Restaurant",
        "Sanitaire",
        "Station lavage",
    ];

    const noteList = [4, 3, 2, 1];

    return (
        <BottomSheetScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
            <View style={styles.iconCross}>
                <TouchableOpacity onPress={() => close()}>
                    <Cross />
                </TouchableOpacity>
            </View>
            <Text style={styles.firstTitle}>Filtres</Text>
            <Text style={styles.secondTitle}>Trier par</Text>
            <View>
                {sortList.map((sortItem, key) => (
                    <View key={key} style={styles.input}>
                        <Text style={styles.label}>
                            {sortItem}
                        </Text>
                        <View style={styles.select}>
                            <View style={styles.selectPlain}>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            <View>
                <Text>Distance</Text>
                <Text>5 km</Text>
            </View>
            <View>

            </View>
            <View>
                {filterPlaceTypeList.map((filterItem, key) => (
                    <View key={key} style={styles.input}>
                        <Text style={styles.label}>
                            {filterItem}
                        </Text>
                        <View style={styles.checkPlain}>
                            <Check color={colors.black} width={14} height={18} />
                        </View>
                    </View>
                ))}
            </View>
            <Text style={styles.secondTitle}>Note</Text>
            <View>
                {noteList.map((note, key) => (
                    <View key={key} style={styles.input}>
                        <View style={[styles.input, { alignItems: "center" }]}>
                            <View style={{ flexDirection: "row" }}>
                                {[...Array(5).keys()].map((key, id) => (
                                    <View key={id}>
                                        <Star size={24} color={key < note ? "#F4B742" : colors.grey} />
                                    </View>
                                ))}
                            </View>
                            <Text style={[styles.label, { marginLeft: 10 }]}>
                                {note} et plus
                            </Text>
                        </View>
                        <View style={styles.select}>
                            <View style={styles.selectPlain}>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </BottomSheetScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        flexGrow: 1 
    },
    firstTitle: {
        fontSize: 30,
        color: colors.white,
        fontWeight: "700",
        marginBottom: 30
    },
    secondTitle: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "700",
        marginBottom: 30
    },
    iconCross: {
        marginBottom: 25
    },
    input: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 27,
    },
    label: {
        fontSize: 17,
        color: colors.white,
        fontWeight: "500"
    },
    select: {
        height: 27,
        width: 27,
        borderWidth: 2,
        borderColor: colors.grey,
        borderRadius: 50
    },
    selectPlain: {
        margin: 5,
        height: 13,
        width: 13,
        backgroundColor: colors.white,
        borderRadius: 50
    },
    checkEmpty: {
        height: 27,
        width: 27,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: colors.grey,
    },
    checkPlain: {
        height: 27,
        width: 27,
        borderWidth: 2,
        borderRadius: 4,
        backgroundColor: colors.white,
        borderColor: colors.white,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});





