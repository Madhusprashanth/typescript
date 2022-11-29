interface Greatable {
    name:string;
    great(phase: string): void;
}
class Person implements Greatable {
    name: string;
    age =30;

    constructor(n:string){
        this.name = n;
    }
    great(phase: string){
        console.log(phase  + '' + this.name);
    }
}
let user:Greatable;

user = new Person('max');

user.great('Hi i am');
console.log(user);