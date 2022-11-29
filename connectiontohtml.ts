interface Bird {

    type: 'bird';
    flyingspeed:number;
}

interface Horse {

    type : 'horse';
    runningspeed:number;
}

type Animal1 = Bird | Horse;

function moveAnimal(animal: Animal1){

    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingspeed;
            break;
        case 'horse':
            speed=animal.runningspeed;
            
    }
   
        console.log('speed is ' + speed); 
}
moveAnimal({type: 'bird', flyingspeed:100});

//const userInputElemet = <HTMLInputElement>document.getElementById('user-input');
const userInputElemet1 = document.getElementById('user-input')! as HTMLInputElement;
userInputElemet1.value='Hi there';

if(userInputElemet1){
    (userInputElemet1 as HTMLInputElement).value ='madhu';
}

// error should be of same type
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag : ErrorContainer = {
    email: 'not a valid email',
    usename : 'must start with capital'
};


