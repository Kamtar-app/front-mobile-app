import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Restaurant } from "../icons/Restaurant";
import { Fuel } from "../icons/Fuel";
import { Shower } from "../icons/Shower";
import { Toilet } from "../icons/Toilet";
import { Garage } from "../icons/Garage";
import { CarWash } from "../icons/CarWash";
import { Truck } from "../icons/Truck";
import { Parking } from "../icons/Parking";
import { colors } from "../../assets/styles/constants/colors";
import { Check } from "../icons/Check";

export const Step = ({ ActiveStep = 1 }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.stepContainer,
          ActiveStep >= 1 ? styles.active : styles.disable,
        ]}
      >
        <Text style={styles.stepNumber}>1</Text>
      </View>
      <View style={styles.line} />
      <View
        style={[
          styles.stepContainer,
          ActiveStep >= 2 ? styles.active : styles.disable,
        ]}
      >
        <Text style={styles.stepNumber}>2</Text>
      </View>
      <View style={styles.line} />
      <View
        style={[
          styles.stepContainer,
          ActiveStep >= 3 ? styles.active : styles.disable,
        ]}
      >
        <Text style={styles.stepNumber}>
          <Check />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  stepContainer: {
    borderRadius: 20,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7,
  },
  line: {
    width: 27,
    height: 2,
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    alignSelf: "center",
  },
  stepNumber: {
    fontSize: 13,
    color: colors.white,
    lineHeight: 14,
  },
  active: {
    backgroundColor: colors.primary,
  },
  disable: {
    backgroundColor: colors.primaryGray,
  },
});
