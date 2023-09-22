/*
    Promise States: 3 possible states

        1. Pending: 
            - initial state of the promise. 
            - it means that the promise is not completed yet. 
            - it has neither fulfilled nor rejected.
        
        2. Fulfilled
            - represents the successful completion of the asynchronous operation
            - the returned value can be handled by the callback attached using .then()
        
        3. Rejected
            - represents the failure of the asynchronous operation
            - the returned error can be handled by the callback attached using .then() or catch()
*/