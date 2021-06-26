/*
	syntax
	switch(variable name){
		case "test case" : "statement" ;
			break;
		default :
			statement
	}
*/
//Monday - 7am
//Tuesday - Thursday - 4am
//Friday - 9am
//Saturday - Sunday - 8am

let day = "Tuesday"

switch(day){
	case "Monday" : console.log("7am"); break ;
	case "Tuesday" : 
	case "Wenesday" : 
	case "Thursday" : console.log("4am"); break ;
	case "Friday" : console.log("9am"); break ;
	case "Saturday" :
	case "Sunday" : console.log("8am"); break ;
	default : console.log("Wrong Day!") ;
}