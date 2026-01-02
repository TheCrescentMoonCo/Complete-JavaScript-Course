// Declaration of singleton object

const singletonObject = new Object();   // Singlton Object

// Declaration of object literals

const instagramUser = {};

instagramUser.id = '123FF4';
instagramUser.name = 'TheCrescentMoonCo';
instagramUser.isLoggedIn = true;

// console.log(instagramUser);

const regularUser = {
    email: "someone@rediffmail.com",
    fullname: {
        userfullname: {
            firstname: 'Donald',
            lastname: "Trumph"
        }
    }
};

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

// Merging two objects together

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

const combinedObj = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};

console.log(combinedObj);
console.log(obj3);

console.log(Object.keys(instagramUser));  // Gives output in array 
console.log(Object.values(instagramUser));  // Gives output in array 
console.log(Object.entries(instagramUser));  // Gives output in array 

console.log(instagramUser.hasOwnProperty('isAvailable'));
