import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router} from 'expo-router';
import {useEffect, useState} from "react";
import {getNotenByFachId} from "../../database";
import Balken from "../Balken";

export default function FachListItem({fach}) {
    const [noten, notenSetzen] = useState([]);

    useEffect(() => {
        if (!fach) {
            return
        }

        async function LadeNoten() {
            const data = await getNotenByFachId(fach.id);
            notenSetzen(data);
        }

        LadeNoten();
    }, [fach]);

    function navigiereZuDetailAnsicht() {
        router.push(`fach/${fach.id}`)
    }

    function berechneNotenDurchschnitt() {
        let summe = 0;

        for (const note of noten) {
            summe += note.wert * note.gewichtung;
        }

        if (summe === 0) {
            return "-"
        }

        let summeGewichtungen = 0
        for (const note of noten) {
            summeGewichtungen += note.gewichtung;
        }

        const durchschnitt = summe / summeGewichtungen

        return durchschnitt.toFixed(2);
    }

    return (
        <View>
            <TouchableOpacity onPress={navigiereZuDetailAnsicht} style={styles.container}>
                <Text style={[styles.text, styles.titel]} numberOfLines={1} ellipsizeMode={"tail"}>{fach.name}</Text>
                <Text style={styles.schnitt}>{berechneNotenDurchschnitt()}</Text>
                <Balken wert={berechneNotenDurchschnitt()}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    text: {
        padding: 16,
        fontSize: 16,
    },
    titel: {
        width: "80%",
    },
    schnitt: {
        fontSize: 16,
        padding: 16,
        marginLeft: "auto",
    },
    balken: {
        width: "8px",
        height: "100%",
    }
})