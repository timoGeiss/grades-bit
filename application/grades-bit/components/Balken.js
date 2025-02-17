import {StyleSheet, Text, View} from "react-native";

export default function Balken({wert}) {
    function erhalteFarbeNachNotenWert(note) {
        if (note >= 5.5) {
            return "green"
        }
        if (note >= 5 && note < 5.5) {
            return "lightgreen"
        }
        if (note >= 4.5 && note < 5) {
            return "yellow"
        }
        if (note >= 4 && note < 4.5) {
            return "orange"
        }
        if (note < 4) {
            return "red"
        }
    }

    return (
        <View style={[styles.balken, {backgroundColor: erhalteFarbeNachNotenWert(wert)}]}><Text></Text></View>
    )
}

const styles = StyleSheet.create({
    balken: {
        width: "8px",
        height: "100%",
    }
})