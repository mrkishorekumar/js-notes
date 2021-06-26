// it represents the real entities
//creating a object
let User = {
	name: "Kishore",
	age: 19,
	city: "Tiruppur",
	"phone number":7871013983
}

console.log(User)

//print only the name 
//two ways

console.log(User.name)
//or
console.log(User["name"]) //use to print one or more
console.log(User['phone number']) // you cant use dot operator in this case