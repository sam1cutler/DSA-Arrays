const filter = function(input) {

    let output = [];

    for (let i=0; i<input.length ; i++) {
        if ( input[i] >= 5 ) {
            output.push(input[i]);
        }
    }

    return output;

}

console.log(filter([1, 8, 11, 99, 4, 101, 3, 83, -2]));