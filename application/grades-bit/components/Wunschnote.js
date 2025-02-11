import {Dimensions, React, StyleSheet, View} from "react-native";
import {useCallback, useState} from "react";
import {useFocusEffect} from "expo-router";
import {getNotenByFachId} from "../lib/database";
import Zahlenfeld from "./Eingaben/Zahlenfeld";
import AnzeigeFeld from "./AnzeigeFeld";
import IconKnopf from "./Eingaben/IconKnopf";
import OkFenster from "./Eingaben/OkFenster";

export default function Wunschnote({fachId}) {

    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width - 8,
    },
    iconPfeil: {
        marginTop: 25,
    },
    iconTaschenrechner: {
        marginTop: 16,
    },
    wunschnote: {
        width: "30%"
    },
    benötigteNote: {
        width: "33%"
    },
    anzahl: {
        width: "20%"
    },
    resultatContainer: {
        flexDirection: "row"
    },
    eingabeContainer: {
        flexDirection: "row"
    }
})