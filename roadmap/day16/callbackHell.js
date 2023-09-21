function firstTask(callback) {
    console.log('starting first task');
    setTimeout(() => {
        console.log('first task is completed!');
        callback();
    }, 2000);
}

function secondTask(callback) {
    console.log('staring second task');
    setTimeout(() => {
        console.log('second task is completed!');
        callback();
    }, 2000);
}

function thirdTask(callback) {
    console.log('starting third task');
    setTimeout(() => {
        console.log('third task is completed!');
        callback();
    }, 2000);
}

// callback hell or pain of callback
firstTask(function () {
    secondTask(function () {
        thirdTask(function () {
            console.log('all the tasks are completed!');
        });
    });
});

/*
    firstTask();

    firstTask():
        callback = function () {
            secondTask();
        }

    secondTask():
        callback = function () {
            thirdTask();
        }
    
    thirdTask():
        callback = function () {
            console.log('all the tasks are completed!');
        }
*/