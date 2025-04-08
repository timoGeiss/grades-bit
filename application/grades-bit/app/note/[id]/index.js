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
    const {id} = useLocalSearchParams()

    const [note, noteSetzen] = useState(null);
    const [error, errorSetzen] = useState(null)
    const [istSichtbar, sichtbarkeitSetzen] = useState(false)


    useFocusEffect(
        useCallback(() => {
            if (!id) {
                return
            }

            async function getNote() {
                const daten = await getNoteById(id)
                noteSetzen(daten[0])
            }

            getNote()
        }, [id])
    );

    async function frageObLöschen() {
        sichtbarkeitSetzen(true)
    }

    async function noteLöschen() {
        await removeNote(id)
        router.back()
    }

    async function formularBestätigt() {
        if (note.titel.length < 2) {
            errorSetzen("Titel ist zu kurz")
            return
        }
        if (note.titel.length > 20) {
            errorSetzen("Titel ist zu lang")
        }
        if (note.wert < 1) {
            errorSetzen("Note zu klein, min: 1")
            return
        }
        if (note.wert > 6) {
            errorSetzen("Note zu gross, max: 6")
            return
        }
        if (note.gewichtung <= 0) {
            errorSetzen("Gewichtung muss grösser 0 sein")
            return
        }

        const überprüfteNote = Number(note.wert)
        if (isNaN(überprüfteNote)) {
            errorSetzen("Die Note muss eine Zahl sein (Nur . erlaubt kein ,)")
            return
        }

        const überprüfteGewichtung = Number(note.gewichtung)
        if (isNaN(überprüfteGewichtung)) {
            errorSetzen("Die Gewichtung muss eine Zahl sein (Nur . erlaubt kein ,)")
            return
        }

        await updateNote(id, note.titel, überprüfteNote, überprüfteGewichtung)
        router.back()
    }

    if (!note) {
        return
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <FrageFenster
                text={"Willst du diese Note wirklich löschen?"}
                titel={"Löschung Bestätigen"}
                istSichtbar={istSichtbar}
                sichtbarkeitSetzen={sichtbarkeitSetzen}
                wennAbbrechenAngeklickt={() => {}}
                wennBesätigigenAngeklickt={noteLöschen}/>

            <Text style={styles.bigText}>Was für eine Note möchtests du erstellen?</Text>
            <Textfeld
                titel={"Titel der Prüfung"}
                inhalt={note.titel}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, titel: neuerInhalt})}
                platzhalter={"Neuer Name"}
            />
            <Zahlenfeld
                titel={"Note"}
                inhalt={note.wert.toString()}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, wert: neuerInhalt})}
                platzhalter={"4"}
            />
            <Zahlenfeld
                titel={"Gewichtung"}
                inhalt={note.gewichtung.toString()}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, gewichtung: neuerInhalt})}
                platzhalter={"1"}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Knopf beimKlicken={formularBestätigt} text={"Bestätigen"}/>
            <View style={styles.löschen}>
                <Text style={styles.bigText}>Prüfung Löschen?</Text>
                <Knopf beimKlicken={frageObLöschen} text={"Löschen"}/>
            </View>
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