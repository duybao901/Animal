var Dog = require('./Dog');
var Cat = require('./Cat');


var dog = new Dog('Jack', 2);
var cat = new Cat('Tom', 1);
dog.sayHi();
console.log("Dog eat cat");
dog.eat(cat);
console.log('Inside stomach of Dod: ', dog.stomach);
