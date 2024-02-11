import { createContext, useEffect, useState } from "react";
import { Routes } from "../assets/routes";
import * as Location from "expo-location";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState(Routes.HomeScreen);
    const [location, setLocation] = useState(null);
    const [stepList, setStepList] = useState([]);

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

                return () => subscription.remove();
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