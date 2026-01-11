function iterativeFibonacci(num) {
    let prevNum = 0;
    let accumulator = 1;
    const fibArray = [];

    for (let i = 0; i < num; i++) {
        fibArray[i] = prevNum;
        accumulator = accumulator + prevNum;
        prevNum = accumulator - prevNum;
    }

    return fibArray;
}

function recursiveFibonacci(num, array = [], prevNum = 0, accumulator = 1) {
    array.push(prevNum);
    accumulator = accumulator + prevNum;
    prevNum = accumulator - prevNum;
    if (num > array.length) {
        return recursiveFibonacci(num, array, prevNum, accumulator);
    }
    return array;
}

console.log(iterativeFibonacci(0)); // Output: []
console.log(iterativeFibonacci(1)); // Output: [0]

console.log(iterativeFibonacci(13)); // Output: [0,  1,  1,  2,  3,  5, 8, 13, 21, 34, 55, 89, 144]

export { iterativeFibonacci, recursiveFibonacci };
