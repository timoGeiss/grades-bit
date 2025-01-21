import {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


export default function FachFormular() {

    const daten = {
        name: name
    }

    const [name, nameSetzten] = useState("")

    return (
        <>
            <View style={styles.container}>
                    <Text styles={styles.bigText}>Name des Fachs</Text>
                    <TouchableOpacity style={styles.button}><Text>Bestätigen</Text></TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 64,
        margin: 16,
        width: "auto",
    },

    bigText: {

    },

    button: {
        backgroundColor: 'orange',
        color: 'black',
        margin: 8,
        marginTop: 24,
        textAlign: 'center',
        padding: 16,
        borderRadius: 6,
    }
})