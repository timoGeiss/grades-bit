import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, React, Dimensions} from 'react-native';
import {useCallback, useState, } from "react";
import {getAllFaecher, getAllNoten} from "../database"
import FachList from "../components/Listen/FachList";
import {router, useFocusEffect} from "expo-router";
import Knopf from "../components/Eingaben/Knopf";
import TrennLinie from "../components/TrennLinie";
import Durchschnitt from "../components/Durchschnitt";

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

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Knopf beimKlicken={zumErstellen} text={"Fach hinzufügen"}/>
            <View style={styles.list}>
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

    text: {
        textAlign: 'center',
    },

    margin: {
        marginBottom: 200,
    },

    list: {
        marginTop: 8,
        height: Dimensions.get("window").height/100*70
    }
});
