import {React, StyleSheet, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconKnopf({beimKlicken, groesse, icon}) {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={beimKlicken}>
                <Ionicons size={groesse ? groesse : 32} color="black" name={icon}/>
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
