import {React, StyleSheet, TextInput} from "react-native";

export default function Zahlenfeld({titel, inhalt, wennInhaltVerändertWird}) {

    return (
        <TextInput
            style={styles.input}
            keyboardType={"number-pad"}
            placeholder={titel}
            value={inhalt}
            onChangeText={(value) => wennInhaltVerändertWird(value)}
        ></TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 16,
        marginTop: 24,
        borderWidth: 1,
        borderRadius: 6,
    }
})
