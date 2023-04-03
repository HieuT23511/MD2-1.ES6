//B1:
let sum=(x,y,z)=>{
    return x+y+z;
}
const numbers = [1,2,3,4];
// console.log(sum(...numbers));

//B2:
let a = [1,2];
// a.push.apply(a,[1,2,3]);
// console.log(a);
let b = [3,4,5];
// // console.log(a.push(...b));
// a.push(...b);
// console.log(a);

// //B3:
// a = [...b];
// console.log(a);

//B4:
obj1 = {
    a:1,
    b:2
}
obj2 = {...obj1};
// console.log(obj2);

//B5:
let c = [...a,...b];
console.log(c);
