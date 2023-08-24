const names = ['Rasel', 'Shakil', 'Arif', 'Jaman', 'Habib', 'Sujan', 'Alamin'];
const newNames = ['Sobuj', 'Abid', 'Sharmin', 'Ripa', 'Runa', 'Rozy'];
// const newArray = [...names, 'Rafsan', 'Monir', 'Sohel', ...newNames];
// console.log(newArray);
const newOne = [...newNames]
const newArray = [...names, ...newNames];
console.log(newArray);
