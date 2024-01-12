import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCustomFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Chargement et liaison des polices
    async function loadFonts() {
      await Font.loadAsync({
        "Mulish-Regular": require("./../assets/fonts/Mulish-Regular.ttf"),
        "Mulish-Bold": require("./../assets/fonts/Mulish-Bold.ttf"),
        "Mulish-SemiBold": require("./../assets/fonts/Mulish-SemiBold.ttf"),
        "Mulish-Black": require("./../assets/fonts/Mulish-Black.ttf"),
        "Mulish-Italic": require("./../assets/fonts/Mulish-Italic.ttf"),
        "Mulish-Light": require("./../assets/fonts/Mulish-Light.ttf"),
        "Mulish-Medium": require("./../assets/fonts/Mulish-Medium.ttf"),
        // Ajoutez d'autres poids de police si nécessaire
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  // if (!fontsLoaded) {
  //   return null; // Attend que les polices soient chargées
  // }
  return fontsLoaded;
}
