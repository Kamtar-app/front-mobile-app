import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Pin } from "../icons/Pin";
import { Cross } from "../icons/Cross";
import { colors } from "../../assets/styles/constants/colors";

export const Filters = ({ title, street, distance }) => {

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

    const noteList = [1, 2, 3, 4];

    return (
        <View style={styles.container}>
            <Cross />
            <Text>Filtres</Text>
            <Text>Trier par</Text>
            <View>
                {sortList.map(sortItem => (
                    <View>
                        <Text>
                            {sortItem}
                        </Text>
                        <View>
                            <View>
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
                {filterPlaceTypeList.map(filterItem => (
                    <View>
                        <Text>
                            {filterItem}
                        </Text>
                        <View>
                            <View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            <Text>Note</Text>
            <View>
                {noteList.map(note => (
                    <View>
                        <View>
                            <View>
                                {[...Array(5).keys()].map(key => (
                                    <View>

                                    </View>
                                ))}
                            </View>
                            <Text>
                                {note} et plus
                            </Text>
                        </View>
                        <View>
                            <View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
});





