// Write a function to find the longest word in String
// input : "Write a function to find the longest word in String"

// output: "function"


// const LongestWord = (arr) => {
//     let strArr = arr.trim().split(" ")
//     let wordMap = new Map()
//     for (const str of strArr)
//     {
//         wordMap.set(str, str.length)
//     }
//     let longestWord = ""
//     let longestLength = 0
//     for (const [word, length ]of wordMap)
//     {
//         if (longestLength < length) {
//             longestLength = length
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }


// const LongestWord = (arr) => {
//     let strArr = arr.trim().split(" ")
//     let longestWord = ""
//     for (const str of strArr) {
//         longestWord = longestWord.length < str.length ? str : longestWord
//     }
//     return longestWord
// }


const LongestWord = (arr) => {
     return arr.trim().split(" ").reduce( (longest, current) => {
       return current.length > longest.length ? current : longest
    }, "")
}

const input = "Write a function to find the longest word in String"

console.log(LongestWord(input))