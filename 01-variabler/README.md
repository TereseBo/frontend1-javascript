md=textfil som man kan formatera lite extra `` kan användas för att skapa kodblock. md=markdown?
legacy kod som används men som inte vidareutvecklas

Alla datatyper används som vären på variabler. JS är ett otypat språk=typ specifiseras inte vid deklaration.
(TypeScript är en vudareutveckling av JS (typ?) som används vid backend)

# Variabler
```
Deklarationen gör att variablen finns. 
    let //används för deklarera variabler som kan byta värde
    const // används för att deklarera variabler som inte ska byta värde
        (var // Ger globala variabler, gammal standard, används ej längre (legacy))
```
Variabler har typen "any" tills det att variabeln används och typ blir relevant. Any blir sträng om den inte har goda skäl att bli något annat. 

## Strängar
Strängar deklareras med: "", `` eller ''.
    Backticks används för literala deklarationer som kan innehålla variabler genom interpolation (`bla, bla, bla ${variablenamn} bla bla bla `)

### Funktioner
stringName.toLowerCase() //Gör sträng till gemener 
    let name= namn //Deklaration av variablen name med värdet namn
    name= name.toLowerCase() //Variablen names värde byts till retrn av funktionen toLowerCase för name
trim() // tar bort blanksteg före och efter sträng (ej i mitten)


## Heltal och decimaltal
Int och Float
Use parseInt(arg)/ parseFloat(arg) //arg= varibeln som är en string?
    Returns NaN om arg inte är ett nummer isNaN() kan användas för kontrollera resultat, returnerar true/false
NaN: Not a Number

### operatorer

=== jämför både datatyp occh värde
== jämför bara värde, truey/falsey resultat

## Boolean
True of false

## Array
Samling av data. Index nummreras från 0
    ["1", "2","3"] //God sed att hålla sig till samma datatyp
    let arr= [1,2] 
    arr[1] // Innehåll i arr på position 1 (siffran 2)
Man kan också göra en array av arrayer
    [[1,2],[3,4]]

##Objekt



