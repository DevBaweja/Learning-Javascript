/***********************
    Execution Context


Parser -- Abstract Syntax Tree
Execution Context 

Global Execution Context(Global Object - window)
Every function make their own execution context

Execution Context Object 
1. Variable Object (variable declaration,function declaration)
2. Scope Chain (Current variable object as well as of all their parent)
3. This variable

Variable Object
    1. Argument object is created, containing all the argument that were passed into function
    2. Function Declarations,for each funciton,a property is created in variable object, pointing to the function 
    3. Variable Declaration, for each variable,a property is created in variable object, and set to undefined
In One Word,Hoisting ie all the variable and function are available before execution even starts

Scoping Chain 
    1. Where can be access this particular function in code
    Each variale and function have scope
    2. Mostly programming language block creats scope 
    In JS only way to create scopes are by function 

    3. Lexical Scoping - Getting access to parent context

This Varible
    1. It is given to each and every execution context
    2. Regular Function Call - this keyword point at global object
    3. Method call - this keyword point to object that is calling method

    this keyword is not assigned value untill function where it is actually defined is called
*/

/*
///////////////////////////////////////
// Lecture: Hoisting

// Hoisting is possible in function declarations
// As funciton are already declaraed in execution context

calculateAge(1990);

function calculateAge(year){
    console.log(2016-year);
}


// Function Expressions does not support hoisting 
// As variables are set to undefined

// retirement(1990);
// error retirement is not a function

var retirement = function(year)
{
    console.log(65-(2016-year));
}

retirement(1990);

// Hoisting happen with variables on different way ie set to type as undeifned
// Also if we dont declare it further anywhere then it is error 
//  birthYear is not defined

// console.log(birthYear);

console.log(age);
// undefined
// as it is declared further 



var age = 23;
console.log(age);

function foo()
{
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
// Due to block scope variable is not even present outside
// ie this variable is within execution context of the function 
// it is unavaliable to global execution context
// again if we have declared this variable in global context
// then it will be associated with that context only
console.log(age);

*/


/*
///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'But!!';
var a = 'How??';
console.log(a);
// There is not problem of multiple declaration 
// It Simply take overwritten value

var count = 0;
if (true) {
    var count=1;
    console.log(count);
}
console.log(count);
// Since it have access to if-block variables
// So it will be redefined 



// Simple Lexical Scoping
if(true){
    var a = 10;
    if(true)
    {
        console.log(a);
    }
}

// Overwritting Lexical Scoping
if(true){
    var a = 10;
    if(true)
    {
        var a = 20;
        console.log(a);
    }
}


// Defining another function within function execution context
var a = 'Hello!'; // Global Context
first();

function first() {
    var b = 'Hi!';
    second(); // In First execution context

    function second() {
        var c = 'Hey!';
        // Overwritting Lexical Scoping
        //var b = 'No!';
        //var a = 'Yes!';
        console.log(a + b + c);
    }
}
second();
// This function is in first function Execution Context


// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}
// here third function dont have access to context of first as thers is no lexical scoping
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/

// Execution Stack (Order in which functions are called and forms stack)
// third
// second
// first
// Global Execution context


// Scope Chain (Order in which funcitons are written lexically)
// Global - a(Global),first(),third()
// first - a(Global),(No Lexical),b(self),first(),second(),third()
// second - a(Global),b(Lexical),c(self),first(),second(),third()
// third - a(Global),(No Lexical),d(self),first(),third()

// here in case of functions we can say that first() and third() are in global execution context
// while second() is in first() execution context so second() can be called only on first() execution


///////////////////////////////////////
// Lecture: The this keyword
/*
console.log(this);
// this keyword in global execution context is simply window object


// Regular function call 
calculateAge(2000);
function calculateAge(year)
{
    console.log(2016-year);
    console.log(this);
}
// Object that this function is attached to is global object . This variable is global obejct


// Method Call
var john = {
    name:'John',
    yearOfBirth:2000,
    calculateAge: function()
    {
        console.log(this);
        console.log(2016-this.yearOfBirth);

        function innerFunction(){
            console.log(this); // it is again window object
        }
        innerFunction();
    } 
};
john.calculateAge(2000);

// Object that this function is attached to it is john object , This keyword is john object
// In innerFunction regular function call happens and hence it is window object

var mike = {
    name:'Mike',
    yearOfBirth:1990
};
mike.calculateAge = john.calculateAge; // brought function as variable into another object
mike.calculateAge();

// This variable only become something when method is being called

*/