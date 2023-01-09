//string in js 
// a javascript string is zero or more characters written inside qutes.
//string are used for storing and manuplating text.

//string can be created as primitives
//from string literals or as object using the string() constructor

// let myname = "dhaval sinh";
// let myChannelName = 'dhaval sinh';

// // let ytname = new String("dhaval sinh");

// console.log(myname);
// console.log(ytname);



//find length of string 


// let myname =  "dhaval sinh";
// console.log(myname.length);


//Escape Character
//use "" inside "" 

// let anysentence = "we are so called \"jods\" ";
// console.log(anysentence);



//finding a string in a string 

//string.prototype.indexOf(searchValue [,fromIndex])
//The indexOf() method returns the index of (the position of) the first
//occurrence of a specified text in a string 

// const myBioData = 'i am dhaval disco';
// console.log(myBioData.indexOf("dhaval"));

// // const myBioData = 'i am dhaval';
// console.log(myBioData.indexOf("d", 112)); //-1 bcz he could not find anything 


//String.prototype.lastIndexOf(searchValue [, fromIndex])
// Returns the index within the calling string object of the
// last occurrence of search value or -1 if not found

// const myBioData = 'i am dhaval disco';
// console.log(myBioData.lastIndexOf("dhaval"));


//Searching for the string in string 

//the search() method searches a string for a specifid 
//value and returns the positon of the match

const myBioData = "my name is dhaval";

let sData = myBioData.search("dhaval");
console.log(sData);

