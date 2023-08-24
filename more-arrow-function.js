const add = (a, b) => a + b;
const result = add(2, 9);
// console.log(result);
const add2 = (a) => a + 34;
const result4 = add2(4);
// console.log(result4);
const multiArrow = (a, b, c) => {
    const add = a + b;
    const multiply = add * c;
    return add, multiply;
}
const result5 = multiArrow(3, 5, 8, 9, 10);
console.log(result5);