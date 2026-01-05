// This keyword in JavaScript

const book = {
    bookname: 'The Adventures of Horrid Henry',
    price: 1299,
    purchaseGreet: function() {
        console.log(`Thanks for purchasing ${this.bookname}!`);
    }
}

book.purchaseGreet();

book.bookname = 'Thomas and friends';

book.purchaseGreet();


// Arrow functions in JavaScript

const arrowFunction = () => {
    console.log('Hi There!, I am an Arrow function');
};

arrowFunction();

const addTwoNumbers = (num1, num2) => (num1 + num2); // Implicit return

console.log(addTwoNumbers(3, 4));
