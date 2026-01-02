// Objects De-structuring and JSON API Intro

const course = {
    title: 'Python Programming',
    price: 1299,
    instructor: 'Donald Trumph' 
};

// Object De-structurng

const {title} = course;
const {price} = course;
const {instructor} = course;

console.log(title);
console.log(price);
console.log(instructor);

// JSON API Intro

// {
//     name: 'Brendan Eich',
//     achievement: 'Created Mocha Language',
//     year: 1995
// }