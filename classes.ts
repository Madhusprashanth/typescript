

class Department {
    name: string;
    private employees : string []=[];
    constructor(n:string){
        this.name = n;
    }
    describe(this : Department) {
        console.log('department name is ' + this.name);
    }

    addEmployee(employee:string)
    {
        this.employees.push(employee);
    }
    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}



const accounting = new Department('Accounting');
console.log(accounting);

accounting.describe();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe};

//accountingCopy.describe();

accounting.addEmployee('max');
accounting.addEmployee('manu');

accounting.name = 'NEW NAME';
accounting.printEmployeeInfo();

