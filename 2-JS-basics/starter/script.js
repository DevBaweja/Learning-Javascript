
/******************
    Variables and Datatypes

// Number(Floating Point) , String , Boolean , Undefined(Does not have value yet) , Null(Non-existent)
// Primitive Datatypes

// Dynamic Typing

var firstName  = 'John';
console.log(firstName);

var lastName = 'Smith';
console.log(lastName);

var age = 20;
console.log(age);

var salary = 75463.64;
console.log(salary);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Camel Casting Notation

// Variable naming rules
var _3year = 3;
var johnMark = 'John and Mark';

// Identifier cannot have with symbol expect $ and _
// Identifier cannot start with numbers

// var function = 'function';
// var if = 'if';
// var delete = 'delete';

var a = 10;
var a = 20;
// no problem in declaring an variable twice as it is interpreted
// Mostly pppl and oopl will give error

// Identifier cannot have reserved js keywords
*/



/*******************
    Variables Mutation and Type Coercion


 // Type Coercion
var firstName = 'John';
var age = 28;

console.log(firstName +' '+ age); // Type Coercion

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName+' is '+age+' years old '+job+' and is '+isMarried+' married');

// Mutation
age = 'twenty eight';
job = 'driver';
alert(age+' years and is '+job);

var lastName = prompt('What is his last name? ');
console.log(firstName+' '+lastName);

*/




/*******************
 Basic Operators

var year,yearJohn,yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);
console.log(yearMark);

// Maths Operators
console.log(year + 2);
console.log(year - 2);
console.log(year * 2);
console.log(year / 10);
console.log(year % 10);
console.log(year ** 2);

// Logical Operators
// Logical Operators usually return boolean values
var johnOlder = ageJohn > ageMark;
if(johnOlder)
{
    console.log('John is elder');
}
else
{
    console.log("John is younger");
}

// typeof operator
// Uniary operator (only single input)
console.log(typeof johnOlder); // boolean
console.log(typeof ageJohn); // number (also true for floating points)
console.log(typeof 'Mark is older than John'); // string
var x;
console.log(typeof x); // undefined

*/



/******************** 
    Operator Precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Mulitple Operator
var isFullAge = now-yearJohn >= fullAge;
console.log(isFullAge);

// Grouping 
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
 
// Multiple Assignment
var x,y;
x = y =  (3+5)*4-6; // 8*4-6 // 32-6 // 26
// Assignment operator is from right to left

console.log(x,y); // we can use , in between two variables

console.log('Is Mark\'s height greater than John\'s ');

// More Operator

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++; // Increament
console.log(x);
x--; // Decreament
console.log(x);

*/


/********************
    Challenge

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var JohnBMI = massJohn / (heightJohn*heightJohn);
var MarkBMI = massMark / (heightMark*heightMark);

console.log(JohnBMI);
console.log(MarkBMI);

var MarkHigherBMI = MarkBMI > JohnBMI;
console.log(MarkHigherBMI);
*/

/********************
    IF / ELSE Statement
 

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus == 'married') {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully married!');
}

*/

/*******************
    Boolean Logic && || !
 

var firstName = 'John';
var age = 16;

if(age<13)
{
    console.log(firstName+' is boy');
}
else if(age>=13 && age <20)
{
    console.log(firstName+' is teenage');
}
else if(age>=20 && age <30)
{
    console.log(firstName+' is young man');
    
}
else{
    console.log(firstName+' is man');   
}

   //  Ternary Operator

var firstName = 'John';
var age = 16;
var condition = age>=20 && age <30;
(condition)?console.log(firstName+' drinks beer'):console.log(firstName+' drinks juice');

var drink = (!condition)?'beer':'juice';
console.log(drink);

if(condition)
{
    drink = 'beer';
}
else 
{
    drink = 'juice';
}
console.log(drink);


// Switch Statement
var firstName = 'John';
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor': 
        {
            console.log(firstName + ' teaches kids');
        }
        break;
    case 'driver':
        {
            console.log(firstName + ' drives');
        }
        break;
    case 'teacher': // FIRST one will be executed no error
        {
            console.log(firstName + ' copy techer');
        }
        break;
    default:
        {
            console.log(firstName + ' does something else');
        }
}

var firstName = 'John';
var age = 16;

switch (true) {
    case age < 13:
        {
            console.log(firstName + ' is boy');
        }
        break;
    case age >= 13 && age < 20:
        {
            console.log(firstName + ' is teenage');
        }
        break;
    case age >= 20 && age < 30:
        {
            console.log(firstName + ' is young man');
        }
        break;
    default: {
        console.log(firstName + ' is man');
    }

}
// if(age<13)
// {
//     console.log(firstName+' is boy');
// }
// else if(age>=13 && age <20)
// {
//     console.log(firstName+' is teenage');
// }
// else if(age>=20 && age <30)
// {
//     console.log(firstName+' is young man');
// }
// else{
//     console.log(firstName+' is man');   
// }

*/

