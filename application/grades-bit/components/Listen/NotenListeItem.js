import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router} from 'expo-router';

export default function NotenListeItem({note}) {
    return (
        <View></View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: "100%",
    },
    text: {
        padding: 16,
        fontSize: 16,
    },
    titel: {
        width: "80%",
    },
    wert: {
        marginLeft: "auto",
    },
    balken: {
        width: "8px",
        height: "100%",
    }
})