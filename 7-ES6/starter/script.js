// ES6 or ES2015
// Well supported in all modern browsers
// No support in older browsers
// Can use most features in production with transpiling and polyfilling ( convert to ES5 )

/*
Variable Declaration with let and const
Block and IIFEs
String
Arrow Function
Destructing
Arrays
Spread Operator
Rest and Default parameters
Maps
Classes and subclasses

Asynchronous js
Promise
Native modules
*/

/**********************
let and const
*/
/*
// ES5
var name5 = 'Jane Smith';
var age5 = '23';

name5 = 'Jane Miller';

// ES6
// let is like var and const are for constant
const name6 = 'Jane Smith';
let age6 = '23';

// name6 = 'Jane Miller';
// Assignment to constant variable
*/

/*
if(true)
{
    var el5 = 0;
    let el6 = 0;
}
console.log('Element is : '+el5);
// console.log('Element is : '+el6);

// Variable declared with var in ES5 are function scoped
// Variabele declared with let and const are block scoped
*/
/*
// ES5
function driveLicence5(passedTest){
    if(passedTest)
    {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName+' born in '+yearOfBirth+' is allowed to drive car');
    // Function Scope
}
driveLicence5(true);
// ES6

function driveLicence6(passedTest){
    if(passedTest)
    {
        let firstName = 'John';
        const yearOfBirth = 1990;
        console.log(firstName+' born in '+yearOfBirth+' is allowed to drive car');       
    }
    // console.log(firstName+' born in '+yearOfBirth+' is allowed to drive car');
    // Block Scope
}

driveLicence6(true);

function driveLicence6(passedTest){
    let firstName;
    // const yearOfBirth;  Missing initializer in const declaration
    const yearOfBirth = 1990;
    if(passedTest)
    {
        firstName = 'John';
        // yearOfBirth = 1990;
        console.log(firstName+' born in '+yearOfBirth+' is allowed to drive car');       
    }
    // console.log(firstName+' born in '+yearOfBirth+' is allowed to drive car');
    // Block Scope
}

driveLicence6(true);

// First variables are stored
// console.log(element);
// It will return error as el is not defined

console.log(element5);
var element5;
// It will print it as undefined

// console.log(element6);
let element6;
// Temporal dead zone - Variable are actually hoisted but we still cannot access them before they are declare
*/

// Power of block scope
/*
var i = 0;
for(var i =0 ; i < 3;i++)
    console.log(i);
console.log(i);
// Here i will not be zero


let j = 0;
for(let j =0 ; j < 2;j++)
    console.log(j);
console.log(j);
// Here j will be zero
*/

/*********************
Blocks and IIFEs
*/

// es5
// IIFEs - Achieving data privacy (not piece of reusable code)
// which can be done through functions also as var have function scope
/*
(function () {

})();

// Now we can achieve this with let and const by using block scope

{
    const a = 1;
    let b = 2;
    var c = 3;

    var add = function () {
        return(a+b);
    }
}
// console.log(a+b);
// Not accessable
console.log(c);
console.log(add());

// This is so similar to using IIFEs and power of closures to get public method in return
// so that we can access private method and properties

// So in short write public methods as var and private methods as let or const

*/

/*

{
    (function(){
        console.log("IIFE in block");
    })();
}

var years = [2010,2000,2005];
var cyear = 2020;

var calculateAge = function(dateOfBirth){
    return cyear-dateOfBirth;
}
var calculateAdult = function(age){
    return (age>=18);
}

var genericFn = function(array,fn){
    var result = [];
    for(var i=0;i<array.length;i++)
        result.push(fn(array[i]));
    return result;
}

var ages = genericFn(years,calculateAge);
var isAdult = genericFn(ages,calculateAdult);
*/

/********************
    String
*/
/*
let firstName = 'John';
let lastName = 'Smith';
let cyear = 2020;
const yearOfBirth = 1990;

function calculateAge(yearOfBirth){
    return cyear-yearOfBirth;
}

// ES5
console.log('This is '+firstName+' '
+lastName+'. He was born in '
+yearOfBirth+'. Today, he is '
+calculateAge(yearOfBirth)
+' year old.');

// ES6
// Using template literal
console.log(`This is ${firstName+' '+lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old`)


// Methods

// Automata
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('John'));
console.log(n.endsWith('Smith'));
console.log(n.includes('hn Sm'));

// Repeat function
console.log(firstName.repeat(2));
console.log(firstName+' '.repeat(2));
// It will repeat space as string
console.log((firstName+' ').repeat(2))
console.log(`${firstName} `.repeat(2));
*/

