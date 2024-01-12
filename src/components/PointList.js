import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../assets/styles/constants/colors";

export const PointList = () => {
    const [containerHeight, setContainerHeight] = useState(0);
    const containerRef = useRef(null);
    const totalPoints = Math.floor(containerHeight / 20); 
    const firstLastPointSize = 8;
    const defaultPointSize = 3;
  
    const points = Array.from({ length: totalPoints }, (_, i) => {
      const module = (i - 4) % 5 === 0 && i < totalPoints -4 ;
  
      const pointSize = (i === 0 || i === totalPoints - 1 || module) ? firstLastPointSize : defaultPointSize;
      const color  = (i === 0 || i === totalPoints - 1) ? colors.white : colors.grey;
      return (
        <View
          key={i}
          style={{
            width: pointSize,
            height: pointSize,
            borderRadius: pointSize / 2,
            backgroundColor: color,
          }}
        />
      );
    });
  
    return (
      <View
        style={styles2.container}
        ref={containerRef}
        onLayout={(event) => setContainerHeight(event.nativeEvent.layout.height) }
      >
        {points}
      </View>
    );
  };
  
  const styles2 = StyleSheet.create({
    container: {
      width: "10%",
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      paddingVertical: 30, 
      marginRight: 20
    },
  });