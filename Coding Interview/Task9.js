// Write a function that find the Count Occurrences of character

// Input : "Javascript" , "a"

// Output : "2"


const CoutLetter = (str, char) => {
    let result = 0
    const newStr = str.toLowerCase()
    for (const i  of newStr) 
    {
        if (i === char.toLowerCase())  result ++
    }
    return result
}

console.log(CoutLetter("JAvascript", "a"))