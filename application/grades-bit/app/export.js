import {View, StyleSheet, Text, TouchableHighlight} from "react-native";
import {StatusBar} from "expo-status-bar";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing"
import {useEffect, useState} from "react";
import {getAlles, getAllFaecher, getAllNoten, getNotenByFachId} from "../database";
import * as FileSystem from "expo-file-system";
import {Picker} from "@react-native-picker/picker";


export default function Export() {
    const model = {
        auswahl: "",
        pruefung: ""
    }

    const [alleDaten, alleDatenSetzen] = useState([]);
    const [pruefungen, pruefungenSetzen] = useState([]);
    const [optionen, optionenSetzen] = useState(model);

    useEffect(() => {
        const getData = async () => {
            const res1 = await getAlles()
            alleDatenSetzen(res1);
            const res2 = await getAllFaecher()
            pruefungenSetzen(res2);
        }
        getData();
    }, []);

    if (!alleDaten) {
        return null;
    }


    return (
        <>
            <StatusBar/>
            <View style={styles.container}>
                <Text >Was möchtest du Exportieren</Text>
                <Picker
                    selectedValue={optionen.auswahl}
                    onValueChange={(itemValue) => {optionenSetzen({ pruefung: null, auswahl: itemValue })}}
                    style={styles.picker}
                >
                    <Picker.Item label="Alle Noten" value="alle" />
                    <Picker.Item label="Prüfung" value="pruefung" />
                </Picker>

                {optionen.auswahl === "pruefung" ? <View>
                    <Picker
                        selectedValue={optionen.pruefung}
                        onValueChange={(itemValue) => optionenSetzen({ ...optionen, pruefung: itemValue })}
                        style={styles.picker}
                    >
                        {pruefungen.map((item) => (
                            <Picker.Item label={item.name} value={item} key={item.name}/>
                        ))}
                    </Picker>
                </View> : null}

                <TouchableHighlight style={styles.button} onPress={() => {optionen.pruefung ? generatePDF(optionen.pruefung, true) : generatePDF(alleDaten, false)}}>
                    <Text style={styles.text}>PDF Erstellen</Text>
                </TouchableHighlight>
            </View>
        </>
    )
}

const generatePDF = async (data, status) => {

    let htmlContent = `<h1>Deine Noten</h1>`;

    console.log(status)
    console.log(data)

    if (status === true) {
        const noten = await getNotenByFachId(data.id);
        console.log(noten);
        htmlContent += `
            <h2>${data.name}</h2>
            <ul>
                ${noten.map(note => `<li>${note.titel}: ${note.wert} Gewichtung: ${note.gewichtung}</li>`).join('')}
            </ul>
        `;
        console.log(htmlContent);
    } else {

        const groupedData = data.reduce((acc, curr) => {
            if (!acc[curr.fach_id]) {
                acc[curr.fach_id] = {
                    name: curr.name,
                    noten: []
                };
            }
            acc[curr.fach_id].noten.push({
                titel: curr.titel,
                wert: curr.wert
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
        height: 70,

        borderColor: "black",
        borderWidth: 2,
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

    text: {
        textAlign: 'center',
    },
})