const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        if (this._head == null) {
            var newNode = new Node(data);
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            var newNode = new Node(data, this._tail);
            this._tail.next = newNode;
            this._tail = newNode;
        }
        this.length++;  
    }

    head() { 
        return this._head.data; 
    }

    tail() { 
        return this._tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
