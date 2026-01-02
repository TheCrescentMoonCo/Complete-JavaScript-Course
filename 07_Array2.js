const childhoodCartoons = ['Ben10', 'Ninja Hattori', 'Hagimaru', 'Peepa Pigs', 'PowerPuff Girls', 'Thomas and Friends'];
const favoriteCartoons = ['Chota Bheem', 'Oggy and the cockroaches', 'Oswald', 'Shinchan', 'Pink Panther', 'BeyBlade Metal Fury'];

const combinedListOfCartoons = [...childhoodCartoons, ...favoriteCartoons];  // Spread Operator ... Used to combine to different arrays in a single array

console.log(combinedListOfCartoons);

const differentTypeOfArrayList = [1, 2, 4, [0, 5], 7, [8, 9, [6, -1]]];  // .flat(infinity) method is use to flat a different or peculiar appearing array

const flattedListOfDifferentArray = differentTypeOfArrayList.flat(Infinity);
console.log(flattedListOfDifferentArray);

// Array.from('TheCrescentMoonCo') method is use to convert any type of data into array

console.log(Array.from("TheCrescentMoonCo"));

// Array.of(var1, var2, var3) method is use to create array from elements

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
