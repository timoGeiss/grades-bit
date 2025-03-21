import {View, Text, StyleSheet, React} from "react-native";
import Textfeld from "../../components/Eingaben/Textfeld";
import {useState} from "react";
import Zahlenfeld from "../../components/Eingaben/Zahlenfeld";
import Knopf from "../../components/Eingaben/Knopf";
import {insertIntoFach, insertIntoNote} from "../../database";
import {router, useLocalSearchParams, useRouter} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function NoteErstellen() {
    const {id} = useLocalSearchParams()

    const [titel, titelSetzen] = useState("");
    const [note, noteSetzen] = useState(0);
    const [gewichtung, gewichtungSetzen] = useState(0);
    const [error, errorSetzen] = useState(null)

    async function formularBestätigt() {
        // TODO: Baue hier die Validierung des Titels, der Note und der Gewichtung ein.
        // Insgesamt 5-mal If

        const überprüfteNote = Number(note)
        if (isNaN(überprüfteNote)) {
            errorSetzen("Die Note muss eine Zahl sein (Nur . erlaubt kein ,)")
            return
        }

        const überprüfteGewichtung = Number(gewichtung)
        if (isNaN(überprüfteGewichtung)) {
            errorSetzen("Die Gewichtung muss eine Zahl sein (Nur . erlaubt kein ,)")
            return
        }

        await insertIntoNote(id, titel, überprüfteNote, überprüfteGewichtung);

        // TODO: Navigiere hier zurück (Das hast du schon einmal auf der Facherstellungsseite gemacht)
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.bigText}>Was für eine Note möchtests du erstellen?</Text>
            <Textfeld
                titel={"Titel der Prüfung"}
                inhalt={titel}
                wennInhaltVerändertWird={(neuerInhalt) => titelSetzen(neuerInhalt)}
                platzhalter={"Algebratest"}
            />
            <Zahlenfeld
                titel={"Note"}
                inhalt={note}
                wennInhaltVerändertWird={(neuerInhalt) => noteSetzen(neuerInhalt)}
                platzhalter={"4"}
            />
            {/* TODO: Hier brauchst du noch ein Zahlenfeld für die Gewichtung.
                      Überlege selbst, wie du dies einbauen musst.*/}

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