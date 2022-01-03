
// page 51

// Stack follows the LIFO (Last In First Out) pattern
/* Key Note: In Stack, we really only care about the top most item at any given time.
    Unlike an array or list, user is only allowed to access one item at a time. The order of accessing item matters. 
    Add to stack -> Always append it to the end
    Remove from stack -> Always remove the last item 
*/
function Stack() {
    this.dataStore = [];
    this.top = 0; // this variable will also include total number of items currently in the stack
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;

    function push(element) {
        this.dataStore[this.top++] = element;
    }

    function pop() {
        return this.dataStore[--this.top];
    }

    // Array index starts at 0
    function peek() {
        return this.dataStore[this.top - 1];
    }

    function length() {
        return this.top;
    }

    function clear() {
        return this.top = 0;
    }
}



const newStack = new Stack();
let num = 32
let base = 2
newStack.push(5);
newStack.push(10)
newStack.push(15)
newStack.pop();
// console.log(newStack.peek());


/*
    With stack approach, we're essentially reversing the string with stack by using FILO style instead of directly calling the string function and reverse it
    1. Create a new stack object
    2. Loop over the incoming data. For each item in the string, push it onto the stack
    3. Create a new variable to store the reversed string
    4. As long as there is items inside the stack, we want to continue to pop() the last item out and store it in the reverse string variable
    5. Compare the reversed string variable with the initial incoming data to determine if the two items match or not.
*/
function isPalindrome(word) {
    const wordStack = new Stack();
    for(let i = 0; i < word.length; i++) {
        wordStack.push(word[i])
    }
    let reverseWord = "";

    while(wordStack.length() > 0) {
        reverseWord += wordStack.pop();
    }
    return word === reverseWord ? true : false;
}

// console.log(isPalindrome("racecar"));


/*
    Stack can also be used to solve recursive solutions. Although it's not as easy to read nor is it efficient. 
    1. Create a stack object
    2. Use a while loop to determine if the factorial number is bigger than 0. In each iteration. If true, push that item onto the stack and decrement by 1
    3. Create a variable to store the result
    4. As long as the stack is not empty, we want to continue to pop() the last item out and multiply by the current result
    5. Return the result;
*/
function factorial(n) {
    // 5! = 5 * 4 * 3 * 2 * 1 = 120
    const numStack = new Stack();
    while(n > 1) {
        numStack.push(n);
        n--;
    }
    let result = 1;
    while(numStack.length() > 0) {
        result *= numStack.pop();
    }
    return result;
}

console.log(factorial(5));