/**
 * Linked list node
 * @param  {} value
 */
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}
/**
 * Linked List class
 */
class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    /**
     * adds item at a specified position in the list
     * 
     * @param  {number} n - position to add value
     * @param  {*} value - item to add
    */
    addAtPosition(n, value) {
        if (n < 1 || n > this.size) {
            throw Error("no such position");
        }

        let i = 1;
        let prevNode = null;
        let currentNode = this.head;
        
        // find the node at position n
        while (i < n) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            i += 1;
        }

        const newNode = new Node(value);
        newNode.next = currentNode;

        // if prevNode is null then we are adding to the front
        if (prevNode === null) {
            this.head = newNode;
        } else {
            prevNode.next = newNode;
        }

        this.size += 1;
    }
    
    /**
     * adds an item to the front of the list
     * @param  {*} value - item to add
    */
    addFirst (value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        
        this.size += 1;
    }

    /**
     * adds an item to the back of the list
     * @param  {*} value - item to add
     */
    addLast (value) {
        if (this.head === null) {
            this.addFirst(value);
            return;
        }

        let i = 1;
        let currentNode = this.head;

        while (i < this.size) {
            currentNode = currentNode.next;
            i += 1;
        }

        const newNode = new Node(value);
        currentNode.next = newNode;

        this.size += 1;
    }

    /**
     * removes an item at a specified position in the list
     * @param  {number} n - position of item to remove
     * @returns {*} removed item
     */
    removeAtPosition (n) {
        if (n < 1 || n > this.size || this.head === null) {
            return null;
        }

        let prevNode = null;
        let currentNode = this.head;
        let i = 1;

        // find the node at position n
        while (i < n) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            i += 1;
        }
        
        // if prevNode is null then we are removing the head
        if (prevNode === null) {
            this.head = currentNode.next;
        } else  {
            prevNode.next = currentNode.next;
        }

        this.size -= 1;
    
        return currentNode.value;
    }

    /**
     * removes the first item in the list
     * @returns {*} removed item
     */
    removeFirst () {
      return this.removeAtPosition(1);
    }

    /**
     * get item from a specified position in the list
     * @param {number} n - position of item to retrieve
     * @returns {*} retrieved item
     */
    getAtPosition (n) {
        if (n < 1 || n > this.size || this.head === null) {
            return null;
        }

        let currentNode = this.head;
        let i = 1;

        // find the node at position n
        while (i < n) {
            currentNode = currentNode.next;
            i += 1;
        }
    
        return currentNode.value;
    }
}
