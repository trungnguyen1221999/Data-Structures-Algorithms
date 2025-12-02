// Write a function mergeObjects(obj1, obj2) that returns a new object containing all keys from both objects.
// - If keys overlap, take the value from obj2.
// Example:
// mergeObjects({a:1,b:2},{b:3,c:4}) → {a:1,b:3,c:4}

const mergeObjects = (obj1, obj2) => {
    const mergedObj = {...obj1, ...obj2};
    return mergedObj;
}
console.log(mergeObjects({a:1,b:2},{b:3,c:4}));
console.log(mergeObjects({name: "Alice", age: 25}, {age: 30, city: "New York"}));