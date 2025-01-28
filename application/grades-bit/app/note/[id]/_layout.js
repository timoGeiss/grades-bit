import {Tabs, Stack} from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function _layout() {
    return (<Stack>
        <Stack.Screen name={"index"} options={{
            title: "Details", headerStyle: {
                backgroundColor: "orange",

            }, headerTintColor: "black",
            headerShown: false,
        }}/>

        <Stack.Screen name={"edit"} options={{
            title: "Fach Bearbeiten", headerStyle: {
                backgroundColor: "orange",

            }, headerTintColor: "black"
        }}/>1
    </Stack>)
}