import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, React} from 'react-native';
import {useEffect, useState} from "react";
import {main, insertIntoFach, getAllFaecher} from "../database"
import FachList from "../components/FachList";

export default function index() {
    const [faecher, setFaecher] = useState([])

    useEffect(() => {
        async function getFaecher() {
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
