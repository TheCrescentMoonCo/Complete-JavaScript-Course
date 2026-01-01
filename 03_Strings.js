const userName = 'William';
const repoCount = 100;

console.log(`Name: ${userName.toUpperCase()} and total repository count is ${repoCount}`);

const str = new String('Oswald');
console.log(str);
console.log(str.indexOf('l'));
console.log(str.concat(" ", userName));

console.log(str.substring(0, 5));
console.log(str.slice(-3, 5));

// Trim and Replace methods of String

const userInput = '     Groovy     ';

console.log(userInput);
console.log(userInput.trim());


const url = 'https://www.google.com/javascript%20programming%20language';

console.log(url.replace('%20', ' '));
console.log(url.replaceAll('%20', ' '));

console.log(url.includes('javascript'));
console.log(url.includes('python'));



// String to Array method using split() method

const addressOfUser = 'Bougan-Valley-San-Francisco';

console.log(addressOfUser.split('-'));