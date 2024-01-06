import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import Swiper from "react-native-swiper";

import { Star } from "../components/icons/Star";
import image from "./../../assets/images/img_fond_accueil.jpg";
import camion from "./../../assets/images/camion.jpg";
import { colors } from "../assets/styles/constants/colors";
import { texts } from "../assets/styles/constants/texts";
import { ImagesSlider } from "../components/ImagesSlider";
import { Banner } from "../components/PlaceScreen/Banner";
import { CardCharacteristic } from "../components/PlaceScreen/CardCharacteristic";

export const PlaceScreen = ({}) => {
  const characteristics = [
    { title: "Restaurant", icon: <Star /> },
    { title: "Parking", icon: <Star /> },
    { title: "Sanitaires", icon: <Star /> },
    { title: "Douche", icon: <Star /> },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <ImagesSlider images={[image, camion, image]} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>La locanda - Restaurant routier</Text>
          <View style={styles.averageContainer}>
            <View style={styles.averageContainer}>
              <Star />
              <Text style={styles.average}>9.1</Text>
              <Text style={styles.averageLink}>37 avis</Text>
            </View>
            <Text style={styles.averageLink}>
              Saint Brieuc, Bretagne, France
            </Text>
          </View>
          <Text style={styles.titles}>Équipement disponible sur le lieu</Text>
          <View style={styles.charcateristicsContainer}>
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
      </ScrollView>
      <Banner />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: "80%",
  },
  titles: {
    fontSize: 22,
    fontFamily: texts.fontFamilyBold,
    width: "80%",
    marginBottom: 25,
  },
  averageContainer: {},
  charcateristicsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
