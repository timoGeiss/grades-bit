import {Stack} from "expo-router"

export default function _layout() {
    return (<Stack>
        <Stack.Screen name={"index"} options={{
            title: "Home", headerStyle: {
                backgroundColor: "orange",
            }, headerTintColor: "black"
        }}/>

        <Stack.Screen name={"export"} options={{
            title: "Export", headerStyle: {
                backgroundColor: "orange",
            }, headerTintColor: "black"
        }}/>

        <Stack.Screen name={"fach/create"} options={{
            title: "Fach erstellen", headerStyle: {
                backgroundColor: "orange",

            }, headerTintColor: "black"
        }}/>

        <Stack.Screen name={"note/create"} options={{
            title: "Note erstellen", headerStyle: {
                backgroundColor: "orange",

            }, headerTintColor: "black"
        }}/>

        <Stack.Screen name={"note/[id]"} options={{
            title: "Note", headerStyle: {
                backgroundColor: "orange",

            }, headerTintColor: "black"
        }}/>


        <Stack.Screen name={"fach/[id]"} options={{
            title: "Fach Ansicht",
            headerShown: false,
        }}/>
    </Stack>)
}