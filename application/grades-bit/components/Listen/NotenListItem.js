import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { router } from 'expo-router';
import {useState} from "react";

export default function NotenListItem({note}) {
    const [item, setItem] = useState(note);

    function navigiereZuDetailAnsicht() {
        // router.push(`note/${note.id}`)
    }

    return (
        <View>
            <TouchableOpacity onPress={navigiereZuDetailAnsicht}>
                <Text style={styles.text}>{item.titel}</Text>
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