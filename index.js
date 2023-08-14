//homework1

let name = prompt("What is your name?");

if (name === "John") {
  alert("Hello, John! How are you?");
}

//homework2

let F = parseFloat(prompt("Введіть значення сили F:"));
let m = parseFloat(prompt("Введіть значення маси m:"));

let a = F / m;

document.write(`
**************<br>
Прискорення тіла при силі F = ${F}, та масі m = ${m}:<br>
--------------------<br>
a = ${a}.<br>
-------------------<br>
end.
`);

//homework3

let students = [];

for (let i = 0; i < 3; i++) {
    let age = prompt("Введіть вік студента:");
    let name = prompt("Введіть ім'я студента:");
    let surname = prompt("Введіть прізвище студента:");
    students.push([age, name, surname]);
}

let sumAge = 0;

console.log("**************");
console.log("Список студентів, що зареєструвалися на вебінар:");

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i][0]} років ${students[i][1]} ${students[i][2]}`);
    sumAge += parseInt(students[i][0]);
}

let averageAge = sumAge / students.length;

console.log("--------------");
console.log("Середній вік студента:", averageAge);
console.log("--------------");
console.log("**************");

//homework4

// 1. Запит ім’я користувача:
// 1.1. Перевірка на порожній рядок:

let userName = prompt("Введіть ваше ім'я:") || "anonym";
alert(userName);


// 1.2. Перевірка на "admin":

alert(userName === "admin" ? "Hello admin" : "Welcome"); 

// 2. Отримання даних login, password, age від користувача:
// 2.1. Перевірка, чи порожні login і password:

let login = prompt("Введіть ваш login:");
let password = prompt("Введіть ваш password:");
alert((login && password) ? 'welcome' : 'login or password incorrect');


// 2.2. Визначення, яке поле порожнє:

!login && alert('Login is empty');
!password && alert('Password is empty');


//2.3. Перевірка age:

let age = prompt("Введіть ваш вік:");
alert(age && age >= 18 && age <= 28 ? "Hello" : "Goodbye");


//homework 5

let start = prompt('Кто пришел?');

if(start === 0) {
    alert('Вход отменен');
} else if(start !== "Админ") {
    alert('Я вас не знаю');
} else if(start === "Админ"){
    let password = prompt('Пароль?')
    if(password === 0){
        alert('Вход отменен');
    } else if(password !== "Черный Властелин"){
        alert('пароль неверен');
    } else if(password === "Черный Властелин"){
        alert('Добро пожаловать!');
    };
}

// homework6

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case (numOrStr === null):
        console.log('ви скасували');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr)):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

//homework7 є окремим файлом 

// homework8

let A = [];
for (let i = 0; i < 10; i++) {
    A.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Початковий масив:", A);


for (let i = 1; i < A.length; i += 2) {
    A[i] = 0;
}

console.log("Модифікований масив:", A);
