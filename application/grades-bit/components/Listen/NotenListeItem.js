import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router} from 'expo-router';
import Balken from "../Balken";

export default function NotenListeItem({note}) {
    function navigiereZuDetailAnsicht() {
        router.push(`note/${note.id}`)
    }

    function erhalteFarbeNachNotenWert() {
        if (note.wert >= 5.5) {
            return "green"
        }
        if (note.wert >= 5 && note.wert < 5.5) {
            return "lightgreen"
        }
        if (note.wert >= 4.5 && note.wert < 5) {
            return "yellow"
        }
        if (note.wert >= 4 && note.wert < 4.5) {
            return "orange"
        }
        if (note.wert < 4) {
            return "red"
        }
    }

    return (
        <TouchableOpacity onPress={navigiereZuDetailAnsicht} style={styles.container}>
            <Text style={[styles.text, styles.titel]} numberOfLines={1} ellipsizeMode={"tail"}>{note.titel}</Text>
            <Text style={[styles.text, styles.wert]}>{note.wert}</Text>
            <Balken wert={note.wert}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: "100%",
    },
    text: {
        padding: 16,
        fontSize: 16,
    },
    titel: {
        width: "80%",
    },
    wert: {
        marginLeft: "auto",
    },
    balken: {
        width: "8px",
        height: "100%",
    }
})