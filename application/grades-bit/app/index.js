import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, React} from 'react-native';
import {useCallback, useState, } from "react";
import {getAllFaecher} from "../database"
import FachList from "../components/Listen/FachList";
import {router, useFocusEffect} from "expo-router";
import Knopf from "../components/Eingaben/Knopf";

export default function index() {
    const [faecher, setFaecher] = useState([])

    useFocusEffect(
        useCallback(() => {
            async function getFaecher() {
                const daten = await getAllFaecher()
                setFaecher(daten)
            }
            getFaecher()
        }, [])
    );

    function zumErstellen() {
        router.push("/fach/create")
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Knopf beimKlicken={zumErstellen} text={"Fach hinzufügen"}/>
            <View style={styles.margin}>
                <FachList faecher={faecher}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        height: "100%"
    },

    text: {
        textAlign: 'center',
    },

    margin: {
        marginBottom: 200,
    }
});
