//B1:
// function arrSqrt(arr){
//     let newArr =[];
//     arr.forEach(index=>newArr.push(index*index)
//     )
//     return newArr;
// }
// let arr = [1,2,3,4,5];
// // let sqrt = (item) => item * item;
//
// console.log(arrSqrt(arr))
// B2:
function arrSqrt(arr,func){
    let newArr =[];
    arr.forEach(index => {
        newArr.push(func(index))
        })
return newArr;
}
let arr = [1,2,3,4,5,6];
let funcSqrt =(item) =>item*item;
console.log(arrSqrt(arr,funcSqrt));