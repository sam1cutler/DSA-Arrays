const twoD = function(inputArray) {

    outputArray = inputArray;

    zeroRow = [];
    zeroColumn = [];

    // Identify zeros
    for (let i=0 ; i<inputArray.length ; i++) {
        activeRow = inputArray[i];
        for (let j=0 ; j<activeRow.length ; j++) {
            if (activeRow[j] === 0) {
                if (!zeroRow.includes(i)) {
                    zeroRow.push(i);
                }
                if (!zeroColumn.includes(j)) {
                    zeroColumn.push(j);
                }
            }
        }
    }

    // Replace ones with zeros
    for (let i=0 ; i<inputArray.length ; i++) {
        if (zeroRow.includes(i)) {
            for (let j=0 ; j<outputArray[i].length ; j++) {
                outputArray[i][j] = 0;
            }
        } else {
            for (let k=0 ; k<outputArray[i].length ; k++) {
                if (zeroColumn.includes(k)) {
                    outputArray[i][k] = 0;
                }
            }
        }
    }

    return outputArray;

}

const testArray = 
[[1,0,1,1,0],
 [0,1,1,1,0],
 [1,1,1,1,1],
 [1,0,1,1,1],
 [1,1,1,1,1]];

console.log(twoD(testArray));