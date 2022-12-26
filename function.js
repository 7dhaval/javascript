//function Defination

//also called a function declaration and function statement
//consist of the function keyword

//function functionname()
// {
    //statement
// }

//function parameter vs function arguments
//function parameters are the names listed in the function's Defination.
//function arguments are the real values passed to the function


// function sum(a,b){ //parameter
//     // var a = 10;
//     // var b = 20;
//     var total = a+b;
//     console.log(total);
// } 
// sum();
// sum(20,30);
// sum(50,50); //inside calling function is called arguments


//calling function 
//Defining function does not execute it 
// a javascript function is executed when "something" invokes it (calls it).

//function expression 
//means create a function and put it in a variable

// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }

// var funexp = sum(4,3);
// funexp;



//return keyword

//when javascript reaches a return statement,
//the function will stop executing
//the returned values "returned" back to the "caller"
// function sum(a,b){
//     return total = a+b;
// }

// var funexp = sum(4,3);
// console.log(funexp);


//annonymous function
//a function expression is similar to the has same syntax
//as a function declaration one can define "named"
//be used in the call stack for example 
//or annonymous function expression 


// var funexp = function sum(a,b){
//    return total = a+b;
// }
// console.log(funexp(5,5));


//2nd method for annonymous
var funexp = function sum(a,b){
    return total = a+b;
 }

 var exp = funexp(5,5);
 console.log(exp);
