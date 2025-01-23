import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { router } from 'expo-router';
import {useState} from "react";

export default function FachListItem({fach}) {
    const [item, setItem] = useState(fach);

    function navigiereZuDetailAnsicht() {
        router.push(`fach/${fach.id}`)
    }

    return (
        <View>
            <TouchableOpacity onPress={navigiereZuDetailAnsicht}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 16,
        fontSize: 16,
    }
})