import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import {checkIfTablesExist, createConnection, createTables, insertStartData, query} from "./database";
// import {router} from "expo-router";

export default function App() {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    const setup = async () => {
      await main( async () => {
        await insertIntoFach("Mathematik")
        console.log("math inserted")
      })
    };
    setup();

    const testQuery = async () => {
      const response = await getAllFaecher(() => {
        console.log("Aff")
        setSubjects(response)
      }) 
    }
    testQuery()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Affegring</Text>
      <StatusBar style="auto" />
        {subjects.map((subject) => (
            <Text>{subject.name}</Text>
        ))}
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
