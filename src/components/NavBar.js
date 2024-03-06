import { StyleSheet, TouchableOpacity, View, Text, Button } from "react-native";
import { NavBarItem } from "./NavBarItem";
import { Home } from "./icons/Home";
import { Map } from "./icons/Map";
import { Conversation } from "./icons/Conversation";
import { Account } from "./icons/Account";
import { useContext, useEffect } from "react";
import { Routes } from "../assets/routes";
import { AppContext } from "../context/AppContext";

export const NavBar = () => {
  const { activeLink, setActiveLink } = useContext(AppContext);

  const isActive = (screen) => {
    console.log(activeLink, screen);
    return activeLink === screen;
  };

  const navItemLinks = [
    {
      active: isActive(Routes.HomeScreen),
      action: () => setActiveLink(Routes.HomeScreen),
      component: (props) => <Home {...props} />,
    },
    {
      active: isActive(Routes.MapScreen),
      action: () => setActiveLink(Routes.MapScreen),
      component: (props) => <Map {...props} />,
    },
    {
      active: isActive(Routes.ConversationScreen),
      action: () => setActiveLink(Routes.ConversationScreen),
      component: (props) => <Conversation {...props} />,
    },
    {
      active: isActive(Routes.AccountScreen),
      action: () => setActiveLink(Routes.AccountScreen),
      component: (props) => <Account {...props} />,
    },
  ];

  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
      <View style={stylesNavBar.navBar}>
        {navItemLinks.map((navItemLink, id) => (
          <NavBarItem
            key={id}
            active={navItemLink.active}
            action={navItemLink.action}
          >
            {navItemLink.component({
              style: stylesNavBar.logo,
              strokeColor: navItemLink.active ? null : "white",
              backgroundColor: navItemLink.active ? "white" : null,
            })}
          </NavBarItem>
        ))}
      </View>
    </View>
  );
};

const stylesNavBar = StyleSheet.create({
  navBar: {
    // marginHorizontal: "15%",
    position: "absolute",
    bottom: 20,
    backgroundColor: "#000000",
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  navBarItem: {
    backgroundColor: "#FE6E1F",
    borderRadius: 35,
  },
  navBarItemIcon: {
    margin: 12,
    width: 20,
    height: 20,
  },
});
