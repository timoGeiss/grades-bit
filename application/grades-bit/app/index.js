import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, React} from 'react-native';
import {useEffect, useState} from "react";
import {main, insertIntoFach, getAllFaecher, insertIntoNote} from "../database"
import FachList from "../components/List/FachList";

export default function index() {
    const [faecher, setFaecher] = useState([])

    useEffect(() => {
        async function getFaecher() {
            const fachName = "Fach" + Date.now();
            await insertIntoFach(fachName);
            await insertIntoNote(1, "", 6, 1);

            const daten = await getAllFaecher()

            setFaecher(daten)
        }
        getFaecher()
    }, []);

    return (
        <View>
            <FachList faecher={faecher}/>
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
});
