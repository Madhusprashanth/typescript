let userInput : unknown;
let userName : string;

userInput=5;
userInput='max';

if( typeof userInput  === 'string')
{
 userName = userInput;
}


//never function

function generateError(message:string, code:number) : never {
    throw{message:message, errorCode:code};
    
}

generateError('an error generated!', 500);
