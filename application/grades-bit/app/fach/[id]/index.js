import {Dimensions, React, StyleSheet, Text, View} from "react-native";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {useCallback, useEffect, useState} from "react";
import {getAllFaecher, getFachById, getNotenByFachId, insertIntoFach, removeFach, removeNote} from "../../../database";
import NotenListe from "../../../components/Listen/NotenListe";
import Knopf from "../../../components/Eingaben/Knopf";
import IconKnopf from "../../../components/Eingaben/IconKnopf";
import FrageFenster from "../../../components/Eingaben/FrageFenster";
import Durchschnitt from "../../../components/Durchschnitt";
import TrennLinie from "../../../components/TrennLinie";
import {StatusBar} from "expo-status-bar";
import Wunschnote from "../../../components/Wunschnote";

export default function Index() {
    const {id} = useLocalSearchParams()
    const [istSichtbar, sichtbarkeitSetzen] = useState(false)
    const [noten, setNoten] = useState([])
    const [fach, setFach] = useState({})

    useFocusEffect(
        useCallback(() => {
            if (!id) {
                return
            }

            async function FachLaden() {

            }

            async function NotenLaden() {
                const data = await getNotenByFachId(id)
                setNoten(data)
            }

            NotenLaden()

        }, [id])
    );

    async function fachLöschen() {
        const noten = await getNotenByFachId(id)
        for (const note of noten) {
            await removeNote(note.id)
        }
        await removeFach(id)
    }

    function frageObLöschen() {
    }

    function zumBearbeiten() {
        router.push(`/fach/${id}/edit`)
    }

     // TODO: Füge hier die Funktion fürs Navigieren zur Erstell Seite ein.
     //       Du kannst von der Funkion zumBearbeiten() ableiten.

    return (
        <View style={styles.container}>
            <StatusBar/>
            <FrageFenster
                text={"Dein Text"}
                titel={"Dein Titel"}
                istSichtbar={istSichtbar}
                sichtbarkeitSetzen={sichtbarkeitSetzen}
                wennAbbrechenAngeklickt={() => {}}
                wennBesätigigenAngeklickt={fachLöschen}/>

            
            <View style={styles.list}>
                <NotenListe noten={noten}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        gap: 16
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%"
    },
    titel: {
        fontSize: 24,
        paddingVertical: 16,
        flex: 1,
        marginRight: 16,
    },
    list: {
        marginTop: 8,
        maxHeight: Dimensions.get("window").height/100*40,
    },
    durchschnitt: {
        // marginLeft: 8,
        width: "100%",
        // position: "absolute",
        // bottom: -50,
    }
});
