import {React, StyleSheet, Text, TextInput, View} from "react-native";

export default function AnzeigeFeld({titel, inhalt}) {

    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    text: {
        backgroundColor: "#f2f2f2",
        alignSelf: "flex-start",
        position: "absolute",
        top: -8,
        left: 12,
        zIndex: 1
    },
    input: {
        width: '100%',
        padding: 16,
        borderWidth: 1,
        borderRadius: 6,
    }
})
