import {React, StyleSheet, Text, View} from "react-native";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {useCallback, useState} from "react";
import {getNoteById, removeNote, updateNote} from "../../../database";
import Textfeld from "../../../components/Eingaben/Textfeld";
import Zahlenfeld from "../../../components/Eingaben/Zahlenfeld";
import Knopf from "../../../components/Eingaben/Knopf";
import FrageFenster from "../../../components/Eingaben/FrageFenster";
import {StatusBar} from "expo-status-bar";

export default function Index() {
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
    icons: {
        display: "flex",
        flexDirection: "row",
        gap: 16
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titel: {
        fontSize: 24,
        paddingVertical: 16,
    },

    error: {
        color: "red",
    },

    löschen: {
        marginTop: 24,
    }
})