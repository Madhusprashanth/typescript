function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingspeed;
            break;
        case 'horse':
            speed = animal.runningspeed;
    }
    console.log('speed is ' + speed);
}
moveAnimal({ type: 'bird', flyingspeed: 100 });
//const userInputElemet = <HTMLInputElement>document.getElementById('user-input');
var userInputElemet = document.getElementById('user-input');
userInputElemet.value = 'Hi there';
