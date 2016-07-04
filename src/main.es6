require('core-js/fn/array/includes');

class Cls {
    constructor() {
        this.state = {
            text: 111
        }
    }
    // static testMethod = 222
}

var c = new Cls;
console.log(c.state.text);
console.log([1,2,NaN].includes(NaN));

// var p = new Promise((resolve, reject) => {
//     setTimeout(resolve, 0);
// });
// p.then(() => {
//     console.log('success');
// })