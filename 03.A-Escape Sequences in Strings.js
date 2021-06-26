/*
	Escape Sequences in Strings
	code   output
	\'	single quote
	\"	double quote
	\\	backslash
	\n	newline
	\r	carriage return
	\t	tab
	\b	word boundary
	\f	form feed
*/

/* To display 
	FirstLine
    	\SecondLine
	ThirdLine
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr)