// let name = "pandi";
// let age = 24;
// let interest = ['learn new things,books,music'];
// let address = {
//     city: "periyakulam",
//     state: "tamilnadu",
// }

// function greeting(){
// //let msg="my name is "+ name + " my interest is "+ interest;  //method 1

// let msg= `my name is ${name} my interest is ${interest}`       //method 2
// console.log(msg);
// }
// greeting();

// console.log output is --  my name is pandi my interest is learn new things,books,music

//Object programming

let person = {
    //key:value,

    name:"Pandi",
    age: 24,
    interest: ['read Books,listen Music,coding ,etc'],
    isAlive: true,
    address: {
        city: "Theni",
        state: "Tamil Nadu",
    },
    greeting: function () {
        let msg = `my name is ${this.name}, my Interest is ${this.interest}`;
        console.log(msg);

    }

};
(person.greeting());