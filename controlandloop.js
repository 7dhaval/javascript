//control statement:
//--------------------------------------------
//1) if else 
    //if statement executes if a specified condition is true..
    // if the condition is falsy another statement can be execute

var tomr = 'rain'; //if you change it to sunny else statement will execute

if( tomr = 'rain'){
    console.log('take raincoat');
}else{
    console.log('without raincoat');
}



//conditional operator
var age = 17;
console.log((age >= 18 ) ? "can vote" : "can't vote");


//switch statement
//break statement
var area = "circle";
var PI = 3.14, l=5 ,b=4, r=3;

switch(area){
    case 'circle':
        console.log("the area of the circle is : " + PI*r**2);
        break;
    case 'squre':
        console.log("the area of squre is :" + (l*b)/2);
        break;
    default:
        console.log("Please Enter valid data");
}



//while loop statement
//the while statement creates loop that executes a specified statement
//as long as the test condition evaluates to true
var num=0;
//block scope =  if the value is true then num++ will execute (inside {} called block scope)
while(num <=10){
    console.log(num);
    num++;
}


//do-while loop //give output first and then check condition 
var num=20;
do {
    console.log(num);
    num++;
}while(num <= 10);



//for loop //for(init; condition; iteration)
for(var num = 0; num <= 10; num++){
    console.log(num);
}

for(var num = 1; num<=10; num++){
    var tableof = 8;
    console.log(tableof + " * " + num + " = " + tableof );
}



