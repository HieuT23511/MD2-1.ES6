//B1: Destructuring trich xuat cac gia tri cua mang
let names = ["alpha", "beta", "gamma", "delta","lamda"];
// let [firstName, secondName] = names;
// console.log(firstName);
// console.log(secondName);

//B2:
// let [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta","lamda"];
// console.log(firstName);
// console.log(thirdName);

//B3:
// let [,,, ...lastName] = names;
// console.log(lastName);
// console.log([,,, ...lastName])

//B4: Swap
// let [firstName, secondName] = names;
// console.log(firstName);
// console.log(secondName);
// [firstName, secondName] = [secondName, firstName];
// console.log(firstName);
// console.log(secondName);

//B5:
// let NamesList=()=> {
//     return ["alpha", "beta", "gamma", "delta"]
// }
// let [firstName, secondName] = NamesList();
//
// console.log(firstName);
// console.log(secondName);

//B6:
let point = {x: 5, y: 6, z: 7 };
const { x, y, z } = point;
console.log(x);
console.log(y);
console.log(z);

//B7:
const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section2 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1);