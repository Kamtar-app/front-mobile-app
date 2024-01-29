import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";

import { colors } from "../assets/styles/constants/colors";
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { ThumbnailPlace1 } from "./ThumbnailPlace1";
import { ButtonCustom } from "./ButtonCustom";
import { Star } from "./icons/Star";
import { Arrow } from "./icons/Arrow";
import { Cross } from "./icons/Cross";
import { PointList } from "./PointList";

export const BottomSheetSteps = () => {
  const bottomSheetModalRef = useRef(null);

  useEffect(() => {
    bottomSheetModalRef.current.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          enableDynamicSizing
          backgroundStyle={{ backgroundColor: '#252525' }}
          handleIndicatorStyle={{ backgroundColor: 'white' }}
        >
          <BottomSheetView>
            <View style={[styles.contentContainer]}>
              <View style={styles.duration}>
                <Text style={styles.time}>1h30</Text>
                <Text style={styles.distance}>(56km)</Text>
              </View>
              <View style={styles.stepsBlock}>
                <PointList style={styles.pointList}></PointList>
                <View style={styles.stepList}>
                  <View style={styles.step}>
                    <View style={styles.stepContent}>
                      <View style={styles.labelPlace}>
                        <Text style={styles.label}>Depuis</Text>
                        <Text style={styles.place}>La locanda</Text>
                      </View>
                      <Cross />
                    </View>
                    <View style={styles.horizontalBar}></View>
                  </View>
                  <View style={styles.step}>
                    <View style={styles.stepContent}>
                      <View style={styles.labelPlace}>
                        <Text style={styles.label}>En passant par</Text>
                        <Text style={styles.place}>La locanda</Text>
                      </View>
                      <Cross />
                    </View>
                    <View style={styles.horizontalBar}></View>
                  </View>
                  <View style={styles.step}>
                    <View style={styles.stepContent}>
                      <View style={styles.labelPlace}>
                        <Text style={styles.label}>En passant par</Text>
                        <Text style={styles.place}>La locanda</Text>
                      </View>
                      <Cross />
                    </View>
                    <View style={styles.horizontalBar}></View>
                  </View>
                  
                  <View style={styles.step}>
                    <View style={styles.stepContent}>
                      <View style={styles.labelPlace}>
                        <Text style={styles.label}>En passant par</Text>
                        <Text style={styles.place}>La locanda</Text>
                      </View>
                      <Cross />
                    </View>
                    <View style={styles.horizontalBar}></View>
                  </View>
                  <View style={styles.step}>
                    <View style={styles.stepContent}>
                      <View style={styles.labelPlace}>
                        <Text style={styles.label}>À</Text>
                        <Text style={styles.place}>Lorem Ipsum</Text>
                      </View>
                      <Cross />
                    </View>
                  </View>
                </View>
              </View>
              <ButtonCustom text={"Y aller"} />
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 15,
    paddingTop: 30,
    marginBottom: 45,
  },
  steps: {
    flex: 1,
    backgroundColor: "red"
  },
  duration: {
    flexDirection: "row",
    marginBottom: 25,
  },
  time: {
    marginRight: 5,
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 13,
    color: colors.grey,
  },
  stepsBlock: {
    marginBottom: 30,
    flexDirection: "row",
  },
  stepList: {
    width: "80%",
  },
  step: {},
  pointList: {},
  stepContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelPlace: {},
  label: {
    fontSize: 15,
    color: colors.lightGrey,
    fontWeight: "500",
    marginBottom: 5
  },
  place: {
    fontSize: 19,
    color: colors.white,
    fontWeight: "700"
  },
  horizontalBar: {
    height: 1,
    width: "100%",
    backgroundColor: colors.grey,
    marginVertical: 20
  }
});





