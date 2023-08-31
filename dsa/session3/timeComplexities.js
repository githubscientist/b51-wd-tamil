/*
    O(2^N)

    Problem: Given an array of values, find in how many ways we can select the values from the array and output each way.

    Input: [1, 2, 3]
    Output: 

    0 values => ()
    1 values => (1), (2), (3)
    2 values => (1, 2), (1, 3), (2, 3)
    3 values => (1, 2, 3)

    Number of ways => 8 ways 
    Executions => 8

    Input: [1, 2, 3, 4]
    Output:

    0 values => ()
    1 values => (1), (2), (3), (4)
    2 values => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    3 values => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
    4 values => (1, 2, 3, 4)

    Number of ways => 16 ways
    Executions => 16

    N = 3, executions = 8
    N = 4, executions = 16
    N = 5, executions = 32

    time complexity, T(N) = O(2^N)
*/

/*
    O(N!)

    Problem: Given a string S, find how many ways we can re-arrange the characters to form a new string and output those strings.

    Input: abc
    Output:

    abc
    acb
    bac
    bca
    cab
    cba

    executions = 6

    Input: ab
    Output:

    ab
    ba

    executions = 2

    Input: abcd
    Output:

    abcd
    abdc
    acdb
    adbc
    badc
    bcda
    bacd
    cabd
    cbda
    cdba
    cabd
    cdab
    ....
    ....

    N = 2, executions = 2
    N = 3, executions = 6
    N = 4, executions = 24
    N = 5, executions = 120

    N! = N * N-1 * N-2 * N-3 * .... * 1
    5! = 5 * 4 * 3 * 2 * 1 = 120

    time complexity, T(N) = O(N!)

*/