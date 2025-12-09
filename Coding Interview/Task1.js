//Find the missing number of the given array of integers
// Input: [1, 2, 3, 5]
//Count: 10
// Output: [4, 6, 7, 8, 9, 10]

const FindTheMissingNumber = (arr, count)=>{
    if(count < 0 || isNaN(count)) return undefined

    let missingArr = []
    for (let i = 1; i <= count; i++)
    {
        if(!arr.includes(i)) missingArr.push(i)
    }
    return missingArr
}


console.log(FindTheMissingNumber([1,2,3,5], 10))