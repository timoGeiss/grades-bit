import {React, StyleSheet, Text, View} from "react-native";
import Textfeld from "../../../components/Eingaben/Textfeld";
import Knopf from "../../../components/Eingaben/Knopf";
import {useEffect, useState} from "react";
import {getFachById, updateFach} from "../../../database";
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
            const data = await getFachById(id);
            fachSetzen(data);
        }

        FachLaden()
    }, [id]);

    async function formularBestätigt() {
        if (fach.name.length < 2) {
            errorSetzen("Name ist zu kurz")
        } else if (fach.name.length > 20) {
            errorSetzen("Name ist zu lang")
        } else {
            await updateFach(id, fach.name)
            router.back()
        }
    }

    function abbrechen() {
        router.back()
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.bigText}>Hier kannst du das Fach bearbeiten.</Text>
            <Textfeld
                titel={"Name des Fachs"}
                inhalt={fach.name}
                wennInhaltVerändertWird={(neuerInhalt) => fachSetzen({...fach, name: neuerInhalt})}
                platzhalter={"Neuer Name"}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Knopf beimKlicken={formularBestätigt} text={"Speichern"}/>
            <Knopf beimKlicken={abbrechen} text={"Abbrechen"}/>
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