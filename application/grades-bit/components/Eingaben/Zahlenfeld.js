import {React, StyleSheet, Text, TextInput, View} from "react-native";

export default function Zahlenfeld({titel, inhalt, wennInhaltVerändertWird, mitKomma}) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{titel}</Text>
            </View>
            <TextInput
                style={styles.input}
                keyboardType={"numeric"}
                placeholder={titel}
                value={inhalt}
                onChangeText={(value) => wennInhaltVerändertWird(value)}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    input: {
        width: '100%',
        padding: 16,
        borderWidth: 1,
        borderRadius: 6,
    },
    text: {
        backgroundColor: "#fff",
        alignSelf: "flex-start",
        position: "absolute",
        top: -8,
        left: 12,
        zIndex: 1
    },
})
