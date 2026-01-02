// Declaration of Object Literals

const mySymbol = Symbol('Key1');

const user = {
    name: "TheCrescentMoonCo",
    age: 1,
    [mySymbol]: 'MyKey',
    email: 'TheCrescentMoonCo@rediffmail.com',
    location: 'Lucknow, IN',
    isLoggedIn: true,
    loginActivities: ['Sunday', 'Saturday'],

};

user.loginActivities.push('Friday');

console.log(user.name);
console.log(user['name']);

console.log(user.loginActivities);
console.log(user[mySymbol]);

// Object.freeze(user) method is use to freeze the Object (Unchangeble)

// Object.freeze(user);

user.greeting = function() {
    console.log(`Welcome! ${This['name']}`);
}

console.log(user.greeting());

