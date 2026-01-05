function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 1000));



// Function with Objects

const user = {
    brandname: 'MacIntosh',
    price: 4000
};

function handleObject(anyObject) {
    console.log(`Username: ${anyObject.brandname} | price: ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    brandname: 'Windows',
    price: 2899
})


// Functions with Arrays

const listOfNumbers = [200, 100, 10000, 999];

function returnSecondValueOfArray(getArray) {
    return `Second value: ${getArray[1]}`;
}

console.log(returnSecondValueOfArray(listOfNumbers));