/********************
    Truthy and Falsy values and equality operators


// falsy - undefined,null,0,'',NaN
// truthy - Not falsy value

var height;
if(height || null || 0 || '' || NaN ) // if any one would be true if block will execute
{
    console.log('Variable is defined');
}
else 
{
    console.log('Variable is undefined');
}


var width = 0;

if(width && width === 0)
{
    console.log('Variable is defined');
}
else 
{
    console.log('Variable is undefined');
}
// main difference between "==" and "===" operator is that formerly compares variable by making type correction

var string = '20';
var num = 20;

if(string==num)
{
    console.log('IF Block in ==');
} // this will execute as value is same type may differ

if(string===num)
{
    console.log('IF Block in ===');
} // this will not execute as type is not same 

var scoreJohn = (89+120+103)/3;
var scoreMike = (116+94+123)/3;
var scoreMarry = (97+134+105)/3;

console.log(scoreJohn,scoreMike,scoreMarry); // java will give error

switch(true)
{
    case (scoreJohn>scoreMike && scoreJohn>scoreMarry):
        console.log('John');
        break;
    case (scoreMike>scoreMarry):
        console.log('Mike');
        break;
    default : 
        console.log("Marry");                                    
}

// if(scoreJohn>scoreMike && scoreJohn>scoreMarry)
//     console.log('John');
//     else if(scoreMike>scoreMarry)
//     console.log('Mike');
//     else 
//     console.log('Marry');

*/


/********************
    Function

clear() function to clear console outputs
.exit in node js for exiting node environment in cmd

// it will give error if you have not declared any variable and tries to log it
// but it will give falsy value - undefined if not initialised only declared

console.log(a); // a is not defined / declared
var a;
console.log(a);


function calculateAge(birthYear,deathYear) {
    return 2000-birthYear-deathYear;
}


function calculateAge(birthYear) {
    return 2020-birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1985);
var ageMike = calculateAge(1980);


console.log(calculateAge(2000));


function calculateAge(birthYear) {
    return 2010-birthYear;
}

console.log(calculateAge(2000));
*/

/*
Both the console will give same result


it will not give error if to declare again any variable and functions
functions can be overwritten easily
Here even though function is call before overwritten itself 
But overwritten function is called anything before or after
Defination of previous function have become null and void ie no value

Only in case of input mismatch it tries to fit into function 
if it cannot it will give NaN
however if function is undefined then it will directly say that function is undefined 


Method overloading is unconsidered it will consider it as overwritting function itself
*/

/*
function yearUntillRetirement(year,firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement)
    console.log(retirement);
}

yearUntillRetirement(1990,'John');

// DRY - Dont repeat yourself

// Call by Reference

var age = 31;
function ageCalculator(age)
{
    age--;
    console.log(age);
}
ageCalculator(age);
console.log(age);
// Due to call by reference value of age is remain unchanged

*/



/********************
    Funtion Statement and Expressions

 

// Function Declaration

function whatDoYouDo(job,firstName){
    console.log(job+firstName);
    
}

// Function expression

var whatDoYouDo = function(job,firstName){
    switch(job){
        case 'teacher':
                return firstName+' teaches kid how to code'; 
        case 'driver':
                return firstName+' drives kid to school';
        default:
                return firstName+' does something';
    }
}
// here we donot break cases as it return and immediately exit the function

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('driver','Jane'));
console.log(whatDoYouDo('retire','Mark'));

// Expression produces immediate result and return something (Calling)
// Statement doesnot produce immediate result and doesnot return anything (Declaration)

*/

/********************
    Arrays


var names = ['John','Mark','James'];
// Like Matlab
var year = new Array(1990,1985,1980);
// Calling Constructor

console.log(names); // gives whole array 

console.log(names.length); // length of array

console.log(names[0]+' '+names[1]+' '+names[2]); // accessing elements

// Easily insert at last element
names[names.length] = 'Ben';
console.log(names);

// Accessing ArrayIndexOutOfBoundary
// Uptill then element will be empty
names[10] = 'Anil';
console.log(names);


// Since js is loosely datatype array can store multiple type elements
var student = [101,'John','Califonia',18,95.5,true,undefined,NaN,null];
console.log(student);


var John = ['Smith','Teacher',18];
// Methods applied to arrays
console.log(John);

John.push('Red'); // add element to end
console.log(John);
John.unshift('Mr.'); // add element to start
console.log(John);

John.pop(); // remove element from end
console.log(John);
John.shift(); // remove element from start
console.log(John);

console.log(John.indexOf('Teacher')); // gives index of passing element in guven array
console.log(John.indexOf('Mark')); // if passing element is absent it simply return -1

// John.push('Designer');
// John[John.indexOf('Teacher')] = 'Designer';

var isDesigner = John.indexOf('Designer') === -1 ? 'John is not designer' : 'John is designer';
console.log(isDesigner);

*/



