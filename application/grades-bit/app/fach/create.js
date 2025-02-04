import {useState} from "react";
import {React, StyleSheet, Text, View} from "react-native";
import {insertIntoFach} from "../../database";
import {router} from "expo-router";
import Knopf from "../../components/Eingaben/Knopf";
import Textfeld from "../../components/Eingaben/Textfeld";
import {StatusBar} from "expo-status-bar";

export default function FachErstellen() {
    const [name, nameSetzen] = useState("")
    const [error, errorSetzen] = useState(null)

    async function formularBestätigt() {
        if (name.length < 2) {
            errorSetzen("Name ist zu kurz")
        }
        else if (name.length > 20) {
            errorSetzen("Name ist zu lang")
        }
        else {
            await insertIntoFach(name)
            router.back()
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.bigText}>Welches Fach möchtest du hinzufügen?</Text>
            <Textfeld
                titel={"Name des Fachs"}
                inhalt={name}
                wennInhaltVerändertWird={(neuerInhalt) => nameSetzen(neuerInhalt)}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Knopf beimKlicken={formularBestätigt} text={"Bestätigen"}/>
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