//using ES6 no longer using var instead use const or let

/* const - is a key word tha is use to declare variables
where we expect the value that we are signing to it, to never change.*/

/* let - is use to declare variables when we expect the value 
of a variable to change.*/


// example; building a program to model an employee who is working in a company.

var name = 'TingSheng';
var title = 'Team Lead Software Engineer';
var hourlyWage = 80;

//ES6



const name2 = 'TingSheng';
let title2 = 'Team Lead Software Engineer';
let hourlyWage2 = 80;


// EXERCISES 

/* Imagine that you are building an application to manage a user's
Facebook profile. A profile might have a 'name', 'age', 'DOB'.*/

const name3 = 'MarySheng';
let age = 27;
const dateofbirth = new Date("1992/10/06");


/*  The following codes uses 'var' instead of 'const' and 'let'
Refactor the function to use the new keywords.*/

  var statuses = [ 
    {code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
  ];

    var message = '';
    var currentCode = 'OK';

    for(var i = 0; i <statuses.length; i++){
        if(statuses[i].code === currentCode){
            message = statuses[i].response;
        }
    }

      // Refactoring
    const statuses2 = [ 
        {code: 'OK', response: 'Request successful' },
        { code: 'FAILED', response: 'There was an error with your request' },
        { code: 'PENDING', response: 'Your reqeust is still pending' }
      ];
    
        let message2 = '';
        const currentCode2 = 'OK';
    
        for(let i = 0; i <statuses.length; i++){
            if(statuses[i].code === currentCode){
                message = statuses[i].response;
            }
        }


// because var `hoisting`
// https://www.w3schools.com/js/js_hoisting.asp
// a =  undefined
console.log('a = ', a)
var a = 123
console.log('a = ', a)

// // ReferenceError: b is not defined
// console.log('b = ', b)
// let b = 123

// interview question
// what is the differnce between let and var. What is hoisting