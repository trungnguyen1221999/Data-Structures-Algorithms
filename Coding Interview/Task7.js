// Find the max number 

// input : ["23-43-65", "98-12-100", "12-23-239"]
// output: [65, 100, 239]


// const FindMaxNumber = (arr)=>{
//         let result = []

//     for (const item of arr) 
//     {   let max = 0
//         let numArr = item.split("-")
//         for (const num of numArr) 
//         {
//             max = Math.max(max, num)
//         }
//         result.push(max)
//     }
//     return result
// }


//short way

const FindMaxNumber = (arr) => {
    let result = []
    arr.map(i => {
    const number = i.split("-").map((item)=> Number(item))
        result.push(Math.max(...number))
    })
       
    
    return result
}
const input =  ["23-43-65", "98-12-100", "12-23-239"]
console.log(FindMaxNumber(input))