//Find a Given Year is Leap Year or Not
/*
	it should be divisable by 4 but not in the
	case of (ex- zero in last two digit)
*/


let year = 2000

if (year%4==0 && year%100!=0 || year%400==0) {
	console.log("It is a Leap Year")
}
else{
	console.log("It is not a Leap Year")
}