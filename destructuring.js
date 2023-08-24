const person = {
    name: 'Salman khan',
    age: 57,
    occupation: 'Acting',
    salary: 20000000,
    height: '6',
    girlFriend: 'Katrina',
    father: 'Selim khan'
}

const { name, age, occupation, salary, father } = person;
// console.log(father);
const numbers = [20, 40, 70, 89];
const [first, second, third, fourth] = numbers;
// console.log(fourth);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = numbers[i] + sum;
}
console.log(sum);