/*
	< Less Than 
	> Greater Than
	<= Less Than or Equal to
	>= Greater Than or Equal to
	== Equal to
	!= Not Equal to
	=== Equal value and same type
	!== Not Equal Value or not same type
*/
// Comparing Numbers
// < Less Than - 5<2
console.log(5<2) //false

// > Greater Than - 5>2
console.log(5>2) //true

// < Less Than Equal to - 5<=2
console.log(5<=2) //false

// > Greater Than Equal to - 5>=2
console.log(5>=2) //true

// == Equal to - 5==2
console.log(5==2) //false
console.log("3"==3) //true


// != Not Equal to - 5!=2
console.log(5!=2) //true

// === Equal value and same type
console.log(1===1) //true
console.log("3"===3) //false

// !== Not Equal Value or not same type
console.log(1!==1) //False

// Comparing String
let x = "Pen"
let y = "Book"
//Pen > Book // 66 > 80
// by using ASCII Table
console.log(x>y) //false

// Compering Number and String
x = "2"
y = 1
//it converts string into a number
console.log(x>y) //true
