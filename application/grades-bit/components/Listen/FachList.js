import {FlatList, StyleSheet, Text, View} from "react-native";
import TrennLinie from "../TrennLinie";
import FachListItem from "./FachListItem";

export default function FachList({faecher}) {
    function renderItem({item}) {
        return <FachListItem fach={item}/>
    }

    return (
        <View style={styles.container}>
            {faecher.length > 0 ?
                <FlatList
                    data={faecher}
                    renderItem={renderItem}
                    keyExtractor={(fach, index) => index.toString()}
                    ItemSeparatorComponent={TrennLinie}
                />
                :
                <Text>Keine Fächer vorhanden!</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    }
})