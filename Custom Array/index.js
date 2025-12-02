class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;

        return this.length;

    }
}


const myNewArray = new MyArray();
console.log(myNewArray);
myNewArray.push('hi')
myNewArray.push('hoi')
myNewArray.push('lam')
myNewArray.push('gi')
console.log(myNewArray);