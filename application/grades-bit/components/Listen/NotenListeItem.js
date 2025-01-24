import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router} from 'expo-router';
import {useState} from "react";

export default function NotenListeItem({note}) {
    const [item, setItem] = useState(note);

    function navigiereZuDetailAnsicht() {
        // router.push(`note/${note.id}`)
    }

    return (
        <TouchableOpacity onPress={navigiereZuDetailAnsicht} style={styles.container}>
            <Text style={styles.text}>{item.titel}</Text>
            <Text style={{...styles.text, ...styles.wert}}>{item.wert}</Text>
        </TouchableOpacity>
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

    wert: {
        marginLeft: "auto",
    }
})