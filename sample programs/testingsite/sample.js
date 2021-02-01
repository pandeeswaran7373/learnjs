// function pandi() {
//     document.getElementById("demo").innerHTML = "hello Everyone";

// }

// var x = 5;
// var y = 5;

// sum = x + y;
// console.log(sum);

// function myfunc() {
//     var x = 5;
//     var y = 5;
//     var sum = x + y; // adds x and y 
// }

// alert(sum); //shows 10 

// /* Multi-line comments 
//    Multi-line Comments
//    Multi-Lie  Comments  
// */


// var nu = 5 
// document.write(nu);

// /*comments are not excecute the browsers
// assign number 5 to the variable named num
//  prints the output

//  sometimes it's more convenient and

//  easier to see

// */  


// var num = 5;
// var Num = 6;


// var sum = num + Num; // add value of num and Num

// var sum 

// document.write(sum); // print value of variable sum 

// function myfunc() {
//     var a = 5;
//     var b = 5;

//     var sum = a + b; //adds a and b
//     var sub = a - b; // subtract a and b

//     document.getElementById("demo").innerHTML= sub; 
//     //document.getElementById("demo").innerHTML= sum;

// var firstName = "Pandeeswaran", lastName = "S", age = 23;

// document.write(firstName + " " + lastName + "");
// document.write("age is" + " " + age + "");

// var x ;
// x=23;  

// document.write(x);//prints the value of x
// var type = 21 + "siva";
// var type1 = 23 + "pandi";
// sum = type + type1;
// document.write(type + "" + type1 + "");

// var b1 = true;
// var b2 = false;

// document.write("javascript is easy learning:" + " " + b1 + "");
// document.write("learn in one month:" + " " + b2);

//document.getElementById("demo").innerHTML="javascript is very easy:"+" "+ b1 +""+"you can learn javascript in one month:"+" "+ b2 ;

// var x = 10;
//     var y = 20;
// var equalorNot = ( x == y);
// document.write(equalorNot);

// var thing;
// document.write(thing);

// var banana ={ 
//     color:"yellow",
//     size:"long",
//     quantity:3,
//     isSweet:true,
// };
// document.getElementById("demo").innerHTML="Banana"+ "" + 
// "color:" + banana.color + "" +
// "size:"  + banana.size + "" +
// "quantity:"+ banana.quantity +""+
// "does is taste sweet:" + banana.isSweet;
// var animal =["cat","dog","horse","gow"];
// document.getElementById("demo").innnerHTML=
// animal[0]+" "+animal[1]+" "+animal[2]+" "+animal[3];

// var animal=["cat","dog"];
// document.getElementById("demo").innerHTML=
// animal[0]+" "+animal[1];

// var x ="pandi" //x is a String 
//     x = true;  //x is now boolean 
//         x = 21;    //x is now a number
// document.write(x);


// typeof "name" + ""+
// typeof 21 +""+
// typeof true + ""+
// typeof undefined;   

// document.getElementById("demo").innerHTML= 
// typeof {firstName: "Pandeeswaran", lastName:"S", age:23}+ ""+
// typeof ["apples","orange","banana"]+ ""+
// typeof null +""+
// typeof function myfunction(){};

// var x = 11;
// var y = 2;
// var z = x % y;
// document.write(z);

// var t = 20+10-5*2.5/1;
// var x ="20" ;
// var y = "10";
// var sum = x > y;
// // document.write(sum); 

// true && true; // return true span> 
// true && false; //return false 
// 2 == 2 && 3 == 3; //return true  
// 2 == 3 && 3 == 3; // return false  
// 4 > 3 && 2 < 3; // return true 
// 3 > 4 && 3 < 2; //return false

// document.write(true && true);
// document.write(true && false);

// if(3 == 3 && 2== 2){
//     document.write("the condition is true")
// }
// if (3 == 2 && 2 == 1) {
//     document.write("the condition is false.")
// }

// var testScore = 90;
// var testResult = (testScore > 75) ? "passed" : "failed";
// document.write(testResult)


// document.getElementById("demo").innerHTML= testResult;

console.log(1|2); // Bitwise OR
console.log(1&2); // Bitwise AND
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //sample program
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// W -> 00000100 -> 1  Write
// R -> 00000010 -> 2  Read
// E -> 00000001 -> 0  Execute


let readPermission = 4;
let writePermission = 2;
let executePermission = 1;

let myPermission = 0;

myPermission = myPermission | writePermission |readPermission;

let message =(myPermission & readPermission) ? 'Yes':'No';

console.log(message); // output is yes