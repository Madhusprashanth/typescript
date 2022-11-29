function add (n1: number, n2: number, showresult:boolean, phase:string){
    //console.log(typeof number1)
    //return n1+n2;

    const result = n1 + n2;

    if (showresult){
       console.log(n1 + n2 + phase) 
    }
    else {
        return result;
    }
}

const number1 = 5;
const number2 = 18;
const printResult = true;
const resultPhase ='result is';

// for number demo
//const result = add (number1, number2, printResult)
//console.log(result);
add (number1, number2, printResult, resultPhase )

const person={
    name:'madhu',
    age : 25,
    hobbies:['sports','cooking'],
}

//not good practice
const person1 :
{
    name:string;
    age:number;
    role:[number, string] //tuple array
}= {
    name:'shivakumara',
    age:27,
    role: [12, 'madhu'] //tuple assigment
};

console.log(person)

let favactivity:string[];
favactivity = ['sports'];

for(const hobby of person.hobbies){
    console.log(hobby)
}