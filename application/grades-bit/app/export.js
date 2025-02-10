import {View, StyleSheet, Text, TouchableHighlight} from "react-native";
import {StatusBar} from "expo-status-bar";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing"
import {useEffect, useState} from "react";
import {getAlles, getAllFaecher, getFachById, getNotenByFachId} from "../database";
import {Picker} from "@react-native-picker/picker";


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

                <TouchableHighlight style={styles.button} onPress={() => {generatePDF(optionen)}}>
                    <Text style={styles.text}>PDF Erstellen</Text>
                </TouchableHighlight>
            </View>
        </>
    )
}

const generatePDF = async (id) => {
    const newId = parseInt(id)
    let htmlContent = `<h1>Deine Noten</h1>`;

    if (newId !== 0) {
        const fach = await getFachById(newId)
        const noten = await getNotenByFachId(newId);
        htmlContent += `
            <h2>${fach.name}</h2>
            <ul>
                ${noten.map(note => `<li>${note.titel}: ${note.wert} Gewichtung: ${note.gewichtung}</li>`).join('')}
            </ul>
        `;
    } else {
        const data = await getAlles()
        const groupedData = data.reduce((acc, curr) => {
            if (!acc[curr.fach_id]) {
                acc[curr.fach_id] = {
                    name: curr.name,
                    noten: []
                };
            }
            acc[curr.fach_id].noten.push({
                titel: curr.titel,
                wert: curr.wert,
                gewichtung: curr.gewichtung
            });
            return acc;
        }, {});

        Object.values(groupedData).forEach(fach => {
            htmlContent += `
      <h2>${fach.name}</h2>
      <ul>
        ${fach.noten.map(note => `<li>${note.titel}: ${note.wert} Gewichtung: ${note.gewichtung}</li>`).join('')}
      </ul>
    `;
        });
    }



    const { uri } = await Print.printToFileAsync({
        html: htmlContent,
    });

    await console.log("PDF generated at:", uri);
    await Sharing.shareAsync(uri);
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