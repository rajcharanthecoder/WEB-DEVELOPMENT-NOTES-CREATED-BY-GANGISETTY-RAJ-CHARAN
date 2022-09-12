document.write("<h1>Hello World!</h1>");

{
    document.write("<h1>This is a heading</h1>");
    document.write("<p>This is a paragraph.</p>");
    document.write("<p>This is another paragraph.</p>");
}

//DATA TYPES IN JAVA SCRIPT//

// 1)Number
// 2)Boolean
// 3)string
// 4)null

//NUMBER DATATYPE IN JAVASCRIPT//

// 1)INTEGER
// 2)FLOAT
// 3)NaN

// 1) integer literals can be represented 
// by decimal, octal, or hexadecimal

// 2) float literals can be represented 
// by decimal or exponential

// 33-------->integer
// 3.14------->float
// 0.1e1------>float
// 0.1e-1----->float
// 0.1e+1----->float
// 0x5F------->hexadecimal
// 2E5-------->exponential float
// 100001----->octal

// //BOOLEAN DATATYPE IN JAVASCRIPT//

// 1)true------> 1
// 2)false-----> 0


//STRING DATATYPE IN JAVASCRIPT//

// 1)string literals can be represented by single quote or
// double quote

// 2)string literals can be represented by backtick

// 3)string literals can be represented by escape sequence

// 4)string literals can be represented by unicode

// 5)string literals can be represented by template literal

//NULL DATATYPE IN JAVASCRIPT//

//VARAIBLES IN JAVASCRIPT//

// 1)var keyword is used to declare a variable

//Both _ and $ are allowed in variable name

// 3)variable name should not start with a number

// 4)variable name should not be a reserved keyword

// 5)Uppercase and lowercase letters are different

// 6)variable name should not contain space

// Case sensitive

//VARIABLE SCOPE IN JAVASCRIPT//'

// 1)global SCOPE
// 2)local SCOPE

//Variable declaration in javascript//

// var a;
// var b,c,d;

//Variable initialization in javascript//

// var a;
// a = value;

// Note: var is required but not nessecary

//if you redeclare js variable original value doesnt loose

var x = 5;
var x;

console.log(x);

//GLOBAL SCOPE IN JAVASCRIPT//

// 1)global scope is a scope which is available
// throughout the program

//; is optional

//LOCAL SCOPE IN JAVASCRIPT//

// 1)local scope is a scope which is available 
// within a function

//TYPECASTING IN JAVASCRIPT//

// 1)parseInt()
// 2)parseFloat()
// 3)Number()
// 4)String()
// 5)Boolean()

//Javascript variables are loosely Cast//

y = 10;
console.log(y);
a = "The price of burger is " + y + " dollars";
console.log(a);

console.log(typeof (a));

a = 10 + 10.5;

console.log(a)
console.log(typeof (a));

a = 20 + "22";
console.log(a);
console.log(typeof (a));

//DATATYPE CONVERSION IN JAVASCRIPT//

// 1)parseInt()
// 2)parseFloat()
// 3)Number()
// 4)String()
// 5)Boolean()

//parseInt() function//

// 1)parseInt() function is used to convert a string
// to integer

//parseFloat() function//

// 1)parseFloat() function is used to convert a string
// to float

//Number() function//

// 1)Number() function is used to convert a string
// to number

//String() function//

// 1)String() function is used to convert a number
// to string

//Boolean() function//

// 1)Boolean() function is used to convert a number
// to boolean

//OPERATORS IN JAVASCRIPT//

// 1)Arithmetic operators
// 2)Assignment operators
// 3)Comparison operators
// 4)Logical operators
// 5)Bitwise operators
// 6)String operators
// 7)Conditional (ternary) operator
// 8)Comma operator
// 9)Unary operators
// 10)Relational operators

//ARITHMETIC OPERATORS IN JAVASCRIPT//

// 1)Addition
// 2)Subtraction
// 3)Multiplication
// 4)Division
// 5)Modulus
// 6)Increment
// 7)Decrement

//ASSIGNMENT OPERATORS IN JAVASCRIPT//

// 1)Assignment
// 2)Addition assignment
// 3)Subtraction assignment
// 4)Multiplication assignment
// 5)Division assignment
// 6)Remainder assignment
// 7)Exponentiation assignment

//COMPARISON OPERATORS IN JAVASCRIPT//

// 1)Equal
// 2)Not equal
// 3)Greater than
// 4)Less than 
// 5)Greater than or equal to
// 6)Less than or equal to

