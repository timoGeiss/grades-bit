import {Text, TouchableOpacity, View} from "react-native";
import { useNavigation } from 'expo-router';
import {useState} from "react";

export default function FachListItem({fach}) {
    const navigation = useNavigation();
    const [item, setItem] = useState(fach);

    function navigiereZuDetailAnsicht() {
        navigation.navigate(`fach/${fach.id}`)
    }

    console.log(fach)

    return (
        <View>
            <TouchableOpacity onPress={navigiereZuDetailAnsicht}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        padding: 16
    }
})