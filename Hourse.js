function Hourse(name, age) {
    this.name = name;
    this.age = age;
}
Hourse.prototype.run = function () {
    console.log("Hourse is running...");
}
module.exports = Hourse;