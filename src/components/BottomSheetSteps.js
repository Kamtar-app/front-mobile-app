import React, { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";

import { colors } from "../assets/styles/constants/colors";
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { ThumbnailPlace1 } from "./ThumbnailPlace1";
import { ButtonCustom } from "./ButtonCustom";
import { Star } from "./icons/Star";
import { Arrow } from "./icons/Arrow";
import { Cross } from "./icons/Cross";
import { Plus } from "./icons/Plus";
import { PointList } from "./PointList";
import { AppContext } from "../context/AppContext";
import { cropString } from "../utils/string";

export const BottomSheetSteps = forwardRef(({ openBottomSheetSearch }, ref) => {
  const bottomSheetModalRef = useRef(null);
  const { stepList, setStepList } = useContext(AppContext);

  // useEffect(() => {
  //   bottomSheetModalRef.current.present();
  // }, []);

  const openBottomSheet = () => {
    console.log('expend')
    bottomSheetModalRef.current.present();
    bottomSheetModalRef.current.expand();
  };

  useImperativeHandle(ref, () => ({
    openBottomSheet
  }));

  const getLabelStep = (stepId) => {
    switch (stepId) {
      case 0:
        return "Depuis";
      case stepList.length - 1:
        return "À";
      default:
        return "En passant par";
    }
  }

  const getIconStep = (stepId) => {
    switch (true) {
      case stepId === 0:
        return <TouchableOpacity onPress={() => addStep()}><Plus /></TouchableOpacity>;
      case stepList.length > 2:
        return <TouchableOpacity onPress={() => removeFromStepList(stepId)}><Cross /></TouchableOpacity>;
      default:
        return "";
    }
  }

  const addStep = () => {
    bottomSheetModalRef.current.close();
    openBottomSheetSearch()
  }

  const removeFromStepList = (idToDelete) => {
    const updatedStepList = stepList.filter((step, id) => id !== idToDelete);
    console.log(idToDelete)
    setStepList(updatedStepList);
  }

  // Au clic sur un élément (même niveau que icon)
  // Avec un id pour modifier le bon step dans la liste

  return (
    <View style={styles.container}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableDynamicSizing
        backgroundStyle={{ backgroundColor: '#252525' }}
        handleIndicatorStyle={{ backgroundColor: 'white' }}
      >
        <BottomSheetScrollView>
          <View style={[styles.contentContainer]}>
            <View style={styles.duration}>
              <Text style={styles.time}>1h30</Text>
              <Text style={styles.distance}>(56km)</Text>
            </View>
            <View style={styles.stepsBlock}>
              <PointList style={styles.pointList}></PointList>

              <View style={styles.stepList}>
                {stepList.map((step, id) =>
                  <View style={styles.step}>
                    <View style={styles.stepContent}>
                      <View style={styles.labelPlace}>
                        <Text style={styles.label}>{getLabelStep(id)}</Text>
                        <Text style={styles.place}>{cropString(step.properties.label, 22)}</Text>
                      </View>
                      {getIconStep(id)}
                    </View>
                    <View style={styles.horizontalBar}></View>
                  </View>
                )}
              </View>
            </View>
            {/* <ButtonCustom text={"Y aller"} /> */}
          </View>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );
});

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





