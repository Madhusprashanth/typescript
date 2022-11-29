

type admin = {
    name: string;
    privileges : string[];
};

type Employee = {
    name: string;
    startDate : Date;
};

type elevatedEmployee = admin & Employee;

const e1: elevatedEmployee = {
    name : 'max',
    privileges : ['create-server'],
    startDate: new Date()

};

type cominable = string|number;
type numeric = number | boolean;

type universal = cominable & numeric; //intersection


//method overloading
function add (a:number, b:number): number;
function add (a:string, b:string): string;
function add ( a:cominable, b:cominable){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

const res = add (8, 5);
res.split('');

