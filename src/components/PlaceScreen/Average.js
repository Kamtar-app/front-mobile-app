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
  const maxFrequency = Math.max(...notesData.map((note) => note.frequency));

  return (
    <View style={stylesAverage.container}>
      {notesData.map((note, index) => (
        <View key={index} style={stylesAverage.noteContainer}>
          <Text style={stylesAverage.value}>{note.value}</Text>
          <View style={stylesAverage.star}>
            <Star size={13} />
          </View>
          <View
            style={[
              stylesAverage.bar,
              { width: `${(note.frequency / maxFrequency) * 100}%` },
            ]}
          />
        </View>
      ))}
    </View>
  );
};

const stylesAverage = StyleSheet.create({
  noteContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "70%",
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
