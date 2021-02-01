console.log('Logical Operators');

//Logical Operators
// 3 types of Logical Operators
// 1. logical AND(&&)
// 2. Logical OR (||)
// 3. NOT(!)

// 1. logical AND(&&)
//returns TRUE if both Operands are TRUE
console.log(false && true); // Output is false

console.log(true && true);  //Output is true

//Logical OR (||)

// returns TRUE if anyone oeprands are TRUE
console.log(false || true); // output is true
console.log(true || true);
 
//NOT(!)
console.log(true); //Output is false

// sample program For Logical AND Operator
console.log("Bank Loan Eligiblity Program");
//HighIncome, CIBILScore  -> loan Eligible, Ineligible

// let HighIncome= true;

// let CIBILScore =true;

// let EligiblePerson= HighIncome && CIBILScore;

// console.log("Status:" + EligiblePerson);

// sample program For Logical || Operator and ! Operator
console.log("|| and ! operators");

let HighIncome =true;

let CIBILScore = true;

let EligiblePerson =HighIncome || CIBILScore

let applicationStatus = !EligiblePerson

console.log("loan status:" + EligiblePerson  );
console.log("Application Status:" + applicationStatus); 

//fasly(false)
//undefined
//null
//0
//false
// '' -> ""
// NaN    

//Truty -> Anything that is not falsy is -> Truty
//This is Truty Example

// let userColor = "red";
// let defaultColor ="blue";

//   let currentColor = userColor || defaultColor;
//   console.log("Selected Color:" + currentColor);
//  output is : Selected Color:blue

//This is falsy Example

let userColor = undefined;
let defaultColor ="blue";

  let currentColor = userColor || defaultColor;
  console.log("Selected Color:" + currentColor);

  //output is : Selected Color:blue