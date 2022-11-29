interface Bird {

    type: 'bird';
    flyingspeed:number;
}

interface Horse {

    type : 'horse';
    runningspeed:number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){

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