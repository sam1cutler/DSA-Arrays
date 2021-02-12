const URLify = function(string) {
    
    let output = '';

    for (let i=0 ; i<string.length ; i++) {
        //console.log(string[i]);
        if ( string[i] === ' ' ) {
            output += '%20';
        } else {
            output += string[i];
        }
    }

    return output;
}

console.log(URLify('www.thinkful.com /tauh ida parv een'));