import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useEffect, useState} from "react";
import {getAllFaecher} from "../database";
import {Picker} from "@react-native-picker/picker";
import {generatePDF} from "../lib/PdfGenerator";
import Knopf from "../components/Eingaben/Knopf";

export default function Export() {
    const [option, optionSetzen] = useState("0");

    if (!fächer) {
        return null;
    }

    return (
        <View>
            <StatusBar/>
            <View style={styles.container}>
                <Picker
                    selectedValue={option}
                    onValueChange={(itemValue) => {
                        optionSetzen(itemValue)
                    }}
                >
                    <Picker.Item label="Alle Fächer" value={"0"}/>
                    {fächer.map((item) => {
                        return (
                            <Picker.Item label={item.name} value={item.id.toString()} key={item.name}/>
                        )
                    })}
                </Picker>
            </View>
        </View>
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