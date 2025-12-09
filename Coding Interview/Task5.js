// count count occurences of no in given Object

// input:
// let people = [
//     { name: "Harry", gender: "girl" },
//     { name: "Paul",  gender: "boy"  },
//     { name: "Anna",  gender: "girl" },
//     { name: "Mark",  gender: "boy"  },
//     { name: "John",  gender: "boy"  }
// ];

// output: boys : 3

//use Reduce

// const CountBoy = (arr) => arr.reduce((count, person)=>{return count + (person.gender === "boy" ? 1 : 0)}, 0)

//use filter

const CountBoy=(arr) => arr.filter((item) => item.gender === "boy").length
const input = [{ name: "Harry", gender: "girl" },
    { name: "Paul",  gender: "boy"  },
    { name: "Anna",  gender: "girl" },
    { name: "Mark",  gender: "boy"  },
    { name: "John",  gender: "boy"  }
];

console.log(CountBoy(input))