/********************
    Arrow Function
*/

// ES5
/*
const years = [2000,2005,1998,2010,1999];
let cyear = 2020;
function calculateAge(year){
    return cyear-year;
}
var ages5 = years.map(calculateAge);  // Callback function
*/

/*
var ages5 = years.map(function(current){
    return cyear-current;
})

ages5 = years.map(function(current,index,array){
    return `Age element ${index+1} : ${cyear-current}`;
})

// ES6

let ages6 = years.map(current => cyear-current); 

ages6 = years.map((current,index,array) => `Age element ${index+1} : ${cyear-current}`);
// no need of explicit return statement

ages6 = years.map((current,index,array) => {
    const now = new Date().getFullYear();
    let age = now-current;
    return `Age element ${index+1} : ${age}`;
});
*/

/**********
 
*/
// Unlike normal function arrow function don't get their own this keyword
// Uses this keyword in which they are written in
// Lexical this variable

// ES5
/*
var box5 = {
    color : 'green',
    position : 1,
    clickMe : function(){
        // var color = this.color;
        // var position = this.position;

        // var self = this;

        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This is box number '+this.position+' and it is '+this.color;
            // It will not have access to this keyword of box5 as only clickMe 'method function' have its access as it is defined in object
            // But callback function is 'regular function' call and this point to global object

            // It can be solved by saving those argument in function itself
            alert(str);
        });
    }
}
box5.clickMe();
*/
// Or by passing those argument in function
/*
var box5 = {
    color : 'green',
    position : 1,
    clickMe : function(box){
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This is box number '+box.position+' and it is '+box.color;
            alert(str);
        });
    }
}
box5.clickMe(box5);
*/

// ES6
/*
const box6 = {
    color : 'green',
    position : 1,
    clickMe : function(){

        document.querySelector('.green').addEventListener('click',() => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
*/
// box6.clickMe();

/*
const box6 = {
    color : 'green',
    position : 1,
    clickMe : () => {
        document.querySelector('.green').addEventListener('click',() => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
// Again in this case clickMe function share lexical this variable which is of global context
// Hence it no longer has its own this keyword of object
box6.clickMe();
*/

/*
// ES5
function Person(name){
    this.name = name;
}

Person.prototype.myFriends5 = function(friends){

    var result = friends.map(function(friend){
        return this.name + ' is friend with ' + friend;
    }.bind(this))
    console.log(result);
}

var friends = ['Bob','Jane','Mark'];
new Person('John').myFriends5(friends);
// Bind make copy of function while call calls it immediately
// Arrow function can be done by bind in ES5

// ES6
Person.prototype.myFriends6 = function(friends){

    let result = friends.map( friend => 
        `${this.name} is friend with ${friend}`;
    );
    console.log(result); 
}

new Person('John').myFriends6(friends);
*/

/********************* 
    Destructuring
*/

// Way to extract data from data structure like object or an array

// ES5
/*
var john = ['John',26];
var name = john[0];
var age = john[1];
*/
// ES6
/*
const [name,age] = ['John',26];

const [name,age] = john;
// Maybe spread operator is implicit
const [name,age] = [...john];


const obj = {
    firstName : 'John',
    lastName : 'Smith'
};

const {firstName,lastName} = obj;

const {firstName:First,lastName:Last} = obj;
*/
/*
function calcAgeRetirement(year){
    const now = new Date().getFullYear();
    let age = now-year;
    let retireAge = 65-age;
    return [age,retireAge];
}
// In ES5 it can be done by just returning object
const [age,retireAge] = calcAgeRetirement(2000);
*/

/*********************
    Arrays and Loop
*/

// const boxes = document.querySelectorAll('.box');
// It return nodeList

// ES5
/*
var boxesArrays5 = Array.prototype.slice.call(boxes);

boxesArrays5.forEach(function(current){
    current.style.backgroundColor = 'dodgerblue';
});
*/

