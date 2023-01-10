//Extreting string parts
//there are 3 methods for extracting a part of string:


// slice(start, end)
// substring(start, end)
// substr(start, end)

//>>>slice() Method
//silce() extracts a part of a string and returns the extracted part 
//in a new string 

// the method takes 2 parameter: the start position 
//and the end position 

// var str = "apple, banana ,kiwi";
// // let res = str.slice(0,4);
// let res = str.slice(7, -2); //start from 7 and end of kiwi wi will be -2 and output will be ki
// console.log(res);

//the slice() method selects the elements starting at the given start argument and ends at but does not include and the given end arguments 
//Note: the original array is not changed


//the substring() Method 
// substring() is similar to slice()

// the difference is that substring() cannot accept 
//negative indexes.

// var str = "apple, banana ,kiwi";
// //let res = str.substring(0,4);
// let res = str.substring(7, -2); //negative is negligabel for this string method 
// console.log(res);
//if we give negative posi it will start from index 0





//>> the substr() Method
// substr() is similar to slice()

//the difference is that the second parameter specifies the length of the extracted part.


// var str = "apple ,banana , kiwi";
// // let res = str.substr(0,4);
// // let res = str.substr(7,-2); //negative value doesnot return any output
// let res = str.substr(-4); //this will give output from tail end and output will be kiwi
// console.log(res);


//repacing String Content()
//String.prototype.replace(searchfor, replacewith)
//the replace() method replaces a specifed value
//with another value in string 

// let bio = `i am dhaval`;

// let replacedata = bio.replace('dhaval','killua');
// console.log(replacedata);

//replace method is case sensitive
//replace() method does not change the string
// it is called on it returns new string
// the first match

//>>Extrecting String Characters

//there are 3 methods for extracting string characters:
//charAt(position)
//charCodeAt(position)//the return unicode
//Property access []

//let str = "HELLO WORLD";
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str[1]);


//other useful methods
// let myname = "Dhaval Sinh";
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());

//the concat() method
//the concat() joins two or more strings

/* let fn = "dhaval";
let ln = "sinh";
let fnm = "    killua   "
console.log(fn.concat(ln));
console.log(fn.concat("",ln));
console.log(fnm.trim()); */ //trim mrthod remove white space from both sides 

//converting a string to an array
// a string can be converted to an array with the split() method

const txt = "a,b,c,d,e"; //string
console.log(txt.split(",")); //split on commas
console.log(txt.split(" ")); //split on spaces
console.log(txt.split("|")); //split on pipe

