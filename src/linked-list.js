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

        return this;
    }

    head() { 
        return this._head == null ? null : this._head.data; 
    }

    tail() { 
        return this._tail == null ? null : this._tail.data;
    }

    move(index) {
        var current = this._head;
        var position = 0;

        while (position < index) {
            current = current.next;
            position++;
        }
        return current;
    }

    at(index) {
        var current = this.move(index);
        return current.data;
    }

    insertAt(index, data) {
        if (this.length == 0) {
            this.append(data);
        }
        else {
            var current = this.move(index);
            var newNode = new Node(data, current.prev, current);
            current.prev = newNode;
            current.prev.prev.next = newNode;
        }
        return this;
    }

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if(this.length == 1){
            this.clear();
        }
        else {
            var current = this.move(index);
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        return this;
    }
    

    reverse() {
        for (var i = 0; i < this.length/2; i++) {
            var first = this.move(i);
            var last = this.move(this.length-1-i);
            var tmp = first.data;
            first.data = last.data;
            last.data = tmp;
        }
        return this;
    }

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
