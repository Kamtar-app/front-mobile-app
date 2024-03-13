import { createContext, useEffect, useState } from "react";
import { Routes } from "../assets/routes";
import * as Location from "expo-location";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState(Routes.HomeScreen);
    const [location, setLocation] = useState(null);
    const [stepList, setStepList] = useState([{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [-1.68365, 48.110899] }, "properties": { "label": "Rennes", "score": 0.9600636363636363, "id": "35238", "banId": "c14fd320-7bfb-4446-bcf1-cbf3df3a2451", "type": "municipality", "name": "Rennes", "postcode": "35700", "citycode": "35238", "x": 351630.65, "y": 6789282.24, "population": 222485, "city": "Rennes", "context": "35, Ille-et-Vilaine, Bretagne", "importance": 0.5607, "municipality": "Rennes" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [-1.555335, 47.239367] }, "properties": { "label": "Nantes", "score": 0.9617263636363634, "id": "44109", "type": "municipality", "name": "Nantes", "postcode": "44100", "citycode": "44109", "x": 355581, "y": 6692055.78, "population": 320732, "city": "Nantes", "context": "44, Loire-Atlantique, Pays de la Loire", "importance": 0.57899, "municipality": "Nantes" } }]);

    useEffect(() => {
        const getLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    console.log("Permission to access location was denied");
                    return;
                }

                const locationObject = await Location.getCurrentPositionAsync({});
                setLocation(locationObject.coords);

                const subscription = await Location.watchPositionAsync(
                    { accuracy: Location.Accuracy.High, timeInterval: 5000, distanceInterval: 10 },
                    newLocation => {
                        setLocation(newLocation.coords);
                    }
                );

                return () => {
                    subscription.remove()
                    // Nettoyer l'écouteur d'événement lors du démontage du composant
                };
            } catch (error) {
                console.error('Error getting location:', error);
            }
        };

        getLocation();
    }, []);


    return (
        <AppContext.Provider value={{
            activeLink, setActiveLink,
            location,
            stepList, setStepList
        }}>
            {children}
        </AppContext.Provider>
    );
};