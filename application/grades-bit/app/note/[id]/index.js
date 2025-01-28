import {View, StyleSheet, Text, React} from "react-native";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {useCallback, useState} from "react";
import {getNoteById, updateNote} from "../../../database";
import Textfeld from "../../../components/Eingaben/Textfeld";
import Zahlenfeld from "../../../components/Eingaben/Zahlenfeld";
import Knopf from "../../../components/Eingaben/Knopf";

export default function Index() {
    const {id} = useLocalSearchParams()

    const [note, noteSetzen] = useState(null);
    const [error, errorSetzen] = useState(null)


    useFocusEffect(
        useCallback(() => {
            if (!id) {
                return
            }

            async function getNote() {
                const daten = await getNoteById(id)
                noteSetzen(daten[0])
                console.log(daten)
            }

            getNote()
        }, [id])
    );

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

        await updateNote(id, note.titel, note.wert, note.gewichtung)
        router.back()
    }

    if (!note) {
        return
    }

    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Was für eine Note möchtests du erstellen?</Text>
            <Textfeld
                titel={"Titel der Prüfung"}
                inhalt={note.titel}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, titel: neuerInhalt})}
            />
            <Zahlenfeld
                titel={"Note"}
                inhalt={note.wert.toString()}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, wert: neuerInhalt})}
            />
            <Zahlenfeld
                titel={"Gewichtung"}
                inhalt={note.gewichtung.toString()}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, gewichtung: neuerInhalt})}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Knopf beimKlicken={formularBestätigt} text={"Bestätigen"}/>
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
})