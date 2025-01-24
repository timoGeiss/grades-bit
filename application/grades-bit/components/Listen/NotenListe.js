import {FlatList, Text, View} from "react-native";
import TrennLinie from "../TrennLinie";
import FachListItem from "./FachListItem";
import NotenListeItem from "./NotenListeItem";

export default function NotenListe({noten}) {
    function renderItem({item}) {
        return <NotenListeItem note={item}/>
    }

    return (
        <View>
            {noten.length > 0 ?
                <FlatList
                    data={noten}
                    renderItem={renderItem}
                    keyExtractor={(note, index) => index.toString()}
                    ItemSeparatorComponent={TrennLinie}
                />
                :
                <Text>Keine Noten vorhanden!</Text>}
        </View>
    );
}