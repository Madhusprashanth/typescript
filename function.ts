function add1( n1:number, n2:number){
    return n1+n2;
}

//function type declaration
function printResult1(num:number):void {
    console.log("result is " +num);
    return;
}

printResult1(add1(12,5))

let combinevalues: (a: number, b: number) => number;

combinevalues=add1;

console.log(combinevalues(8,8));

//callback function
function addHandle( n1:number, n2:number, cb: (num:number)=> void){
    const result = n1+n2;
    cb(result);
}

addHandle(10,20, (result) => {
    console.log(result);

});
 