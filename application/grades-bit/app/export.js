import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {getAllFaecher} from "../database";
import {Picker} from "@react-native-picker/picker";
import {generatePDF} from "../lib/PdfGenerator";
import Knopf from "../components/Eingaben/Knopf";

export default function Export() {
    const [fächer, fächerSetzen] = useState([]);
    const [option, optionSetzen] = useState("0");

    useEffect(() => {
        const getData = async () => {
            const daten = await getAllFaecher()
            fächerSetzen(daten);
        }
        getData();
    }, []);

    if (!fächer) {
        return null;
    }

    return (
        <>
            <StatusBar/>
            <View style={styles.container}>
                <Text style={styles.bigText}>Was möchtest du exportieren?</Text>
                <Picker
                    selectedValue={option}
                    onValueChange={(itemValue) => {
                        optionSetzen(itemValue)
                    }}
                    style={styles.picker}
                >
                    <Picker.Item label="Alle Fächer" value={"0"}/>
                    {fächer.map((item) => {
                        return (
                            <Picker.Item label={item.name} value={item.id.toString()} key={item.name}/>
                        )
                    })}
                </Picker>

                <Knopf text={"PDF Erstellen"} beimKlicken={() => generatePDF(option)}/>
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