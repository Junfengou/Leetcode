/*
    
*/

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.isEmpty = isEmpty;

    function front() {
        return this.dataStore[0]
    }

    function back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    function enqueue(element) {
        // this.dataStore[this.dataStore.length++] = element
        this.dataStore.push(element)
    }

    function dequeue() {
        this.dataStore.shift()
    }

    function toString() {
        let resultQueue = ""
        for(let i = 0; i < this.dataStore.length; i++) {
            resultQueue += this.dataStore[i] + "\n"
        }
        return resultQueue;
    }

    function isEmpty() {
        return this.dataStore.length == 0 ? true : false;
    }
}

const newQueue = new Queue();
newQueue.enqueue(10)
newQueue.enqueue(20)
newQueue.enqueue(30)
newQueue.dequeue()
console.log(newQueue.isEmpty());

