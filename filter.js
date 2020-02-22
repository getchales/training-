function filter(arr, cond) {
    let students = [];
    for (let i = 0; i < arr.length; i++) {
        if (cond(arr[i])) {
            students.push(arr[i]);
        }
    }
    return students;
}

function cond(stu) {
    let condtion = false;
    if (stu.age > 18) {
        condtion = true;
    }
    return condtion;
}

console.log(filter([{ name: 'Getaneh', age: 30, id: 123 }, { name: 'Mahider', age: 17, id: 12 }, { name: 'Bikale', age: 25, id: 1234 }], cond));