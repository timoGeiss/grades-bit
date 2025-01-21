import {StyleSheet, View} from "react-native";

export default function TrennLinie() {
    return (
        <View style={styles.line}/>
    );
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 0.5, borderColor: "gray"
    }
});