//LOGICAL OPERATORS IN JAVASCRIPT//

// 1)Logical AND
// 2)Logical OR
// 3)Logical NOT

//BITWISE OPERATORS IN JAVASCRIPT//

// 1)Bitwise AND
// 2)Bitwise OR
// 3)Bitwise XOR
// 4)Bitwise NOT
// 5)Left shift
// 6)Right shift
// 7)Zero fill right shift

//STRING OPERATORS IN JAVASCRIPT//

// 1)Addition
// 2)Equality
// 3)Inequality

//CONDITIONAL (TERNARY) OPERATOR IN JAVASCRIPT//

// 1)Conditional (ternary) operator is a shortcut
// for if statement

//COMMA OPERATOR IN JAVASCRIPT//

// 1)Comma operator is used to evaluate multiple
// expressions

//UNARY OPERATORS IN JAVASCRIPT//

// 1)Unary plus
// 2)Unary negation
// 3)Increment
// 4)Decrement
// 5)Logical NOT
// 6)Bitwise NOT

//RELATIONAL OPERATORS IN JAVASCRIPT//

// 1)In
// 2)Instanceof

//SPECIAL OPERATORS IN JAVASCRIPT//

// 1)delete
// 2)typeof
// 3)void
// 4)new
// 5)in
// 6)instanceof

y = ('A');
console.log(y % 2);

//== is equal to
//=== is equal value and equal type exactly equal

//!== is not equal value and not equal type and not exaclty equal

//!= is not equal to

//&& is logical AND

//|| is logical OR

//! is logical NOT

//& is bitwise AND

//| is bitwise OR

//^ is bitwise XOR

//~ is bitwise NOT

//<< is left shift

//>> is right shift

//>>> is zero fill right shift

//+ is addition

//- is subtraction

//* is multiplication

/// is division

//% is modulus

//++ is increment

//-- is decrement

//= is assignment

//+= is addition assignment

//-= is subtraction assignment

//*= is multiplication assignment

///= is division assignment

//%= is remainder assignment

//**= is exponentiation assignment

//variable_name = (consition)? value1:value2

//greeting = (visitor=="PRESS")?"Dear President":"Dear ";

//console.log(greeting);

//console.log(typeof (greeting));

//ADDING STRINGS AND NUMBERS//

// 1)Adding strings and numbers will result in a string

// 2)Adding numbers and numbers will result in a number

// 3)Adding strings and strings will result in a string

// 4)Adding numbers and strings will result in a string

// 5)Adding strings and numbers will result in a string

//SPECIAL OPS//

A = new Array();
A[0] = "Hello";
A[1] = "World";
A[2] = "!";
console.log(A);

//DELETE OPERATOR//

// 1)delete operator is used to delete a property
// from an object

//delete A;

//TYPEOF OPERATOR//

// 1)typeof operator is used to find the type of a
// variable

//VOID OPERATOR//

// 1)void operator is used to evaluate an expression
// without returning a value

//JAVASCRIPT CONSTRUCTS//

//CONDITIONAL STATEMENTS//

// 1)if statement
// 2)if...else statement
// 3)if...else if...else statement
// 4)switch statement

//LOOPS//

// 1)for loop
// 2)while loop
// 3)do...while loop
// 4)for...in loop
// 5)for...of loop

//BREAK AND CONTINUE//

// 1)break statement
// 2)continue statement

// • if statement - use this statement to execute some code only if a specified 
// condition is true 
// • if...else statement - use this statement to execute some code if the condition is 
// true and another code if the condition is false 
// • if...else if....else statement - use this statement to select one of many blocks of 
// code to be executed 
// • switch statement - use this statement to select one of many blocks of code to 
// be executed

//IF ELSE EXAMPLE//

var d = new Date();
var time = d.getHours();
if (time < 10) {
    document.write("<b>Good morning</b>");
}

//IF ELSE IF ELSE EXAMPLE//

var d = new Date();
var time = d.getHours();
if (time < 10) {
    document.write("<b>Good morning</b>");
} else if (time < 20) {
    document.write("<b>Good day</b>");
} else {
    document.write("<b>Good evening</b>");
}

//SWITCH EXAMPLE//

var d = new Date();
var time = d.getHours();
switch (time) {
    case 0:
        document.write("<b>Good night</b>");
        break;
    case 5:
        document.write("<b>Good morning</b>");
        break;
    case 12:
        document.write("<b>Good noon</b>");
        break;
    case 18:
        document.write("<b>Good evening</b>");
        break;
    default:
        document.write("<b>Good day</b>");
}

