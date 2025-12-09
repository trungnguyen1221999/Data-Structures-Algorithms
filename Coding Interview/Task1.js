//Find the missing number of the given array of integers
// Input: [1, 2, 3, 5]
//Count: 10
// Output: [4, 6, 7, 8, 9, 10]

const findMissingNumbers = (arr, count) => {
    let missingNumbers = [];
    for(let i = 1; i <= count; i++) {
        if(!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
    console.log(missingNumbers)
    
}

findMissingNumbers([1, 2, 3, 5], 10);