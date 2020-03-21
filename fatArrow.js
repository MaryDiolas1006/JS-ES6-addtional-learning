/* fat Arrow functions are more concise syntax for
writing function expressions. */

// example

const add = function(a, b) {
    return a + b ;
}

add(1, 2);

//Refactor
// single script expressions, return called implicit return 

const add = (a, b) => a + b;

const newSum = add( 1, 2);
 
console.log(newSum)

  
/* can omit the parenthesis and curly braces if have single argument only.
example; */

const double = number => 2 * number;

double(8);

/* can't omit the parenthesis if more arguments. 
example; */

const double = (number1, number2) => {
    return 2 * number1 + 2 * number2;
}

double(8, 4);


// double each number in the array using map helper

const numbers = [1, 2, 3];

numbers.map(function(number){
    return 2 * number;
});

//refactor
const number = [1, 2, 3];

numbers.map(number => 2 * number);


// object that represent a team of people
   // Federal functions make use of what is called lexical 'this'

const  team = {
    members : [ 'Mary, TingSheng'],
    teamName: 'Beba Squad',
    teamSummary: function (){
        //this === team
        return this.members.map((member) => {
               return `$(member) is on team $(this.teamName)`;
        });
    }
};

team.teamSummary();


//EXERCISES

//refactor the code using fat arrow function.
const fibonacci = n => {
    if(n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


/* the code has an object that represents a users profile.
Add another key to this object called getName. 
getName should be a function that returns the profile name,
using this.name. */

const profile = {
    name: 'MarySheng',

    getName: function(){
        return this.name;
    }
};

