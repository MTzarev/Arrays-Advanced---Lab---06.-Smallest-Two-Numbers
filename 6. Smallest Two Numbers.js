function smallestTwoNumbers(input) {
    function sortetArr(input) {
        return input.sort((a, b) => a - b);
    }
    let newArr = sortetArr(input);


    console.log(newArr.slice(0, 2).join(` `));
}
//smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);