// Primitives
/*
Numbers
Strings
Boolean
Undefined
Null
*/

// Objects
/*
Arrays
Functions
Objects
Dates
Wrappers for Numbers,String,Boolean
*/

/*
Every object in js have prototype property
Inheritance is made possible by prototype property every object ever have.
Prototype chain is formed
Object stands as base prototype
null is only one which have null prototype is therefore final link in prototype chain 

Every js object has prototype property, which make inheritance possible in js

Prototype property of object is where we put methods and properties that
we want other objects to inherit

The constructor prototype property is not prototype of constructor itself, it is prototype of 
all instance that are created though the constructor

When certain methods(or properties) are called, search starts in object itself, and if it is not found
the search moves on to object's prototype. This continues untill method is found. 
*/

/*******************  
    Function Constructor
*/
// Object Literal
// var john =  {
//     name : 'John',
//     yearOfBirth : 1990,
//     job : 'Teacher'
// };
/*
var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
// Prototype must be declared first  
Person.prototype.calculateAge = function(){
    console.log(2016-this.yearOfBirth)
}
Person.prototype.lastName = 'Smith';
// Adding Prototype properties sholud be above all objects

// Function can be declared with Person also 
// But here we are adding it to it prototype
// Thing is if it is wriiten in Person then every object will have it kind of static
// But it is added in prototype then Person will have it

var john = new Person('John',1990,'Teacher');
console.log(john);
john.calculateAge();
console.log(john.lastName);

var jane = new Person('Jane',1969,'Designer');
var mark  = new Person('Mark',1948,'Retired');
console.log(jane);
jane.calculateAge();
console.log(jane.lastName);
console.log(mark);
mark.calculateAge();
console.log(mark.lastName);


console.log(Person.prototype);
console.log(john.__proto__);
*/

/*
function Person(name,yearOfBirth,job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge = function()
    {
        return 2016-this.yearOfBirth;
    }

}

var john = new Person('John',1990,'Teacher');
// console.log(john.calculateAge());
// Prototype chain 
// Every object has prototype which is the prototype of its parent and chain continue untill Object
// Object is base of prototypes and its parent prototype is null

// In other way prototype of object is where we put properties and method that we want other objects to inherit
// Constructor prototype is NOT prototype of constructor itself it is prototype of ALL instance that are created through it

// Calling function create new execution context which also have 'this' variable
// In regular function call 'this' refer to global object
// New operator take cares of that and make that this point to new created empty object

Person.prototype.calculateAge = function(){
    console.log(2016-this.yearOfBirth)
}
// Adding function to prototype of Person so that it become somewhat of static and not every object has it copy
// But still be able to access it

// Object prototype are accessed by john.__proto__ 
// Classes/Function prototype are accessed by Person.prototype

john.__proto__ === Person.prototype
Object.prototype


john.hasOwnProperty('name')
// This hasOwnProperty can detect properties and method
john.hasOwnProperty('calculateAge')
// Also if this property of calculateAge is in prototype of Person then hasOwnProperty will return false

// instanceof operator
// It is like question
john instanceof Person
Person instanceof Object
Object instanceof Object
*/

/*
// Everthing is object
// Array as Object

var x = ['John',1999,'Teacher'];

// console.info(x);
// console.log(x);
x instanceof Array
Array instanceof Object
x.__proto__ === Array.prototype
// Array.prototype  will give us all the method of array
// All the method are stored in prototye of Array that is why we are able to use it for every object we created
var y = new Array();
y[0] = 'John';
y[1] = 1999;
y[2] = 'Teacher';

*/

/********************
 Object.create
*/
/*
// Another way to object that are inheritance from prototype

// We first define object that act as prototype and then create new object
var personProto = {
    calculateAge : function()
    {
        return (2016-this.yearOfBirth);
    }
} 

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto,{
    name : {value : 'Jane'},
    yearOfBirth : {value : 1969},
    job : {value : 'designer'}
})

*/

