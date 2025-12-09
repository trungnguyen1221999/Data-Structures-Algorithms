// Count occurences of no in given Array
// Input: [5,5,5,2,2,2,2,2,9,4]
// output : {
//     "2": 5,
//     "4": 1
//     "5": 3
//     "9" : 1
// }



const CountMap = (arr) =>{
    arr = arr.sort((a,b)=> a-b)
    let countMap = new Map()
    for (const item of arr)
    {
       countMap.set(item, (countMap.get(item)||0) +1)
    }
    return countMap
}


const input = [5,5,5,2,2,2,2,2,9,4]


console.log(CountMap(input))