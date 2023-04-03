//B1:
// let multiply = (a, b) => {
//     return a * b;
// }
// let num1 = multiply(5);
// console.log(num1);
// let num2 = multiply(5, 8);
// console.log(num2);

//B2:
// let multiply = (a, b=5) => {
//     return a * b;
// }
// let num1 = multiply(5);
// console.log(num1);
// let num2 = multiply(5, 8);
// console.log(num2);

//B3:
class multiply {
    constructor(a,b=3) {
        console.log(a * b)
    }
}
let obj1 = new multiply(5);
let obj2 = new multiply(5,8);

