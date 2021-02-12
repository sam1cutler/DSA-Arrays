const remove = function(startString, exclusionString) {

    let output = '';

    for (let i=0 ; i<startString.length ; i++) {
        const activeChar = startString[i];
        let include = true;

        for (let j=0 ; j<exclusionString.length ; j++) {
            if (activeChar === exclusionString[j]) {
                include = false;
                break;
            }
        }
        
        if (include === true) {
            output += activeChar;
        }
    }

    return output;
}

const startString = 'Battle of the Vowels: Hawaii vs. Grozny';
const exclusionCharacters = 'aeiou';

console.log(remove(startString, exclusionCharacters));