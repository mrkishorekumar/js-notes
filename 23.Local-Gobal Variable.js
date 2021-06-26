/*
	user is global variable
	it is created outside of the function

	a local variable can be created inside a
	function or within parenthesis
*/
let user = "Kishore"   //global variable

function greet(a) {
	return `Hello ${a}`
	let num = 18  //local variable
}


let str = greet(user)
console.log(str)