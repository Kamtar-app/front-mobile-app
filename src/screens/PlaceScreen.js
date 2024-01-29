import React, { useRef, useState } from "react";
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

export const PlaceScreen = ({}) => {
  const scrollViewRef = useRef();
  const [notesContainerOffset, setNotesContainerOffset] = useState(0);

  const characteristics = [
    { title: "Restaurant", icon: <Restaurant color="black" /> },
    { title: "Parking", icon: <Parking color="black" /> },
    { title: "Sanitaires", icon: <Toilet color="black" /> },
    { title: "Douche", icon: <Shower color="black" /> },
  ];

  const notesData = [
    { value: 5, frequency: 8 },
    { value: 4, frequency: 15 },
    { value: 3, frequency: 5 },
    { value: 2, frequency: 25 },
    { value: 1, frequency: 1 },
  ];

  const scrollToNotesContainer = () => {
    scrollViewRef.current.scrollTo({ y: notesContainerOffset, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} style={styles.containerScrollView}>
        <ImagesSlider images={[restaurant, camion, image]} />
        <BackButton />
        <LikeButton />
        <Discount text={"Sur le menu du midi"} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>La locanda - Restaurant routier</Text>
          <View style={styles.padding}>
            <View style={styles.averageContainer}>
              <View style={styles.star}>
                <Star color="#F4B742" size={13} />
              </View>
              <Text style={styles.average}>9.1</Text>
              <TouchableOpacity onPress={scrollToNotesContainer}>
                <Text style={styles.averageLink}>37 avis</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.location}>Saint Brieuc, Bretagne, France</Text>
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
            <Text style={styles.titles}>Avis des utilisateurs (167)</Text>
          </View>
          <View
            style={styles.notesContainer}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              setNotesContainerOffset(layout.y);
            }}
          >
            <Average notesData={notesData} />
            <Note note="4,4" total="126" />
          </View>
          <ScrollView
            horizontal={true}
            style={styles.thumbnailList}
            showsHorizontalScrollIndicator={false}
          >
            <AdviceCard
              date={"Octobre 2014"}
              comment={
                "Lorem ipsum dolor sit amet consectetur. Aliquet cras aliquet vestibulum mi lorem et."
              }
              profil={image}
              name={"John"}
              dateMember={"Juin 2023"}
            />
            <AdviceCard
              date={"Octobre 2014"}
              comment={
                "Lorem ipsum dolor sit amet consectetur. Aliquet cras aliquet vestibulum mi lorem et."
              }
              profil={image}
              name={"John"}
              dateMember={"Juin 2023"}
            />
            <AdviceCard
              date={"Octobre 2014"}
              comment={
                "Lorem ipsum dolor sit amet consectetur. Aliquet cras aliquet vestibulum mi lorem et."
              }
              profil={image}
              name={"John"}
              dateMember={"Juin 2023"}
            />
          </ScrollView>
          <View style={styles.padding}>
            <ButtonCustom text={"Laisser un avis"} />
            <Text style={styles.titles}>Où se situe le lieu</Text>
            <Text style={styles.location}>Saint Brieuc, Bretagne, France</Text>
          </View>
          <View style={styles.map}>
            <Map />
          </View>
        </View>
      </ScrollView>
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
