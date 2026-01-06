// Control Flow in JavaScript
// Comparison Operators: >, <, >=, <=, ==, !=, ===, !== 
// Logical Operators: ||, &&
// If-else, Ternary condition, Switch Cases

const temperature = 18;

if(temperature < 25) {
    console.log('Winter Season!');
}
else {
    console.log('Summer Season!');
}
console.log('This statement will execute everytime');


const score = 200;

if(score > 100) {
    const power = 'fly';
    console.log(`User power: ${power}`);
}

const balance = 10000;

if(balance > 5000) console.log('Richie Rich!');     // Single line if condition

const age = 24;


if(age >= 18) {
    console.log('You can cast your vote');
}
else if(age < 18) {
    console.log('You cannot vote');
}
else {
    console.log('Please enter the correct input');
}

// Ternary Operator (if-else)

    const playerHealth = 100;

(playerHealth > 75) ? console.log('Good health condition') : console.log('Bad Health Condition');

