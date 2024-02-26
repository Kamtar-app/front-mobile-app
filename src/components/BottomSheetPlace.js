import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";

import { colors } from "../assets/styles/constants/colors";
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThumbnailPlace1 } from "./ThumbnailPlace1";

export const BottomSheetPlace = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['47%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{ backgroundColor: '#252525' }}
        handleIndicatorStyle={{ backgroundColor: 'white' }}
      >
        <View style={styles.contentContainer}>
          <ThumbnailPlace1
            imageURL="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
            city="Caulnes • 5 KM"
            name="Restaurant de la gare"
            type="Restaurant • Sanitaire • Douche • Parking sécurisé"
            small={false}
            width={"100%"}
            placeColor={colors.white}
          />
        </View>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 15,
    paddingTop: 30
  },
  customHandle: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  handleText: {
    color: 'white',
  },
});