

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

function add ( a:cominable, b:cominable){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

type unknownEmployee = Employee | admin;

function printEmployeeinfo( emp : unknownEmployee ){
    console.log('name' + emp.name);
    if ('privileges' in emp ){          //(unknownEmployee instanceOf admin)
        console.log('privileges' + emp.privileges);
    }
    if ('startDate' in emp ){
        console.log('privileges' + emp.startDate);
    }
}

printEmployeeinfo(e1);