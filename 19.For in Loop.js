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


for(let key in user){
	console.log(key, user[key])
}

console.log("\n")

for(let key in user.laptop){
	console.log(key, user.laptop[key])
}