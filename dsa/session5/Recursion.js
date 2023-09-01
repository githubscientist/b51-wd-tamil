/*
    Recursion: a function that calls itself.!
*/

// iterative way
// for (let i = 1; i <= 5; i++){
//     console.log('hello');
// }

// function sayHello(N) {
//     for (let i = 1; i <= N; i++){
//         console.log('hello');
//     }
// }

// sayHello(3);

// recursive way
// function sayHello() {
//     console.log('hello');
//     sayHello(); // recur
// }

// sayHello();

// function sayHello(N) {
//     if (N == 0) return;

//     console.log('hello');
//     sayHello(N-1); 
// }

// sayHello(4);

/*
    Recursion Tree

    sayHello(4)
        - N = 4; 4 == 0; false
        - console.log('hello')
        - sayHello(3)
            - N = 3; 3 == 0; false
            - console.log('hello')
            - sayHello(2)
                - N = 2; 2 == 0; false
                - console.log('hello')
                - sayHello(1)
                    - N = 1; 1 == 0; false
                    - console.log('hello')
                    - sayHello(0)
                        - N = 0; 0 == 0; true; return

    sayHello(4)
*/

// function sayHello(N) {
//     if (N == 0) return;

//     console.log('hello');
//     sayHello(N-1); 
// }

// sayHello(4);

// function sayHello(N) {
//     if (N == 0) return;

//     console.log(N);
//     sayHello(N-1); 
// }

// sayHello(3);

/*
    Output:

    Input: 4
    Output: 
    4
    3
    2
    1

    Input: 3
    Output:
    3
    2
    1
*/

function sayHello(N) {
    if (N == 0) return;

    sayHello(N - 1); 
    console.log(N);
}

sayHello(5);

/*
    sayHello(5)

    sayHello(5)
        - N = 5; 5 == 0; false
        - sayHello(4)
            - N = 4; 4 == 0; false
            - sayHello(3)
                - N = 3; 3 == 0; false
                - sayHello(2)
                    - N = 2; 2 == 0; false
                    - sayHello(1)
                        - N = 1; 1 == 0; false
                        - sayHello(0)
                            - N = 0; 0 == 0; true
                        - console.log(N) x
                    - console.log(N) x
                - console.log(N) x
            - console.log(N) x
        - console.log(N) x
*/