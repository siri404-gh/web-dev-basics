/* You are not allowed to change the output
   You will be asked to do same puzzle during the interview session
*/

// Your solution is here --

var Increment = function() {
    this.val = 0;

    this.toString = function() {
        return this.val++;
    }

    return this.val;
}

let increment = new Increment()
let increment2 = Increment()

console.log(increment == increment2)  // true
console.log(`val: ${increment}`)      // val: 1
console.log(`val: ${increment}`)      // val: 2
console.log(`val: ${increment}`)      // val: 3
