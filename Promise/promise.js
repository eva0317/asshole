// Promises handle asynchronous results by representing a value
// that may be available now, later, or never.

//the term new is indicating that we are placing a new promise in the memory(ram)
//in promise only resolve and reject are the parameters that are accepted
const operationPromise = new Promise((resolve, reject) => {
    const sum = 1 + 1;
    if (sum === 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

    //.then is used when it is resolved
    //.then can be used multiple times
    //.catch is used when it is rejected
    //.finally is used when it is resolved or rejected (doesn't matter the result it has to be executed)
    //.then and .catch are the only two methods that are used with promise
operationPromise
    .then((message) => {
        console.log("This is in the then " + message);
    })
    .catch((message) => {
        console.log("This is in the catch " + message);
    })
    .finally(() => {
        console.log("doesn't matter the result it has to be executed");
    });