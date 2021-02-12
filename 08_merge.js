const merge = function(arr1, arr2) {

    let output = arr1;

    for (let i=0 ; i<arr2.length ; i++) {

        const elementAddition = arr2[i];

        for (let j=0 ; j<output.length ; j++) {
            
            if (elementAddition < output[j]) {
                output.splice(j, 0, elementAddition);
                break
            }
            
        }
    }


    return output;
}

const tester1 = [1, 3, 6, 8, 11, 17];
const tester2 = [2, 3, 4, 5, 8, 9, 10, 15];

console.log(merge(tester1, tester2));
