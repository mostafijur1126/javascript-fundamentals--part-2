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
