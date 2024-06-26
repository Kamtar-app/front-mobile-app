import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Star } from "../icons/Star";
import { colors } from "../../assets/styles/constants/colors";
import mapStyle from "./../../../map-style.json";
import { Restaurant } from "../icons/Restaurant";
import { matchCategoryIdIcon } from "../../utils/icon";

export const Map = ({ lat, long, categoryId }) => {
  if (!lat || !long) {
    return null;
  }
  // Coordonnées du lieu (par exemple, Paris)
  const initialRegion = {
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
      >
        {/* Marqueur de lieu */}
        <Marker
          coordinate={{ latitude: lat, longitude: long }}
        // title="Emplacement"
        // description="Description de l'emplacement"
        >
          <View style={styles.markerContainer}>
            <View style={styles.iconContainer}>
              {matchCategoryIdIcon[categoryId]}
            </View>
            <View style={styles.triangle} />
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 170,
    borderRadius: 20,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    backgroundColor: colors.primary,
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
    borderTopColor: colors.primary,
  },
});
