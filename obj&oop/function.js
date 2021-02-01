//factory function //camelcase: myFirstName

// console.log("~~~~Factory-function~~~~");

// function createPerson(name) {
//     return {
//         name, //name:name //key:value
//         greeting() {
//             let msg = `my name is ${this.name}`;
//             console.log(msg);
//         }
//     };
// }

// let pandi = createPerson("pandi");
// let eswaran =createPerson("Eswaran")
// pandi.greeting();
// eswaran.greeting();

//Constructior Function //pascal -> MyFirstName

console.log("constructor function");

function Person(name){
    this.name= name;
    this.greeting= function() {
        console.log(`my name is ${this.name}`);
    }
}
let pandi = new Person("pandi");
pandi.greeting();