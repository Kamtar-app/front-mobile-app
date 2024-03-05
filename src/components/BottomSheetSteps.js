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

export const BottomSheetSteps = forwardRef(({ openBottomSheetSearch, duration, distance, setIdStepToModify, display }, ref) => {
  const bottomSheetModalRef = useRef(null);
  const { stepList, setStepList } = useContext(AppContext);

  useEffect(() => {
    bottomSheetModalRef.current.present();
  }, []);

  const openBottomSheet = () => {
    bottomSheetModalRef.current.present();
    bottomSheetModalRef.current.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetModalRef.current.dismiss();
    bottomSheetModalRef.current.close();
  };

  useImperativeHandle(ref, () => ({
    openBottomSheet, closeBottomSheet
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
    setStepList(updatedStepList);
  }

  const convertTimeToString = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);

    const hoursString = hours > 0 ? `${hours}h ` : '';
    const minutesString = minutes > 0 ? `${minutes}m` : '';

    return hoursString + minutesString;
  }

  const handleUpdateStep = (stepId) => {
    setIdStepToModify(stepId);
    bottomSheetModalRef.current.close();
    bottomSheetModalRef.current.dismiss();
    openBottomSheetSearch()
  }

  return (
    <View style={styles.container}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableDynamicSizing
        backgroundStyle={{ backgroundColor: '#252525' }}
        handleIndicatorStyle={{ backgroundColor: 'white' }}
        style={{ display: display ? "block" : "none" }}
      >
        <BottomSheetScrollView>
          <View style={[styles.contentContainer]}>
            <View style={styles.directionData}>
              <Text style={styles.duration}>{convertTimeToString(duration)}</Text>
              <Text style={styles.distance}>({parseFloat(distance).toFixed(2)}km)</Text>
            </View>
            <View style={styles.stepsBlock}>
              <PointList style={styles.pointList}></PointList>

              <View style={styles.stepList}>
                {stepList.map((step, id) =>
                  <View style={styles.step}>
                    <View style={styles.stepContent}>
                      <TouchableOpacity onPress={() => handleUpdateStep(id)}>
                        <View style={styles.labelPlace}>
                          <Text style={styles.label}>{getLabelStep(id)}</Text>
                          <Text style={styles.place}>{cropString(step.properties.label, 22)}</Text>
                        </View>
                      </TouchableOpacity>
                      {getIconStep(id)}
                    </View>
                    {stepList.length - 1 !== id &&
                      <View style={styles.horizontalBar}></View>
                    }
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
    marginBottom: 2,
  },
  steps: {
    flex: 1,
  },
  directionData: {
    flexDirection: "row",
    marginBottom: 25,
  },
  duration: {
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





