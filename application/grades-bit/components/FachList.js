import {FlatList, Text, View} from "react-native";
import TrennLinie from "./TrennLinie";
import FachListItem from "./FachListItem";

export default function FachList({faecher}) {
    function renderItem({fach}) {
        return <FachListItem fach={fach}/>
    }

    return (
        <View>
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