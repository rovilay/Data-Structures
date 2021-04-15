class Node {
    constructor (value)  {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * adds an item to the front of the list
     * @param  {*} value - item to add
    */
    addFirst (value) {
        const newHead = new Node(value);

        newHead.next = this.head;

        if (this.head !== null) {
            this.head.prev = newHead;
        }

        this.head = newHead;

        if (this.tail === null) {
            this.tail = newHead;
        }

        this.size += 1;
    }

    /**
     * adds an item to the back of the list
     * @param  {*} value - item to add
    */
    addLast (value) {
        if (this.tail === null) {
            this.addFirst(value);
            return;
        }

        const newTail = new Node(value);
        newTail.prev = this.tail;
        this.tail.next = newTail;
        this.tail = newTail;

        this.size += 1;
    }
    
    
    /**
     * adds an item to any position in the list
     * @param  {number} n - position of new item
     * @param  {*} value - new item
     */
    addAtPosition (n, value) {
        if (n < 1 || n > this.size) {
            throw Error("no such position");
        }
        
        
        if (n === 1) {
            this.addFirst(value);
            return;
        }
        
        
        let i = 1;
        let currentNode = this.head;
        
        while (i < n) {
            currentNode = currentNode.next;
            i += 1;
        }
        
        const newNode = new Node(value);
        const prevNode = currentNode.prev;

        newNode.prev = prevNode;
        newNode.next = currentNode;
        prevNode.next = newNode;
        currentNode.prev = newNode;

        this.size += 1;
    }

    /**
     * removes the first item in the list
     * @returns {*} removed item
     */
    removeFirst () {
        if (this.head === null) {
            return null;
        }

        const nodeToRemove = this.head;
        this.head = this.head.next;

        // remove previous if head is not null
        if (this.head !== null) {
            this.head.prev = null;
        }

        // remove tail if only one item in the list
        if (this.size === 1) {
            this.tail = null;
        }

        this.size -= 1;

        return nodeToRemove.value;
    }

    /**
     * removes the last in the list
     * @returns {*} removed item
     */
    removeLast () {
        if (this.size <= 1) {
            return this.removeFirst();
        }

        const nodeToRemove = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        
        this.size -= 1;

        return nodeToRemove.value;
    }
    
    /**
     * removes an item at any position in the list
     * 
     * @param  {number} n - position of item to remove
     * @returns {*} removed item
     */
    removeAtPosition (n) {
        if (n < 1 || n > this.size) {
            return null;
        }

        if (n === 1) {
            return this.removeFirst();
        }

        if (n === this.size) {
            return this.removeLast();
        }

        let i = 1;
        let nodeToRemove = this.head;

        while (i < n) {
            nodeToRemove = nodeToRemove.next;
            i += 1;
        }

        const prevNode = nodeToRemove.prev;
        const nextNode = nodeToRemove.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.size -= 1;

        return nodeToRemove.value;
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

        if (n === this.size) {
            return this.tail.value;
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

export default DoublyLinkedList;
