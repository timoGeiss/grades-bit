import {React, StyleSheet, Text, View} from "react-native";
import Textfeld from "../../../components/Eingaben/Textfeld";
import Knopf from "../../../components/Eingaben/Knopf";
import {useEffect, useState} from "react";
import {getFachById, insertIntoFach, updateFach} from "../../../database";
import {router, useLocalSearchParams} from "expo-router";

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
        if (fach.name.length >= 5) {
            await updateFach(id, fach.name)
            router.back()
        } else {
            errorSetzen("Name ist zu kurz")
        }
    }

    function abbrechen() {
        router.back()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Hier kannst du das Fach bearbeiten.</Text>
            <Textfeld
                titel={"Name des Fachs"}
                inhalt={fach.name}
                wennInhaltVerändertWird={(neuerInhalt) => fachSetzen({...fach, name: neuerInhalt})}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Knopf beimKlicken={formularBestätigt} text={"Speichern"}/>
            <Knopf beimKlicken={abbrechen} text={"Abbrechen"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        margin: 24,
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