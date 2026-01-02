// Array Declarations

const namesOfHeroes = ['Ironman', 'Superman', 'Hulk', 'Batman', 'Spiderman'];
const collectionOfItems = [1, 3, 7, 0, 6, 8, 9];

const namesOfCountries = new Array('India', 'Australia', 'China', 'Russia', 'Sri Lanka');


namesOfHeroes[1] = 'MIB';

console.log(namesOfHeroes[1]);
console.log(collectionOfItems[1]);
console.log(namesOfCountries[0]);

// Array Methods

namesOfHeroes.push('Wolverine');
console.log(namesOfHeroes);

namesOfHeroes.pop();
console.log(namesOfHeroes);

collectionOfItems.unshift(-0);
console.log(collectionOfItems);

collectionOfItems.shift();
console.log(collectionOfItems);

console.log(namesOfCountries.includes('Bhutan'));
console.log(namesOfCountries.indexOf('Russia'));

const newArray = collectionOfItems.join();    // join() method converts array items to string

console.log(newArray);
console.log(typeof newArray);

// Slice and Splice Methods of Array

const nameOfPlanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const slicedArrayList = collectionOfItems.slice(0, 5);
console.log('Original Array1: ', collectionOfItems);
console.log('After Sliced: ', slicedArrayList);

const splicedArrayList = nameOfPlanets.splice(0, 3);
console.log('Original Array2', nameOfPlanets);
console.log('After Spliced', splicedArrayList);


