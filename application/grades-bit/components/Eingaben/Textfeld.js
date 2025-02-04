import {React, StyleSheet, TextInput, View, Text} from "react-native";

export default function Textfeld({titel, inhalt, wennInhaltVerändertWird, platzhalter}) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{titel}</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder={platzhalter}
                value={inhalt}
                onChangeText={(value) => wennInhaltVerändertWird(value)}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        width: "100%"
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
