import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";
import { colors } from "../assets/styles/constants/colors";

export const WelcomeMessage = ({ label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Belle journée,</Text>
            <Text style={styles.name}>Elsa</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "left",
        justifyContent: "center",
        marginTop: 37,
        marginLeft: 20
    },
    label: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.black
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.primary
    }
});