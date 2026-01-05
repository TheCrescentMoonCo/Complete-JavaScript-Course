// Global and Local Scopes in JavaScript

// Global Scope
const a = 12;
let b = 10;
var c = 100;

if(true) {      // Local Scope
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(a);
console.log(b);
console.log(c);

function one() {
    const username = 'Donald Trumph';

    function two(){
        const website = 'google.com'
        console.log(username);
    }
    // console.log(website);
    
    two();
}

one();

// Function expression(when function is stored in a variable) has no Hoisting power.