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
    get(index) {
        return this.data[index];

    }
    pop()
    {   
        delete this.data[this.length - 1];
        this.length--
        return this.length;
    }
    shift() {
        
        if (this.length === 0) return undefined;
        const firstItem = this.data[0];
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length-1]
        this.length--;
        return firstItem;
}
delete(index) {
     if (index < 0 || index >= this.length) return undefined;
    const item = this.data[index];
     for (let i = index; i < this.length - 1; i++) {
         this.data[i] = this.data[i + 1];
     }
     delete this.data[this.length - 1];
     this.length--;
     return item;
}}


const myNewArray = new MyArray();
console.log(myNewArray);
myNewArray.push('hi')
myNewArray.push('hoi')
myNewArray.push('lam')
myNewArray.push('gi')
  myNewArray.push('ha')

console.log(myNewArray.get(2))
console.log(myNewArray);

// myNewArray.pop()
// myNewArray.shift()
console.log(myNewArray.delete(1));
console.log(myNewArray);

