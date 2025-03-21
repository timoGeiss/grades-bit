import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router} from 'expo-router';
import {useState} from "react";

export default function NotenListeItem({note}) {
    function navigiereZuDetailAnsicht() {
        // TODO: Navigiere hier zur Noten Detailansicht
        // Pfad: `note/${note.id}`
    }

    return (
        <TouchableOpacity onPress={navigiereZuDetailAnsicht} style={styles.container}>
            <Text style={[styles.text, styles.titel]} numberOfLines={1} ellipsizeMode={"tail"}>{note.titel}</Text>
            <Text style={[styles.text, styles.wert]}>{note.wert}</Text>
        </TouchableOpacity>
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