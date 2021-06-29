/*
	constructor method is a special method of a class
	for creating and initializing an object of a class.
*/
/*
	it is good pratice to name constructor function
	with an upper-case first letter
*/
function Laptop(name,cpu){
	this.name = name;
	this.cpu = cpu;

	this.performance = function(){
		console.log("Fast")
	}
}

//creating object by creating parameters

let laptop1 = new Laptop("Apple","i7")
let laptop2 = new Laptop("Asuz","i5")

//Changing the value of a object
laptop1.cpu = "i9"

console.log(laptop1)

laptop1.performance()