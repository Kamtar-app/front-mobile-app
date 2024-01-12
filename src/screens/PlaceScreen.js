import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import Swiper from "react-native-swiper";

import { Star } from "../components/icons/Star";
import { Restaurant } from "../components/icons/Restaurant";
import { Parking } from "../components/icons/Parking";
import { Shower } from "../components/icons/Shower";
import { Toilet } from "../components/icons/Toilet";
import image from "./../../assets/images/img_fond_accueil.jpg";
import camion from "./../../assets/images/camion.jpg";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";
import { ImagesSlider } from "../components/PlaceScreen/ImagesSlider";
import { Banner } from "../components/PlaceScreen/Banner";
import { CardCharacteristic } from "../components/PlaceScreen/CardCharacteristic";
import { Average } from "../components/PlaceScreen/Average";
import { Note } from "../components/PlaceScreen/Note";
import { AdviceCard } from "../components/PlaceScreen/AdviceCard";
import { Map } from "../components/PlaceScreen/Map";
import { ButtonCustom } from "../components/ButtonCustom";

export const PlaceScreen = ({ }) => {
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <ImagesSlider images={[image, camion, image]} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>La locanda - Restaurant routier</Text>
          <View>
            <View style={styles.averageContainer}>
              <View style={styles.star}>
                <Star color="#F4B742" size={13} />
              </View>
              <Text style={styles.average}>9.1</Text>
              <Text style={styles.averageLink}>37 avis</Text>
            </View>
            <Text style={styles.location}>Saint Brieuc, Bretagne, France</Text>
          </View>
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
          <View style={styles.notesContainer}>
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
              comment={"lorem lorem"}
              profil={"/url"}
              name={"John"}
            />
            <AdviceCard
              date={"Octobre 2014"}
              comment={"lorem lorem"}
              profil={"/url"}
              name={"John"}
            />
            <AdviceCard
              date={"Octobre 2014"}
              comment={"lorem lorem"}
              profil={"/url"}
              name={"John"}
            />
          </ScrollView>
          <ButtonCustom text={"Laisser un avis"} />
          <Text style={styles.titles}>Où se situe le lieu</Text>
          <Text style={styles.location}>Saint Brieuc, Bretagne, France</Text>
          <View style={styles.map}>
            <Map />
          </View>
        </View>
      </ScrollView>
      <Banner />
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
  wrapper: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: texts.fontFamilyBold,
    width: "100%",
    marginTop: 45,
    marginBottom: 10,
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
  },
  thumbnailList: {
    marginTop: 20,
  },
  map: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
});
