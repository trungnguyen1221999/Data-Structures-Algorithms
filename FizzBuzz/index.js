// FizzBuzz

// 1. Print numbers from 1 to n
// 2. if number is multiple of 3, print "Fizz"
// 3. if number is multiple of 5, print "Buzz"
// 4. if number is multiple of both 3 and 5, print "FizzBuzz"
// 5. else print the number itself


const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                console.log("FizzBuzz");
                break;
            case i % 3 === 0:
                console.log("Fizz");
                break;
            case i % 5 ===0:
                console.log("Buzz")
                break

                default: console.log(i);
        }
    }
}

fizzBuzz(15);