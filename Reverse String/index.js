// Reverse String

// Hello --> olleH
// Apple --> elppA


// turn string to array

// reverse array

// turn array back to string

const reverseString = (str) => {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello")); // olleH
console.log(reverseString("Apple")); // elppA