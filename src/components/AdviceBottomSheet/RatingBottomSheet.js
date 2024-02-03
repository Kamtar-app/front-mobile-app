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

  const handleContinuePress = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
    if (currentStep === 2) {
      setCurrentStep(3);
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
        return <StepThree step={currentStep} />;
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
          <ScrollView>
            <View style={styles.contentContainer}>{renderContent()}</View>
            <View style={styles.horizontalBar} />
          </ScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    zIndex: 999,
    position: "relative",
  },
  contentContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
