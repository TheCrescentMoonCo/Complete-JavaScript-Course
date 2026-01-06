// Higher Order Array Loops (Foreach)
// For of, For in, Foreach

const namesOfPCGames = ['GTA', 'NFS', 'Suduko', 'Mahjong Titans'];

for (const element of namesOfPCGames) {     //Forof loop at arrays
    console.log(element);
}

const greetings = 'Hello world!';       // Forof loop at strings

for (const i of greetings) {
    console.log(i);
}

// Maps

const map = new Map();

map.set('IN', 'India');
map.set('US', 'United States of America');
map.set('SL', 'Sri Lanka');
map.set('FR', 'France');

console.log(map);

for (const [key, value] of map) {
    console.log(key,':', value);
}


// Iteration on Objects using Forin Loop

const langauges = {
  js:   'JavaScript',
  cpp: 'C++',
  py: 'Python',
  rb: 'Ruby'
};

for (const key in langauges) {
    console.log(`${key} for ${langauges[key]}`);
}

const luckyNumbers = [1, 3, 5, 7, 8, 9];

for(const key in luckyNumbers) {
    console.log(luckyNumbers[key]);
}

// Maps are not iterable


// Iteration using Foreach Loop (Higher Order Array Loop)

const programmingLanguages = ['Cpp', 'C', 'JS', 'Py', 'C#'];

programmingLanguages.forEach(element => {
    console.log(element);
});


programmingLanguages.forEach((element, index, arr) => {
    console.log(element, index, arr);
});

const namesOfCookiesBrand = ['Bourbon', 'Parle G', 'Oreo', 'Sunfeast'];

function printElementOfArray(item) {
    console.log(item);
}

namesOfCookiesBrand.forEach(printElementOfArray);       // Only Provide the reference here to make it work not the function


// Iterating through array of objects using Foreach()

const collectionOfObjects = [{
    langaugeName: 'C++',
    langaugeExtension: 'cpp'
}, {
    langaugeName: 'Java',
    langaugeExtension: 'java'
},
{
    langaugeName: 'Python',
    langaugeExtension: 'py'
}];

collectionOfObjects.forEach((item) => {
    console.log(item.langaugeName, ':', item.langaugeExtension);
});

