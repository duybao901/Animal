var chalk = require("chalk");

function Dog(name, age) {
    this.name = name;
    this.age = age;
}
Dog.prototype.sayHi = function () {
    console.log(`Hi, i am a dog. My name is ${chalk.red(this.name)}`);
}
module.exports = Dog;