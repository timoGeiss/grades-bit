import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React } from 'react-native';
import {useEffect, useState} from "react";
import {main, insertIntoFach, getAllFaecher} from "./database";
// import {router} from "expo-router";

export default function home() {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    getAllFaecher().then(resp => {
      setSubjects(resp)
    })
  }, []);

  return (
    <View style={styles.container}>
        {subjects.map(resp => {
          return (
            <>
            <Text key={resp.id}>{resp.name}</Text>
            </>
          )
        })}
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
