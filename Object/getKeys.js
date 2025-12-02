// Write a function getKeys(obj) that returns an array of all keys in the object.
// Example:
// getKeys({a:1, b:2, c:3}) → ["a","b","c"]


const getKeys = (obj) => {
   const key = []
    for (let k in obj){
        key.push(k);
    }
    return key;

}
console.log(getKeys({a:1, b:2, c:3}));
console.log(getKeys({name: "Alice", age: 30, city: "New York"}));