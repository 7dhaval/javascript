//varr vs let vs const
//const is never change
//var => Function Scope
//let and const => Block scope

//var exp
function bio(){
    var firstname = "dhaval";
    console.log(firstname);

    if(true){
        var lastname = "sinh";
        console.log('inner ' + lastname);
        console.log('inner ' + firstname);
    }

    console.log('innerOuter ' + lastname); //in var variables are assissable inside and outside

}
bio();

function biodata(){
    let firstname = "dhaval";
    console.log(firstname);

    if(true){
        let lastname = "sinh";
        console.log('inner ' + lastname);
        console.log('inner ' + firstname);
    }
    //this console line for understaing not an error
    console.log('innerOuter ' + lastname); //in let & const variables are only accessibale inside block scpoe 

}
biodata();

//template literals 

//javascript program to print table 

for(let num = 1; num<= 10; num ++){
    let tableOf = 12;
    console.log(` ${tableOf} * ${num} = ${tableOf * num}`);
}

//default parameter

function mult(a,b=6){
    return a*b;
}

console.log(mult(3));



//fat arrow function = you have definde function first and then call it 

const sum = () =>{
    let a = 5; b = 5;
    let sum = a+b;
    return `the sum ${sum}`;
}

console.log(sum());

//demo2 for fat arrow function
const sum2 = () => `the sum ${(a=4)+(b=9)}`;
console.log(sum2());
