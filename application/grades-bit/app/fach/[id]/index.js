import {React, StyleSheet, Text, View} from "react-native";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {useCallback, useEffect, useState} from "react";
import {getAllFaecher, getFachById, getNotenByFachId, insertIntoFach, removeFach, removeNote} from "../../../database";
import NotenListe from "../../../components/Listen/NotenListe";
import Knopf from "../../../components/Eingaben/Knopf";
import IconKnopf from "../../../components/Eingaben/IconKnopf";
import FrageFenster from "../../../components/Eingaben/FrageFenster";
import Durchschnitt from "../../../components/Durchschnitt";
import TrennLinie from "../../../components/TrennLinie";

export default function Index() {
    const {id} = useLocalSearchParams()
    const [fach, setFach] = useState({})
    const [noten, setNoten] = useState([])
    const [istSichtbar, sichtbarkeitSetzen] = useState(false)

    useFocusEffect(
        useCallback(() => {
            if (!id) {
                return
            }

            async function FaecherLaden() {
                const data = await getFachById(id)
                setFach(data)
            }

            async function NotenLaden() {
                const data = await getNotenByFachId(id)
                setNoten(data)
            }

            FaecherLaden()
            NotenLaden()
        }, [id])
    );

    function zumErstellen() {
        router.push(`/note/create?id=${id}`)
    }

    function zumBearbeiten() {
        router.push(`/fach/${id}/edit`)
    }

    function frageLöschen() {
        sichtbarkeitSetzen(true)
    }

    async function fachLöschen() {
        const noten = await getNotenByFachId(id)
        for (const note of noten) {
            await removeNote(note.id)
        }
        await removeFach(id)
        router.back()
    }

    return (
        <View style={styles.container}>
            <FrageFenster
                text={"Willst du das Fach wirklich löschen? Dies löscht auch alle dazugehörigen Noten!!!"}
                titel={"Löschung Bestätigen"}
                istSichtbar={istSichtbar}
                sichtbarkeitSetzen={sichtbarkeitSetzen}
                wennAbbrechenAngeklickt={() => {}}
                wennBesätigigenAngeklickt={fachLöschen}/>

            <View style={styles.titleBar}>
                <Text style={styles.titel}>{fach.name}</Text>
                <View style={styles.icons}>
                    <IconKnopf beimKlicken={zumBearbeiten} icon={"pencil"}/>
                    <IconKnopf beimKlicken={frageLöschen} icon={"trash"}/>
                </View>
            </View>

            <Knopf beimKlicken={zumErstellen} text={"Note hinzufügen"}/>
            <View style={styles.margin}>
                <NotenListe noten={noten}/>
                {noten.length > 0 && <TrennLinie/>}
                {noten.length > 0 && <Durchschnitt noten={noten}/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        height: "100%",
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
        overflow: "hidden"
    },

    margin: {
        marginTop: 8,
        marginBottom: 200,
    }
});
