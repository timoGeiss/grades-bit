# CSS in React Native

**Inhalt**

- [CSS](#css)
  - [Aufbau](#aufbau)
  - [CSS einbinden](#css-einbinden)
  - [Weiterführende Links](#weiterführende-links)
  - [Wichtige CSS Eigenschaften](#wichtige-css-eingenschaften)

<div style="page-break-after: always;"></div>

## Aufbau

In CSS schreiben wir Regeln zum Design von unseren Komponenten.
Dazu brauchen wir ein Stylesheet.
Dieses Stylesheet enthält Indentifikatoren um bestimmte Komponenten anzuspechen und Eigenschaften mit Werten um sie zu gestalten.

``` jsx
const styles = StyleSheet.create({
    identifikator: {
        eigenschaft: wert,
    }
});
```

## CSS einbinden
Wir geben einer Komponente mit Style den Idendifikator mit, damit weiss das CSS welche Komponente es wie stylen muss. 
```jsx
<View style={styles.identifikator}>
</View>
```

## Wichtige CSS Eingenschaften
- ```color``` ändert die Text Farbe als Wert kann z.B  ```"green"```oder auch Hexadezimale werte für Farben verwendet werden ```"#00FF00" ```
- ```font-size``` setzt die Schriftgrösse als wert wird eine Zahl in Pixel angegeben z.B ```"12px"```

## Weiterführende Links

- [W3-Schools - CSS](https://www.w3schools.com/css/default.asp)
- [mdn web docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)