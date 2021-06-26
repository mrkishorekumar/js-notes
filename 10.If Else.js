// Conditional Statement
/*
	Use if to specify a block of code to be executed,
	if a specified condition is true
	Use esle to specify a block of code to be executed,
	if a specified condition is false
	*******
	Else if
		Use esle to specify a new condition to test,
		if the first condition is false
*/

//program to check greatest number
let num1 = 4, num2 = 3

if(num1 > num2)  //true                /*in this case curly brackets not needed bacause we have only one statement to executeded*/
	console.log("num1 is Greater")
else{                                  //use curly brackets for multiple statement(two or more)
	console.log("num2 is Greater")
	console.log(num2)
}

console.log("Bye")
//*********************** END *************************** 

num1 = 1, num2 = 4, num3 = 7

if (num1 > num2 && num1 > num3){
	console.log("num1 is Greater")
}
else if( num2 > num3){
	console.log("num2 is Greater")
}
else{
	console.log("num3 is Greater")
}











