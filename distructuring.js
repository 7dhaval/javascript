//Destructuring in ES6 
//the destructuring assignment syntax is a js expression
//that makes it possible to unpack values from arrays
//or properties from objects into distinct values

//>> array destructuring

// const mybio = ["dhaval", "sinh", 21];


//what we used to do in array 
// let myfname = mybio[0];
// let mylname = mybio[1];
// let myage = mybio[2];
// console.log(myage);

//how we can restructure array
// let [myfname,mylname,myage] = mybio;
// let [myfname,mylname,myage=31] = mybio;
// console.log(myage);

//object destructuring

//this is how we do object desc....
// const mybio = {
//     myf : "dhaval",
//     myl : "sinh",
//     age : 26
// }

// let age = mybio.age;
// console.log(age);


//restructuring in ES6
// const mybio = {
//     myf : "dhaval",
//     myl : "sinh",
//     age : 26
// }

// let age = mybio.age;
// let myf = mybio.myf;
// console.log(age);

// let {myf,myl,age,degree="BE"} = mybio;
// console.log(degree);


//>object properties 
//we can now use dynamic properties 

// let myn = "dhaval";
// const mybio = {
//     [myn] : "hello how are you ?",  //[myn] == adding data using dynamic value
//     [26 + 5] : "this is my age"
// }

// console.log(mybio);

//>>no need to write key and value if both are same

// let myn = "dhaval";
// let myage = 21;

//this is how we can write 
// const mybio = {
//     myn : myn,
//     myage : myage
// }

//es6 one data calling
// const mybio = {myn,myage};
// console.log(mybio);

//spread operator 

// const colors =  ['red','green','orange'];
// const mycolors =  ['red','green','orange','white','gray'];


//2nd time while writing the array and adding more we do need to add more and just call it from another array 

// const dhaval = ['amras',...mycolors]; //you can write array calling at front and back also 
// console.log(dhaval);

