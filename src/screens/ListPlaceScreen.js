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
import { SearchBar2 } from "../components/HomeScreen/SearchBar2";
import { BackButton } from "../components/BackButton";
import { ThumbnailPlaceType } from "../components/HomeScreen/ThumbnailPlaceType";
import { Parking } from "../components/icons/Parking";
import { Restaurant } from "../components/icons/Restaurant";
import { Fuel } from "../components/icons/Fuel";
import { PlaceListHeader } from "../components/HomeScreen/PlaceListHeader";
import { ThumbnailPlace3 } from "../components/ThumbnailPlace3";
import { NavBar } from "../components/NavBar";
import { BottomSheetSearch } from "../components/BottomSheetSearch/BottomSheetSearch";
import { calculateDistance } from "../utils/location";
import { AppContext } from "../context/AppContext";

export const ListPlaceScreen = ({}) => {
  const [places, setPlaces] = useState([]);
  const [placesShuffle, setPlacesShuffle] = useState([]);
  const [rateAverages, setRateAverages] = useState({});
  const [distance, setDistance] = useState({});
  const { location } = useContext(AppContext);

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

  return (
    <View style={styles.container}>
      <ScrollView>
        <BackButton />
        <SearchBar2 placeholder={"Rechercher un lieu..."} />
        <View style={{ height: 10, marginBottom: 40 }}></View>
        <Text style={styles.title}>{places.length} lieux à proximité</Text>
        <View style={{ marginBottom: 40 }}>
          <View>
            {places.map((place, index) => (
              <ThumbnailPlace3
                key={index}
                imageURL={place.imageUrl}
                city={`${place.city} • ${
                  location
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 35,
    textAlign: "center",
  },
});
