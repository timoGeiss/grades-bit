# React Native Spickzettel

## Inhaltsverzeichnis
- [Setup](#setup)
- [Kernkomponenten](#kernkomponenten)
- [Styling](#styling)
- [Navigation](#navigation)
- [Zustandsverwaltung](#zustandsverwaltung)
- [APIs](#apis)
- [Debugging](#debugging)

---

## Setup

### Benötigte Pakete installieren 
```bash
npm install
```

### Entwicklungsserver starten
```bash
npm start
```

---

## Kernkomponenten

### View
Container für andere Komponenten.
```javascript
import { View } from 'react-native';

<View style={{ flex: 1, backgroundColor: 'blue' }} />
```

### Text
Mit der Text-Komponente kannst du Text in deiner App anzeigen. In diesem Beispiel wird "Hallo Welt" auf dem Bildschirm angezeigt. Wir haben auch die Schriftgröße (fontSize) auf 20 gesetzt, sodass der Text größer erscheint.
```javascript
import { Text } from 'react-native';

<Text style={{ fontSize: 20 }}>Hallo Welt</Text>
```

### Image
Zeigt Bilder an.
```javascript
import { Image } from 'react-native';

<Image
  source={{ uri: 'https://example.com/image.png' }}
  style={{ width: 100, height: 100 }}
/>
```

### Button
Einfacher Button.
```javascript
import { Button } from 'react-native';

<Button
  title="Klick mich"
  onPress={() => alert('Button gedrückt')}
/>
```

---

## Styling in React Native

### Inline-Stile
```javascript
<View style={{ padding: 10, backgroundColor: 'red' }} />
```

### StyleSheet
```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

<View style={styles.container} />
```

---

## Navigation


### Beispiel: Stack Navigator
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Startseite" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

## Zustandsverwaltung

### useState Hook
<b>useState</b> ist eine Funktion, mit der du einen Zustand in deiner App speicherst. In diesem Beispiel haben wir eine Variable count, die zu Beginn den Wert 0 hat. Wenn der Benutzer auf den Button klickt, wird der Wert von count um eins erhöht.
```javascript
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Erhöhen" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

---

## APIs

### Daten abrufen mit der Fetch API
```javascript
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
```

---

## Debugging

### Debugging im Emulator aktivieren
1. Schüttle dein Gerät oder drücke `Cmd + M` / `Ctrl + M` im Emulator.
2. Wähle "Debug JS Remotely" aus.

### Debugging mit React Developer Tools
```bash
npm install -g react-devtools
react-devtools
```
