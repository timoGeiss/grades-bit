# React Native CheatSheet

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
Zeigt Bilder an. In der Uri wird der Pfad zum Bild angegeben.
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

### TouchableOpacity
Ist wie ein Button man kann damit auch andere Komponenten anklickbar machen.
```javascript
import { TouchableOpacity} from 'react-native';

<TouchableOpacity onPress={() => Alert.alert('Berührt!')}>
      <Text>Tippe hier</Text>
</TouchableOpacity>
```

### Scrollview
Mit ScrollView kannst du scrollbare Bereiche erstellen, die bei vielen Inhalten nützlich sind.
```javascript
import { ScrollView} from 'react-native';

<ScrollView>
      <Text style={{ fontSize: 20, padding: 10 }}>Langer Text...</Text>
      <Text style={{ fontSize: 20, padding: 10 }}>Noch mehr Text...</Text>
</ScrollView>
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

### `useState` Hook
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

### `useEffect` Hook 

Der <b>useEffect</b> Hook wird verwendet, um **Nebenwirkungen** (wie das Abrufen von Daten oder das Aktualisieren der Komponenten) in einer Funktionskomponente auszuführen.

### Beispiel:

```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect wird nach jedem Rendern ausgeführt
  useEffect(() => {
    console.log('Komponente wurde gerendert!');
  }, [count]); // Nur ausführen, wenn sich `count` ändert

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Erhöhen</button>
    </div>
  );
};

export default App;
```

---

## APIs

### Daten abrufen mit der Fetch API(Fortgeschritten)
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

