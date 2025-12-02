// Palindromes 
// if the reverse string is the same as the original string

// Mom --> true
// Bob --> true
// Hello --> false

const isPalindrome = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return str.toLowerCase() === reversedStr.toLowerCase();
}


console.log(isPalindrome("Mom")); // true
console.log(isPalindrome("Bob")); // true
console.log(isPalindrome("Hello")); // false