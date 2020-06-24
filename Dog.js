var chalk = require("chalk");

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}
Dog.prototype.sayHi = function () {
    console.log(`Hi, i am a dog. My name is ${chalk.red(this.name)}`);
}
Dog.prototype.eat = function (animal) {
    this.stomach.push(animal);
}
module.exports = Dog;