// ES6
// nodeList to Array
/*
const boxesArrays6 = Array.from(boxes);
boxesArrays6.forEach(current => {
    current.style.backgroundColor = 'dodgerblue';
});
*/
// In forEach  and map we cannot break or continue

// ES5
/*
for(var i=0;i<boxesArrays5.length;i++)
{
    if(boxesArrays5[i].className === 'box blue'){
        continue;
    }

    boxesArrays5[i].textContent = 'I changed to blue'; 
}
*/
// ES6
/*
for (const current of boxesArrays6) {
    if(current.className.includes('blue'))
        continue;
    current.textContent  = 'I changed to blue';
}
*/

//ES5
// indexOf() in ES5
// var ages = [12,17,8,21,14,11];
/*
var fullAge = ages.map(function(current){
        return current >= 18;   
});

console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);
*/

// ES6
/*
ages.findIndex(current => current>=18);
ages.find( current => current>=18);
*/

/***********************
    Spread operator
*/
// Way to expand element of array in places like argument or function call
/*
function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum1 = addFourAges(18,30,12,21);

var ages = [18,30,12,21];
// ES5
// Apply method - Receive array and call function that apply method is used on using element of array as argument
var sum2 = addFourAges.apply(null,ages); 

// ES6
const sum3 = addFourAges(...ages);

// Printing of Array
console.log(...ages);
*/
/*
// Joining array
const familySmith = ['John','Jane','Mark'];
const familyMiller = ['Mary','Bob','Ann'];

const bigFamily = [...familySmith,'Lily',...familyMiller];
*/

// It can be applied on nodeList as well
/*
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h,...boxes];

Array.from(all).forEach(current => {
    current.style.color = 'purple';
})

*/

/********************
    Function Parameters
    Rest Parameter
    Default Parameter 
*/

// Rest Parameters
// It allow us to pass arbitary number of element into function
// As when we use spread operator and don't know its length

// Opposite of spread operator

// var cyear = new Date().getFullYear();
// ES5
// When number of argument is don't defined then simply no argument
// Using argument variable (similar to this variable)

/*
function calculateAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments); // from in es6
    // var argsArr = Array.from(argument)

    argsArr.forEach(function(year) {
        console.log(cyear-year);
    });
}
// Argument is not an array
// we can say this by seeing their prototype
// Array like structure

calculateAge5(2008,2000,1965,2010);
calculateAge5(2008,2000,1965,2010,2002);
*/

// ES6
/*
function calculateAge6(...years){
    years.forEach(year => {
        console.log(cyear-year);
    });
}

calculateAge6(2008,2000,1965,2010);
calculateAge6(2008,2000,1965,2010,2002);

*/

// Spread Operator- Function call
// Rest Parameters- Function argument

// var cyear = new Date().getFullYear();

// ES5
/*
function isFullAge5(limit) {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments,1); 
    // Start copy from position one

    argsArr.forEach(function(year) {
        console.log((cyear-year)>=limit);
    });
}

isFullAge5(21,2008,2000,1965,2010);
*/
/*
function isFullAge6(limit,...years){
    years.forEach(year => {
        console.log((cyear-year)>=limit);
    });
}

isFullAge6(21,2008,2000,1965,2010);
*/
/*
var friend = ['Mike','John','Ann'];

function showAllFriends(...friends){
    friends.forEach(friend => console.log(friend));
}

showAllFriends(...friend);
*/

/********************
    Default Parameters
*/
// Carrying using bind
// Preset value must be in order

// Default Parameter
// When we want one or more parameters to be preset
// we want them to have default value

// ES5
/*
function SmithPerson(firstName,yearOfBirth,lastName,nationality){

    lastName = (lastName === undefined) ? 'Smith' : lastName;   
    nationality = (nationality === undefined) ? 'Canada' : nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John',1990);
// Js allows us to call function without full parameters 
// so remaining parameters are assigned as undefined

var mike = new SmithPerson('Mike',1986,undefined,'American');
var emily = new SmithPerson('Emily',1983,'Diaz','Spanish');
*/

