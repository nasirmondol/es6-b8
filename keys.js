const phone = {
    brand: "Samsung",
    price: 35000,
    color: 'Black',
    camera: 28,
    display: 9
}
const keys = Object.keys(phone)
// console.log(keys);

const values = Object.values(phone);
// console.log(values);
const extract = Object.entries(phone);
// console.log(extract);

// delete phone.brand;
// delete phone.color;
// console.log(phone);

phone.source = 'gallery'
console.log(phone);