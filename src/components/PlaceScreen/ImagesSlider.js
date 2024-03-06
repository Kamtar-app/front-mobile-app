import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Swiper from "react-native-swiper";

import { colors } from "../../assets/styles/constants/colors";
import { texts } from "../../assets/styles/constants/texts";

export const ImagesSlider = ({ images }) => {
  const renderPagination = (index, total) => {
    return (
      <View style={stylesSlider.pagination}>
        <Text style={stylesSlider.paginationText}>{`${
          index + 1
        }/${total}`}</Text>
      </View>
    );
  };

  return (
    <View style={stylesSlider.container}>
      <Swiper style={stylesSlider.wrapper} renderPagination={renderPagination}>
        {images.map((image, index) => (
          <View key={index} style={stylesSlider.slide}>
            {typeof image === "string" ? (
              <Image source={{ uri: image }} style={stylesSlider.image} />
            ) : (
              <Image source={image} style={stylesSlider.image} />
            )}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const stylesSlider = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    position: "relative",
  },
  wrapper: {
    height: 300,
    position: "relative",
  },
  slide: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  paginationText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: texts.fontFamilyLight,
  },
});
