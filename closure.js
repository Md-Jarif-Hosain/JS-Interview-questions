function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
};

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());


const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());

//closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope