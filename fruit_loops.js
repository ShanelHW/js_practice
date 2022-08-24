/*for (let i = 99; i > 0; i--) {
  let x = i - 1;
  console.log(
    i +
      ` bottles of beer on the wall. ` +
      i +
      ` bottles of beer. Take one down and pass it around. ` +
      x +
      ` bottles of bear on the wall.`
  );
}*/
//because regex is hard

// let user = `Shanel`
// let message = `Welcome ${user}`
// console.log(message)
// if(user){
//     this.user= `Natasha Shanel`
//     let message = `Welcome ${this.user}`
//     console.log(message)
// }

// for (let index = 0; index < 11; index++) {
//     if (index % 2 !== 0){
//         console.log(`${index} is odd`)
//         } else{
//             console.log(`${index} is even`)
//         }
// }
// for (let index = 10 ; index >= 0; index--) {
//     if (index % 2 === 0){
//         console.log(index)
//         }

// }

// for(let i = 0; i<= 10; i++){
// if (i===5) {
//    continue
// } else if (i === 8){
//     break
// }
// console.log(`${i}`)
// }

// let reversed = ``
// if (reversed) {
//     console.log(`true`)
// } else {
//     console.log(`false`)
// }

const word = `Squirrel`;
let reversed = ``;
for (let i = word.length - 1; i >= 0; i--) {
  //let char = word[i];

  reversed += word[i];
  //console.log(reversed);
}
let doublereverse = reversed;
for (let i = word.length - 1; i >= 0; i--) {
  //let char = word[i];

  doublereverse += word[i];
  //console.log(doublereverse);
}
let lowerdouble = (doublereverse.toLowerCase).toString

console.log(`Original word: ${word}`);
console.log(`Reversed word: ${reversed}`);
console.log(`Double reversed word: ${doublereverse}`);
console.log(`Lowercase double reversed word: ${lowerdouble}`)

