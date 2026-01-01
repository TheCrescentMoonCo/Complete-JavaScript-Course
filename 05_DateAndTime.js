const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());

console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 1, 16, 38);
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("2026-01-01");
let myCreatedDate3 = new Date("01-01-2026");

console.log(myCreatedDate2.getTime());


let myTimeStamp = Math.floor(Date.now());
console.log(myTimeStamp);


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
