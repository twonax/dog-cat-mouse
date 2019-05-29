var Cat = require ('./Cat');
var Mouse = require ('./Mouse');
var Dog = require ('./Dog')

var tom = new Cat('Tom');
var jerry = new Mouse('Jerry');
var pull = new Dog('Pull')

try 
{
	tom.eat(pull);
}
	

catch(error){
	console.log('Error while cat eating a Dog')
}

	
console.log(tom);
