function mergeSort(fibArray) {
    // first time check whether parameter has single value
    if (fibArray.length === 1) {
        return fibArray;
    }

    const middle = Math.floor(fibArray.length / 2);
    const firstHalf = fibArray.slice(0, middle);
    const secondHalf = fibArray.slice(middle);

    // when arr of 2 items, is sliced then its already 1 , 1... should return, instead of adding another checker, I use the checker within the next recursion
    const firstBackTrack = mergeSort(firstHalf);
    const secondBackTrack = mergeSort(secondHalf);
    let returningArray = [];

    let fIndex = 0;
    let sIndex = 0;
    for (let i = 0; i < firstBackTrack.length + secondBackTrack.length; i++) {
        if (firstBackTrack[fIndex] === undefined) {
            returningArray = returningArray.concat(
                secondBackTrack.slice(sIndex)
            );
            return returningArray;
        } else if (secondBackTrack[sIndex] === undefined) {
            returningArray = returningArray.concat(
                firstBackTrack.slice(fIndex)
            );
            return returningArray;
        } else if (firstBackTrack[fIndex] < secondBackTrack[sIndex]) {
            returningArray.push(firstBackTrack[fIndex]);
            fIndex++;
        } else if (secondBackTrack[sIndex] < firstBackTrack[fIndex]) {
            returningArray.push(secondBackTrack[sIndex]);
            sIndex++;
        } else {
            console.log(`It didn't passed the other if-else conditions`);
            console.log(`Current status:
                First Var: Index: ${fIndex}   Arr: ${firstBackTrack}   Accumulator: [${returningArray}]
                Second Var: Index: ${sIndex}   Arr: ${firstBackTrack}   Accumulator: [${returningArray}]`);
        }
    }
    return returningArray;
}

console.log(mergeSort([5, 3, 2, 6, 1, 8, 9, 0, 4, 7])); // Output: [0 ,1 ,2 ,3, 4, 5, 6, 7, 8, 9]
