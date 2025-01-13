# HTML

**Inhalt**
- [HTML](#html)
  - [Text](#text)
    - [Textabsätze](#textabsätze)
    - [Überschriften](#überschriften)
    - [Hervorhebungen](#hervorhebungen)
    - [Listen](#listen)
    - [Links](#links)
  - [Bilder](#bilder)
  - [Benutzer eingaben](#benutzer-eingaben)
    - [Knöpfe](#knöpfe)
    - [Input-Element](#input-element)
  - [Weiterführende Links](#weiterführende-links)

<div style="page-break-after: always;"></div>

## Text

### Textabsätze

``` html
<p> Lorem Ipsum</p>
```

<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <p>Lorem Ipsum </p>
</div>

### Überschriften

Überschriften in sechs Abstufungen, h1 ist die Hauptüberschrift in einem HTML-Dokument.

``` html
<h1>Lorem</h1>
<h2>Ipsum</h2>
<h3>Dolor</h3>
<h4>Sit</h4>
<h5>Amir</h5>
<h6>Consenter</h6>
```
<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
<h1>Lorem</h1>
<h2>Ipsum</h2>
<h3>Dolor</h3>
<h4>Sit</h4>
<h5>Amir</h5>
<h6>Consenter</h6>
</div>

### Hervorhebungen

Der  im `<strong></strong>` umschlossene Text soll stark hervorgehoben werden und wird in der Regel fett dargestellt.
Der  im `<em></em>` umschlossene Text soll hervorgehoben werden (emphasize) und wird in der Regel kursiv dargestellt.

``` html
<p> <strong>Lorem</strong> Ipsum <em>dolor</em></p>
```
<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <p> <strong>Lorem</strong> Ipsum <em>dolor</em></p>
</div>

### Listen


`<ul></ul>` Liste mit Punkten als Aufzählungszeichen – kann nur in Verbindung mit `<li>`-Elementen verwendet werden.

`<ol></ol>` Nummerierte Liste – kann nur in Verbindung mit `<li>`-Elementen verwendet werden.

`<li></li>` Einzelnes Listenelement – kann nur in Verbindung mit dem `<ol>`- oder `<ul>`-Element verwendet werden.

``` html
<ul>
    <li>Das</li>
    <li>ist</li>
    <li>eine</li>
    <li>Liste</li>
    <li>mit</li>
    <li>Punkten</li>
</ul>
<ol>
    <li>Das</li>
    <li>ist</li>
    <li>eine</li>
    <li>Liste</li>
    <li>mit</li>
    <li>Zahlen</li>
</ol>
```

<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <ul>
        <li>Das</li>
        <li>ist</li>
        <li>eine</li>
        <li>Liste</li>
        <li>mit</li>
        <li>Punkten</li>
    </ul>
    <ol>
        <li>Das</li>
        <li>ist</li>
        <li>eine</li>
        <li>Liste</li>
        <li>mit</li>
        <li>Zahlen</li>
    </ol>
</div>

### Links

Fügt einen Link ein, das Attribut `href` (Hyperreference) muss vorhanden sein.

``` html
<a href="https://youtu.be/dQw4w9WgXcQ?feature=shared">my cool vid</a>
```
<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <a href="https://youtu.be/dQw4w9WgXcQ?feature=shared">my cool vid</a>
</div>

## Bilder

Fügt ein Bild in das HTML-Dokument ein, das Attribut src (source, Quelle) muss vorhanden sein.

``` html
<img src="https://picsum.photos/seed/beispiel/200/200">
```
<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <img src="https://picsum.photos/seed/beispiel/200/200">
</div>

## Benutzer eingaben

### Knöpfe

Mit einem Button Element, kannst du den Benutzer eine Funktion aufrufen lassen.
Das `onclick` definiert was auf Knopfdruck passiert.

``` html
<button onclick="myFunction()">Klick mich!</button>
<p id="adsf"></p>

<script>
function myFunction() {
    document.getElementById("asdf").innerText = 
  alert("Hallo!");
}
</script>
```
<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
<button onclick="myFunction()">Klick mich!</button>

<script>
function myFunction() {
  alert("Hallo!");
}
</script>
</div>

### Input-Element


``` html
<label>Checkbox</label><br>
<input type="checkbox"><br>
<label>Color</label><br>
<input type="color"><br>
<label>Number</label><br>
<input type="number"><br>
<label>Password</label><br>
<input type="password"><br>
<label>Radio</label><br>
<input type="radio" name="radio" >
<input type="radio" name="radio" >
<input type="radio" name="radio" ><br>
<label>Text</label><br>
<input type="text"><br>
```
<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <label>Checkbox</label><br>
    <input type="checkbox"><br>
    <label>Color</label><br>
    <input type="color"><br>
    <label>Number</label><br>
    <input type="number"><br>
    <label>Password</label><br>
    <input type="password"><br>
    <label>Radio</label><br>
    <input type="radio" name="radio" >
    <input type="radio" name="radio" >
    <input type="radio" name="radio" ><br>
    <label>Text</label><br>
    <input type="text"><br>
</div>

Für mehr Infos klicke [hier](https://www.w3schools.com/html/html_forms.asp).

## Weiterführende Links

 - [W3-Schools - HTML](https://www.w3schools.com/html/default.asp)
 - [mdn web docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)