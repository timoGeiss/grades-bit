import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import {checkIfTablesExist, createConnection, createTables, insertStartData, query} from "./database";
import {router} from "expo-router";

export default function App() {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    const setup = async () => {
      await createConnection();
      if (!await checkIfTablesExist()) {
        await createTables();
        await insertStartData();
      }
      // await router.push("/home");
    };
    setup();

    const testQuery = async () => {
      const response = await query("fach");
      setSubjects(response)
    }
    testQuery()
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ul>
        {subjects.map((subject, index) => (
            <li key={index}>{subject.name}</li>
        ))}
      </ul>
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
