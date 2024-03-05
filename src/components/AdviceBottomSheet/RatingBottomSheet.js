import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
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

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { colors } from "../../assets/styles/constants/colors";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

export const RatingBottomSheet = ({
  bottomSheetModal,
  // isSheetOpen,
  handleSheetChanges,
}) => {
  // const bottomSheetModalRef = useRef(bottomSheetModal);
  const snapPoints = useMemo(() => ["62%"], []);
  const [currentStep, setCurrentStep] = useState(1);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleCloseSheet = () => {
    bottomSheetModal.current?.close();
  };

  // try {
  //   const response = await fetch('http://127.0.0.1:3000/comments', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       content: "je suis un commentaire test",
  //       userId: 12,
  //       placeId: 12
  //     }),
  //   });

  //   if (!response.ok) {
  //     throw new Error('La requête a échoué avec un statut ' + response.status);
  //   }

  //   const responseData = await response.json();
  //   console.log(responseData); // Affiche la réponse du serveur (optionnel)
  //   // Traitez la réponse ou effectuez une action supplémentaire si nécessaire
  // } catch (error) {
  //   console.error('Une erreur s\'est produite lors de l\'envoi de la requête :', error);
  //   // Traitez les erreurs ou affichez un message d'erreur à l'utilisateur
  // }

  const handleContinuePress = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
    if (currentStep === 2) {
      setCurrentStep(3);
      console.log(handleContinuePress);
    }
    if (currentStep === 3) {
      setCurrentStep(1);
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            handleContinuePress={handleContinuePress}
            step={currentStep}
          />
        );
      case 2:
        return (
          <StepTwo
            handleContinuePress={handleContinuePress}
            step={currentStep}
          />
        );
      case 3:
        return (
          <StepThree
            handleContinuePress={handleContinuePress}
            step={currentStep}
            handleClose={handleCloseSheet}
          />
        );
      default:
        return null;
    }
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={bottomSheetModal}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: colors.darkGrey2 }}
          handleIndicatorStyle={{ backgroundColor: "white" }}
          // onChange={handleSheetChanges}
        >
          <BottomSheetScrollView>
            <View style={styles.contentContainer}>{renderContent()}</View>
            <View style={styles.horizontalBar} />
          </BottomSheetScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    zIndex: 9999,
    position: "relative",
  },
  contentContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
