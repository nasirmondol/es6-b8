// Problem-1.
const multiply = (a, b, c) => a * b * c;
const result = multiply(2, 3, 2);
// console.log(result);

// Problem-2
const firstLine = "I am a web Developer";
const secondLine = "I love to code";
const thirdLine = 'I like biryani';

const threeInOne = `${firstLine}. ${secondLine}. ${thirdLine}. `
// console.log(threeInOne);

// Problem-3.
const addTwo = (a, b = 4) => {
    const result = a * b;
    return result;
}
const number = addTwo(3);
// console.log(number);

// problem-4
const evenFriends = (array) => {
    let friend = [];
    for (let item of array) {
        if (item.length % 2 === 0) {
            friend.push(item)
        }
    }
    return friend;
}
const array = ['Sujan', 'Shakil', 'Fahad', 'ariaya', 'Robel', 'Habib', 'Mofizul', 'Fahim', 'Samsul'];
const evenResult = evenFriends(array);
// console.log(evenResult);


const arr = [2, 4, 8, 7];

const squareArray = (array) => {
    let sum = 0;
    let average = 0;

    for (const item of array) {
        // console.log(item)
        const element = item ** 2;
        sum = sum + element;
        average = sum / 4;
    }
    return average;

}

const arrayElement = squareArray(arr);
// console.log(arrayElement);

const arr1 = [2, 3, 4, 5, 80, 10, 90];
const arr2 = [100, 200, 499, 900];
const newArray = [...arr1, ...arr2];
// console.log(Math.max(newArray));

const maxNumber = (arrrr) => {
    let max = 0;
    for (let num of arrrr) {
       if(num > max);
       max = num;
    }
    return max;
}

const resultArr = maxNumber(newArray);
console.log(resultArr);
