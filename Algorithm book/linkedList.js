function Node(element) {
    this.element = element;
    this.next = null;
}

function linkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    // this.remove = remove;
    this.display = display;

    function find(item) {
        let currNode = this.head;
        while(currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /*
        In order to add a node to the list, we need to know which position we're adding the item
        A -> B -> C -> null
        INSERT D after C
        A -> B -> C -|  -x-> null
                     |        ^
                      -> D ---|
    */
    function insert(newItem, item){
        let newNode = new Node(newItem);
        let current = this.find(item);
        newNode.next = current.next; // newNode is pointing to null or the current node's next value
        current.next = newNode; // current node is now pointing to the newNode
    }

    function display() {
        let currNode = this.head;
        while(currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next
        }
    }

    function prevItem(element) {
        let currNode = this.head;
        while(!(currNode.next == null) && (currNode.next.element != element)){
            currNode = currNode.next;
        }
        return currNode;
    }

    function remove(element) {
        let prevNode = this.prevItem(element);
        if(prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }

    }
}


const LL = new linkedList();

LL.insert("Jack", "head")
LL.insert("John", "Jack")
LL.insert("James", "John")
LL.display()

