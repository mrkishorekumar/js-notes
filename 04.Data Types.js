/* Data Types
	A) Primitive
		1)Numbers
		2)Sting
		3)Boolean
		4)Null
		5)Undefined
		6)Symbol

	B) Object
*/

//number
/*
	maximum value = 1.7976393134823157e+308
	maximum safe value = 9007199254740991
*/console.log(Number.Max_VALUE);

let num = 8 
let FloatNumber = 7.8 //float point representation
console.log(typeof FloatNumber); //to find the type
//base number system
let hex =0xf
console.log(hex); //15
// exponential
let exponential = 2e5 
console.log(exponential);
// easy to read number system
let amount = 100_00_000 // 100,00,000
console.log(amount);
// working with infinity
let div = 5/0 //positive infinity
console.log(div);
let divNeg = -5/0 //negative infinity
console.log(divNeg);
//Nan = not a number
console.log(5 / "user") //NaN
console.log(typeof (5 / "user")) // Number


//string
let user = "Kishore" 
console.log(typeof user);

let firstName = user
let lastName = "Kumar"
console.log(firstName +" "+ lastName)

let myName = "Kishore \"Kumar\"" //remove the special meaning of double code (back "\")
console.log(myName)
//new line
console.log("\n") // to create a new line use \n
let friuts = "apple \nbannan" // to create a new line use \n
console.log(friuts)

//boolean true or false
let check = 5>6
console.log(check) //false

check = 5<6
console.log(check) //true

console.log(typeof check)

//null - empty or does not exeist
/*
	null is an object
	it says it is not an object
	it does not represents an object
	but its an object
*/
let userName = null
console.log(userName)
console.log(typeof userName)//object

//undefined
let Class
console.log(Class) //undefined
console.log(typeof Class) //undefined

