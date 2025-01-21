import {Text, TouchableOpacity, View} from "react-native";
import { useNavigation } from 'expo-router';

export default function FachListItem({fach}) {
    const navigation = useNavigation();

    function navigiereZuDetailAnsicht() {
        navigation.navigate(`fach/${fach.id}`)
    }

    return (
        <View>
            <TouchableOpacity onPress={navigiereZuDetailAnsicht}>
                <Text>{fach.name}</Text>
            </TouchableOpacity>
        </View>
    )
}