class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // Thêm node vào cuối
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Xóa node cuối và trả về node đó
    pop() {
        if (this.length === 0) return undefined;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // Xóa node đầu và trả về node đó
    shift() {
        if (this.length === 0) return undefined;
        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        currentHead.next = null;
        return currentHead;
    }

    // Thêm node vào đầu
    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Lấy node theo index
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // Cập nhật giá trị node theo index
    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    // Xóa node theo index và trả về node đó
    delete(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const prev = this.get(index - 1);
        const deleted = prev.next;
        prev.next = deleted.next;
        deleted.next = null;
        this.length--;
        return deleted;
    }

    // In danh sách ra array để debug
    printList() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

// ======= Test =======
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.unshift(0);
console.log(myLinkedList.printList()); // [0,1,2,3]

myLinkedList.pop();
console.log(myLinkedList.printList()); // [0,1,2]

myLinkedList.shift();
console.log(myLinkedList.printList()); // [1,2]

myLinkedList.set(1, 99);
console.log(myLinkedList.printList()); // [1,99]

myLinkedList.delete(0);
console.log(myLinkedList.printList()); // [99]
