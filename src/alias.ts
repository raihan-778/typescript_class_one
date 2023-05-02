type crushType = {
  // this is type alias for object
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: crushType = {
  name: "Joytna",
  age: 22,
  profession: "vet doctor",
  address: "Madhobpur",
};
const crush2: crushType = {
  name: "Khadija",
  profession: "Home minister",
  address: "Chittagong",
};

const crush3: crushType = {
  name: "unknown",
  profession: "string",
  address: "chittagong",
};

//type alias for string , boolian etc
type crushMarriedType = boolean;
const isCrushMarried: crushMarriedType = false;
type courseNameType = string;

const courseName: courseNameType = "Next level web development course";

type operationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: operationType) => {
  return console.log(operation(num1, num2));
};

calculate(20, 30, (x, y) => x / y);
calculate(20, 30, (x, y) => x - y);
calculate(20, 30, (x, y) => x + y);
