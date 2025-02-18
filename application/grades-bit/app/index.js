import {StatusBar} from 'expo-status-bar';
import {Dimensions, React, StyleSheet, Text, View} from 'react-native';
import {useCallback, useState,} from "react";
import {getAllFaecher, getAllNoten} from "../database"
import FachList from "../components/Listen/FachList";
import {router, useFocusEffect} from "expo-router";
import Knopf from "../components/Eingaben/Knopf";
import TrennLinie from "../components/TrennLinie";
import Durchschnitt from "../components/Durchschnitt";
import IconKnopf from "../components/Eingaben/IconKnopf";

export default function index() {
    return (
        <View style={styles.container}>
            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },

    titel: {
        width: 120,
        paddingTop: 16,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        textAlign: "center",
    },

    icon: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: Dimensions.get("window").width - 100,
    },

    text: {
        textAlign: 'center',
        fontSize: 24,
    },

    margin: {
        marginBottom: 200,
    },

    list: {
        marginTop: 8,
        height: Dimensions.get("window").height / 100 * 70
    }
});
