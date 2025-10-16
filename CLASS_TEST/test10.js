function createCallCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(`This function has been called ${count} times.`);
        return count;
    };
}

const myCounter = createCallCounter();

myCounter();
myCounter();
myCounter();