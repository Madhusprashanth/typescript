interface Person {
    name:string;
    age:number;

    great(phase: string): void;
}

let user1:Person;

user1 = {
    name: 'max',
    age:30,
    great(phase: string){
        console.log(phase  + '' + this.name);
    }

};

user1.great('Hi i am');