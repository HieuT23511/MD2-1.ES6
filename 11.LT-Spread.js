//Ham1:
// function replace(array, from, to, elements) {
//     // array.splice.apply(array, [from, to - from].concat(elements))
// array.splice(from, to - from,...elements)
// }
// let testArray = [1, 2, 100, 100, 6]
// replace(testArray, 2, 4, [3, 4, 5])
// console.log(testArray)

//Ham2:
// function copyReplace(array, from, to, elements) {
//     // return array.slice(0, from).concat(elements).concat(array.slice(to))
//     return [...array.slice(0,from),...elements,...array.slice(to)]
// }
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

//Ham3:
    let customerOrder = []
function recordOrders(time, ...bird) {
    customerOrder.push({time,bird})
}
recordOrders(new Date, "coffee", "yogurt", "pizza")
console.log(customerOrder)