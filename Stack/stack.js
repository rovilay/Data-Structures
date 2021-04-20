import DoublyLinkedList from '../Linkedlist/doubly';

class Stack {
    constructor () {
        this._list = new DoublyLinkedList();
    }

    /**
     * returns size of the stack
     * @returns {number}
     */
    get size () {
        return this._list.size;
    }

    /**
     * adds item to the top of the stack
     * @param {*} value - item to add
     */
    push (value) {
        this._list.addLast(value);
    }

    /**
     * removes item at the top of the stack
     * @returns {*} removed item
     */
    pop () {
        return this._list.removeLast();
    }

    /**
     * returns item at the top of the stack
     * @returns {*} item
     */
    peek () {
        return this._list.tail.value;
    }
}
