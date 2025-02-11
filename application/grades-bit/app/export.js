import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {getAllFaecher} from "../lib/database";
import {Picker} from "@react-native-picker/picker";
import {generatePDF} from "../lib/PdfGenerator";
import Knopf from "../components/Eingaben/Knopf";

export default function Export() {

    return (
        <>
            <StatusBar/>
            <View style={styles.container}>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    button: {
        backgroundColor: 'orange',
        color: 'black',
        marginTop: 24,
        textAlign: 'center',
        padding: 16,
        borderRadius: 6,
        width: '100%',
    },

    bigText: {
        fontSize: 20,
    },
    text: {
        textAlign: 'center',
    },
})