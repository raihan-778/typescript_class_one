// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

console.log(add(8, 7));

const addArrow = (num1: number, num2: number): number => num1 * num2;
console.log(addArrow(9, 8));

const arr = [9, 8, 11, 5, 89];

const newArr = arr.map((number) => number * number);
console.log(newArr);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "raihan",
  balance: 8,
  addBalance(money) {
    return console.log(`My new balance is ${this.balance + money}`);
  },
};

//default parameters
function add(num1: number, num2: number = 10) {
  return num1 + num2; // in typescript yon cannot use default value for first parameter
}

add(30);
//spread operator in typescript
// const myFriend = ["Rahim", "karim", "Jasim"];
// const newFriend = ["Rosy", "jyotsna", "Khadiza"];
// myFriend.push(...newFriend);
// console.log(myFriend);

//rest operator in typescript
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hello ${friend}`));

greetFriends("Rahim", "Karim", "Jasim", "Khadiza", "Jyotsna", "Rahima");
//array & object destructuring

const myFriend = ["Rahim", "karim", "Jasim"];
const newFriend = ["Rosy", "jyotsna", "Khadiza"];

const myBestFriend = {
  fullName: "Abul bashar",
  age: 24,
};
const { fullName: string } = myBestFriend; //here we can not defined any type because fullName is not a variable it is just a destructured object property
console.log({ string });
const [bestFriends] = myFriend;
