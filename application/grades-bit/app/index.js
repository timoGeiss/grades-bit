import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React, TouchableOpacity } from 'react-native';
import {useEffect, useState} from "react";
import {main, insertIntoFach, getAllFaecher} from "../database"
import { Button } from 'react-native-web';
import { useNavigation } from 'expo-router';
// import {router} from "expo-router";

export default function index() {
  const [subjects, setSubjects] = useState([])
  const navigation = useNavigation();

  useEffect(() => {
    getAllFaecher().then(resp => {
      setSubjects(resp)
    })
  }, []);

  const toCreate = (() => {
    navigation.navigate("create")
  })


  return (
    <>
      <TouchableOpacity onPress={toCreate}><Text>Aff</Text></TouchableOpacity>
    </>
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
