// Switch Statement in JavaScript

const day = 5;

switch(day) {
    case 0:
        console.log('Monday');
        break;
    case 1:
        console.log('Tuesday');
        break;
    case 2:
        console.log('Wednesday');  
        break;
    case 3:
        console.log('Thursday');
        break;
    case 4: 
        console.log('Friday');
        break;
    case 5:  
        console.log('Saturday');
        break;
    case 6:
        console.log('Sunday');    
        break;
    default:
        console.log('Enter any number from 0 - 6'); 
        break;                   
}

// Truthy and Falsy

// Truthy values: []empty array, '0', 'false', ' ', {}empty object, function(){}empty function 

// Falsy values: false, 0, -0, BigInt 0n, '', null, undefined, NaN

const nameOfHeroes = [];

if(nameOfHeroes) {
    console.log('Available');
}
else {
    console.log('Not available');
}


// To check whether an array is empty

const listOfItems = [];

if(listOfItems.length === 0) {
    console.log('Empty array!');
}

// To check an empty object 

const user = {};

if(Object.keys(user).length === 0) {
    console.log('Empty object!');
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 15 ?? 55;

console.log(val1); 

