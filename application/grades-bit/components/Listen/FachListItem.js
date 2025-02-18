import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router} from 'expo-router';
import {useEffect, useState} from "react";
import {getNotenByFachId} from "../../database";

export default function FachListItem({fach}) {
    return (
        <View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    text: {
        padding: 16,
        fontSize: 16,
    },
    titel: {
        width: "80%",
    },
    schnitt: {
        fontSize: 16,
        padding: 16,
        marginLeft: "auto",
    },
    balken: {
        width: "8px",
        height: "100%",
    }
})