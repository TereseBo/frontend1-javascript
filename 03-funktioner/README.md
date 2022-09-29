Funktioner kan deklareras med det reserverade ordet "function".
    function calculateSquare(x,y){  //x och y är parametrar men när fuk anropas 
        return x*y;
    }
    funktionen anropas genom att använda namnet och () med argument (värden på x och y)

Anoonyma funktilner kan deklareras med en variabel
let s = calculateSquare(4,4);

const square= function(x,y){
    return x*y;
}

En funktion kan också skickas som ett argument
function calculate(func){

}

calculate