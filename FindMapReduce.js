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
