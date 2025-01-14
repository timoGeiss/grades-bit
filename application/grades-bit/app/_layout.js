import {Tabs} from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function _layout() {
    return (<Stack>
            <Stack.Screen name={"home"} options={{
                title: "Planets", headerStyle: {
                    backgroundColor: "black",

                }, headerTintColor: "#F2E48A"
            }}/>

            <Stack.Screen name={"faecher/uebersicht"} options={{
                title: "Planets", headerStyle: {
                    backgroundColor: "black",

                }, headerTintColor: "#F2E48A"
            }}/>
        </Stack>)
}