import {React, StyleSheet, Text, View} from "react-native";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {useCallback, useEffect, useState} from "react";
import {getAllFaecher, getFachById, getNotenByFachId} from "../../../database";
import NotenListe from "../../../components/Listen/NotenListe";
import Knopf from "../../../components/Eingaben/Knopf";
import IconKnopf from "../../../components/Eingaben/IconKnopf";

export default function Index() {
    const {id} = useLocalSearchParams()
    const [fach, setFach] = useState({})
    const [noten, setNoten] = useState([])

    useFocusEffect(
        useCallback(() => {
            if (!id) {
                return
            }

            async function FaecherLaden() {
                const data = await getFachById(id)
                setFach(data)
            }
            async function NotenLaden() {
                const data = await getNotenByFachId(id)
                setNoten(data)
                console.log(data)
            }

            FaecherLaden()
            NotenLaden()
        }, [id])
    );

    function zumErstellen() {
        router.push(`/note/create?id=${id}`)
    }

    function zumBearbeiten() {
        router.push(`/fach/${id}/edit`)
    }

    return (
        <View style={styles.container}>
                <Text style={styles.titel}>{fach.name}</Text>
                <View style={styles.stift}>
                    <IconKnopf beimKlicken={zumBearbeiten} icon={"pencil"}/>
                </View>
            <Knopf beimKlicken={zumErstellen} text={"Note hinzufügen"}/>
            <View style={styles.margin}>
                <NotenListe noten={noten}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        height: "100%"
    },
    stift: {
        position: "absolute",
        zIndex: 1,
        top: 25,
        left: 350
    },

    titel: {
        fontSize: 24,
        textAlign: "center",
        paddingVertical: 16,
    },

    margin: {
        marginBottom: 200,
    }
});