//day greeter//

//You will receive a different greeting based 
//on what day it is. Note that Sunday=0, 
//Monday=1, Tuesday=2, etc. 
var d = new Date();
theDay = d.getDay();
switch (theDay) {
    case 5:
        document.write("Finally Friday");
        break;
    case 6:
        document.write("Super Saturday");
        break;
    case 0:
        document.write("Sleepy Sunday");
        break;
    default:
        document.write("I'm looking forward to this weekend!");
}

//LOOPS IN JAVASCRIPT//

// 1)for loop   
// 2)while loop
// 3)do...while loop
// 4)for...in loop
// 5)for...of loop

//FOR LOOP IN JAVASCRIPT//

// 1)for loop is used to repeat a block of code
// a number of times

//FOR LOOP EXAMPLE//

for (i = 0; i < 5; i++) {
    document.write(i + "<br>");
}

//WHILE LOOP IN JAVASCRIPT//

// 1)while loop is used to repeat a block of code
// while a condition is true

//WHILE LOOP EXAMPLE//

i = 0;
while (i < 5) {
    document.write(i + "<br>");
    i++;
}

//DO WHILE LOOP IN JAVASCRIPT//

// 1)do...while loop is used to repeat a block of
// code while a condition is true

//DO WHILE LOOP EXAMPLE//

i = 0;
do {
    document.write(i + "<br>");
    i++;
} while (i < 5);

//FOR IN LOOP IN JAVASCRIPT//

// 1)for...in loop is used to loop through the
// properties of an object

//FOR IN LOOP EXAMPLE//

var person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

var text = "";

for (x in person) {
    text += person[x] + " ";
}

console.log(text);

var x;
var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";
for (x in mycars) {
    document.write(mycars[x] + "<br>");
}

//FOR OF LOOP IN JAVASCRIPT//

// 1)for...of loop is used to loop through the
// values of an iterable object

//FOR OF LOOP EXAMPLE//

var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";

for (x of mycars) {
    document.write(x + "<br>");
}

//JAVASCRIPT POPUP BOXES//

// 1)alert box
// 2)confirm box
// 3)prompt box

//ALERT BOX//

// 1)alert box is used to display an alert message

//ALERT BOX EXAMPLE//

alert("Hello World");

function show_alert() {
    alert("I am an alert box");
}

//CONFIRM BOX//

// 1)confirm box is used to display a confirm message

//CONFIRM BOX EXAMPLE//

function show_confirm() {
    confirm("sometext");
}

function show_confirmer() {
    var r = confirm("Press a button");
    if (r == true) {
        document.write("You pressed OK!");
    }
    else {
        document.write("You pressed Cancel!");
    }
}

//PROMPT BOX//

// 1)prompt box is used to display a prompt message

//synatx//

// prompt("sometext","defaultvalue")

//PROMPT BOX EXAMPLE//

function show_prompt() {
    var name = prompt("Enter your name", "Your name here");
    if (name != null) {
        document.write("Hello " + name + "! How are you today?");
    }
}

function show_prompter() {
    var name = prompt("Please enter your name", "");
    if (name != null && name != "") {
        document.write("Hello " + name + "! How are you today?");
    }
}

//FUNCTIONS IN JAVASCRIPT//

// 1)function is a block of code designed to perform a particular task

//FUNCTION TYPES//

// 1)function with no parameters
// 2)function with parameters
// 3)function with return value
// 4)function with no return value
//5)BUILT IN FUNCTIONS
//6)USER-DEFINED FUNCTIONS


//FUNCTION WITH NO PARAMETERS//

// 1)function with no parameters is a function that
// does not accept any parameters

//FUNCTION WITH NO PARAMETERS EXAMPLE//

function show_alert() {
    alert("Hello World");
}

//FUNCTION WITH PARAMETERS//

// 1)function with parameters is a function that
// accepts parameters

//FUNCTION WITH PARAMETERS EXAMPLE//

function show_alert(name) {
    alert("Hello " + name);
}

//FUNCTION WITH RETURN VALUE//

// 1)function with return value is a function that
// returns a value

//FUNCTION WITH RETURN VALUE EXAMPLE//

function show_alert(name) {
    return "Hello " + name;
}

//FUNCTION WITH NO RETURN VALUE//

// 1)function with no return value is a function that
// does not return a value

//FUNCTION WITH NO RETURN VALUE EXAMPLE//

function show_alert(name) {
    alert("Hello " + name);
}

