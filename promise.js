let studied = false;
let willPassExam = function () {
    return new Promise(function (resolve, reject) {
        if (studied) {
            resolve('yes i passed');
        } else {
            reject('faild')
        }
    })
}
willPassExam().then(function (a) {
    console.log(a);
}).catch(function (b) {
    console.log(b);
})