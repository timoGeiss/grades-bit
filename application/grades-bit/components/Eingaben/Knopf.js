import {React, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function Knopf({beimKlicken, text}) {
    return (
        <View>
        </View>
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
        width: '100%',
    },

    text: {
        textAlign: 'center',
    },
});
