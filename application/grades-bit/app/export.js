import {View, StyleSheet, Text, TouchableHighlight} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {getAllFaecher} from "../database";
import {Picker} from "@react-native-picker/picker";
import {generatePDF} from "../lib/PdfGenerator";


export default function Export() {
    const [pruefungen, pruefungenSetzen] = useState([]);
    const [optionen, optionenSetzen] = useState("0");

    useEffect(() => {
        const getData = async () => {
            const res2 = await getAllFaecher()
            pruefungenSetzen(res2);
        }
        getData();
    }, []);

    if (!pruefungen) {
        return null;
    }

    return (
        <>
            <StatusBar/>
            <View style={styles.container}>
                <Text style={styles.bigText}>Was möchtest du exportieren?</Text>
                <Picker
                    selectedValue={optionen}
                    onValueChange={(itemValue) => {optionenSetzen( itemValue )}}
                    style={styles.picker}
                >
                    <Picker.Item label="Alle Fächer" value={"0"} />
                    {pruefungen.map((item) => {
                        return (
                            <Picker.Item label={item.name} value={item.id.toString()} key={item.name}/>
                        )
                    })}
                </Picker>

                <TouchableHighlight style={styles.button} onPress={() => {}}>
                    <Text style={styles.text}>PDF Erstellen</Text>
                </TouchableHighlight>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    picker: {
        // height: 70,
        // borderColor: "black",
        // borderWidth: 2,
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