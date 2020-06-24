var Dog = require('./Dog');
var Cat = require('./Cat');


var dog = new Dog('Jack', 2);
var cat = new Cat('Tom', 1);
dog.sayHi();
dog.eat(cat);
console.log('This is my stomach: ', dog.stomach);
