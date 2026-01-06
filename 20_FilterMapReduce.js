const prices = [4, 8, 12, 16, 20, 24];
const discountedPrices = [];

prices.forEach((price) => {
    discountedPrices.push(price * 0.5);
});

discountedPrices.forEach((item) => {
    console.log(item);
});

// Map 

const discount = prices.map((item)=>{
    return item * 0.5;
})

console.log(discount);


// Filter 

const books = [
    {title: 'Book1', genre: 'Fiction', publish: 1987}, 
    {title: 'Book2', genre: 'History', publish: 1983}, 
    {title: 'Book3', genre: 'Science', publish: 1989}, 
    {title: 'Book4', genre: 'History', publish: 1981},
    {title: 'Book5', genre: 'Non-Fiction', publish: 1988}
];

const filteredBook = books.filter((book) => {
    return book.publish >= 1985 && book.genre == 'Non-Fiction';
});

console.log(filteredBook);


// Chaining methods using Map and Filter


const numbers = [10, 20, 30, 40, 50];

const chainedNumbers = numbers.map((i) => i * 10).map((i) => i + 1).filter((i) => i >= 300);

console.log(chainedNumbers);


// Reduce

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function(accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'JS Course',
        price: 2999
    },
    {
        itemName: 'C++ Course',
        price: 1999
    },
    {
        itemName: 'Python Course',
        price: 3999
    },
    {
        itemName: 'Web Development',
        price: 3399
    },
    {
        itemName: 'Data Science',
        price: 5999
    }
];

const newShoppingCart = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(newShoppingCart);