// Write a function groupBy(arr, callback) that groups array items based on a callback.
// Example:
// groupBy([6.1,4.2,6.3], Math.floor) → { 6: [6.1,6.3], 4: [4.2] }

const groupBy = (arr, callback) => {
    const groupedObj = {};
    for (let item of arr){
        const key = callback(item);
        if (groupedObj[key]){
            groupedObj[key].push(item);
        }
        else {
            groupedObj[key] = [item];
        }
    }
    return groupedObj;
}
console.log(groupBy([6.1,4.2,6.3], Math.floor));
console.log(groupBy(['apple', 'banana', 'apricot', 'blueberry'], (item) => item[0]));