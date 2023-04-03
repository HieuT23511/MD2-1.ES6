//Ex1:
const cars1 = {
    Brand: "Audi",
    Color: "Blue"
}
const cars2 = {
    Brand: "BMW",
    Color: "Green",
    Year: 2020
}
const cars4= {...cars1,...cars2}
console.log(cars4);

// Ex2:
const numbers = [1,5,1,8,9];
const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);


