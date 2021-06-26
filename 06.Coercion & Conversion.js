//type conversion

let num = String(6) //convert a number into string format using String function
console.log(num, typeof num) // 6 string

num = "123"  //it is a string
console.log(num, typeof num) //123 string
//covert a number into string using double or single code outside of number

num = Number("123") // its is number 
console.log(num, typeof num) // 123 number


//type coercion
let value = 3 // this converts number into a string
value = value + " " // number + string = string
console.log(value, typeof value)

value = value - " " // number - string = number
console.log(value, typeof value)

// convert a number into a boolean formact
console.log(Boolean("string")) //string is true
console.log(Boolean(6)) // inital value of the value is true
/*
	only 0 is false
	others are true even negative number are true
*/
console.log(Boolean(NaN)) //even NaN is false
console.log(Boolean(null)) //even null is false
console.log(Boolean(undefined)) //even undefined is false
// the value = 3 which is true. ! is a operator perform NOT gate operation 
value = !value //not gate operation
console.log(value, typeof value) //false boolean

// parseInt
let code = parseInt("123 Kishore") //it remove string in inside the parseInt Function
console.log(code) //123