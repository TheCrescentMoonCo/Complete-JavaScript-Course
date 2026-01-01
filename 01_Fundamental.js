// Variable and Constant in JavaScript

const accountID = 789170;
let accountEmail = 'TheCrescentMoonCo@rediffmail.com';
var accountPassword = '12345';
accountLocation = 'Lucknow, IN';
let accountType;

accountPassword = "123XYZ";

console.table([accountID, accountEmail, accountPassword, accountLocation, accountType]);


/*

Datatypes in JavaScript
(Primitive Datatypes)
number = 12345;
BigInt = 12345678901234567890n;
string = 'Hello World';
boolean = true/false;
null => let age = null;
undefined => let name;
symbol => unique identifiers;

(Non-Primitive Datatypes)
Object
Array
Function
*/

const person = {
    name: 'Monalisa',
    age: 523,
    isAlive: true
};

const namesOfMarvelHeroes = ['Superman', 'Batman', 'Ironman', 'Spiderman'];

let MyFunction = function ShowMessage() {
    console.log('Horrid Henry!');
}

console.log(MyFunction());

console.log(typeof 'Hello');
console.log(typeof null);


// Conversion and Operations

// Conversion

let score = null;
console.log(typeof(score));

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

let isLoggedIn = '';

booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


//  Opearations

console.log('******** Operations ********');

let value = 3;
let negValue = -value;

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

let str1 = 'Donald';
let str2 = ' Trumph'

console.log(str1 + str2);

console.log(1 + '2' + 1);
console.log(null + "2");

// Increment and Decrement (Prefix and Postfix)
let proHealth = 1;
++proHealth;
console.log(proHealth);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// Comparison Operators

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log('2' === 2); // Strict Check Operator ===
console.log(2 != 1);