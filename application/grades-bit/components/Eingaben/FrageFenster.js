import {Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function FrageFenster({titel, text, istSichtbar, sichtbarkeitSetzen, wennBesätigigenAngeklickt, wennAbbrechenAngeklickt}) {
    function bestätigen() {
        sichtbarkeitSetzen(!istSichtbar)
        wennBesätigigenAngeklickt()
    }
    function abbrechen() {
        sichtbarkeitSetzen(!istSichtbar)
        wennAbbrechenAngeklickt()
    }


    return (
        <View style={styles.container}>
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={istSichtbar}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    sichtbarkeitSetzen(!istSichtbar);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.titel}>{titel}</Text>
                        <Text style={styles.text}>{text}</Text>

                            <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonSecondary]}
                                onPress={() => bestätigen()}>
                                <Text style={styles.textStyle}>Bestätigen</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonPrimary]}
                                onPress={() => abbrechen()}>
                                <Text style={styles.textStyle}>Abbrechen</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    titel: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 16,
    },

    text: {
        fontSize: 16,
        marginBottom: 32,
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 16,
        marginLeft: "auto"
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 6,
        padding: 10,
        elevation: 2,
    },
    buttonPrimary: {
        backgroundColor: "orange",
    },
    buttonSecondary: {
        backgroundColor: '#FEC967',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
