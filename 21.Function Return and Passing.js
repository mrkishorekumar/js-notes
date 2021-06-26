//Function Return

function greet(){
	return "Hello world"  // we can return only one time
}

let str = greet()
console.log(str)

// Passing Values

function name(user){
	return `Hello ${user}!!`
}

let user = "Kishore"

str = name(user)
console.log(str)


//Example Adding Two Numbers
function add(a, b) {
	return a + b
}

let sum = add(5, 85)
console.log(sum)
