function detectCollision(objects, point) {
    // for (let i = 0; i < objects.length; i++) {
    // if (point.x >= object.x && point.x <= object.x + object.width &&
    //     point.y >= object.y && point.y <= object.y + object.height)
    //     return object
    // }
    return objects.find((object) =>
        point.x >= object.x && point.x <= object.x + object.width &&
        point.y >= object.y && point.y <= object.y + object.height)
}
const myObjects = [
    {x: 10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x: 0, y: 0, width: 10, height: 5}
]
console.log(detectCollision(myObjects, {x: 4, y: 2}))