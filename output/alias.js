"use strict";
const crush1 = {
    name: "Joytna",
    age: 22,
    profession: "vet doctor",
    address: "Madhobpur",
};
const crush2 = {
    name: "Khadija",
    profession: "Home minister",
    address: "Chittagong",
};
const crush3 = {
    name: "unknown",
    profession: "string",
    address: "chittagong",
};
const isCrushMarried = false;
const courseName = "Next level web development course";
const calculate = (num1, num2, operation) => {
    return console.log(operation(num1, num2));
};
calculate(20, 30, (x, y) => x / y);
calculate(20, 30, (x, y) => x - y);
calculate(20, 30, (x, y) => x + y);
