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
        return this._head == null ? null : this._head.data; 
    }

    tail() { 
        return this._tail == null ? null : this._tail.data;
    }

    at(index) {
        var current = this._head;
        var position = 0;

        if (index < this.length) {
    
        while (position < index) {
            current = current.next;
            position++;
        }
        return current.data;
    }
      return "Error";
    }

    insertAt(index, data) {}

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
    }

    deleteAt(index) {
        var current = this._head;
        var position = 0;

        if (index < this.length) {
    
        while (position < index) {
            current = current.next;
            position++;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
    }
      return "Error";
    }
    

    reverse() {}

    indexOf(data) {
        var current = this._head;
        var position = 0;
    
        while (current.data != data) {
            current = current.next;
            position++;
        }
        return position;
    }
    
}

module.exports = LinkedList;