//BUILT IN FUNCTIONS//

// 1)built in functions are functions that are
// already defined in JavaScript

//1)eval()
//2)isFinite()
//3)isNaN()
//4)Number()
//5)parseFloat()
//6)parseInt()
//7)String()

//1)eval()//

// The evel() function can be used to convert a string expression to a numeric value. 

//eval() example//

var x = eval("10*20+5");

console.log(x);

console.log(typeof (eval("2+2")));

//userdefined functions//

//syntax//

// function functionName(var1.......varn){
//     //code in javascript//
// }

//userdefined functions example//

function show_alert() {
    alert("Hello World");
}

show_alert();

// THE LIFETIME OF JAVASCRIPT VARIABLES

// 1)local variables
// 2)global variables

// EVENTS IN JAVASCRIPT//

// 1)onclick
// 2)onchange
// 3)onmouseover
// 4)onmouseout
// 5)onkeydown
// 6)onload
// 7)onSubmit


// Examples of events:
// • A mouse click
// • A web page or an image loading
// • Moving mouse over a hot spot on the web page
// • Selecting an input field in an HTML form
// • Submitting an HTML form
// • A keystroke

//JAVASCRIP OBJECTS//

// 1)Objects are variables too. But objects can contain many values.

//2)JavaScript is an Object Oriented Programming (OOP) language. An OOP
// language allows you to define your own objects and make your own variable types.
// An object is just a special kind of data. An object has properties and methods.

//PROPERTIES OF OBJECTS//

// 1)Properties are the values associated with an object.

//METHODS OF OBJECTS//

// 1)Methods are the actions that can be performed on objects.

//ARRAY OBJECT//

// 1)Array objects are used to store multiple values in a single variable.

//ARRAY OBJECT EXAMPLE//

//1)conventional array
//2)Dense array
//3)Sparse array
//4)Associative array
//5)Multi-dimensional array
//6)Array-like object
//7)Typed array
//8)Array iterator object
//9)Array buffer object
//10)Array buffer view object
//11)Array.prototype object
//12)Literal object

//1)conventional array//

/*
    var myCars=new Array(); // regular array (add an optional integer 
    myCars[0]="Saab"; // argument to control array's size) 
    myCars[1]="Volvo"; 
    myCars[2]="BMW"; 
*/

//2)Dense array//

// var myCar = new Array("saab","Volvo","BMW");

//Literal Array//

var myCars = ["Saab", "Volvo", "BMW"]; // literal array

//ACCESS ARRAY//

// document.write(myCars[0]);

//ARRAY METHODS//

// 1) concat()------> Join two or more array
// 2) join()---------> Join all elements of an array into a string
// 3) pop()----------> Remove the last element of an array
// 4) push()---------> Add new elements to the end of an array
// 5) reverse()------> Reverse the order of the elements in an array
// 6) shift()--------> Remove the first element of an array
// 7) slice()--------> Select a part of an array and return the new array
// 8) sort()---------> Sort the elements of an array
// 9) Splice()-------> Add / Remove elements from an array
// 10) toString()----> Convert an array to a string of(comma separated) array values
// 11) unshift()-----> Add new elements to the beginning of an array

//MATH OBJECT//

// 1)The Math object allows you to perform mathematical tasks on numbers.

//MATH OBJECT EXAMPLE//

//1)abs()------>Returns the absolute value of a number
//2)acos()----->Returns the arccosine of a number
//3)asin()----->Returns the arcsine of a number
//4)atan()----->Returns the arctangent of a number
//5)atan2(x,y)---->Returns the arctangent of the quotient of its arguments
//6)ceil()----->Returns the value of a number rounded up to its nearest integer
//7)cos()------>Returns the cosine of a number
//8)exp()------>Returns the value of Ex
//9)floor()---->Returns the value of a number rounded down to its nearest integer
//10)log()----->Returns the natural logarithm (base E) of a number
//11)max()----->Returns the number with the highest value
//12)min()----->Returns the number with the lowest value
//13)pow()----->Returns the value of a number to a specified power
//14)random()-->Returns a random number between 0 and 1
//15)round()--->Returns the value of a number rounded to the nearest integer
//16)sin()----->Returns the sine of a number
//17)sqrt()---->Returns the square root of a number
//18)tan()----->Returns the tangent of a number

//properties/Mathematics constants//

