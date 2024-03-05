import React, { useState, useEffect } from "react";
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

export const HomeScreen = ({}) => {
  const [places, setPlaces] = useState([]);
  // const [user, setUser] = useState([]);

  useEffect(() => {
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ActualLocalisation localisation={"Rennes, FR"} />
        <WelcomeMessage />
        <SearchBar />
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
                city={`${place.city} • ${place.distance} KM`}
                name={place.name}
                type={place.type}
                average={place.averageRates}
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
            <ThumbnailPlace1
              imageURL="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
              city="Caulnes • 5 KM"
              name="Restaurant de la gare"
              type="Restaurant • Sanitaire • Douche • Parking sécurisé"
              small={true}
            />
            <ThumbnailPlace1
              imageURL="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
              city="Caulnes • 5 KM"
              name="Restaurant de la gare"
              type="Restaurant • Sanitaire • Douche • Parking sécurisé"
              small={true}
            />
            <ThumbnailPlace1
              imageURL="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
              city="Caulnes • 5 KM"
              name="Restaurant de la gare"
              type="Restaurant • Sanitaire • Douche • Parking sécurisé"
              small={true}
            />
          </ScrollView>
        </View>
      </ScrollView>
      {/* <NavBar /> */}
      <BottomSheetSearch />
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
