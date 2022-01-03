/*
   Mirror approach are also known as the sliding window approach 
    For problem like this, we can use what'a called mirror approach
        For example: LOOL
        first part of this string [LO] is the direct mirror of [OL] 
            they are not identical, but they are mirror of each other
        
    Pseudocode:
        1. Sanitize the input string by removing non alphanumeric characters and lowercase everything
        2. Create a left and a right pointer, initially at the start and end of the input
        3. while left less than right
            if the character at left and right pointer are not equal, return false,
        return true
        
*/

/*
    Time complexity: O(N)
    Space complexity: O(1) Left and Right pointer takes up constant space
*/
var isPalindrome = function(s) {
    const regex = /[\W_]/g;
    const sanitizedStr = s.replace(regex, "").toLowerCase();
    
    let leftPointer = 0;
    let rightPointer =sanitizedStr.length - 1;
    
   while(leftPointer < rightPointer) {
       if(sanitizedStr[leftPointer] !== sanitizedStr[rightPointer]) {
           return false;
       }
       leftPointer++;
       rightPointer--;
   }
    return true;
};

/*
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
*/

/*
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
*/

/*
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
*/