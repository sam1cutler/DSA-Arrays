const Memory = require('./memory');

const memory = new Memory();

class Array {

    constructor() {
        // on inception, the array should have...
        //    a length of 0
        this.length = 0;
        //    a "capacity" of 0
        this.capacity = 0;
        //    a "pointer" to the start of the array in the memory space
        this.ptr = memory.allocate(this.length);
        //          ^^ this memory method returns the current "end" of the memory space,
        //             and iterates that counter UP by the length of the array,
        //             which, upon inception of the array, is 0. 
    }

    // Push new item[s] onto end of array
    push(value) {
        console.log(`Pushing the value ${value}.`);
        //console.log(`Array's current length is ${this.length}.`);
        //console.log(`Array's current capacity is ${this.capacity}`);
        // check if the length of the array is 
        //    a) equal to the current available capacity (plausible)
        //    b) greater than the available capacity (I think this should not happen, being thorough?)
        if (this.length >= this.capacity) {
            //console.log('Need to resize!')
            // if a or b is true, need to resize by the length of the array, 
            //    +1, multiplied by the array's "size ratio"
            this.resize((this.length + 1)*Array.SIZE_RATIO)
        }

        // need to set that newly added "box" in memory,
        //    which has the "position" of the array's pointer + its length,
        //    to have the specified value
        memory.set(this.ptr + this.length, value);

        // need to iterate up the length of the array
        this.length++;
    }

    // Resize the array
    resize(size) {
        console.log(`Resizing the array based on a size of ${size}.`)
        // store the "old" ("current") pointer value
        const oldPtr = this.ptr;

        // define a new value for the array's pointer, which will be 
        //    the memory.allocate method, given an argument of
        //    the new "size" ("old" length + 1 times the size_ratio),
        //    and which will return what was previously the "end" of available storage space
        //    (which is the new "start" ("pointer") of the array in memory),
        //    as well as tick up / specify the *new* "start" of available space, at end of this array.
        this.ptr = memory.allocate(size);

        // Check if we ran out of available space
        if (this.ptr === null) {
            throw new Error ('Out of memory');
        }

        // Otherwise, need to copy the old array, and start it in the new "pointer" position in memory...
        memory.copy(this.ptr, oldPtr, this.length);
        // ..."free" the previously-used memory (does this do anything?)... 
        memory.free(oldPtr);
        // ...and reset the new capacity to be the requested size 
        //    (which is, again, the "old" length + 1, times the user-defined size_ratio)
        this.capacity = size;
    }

    // Retrieve value from the array
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        // if valid index, find requested position:
        //    pointer (start of array in memory) + requested index
        return memory.get(this.ptr + index);
    }

    // Pop a value from the end of the array
    pop() {
        if (this.length == 0) {
            throw new Error('Cannot remove item from 0 length array');
        }
        // if nonzero array length, get the penultimate value in the array
        const value = memory.get(this.ptr + this.length - 1);

        // reduce the length of this array by one;
        this.length--;

        // return that penultimate (now final) value of the array
        return value;
    }

    // Insert a single value anywhere into the array
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        // much like push method, we're increasing the length of the array by 1;
        // therfore, need to check if current array length is at (or beyond?) capacity
        if (this.length >= this.capacity) {
            // if yes, resize
            this.resize( (this.length+1) * this.SIZE_RATIO )
        }

        // once resized, need to copy the existing array 
        //    FROM the index of the requested insertion position,
        //    TO the end of the existing array (?)
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        
        // requested index still has old value; 
        //  simply set it to the new, requested value
        memory.set(this.ptr + index, value);

        // iterate up array's length
        this.length++
    }

    // Remove a value from anywhere in the array
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

}

module.exports = Array;

/*
const testArray = new Array();
//console.log(testArray);

Array.SIZE_RATIO = 3;
//console.log(testArray);

testArray.push(7);
//console.log(testArray);
//console.log(memory);

testArray.push(11);
//console.log(testArray);
//console.log(memory);
//const query1 = testArray.get(1);
//console.log(`The query for the 1th index item is: ${query1}`);

testArray.push(2);
console.log(testArray);
//console.log(memory);

testArray.push(13);
console.log(testArray);
console.log(memory);

const query2 = testArray.get(3);
console.log(`The query for the 3th index item is: ${query2}`);
*/

/*
const query3 = testArray.pop();
console.log(`Returned value for popping is ${query3}.`);
console.log(testArray);
console.log(memory);

const query4 = testArray.get(2);
console.log(`Now, after popping, getting 2th index item is: ${query4}`);
*/

/*
testArray.insert(2,99);
console.log(testArray);
console.log(memory);

testArray.remove(3);
console.log(testArray);
console.log(memory);
*/