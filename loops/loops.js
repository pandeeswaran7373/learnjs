//for (initialExpression; Condition; Step){
// console.log("numebr #1");
//}

//Sample Program 1

for (let i = 1; i <= 5; i++) {
    console.log("Number #", i);
}

//console.log output is 
// Number # 1

// Number # 2

// Number # 3

// Number # 4

// Number # 5

//sample program 2("find Odd Number")

for (let j = 0; j <= 10; j++) {
    if (j % 2 !== 0) {
        console.log("Odd NUmber:#" + j);
    }
}

//console.log output is 
// Odd NUmber #0    

// Odd NUmber #1

// Odd NUmber #3

// Odd NUmber #

// Odd NUmber #7

// Odd NUmber #9

//sample program 2("find Even Number")

for (let k = 0; k <= 10; k++) {
    if (k % 2 !== 1) {
        console.log("Odd NUmber:#" + k);
    }
}
//console.log output is 
// Odd NUmber:#0

// Odd NUmber:#2

// Odd NUmber:#4

// Odd NUmber:#6

// Odd NUmber:#8

// Odd NUmber:#10

console.log("```````while Loop```````");

//syntex of while loop
//initial Experession ;
//while (condition){

//console.log();
//}
//step;
//}

//sample program

let m=0;

while  (m <=20){
    if (m%2 !==0){
    console.log("The number is :" + m);

}
   m++;
}

//sample Program (Even Number)
console.log("Even number");

let n=0;

while (n<=20) {

    if(n%2 !==1){
        console.log("Even Nnumbers #"+ n);
    }
    
    n++;
    
}

console.log("Do-While Loop");

//sample program

let o=0;

do {
    if (o % 2 !==0) {
        console.log("Odd Number for While loop#"+ o);
    }
    o++;

} while (o <= 10);

//for in loop

console.log("for in Loop");

const person={
    name:'pandi',
    age:22,
    sex:'male'
}

for(let key in person){
console.log( key +":" + person[key]); 
}

//another example

let colors =['red','blue','green'];

for(let eswaran in colors){
    console.log("colors "+eswaran);
}

console.log("for-of-loop");

for(let pandi of colors){
    console.log("colors: " +pandi);
}