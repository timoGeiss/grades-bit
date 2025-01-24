import {React, StyleSheet, Text, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconKnopf({beimKlicken, icon}) {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={beimKlicken}>
                <Ionicons size={32} color="orange" name={icon} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: "auto",
        marginBottom: "auto",
        textAlign: 'center',
        borderRadius: 6,
    },
});
