/*
    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm
        - time complexity
        - space complexity

    time complexity => amount of time taken by an algorithm to run!

    space complexity => amount of space taken by an algorithm to run!

    -------------------- time complexity

    Mathematical Notations: Asymptotic Notations

    1. Big - 'O' (Big Oh)
    2. Big - 'Ω' (Big Omega)
    3. Big - 'Θ' (Big Theta)

    -------------------- Big - 'O' Notation

    Situations/Cases : (Inputs)

    1. Worst Case
    2. Best Case
    3. Average Case

    --------------------- Worst Case situation

    Example:

    Algorithm : Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Case (first element): If the key = 1, Comparions => 1 => Best Case => O(1) - abbr: order of 1
    Case (middle element): If the key = 5, Comparisons => 5 => Average Case => O(N/2) => O(N)
    Case (last element): If the key = 10, Comparisons => 10 => Worst Case => O(N)
    Case (element not present): If the key = 11, Comparisons => 10 => Worst Case => O(N)


*/

/*
    Example 1:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Answer: O(N)

    Solution:

    let a = 0, b = 0; // declarations, conditionals, expressions, assignments
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    => total executions = values of i
    i = 0, 1, 2, 3, 4, 5, 6..., N-1 => N

    for (j = 0; j < M; j++) {
        b = b + rand();
    }
    => total executions = values of j
    j = 0, 1, 2, 3, 4, 5 ,...., M-1 => M

    total time complexity, T(N, M) = 1 + N + M
                                   = N + M (Since 1 is a constant)
                                   = O(N + M)
*/

/*
    Example 2:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    time complexity = 1 + N + N
                    = N + N
                    = 2 * N
                    = O(N)
*/

/*
    Example 3:

    let a = 0, b = 0;
    let M = 5N;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    time complexity = 2 + N + 5N
                    = N + 5N
                    = 6N
                    = O(N)
*/

/*
    Example 4:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    time complexity = 1 + N * N
                    = N * N
                    = O(N^2)
    
    Second Way:

    1. Assume some random values for N

    N = 4, executions = ?
        i = 0; j = 0, 1, 2, 3 => 4 executions
        i = 1; j = 0, 1, 2, 3 => 4 executions
        i = 2; j = 0, 1, 2, 3 => 4 executions
        i = 3; j = 0, 1, 2, 3 => 4 executions

        total executions = 4 + 4 + 4 + 4 = 16

    N = 5, executions = ?
        i = 0; j = 0, 1, 2, 3, 4 => 5 executions
        i = 1; j = 0, 1, 2, 3, 4 => 5 executions
        i = 2; j = 0, 1, 2, 3, 4 => 5 executions
        i = 3; j = 0, 1, 2, 3, 4 => 5 executions
        i = 4; j = 0, 1, 2, 3, 4 => 5 executions 

        total executions = 5 + 5 + 5 + 5 + 5 = 25
    N = 6, executions = ?

    2. Summarize and find the relationship

    N = 4, executions = 16
    N = 5, executions = 25
    N = 6, executions = 36

    For the given N, executions = N^2

    3. calculate the total time complexity

    T(N) = 1 + N^2
         = O(N^2)
*/

/*
    Example 5:

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Answer:

    N = 4
        i = 0; j = 4, 3, 2, 1 => 4 executions
        i = 1; j = 4, 3, 2 => 3 executions
        i = 2; j = 4, 3 => 2 executions
        i = 3; j = 4 => 1 execution

        total executions = 4 + 3 + 2 + 1 = 10
    N = 5
        i = 0; j = 5, 4, 3, 2, 1 => 5 executions
        i = 1; j = 5, 4, 3, 2 => 4 executions
        i = 2; j = 5, 4, 3 => 3 executions
        i = 3; j = 5, 4 => 2 executions
        i = 4; j = 5 => 1 execution

        total executions = 5 + 4 + 3 + 2 + 1 = 15
    N = 6
        total executions = 21

    
    N = 4, executions = 10
    N = 5, executions = 15
    N = 6, executions = 21

        executions = N + N-1 + N-2 + N-3 + .... + 1
------------------------------------------------------------
        S(N) = N + N-1 + N-2 + N-3 + ....3 + 2 + 1
        S(N) = 1 + 2 + 3 + .... + N-3 + N-2 + N-1 + N

        2 x S(N) = N+1 + N+1 + N+1 + .... + N+1 + N+1 + N+1
        2 x S(N) = N * (N+1)

                    N * (N+1)
            S(N) = -----------
                        2


    total time complexity, T(N) = 1 + [N * (N+1)]/2
                                = [N * (N+1)]/2
                                = 1/2 * [N * (N+1)]
                                = [N * (N+1)]
                                = N^2 + N
                                = O(N^2)
*/

// let executions = 0;
// for (let i = 1; i <= 3; i++){
//     for (let j = 1; j <= 4; j++){
//         executions++;
//     }
// }

// console.log(executions);

/*
    int i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    Outer loop:

    N = 6, i = 3, 4, 5, 6 => 4 => N/2 + 1
    N = 5, i = 2.5, 3.5, 4.5 => 3 => N/2 + 1

    Inner loop:

    N = 10; j = 2, 4, 8; executions = 3
    N = 29; j = 2, 4, 8, 16; executions = 4
    N = 30; j = 2, 4, 8, 16; executions = 4
    N = 31; j = 2, 4, 8, 16; executions = 4
    N = 40; j = 2, 4, 8, 16, 32; executions = 5

    --------------------------------------------------

    2^X ~= N, Solve for X?

    total time complexity, T(N) = 1 + (N/2 + 1) * log2(N)
                                = (N/2 + 1) * log2(N)
                                = N/2 * log2(N) + log2(N)
                                = N * log2(N) + log2(N)
                                = O(N log2(N))

*/

// console.log(`For N = ${10}, executions = ${Math.log2(10)}`);
// console.log(`For N = ${29}, executions = ${Math.log2(29)}`);
// console.log(`For N = ${30}, executions = ${Math.log2(30)}`);
// console.log(`For N = ${31}, executions = ${Math.log2(31)}`);
// console.log(`For N = ${40}, executions = ${Math.log2(40)}`);