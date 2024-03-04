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

export const BottomSheetPlace = forwardRef(({ currentPlace, openBottomSheetSteps, addToStepList }, ref) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['53%'], []);
  const { location } = useContext(AppContext);

  useEffect(() => {
    console.log(currentPlace.categoryPlaces)
  }, [currentPlace])

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

  useImperativeHandle(ref, () => ({
    openBottomSheet
  }));

  const handleChangeState = (modalState) => {
    if(modalState === -1){
      openBottomSheetSteps();
    }
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
      >
        {location && currentPlace &&
          <>
            <View style={styles.contentContainer}>
              <ThumbnailPlace1
                imageURL="https://www.relais-routier-bourges.com/galerie/crop/a3-1594383292.jpg"
                city={currentPlace.city + " • " + calculateDistance(location.latitude, location.longitude, currentPlace.latitude, currentPlace.longitude) + " KM"}
                name={currentPlace.name}
                type={formatCategoriesPlaceNames()}
                small={false}
                width={"100%"}
                placeColor={colors.white}
              />
              <View style={{marginTop: 90, width: "100%", marginRight: 15}}>
                <ButtonCustom text={"Ajouter à mon trajet"}></ButtonCustom>
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
