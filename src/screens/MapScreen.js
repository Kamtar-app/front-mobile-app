import React, { useContext, useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ConversationHeader } from "../components/ChatScreen/ConversationHeader";
import { ConversationMessageExternal } from "../components/ChatScreen/ConversationMessageExternal";
import { ConversationMessageInternal } from "../components/ChatScreen/ConversationMessageInternal";
import { TextInputChat } from "../components/ChatScreen/TextInputChat";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";
import { Map } from "../components/PlaceScreen/Map";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import mapStyle from "./../../map-style.json";
import { SearchBar } from "../components/HomeScreen/SearchBar";
import { BottomSheetSearch } from "../components/BottomSheetSearch/BottomSheetSearch";
import { BottomSheetSteps } from "../components/BottomSheetSteps";
import { BottomSheetPlace } from "../components/BottomSheetPlace";
import { AppContext } from "../context/AppContext";
import MapViewDirections from "react-native-maps-directions";
import { PinPlain } from "../components/icons/PinPlain";
import { Plus } from "../components/icons/Plus";
import { Restaurant } from "../components/icons/Restaurant";
import { Parking } from "../components/icons/Parking";
import { Fuel } from "../components/icons/Fuel";
import { Shower } from "../components/icons/Shower";
import { Toilet } from "../components/icons/Toilet";
import { calculateDistance, FRANCE_DEFAULT_LOCATION, searchCurrentLocationString } from "../utils/location";
import { Glass } from "../components/icons/Glass";
import { Filter } from "../components/icons/Filter";
import { BackButton } from "../components/BackButton";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { Garage } from "../components/icons/Garage";
import { CarWash } from "../components/icons/CarWash";
import { Truck } from "../components/icons/Truck";
import { matchCategoryIdIcon } from "../utils/icon";