/*********************
    Primitives vs Object
*/
/*
// In Primitive, Variables associated with primitive actually hold data itside of variable itself
// In Object, Variables associated with object don't actually contain object instead they contain refernce to place in memory
// So multiple variables associated with object can actually point to same object itself

// Primitives 
var a = 23;
var b = a;
// Changing var a will not effect var b
a = 46;
// Here data was copied and actually stored in variable associated with it


// Object
var x = [1,2];
var y = x;
// Changing var x will effect var y
x[0] = 2;

var john = {
    name : 'John'
}
var mike = john;
mike.name = 'Mike';
// Here, neither data copied occur nor we created new object 
// only new reference was created pointing to exact same object

var primitive = 27;
var object = {
    name : 'Jonas',
    city : 'Lisbon'
}

function change(p,o)
{
    p = 30;
    o.city = 'San Franciso';
}

change(primitive,object); 
// Call by Value Call by Reference
// Most language don't have concept of pointer to make it call by reference
// ie why they have object to resolve this issue
*/

/********************
    Function (First-Class Functions)
 */
// Function are also object
// Function can be stored in variables
/*
var change = function()
{}
change instanceof Object

function branch()
{}
branch instanceof Object
*/
// We can pass function as an argument into another function
// We can return function from a function

/**********************
    Function accepting function as argument
*/
/*
var years = [1990,2004,1976,1984,2000];

function genericfn(years,fn)
{
    var result = [];
    for(var year of years)
        result.push(fn(year));
    return result;
}

function calculateAge(dateOfBirth)
{
    return (2016-dateOfBirth);
}

function isFullAge(age)
{
    return age >= 18;
}

function maxHeartRate(age)
{
    if(age>=18 && age <= 81)
        return Math.round(206.9 - (0.67*age));
    return -1;
}

function generateCharacter(fullAge)
{
    return (fullAge) ? 'Adult' : 'Child';
}

var ages = genericfn(years,calculateAge);  
var fullAges = genericfn(ages,isFullAge);
var rates = genericfn(ages,maxHeartRate);
var character = genericfn(fullAges,generateCharacter)

*/

/**********************
    Function returning function as argument
*/
/*
function interviewQuestion(job)
{
    if(job === 'designer')
        return function(name)
        {
            console.log(name+', can you please explain what UX design is?');
        }

    if(job === 'teacher')
        return function(name)
        {
            console.log('What subject do you teach, '+name+' ?');
        }
    
    return function(name)
    {
        console.log('Hello, '+name+'. What do you do ?');
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Mike');

var Question = interviewQuestion('worker');
Question('Jane');

interviewQuestion('teacher')('Mark');

*/

/*********************
    Immediately Invoked function expression
*/
/*
function game()
{
    var score = Math.random()*10;
    console.log(score>=5);
}
game();

(function ()
{
    var score = Math.random()*10;
    console.log(score>=5);
})();
// () is to invoke function

// What inside of parenthesis cannot be statement it will treat it as expression then
(function (goodLuck)
{
    var score = Math.random()*10;
    console.log(score>=5-goodLuck);
})(5);


// function ()
// {}

// This is function declaration but it don't have any name for function declaration 
// javascript parser will throw error
// Trick js parser that what we have here is expression and not declaration

// IIFE can never be called again
// We are not using function to create piece of reusable code
// All we want here is new scope that is hidden from outside scope
// Data Privacy
*/

/*********************
    Closure
*/
/*
function retirement(retirementAge)
{
    var str = ' years left untill retirement';
    return function(yearOfBirth)
    {
        var age = 2016-yearOfBirth;
        console.log((retirementAge-age) + str)
    }
}

var retirementUS = retirement(65);
retirementUS(1990);

retirement(65)(1990);

// Inner function has always access to variables and parameters of outer function,even after outer function has returned 

// retirement function is called as new function get new execution context that is put on top of execution context
// That execution context has object which store variables,scope chain,this.
// Scope chain is like pointer to all the variable object that function has access to

// After function return, execution context of retirement function is actually gone 
// and with it variable object and scope chain should be gone , Actually NO

// Variable object is still there 
// When retirmentUS is called it put new execution context on stack
// Since inner function is written lexically in retirement function, it get access to its scope
// Scope chain remain innact
// Current execution context has closed in on outer variable object so that it can use it

var retirementGermany = retirement(60);
var retirementIceland = retirement(55);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


function interviewQuestion(job)
{
    return function(name)
    {
        if(job === 'designer')
           console.log(name+', can you please explain what UX design is?');
        else
        if(job === 'teacher')
            console.log('What subject do you teach, '+name+' ?');
        else
        console.log('Hello, '+name+'. What do you do ?');
    }
}

interviewQuestion('teacher')('John');


var designerQuestion = interviewQuestion('designer');
designerQuestion('Mike');

var Question = interviewQuestion('worker');
Question('Jane');

*/

