import DoublyLinkedList from '../Linkedlist/doubly';

class Queue {
    constructor () {
        this._list = new DoublyLinkedList();
    }

    /**
     * returns size of the queue
     * @returns {number}
     */
    get size () {
        return this._list.size;
    }

    /**
     * adds item to the front of the queue
     * @param {*} value - item to add
     */
    enqueue (value) {
        this._list.addFirst(value);
    }

    /**
     * removes item from the front of the queue
     * @returns {*} removed item
     */
    dequeue () {
        return this._list.removeFirst();
    }

    /**
     * returns item at the front of the queue
     * @returns {*} item
     */
    peek () {
        return this._list.getAtPosition(1);
    }
}