export const MapScreen = ({ }) => {
    const route = useRoute();
    const placeId = route.params?.placeId;

    const bottomSheetSearchRef = useRef();
    const bottomSheetStepsRef = useRef();
    const bottomSheetPlaceRef = useRef();
    const mapRef = useRef();

    const { location, stepList, setStepList } = useContext(AppContext);
    const [stepListExtremity, setStepListExtremity] = useState();
    const [directionData, setDirectionData] = useState();
    const [idStepToModify, setIdStepToModify] = useState();
    const [currentLocationString, setCurrentLocationString] = useState();
    const [placeList, setPlaceList] = useState([]);
    const [currentPlace, setCurrentPlace] = useState([]);
    const [userList, setUserList] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (placeId) {
            fetchPlaceById(placeId);
        }
    }, [route]);


    const fetchPlaceById = async (id) => {
        fetch(`${process.env.API_END_POINT}/place/${id}`)
            .then((response) => response.json())
            .then((data) => {
                insertCoordinate(data);
            })
            .catch((error) => console.error("Error fetching place details:", error));
    }

    useEffect(() => {
        if (directionData) {
            findPlaceInRoad(directionData.coordinates);
        }
    }, [directionData]);

    useEffect(() => {
        if(stepList && location){
            mapRef.current?.animateToRegion({ ...getMapRegion() })
        }
    }, [stepList, location])


    useEffect(() => {
        if (location) {
            findCurrentLocation(location)
        }
    }, [location])

    useEffect(() => {
        if (stepList.length >= 2) {
            setStepListExtremity({
                start: {
                    latitude: stepList[0].geometry.coordinates[1],
                    longitude: stepList[0].geometry.coordinates[0]
                },
                end: {
                    latitude: stepList[stepList.length - 1].geometry.coordinates[1],
                    longitude: stepList[stepList.length - 1].geometry.coordinates[0]
                }
            });
        }
    }, [stepList])

    const findPlaceInRoad = async (coordinates) => {
        try {
            const response = await fetch(
                `${process.env.API_END_POINT}/place/place-around-many-coordinates`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        maxDistance: 30,
                        coordinateList: coordinates,
                    }),
                }
            );

            const data = await response.json();

            // Continuez avec le traitement de la réponse
            setPlaceList(data.places);
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des données de l'API",
                error
            );
        }
    };

    const insertCoordinate = (place) => {
        console.log(place);
        console.log("ok");

        let newStepList = [...stepList];
        newStepList.splice(
            stepList.length - 1,
            0,
            {
                "id": place.id,
                "geometry": { "coordinates": [place.longitude, place.latitude] },
                "properties": {
                    "label": place.name + " " + place.city,
                }
            }
        );

        console.log(JSON.stringify(newStepList));

        setStepList(newStepList);
    }

    const findCurrentLocation = async (locationData) => {
        setCurrentLocationString(await searchCurrentLocationString(locationData));
    };

    useEffect(() => {
        if (stepList.length >= 2) {
            setStepListExtremity({
                start: {
                    latitude: stepList[0].geometry.coordinates[1],
                    longitude: stepList[0].geometry.coordinates[0],
                },
                end: {
                    latitude: stepList[stepList.length - 1].geometry.coordinates[1],
                    longitude: stepList[stepList.length - 1].geometry.coordinates[0],
                },
            });
        }
    }, [stepList]);

    const openBottomSheetSearch = () => {
        bottomSheetSearchRef.current.openBottomSheet();
    };

    const openBottomSheetSteps = () => {
        bottomSheetStepsRef.current.openBottomSheet();
    };

    const openBottomSheetPlace = (place) => {
        setCurrentPlace(place);
        bottomSheetPlaceRef.current.openBottomSheet();
        bottomSheetSearchRef.current.closeBottomSheet();
        bottomSheetStepsRef.current.closeBottomSheet();
    };

    const closeAllBottomSheet = () => {
        bottomSheetPlaceRef.current.closeBottomSheet();
        bottomSheetSearchRef.current.closeBottomSheet();
        bottomSheetStepsRef.current.closeBottomSheet();
    }

    const getMapRegion = () => {
        if (stepList.length < 2) {
            return location
                ? {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }
                : {};
        }

        // Calculer la région qui englobe tout le trajet
        const allLatitudes = stepList.map((step) => step.geometry.coordinates[1]);
        const allLongitudes = stepList.map((step) => step.geometry.coordinates[0]);

        const minLat = Math.min(...allLatitudes);
        const maxLat = Math.max(...allLatitudes);
        const minLon = Math.min(...allLongitudes);
        const maxLon = Math.max(...allLongitudes);

        return {
            latitude: (minLat + maxLat) / 2,
            longitude: (minLon + maxLon) / 2,
            latitudeDelta: Math.abs(maxLat - minLat) + 0.5,  // Ajoutez une marge de 0.2 pour s'assurer que tout le trajet est visible
            longitudeDelta: Math.abs(maxLon - minLon) + 0.5,
        };
    };

    const fetchUsers = () => {
        return fetch(`${process.env.API_END_POINT}/user/limit/3`)
            .then((response) => response.json())
            .then((data) => {
                setUserList(data)
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des données de l'utilisateur :",
                    error
                );
                return null;
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <BackButton bg={colors.darkGrey} />
            </View>

            <View style={styles.openBottomSheetContainer}>
                <TouchableOpacity
                    onPress={() => {
                        openBottomSheetSearch();
                    }}
                >
                    <View style={styles.openerBottomSheetSearch}>
                        <Glass color={colors.white} width={20} height={20} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        openBottomSheetSteps();
                    }}
                >
                    <View style={styles.openerBottomSheetSteps}>
                        <Filter
                            backgroundColor="transparent"
                            color={colors.white}
                            width={50}
                            height={50}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            {location && (
                <View style={styles.containerCenter}>
                    <View style={styles.topUserPosition}>
                        <Text style={styles.topUserPositionLabel}>
                            Localisation actuelle
                        </Text>
                        <View style={styles.topUserPositionPlaceContainer}>
                            <PinPlain />
                            <Text style={styles.topUserPositionPlace}>
                                {currentLocationString}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
            <MapView
                style={styles.map}
                customMapStyle={mapStyle}
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                initialRegion={FRANCE_DEFAULT_LOCATION}
            >
                {location && stepList.length >= 2 &&
                    <>
                        <MapViewDirections
                            origin={{ latitude: stepList[0].geometry.coordinates[1], longitude: stepList[0].geometry.coordinates[0] }}
                            destination={{ latitude: stepList[stepList.length - 1].geometry.coordinates[1], longitude: stepList[stepList.length - 1].geometry.coordinates[0] }}
                            waypoints={stepList.map(step => ({
                                latitude: step.geometry.coordinates[1],
                                longitude: step.geometry.coordinates[0],
                            }))}
                            apikey={process.env.EXPO_PUBLIC_GOOGLE_API_KEY}
                            strokeWidth={3}
                            strokeColor={colors.primary}
                            onReady={(result) => { setDirectionData(result) }}
                        />
                        {stepListExtremity?.start && <Marker coordinate={{ latitude: stepListExtremity.start.latitude, longitude: stepListExtremity.start.longitude }}>
                            <View style={styles.extremityMarker} />
                        </Marker>}
                        {stepListExtremity?.end &&
                            <Marker coordinate={{ latitude: stepListExtremity.end.latitude, longitude: stepListExtremity.end.longitude }}>
                                <View style={styles.extremityMarker} />
                            </Marker>
                        }
                        {location &&
                            <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }}>
                                <View style={styles.extremityMarker} />
                            </Marker>
                        }
                        {placeList.length > 0 &&
                            (placeList.map(place => (
                                <Marker key={place.id} onPress={() => { openBottomSheetPlace(place) }} coordinate={{ latitude: place.latitude, longitude: place.longitude }}>
                                    <View style={styles.markerContainer}>
                                        <View style={styles.iconContainer}>
                                            {matchCategoryIdIcon[place.categoryPlaces[0]?.categoryId]}
                                        </View>
                                        <View style={styles.triangle} />
                                    </View>
                                </Marker>
                            )))
                        }
                        {userList.map(user => (
                            <Marker key={user.id} coordinate={{ latitude: user.latitude, longitude: user.longitude }} style={styles.userPin}>
                                <Image
                                    source={{ uri: user.rank.iconPath }}
                                    style={styles.userPinIcon}
                                />
                                <View style={styles.userPinLabel}>
                                    <Text style={styles.userPinLabelContent}>{user.firstname}</Text>
                                </View>
                            </Marker>

                        ))}
                        {stepList.map((step, id) => (
                            <Marker key={id} coordinate={{ latitude: step.geometry.coordinates[1], longitude: step.geometry.coordinates[0] }}>
                                <View style={styles.extremityMarker} />
                            </Marker>
                        ))}
                    </>
                }
            </MapView>
            <BottomSheetSearch
                ref={bottomSheetSearchRef}
                openBottomSheetSteps={openBottomSheetSteps}
                idStepToModify={idStepToModify}
                setIdStepToModify={setIdStepToModify}
                display={isFocused}
            />
            <BottomSheetSteps
                ref={bottomSheetStepsRef}
                openBottomSheetSearch={openBottomSheetSearch}
                duration={directionData?.duration}
                distance={directionData?.distance}
                setIdStepToModify={setIdStepToModify}
                display={isFocused}
            />
            <BottomSheetPlace
                ref={bottomSheetPlaceRef}
                currentPlace={currentPlace}
                openBottomSheetSteps={openBottomSheetSteps}
                closeAllBottomSheet={closeAllBottomSheet}
                display={isFocused}
                insertCoordinate={insertCoordinate}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    userPin: {
        flexDirection: "column",
        alignItems: "center",
    },
    userPinIcon: {
        width: 40,
        height: 25,
        borderRadius: 50,
    },
    userPinLabel: {
        marginTop: 3,
        backgroundColor: colors.black,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 50
    },
    userPinLabelContent: {
        color: colors.white,
        fontWeight: "700",
        fontSize: 10
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        width: "100%",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    openBottomSheetContainer: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        zIndex: 2,
        flexDirection: "row"
    },
    openerBottomSheetSearch: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.darkGrey,
        justifyContent: "center",
        alignItems: "center",
    },
    openerBottomSheetSteps: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.darkGrey,
        marginLeft: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    extremityMarker: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: colors.primary,
        borderWidth: 3,
        borderColor: 'rgba(255, 255, 255, 0.85)',
        margin: 20,
    },
    topUserPosition: {
        position: 'absolute',
        top: 75,
        flexDirection: "column",
        backgroundColor: colors.darkGrey,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 17,
        paddingHorizontal: 40,
        borderRadius: 75
    },
    containerCenter: {
        width: "100%",
        position: 'absolute',
        zIndex: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topUserPositionLabel: {
        color: colors.white,
        marginBottom: 7
    },
    topUserPositionPlace: {
        color: colors.white,
        fontWeight: "700",
        fontSize: 10,
        marginLeft: 10
    },
    topUserPositionPlaceContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconContainer: {
        backgroundColor: colors.black,
        borderRadius: 50,
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    markerContainer: {
        width: 40,
        height: 65,
    },
    triangle: {
        position: "absolute",
        zIndex: -10,
        bottom: 13,
        left: 6,
        width: 0,
        height: 0,
        borderLeftWidth: 13.5,
        borderRightWidth: 13.5,
        borderTopWidth: 23.383,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: colors.black,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 5,
        zIndex: 2,
        flexDirection: "row"
    }
});
