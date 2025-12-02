// Int Reverse
// Reverse Integer
// 12345 --> 54321
// -12345 --> -54321    

// Turn integer to string

// Reverse string

// Turn string back to integer


const reverseInteger = (num) => {
    const reversedStr = num.toString().split("").reverse().join("");
    if (reversedStr.endsWith("-")) {
        return parseInt("-" + reversedStr.slice(0, -1));
    }
    return parseInt(reversedStr) * Math.sign(num);
}

console.log(reverseInteger(12345)); // 54321
console.log(reverseInteger(-12345)); // -54321