// Write a function countChars(str) that takes a string and returns an object with the frequency of each character.
// Example:
// countChars("hello") → { h:1, e:1, l:2, o:1 }


const countChars = (str) => {

    const charCount = {}    
    for (let char of str){
        if (charCount[char])
        {
            charCount[char] ++;
        }
        else {
            charCount[char] = 1;
        }
    }
    return charCount;
}
console.log(countChars("hello"));
console.log(countChars("programming"));