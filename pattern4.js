class Person {
    constructor(name = 'Getaneh from 4') {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
module.exports = Person;
