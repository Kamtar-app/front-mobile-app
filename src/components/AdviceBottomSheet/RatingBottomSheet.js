import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
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
  handleSheetChanges,
  placeId,
}) => {
  const snapPoints = useMemo(() => ["62%", "88%"], []);
  const [currentStep, setCurrentStep] = useState(1);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [rate, setRate] = useState();
  const [comment, setComment] = useState("");

  const handleCloseSheet = () => {
    bottomSheetModal.current?.close();
  };

  useEffect(() => {
    if (rate && comment) {
      try {
        fetch(`${process.env.API_END_POINT}/rate`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: comment,
            value: rate,
            userId: 2,
            placeId: placeId,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "La requête a échoué avec un statut " + response.status
              );
            }
            return response.json();
          })
          .then((responseData) => {
            console.log(responseData);
          })
          .catch((error) => {
            console.error(
              "Une erreur s'est produite lors de l'envoi de la requête :",
              error
            );
          });
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'envoi de la requête :",
          error
        );
      }
    }
  }, [rate, comment]);

  const handleContinuePress = (rating, commentContent) => {
    switch (currentStep) {
      case 1:
        setRate(rating);
        setCurrentStep(2);
        break;
      case 2:
        setComment(commentContent);
        setCurrentStep(3);
        break;
      case 3:
        setCurrentStep(1);
        break;
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
