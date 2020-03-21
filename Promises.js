/*PROMSES - represent processes which are already happening, 
which can be chained with callback functions.*/

// The purpose of 'Then' and 'Catch'
// can copy and paste in console.

 promise = new Promise((resolve, reject) => {
      resolve();
});

//or
promise = new Promise((resolve, reject) => {
    reject();
});
 
// THEN AND CATCH
//resolve
promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
    
});

promise
.then(() => console.log('finally finished!'))
.then(() => console.log('i was also ran!!!'))
.catch(() => console.log('uh oh!'))

// reject
promise = new Promise((resolve, reject) => {
    settimeout(() => {
        reject();
    }, 3000);
   
});

promise
.then(() => console.log('finally finished!'))
.then(() => console.log('i was also ran!!!'))
.catch(() => console.log('uh oh!'))


// Ajarequest

promise = new Promise((resolve, reject) => {
   var request = new XHTMLrequest()
   request.onload = () => {
    resolve();
   };
    
});

promise
.then(() => console.log('finally finished!'))
.then(() => console.log('i was also ran!!!'))
.catch(() => console.log('uh oh!'))

