/*
    For a pair of strings to be Anagram, both must be the same length and contains the same amount of characters.
    One way to go about solving this problem is to store the first string into an object and count the number of times each alphabet appears
    1. Check if the length of both strings matches each other
        1.1 Return false if condition not met, else return true
    2. Loop over the first string and store each item in the iteration into an object and watch for it's number of appearance.
    3. Loop over the second string. At each index, check to see if that item in the loop is contained within the object we created earlier
        3.1 If true, decrement the count in the object by one, else return false
    4. Return true after the second loop exhausted every items in the second string
*/

/*
    Time complexity: O(N)
    Space complexity: O(1) We're only looking at the lowercased alphabet characters according to Leetcode's test suites
*/

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const sCharCount = {}
    
    for(let i = 0; i < s.length; i++) {
        const sChar = s[i];
        sCharCount[sChar] = sCharCount[sChar] + 1 || 1;
    }
    
    for(let i = 0; i < t.length; i++) {
        const tChar = t[i];
        if(!sCharCount[tChar]) {
            return false;
        }
        else {
            sCharCount[tChar]--
        }
    }
    return true;
};