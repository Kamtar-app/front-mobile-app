import { StyleSheet, Text, View } from "react-native";

export const MessageHeader = ({ }) => {
    return (
        <View style={styles.container}>
            <Text>Messages</Text>
            <View>
                {/* Add frieds + search icon */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    thumbnailList: {
        paddingLeft: 20,
    },
    placeList: {
        marginTop: 15,
        paddingLeft: 20,
    },
});
