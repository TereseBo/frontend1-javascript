const prompt = require("prompt-sync")()
let x;
//console.log(x);
x=Number(prompt("Skriv en riffra mellan 1 och 3"))

switch(x)
{
    case 1:console.log('Du skrev siffran 1')
    break;
    case 2: console.log('Du skrev siffran 2')
    break;
    case 3:console.log('Du skrev siffran 3')
    break;
}



if( 1===parseInt(x) ){
    console.log('It\'s true you chose ONE!')}
else
    console.log('It\'s untrue you chose ONE!')
    
