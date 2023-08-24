// const name = 'Rofiq';
// Dont do it.
// name = "Shofik";
// console.log(name);

// right way
// let name = 'Rofiq';
// name = 'Shofik';
// console.log(name);

// By use the const we can change the array and object property
const array = [22, 89, 45, 87, 38, 74, 76, 11, 55];
array.push(10, 0, 20)
array[0] = 33;
array[1] = 200;
// console.log(array);

const person = {
    name: 'Aramit', age: 34
}
person.name = 'Amrin';
person.salary = 45000;
// console.log(person);
let sum = 0;
for (let i = 1; i < 30; i++) {
    // sum = sum + i;
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);
