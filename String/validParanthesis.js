/*
    The easiest way to solve this problem is to use Stack technique.
        1. Create an array to simulate a stack
        2. Create a pre-populated object that contains all the open brackets
        3. Run a for loop with the given string of paranthesis
            3.1 For each item, we will check and see if that item is in the pre-populated object
                3.1.1 If true, we will push the item onto the stack
            3.2 If the current item in the loop is a close bracket, we will shift our attention to the stack itself
                3.2.1 Pop off the first item on the top of the stack
                3.2.2 Check to see if that item that we popped off is in the object. If so, grab the value of that item in the object and compare to the current item we're looking at.
                3.2.3 If the item doesn't match, then we know for sure that the item we're currently looking at is not a valid item. We can return false and break out the loop.
        4. It is still possible that the stack still contains something even after the loop has been exhausted. We want to hard reset the length of the stack to 0;
*/

var isValid = function(s) {
    let stack = [];
    let hashMap = {
        '(' : ')',
        '[': ']',
        '{': '}'
    }
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(hashMap[char]) {
            stack.push(char)
        }
        // We only hit this else if condition if the current item in the loop is a close bracket or paranthesis
        // Whatever is on the top of the stack, check to see if it's the left half for the current character
            // If the answer is no, we know it's not a valid string right away
        else if(hashMap[stack.pop()] !== char){
            return false;
        }
    }
    // If the for loop finishes but never returns false, the stack could still contains item.
    // In this case, we will hard reset the length of the stack to 0
    return stack.length === 0;
};