// page 35

// OOP approach
// Instead of class, this is a function that host a collections of functions
// To call these functions within the List(), you must first create an object 

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;

    /*
        1. increase the size of the array
        2. append the item in the last position
    */
    function append(element){
        this.dataStore[this.listSize++] = element;
    }

    /*
        1. use a simple for loop to traverse through the array
        2. check if the targeted element is the same as the current element within the loop
        3. if true, return the indice of the item or return -1 if the item does not exist
    */
    function find(element) {
        for(let i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    /*
        1. find the index of the targeted element by calling the find() to retrieve the index
        2. if the index is within the array range, store it in an variables and run the if statement
        3. use the splice() to remove item in that index and only remove that item
        4. decrease the list size
        5. return true to confirm the function has performed successfully or false if the index of the targeted element does not exist
    */
    function remove(element) {
        // In OOP style, you HAVE to tag [this] onto every single method call. Otherwise you will run into issues. Alot of issues!!
        const index = this.find(element);
        if(index > -1) {
            // The splice() changes the content of the array. splice(start, deleteCount, item1, item2, itemN)
            this.dataStore.splice(index, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    function length() {
        return this.listSize;
    }

    function toString() {
        return this.dataStore;
    }

    /*
        1. determine if [after] index is within the array
        2. if true: increase the list size, call splice(start: index + 1, deleteCount: 0, item1: element), return true;
        3. else: return false;
    */
    function insert(element, after) {
        const index = this.find(after);
        if(index > -1) {
            this.listSize++;
            this.dataStore.splice(index + 1, 0 ,element)
            return true;
        }
        return false;
    }

    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0; // setting both pos and listSize to zero in one line
    }

    function contains(element) {
        const index = this.find(element);
        return index > -1 ? true : false;
    }

    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize - 1;
    }

    // as long as the current position is bigger than 0 [within the list], set it to the previous item
    function prev() {
        if(this.pos > 0) {
            --this.pos;
        }
    }

    function next() {
        if(this.pos < this.listSize - 1) {
            this.pos++;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }
}


const newList = new List();
newList.append(5)
newList.append(10)
newList.append(15)
// newList.remove(10)
newList.insert(30, 15)
newList.end()
// newList.prev()
console.log(newList.getElement())
