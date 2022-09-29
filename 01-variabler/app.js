// Installera dependencies
const prompt = require('prompt-sync')()
//console.debug(process)
// Deklarera variabler
const name = prompt("Who am I? ")
let age = Number(parseInt(prompt("How old am I? ")))
console.log("Hello world, I'm "+name+" ")

let bday = prompt("Is it my birthday (y/n)?").trim().toLowerCase()
console.log(bday)
if (bday==="y"||bday==="yes"){
    console.log(`Hurray, now I'm ${age+=1} !`)
}
if (bday==="n"||bday==="no"){
console.log(`I'm ${age} years old`)
}
else{
    console.log("ok")
}
/*
if (prompt("Is it my birthday (y/n)?").toString().trim().toLowerCase()=="y")
{
    console.log("Hurray, now I/'m")
}

console.log("IsNan? " +isNaN(age)+ " " + typeof(age))
let kollvar=false
console.log("kollvar typ "+ typeof(kollvar))

while (kollvar===Bool(isNaN(age));{
    let age = parseInt(prompt("Det var en konstig ålder, prova igen"))
    console.log("Din ålder är "+ age)
} 


if(age<=20)
{
    console.log("Vad liten du är!")
}
else if (20<age<50)
{
    console.log("Du är nästan medelålders")
}
else
{
    console.log("Du är gammal, döden nästa")
}


console.log("Hello world, my name is " + name + ".")
console.log(`I'm ${age} years old.`)


if(prompt("Is it my birthday (y/n)?") == "y") {
    console.log(`Hurray, now I'm ${age += 1}!`)
} 
else {
    console.log("ok")
}*/
/*

 console.log(
     `
        ^       ^      
      ( * )   ( * )   
           (||)     
     (~____________~)
        \\______/
     `)

*/
// console.log(process.argv)

