class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;

    }
    add(item) {
        let node = new Node(item);
        if (this.first === null) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
        }
    }
    updateAll(item, replacement) { //
        console.log(this)
        let node = this.first;
        if (node.value === null) {
            return;
        }
        while (node.next) { //?
            if (item === node.value) {
                this.item = replacement
                node = node.next;
            }
        }
        return this;

    }
}
let list = new LinkedList();
arr = [3, 6, 5, 8, 5, 3, 5, 8, 3];
for (const item of arr) {
    list.add(item)
}
console.log(list.updateAll(3, 2))// 2, 6, 5, 8, 5, 2, 5, 8, 2