// Using bind
/*
function SmithPerson(firstName,yearOfBirth,lastName,nationality){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

// We can easily specify bind to which element we need to preset
var johnSmithPerson = SmithPerson.bind(this,lastName = 'Smith',nationality = 'Canada');
var john = new johnSmithPerson('John',1990);

var mikeSmithPerson = SmithPerson.bind(this,lastName = 'Smith');
var mike = new mikeSmithPerson('Mike',1986,undefined,'American');

var emily = new SmithPerson('Emily',1983,'Diaz','Spanish');
*/

/*
function SmithPerson(firstName,yearOfBirth,lastName = 'Smith',nationality = 'Canada'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
let john = new SmithPerson('John',1990);
let emily = new SmithPerson('Emily',1983,'Diaz','Spanish');

*/

/***********************
    MAPS
*/

// Key-Value Data Structure
// Keys can be Strings,Number,Boolean,function,objects
/*
const question = new Map();

// Add Data
question.set('question', 'What is name of lastest major js version ?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES2015');

question.set('correct', 2);

question.set(true, 'Correct Answer');
question.set(false, 'Wrong Answer');

// Get Data
question.get('question');
// Map can give us size also
question.size;

// Check and Delete Data

if (question.has(4))
    question.delete(4);
question.has('correct'); // return true or false
*/
// Clear all element
// question.clear();

// Iterate over map
// Similar to array
// question.forEach((value,key,map)=> console.log(`This is ${key} and set to ${value}`));

/*
for (var entry of question) {
    console.log(entry);
}
*/
// It return key,value pair so we need to destructure it
/*
question.entries(); // gives us map iterator to iterate map
// This kind of destructuring can also be applied to Array 
// Again using entries to get Array Iterator
for(let [key,value] of question.entries()){
    console.log(`This is ${key} and set to ${value}`);
}

// To iterate over object we need 
Object.values(obj)

Object.assign(obj) 
// This is used to for assigning one obj to another obj 
// Which can also be done by spread operator 

obj.valueOf()
*/

// Putting it all together
/*
console.log(question.get('question'));

for(let [key,value] of question.entries()){
    if(typeof(key) === 'number')
        console.log(`Option ${key} . ${value}`);
}

const ans = parseInt(prompt('Write correct answer'));

let result = (ans === question.get('correct'));
console.log(question.get(result));
// !isNaN(key) Printing true and false also
// (key instanceof Number)  Nothing as Number are primitives
// We can also use ans1,ans2.. as answser and loop over with includes(ans)
*/

/**********************
    Classes
*/

// ES5
/*
var Person5 = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var now  = new Date().getFullYear();
    var age = now - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John',1990,'teacher');
john5.calculateAge();
*/

// ES6
/*
class Person6 {

    constructor(name,yearOfBirth,job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var now  = new Date().getFullYear();
        var age = now - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey There');
    }
}
// no function keyword, no separate commas like in object, no semicolon like in function declaration
// Also function created using class  will be function declaration and not arrow function 
// so that this point to object or instance of class

const john = new Person6('John',1990,'teacher');
john.calculateAge();
Person6.greeting();
*/

// Class defination are not hoisted unlike function constructors
// We need to first implement class then only it can be used

// Person6.prototype.lastName = 'Smith';
// We can only add method to classes and not properties
// like we can do it in function constructor prototype property

/**********************
    Classes and Inheritance
*/

// ES5
/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var now = new Date().getFullYear();
    var age = now - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olymplicGames, medals) {

    Person5.call(this, name, yearOfBirth, job);
    this.olymplicGames = olymplicGames;
    this.medals = medals;
}
// Super constructor with this keyword
// this is to be used as we need to set Person properties to new althete object

