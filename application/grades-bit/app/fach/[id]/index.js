import {Dimensions, React, StyleSheet, Text, View} from "react-native";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {useCallback, useState} from "react";
import {getFachById, getNotenByFachId, removeFach, removeNote} from "../../../database";
import NotenListe from "../../../components/Listen/NotenListe";
import Knopf from "../../../components/Eingaben/Knopf";
import IconKnopf from "../../../components/Eingaben/IconKnopf";
import FrageFenster from "../../../components/Eingaben/FrageFenster";
import Durchschnitt from "../../../components/Durchschnitt";
import TrennLinie from "../../../components/TrennLinie";
import {StatusBar} from "expo-status-bar";
import Wunschnote from "../../../components/Wunschnote";

export default function Index() {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        gap: 16
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%"
    },
    titel: {
        fontSize: 24,
        paddingVertical: 16,
        flex: 1,
        marginRight: 16,
    },
    list: {
        marginTop: 8,
        maxHeight: Dimensions.get("window").height / 100 * 40,
    },
    durchschnitt: {
        width: "100%",
    }
});
