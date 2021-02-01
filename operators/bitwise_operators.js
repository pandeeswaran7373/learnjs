
  
//Bitwise Operators based binary codes
//Human code -> machine Code(0,1)
// 1 -> 00000001 -> 1
// 2 -> 00000010 -> 2
// 3 -> 00000011 -> 3

// console.log(1|2); // Bitwise OR
// console.log(1 &2); // Bitwise AND

//sample program

// W -> 00000100 -> 1  Write
// R -> 00000010 -> 2  Read
// E -> 00000001 -> 0  Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | writePermission |readPermission  ;

let message =(myPermission & readPermission) ? 'Yes':'No';

console.log(message); // output is yes



