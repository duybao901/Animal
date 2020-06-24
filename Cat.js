function Cat(name, age) {
  this.name = name;
  this.age = age;
}
Cat.prototype.jump = function () {
  console.log('jumping...');
}
module.exports = Cat;
