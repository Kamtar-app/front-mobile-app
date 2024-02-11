import React, { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";

import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { SearchBar } from "../HomeScreen/SearchBar";
import { ThumbnailPlaceType } from "../HomeScreen/ThumbnailPlaceType";
import { Restaurant } from "../icons/Restaurant";
import { Fuel } from "../icons/Fuel";
import { Shower } from "../icons/Shower";
import { Toilet } from "../icons/Toilet";
import { Garage } from "../icons/Garage";
import { CarWash } from "../icons/CarWash";
import { Truck } from "../icons/Truck";
import { Parking } from "../icons/Parking";
import { colors } from "../../assets/styles/constants/colors";
import { DestinationPreview } from "./DestinationPreview";
import { Filters } from "./Filters";
import { Filter } from "../icons/Filter";
import { AppContext } from "../../context/AppContext";

export const BottomSheetSearch = forwardRef(({ openBottomSheetSteps }, ref) => {
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['15%', '80%'], []);

    // SEARCH
    const [isFilterDisplay, setIsFilterDisplay] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Global
    const { location, stepList, setStepList } = useContext(AppContext);

    useEffect(() => {
        addCurrentLocationToStep();
    }, [, location]);

    useEffect(() => {
        bottomSheetModalRef.current.present();
    }, []);

    useEffect(() => {
        fetchData();
    }, [searchText]);

    const openBottomSheet = () => {
        bottomSheetModalRef.current.expand();
    };

    useImperativeHandle(ref, () => ({
        openBottomSheet
    }));

    const addCurrentLocationToStep = async () => {
        if (!location) {
            return;
        }
        try {
            const response = await fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${location.longitude}&lat=${location.latitude}&limit=1`);

            const data = await response.json();
            if (data.features) {
                const newStepList = [...stepList];
                if (newStepList.length > 1) {
                    newStepList.shift();
                }
                newStepList.unshift(data.features.shift());
                setStepList(newStepList);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données de l'API", error);
        }
    }

    const fetchData = async () => {
        if (searchText.trim() === "") {
            return;
        }

        try {
            const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(searchText)}&limit=10`);
            const data = await response.json();
            if (data.features) {
                setSearchResults(data.features);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données de l'API", error);
        }
    };

    const addToStepList = (step) => {
        console.log(stepList)

        // let alreadyInStepList = false;

        // if(stepList.hasOwnProperty(step.properties.id)){
        //     alreadyInStepList = true;
        // }

        // if (alreadyInStepList === false) {
            let newStepList = [...stepList];
            newStepList.splice(newStepList.length - 1, 0, step);
            setStepList(newStepList);            

            openBottomSheetSteps();
            bottomSheetModalRef.current.close();
        // }
    }

    return (
        <View style={styles.container}>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ backgroundColor: colors.darkGrey2 }}
                handleIndicatorStyle={{ backgroundColor: colors.white }}
            >
                <ScrollView>
                    {isFilterDisplay
                        ? <Filters close={() => { setIsFilterDisplay(false) }} />
                        : <View style={styles.contentContainer}>
                            <View style={{ flexDirection: "row" }}>
                                <SearchBar openBottomSheet={openBottomSheet} setSearchText={setSearchText} searchText={searchText} />
                                <TouchableOpacity onPress={() => { setIsFilterDisplay(true) }}>
                                    <Filter />
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal={true} style={styles.thumbnailList} showsHorizontalScrollIndicator={false}>
                                <ThumbnailPlaceType label={"Parking"} labelColor={colors.white} backgroundColor={colors.darkGrey}><Parking /></ThumbnailPlaceType>
                                <ThumbnailPlaceType label={"Restaurant"} labelColor={colors.white} backgroundColor={colors.darkGrey}><Restaurant /></ThumbnailPlaceType>
                                <ThumbnailPlaceType label={"Carburant"} labelColor={colors.white} backgroundColor={colors.darkGrey}><Fuel /></ThumbnailPlaceType>
                                <ThumbnailPlaceType label={"Douche"} labelColor={colors.white} backgroundColor={colors.darkGrey}><Shower /></ThumbnailPlaceType>
                                <ThumbnailPlaceType label={"Sanitaire"} labelColor={colors.white} backgroundColor={colors.darkGrey}><Toilet /></ThumbnailPlaceType>
                                <ThumbnailPlaceType label={"Garage"} labelColor={colors.white} backgroundColor={colors.darkGrey}><Garage /></ThumbnailPlaceType>
                                <ThumbnailPlaceType label={"Station lavage"} labelColor={colors.white} backgroundColor={colors.darkGrey}><CarWash /></ThumbnailPlaceType>
                                <ThumbnailPlaceType label={"Entreprise"} labelColor={colors.white} backgroundColor={colors.darkGrey}><Truck /></ThumbnailPlaceType>
                            </ScrollView>
                            <View style={styles.horizontalBar} />
                            <View>
                                {searchResults.map((result, key) => (
                                    <TouchableOpacity onPress={() => addToStepList(result)}>
                                        <DestinationPreview
                                            key={result.properties.id}
                                            title={result.properties.label}
                                            street={result.properties.context}
                                            latitude={result.geometry.coordinates[1]}
                                            longitude={result.geometry.coordinates[0]}
                                        />
                                        {key !== searchResults.length - 1 ? (
                                            <View style={[styles.horizontalBar, { marginLeft: 75 }]} />
                                        ) : null}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    }
                </ScrollView>
            </BottomSheetModal>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    contentContainer: {
        marginTop: 20,
        marginBottom: 20
    },
    thumbnailList: {
        marginTop: 10,
        paddingLeft: 20,
        marginBottom: 20
    },
    horizontalBar: {
        marginHorizontal: 20,
        marginTop: 5,
        height: 0.5,
        backgroundColor: colors.lightGrey
    }
});





