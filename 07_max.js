const max = function(input) {

    let currentMax = input[0];

    for (let i=0 ; i<input.length ; i++) {
        
        let runningSum = 0;
        
        for (let j=i ; j<input.length ; j++) {
            runningSum += input[j];
            if (runningSum > currentMax) {
                currentMax = runningSum;
            }
        }
    }
    
    return currentMax;
}

console.log(max([4, 6, -3, 5, -2, 1, -100, 99, 2]))