import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect} from "react";
import {checkIfTablesExist, createConnection, createTables, insertStartData} from "./database";
import {router} from "expo-router";

export default function App() {
  useEffect(() => {
    const setup = async () => {
      await createConnection();
      if (!await checkIfTablesExist()) {
        await createTables();
        await insertStartData();
      }
      await router.push("/home");
    };
    setup();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
