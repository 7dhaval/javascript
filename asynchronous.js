//>> Hoissting in Javascript

//we have a creation phase and execution phase 
//hositing in javascript is a mechanism where varibales and function 
//declaration are moved to the top of thier scope before the code execute.

//for example:
// console.log(myname);
// var myname;
// myname = "dhaval";

//how it will be in output during creation phase 
// var myname = undefined;
// console.log(myname);
// myname = "dhaval";

//hositing is avoided by using the let keyword 
//insted of var(the other difference is that varible declared)
//with let are local to the surronding block, not the entire function


//>>> what is scope chain and Lexical scoping in javascript?
//the scope chain is used to resolve the value of variables names in js

//scope chain in js is lexically defined which means that we can see what the scope chain will be by looknng at the code

//at the top we have global scope which is the window object in the parameter

//lexical scoping meands now the inner function can get access to thier parent functions varibales but the vice-versa is not true.


// for example

// let a = "hello"; //global scope

// const first = () => {
//     let b = "how are you?";

//     const second = () => {
//         let c = "Hii i am fine";
//         console.log(a+b+c);  //i can call every variable here
//     }
//     second();
//     // console.log(a+b+c); //i cant use c
// }
// first();



//>>> what is clousers in javascript

// clousere is combination of a function bundled together (enclosed) with refrence to its surrounding state (the lexical envrionment).

//In other words a clousere gives you
//access to an outer functions scope from and inner function

//in js clousers are created every time a function is created at function createion time


//for exe:

// const outerfun = (a) => {
//     let b = 7;

//     const innerfun = () => {
//         let sum = a+b;
//         console.log(sum);
//     }
//     innerfun();
// }
// outerfun(7);


//It same like lexical scoping

//one more exe

// const outerfun = (a) => {
//     let b = 7;

//     const innerfun = () => {
//         let sum = a+b;
//         console.log(sum);
//     }
//      return innerfun;
// }

// // outerfun(7);

// let clouser = outerfun(7); //this is clouser function this will help to return inner function
// clouser();




//>>>>> Synchronous Javascript Prog

//sycn fucntion let firts come first strike no proces will jump 

// const fun2 = () => {
//     console.log(`funciton 2 is called `);
// }

// const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2();
//     console.log(`function 1 is called again`);
// }

// fun1();


//Asyncronouse function in javascript

//this will help every function to execute without waiting other function to finish job
// sync with other functions

const fun2 = () => {
    setTimeout(() => {
        console.log(`funciton 2 is called `);
    }, 7000);
}

const fun1 = () => {
    console.log(`function 1 is called`);
    fun2();
    console.log(`function 1 is called again`);
}

fun1();
