import React, { useState, useEffect, useContext } from "react";
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
import { ThumbnailPlace1 } from "../components/ThumbnailPlace1";
import { ThumbnailPlace2 } from "../components/HomeScreen/ThumbnailPlace2";
import { NavBar } from "../components/NavBar";
import { BottomSheetSearch } from "../components/BottomSheetSearch/BottomSheetSearch";
import { calculateDistance, searchCurrentLocationString } from "../utils/location";
import { AppContext } from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = ({ }) => {
  const [places, setPlaces] = useState([]);
  const [placesShuffle, setPlacesShuffle] = useState([]);
  const [rateAverages, setRateAverages] = useState({});
  const [distance, setDistance] = useState({});
  const [currentLocationString, setCurrentLocationString] = useState();
  const { location } = useContext(AppContext);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(`${process.env.API_END_POINT}/place/`);
    fetch(`${process.env.API_END_POINT}/place/`, {
      timeout: 40000,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlaces(data);
        const shuffledPlaces = [...data].sort(() => Math.random() - 0.5);
        setPlacesShuffle(shuffledPlaces);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // fetch(`${process.env.API_END_POINT}/place-around-one-coordinates/${id}`)
    // .then((response) => response.json())
    // .then((data) => {
    //   setDistance(data);
    // })
    // .catch((error) => console.error("Error fetching rate details:", error));
  }, []);

  useEffect(() => {
    const fetchRateAverages = async () => {
      const averages = {};
      for (const place of places) {
        try {
          const response = await fetch(
            `${process.env.API_END_POINT}/rate/average/${place.id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          averages[place.id] = data;
        } catch (error) {
          console.error(
            `Error fetching rate average for place ${place.id}:`,
            error
          );
        }
      }
      setRateAverages(averages);
    };

    fetchRateAverages();
  }, [places]);

  useEffect(() => {
    if (location) {
      findCurrentLocation(location)
    }
  }, [location])

  const findCurrentLocation = async (locationData) => {
    setCurrentLocationString(await searchCurrentLocationString(locationData));
  };

  const handleNavigateToMapScreen = () => {
    navigation.navigate("MapScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ActualLocalisation localisation={currentLocationString} />
        <WelcomeMessage />
        <TouchableOpacity onPress={() => handleNavigateToMapScreen()}>
          <View pointerEvents="none">
            <SearchBar />
          </View>
        </TouchableOpacity>
        <View style={{ height: 100, marginBottom: 40 }}>
          <ScrollView
            horizontal={true}
            style={styles.thumbnailList}
            showsHorizontalScrollIndicator={false}
          >
            <ThumbnailPlaceType
              label={"Parking"}
              labelColor={colors.darkGrey}
              backgroundColor={colors.darkGrey}
            >
              <Parking />
            </ThumbnailPlaceType>
            <ThumbnailPlaceType
              label={"Restaurant"}
              labelColor={colors.darkGrey}
              backgroundColor={colors.darkGrey}
            >
              <Restaurant />
            </ThumbnailPlaceType>
            <ThumbnailPlaceType
              label={"Carburant"}
              labelColor={colors.darkGrey}
              backgroundColor={colors.darkGrey}
            >
              <Fuel />
            </ThumbnailPlaceType>
            <ThumbnailPlaceType
              label={"Douche"}
              labelColor={colors.darkGrey}
              backgroundColor={colors.darkGrey}
            >
              <Shower />
            </ThumbnailPlaceType>
            <ThumbnailPlaceType
              label={"Sanitaire"}
              labelColor={colors.darkGrey}
              backgroundColor={colors.darkGrey}
            >
              <Toilet />
            </ThumbnailPlaceType>
            <ThumbnailPlaceType
              label={"Garage"}
              labelColor={colors.darkGrey}
              backgroundColor={colors.darkGrey}
            >
              <Garage />
            </ThumbnailPlaceType>
            <ThumbnailPlaceType
              label={"Station lavage"}
              labelColor={colors.darkGrey}
              backgroundColor={colors.darkGrey}
            >
              <CarWash />
            </ThumbnailPlaceType>
            <ThumbnailPlaceType
              label={"Entreprise"}
              labelColor={colors.darkGrey}
              backgroundColor={colors.darkGrey}
            >
              <Truck />
            </ThumbnailPlaceType>
          </ScrollView>
        </View>
        <PlaceListHeader label={"Autour de vous"} />
        <View style={{ height: 320, marginBottom: 40 }}>
          <ScrollView
            horizontal={true}
            style={styles.placeList}
            showsHorizontalScrollIndicator={false}
          >
            {/* <View> */}
            {places.map((place, index) => (
              <ThumbnailPlace1
                key={index}
                imageURL={place.imageUrl}
                city={`${place.city} • ${location
                  ? calculateDistance(
                    location.latitude,
                    location.longitude,
                    place.latitude,
                    place.longitude
                  ) + " KM"
                  : ""
                  }`}
                name={place.name}
                type={place.type}
                average={rateAverages[place.id]?.toFixed(2)}
                id={place.id}
              />
            ))}
            {/* </View> */}
          </ScrollView>
        </View>
        <PlaceListHeader label={"Vous pourriez aimer"} />
        <View style={{ height: 340, marginBottom: 40 }}>
          <ScrollView
            horizontal={true}
            style={styles.placeList}
            showsHorizontalScrollIndicator={false}
          >
            {placesShuffle.map((placeShuffle, index) => (
              <ThumbnailPlace1
                key={index}
                imageURL={placeShuffle.imageUrl}
                city={`${placeShuffle.city} • ${location
                  ? calculateDistance(
                    location.latitude,
                    location.longitude,
                    placeShuffle.latitude,
                    placeShuffle.longitude
                  ) + " KM"
                  : ""
                  }`}
                name={placeShuffle.name}
                type={placeShuffle.type}
                average={rateAverages[placeShuffle.id]?.toFixed(2)}
                id={placeShuffle.id}
              />
            ))}
          </ScrollView>
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
