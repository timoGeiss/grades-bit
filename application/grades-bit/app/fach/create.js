import {useState} from "react";
import {React, StyleSheet, Text, View} from "react-native";
import {insertIntoFach} from "../../database";
import {router} from "expo-router";
import Knopf from "../../components/Eingaben/Knopf";
import Textfeld from "../../components/Eingaben/Textfeld";
import {StatusBar} from "expo-status-bar";

export default function FachErstellen() {
    async function formularBestätigt() {
        // Code hier
    }

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