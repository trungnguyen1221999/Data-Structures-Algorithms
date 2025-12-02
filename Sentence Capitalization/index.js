// // hello word --> Hello Word


// turn sentence to Array

// capitalize first letter of each word

// turn array back to sentence



const capitalizeSentence = (sentence) => {
    const words = sentence.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ")
}


console.log(capitalizeSentence("hello word")); // Hello Word
console.log(capitalizeSentence("javaScript is fun")); // JavaScript Is Fun

