// Promise chaining
new Promise((resolve, reject) => {
    console.log('initial');
    resolve();
})
    .then(() => {
        console.log('do this');
    })
    .catch(() => {
        console.log('do that');
        return Promise.reject();
        // return Promise.resolve();
    })
    .then(() => {
        console.log('do this, no matter what happened before');
        // throw new Error();
        // return Promise.reject();
    })
    .then(() => {
        console.log('execute this too');
    })
    .then(() => {
        console.log('execute this too after');
    })
    .catch(() => {
        console.log('skipped the above thens');
    })