// /**
//  * @param {number} totalCandies
//  * @param {number[]} candies
//  * @param {number} i
//  * @return {boolean}
//  */
// // Time Complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     // make an assumption
//     let assumption = true;

//     // iterate the candies array except the index i <- index
//     for(let index=0; index<candies.length; index++){
//         // except the index i
//         if(index != i){
//             // check if the totalCandies is less than the candies[index]
//             if(totalCandies < candies[index]){
//                 // update the assumption
//                 assumption = false;
//             }
//         }
//     }

//     // return the assumption
//     return assumption;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// // time complexity = O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // 1. create a boolean empty array <- result
//     let result = [];
//     // 2. iterate/traverse the candies array <- i
//     for(let i=0; i<candies.length; i++){
//         // 3. for every element in the candies array
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;
//         // 4. check and compare if the totalCandies is greater than or equal to
//         // all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else if false => push false to the result array
//             result.push(false);
//         }
//     }
//     // 5. return the result array
//     return result;
// };      
// ---------------------------------------------------------------------------------------------
// Time Complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//             }
//         }
//     }
//     return assumption;
// }

// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 assumption = false;
//                 break;
//             }
//         }
//     }
//     return assumption;
// }

// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             assumption = false;
//             break;
//         }
//     }
//     return assumption;
// }

// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(totalCandies < candies[index]){
//             return false;
//         }
//     }
//     return true;
// }

// var isGreater = function(totalCandies, candies, i){
//     candies.forEach((candy) => {
//         if(totalCandies < candy) {
//             return false;
//         }
//     });
//     return true;
// }

// time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     for(let candy of candies){
//         if(totalCandies < candy) return false;
//     }
//     return true;
// }

// time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     for(let candy of candies){
//         if(totalCandies < candy) return false;
//     }
//     return true;
// }

// var isGreater = function(totalCandies, candies){
//     let count = 0;

//     for(let candy of candies){
//         if(totalCandies >= candy) count++;
//     }

//     if(count == candies.length){
//         return true;
//     } else {
//         return false;
//     }
// }

// time complexity: O(N)
// var isGreater = function(totalCandies, candies){
//     let count = 0;
//     for(let candy of candies){
//         if(totalCandies >= candy) count++;
//     }
//     return count === candies.length;
// }

// // time complexity = O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(isGreater(totalCandies, candies)){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };      

// ---------------------------------------------------------------------------------------------

// // time complexity = O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         let greatestCandy = Math.max(...candies);
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };   

// // time complexity = O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };   

// ---------------------------------------------------------------------------------------------

// // time complexity = O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };   

// // time complexity = O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// }; 

// // time complexity = O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => {
//         result.push(candy + extraCandies >= greatestCandy);
//     });
//     return result;
// }; 

// // time complexity = O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
//     return result;
// }; 

// // time complexity = O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => candy + extraCandies >= greatestCandy);
//     return result;
// }; 

// // time complexity = O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// }; 

// time complexity = O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
}; 


// ---------------------------------------------------------------------------------------------

/*
    10 objects -> different weights

    from the above 10 objects => find the one which is having a greater weight

    Given an object which has its own weight
*/


/*
    1. Problem Understanding

    candies = [2, 3, 5, 1, 3], extraCandies = 3
            i [0][1][2][3][4]
    

    result = [T, T, T, F, T]
           i [0][1][2][3][4]
    
    Traverse the candies array:
        kid @ index i = 0
            totalCandies = candies[i] + extraCandies
                         = candies[0] + extraCandies
                         = 2 + 3
                         = 5 >= [3, 5, 1, 3]
                                [1][2][3][4]
        
        kid @ index i = 1
            totalCandies = candies[1] + extraCandies
                         = 3 + 3
                         = 6 >= [2, 5, 1, 3]
                                [0][2][3][4]
        
        kid @ index i = 2
            totalCandies = candies[2] + extraCandies
                         = 5 + 3
                         = 8 >= [2, 3, 1, 3]
                                [0][1][3][4]
        
        kid @ index i = 3
            totalCandies = candies[3] + extraCandies
                         = 1 + 3
                         = 4 >= [2, 3, 5, 3]
                                [0][1][2][4]
        
        kid @ index i = 4
            totalCandies = candies[4] + extraCandies
                         = 3 + 3
                         = 6 >= [2, 3, 5, 1]
                                [0][1][2][3]
    
    2. Algorithm

    a. create a boolean empty array <- result

    b. iterate/traverse the candies array <- i
        c. for every element in the candies array
        find the totalCandies = candies[i] + extraCandies

        d. check and compare if the totalCandies is greater than or equal to
        all the other kids candies
        if true => push true to the result array
        else if false => push false to the result array
    
    e. return the result array
*/