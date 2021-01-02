// const axios = require('axios')
const fetch = require("node-fetch")

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const isNull = () => null;
const isFalsy = (x) => x
// const fetchUser = async () => {
//     let nimp = await fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then(res => res.data)
//         .catch(err => 'err')
//     return nimp
// }
const reversSTR = (str) => str.split('').reverse().join('');
const arrInPart = (arr, len) => {
    let arrToReturn = [];
    let min = 0
    let max = len - 1
    if (len !== 1) {
        while (max < arr.length + len) {
            let wonBlock = arr.filter((_, index) => index >= min && index <= max)
            min += len
            max += len
            arrToReturn.push(wonBlock)
        }
    } else {
        while (max < arr.length) {
            let wonBlock = arr.filter((_, index) => index >= min && index <= max)
            min += len
            max += len
            arrToReturn.push(wonBlock)
        }
    }
    return arrToReturn
}
// console.log(fetchUser());

module.exports = { sum, multiply, isNull, isFalsy, reversSTR, arrInPart };