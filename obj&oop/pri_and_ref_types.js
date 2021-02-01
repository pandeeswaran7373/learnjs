//primitive type

// let x=10;
// let y=x;

// console.log(y);

//reference type

let x ={
    value:10
};    

let y=x;

x.value =20;

// console.log output is 
// x

// [object Object]: {value: 20}

// y

// [object Object]: {value: 20}


//sample program

// let cart={
//     available:5
// };

// function UpdateCart(cart) {

//     cart.available++;
// }

// UpdateCart(cart);

// console.log("carts Available:",cart);


//console.log output is 


// carts Available: [object Object]


// pri_and_ref_types.js (41,1)

// [object Object]: {available: 6}


let cartObj={
    value:5
};

function UpdateCart(cart) {

    cart.value++;
}

UpdateCart(cartObj);

console.log("carts Available:",cartObj);


