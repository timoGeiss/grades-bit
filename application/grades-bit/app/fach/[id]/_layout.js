import {Stack} from "expo-router"

export default function _layout() {
    return (<Stack>
        <Stack.Screen name={"index"} options={{
            title: "Details", headerStyle: {
                backgroundColor: "orange",

            }, headerTintColor: "black",
            headerBackVisible: true
        }}/>

        <Stack.Screen name={"edit"} options={{
            title: "Fach Bearbeiten", headerStyle: {
                backgroundColor: "orange",

            }, headerTintColor: "black"
        }}/>
    </Stack>)
}