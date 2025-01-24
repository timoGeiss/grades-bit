import {React, StyleSheet, TextInput} from "react-native";

export default function Textfeld({titel, text, wennTextVerändertWird}) {

    return (
        <TextInput
            style={styles.input}
            placeholder={titel}
            value={text}
            onChangeText={(value) => wennTextVerändertWird(value)}
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
