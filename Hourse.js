function Hourse(name, age) {
    this.name = name;
    this.age = age;
}
Hourse.prototype.run = function () {
    console.log("Hourse is running...");
}
Hourse.prototype.eat = function () {
    console.log("Horse eating..");
}
module.exports = Hourse;