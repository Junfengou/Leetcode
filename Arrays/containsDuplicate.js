/*
    The goal of this problem is to return a boolean value at the first sight of duplicate
    If one item appears twice, we don't need to check the rest of the list and just return true 

    1. Create an object to store the item in key:value pair fashion
    2. Loop through the given list and inspect each and every item
    3. For each item, we want to check our container object to see if that item is already in the list
        3.1: If the item is not in the list, store that item in the object as key and assign [true] value to it
        3.2: If that item already exist within the list, then we can break out the loop and directly return true;
    4. If we exhausted the list discovered no duplicate items, we can return false
*/

const containsDuplicate = (nums) => {
    let container = {}; // {1: true, 2:true}
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(container[num]) {
            return true;
        }else {
            container[num] = true;
        }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 2, 4]));