import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, View, React, Dimensions} from 'react-native';
import {useCallback, useState, } from "react";
import {getAllFaecher, getAllNoten} from "../database"
import FachList from "../components/Listen/FachList";
import {router, useFocusEffect} from "expo-router";
import Knopf from "../components/Eingaben/Knopf";
import TrennLinie from "../components/TrennLinie";
import Durchschnitt from "../components/Durchschnitt";
import IconKnopf from "../components/Eingaben/IconKnopf";

export default function index() {
    const [faecher, setFaecher] = useState([])
    const [noten, setNoten] = useState([])

    useFocusEffect(
        useCallback(() => {
            async function getFaecher() {
                const daten = await getAllFaecher()
                setFaecher(daten)
            }

            async function alleNotenBekommen() {
                const daten = await getAllNoten()
                setNoten(daten)
            }

            getFaecher()
            alleNotenBekommen()
        }, [])
    );

    function zumErstellen() {
        router.push("/fach/create")
    }

    function zumExportieren() {
        router.push("/export")
    }

    return (
        <View style={styles.container}>
            <StatusBar/>

            <Knopf beimKlicken={zumErstellen} text={"Fach hinzufügen"}/>

            <View style={styles.list}>
                <View style={styles.titel}>
                    <Text style={styles.text}>Fächer</Text>
                    <View style={styles.icon}>
                        <IconKnopf groesse={40}  beimKlicken={zumExportieren} icon={"download-outline"}/>
                    </View>
                </View>
                <FachList faecher={faecher}/>
            </View>
            <View>
                <TrennLinie/>
                <Durchschnitt noten={noten}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },


    titel: {
        width: 120,
        paddingTop: 16,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        textAlign: "center",
    },

    icon: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: Dimensions.get("window").width - 100,
    },

    text: {
        textAlign: 'center',
        fontSize: 24,
    },

    margin: {
        marginBottom: 200,
    },

    list: {
        marginTop: 8,
        height: Dimensions.get("window").height/100*70
    }
});
