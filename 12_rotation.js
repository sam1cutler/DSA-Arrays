const rotationCheck = function(str1, str2) {

    let output = false;

    for (let i=0 ; i<str2.length ; i++) {
        let currentCheck = '';
        for (let j=0 ; j<str2.length ; j++) {
            if (i+j < str2.length ) {
                currentCheck += str2[i+j];
            } else {
                currentCheck += str2[i+j-str2.length];
            }
        }
        if (currentCheck === str1) {
            output = true;
            break;
        }
    }


    return output;
}

const test1 = 'amazon';
const test2 = 'azonma';
const test3 = 'azonam';
const test4 = 'aznmnz';
const test5 = 'zonama';

console.log(rotationCheck(test1, test2));
console.log(rotationCheck(test1, test3));
console.log(rotationCheck(test1, test4));
console.log(rotationCheck(test1, test5));