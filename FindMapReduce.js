// Find
const numbers = [10, 20, 30, 40, 50];

const firstGreaterThan25 = numbers.find((num) => num > 25);
console.log(firstGreaterThan25);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const user = users.find((user) => user.name === "Bob");
console.log(user);

//Map
const numbersMap = [1, 2, 3, 4, 5];

const doubledNumbers = numbersMap.map((num) => num * 2);
console.log(doubledNumbers);

const usersMap = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const names = usersMap.map((user) => user.name);
console.log(names);

//Reduce
const numbersReduce = [1, 2, 3, 4, 5];

const sum = numbersReduce.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(sum);

const usersReduce = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const totalAge = usersReduce.reduce(
  (accumulator, user) => accumulator + user.age,
  0
);
console.log(totalAge);

const grouped = numbersReduce.reduce(
  (acc, num) => {
    if (num % 2 === 0) {
      acc.even.push(num);
    } else {
      acc.odd.push(num);
    }
    return acc;
  },
  { even: [], odd: [] }
);
console.log(grouped);

// .find(), .map(), .reduce() -- together
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 800 },
];

const expensiveProduct = products.find((product) => product.price > 800);
console.log(expensiveProduct); //output - laptop

const productNames = products.map((product) => product.name);
console.log(productNames); //output - "laptop, Phone, Tablet"

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0
);
console.log(totalPrice); //output - 1000+500+800 = 2300 

const arr = [1,2,3,5,67,78]
const MapArr =  arr.map ((array) => array * 2 ) 
const FindArr =  arr.find ((array) => array > 2 ) 
const ReduceArr =arr.reduce ((array,total) => array + total ) ;

console.log(MapArr);
setTimeout(()=>{
   console.log(FindArr); 
},2000);
setTimeout(()=>{
   console.log(ReduceArr); 
},3000);
