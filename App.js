import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import useCustomFonts from "./src/useCustomFonts";
import { Routes } from "./src/assets/routes";
import { AppContext, AppContextProvider } from "./src/context/AppContext";
import { HomeScreen } from "./src/screens/HomeScreen";
import { PlaceScreen } from "./src/screens/PlaceScreen";
import { SigninScreen } from "./src/screens/SigninScreen";
import { SignupScreen } from "./src/screens/SignupScreen";
import { ChatScreen } from "./src/screens/ChatScreen";
import { MapScreen } from "./src/screens/MapScreen";
import { ListPlaceScreen } from "./src/screens/ListPlaceScreen";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { MessagesScreen } from "./src/screens/MessagesScreen";
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();

  useEffect(() => {
    // Désactiver les warning pour la démo
    // LogBox.ignoreAllLogs();
  }, [])

  if (!fontsLoaded) {
    return null; // Attend que les polices soient chargées
  }

  return (
    <AppContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <BottomSheetModalProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              {/* <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
              {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen
                name="ListPlaceScreen"
                component={ListPlaceScreen}
              /> */}
              <Stack.Screen name="MapScreen" component={MapScreen} />
              {/* <Stack.Screen name="SigninScreen" component={SigninScreen} /> */}
              {/* <Stack.Screen name="ChatScreen" component={ChatScreen} /> */}
              <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
              {/* <Stack.Screen name="MessagesScreen" component={MessagesScreen} /> */}
            </Stack.Navigator>
          </BottomSheetModalProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    marginLeft: 20,
    marginRight: 20,
  },
});

// const GoogleMapsComponent = () => {
//   const openGoogleMaps = () => {
//     // Coordonnées de la destination, des étapes et du point de départ
//     const destinationLat = 37.78825;
//     const destinationLng = -122.4324;
//     const waypoint1Lat = 37.773972;
//     const waypoint1Lng = -122.431297;
//     const waypoint2Lat = 37.789173;
//     const waypoint2Lng = -122.419333;

//     // URL de l'application Google Maps avec les paramètres de destination et d'étapes
//     const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${waypoint1Lat},${waypoint1Lng}&destination=${destinationLat},${destinationLng}&waypoints=${waypoint2Lat},${waypoint2Lng}&travelmode=driving`;

//     // Ouvrir Google Maps
//     Linking.openURL(googleMapsUrl)
//       .catch((err) => console.error('Erreur lors de l\'ouverture de Google Maps :', err));
//   }

//   return (
//     <View>
//       <Button
//         title="Ouvrir Google Maps"
//         onPress={openGoogleMaps}
//       />
//     </View>
//   );
// }
