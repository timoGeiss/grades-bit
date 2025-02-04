import {React, StyleSheet, Text, TextInput, View} from "react-native";

export default function Zahlenfeld({titel, inhalt, wennInhaltVerändertWird, platzhalter}) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>{titel}</Text>
            </View>
            <TextInput
                style={styles.input}
                keyboardType={"numeric"}
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
        // minWidth: Dimensions.get("window").width/100*50,
        width: '100%',
    },
    input: {
        width: '100%',
        padding: 16,
        borderWidth: 1,
        borderRadius: 6,
    },
    text: {
        backgroundColor: "#f2f2f2",
        alignSelf: "flex-start",
        position: "absolute",
        top: -8,
        left: 12,
        zIndex: 1
    },
})
