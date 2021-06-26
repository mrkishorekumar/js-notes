/*
	&& AND = multi
	|| OR = add
	! NOT = 
*/


let x = 7, y = 8, z = 5

//AND Gate
let result = x < y && x < z // 1 0 = 0
console.log(result) //false

//OR Gate
result = x < y || x < z // 1 0 = 1
console.log(result) //true

//NOT Gate
let not = !result
console.log(not)