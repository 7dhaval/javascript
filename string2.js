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