import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Button, Linking } from "react-native";
import { TextInputCustom } from "./src/components/TextInputCustom";
import { ButtonCustom } from "./src/components/ButtonCustom";
import { ConversationBubble } from "./src/components/ConversationBubble";
import { ConversationMessageExternal } from "./src/components/ConversationMessageExternal";
import { ConversationMessageInternal } from "./src/components/ConversationMessageInternal";
import { ConversationHeader } from "./src/components/ConversationHeader";
import { ConversationPreview } from "./src/components/ConversationPreview";
import { ActualLocalisation } from "./src/components/ActualLocalisation";
import { ThumbnailPlaceType } from "./src/components/ThumbnailPlaceType";
import { ThumbnailPlace2 } from "./src/components/ThumbnailPlace2";
import { ThumbnailPlace1 } from "./src/components/ThumbnailPlace1";
import { NavBar } from "./src/components/NavBar";
import { NavBarItem } from "./src/components/NavBarItem";
import { SigninScreen } from "./src/screens/SigninScreen";
import { SignupScreen } from "./src/screens/SignupScreen";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { ChatScreen } from "./src/screens/ChatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import useCustomFonts from "./src/useCustomFonts";

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null; // Attend que les polices soient chargées
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <ConnectionScreen></ConnectionScreen>
    // <View style={styles.container}>
    //   {/* <StatusBar style="auto" />
    //   <ConversationHeader username={"John"} />
    //   <ConversationMessageExternal>
    //     {`hello  sdfsfs sdf  sf s df s fd s fs df s fd sf s \npk \ndfgdfgd hello world`}
    //   </ConversationMessageExternal>
    //   <ConversationMessageInternal>OKO message</ConversationMessageInternal>
    //   <ConversationMessageExternal>OKO message</ConversationMessageExternal>
    //   <ConversationMessageInternal>OKO message</ConversationMessageInternal>
    //   <NavBar /> */}
    //   {/* <ConversationPreview
    //     username={"John"}
    //     lastMessage={"Tu manges à St Malo ?"}
    //     hour={"11:57"}
    //     messageNumber={"1"}
    //   />
    //   <ThumbnailPlaceType label={"Parking"} />
    //   <ActualLocalisation localisation={"Rennes, FR"} />
    //   <ThumbnailPlace2
    //     imageURL="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
    //     city="Caulnes • 5 KM"
    //     name="Restaurant de la gare"
    //     type="Restaurant • Sanitaire • Douche • Parking sécurisé"
    //     note="5"
    //   />
    //   <ThumbnailPlace1
    //     imageURL="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
    //     city="Caulnes • 5 KM"
    //     name="Restaurant de la gare"
    //     type="Restaurant • Sanitaire • Douche • Parking sécurisé"
    //   /> */}
    //   {/* <ButtonCustom text={"Connexion"} />
    //   <TextInputCustom placeholder={"Email"} />
    // </View> */}
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
