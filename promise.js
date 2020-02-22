//callBack hell
// function checkEquality(yes, no) {
//     const x = 10;
//     const y = 10;
//     if (x === y) {
//         yes();
//     } else {
//         no();
//     }
// }

// function success() {
//     console.log("They are equal");
// }

// function failer() {
//     console.log("They are not equal");
// }
// console.log(checkEquality(success, failer));


//promise

// let promise = new Promise(function (resolve, reject) {
//     const x = 10;
//     const y = 20;
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
//     then(function () {
//         console.log('success');
//     }, function () {
//         console.log('error');
//     }).
//     catch(function () {
//         console.log('the numbers are not equal');
//     });


//Async/Await

// const getData = async _ => {
//     var y = await "Hello World";
//     console.log(y);
// }

// console.log(1);
// getData();
// console.log(2);



// async function greeting() {
//     let x = await "Hello there";
//     console.log(x);
// }
// console.log('first');
// greeting();
// console.log('second');

async function checkEquality(){
    let x = await ""
}