/********************
        Challenge


function tipCalculator(bill)
{
    var percentage;
    switch (true)
    {
        case (bill<50):
                percentage = .20;
            break;
        case (bill>50 && bill<200):
                percentage = .15;
            break;
        case (bill>200):
                percentage = .10;
            break;
    }
    return percentage*bill;
}

var bill = [125,49,268];
var tips = [tipCalculator(bill[0]),tipCalculator(bill[1]),tipCalculator(bill[2])];

var finalAmount = [bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]];

console.log(bill);
console.log(tips);
console.log(finalAmount);

*/



/**********************
    Objects And its properties

// Similar to dictionary like structure

// Object Literals
var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane','Mark','Bob','Emily'], 
    job : 'Teacher',
    isMarried : false
};

console.log(john);
// Access each member as
console.log(john.firstName);
// similar to array
console.log(john['lastName']); 

var x = 'birthYear';
console.log(john[x]);

console.log(john.family.push('Wilie'));
console.log(john.family);

john.job = 'Designer';
john['isMarried'] = true;
console.log(john);



var james = new Object(); 
james.firstName = 'James';
james.lastName = 'Will';
james['birthYear'] = 1990;
console.log(james);

*/

/********************
    Objects and Methods


var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane','Mark','Bob','Emily'], 
    job : 'Teacher',
    isMarried : false,
    calcAge: function(presentYear){
        this.age =  presentYear-this.birthYear;
    }
};
var presentYear = 2000;
john.calcAge(presentYear);
console.log(john);

*/


/********************
    Challenge


var john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.bmi = this.mass/(this.height*this.height);
    }
}

var mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmi = this.mass/(this.height*this.height);
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john,mark);

switch(true)
{
    case(john.bmi>mark.bmi):
            console.log(john.fullName+' have higher bmi '+(john.bmi-mark.bmi));
        break;
    case(john.bmi<mark.bmi):
            console.log(mark.fullName+' have higher bmi '+(mark.bmi-john.bmi));
        break;
    default:
            console.log(john.fullName,mark.fullName+' have same BMI');
            
}

*/

/*****************************
    Loops and iteration


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) 
    console.log(john[i]);


// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}


for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/



/********************
    Challenge


 function tipCalculator(bill)
{
    var tips = new Array();
    var finalAmount = new Array();
    for (let i = 0; i < bills.length; i++) 
        {   
        var percentage;
        switch (true)
        {
            case (bills[i]<50):
                    percentage = .20;
                break;
            case (bills[i]>50 && bills[i]<200):
                    percentage = .15;
                break;
            case (bills[i]>200):
                    percentage = .10;
                break;
        }
        tips[i] = bills[i]*percentage;
        finalAmount[i] = bills[i]+tips[i];
    }    
}
var bill = [125,49,268,180,42];
tipCalculator(bill);



// Using Object

var john = {
    fullName : 'John Smith',
    bills: [125,49,268,180,42],
    calcTips: function()
    {
        this.tips = new Array();
        this.finalAmount = new Array(); 

        for (var i = 0; i < this.bills.length; i++) {
            var percentage; 
            var bill = this.bills[i];
            switch (true)
            {
                case (bill<50):
                        percentage = .20;
                    break;
                case (bill>50 && bill<200):
                        percentage = .15;
                    break;
                case (bill>200):
                        percentage = .10;
                    break;
            }
            this.tips[i] = bill*percentage;
            this.finalAmount[i] = bill+this.tips[i];
        }
    }

}
john.calcTips();
console.log(john);

var mark = {
    fullName : 'Mark Miller',
    bills: [77,475,110,45],
    calcTips: function()
    {
        this.tips = new Array();
        this.finalAmount = new Array(); 

        for (var i = 0; i < this.bills.length; i++) {
            var percentage; 
            var bill = this.bills[i];
            switch (true)
            {
                case (bill<100):
                        percentage = .20;
                    break;
                case (bill>100 && bill<300):
                        percentage = .1;
                    break;
                case (bill>300):
                        percentage = .25;
                    break;
            }
            this.tips[i] = bill*percentage;
            this.finalAmount[i] = bill+this.tips[i];
        }
    }

}

mark.calcTips();
console.log(mark);

function calcAverage(tips)
{
    var sum = 0 ;
    for (var i = 0; i < tips.length; i++) 
       sum += tips[i];
    return sum / tips.length;
}

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john.average,mark.average);

var out = (john.average>mark.average)? john.fullName+' family pays higher' : mark.fullName+' family pays higher';
console.log(out);

*/  
