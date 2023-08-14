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
