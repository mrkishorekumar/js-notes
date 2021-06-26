/*
	+ Addition
	- Subtration
	/ Division
	* Mutiplication
	** Exponential - Power
	% Modulus - Remainder
*/

//
let num1 = 5
let num2 = 10
let result

//addtion
result = num1 + num2
console.log(result)

//subtration
result = num1 - num2
console.log(result)

//division
result = num2 / num1
console.log(result)

//multiplication
result = num2 * num1
console.log(result)

//Exponential
result = 2**4 // 2power4
console.log(result)
//Using Inbuild Function
let cube = 4
result = Math.pow(cube,2) //two parameters (base number, power)
console.log(result)

//Modulus
result = 10%3
console.log(result)

num1 = true
num2 = true
result = num1 + num2 // it will convert boolean into number
console.log(result) // 1 + 1 = 2
console.log(typeof result)

//-------------------------------------------------------------

let num = 4
num += 5    //num = num + 5
console.log(num)

//-------------------------------------------------------------

// post increment & decrement
num = 5
num++ // if num = 5 then it will increment by one
console.log(num) // 5 + 1 = 6

num = 4
num-- // if num = 4 then it will decrement by one
console.log(num) // 4 - 1 = 3

// pre increment & decrement
num = 5
++num // if num = 5 then it will increment by one
console.log(num) // 5 + 1 = 6

num = 4
--num // if num = 4 then it will decrement by one
console.log(num) // 4 - 1 = 3

//----------------------------------------------------------------
//post increment workings
/*
	IT WILL ASSIGN THE VALUE
    IT WILL INCREMENT THE VALUE
*/ 
num = 4
let x = num++ // we have increment as well as assignment
console.log(x, num) // 4 5

//----------------------------------------------------------------
//pre increment workings
/*
    IT WILL INCREMENT THE VALUE
    IT WILL ASSIGN THE VALUE
*/ 
num = 4
let y = ++num // we have increment as well as assignment
console.log(y, num) // 5 5