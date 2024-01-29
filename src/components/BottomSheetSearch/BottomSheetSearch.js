import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";

import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
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

export const BottomSheetSearch = () => {
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['80%'], []);

    useEffect(() => {
        bottomSheetModalRef.current.present();
    }, []);

    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={0}
                    snapPoints={snapPoints}
                    backgroundStyle={{ backgroundColor: colors.darkGrey2 }}
                    handleIndicatorStyle={{ backgroundColor: 'white' }}
                >
                    <ScrollView>
                        <View style={styles.contentContainer}>
                            <SearchBar />
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
                        </View>
                        <View style={styles.horizontalBar} />
                        <View>
                            <DestinationPreview title={"La locanda"} street={"Rue des coquerlicots, Lamballe balba bla bla"} distance={15} />
                            <View style={[styles.horizontalBar, { marginLeft: 100 }]} />

                            <DestinationPreview title={"La locanda"} street={"Rue des coquerlicots, Lamballe balba bla bla"} distance={15} />
                            <View style={[styles.horizontalBar, { marginLeft: 100 }]} />

                            <DestinationPreview title={"La locanda"} street={"Rue des coquerlicots, Lamballe balba bla bla"} distance={15} />
                            <View style={[styles.horizontalBar, { marginLeft: 100 }]} />

                            <DestinationPreview title={"La locanda"} street={"Rue des coquerlicots, Lamballe balba bla bla"} distance={15} />
                            <View style={[styles.horizontalBar, { marginLeft: 100 }]} />

                            <DestinationPreview title={"La locanda"} street={"Rue des coquerlicots, Lamballe balba bla bla"} distance={15} />
                            <View style={[styles.horizontalBar, { marginLeft: 100 }]} />

                            <DestinationPreview title={"La locanda"} street={"Rue des coquerlicots, Lamballe balba bla bla"} distance={15} />
                            <View style={[styles.horizontalBar, { marginLeft: 100 }]} />

                            <DestinationPreview title={"La locanda"} street={"Rue des coquerlicots, Lamballe balba bla bla"} distance={15} />
                            <View style={[styles.horizontalBar, { marginLeft: 100 }]} />

                            <DestinationPreview title={"La locanda"} street={"Rue des coquerlicots, Lamballe balba bla bla"} distance={15} />
                        </View>
                    </ScrollView>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    );
};

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
        paddingLeft: 20,
    },
    horizontalBar: {
        marginHorizontal: 20,
        marginTop: 5,
        height: 0.5,
        backgroundColor: colors.lightGrey
    }
});





