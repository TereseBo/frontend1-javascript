//Det här programmet konverterar en volym till mL eller liter

const prompt=require ('prompt-sync')();
//Alternativ att ta in mangd och enhet separat via prompt.
//let mangd=Number(prompt("Hur mycket vill du konvertera?"));
//let enhet=prompt("Vilken enhet är måttet i? (tsk,msk,mL,dl,l)").trim().toLowerCase();
let svar=prompt("Hur mycket vill du konvertera och i vilken enhet? (tsk/msk/dL/L?)").trim().toLowerCase();

const myArray = svar.split(" ");
let mangd=myArray[0];
//console.log(`Tyoe of mangd: ${typeof(mangd)} och värde ${mangd}`)
mangd = Number(mangd);
//console.log(`Tyoe of mangd: ${typeof(mangd)} och värde ${mangd}`)
let enhet=myArray[1];
//console.log(`Tyoe of enhet: ${typeof(enhet)} och värde ${enhet}`)
//console.log(myArray); kontroll av myArray 

mangd= mLIsTheBestUnit(enhet)*mangd;
console.log(`Det blir ${mangd} mL `);
let svar2=prompt(`Vill du ha det i liter istället (y/n)?`).trim().toLowerCase();

if(svar2=="y")
{
    console.log(`Det blir ${lIsAlsoGoodSometimes(mangd)} liter!`);
}
function mLIsTheBestUnit(enhet){

switch (enhet){
    case "tsk":
        return 5;
        break;
    case "msk":
        return 15;
        break;
    case "dl":
        return 100;
        break;
    case "l":
        return 1000;
        break;
    
     
}

//console.log("Det blir "+mangd +" "+enhet);


}
function lIsAlsoGoodSometimes(mangd){
    return mangd/1000
     
}

//console.log("Det blir "+mangd +" "+enhet);


