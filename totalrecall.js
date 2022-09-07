/* PART A
How do we assign a value to a variable? var = value
How do we change the value of a variable? var = newValue
How do we assign an existing variable to a new variable? let newVar = oldVar
Remind me, what are declare, assign, and define? declaring a variable creates it and allocates memory. Assign gives a variable a value. Definition assigns the value
What is pseudocoding and why should you do it? pseudocode is explaining the logic and functionality of code in plain english. It's useful when preparing to code.
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 80/20 */

/*PART B
For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.*/

let firstVariable = `Hello World`
firstVariable = 42
let secondVariable = firstVariable
secondVariable = `Per Scholas`
console.log(firstVariable) //firstVariable==42
let yourName = `Shanel Hickman Whitmore`
console.log(`Hello my name is ${yourName}`)

/*PART C */
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

  /*PART D*/

// Declare a variable animal. Set it to be either "cow" or something else
let animal = `horse`;
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
(animal == `cow`) ? console.log(`moo`) : console.log(`Hey! You're not a cow.`)
// Commit

/*PART E*/
// Make a variable that holds a person's age; be semantic
let age = 13;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
(age >= 16) ? console.log(`Here are the keys!`) : console.log(`Sorry, you're too young.`)

/* PART II*/

//PART A
//Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let index = 0; index <= 10; index++) {
    console.log(index);
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for (let index = 10; index <= 400; index++) {
    console.log(index);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let index = 12; index < 4000; index+=3) {
    console.log(index);   
}








//PART B

//PART C