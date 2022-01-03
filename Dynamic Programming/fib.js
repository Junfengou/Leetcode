
// https://www.youtube.com/watch?v=oBt53YbR9Kk
// 38:32

/*
    Time complexity: O(2^n)
    Space complexity: O(N)

    This solution is not a big deal if we're only dealing with small number set for [n]
    But what if [n = 50]?
        the total stack calls to calculate this problem becomes 12,586,269,025 times
    This is a huge headache and it will slow down the problem
*/
const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}


/*
    One way to get around this issue is to utilize Dynamic Programming Techniques called Memoization
    - The goal of memoization is to store a duplicate  sub-problem to use later on
    - To achieve this, we need to use some sort of fast access data structure 
    - In Javascript, we can use object key:value pair

    Time complexity: O(N)
    Space complexity: O(N)
*/

// Dynamic programming approach
const fib = (n, memo = {}) => {
    // If n exist in memo, we will return the value of that key
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
} 