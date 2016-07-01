define(function(require){
    // class Cls {
    //     constructor() {
    //         this.state = {
    //             text: 111
    //         }
    //     }
    // }
    // var c = new Cls;
    // console.log(c.state.text);

    var p = new Promise((resolve, reject) => {
        if(true) resolve;
    });
    p.then(() => {
        console.log('success');
    })
})  