class List {
    constructor () {
      this._list = new Array(4);
      // this is the next index available for entry insertion
      this._currentFreeIndex = 0;
    }
  
    /**
     * Doubles the size of the list
     */
    _doubleListSize () {
      const newList = new Array(this.length * 2);
  
      // copy elements in list to new list
      for (let i = 0; i < this._currentFreeIndex; i++) {
          newList[i] = this._list[i];
      }
  
      this._list = newList;
    }
  
    /**
     * Validates list index
     * 
     * @param {Number} n index to validate
     * @returns {boolean}
     */
    _validateIndex (n) {
      const numberRegx = new RegExp(/^[0-9]*/);
      if (!numberRegx.test(n) || n < 0 || n >= this.length) {
        throw Error(`index: ${n} is invalid or out of range`);
      }
  
      return true;
    }
  
    /**
     * Returns the length of the list
     */
    get length () {
        // since index is zero based, the current free index is the size of the list
        return this._currentFreeIndex;
    }
  
    /**
     * Returns all entries in the list
     * 
     * @returns {Array}
     */
    entries () {
      let result = new Array(this.length - 1);
      for (let i = 0; i < this.length; i++) {
        result[i] = this._list[i];
      }
  
      return result;
    }
  
    /**
     * Adds element to the end of the list
     * @param {*} ele element to add
     * @param {Number} n index to add element  (optional)
     */
    add (ele, n) {
      if (n !== undefined) {
          this._validateIndex(n);
      }
  
      const indx = n !== undefined ? n : this._currentFreeIndex;
      
      if (indx === this._list.length) {
        this._doubleListSize();
      }
      
      let end = this._currentFreeIndex;
  
      while (end > indx) {
          // move _list before n one step back
          this._list[end] = this._list[end-1];
          end -= 1;
      }
      
      this._list[indx] = ele;
      this._currentFreeIndex += 1;
    }
  
    /**
     * Returns element at a specific index
     * @param {Number} n index of element to return
     * @returns {*}
     */
    get (n) {
      this._validateIndex(n);
  
      return this._list[n];
    }
  
    /**
     * Removes element at a specific index
     * 
     * @param {Number} n index of element to remove
     * @returns {*}
     */
    remove (n) {
      this._validateIndex(n);
  
      const elementToRemove = this._list[n];
      let i = n;
  
      while (i < this.length) {
          // move all _list after n a step back
          this._list[i] = this._list[i+1];
          i += 1;
      }
      this._currentFreeIndex -= 1;
  
      return elementToRemove;
    }
  
    /**
     * Reverses the list
     */
    reverse () {
      let start = 0;
      let end = this.length - 1;
  
      while (start < end) {
          // swap the start with end
          [this._list[start], this._list[end]] = [this._list[end], this._list[start]];
  
          start += 1;
          end -= 1;
      }
    }
  
    /**
     * Returns all elements between start & end (inclusive) in the list
     * 
     * @param {Number} start 
     * @param {Number} end 
     * @returns {List} sliced list
     */
    slice (start, end) {
      this._validateIndex(start);
      this._validateIndex(end);
  
      const slicedList = new List();
  
      for (let i = start; i <= end; i++) {
          slicedList.add(this._list[i]);
      }
  
      return slicedList;
    }
  
    /**
     * Sorts list in place
     * 
     * @param {Function} compareFunction - function to sort the list (a, b) => number
     */
    sort (compareFunction) {
      this._list.sort(compareFunction);
    }
}
