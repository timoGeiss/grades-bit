import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React } from 'react-native';
import {useEffect, useState} from "react";
import {main, insertIntoFach, getAllFaecher} from "./database";
import { Redirect } from 'expo-router';
import {router} from "expo-router";

export default function App() {
  return <Redirect href={"./app/home"}></Redirect>
}
