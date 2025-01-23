import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, React, TouchableOpacity, Text} from 'react-native';
import {useCallback, useEffect, useState, } from "react";
import {main, insertIntoFach, getAllFaecher, insertIntoNote} from "../database"
import FachList from "../components/List/FachList";
import {router, useFocusEffect} from "expo-router";

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
        router.push("/create")
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={zumErstellen}>
                <Text style={styles.text}>Fach hinzufügen</Text>
            </TouchableOpacity>
            <View style={styles.margin}>
                <FachList faecher={faecher}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: 'orange',
        color: 'black',
        margin: 8,
        marginTop: 24,
        textAlign: 'center',
        padding: 16,
        borderRadius: 6,
    },

    text: {
        textAlign: 'center',
    },

    margin: {
        marginBottom: 200,
    }
});
