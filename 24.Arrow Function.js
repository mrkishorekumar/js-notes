/* 
	Arrow Function allow us to write shorter
	fuction syntax 
*/

/*
	if the arrow function has only one line statement
	we write code below like
*/
let add = (num1, num2) => num1 + num2;
console.log(add(5,5))


// multi line arrow function

let greet =(user) => {
	console.log("Hello " + user);
	return 1;
}
console.log(greet("kishore"))