function filterArray(numbers, value) {
    
    // let results = [];
    // console.log (results)
    // for (const result of results) {
    //     if (result.numbers > value); {
        
    //     }
    // return results.numbers
    // }
    

    // let results = [String(numbers), value];


    let result = [];

    for (const number of numbers) {
        console.log(number)
    } {  
        if (numbers > value) {
           console.log (result);
        }

    }
    return  result

    
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]