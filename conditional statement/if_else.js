// //sample program
// //single line program
// let weather = "hot";

// if(weather === "hot"){
//     console.log("The Weather is Hot!");
// }
// else{
//     console.log("The Weather is cold!");
// }

// //console.log output is --- weather is hot

// //multi-line Program

// let isRaining = false;

// let isCloudy = true;

// if (isRaining || isCloudy) {
//     console.log("Don't forget to take Umberella");
// } else {
//     console.log("Sky is normal! Enjoy the weather");
// }

// //console.log output is --- Don't forget to take Umberlla!

//wish message by timing

// If hour is between 12AM(0) to 1PM(13) -> Good Morning
// Else if hour is between 1PM(13) to 5PM(17) -> Good Afternoon
//Else if hour is between 5PM(17) to 12AM(0) -> Good Evening

// let hour = 10;

// if (hour >= 0 && hour <= 13) {
//     console.log("Good Morning");
// }
//  else if (hour >= 13 && hour <= 17) {
//     console.log("Good Afternoon");
// }
// else {
//     console.log("Good Evening");
// }

//cosole.log output is "Good Morning" 
//wish message based on timing (automatic)

let hour =new Date().getHours();

if (hour >= 0 && hour <= 13) {
    console.log("Good Morning");
}
 else if (hour >= 13 && hour <= 17) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}


//sample program 3-Mobile buying suggestion
//If given saving amount is > 10k Buy Android Mobile
//else if given amount is > 60k Buy iphone Mobile
// Else If given amount is  > 5 && <10 Buy Basic Mobile 
// Else Print "You can't afford mobile phone now!"
console.log("if-else progam");

let price=60000;

if (price >=60000) {
    console.log("Buy iphone mobile");
}
else if (price >= 10000) {
    console.log("Buy Android Mobile");

}
else if (price >=5000 && price <10000){ 
    console.log("Buy Basic Mobile");
}
else{
    console.log("You Can't afford mobile phone now!");
}


