import {StyleSheet, Text, View} from "react-native";

export default function Durchschnitt({noten}) {
    return (
        <View style={styles.container}>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    wert: {
        marginLeft: "auto",
    },
    text: {
        padding: 16,
        fontSize: 16,
        fontWeight: "bold",
    },
    balken: {
        width: "8px",
        height: "100%",
    }
});
