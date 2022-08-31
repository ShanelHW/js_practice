function recreateforEach (array , callback)
{
    for(i=0;i<array.length;i++ ){
       callback(array[i])
    }
}
const recreateMap = (array, callback) => {
    let newArr = []
        recreateforEach(array, function (item){
        newArr.push(callback (item))
    })
    return newArr
}




// ADD CODE HERE

// Uncomment these to check your work!
//console.log(typeof forEach); // should log: 'function'
recreateforEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof recreateMap); // should log: 'function'
console.log(recreateMap([3,4,5], n => n - 2)); // should log: [1, 2, 3]