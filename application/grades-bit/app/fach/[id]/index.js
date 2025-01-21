import {StyleSheet, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {getFachById, getNotenByFachId} from "../../../database";
import NotenList from "../../../components/List/NotenList";

export default function Index() {
    const {id} = useLocalSearchParams()
    const [fach, setFach] = useState({})
    const [noten, setNoten] = useState([])

    useEffect(() => {
        if (!id) {
            return
        }

        async function loadFach() {
            const data = await getFachById(id)
            setFach(data)
        }
        async function loadNoten() {
            const data = await getNotenByFachId(id)
            setNoten(data)
        }

        loadFach()
        loadNoten()
    }, [id])

    return (
        <View>
            <Text style={styles.titel}>{fach.name}</Text>
            <NotenList noten={noten}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titel: {
        fontSize: 24,
        textAlign: "center",
        paddingVertical: 16,
    }
});
