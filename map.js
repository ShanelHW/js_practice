const subtractTwo = (number) => number - 2

function map (arr, subtractTwo) {
    for(let i = 0; i < arr.length; i++){
 arr[i] = subtractTwo(arr[i])    }
    return arr;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]