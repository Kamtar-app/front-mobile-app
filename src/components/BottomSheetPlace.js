import React, { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { ThumbnailPlace1 } from './ThumbnailPlace1';
import { colors } from '../assets/styles/constants/colors';
import { AppContext } from '../context/AppContext';
import { calculateDistance } from '../utils/location';
import { ButtonCustom } from './ButtonCustom';
import { Arrow } from './icons/Arrow';

export const BottomSheetPlace = forwardRef(({ currentPlace, openBottomSheetSteps, closeAllBottomSheet, insertCoordinate, display }, ref) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['53%'], []);
  const { location } = useContext(AppContext);

  useImperativeHandle(ref, () => ({
    openBottomSheet, closeBottomSheet
  }));

  const formatCategoriesPlaceNames = () => {
    if (currentPlace.categoryPlaces) {
      return currentPlace.categoryPlaces.map((categoryPlace) => (
        categoryPlace.category.name
      )).join(' • ')
    }
  }

  const openBottomSheet = () => {
    bottomSheetModalRef.current.present();
    bottomSheetModalRef.current.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetModalRef.current.close();
    bottomSheetModalRef.current.dismiss();
  };

  const handleChangeState = (modalState) => {
    if (modalState === -1) {
      openBottomSheetSteps();
    }
  }

  const addPlaceToStepList = () => {
    insertCoordinate(currentPlace);
    closeBottomSheet();
  }

  return (
    <View style={styles.container}>
      <Button
        title="Present Modal"
        color="black"
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: '#252525' }}
        handleIndicatorStyle={{ backgroundColor: 'white' }}
        onChange={handleChangeState}
        style={{ display: display ? "block" : "none" }}
      >
        {location && currentPlace &&
          <>
            <View style={styles.contentContainer}>
              <ThumbnailPlace1
                imageURL={currentPlace.imageUrl}
                city={currentPlace.city + " • " + calculateDistance(location.latitude, location.longitude, currentPlace.latitude, currentPlace.longitude) + " KM"}
                name={currentPlace.name}
                type={formatCategoriesPlaceNames()}
                small={false}
                width={"100%"}
                placeColor={colors.white}
                closeAllBottomSheet={closeAllBottomSheet}
                id={currentPlace.id}
              />
              <View style={{ marginTop: 90, width: "100%", marginRight: 15 }}>
                <ButtonCustom text={"Ajouter à mon trajet"} onPress={() => addPlaceToStepList()}></ButtonCustom>
              </View>
            </View>
          </>
        }
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
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    paddingLeft: 30,
    paddingRight: 15,
    paddingTop: 30,
  },
});
