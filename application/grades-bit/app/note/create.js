import {React, StyleSheet, Text, View} from "react-native";
import Textfeld from "../../components/Eingaben/Textfeld";
import {useState} from "react";
import Zahlenfeld from "../../components/Eingaben/Zahlenfeld";
import Knopf from "../../components/Eingaben/Knopf";
import {insertIntoNote} from "../../database";
import {router, useLocalSearchParams} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function NoteErstellen() {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
        flex: 1,
        paddingTop: 64,
        padding: 24,
        width: "auto",
    },

    bigText: {
        fontSize: 20,
    },

    error: {
        color: "red",
    },

    centerText: {
        textAlign: "center",
    },
})