/********************
    Bind,Call,Apply
*/
/*
var john = {
    name : 'John',
    age : 26,
    job : 'teacher',

    presentation : function(style,timeOfDay)
    {
        if(style === 'formal')
        {
            console.log('Good '+timeOfDay+', ladies and gentleman! I\'m '+this.name+', I\'m '+this.job+' and I\'m '+this.age+' years old.');
        }
        if(style === 'friendly')
        {
            console.log('Hey! What\'s up? I\'m '+this.name+', I\'m '+this.job+' and I\'m '+this.age+' years old. Have a nice '+timeOfDay+'.');
        }
    }
}

var emily = {
    name : 'Emily',
    age : 35,
    job : 'designer'
}

john.presentation('formal','morning');
// Call,Apply,Bind in short allow us to explicitly change this variable

john.presentation.call(emily,'friendly','afternoon');
// john.presentation.apply(emily,['formal','afternoon']);

var emilyFriendly = john.presentation.bind(emily,'friendly');

emilyFriendly('afternoon');
emilyFriendly('night');
// Bind allow us to preset some argument
// Carrying - It is technique in which we create funtion based upon another function with some preset parameters

var johnFormal = john.presentation.bind(john,'formal');

johnFormal('afternooon');

var years = [1990,2004,1976,1984,1998];

function genericfn(years,fn)
{
    var result = [];
    for(var year of years)
        result.push(fn(year));
    return result;
}

function calculateAge(dateOfBirth)
{
    return (2016-dateOfBirth);
}

function isFullAge(limit,age)
{
    return age >= limit;
}

var ages = genericfn(years,calculateAge);
var Japan = isFullAge.bind(this,20);
var fullJapan = genericfn(ages,Japan);
*/

/***********************

*/

/*

(function(){
    function Question(question,answers,correct)
    {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(var i=0;i<this.answers.length;i++)
            console.log(i+': '+this.answers[i]);
        
    }
    
    Question.prototype.checkAnswer = function(answer){
        if(answer === this.correct)
            console.log('Correct Answer !');
            else
            console.log('Wrong Answer. Try Again :)');
    }
    
    var q1 = new Question('Is javascript coolest programming language in the world ?',
    ['Yes','No'],0);
    
    var q2 = new Question('What is the name of this course\'s teacher ?',
    ['John','Micheal','Jonas'],2);
    
    var q3 = new Question('What does best describe coding ?',
    ['Boring','Hard','Fun','Tedious'],2);
    
    var questions = [q1,q2,q3]; 
    
    var n = Math.floor(Math.random() * questions.length);
    var currentQues = questions[n];
    currentQues.displayQuestion();
    
    var answer  = parseInt(prompt('Please select correct answer.'));
    currentQues.checkAnswer(answer);
})(); 

*/
/*
var years = [1990,2004,1976,1984,1998];

years.forEach(function(current,index,array){
    console.log((index+1) +' : '+ current +' from ' + array );
});

function myEach(list,callback){
    for(var i=0;i<list.length;i++)
    {
        callback(list[i],i,list)
    }
}

myEach(years,function(current,index,array){
    console.log((index+1) +' : '+ current +' from ' + array );
});
*/

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) console.log(i + ': ' + this.answers[i]);
    };

    Question.prototype.checkAnswer = function (answer, callback) {
        var sc;
        if (answer === this.correct) {
            console.log('Correct Answer !');
            sc = callback(true);
        } else {
            console.log('Wrong Answer. Try Again :)');
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('-------------');
    };

    var q1 = new Question('Is javascript coolest programming language in the world ?', ['Yes', 'No'], 0);

    var q2 = new Question("What is the name of this course's teacher ?", ['John', 'Micheal', 'Jonas'], 2);

    var q3 = new Question('What does best describe coding ?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) sc++;
            return sc;
        };
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        var currentQues = questions[n];
        currentQues.displayQuestion();

        var answer = prompt('Please select correct answer.');

        if (answer !== 'exit') {
            currentQues.checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();
