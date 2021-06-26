/*
	In an object method, this refers to the "owner" of the method.
	Alone, this refers to the global object.
	In a function, this refers to the global object.
	In a function, in strict mode, this is undefined.
	In an event, this refers to the element that received the event.
*/
let laptop1 = {
	cpu : "i9",
	ram : 16,
	brand : "apple",

	getConfig : function(){
		console.log(this.cpu)
	}
}

let laptop2 = {
	cpu : "i7",
	ram : 8,
	brand : "apple",

	getConfig : function(){
		console.log(this.cpu)
	}
}

laptop1.getConfig()

laptop2.getConfig()