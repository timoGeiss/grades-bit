import {View, StyleSheet, Text, React} from "react-native";
import {useFocusEffect, useLocalSearchParams} from "expo-router";
import {useCallback, useState} from "react";
import {getAllFaecher, getNoteById, getNotenByFachId} from "../../../database";
import IconKnopf from "../../../components/Eingaben/IconKnopf";
import TrennLinie from "../../../components/TrennLinie";
import Textfeld from "../../../components/Eingaben/Textfeld";
import Zahlenfeld from "../../../components/Eingaben/Zahlenfeld";
import Knopf from "../../../components/Eingaben/Knopf";


export default function Index() {
    const {id} = useLocalSearchParams()

    const [note, noteSetzen] = useState({});

    useFocusEffect(
        useCallback(() => {
            async function getNote() {
                const daten = await getNoteById(id)
                noteSetzen(daten[0])
            }
            getNote()
        }, [id])
    );

    function formularBestätigt() {

    }

    if (!id) {
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
                inhalt={note.wert}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, wert: neuerInhalt})}
            />
            <Zahlenfeld
                titel={"Gewichtung"}
                inhalt={note.gewichtung}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, gewichtung: neuerInhalt})}
            />

            {/*{error ? <Text style={styles.error}>{error}</Text> : null}*/}
            <Knopf beimKlicken={formularBestätigt} text={"Bestätigen"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        height: "100%"
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