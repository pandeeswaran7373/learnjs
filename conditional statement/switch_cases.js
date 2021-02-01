//Syntax 

// switch (condition) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     default:
//         console.log("Default Behaviour")
// }

//example program

let grade = "A";

switch (grade) {
    case "S":
        console.log("S Grade");
        break;
    case "A":
        console.log("A Grade");
        break;
    case "B":
        console.log("B Grade");
        break;
    case "C":
        console.log("C Grade");
        break;
    case "E":
        console.log("E Grade");
        break;
    default:
        console.log("U failed in Exam");
        
}

//console.log output is "A grade"

//marks based result system

let marks= 95;

switch (true) {

    case marks >90:
        console.log("Pass-Excellent");
        break;
    case (marks <= 90,marks >=70) :
        console.log("Pass-Good");
        break;
    case (70>marks,marks >=50):
        console.log("Pass-well");
        break;
    case ( 50< marks,marks >=35 ) :
        console.log("Pass-Need Improvement");
        break;
    default:
        console.log("fail-try to hard");
        
}

//console.log output is "Pass-Excellent "

//sample program 3-Mobile buying suggestion
//If given saving amount is > 10k Buy Android Mobile
//else if given amount is > 60k Buy iphone Mobile
// Else If given amount is  > 5 && <10 Buy Basic Mobile 
//Else Print "You can't afford mobile phone now!"

// let price = 7000;

// switch (true) {
//     case (  price >= 60000):    
//         console.log("Buy iphone Mobile");
//         break;
//     case (price >=10000):
//         console.log("Buy Android Mobile");
//         break;
//     case (  10000 > price,price >=5000):
//         console.log("Buy Basic Mobile"); 
//         break; 
//     default:
//         console.log("You can't afford mobile phone now!");
        
// } 

// //console.log output is "Buy iphone Mobile"