//1)E--------->Returns Euler's number
//2)LN2------->Returns the natural logarithm of 2
//3)LN10------>Returns the natural logarithm of 10
//4)LOG2E----->Returns the base-2 logarithm of E
//5)LOG10E---->Returns the base-10 logarithm of E
//6)PI-------->Returns PI
//7)SQRT1_2--->Returns the square root of 1/2
//8)SQRT2

//SYNTAX FOR USING PROPERTIES OF MATH//

// document.write(Math.PI);

// var x = 2.3, a = 6, b = 3;
// document.write(Math.abs(x));
// document.write(Math.ceil(x));
// document.write(Math.floor(x));
// document.write(Math.round(x));
// document.write(Math.exp(x));
// document.write(Math.log(x));
// document.write(Math.max(a, b));
// document.write(Math.min(a, b));
// document.write(Math.pow(a, b));
// document.write(Math.sqrt(x));
// document.write(Math.random());
// document.write("<br>")


//document.write(Math.SQRT1_2);
//document.write(Math.LN10);
// document.write(Math.LOG10E);

//STRING OBJECT//

// 1)The String object is used to work with strings.

//STRING OBJECT EXAMPLE//

//1)charAt()----->Returns the character at the specified index (position)
//2)charCodeAt()-->Returns the Unicode of the character at the specified index
//3)concat()----->Joins two or more strings, and returns a new joined strings
//4)indexOf()---->Returns the position of the first found occurrence of a specified value in a string
//5)lastIndexOf()-->Returns the position of the last found occurrence of a specified value in a string
//6)length------->Returns the length of a string
//7)match()------>Searches a string for a match against a regular expression, and returns the matches
//8)replace()---->Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
//9)search()----->Searches a string for a specified value, or regular expression, and returns the position of the match
//10)slice()----->Extracts a part of a string and returns a new string
//11)split()----->Splits a string into an array of substrings
//12)substr()---->Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
//13)substring()-->Extracts the characters from a string, between two specified indices
//14)toLowerCase()-->Converts a string to lowercase letters
//15)toUpperCase()-->Converts a string to uppercase letters
//16)trim()------->Removes whitespace from both ends of a string

//SYNTAX FOR USING PROPERTIES OF STRING//

// var str = "Hello World!";
// var res = str.length;
// document.write(res);

// var str = "Hello World!";
// var res = str.charAt(0);

// document.write(res);

var str = "Hello World!";
var res = str.charCodeAt(0);

document.write(res);

// var str1 = "Hello";
// var str2 = "World!";
// var res = str1.concat(" ", str2);

// document.write(res);

// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");

// document.write(pos);

// var str = "Please locate where 'locate' occurs!";
// var pos = str.lastIndexOf("locate");

// document.write(pos);

// var str = "Please locate where 'locate' occurs!";
// var pos = str.search("locate");
// document.write(pos);

// var str = "Apple, Banana, Kiwi";

// var res = str.slice(7, 13);

// document.write(res);


// var str = "Apple, Banana, Kiwi";
// pos = str.replace("Banana", "Kiwierrrr");

// document.write(pos);

//Date object//

// 1)The Date object is used to work with dates and times.

// new Date();
// new Date(milliseconds)
// new Date(dateString)
// new Date(year,month,day,hours,minutes,seconds,milliseconds)

//Date object example//

