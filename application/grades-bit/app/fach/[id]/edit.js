import {React, StyleSheet, Text, View} from "react-native";
import Textfeld from "../../../components/Eingaben/Textfeld";
import Knopf from "../../../components/Eingaben/Knopf";
import {useEffect, useState} from "react";
import {getFachById, insertIntoFach, updateFach} from "../../../database";
import {router, useLocalSearchParams} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function Edit() {
    const {id} = useLocalSearchParams()
    const [fach, fachSetzen] = useState({})
    const [error, errorSetzen] = useState(null)

    useEffect(() => {
        if (!id) {
            return;
        }

        async function FachLaden() {

        }
        FachLaden()
    }, [id]);

    async function formularBestätigt() {

    }

    function abbrechen() {
        // Befehl wurde bereits beim bestätigen verwendet
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.bigText}>Beispieltext</Text>

            {error ? <Text style={styles.error}>{error}</Text> : null}

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