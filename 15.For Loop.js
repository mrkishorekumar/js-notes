//for loop
// initialize, condition, increment
// for(initialize, condition, increment)

for(let i=1;i<=5;i++){
	console.log("Hi",i);
}
/* Even this works
	let i=1
	for(;i<=5;){
	console.log("Hi",i);
	i++;
}
*/
//Nested Loop
for(i=1;i<=5;i++){
	console.log("Hello",i);
	for(let j=1;j<=5;j++){
		console.log("world",j);
	}
}