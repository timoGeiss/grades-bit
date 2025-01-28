import {StyleSheet, Text, View} from "react-native";

export default function Durchschnitt({noten}) {
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

    function erhalteFarbeNachNotenSchnitt(durchschnitt) {
        if (durchschnitt >= 5.5) {
            return "green"
        }
        if (durchschnitt >= 5 && durchschnitt < 5.5) {
            return "lightgreen"
        }
        if (durchschnitt >= 4.5 && durchschnitt < 5) {
            return "yellow"
        }
        if (durchschnitt >= 4 && durchschnitt < 4.5) {
            return "orange"
        }
        if (durchschnitt < 4) {
            return "red"
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Durchschnitt</Text>
            <Text style={[styles.text, styles.wert]}>{berechneNotenDurchschnitt()}</Text>
            <View style={[styles.balken, {backgroundColor: erhalteFarbeNachNotenSchnitt(berechneNotenDurchschnitt())}]}><Text></Text></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    wert: {
        marginLeft: "auto",
    },
    text: {
        padding: 16,
        fontSize: 16,
        fontWeight: "bold",
    },
    balken: {
        width: "8px",
        height: "100%",
    }
});
