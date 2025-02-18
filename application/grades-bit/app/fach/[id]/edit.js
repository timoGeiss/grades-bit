import {React, StyleSheet, Text, View} from "react-native";
import Textfeld from "../../../components/Eingaben/Textfeld";
import Knopf from "../../../components/Eingaben/Knopf";
import {useEffect, useState} from "react";
import {getFachById, updateFach} from "../../../database";
import {router, useLocalSearchParams} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function Edit() {
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