# CSS

**Inhalt**
- [CSS](#css)
  - [Aufbau](#aufbau)
  - [CSS ins html einbinden](#css-ins-html-einbinden)
    - [Inline CSS](#inline-css)
    - [style tags](#style-tags)
    - [CSS File](#css-file)
  - [Selektoren](#selektoren)
    - [Tag Selektoren](#tag-selektoren)
    - [Class Selektoren](#class-selektoren)
  - [Weiterführende Links](#weiterführende-links)

<div style="page-break-after: always;"></div>

## Aufbau

In CSS schreiben wir Regeln zum Design von unserem HTML.
Dazu schreiben wir Rules. Diese bestehen jeweils aus einem Selector und
1 bis mehrere Properties und deren Values.

``` 
selector {
    property1: value1;
    property2: value2;
}
```

## CSS ins html einbinden

Es gibt 3 verschieden Wege CSS in HTML einzubinden.

### Inline CSS

Der erste von diesen Wegen ist inline-CSS. Wie es der Name vermuten lässt,
schreiben wir unser CSS gerade im HTML.

``` html
<p style="color: red">Lorem Ipsum</p>
```
<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <p style="color: red">Lorem Ipsum</p>
</div>

### style tags

Wir können das CSS auch in einen `<style></style>`-Tag schreiben.

``` html
<style>
    p {
        font-family: sans-serif;
    }
</style>
<p>Lorem Ipsum</p>
```
<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <style>
        p {
            font-family: sans-serif;
        }
    </style>
    <p>Lorem Ipsum</p>
</div>

### CSS File

Das CSS kann auch in ein separates Dokument geschrieben werden.
Dan müssen wir aber im Head vom HTML auf das CSS verlinken.

CSS:

``` css
p {
   font-size: 2rem; 
}
```

HTML:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <p>Lorem Ipsum</p>
</body>
</html>
```

<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <p style="font-size: 2rem; ">Lorem Ipsum</p>
</div>

## Selektoren

### Tag Selektoren

Der wohl einfachste Selektor ist der Tag-Selektor. Mit diesem kannst du **alle** Elemente von
einem Typ auswählen. Dafür schreibst du einfach den Namen des Tags vor die geschweiften Klammern
(`{}`), so wie im Beispiel oben mit den Paragraphen:

``` css
p {
   font-size: 2rem; 
}
```

Dies ist natürlich auch mit anderen Elementen möglich...

``` css
div  {
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3); 
}

h1 {
    font-style: italic;
}

button {
  background-color: #EA4C89;
  border-radius: 8px;
  color: #FFFFFF;
  height: 40px;
  line-height: 20px;
  outline: none;
  text-align: center;
}

```

### Class Selektoren

Manchmal wollen wir Styles nicht auf alle gleichen Elemente anwenden sondern nur auf bestimmte, die
wir z.B. hervorheben wollen. Dafür können wir Class Selektoren brauchen. Wir weisen den HTML Elementen,
die wir selektieren wollen eine Klasse zu, z.B. rot (`class="rot"`). Um diese nun in unserem CSS auszuwählen, schreiben wir vor die geschweiften Klammern den Klassennamen mit einem Punkt vor dran:

``` css
.rot {
    color: red;
}
```

``` html
<h1>Hallo</h1>
<p>Lorem <span class="rot">ipsum</span> dolor sit amet...</p>

<h1 class="rot">Welt</h1>
<p>Lorem ipsum dolor sit amet...</p>

<h2 class="rot">Hallo Welt</h2>
<p class="rot">Lorem ipsum dolor sit amet...</p>
```

<style>
#classes .rot {
    color: red;
}
</style>
<div id="classes" style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; border-style: solid;">
    <h1>Hallo</h1>
    <p>Lorem <span class="rot">ipsum</span> dolor sit amet...</p>
    <h1 class="rot">Welt</h1>
    <p>Lorem ipsum dolor sit amet...</p>
    <h2 class="rot">Hallo Welt</h2>
    <p class="rot">Lorem ipsum dolor sit amet...</p>
</div>

## Weiterführende Links

 - [W3-Schools - CSS](https://www.w3schools.com/css/default.asp)
 - [mdn web docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)