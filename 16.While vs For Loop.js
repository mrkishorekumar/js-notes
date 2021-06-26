/*
	if you know starting point and ending point - For loop is Best
*/

//program to print 1 to 100 which is diviable by 3
for(let i=1;i<=100;i++){
	if(i%3==0){
		console.log(i)
	}
}

/*
	if you dontknow starting point and ending point - while loop is Best - but you the
	condition when stop
*/

//print the number sperate line
let num = 7871013983
while(num>0){
	console.log(num%10)
	num = parseInt(num/10)
}

