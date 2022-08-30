//exercise 1
const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];
// ADD CODE HERE
const fourthItem = horror[3]
// Write a console.log statement below to check your work! 
console.log(fourthItem)


//exercise 2
const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];
// ADD CODE HERE
netflixShows.push("Sandman")
// Write a console.log statement below to check your work!
console.log(netflixShows)

//exercise 3
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i++){
    greetings.push(`Have a ${synonyms[i]} day!`)
}

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let i = 0; i < greetings.length; i++){
    console.log(greetings[i])
}

//exercise 4
const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for(let i = 0; i< increaseByTwo.length; i++){
    increaseByTwo[i] += 2;
}
// Uncomment the line below to check your work!
 console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

//exercise 5
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
for(let i = 0; i<timesTenIfOverFive.length; i++){
    if(timesTenIfOverFive[i]>= 5){
        timesTenIfOverFive[i] *= 10
    }
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]