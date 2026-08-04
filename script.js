// "use strict";

// let hasDriversLincense = false;
// const passTest = true;

// if (passTest) hasDriversLincense = true;
// if (hasDriversLincense) console.log("I can Drive");

// const interface = 'audio';
// const private = 245;
// const if = 3234;

//function
function logger() {
  console.log("My name is Mostafijur");
}

// logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apple ane ${oranges} oranges.`;
  return juice;
}

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

//function declaration vs expressi ons

//functin declaration
function abc(birthYear) {
  return 2026 - birthYear;
}
const age1 = abc(2000);

//function expression
const def = function (birthYear) {
  return 2026 - birthYear;
};

const age2 = def(2002);
// console.log(age1, age2);

//arrow function
const age3 = (birthYear) => 2026 - birthYear;
const res = age3(2000);

// function cslling other function
function fruitCutting(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applesPicces = fruitCutting(apples);
  const orangesPicces = fruitCutting(oranges);
  const juice = `juice with ${applesPicces} apple ane ${orangesPicces} oranges.`;
  return juice;
}

// console.log(fruitProcessor(2, 3));

//arrays
const friends = ["Michael", "Steven", "Peter"];
friends[1] = "Jay";
// console.log(friends);

//array methods
// friends.push("Jay");
// friends.push("MINU", "Mostafijur");
// const newarr = friends.pop();
// friends.unshift("John");
// console.log(friends);

//objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// const interest = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, birthday, job, and friends",
// );
// if (jonas[interest]) {
//   console.log(jonas[interest]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends",
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// const jonasInfo = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
// console.log(jonasInfo);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  callage: function () {
    this.age = 2026 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.callage()} year old ${this.job}. and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
// console.log(jonas.callage());
// console.log(jonas);

//challenge
// console.log(jonas.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`,
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`,
//   );
// }
