// /* PART A
// How do we assign a value to a variable? var = value
// How do we change the value of a variable? var = newValue
// How do we assign an existing variable to a new variable? let newVar = oldVar
// Remind me, what are declare, assign, and define? declaring a variable creates it and allocates memory. Assign gives a variable a value. Definition assigns the value
// What is pseudocoding and why should you do it? pseudocode is explaining the logic and functionality of code in plain english. It's useful when preparing to code.
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 80/20 */

// /*PART B
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.*/

// let firstVariable = `Hello World`
// firstVariable = 42
// let secondVariable = firstVariable
// secondVariable = `Per Scholas`
// console.log(firstVariable) //firstVariable==42
// let yourName = `Shanel Hickman Whitmore`
// console.log(`Hello my name is ${yourName}`)

// /*PART C */
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' == 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false == false)
//   console.log(e == 'Kevin');
//   console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 !== '48');

//   /*PART D*/

// // Declare a variable animal. Set it to be either "cow" or something else
// let animal = `horse`;
// // Write code that will print out "mooooo" if the it is equal to cow
// // Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// (animal == `cow`) ? console.log(`moo`) : console.log(`Hey! You're not a cow.`)
// // Commit

// /*PART E*/
// // Make a variable that holds a person's age; be semantic
// let age = 13;
// // Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
// (age >= 16) ? console.log(`Here are the keys!`) : console.log(`Sorry, you're too young.`)

// /* PART II*/

// //A
// //Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let index = 0; index <= 10; index++) {
//     console.log(index);
// }
// // Write a loop that will print out all the numbers from 10 up to and including 400
// for (let index = 10; index <= 400; index++) {
//     console.log(index);
// }
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let index = 12; index < 4000; index+=3) {
//     console.log(index);   
// }

// //B
// for (let index = 0; index <= 100; index++) {
//     (index%2==0) ? console.log(index + `<-- is an even number`) : console.log(index)   
// }

// //C
// // for (let index = 0; index <= 100; index++) {
// //     if(index%5==0){
// //         console.log(`I found a ${index}.  High five!`)
// //     } if(index%3==0){
// //         console.log(`I found a ${index}. Three is a crowd.`)   
// //     }
// //         else{
// //             console.log(`I found a ${index}.`)
// //         }
// // }

// for (let index = 0; index <= 100; index++) {
//     if(index){
//         console.log(`I found a ${index}.`)
//     } if(index%5==0){
//         console.log(`High five!`)   
//     }
//         else if(index%3==0){
//             console.log(`Three is a crowd.`)
//         }
// }

//D. Savings Account
// let bank_account = 0
// for (let index = 0; index <= 10; index++) {
//     bank_account += index;
// }
// //check balance
// console.log(`Your account balance is $${bank_account}`);

// let bank_account = 0
// for (let index = 0; index <= 100; index++) {
//     bank_account += (index * 2);
// }
// console.log(`Your account balance is $${bank_account}`);

// III. Arrays & Control Flow

/*A. Talk About It
What are the things in an array called? elements
Do Arrays guarantee those things will be in order? arrrays are not guaranteed to be in a specific order and cn be sorted.
What real-life thing could you model with an array? I would model a library or store.
*/

//B. Easy Does It
// let quotes = [`quote 1`, `quote 2`, `quote 3`];
// console.log(quotes);

//C. Accessing Elements
// const randomThings = [1, 10, "Hello", true];
// console.log(`The 1st element is ${randomThings[0]} at index 0`);
// randomThings[2] = "World";
// console.log(randomThings);

//D. Change Values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log(`The 3rd element is ${ourClass[2]} at index 2`);
// ourClass[4] = "Octocat";
// ourClass.push("Cloud City")
// console.log(ourClass);

//E. Mix It Up
// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon");
// myArray.push("stringy thing");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse();
// console.log(`Reverse returns a reference to the same array. This array was mutated as seen below: ${myArray} It does not match the original array`);

//F. Biggie Smalls
// let num = 4
// if (num < 100) {
//     console.log(`little number`)
// }else (num >= 100) {
//     console.log(`big number`);
// } 

//G. Monkey in the Middle
// let num = 4
// if (num < 5) {
//     console.log(`little number`)
// }else if (num > 10) {
//     console.log(`big number`);
// } else {
//     console.log(`monkey`)
// }

//H. What's in your closet?

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// console.log(`Kristin is rocking that ${kristynsCloset[3]} today!`);
// kristynsCloset.splice(6,0,'raybans');
// kristynsCloset[5] = "stained knit hat"
// console.log(kristynsCloset);

// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}`)
// thomsCloset[1][3] = `Footie Pajamas`
// console.log(thomsCloset)

//IV. Functions

//A. printGreeting
// console.log(`Been there. Done that. No need to interpolate Hello World again.`)
// //B. printCool
// let printCool = (name) => `${name} is cool`
// console.log(printCool(`Shanel`))
// //C. calculateCube
// let calculateCube = (num) => Math.pow(num, 3)
// console.log(calculateCube(3))
//D. isVowel
// let isVowel = (letter) => {
//     letter = letter.toLowerCase();
//     return (letter == `a` || letter == `e` ||letter == `i` ||letter == `o` || letter == `u`)
// }
// console.log(isVowel(`A`))
// console.log(isVowel(`a`))
// console.log(isVowel(`E`))
// console.log(isVowel(`e`))
// console.log(isVowel(`I`))
// console.log(isVowel(`i`))
// console.log(isVowel(`O`))
// console.log(isVowel(`o`))
// console.log(isVowel(`U`))
// console.log(isVowel(`u`))
// console.log(isVowel(`Z`))

//E. getTwoLengths
// let getTwoLengths = (str,str2) => [str.length, str2.length]
// console.log(getTwoLengths("Hank","Hippopopalous"))

//F. getMultipleLengths
// let getMultipleLengths = (arr) => {
//     numArr = []
//     arr.forEach(element => { 
//         numArr.push(element.length);
//     });
//     return numArr;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

//G. maxOfThree
// function maxOfThree(n1, n2, n3){
//     let arr = [n1,n2,n3];
//     let max = 0;
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxOfThree(6, 9, 1));

//H. printLongestWord
// let printLongestWord = (arr) => {
// const descending = arr.sort((a,b) =>b.length - a.length);
// return arr[0]
// } 
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//V. Objects
//A Make a user object
const user = {
    name: `name`,
    email: `email`,
    age: 20,
    purchased: []
}
//B Update the user
user.email = `newemail@email.com`
user.age++ ;
//C Adding keys and values
user.location = `some other location`
//D Shopaholic !
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2])
//E Object-within-object
user.friend = {
    name: "Ella Mae",
    age: 32,
    location: `London`,
    purchased: []
}
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push(`The One Ring`)
user.friend.purchased.push(`A latte`)
console.log(user.friend.purchased[1])
//F Loops
user.purchased.forEach(item => {
    console.log(item)
});
//G Functions can operate on objects
let updateUser = () => {
    user.age++
    user.name.toUpperCase()
    return user;
} 
let oldAndLoud = (person) => {
    person.age = person.age++
    person.name = person.name.toUpperCase()
    return person;
} 
console.log(updateUser())
console.log(oldAndLoud(user))
//VI. Hungry for More