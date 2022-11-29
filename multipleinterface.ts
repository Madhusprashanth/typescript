interface Named {
    readonly  name:string;
    outputname?: string; //shows as optional property
}
interface Greatable  extends Named{
   
    great(phase: string): void;
}
class Person1 implements Greatable {
    name: string;
    age =30;

    constructor(n:string){
        this.name = n;
    }
    great(phase: string){
        console.log(phase  + '' + this.name);
    }
}
let user2:Greatable;

user2 = new Person1('madhu');

user2.great('Hi i am');
console.log(user2);