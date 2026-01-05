function showMessage() {
    console.log('Hello, World!');       // Function Defination
}

showMessage();

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const container = addTwoNumbers(1, 6);
console.log('Result', container);

function userLoginMessage(username = 'Horrid Henry!') {     // Passed a default value 'Horrid Henry!'
    if(username) {
        return `${username} logged in`;
    }
    else {
        console.log('Pls enter the username');
    }
}

const msgContainer = userLoginMessage('Popeye The Sailor');
console.log(msgContainer);
