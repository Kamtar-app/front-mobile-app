import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/styles/constants/colors";
import { Star } from "../icons/Star";

export const Average = ({ notesData }) => {
  if (!Array.isArray(notesData)) {
    return null;
  }

  const frequencies = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  notesData.forEach((note) => {
    frequencies[note.value]++;
  });

  const maxFrequency = Math.max(...Object.values(frequencies));

  return (
    <View style={stylesAverage.container}>
      {Object.entries(frequencies).map(([noteValue, frequency], index) => (
        <View key={index} style={stylesAverage.noteContainer}>
          <Text style={stylesAverage.value}>{noteValue}</Text>
          <View style={stylesAverage.star}>
            <Star size={13} />
          </View>
          <View
            style={[
              stylesAverage.bar,
              { width: `${(frequency / maxFrequency) * 50}%` },
            ]}
          />
        </View>
      ))}
    </View>
  );
};

const stylesAverage = StyleSheet.create({
  container: {
    width: "50%",
  },
  noteContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    marginBottom: 5,
  },
  value: {
    marginRight: 10,
  },
  bar: {
    height: 10,
    backgroundColor: colors.primary,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  star: {
    paddingTop: 4,
  },
});
