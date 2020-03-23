/* fat Arrow functions are more concise syntax for
writing function expressions. */

// example

const add = function(a, b) {
    return a + b ;
}

const sum = add(1, 2);
console.log(sum)

//Refactor
// single script expressions, return called implicit return 

const add2 = (a, b) => a + b;

const newSum = add2( 1, 2);
 
console.log(newSum)

  
/* can omit the parenthesis and curly braces if have single argument only.
example; */

const double = number => 2 * number;

const result = double(8);
console.log(result)

/* can't omit the parenthesis if more arguments. 
example; */

const double2 = (number1, number2) => {
    return 2 * number1 + 2 * number2;
}

const result2 = double2(8, 4);
console.log(result2)


// double each number in the array using map helper

const numbers = [1, 2, 3];

const answer2 = numbers.map(function(number){
    return 2 * number;
});

console.log(answer2)


//refactor
const number2 = [1, 2, 3];

const answer3 = numbers.map(number2 => 2 * number2);
console.log(answer3)


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
console.log(team)


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

const answer4 = 'MarySheng';
console.log(answer4)



// a()
// function a() {
//     console.log('aaa')
// }

// b()
// const b = () => console.log('bbb')

// c()
// const c = function() {
//     console.log('ccc')
// }

const madeByTingSheng = (product = 'meow') => () => `${product} is made by TingSheng`

const answer = madeByTingSheng('milk shake')()
console.log('answer = ', answer)
