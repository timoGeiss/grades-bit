import {Dimensions, React, StyleSheet, View} from "react-native";
import {useCallback, useEffect, useState} from "react";
import {useFocusEffect} from "expo-router";
import {getFachById, getNotenByFachId} from "../database";
import Zahlenfeld from "./Eingaben/Zahlenfeld";
import AnzeigeFeld from "./AnzeigeFeld";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconKnopf from "./Eingaben/IconKnopf";
import OkFenster from "./Eingaben/OkFenster";

export default function Wunschnote({fachId}) {
    const [noten, notenSetzen] = useState([]);
    const [wunschnote, wunschnoteSetzen] = useState(null);
    const [benötigteNote, benötigteNoteSetzen] = useState("N/A");
    const [anzahlBenötigteNote, anzahlBenötigteNoteSetzen] = useState("N/A");
    const [istSichtbar, istSichtbarSetzen] = useState(false);
    const [okFensterTitel, okFensterTitelSetzen] = useState("Titel");
    const [okFensterText, okFensterTextSetzen] = useState("Text");

    useFocusEffect(
        useCallback(() => {
            if (!fachId) {
                return
            }

            async function NotenLaden() {
                const data = await getNotenByFachId(fachId)
                notenSetzen(data)
            }

            NotenLaden()
        }, [fachId])
    );

    function benötigteNoteBerechnen() {
        if (!wunschnote) {
            return
        }
        if (wunschnote > 6) {
            okFensterÖffnen("Fehler", "Wunschnote muss kleiner 6 sein")
            return;
        }

        const überprüfteNote = Number(wunschnote)
        if (isNaN(überprüfteNote)) {
            okFensterÖffnen("Fehler", "Die Note muss eine Zahl sein (Nur . erlaubt kein ,)")
            return
        }

        let summe = 0;
        for (const note of noten) {
            summe -= note.wert * note.gewichtung
        }
        let summeGewichtungen = 0
        for (const note of noten) {
            summeGewichtungen += note.gewichtung;
        }

        let x = 0
        let i = 1
        while (true) {
            x = (wunschnote * (summeGewichtungen + i ) + summe) / i

            if (i > 100) {
                benötigteNoteSetzen("N/A")
                anzahlBenötigteNoteSetzen("N/A")
                okFensterÖffnen("Fehler", "Die gewünschte Note kann nicht mehr erreicht werden (ausser es werden mehr als 100 Tests geschrieben)")
                return;
            }

            if (x < 1) {
                i++
                continue
            }
            if (x <= 6) {
                break
            }

            i++
        }

        benötigteNoteSetzen(x.toFixed(3).toString())
        anzahlBenötigteNoteSetzen(i.toString())
    }

    function okFensterÖffnen(titel, text) {
        okFensterTitelSetzen(titel)
        okFensterTextSetzen(text)
        istSichtbarSetzen(true)
    }

    return (
        <View style={styles.container}>
            <OkFenster titel={okFensterTitel} text={okFensterText} istSichtbar={istSichtbar} sichtbarkeitSetzen={istSichtbarSetzen} wennOkAngeklickt={() => {}}/>
            <View style={styles.eingabeContainer}>
                <View style={styles.wunschnote}>
                    <Zahlenfeld
                        titel={"Wunschnote"}
                        inhalt={wunschnote}
                        wennInhaltVerändertWird={(neuerInhalt) => wunschnoteSetzen(neuerInhalt)}
                        platzhalter={"6"}
                    />
                </View>
                <Ionicons size={32} color="orange" name={"arrow-forward-outline"} style={styles.iconPfeil}/>
            </View>

            <View style={styles.resultatContainer}>
                <View style={styles.benötigteNote}>
                    <AnzeigeFeld titel={"Benötigte Note"} inhalt={benötigteNote}/>
                </View>
                <View style={styles.anzahl}>
                    <AnzeigeFeld titel={"Anzahl"} inhalt={anzahlBenötigteNote}/>
                </View>
                <View style={styles.iconTaschenrechner}>
                    <IconKnopf beimKlicken={benötigteNoteBerechnen} icon={"calculator-outline"}/>
                </View>
            </View>
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