import {Dimensions, React, StyleSheet, Text, View} from "react-native";
import {router, useFocusEffect, useLocalSearchParams} from "expo-router";
import {useCallback, useEffect, useState} from "react";
import {getAllFaecher, getFachById, getNotenByFachId, insertIntoFach, removeFach, removeNote} from "../../../database";
import NotenListe from "../../../components/Listen/NotenListe";
import Knopf from "../../../components/Eingaben/Knopf";
import IconKnopf from "../../../components/Eingaben/IconKnopf";
import FrageFenster from "../../../components/Eingaben/FrageFenster";
import Durchschnitt from "../../../components/Durchschnitt";
import TrennLinie from "../../../components/TrennLinie";
import {StatusBar} from "expo-status-bar";
import Wunschnote from "../../../components/Wunschnote";

export default function Index() {
    const {id} = useLocalSearchParams()
    const [istSichtbar, sichtbarkeitSetzen] = useState(false)

    useFocusEffect(
        useCallback(() => {
            if (!id) {
                return
            }

            async function FachLaden() {

            }

        }, [id])
    );

    async function fachLöschen() {
        const noten = await getNotenByFachId(id)
        for (const note of noten) {
            await removeNote(note.id)
        }
        await removeFach(id)
    }

    function frageLöschen() {
    }

    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        // height: Dimensions.get("window").height,
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        gap: 16
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%"
    },
    titel: {
        fontSize: 24,
        paddingVertical: 16,
        flex: 1,
        marginRight: 16,
    },
    list: {
        marginTop: 8,
        maxHeight: Dimensions.get("window").height/100*40,
    },
    durchschnitt: {
        // marginLeft: 8,
        width: "100%",
        // position: "absolute",
        // bottom: -50,
    }
});