//1)getDate()----->Returns the day of the month (from 1-31)
//2)getDay()------>Returns the day of the week (from 0-6)
//3)getFullYear()-->Returns the year
//4)getHours()---->Returns the hour (from 0-23)
//5)getMilliseconds()-->Returns the milliseconds (from 0-999)
//6)getMinutes()---->Returns the minutes (from 0-59)
//7)getMonth()----->Returns the month (from 0-11)
//8)getSeconds()--->Returns the seconds (from 0-59)
//9)getTime()------>Returns the number of milliseconds since midnight Jan 1, 1970, and a specified date
//10)getTimezoneOffset()-->Returns the time difference between UTC time and local time, in minutes
//11)getUTCDate()----->Returns the day of the month, according to universal time (from 1-31)
//12)getUTCDay()------>Returns the day of the week, according to universal time (from 0-6)
//13)getUTCFullYear()-->Returns the year, according to universal time
//14)getUTCHours()---->Returns the hour, according to universal time (from 0-23)
//15)getUTCMilliseconds()-->Returns the milliseconds, according to universal time (from 0-999)
//16)getUTCMinutes()---->Returns the minutes, according to universal time (from 0-59)
//17)getUTCMonth()----->Returns the month, according to universal time (from 0-11)
//18)getUTCSeconds()--->Returns the seconds, according to universal time (from 0-59)
//19)parse()----------->Parses a date string and returns the number of milliseconds since January 1, 1970
//20)setDate()--------->Sets the day of the month of a date object
//21)setFullYear()----->Sets the year of a date object
//22)setHours()------->Sets the hour of a date object
//23)setMilliseconds()-->Sets the milliseconds of a date object
//24)setMinutes()----->Sets the minutes of a date object
// //25)setMonth()------->Sets the month of a date object
// //26)setSeconds()----->Sets the seconds of a date object
// //27)setTime()-------->Sets a date to a specified number of milliseconds after/before January 1, 1970
// //28)setUTCDate()------>Sets the day of the month of a date object, according to universal time
// //29)setUTCFullYear()-->Sets the year of a date object, according to universal time
// //30)setUTCHours()----->Sets the hour of a date object, according to universal time
// //31)setUTCMilliseconds()-->Sets the milliseconds of a date object, according to universal time
// //32)setUTCMinutes()----->Sets the minutes of a date object, according to universal time
// //33)setUTCMonth()------->Sets the month of a date object, according to universal time
// //34)setUTCSeconds()----->Sets the seconds of a date object, according to universal time
// //35)toDateString()----->Converts the date portion of a Date object into a readable string
// //36)toGMTString()------>Deprecated. Use toUTCString() instead. Converts a date to a string, according to Greenwich Mean Time
// //37)toISOString()----->Returns the date as a string, using the ISO standard
// //38)toJSON()---------->Returns the date as a string, formatted as a JSON date
// //39)toLocaleDateString()-->Converts the date portion of a Date object to a string, using locale conventions
// //40)toLocaleTimeString()-->Converts the time portion of a Date object to a string, using locale conventions
// //41)toLocaleString()----->Converts a Date object to a string, using locale conventions
// //42)toString()----------->Converts a Date object to a string
// //43)toTimeString()------->Converts the time portion of a Date object to a string
// //44)toUTCString()-------->Converts a date to a string, according to universal time

// //Date object example//

// var d = new Date();
// document.write(d);

// var d = new Date(86400000);
// document.write(d)

// //compare two date//

// var d1 = new Date("October 13, 2014 11:13:00");
// var d2 = new Date("October 13, 2014 11:13:00");

// if (d1 > d2) {
//     document.write("d1 is greater than d2");
// } else {
//     document.write("d2 is greater than d1");
// }

// var myDate = new Date();
// myDate.setFullYear(2010, 0, 14);
// var today = new Date();
// if (myDate > today) {
//     alert("Today is before 14th January 2010");
// }
// else {
//     alert("Today is after 14th January 2010");
// }

// var mydate = new Date();
// mydate.setFullYear(2010,0,14);

// mydate.setDate(mydate.getDate()+5);

//Boolean Object//

//1)Boolean()---->Returns a Boolean object

var myBoolean = new Boolean();

//Document Object//

// 1)cookie------------->Identifies the value of the cookie
// 2)Lastmodified------->The date that the document was last modified

// Methods

// document.write();
// document.writeln();

//window Object//

// 1)window.innerHeight---->Returns the height of the browser window, including, if rendered, the horizontal scrollbar.
// 2)window.innerWidth----->Returns the width of the browser window, including, if rendered, the vertical scrollbar.
// 3)window.outerHeight---->Returns the height of the browser window, including toolbars/scrollbars.
// 4)window.outerWidth----->Returns the width of the browser window, including toolbars/scrollbars.
// 5)window.screenX------->Returns the horizontal coordinate of the window relative to the screen.
// 6)window.screenY------->Returns the vertical coordinate of the window relative to the screen.
// 7)window.screenLeft---->Returns the horizontal coordinate of the window relative to the screen.
// 8)window.screenTop----->Returns the vertical coordinate of the window relative to the screen.
// 9)window.screen.height->Returns the height of the user's screen, in pixels.
// 10)window.screen.width->Returns the width of the user's screen, in pixels.
// 11)window.screen.availHeight->Returns the height of the user's screen, in pixels, minus interface features like the Windows Taskbar.
// 12)window.screen.availWidth->Returns the width of the user's screen, in pixels, minus interface features like the Windows Taskbar.
// 13)window.screen.colorDepth->Returns the bit depth of the color palette for displaying images.

//window properties//

// window.closed-------->identigies whether the window is closed
// window.opener--------> returns a reference to the window that opened the current window
// window.status-------->sets or returns the statusbar text of a window

//Forms and data//

//END OF JS//

