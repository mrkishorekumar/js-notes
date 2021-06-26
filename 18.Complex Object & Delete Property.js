//comple object
let user = {
	name: "kishore",
	age: 19,
	city: "tiruppur",
	laptop: {
		cpu: "i7",
		ram: 8,
		brand1: "Apple"
	}
}

console.log(user.laptop.ram)

console.log(user.laptop.brand) //undefined

//Delete Property

delete user.laptop

console.log(user)

