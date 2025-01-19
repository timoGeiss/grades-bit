import {Tabs, Stack} from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function _layout() {
    return (<Stack>
            <Stack.Screen name={"index"} options={{
                title: "Home", headerStyle: {
                    backgroundColor: "orange",

                }, headerTintColor: "black"
            }}/>

            <Stack.Screen name={"create"} options={{
                title: "Noten Erstellen", headerStyle: {
                    backgroundColor: "orange",

                }, headerTintColor: "black"
            }}/>
        </Stack>)
}