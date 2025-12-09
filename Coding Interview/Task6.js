// Sort given array of objects with age

// Input: let people = [
//     { name: "Trung", age: 26, place: "Kauhajoki" },
//     { name: "Anna",  age: 22, place: "Helsinki" },
//     { name: "Paul",  age: 30, place: "Espoo" },
//     { name: "Mark",  age: 28, place: "Tampere" }
// ];
// Output: [
//     { name: "Anna", age: 22, place: "Helsinki" },
//     { name: "Trung", age: 26, place: "Kauhajoki" },
//     { name: "Mark", age: 28, place: "Tampere" },
//     { name: "Paul", age: 30, place: "Espoo" }
// ]

const SortAge = (arr) =>{
    return arr.sort((a,b)=> a.age -b.age)    
}

const input = [
     { name: "Trung", age: 26, place: "Kauhajoki" },
     { name: "Anna",  age: 22, place: "Helsinki" },
     { name: "Paul",  age: 30, place: "Espoo" },
     { name: "Mark",  age: 28, place: "Tampere" }
 ];
console.log(SortAge(input))



const SortByAge = (arr) => arr.map((item) => item.age).sort((a, b)=> a-b)
console.log(SortByAge(input))