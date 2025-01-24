import {React, StyleSheet, Text, TouchableOpacity} from "react-native";

export default function Knopf({beimKlicken, text}) {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={beimKlicken}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        color: 'black',
        marginTop: 24,
        textAlign: 'center',
        padding: 16,
        borderRadius: 6,
    },

    text: {
        textAlign: 'center',
    },
});
