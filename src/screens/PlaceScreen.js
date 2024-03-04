import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Star } from "../components/icons/Star";
import { Restaurant } from "../components/icons/Restaurant";
import { Parking } from "../components/icons/Parking";
import { Shower } from "../components/icons/Shower";
import { Toilet } from "../components/icons/Toilet";
import image from "./../../assets/images/img_fond_accueil.jpg";
import camion from "./../../assets/images/camion.jpg";
import restaurant from "./../../assets/images/restaurant.jpg";
import { ImagesSlider } from "../components/PlaceScreen/ImagesSlider";
import { Banner } from "../components/PlaceScreen/Banner";
import { CardCharacteristic } from "../components/PlaceScreen/CardCharacteristic";
import { Average } from "../components/PlaceScreen/Average";
import { Note } from "../components/PlaceScreen/Note";
import { AdviceCard } from "../components/PlaceScreen/AdviceCard";
import { Map } from "../components/PlaceScreen/Map";
import { Discount } from "../components/PlaceScreen/Discount";
import { ButtonCustom } from "../components/ButtonCustom";
import { BackButton } from "../components/BackButton";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";
import { LikeButton } from "../components/LikeButton";
import { RatingBottomSheet } from "../components/AdviceBottomSheet/RatingBottomSheet";

export const PlaceScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const scrollViewRef = useRef();
  const [notesContainerOffset, setNotesContainerOffset] = useState(0);
  const bottomSheetModalRef = useRef(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [place, setPlace] = useState(null);
  const [rates, setRates] = useState(null);
  const [ratesLength, setRatesLength] = useState(null);
  const [totalRates, setTotalRates] = useState(null);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [usersMap, setUsersMap] = useState({});

  // const fetchUserById = async (userId) => {
  //   try {
  //     const response = await fetch(`${process.env.API_END_POINT}/user/${userId}`);
  //     const userData = await response.json();
  //     return userData;
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération de l'utilisateur:", error);
  //   }
  // };

  useEffect(() => {
    // fetch(`http://${ADDRESS_IP}:3000/place/${id}`)
    fetch(`${process.env.API_END_POINT}/place/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlace(data);
      })
      .catch((error) => console.error("Error fetching place details:", error));

    fetch(`${process.env.API_END_POINT}/rate/place/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRates(data);
      })
      .catch((error) => console.error("Error fetching rate details:", error));
  }, []);

  const fetchUserData = (userId) => {
    return fetch(`${process.env.API_END_POINT}/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur :",
          error
        );
        return null;
      });
  };

  useEffect(() => {
    setRatesLength(rates ? rates.length : null);

    if (rates) {
      // console.log("ratesLength : " + ratesLength);
      const total = rates.reduce((acc, note) => acc + note.value, 0);
      setTotalRates((total / rates.length).toFixed(2));
    }
  }, [rates]);

  const characteristics = [
    { title: "Restaurant", icon: <Restaurant color="black" /> },
    { title: "Parking", icon: <Parking color="black" /> },
    { title: "Sanitaires", icon: <Toilet color="black" /> },
    { title: "Douche", icon: <Shower color="black" /> },
  ];

  const scrollToNotesContainer = () => {
    scrollViewRef.current.scrollTo({ y: notesContainerOffset, animated: true });
  };

  const handlePresentPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleSheetChanges = (index) => {
    setIsSheetOpen(index !== -1);
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} style={styles.containerScrollView}>
        <ImagesSlider images={[restaurant, camion, image]} />
        <BackButton />
        <LikeButton />
        <Discount text={"Sur le menu du midi"} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>{place?.name}</Text>
          <View style={styles.padding}>
            <View style={styles.averageContainer}>
              <View style={styles.star}>
                <Star color="#F4B742" size={13} />
              </View>
              <Text style={styles.average}>{totalRates}</Text>
              <TouchableOpacity onPress={scrollToNotesContainer}>
                <Text style={styles.averageLink}>{ratesLength} avis</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.location}>
              {place?.address}, {place?.city}, {place?.zipCode}
            </Text>
            <Text style={styles.titles}>Équipement disponible sur le lieu</Text>
            <View style={styles.characteristicsContainer}>
              {characteristics.map((characteristic, index) => (
                <CardCharacteristic
                  key={index}
                  title={characteristic.title}
                  icon={characteristic.icon}
                />
              ))}
            </View>
            <Text style={styles.titles}>
              Avis des utilisateurs ({ratesLength})
            </Text>
          </View>
          <View
            style={styles.notesContainer}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              setNotesContainerOffset(layout.y);
            }}
          >
            <Average notesData={rates} />
            <Note note={totalRates} total={ratesLength} />
          </View>
          <ScrollView
            horizontal={true}
            style={styles.thumbnailList}
            showsHorizontalScrollIndicator={false}
          >
            {/* TODO : continuer l'affichage dynamique des commentaires */}
            {ratesLength > 0 ? (
              rates.map((rate, index) => (
                <AdviceCard
                  key={index}
                  rate={rate.value}
                  date={rate.createdAd}
                  comment={rate.content}
                  profil={rate.user.imageUrl || "Utilisateur inconnu"}
                  name={rate.user.firstname || "Utilisateur inconnu"}
                  dateMember={rate.user.createdAt || "Date inconnue"}
                />
              ))
            ) : (
              <Text>
                Il n'y a pas encore de commentaires pour ce point d'intérêt.
              </Text>
            )}
          </ScrollView>
          <View style={styles.padding}>
            <ButtonCustom
              text={"Laisser un avis"}
              onPress={handlePresentPress}
            />
          </View>
          <View style={styles.padding}>
            <Text style={styles.titles}>Où se situe le lieu</Text>
            <Text style={styles.location}>{place?.address}</Text>
          </View>
          <View style={styles.map}>
            <Map lat={place?.latitude} long={place?.longitude} />
          </View>
        </View>
      </ScrollView>
      <RatingBottomSheet
        bottomSheetModal={bottomSheetModalRef}
        isSheetOpen={isSheetOpen}
        handleSheetChanges={handleSheetChanges}
      />
      <Banner style={styles.banner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerScrollView: {
    marginBottom: 100,
  },
  padding: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: texts.fontFamilyBold,
    width: "100%",
    marginTop: 45,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  titles: {
    fontSize: 22,
    fontFamily: texts.fontFamilyBold,
    width: "80%",
    marginBottom: 25,
    marginTop: 40,
  },
  averageContainer: {
    flexDirection: "row",
  },
  characteristicsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  average: {
    color: "#F4B742",
    marginRight: 10,
    marginLeft: 10,
    fontSize: 15,
  },
  star: {
    marginTop: 3,
  },
  averageLink: {
    fontSize: 15,
    fontFamily: texts.fontFamilyMedium,
    textDecorationLine: "underline",
  },
  location: {
    fontSize: 15,
  },
  notesContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
  },
  thumbnailList: {
    marginTop: 20,
    paddingleft: 20,
  },
  map: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 20,
    marginTop: 30,
  },
});
