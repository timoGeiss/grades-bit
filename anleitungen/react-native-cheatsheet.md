# Cheatsheet

## Komponenten

### View

Die View ist eine Komponente, welche das Anordnen und Gruppieren von weiteren Komponenten ermöglicht (wie eine Box, welche weitere Elemente enthalten kann).
Die View selbst hat kein Aussehen, ausser es wird explizit gesetzt.

```jsx 
<View></View> <!-- Ich bin nicht gruppiert -->
<View>
    <View></View> <!-- Ich bin gruppiert -->
    <View></View> <!-- Ich bin gruppiert -->
</View>
```

### Text

Der Text ist eine Komponente, welche einen Text anzeigt. Der Text, welcher angezeigt werden soll, muss zwischen den Pfeilen sein:

```jsx
<Text>A) Von a nach b (B</Text>
```

Wird zu:

A) Von a nach b (B

### Knopf

Der Knopf ist eine Komponente, welche eine klickbare Fläche darstellt. Dabei kann eine Text mitgegeben werden, welche auf dem Knopf angezeigt werden soll. Nebst dem Text kann auch eine Funktion mitgegeben werden, welche ausgeführt wird wenn der Knopf gedrückt wird.

```jsx
<Knopf beimKlicken={formularBestätigt} text={"Bestätigen"}/>
```

### IconKnopf

Der IconKnopf ist wie der Knopf. Jedoch zeigt er nicht einen Text, sondern ein Icon an.

```jsx
<IconKnopf beimKlicken={zumBearbeiten} icon={"pencil"}/>
```

### Textfeld

Das Textfeld ist eine Komponente, welche ein Eingabefeld darstellt. Dabei kann ein Titel zur identifikation mitgegeben werden und eine Funktion, welche ausgeführt wird, wenn sich dessen Inhalt verändert.

```jsx
<Textfeld
    titel={"Name des Fachs"}
    inhalt={fach.name}
    wennInhaltVerändertWird={(neuerInhalt) => fachSetzen({...fach, name: neuerInhalt})}
/>
```

### Zahlenfeld

Das Zahlenfeld ist wie ein Testfeld, jedoch können nur Zahlen in diese Komponente eingegeben werden.

```jsx
<Zahlenfeld
    titel={"Note"}
    inhalt={note.wert}
    wennInhaltVerändertWird={(neuerInhalt) => noteSetzen({...note, wert: neuerInhalt})}
/>
```

### Fragefenster

Das Fragefenster ist eine Komponente, welche ein Fenster aufpoppen lässt. Dabei kann ein Text angezeigt werden.
Dabei können ebenfalls Funktionen mitgegeben werden, falls auf Bestätigen oder Abbrechen geklickt wird.

Das Fenster wird nur angezeigt, wenn _istSichtbar_ auf 'true' gesetzt ist. _sichtbarkeitSetzen_ muss von derselben State die setzen-Funktion sein.

```jsx
<FrageFenster
    text={"Willst du diese Note wirklich löschen?"}
    titel={"Löschung Bestätigen"}
    istSichtbar={istSichtbar}
    sichtbarkeitSetzen={sichtbarkeitSetzen}
    wennAbbrechenAngeklickt={() => {}}
    wennBesätigigenAngeklickt={noteLöschen}/>
```
