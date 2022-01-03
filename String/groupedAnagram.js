/*
    The approach to this problem is similar to the regular anagram problem.  We're still using object to check for the item we're looking for
    KEY NOTE: To find the grouped anagram, all we need to know is if the item we're currently looking at contains the same amount of alphabet letters that we're looking for

    Example: ['item', 'emit', 'mite', 'time']
    Each of these words contains the letters ['e', 'i', 'm', 't'] when you sort them
    They key is to loop through the given array. For each item, dissect it, sort it, and put it back together. Then store it in a object container
    For the rest of the item in the list, we will check if each word contains the same amount of item
*/
/*

    strs = ["eat","tea","tan","ate","nat","bat"]
    grouped = {
        aet: ["ate","eat","tea"],
        ant: ["nat","tan"],
        abt: ["bat"]
    }
    
*/

var groupAnagrams = function(strs) {
    let grouped = {}
    for(let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word.split('').sort().join(); // Take each word, split into an array of letters, sort alphabetically, and join back to a word
        if(!grouped[key]) {
            grouped[key] = []
        }
        grouped[key].push(word);
    }
    return Object.values(grouped)
};