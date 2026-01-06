// Iterations in JavaScript

// for loop, while loop, do-while loop

// For Loop

for(let j = 0; j <= 10; j++) {
    console.log(j);
}

// Nested for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop value: ${j} and outer loop ${i}`);
    }
}

const nameOfHeroes = ['Batman', 'Flash', 'Superman'];

for(let i = 0; i < nameOfHeroes.length; i++) {
    console.log(nameOfHeroes[i]);
}


// Use of break and continue in Loop

// Break throws out of loop scope
// Continue skips the current iteration and moves onto the next iteration


// While Loop

let index = 0;
while(index <= 100) {
    console.log(index);
    index = index + 2;
}


// Do-While Loop

let score = 1;

do {
    console.log(score);
    score++;
} while(score <= 10);