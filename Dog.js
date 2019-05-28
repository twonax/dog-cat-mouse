const chalk = require('chalk');

function Dog(name){
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat= function(mouse){
		this.stomach.push(mouse);
}

Dog.prototype.sayHi = function(){
	console.log('Hello i am a dog, My name is : '+chalk.red(this.name));

}
module.exports = Dog;