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

        while (position < index) {
            current = current.next;
            position++;
        }
        return current.data;
    }

    insertAt(index, data) {
       /* var current = this._head;
        var position = 0;
    
        while (position < index) {
            current = current.next;
            position++;
        }
        return current.data;*/
    }

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
    
        while (position < index) {
            current = current.next;
            position++;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
    }
    

    reverse() {}

    indexOf(data) {
        var current = this._head;
        var position = 0;
    
        while (position < this.length) {

            if (current.data == data){
                return position;
            }
            current = current.next;
            position++;
        }
        
        return -1;
    }
    
}

module.exports = LinkedList;
