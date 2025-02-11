import {Stack} from "expo-router"

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
        }}/>
    </Stack>)
}