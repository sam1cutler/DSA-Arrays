const products = function(inputArray) {

    let output = [];

    for (let i=0 ; i<inputArray.length ; i++) {

        let currentProduct = 1;
        for (let j=0 ; j<inputArray.length ; j++) {
            if (j !== i) {
                currentProduct *= inputArray[j];
            }
        }

        output.push(currentProduct);

    }

    return output;

}

const testArray = [1, 3, 9, 4];

console.log(products(testArray));