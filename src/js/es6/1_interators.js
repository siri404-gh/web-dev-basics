const arr = ['Sreeram', 'Bumble', 32];
const it = arr[Symbol.iterator]();

// for (let item of it) {
//     console.log(item);
// }

let p = it.next();

while(!p.done) {
    console.log(p);
    p = it.next();
}