// Inheritance
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
    this.medals ++;
    console.log('New Medals ' + this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

var john5 = new Person5('John',1990,'teacher');
// john5.wonMedal();
// Only access to Athele5 and not Person5

*/

/*
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var now = new Date().getFullYear();
        var age = now - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6{
    constructor(name,yearOfBirth,job,olympicGames,medals)
    {
        super(name,yearOfBirth,job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John',1990,'swimmer',3,10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();    
*/

/**********************
    Coding Challenge

    Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.


*/
/*
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTree) {
        super(name, buildYear);
        this.area = area;
        this.numTree = numTree;
    }

    treeDensity() {
        const density = this.numTree / this.area;
        console.log(`${this.name} has tree density of ${density} trees per sq km`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name},build in ${this.buildYear}, is a ${classification.get(this.size)} street`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
new Park('National Park', 1894, 2.9, 3541),
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
new Street('Evergreen Street', 2008, 2.7, 2),
new Street('4th Street', 2015, 0.8),
new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {

    // Reduce is used to accumulate stuff
    const sum = arr.reduce((prev,cur,index) => prev+cur , 0);
    return [sum,sum/arr.length];
}

function reportParks(parks) {
    console.log('----Parks Report -----');

    // Density
    parks.forEach(cur => cur.treeDensity());

    // Average Age
    const now = new Date().getFullYear();
    const ages = parks.map(cur => now-cur.buildYear);
    const [totalAge,avgAge] = calc(ages);
    console.log(`Our ${parks.length} has avergae of ${avgAge} years.`);
    // More than 1000 tree
    const i = parks.map(cur => cur.numTree).findIndex(cur => cur>=1000);
    console.log(`${parks[i].name} has more than 1000 tress`);
}
function reportStreets(streets) {
    console.log('----Street Report -----');

    // Total and Average length of street
    const len = streets.map(cur => cur.length);
    const [TotalLen,avgLen] = calc(len);
    console.log(`Our ${streets.length} streets have total length of ${TotalLen} km with averge of ${avgLen} km`);

    // Classify street
    streets.forEach(cur => cur.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
*/
// Using class and arrow function
/*
class Element {
    constructor(name)
    {
        this.name = name;
    }

    displayName = () => {
        console.log(this.name);
        console.log(this);
    }
}
const john = new Element('John');
john.displayName();
*/

// Using function constructor and arrow function
/*
function Element(name){
    this.name = name;
}
Element.prototype.displayName = ()=>{
    console.log(this.name);   
}
const john = new Element('John');
john.displayName();
*/

// Using object literal and arrow function
/*
const john = {
    name : 'John',
    displayName : () =>{
        console.log(this.name);
    }
}
john.displayName();
*/
// Arrow function of method function this remain at object

// It will help when

// const john = {
//     name: 'John',
//     yearOfBirth: 1990,

//     displayName: function () {

//         // It belong to object
//         // console.log(this);

//         /*
//                 document.querySelector('h1').addEventListener('click',function(){
//                     console.log(this);
//                     // It belong to element h1 or window
//                 });

//         */

//         /*
//                 // So we use arrow function
//                 document.querySelector('h1').addEventListener('click',() => {
//                     console.log(this);
//                     // It belong to object
//                 });
//         */
//     }
// }
// john.displayName();

// const mike = {
//     name: 'Mike',
//     yearOfBirth: 1989,

//     displayName: () => {
//         // It belong to window
//         console.log(this);

//         /*
//                 document.querySelector('h1').addEventListener('click', function () {
//                     console.log(this);
//                     // It belong to element h1 or window
//                 })
//         */

//         /*
//                 // Alert of this suitation
//                 document.querySelector('h1').addEventListener('click', () => {
//                     console.log(this);
//                     // It belong to Window
//                 });
//         */

//     }
// }

// mike.displayName();
// Function(Outer) - this will belong to object &  Function(Inner) - this will belong to Window or acc to function - Don't works (Cause Problem)
// Function(Outer) - this will belong to object & () => (Inner) - this will belong to object - Works (Solution)
// () => (Outer) - this will belong to window & Function(Inner) - this will belong to Window or acc to function - Don't works
// () => (Outer) - this will belong to window & () => (Inner) - this will belong to Window - Don't Works (Be Aware)
/*
class Element {
    constructor(name)
    {
        this.name = name;
    }

    // Arrow functions are considered as function
    // ie outer function cann't be arrow function 
    // as we don't need to write function keyword also
    displayName = () => {
        
        console.log(this);
        // this is object
        document.querySelector('h1').addEventListener('click',() => {
            console.log(this);
        });
    }
}
const jonas = new Element('John');
jonas.displayName();
// Classes deal with it differently 
// It will work fine as outer function is registred as method function only not arrow function
*/
