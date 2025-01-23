import {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {insertIntoFach} from "../database";
import {router} from "expo-router";


export default function FachFormular() {

    const [name, nameSetzen] = useState("")
    const [error, errorSetzen] = useState(null)

    async function formularBestätigt(){
        if (name.length >= 5) {
             await insertIntoFach(name).then((res) => {
                 console.log(res)
                router.back()
            })
        } else {
            errorSetzen("Name ist zu kurz")
        }
    }

    return (
        <>
            <View style={styles.container}>
                    <Text style={styles.bigText}>Welches Fach möchtest du hinzufügen?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name des Fachs"
                        value={name}
                        onChangeText={(name) => nameSetzen(name)}
                    ></TextInput>
                {error ? <Text style={styles.error}>{error}</Text> : null}
                    <TouchableOpacity onPress={formularBestätigt} on style={styles.button}><Text style={styles.centerText}>Bestätigen</Text></TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        margin: 24,
        width: "auto",
    },

    bigText: {
        fontSize: 20,
    },

    error: {
        color: "red",
    },

    centerText: {
        textAlign: "center",
    },

    button: {
        backgroundColor: 'orange',
        color: 'black',
        marginTop: 16,
        textAlign: 'center',
        padding: 16,
        borderRadius: 6,
        width: '100%',
    },

    input: {
        width: '100%',
        padding: 16,
        marginTop: 24,
        borderWidth: 1,
        borderRadius: 6,
    }
})