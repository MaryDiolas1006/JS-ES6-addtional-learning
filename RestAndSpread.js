// Rest and Spread, the purpose is write less code

//rest operator is used to gather together variables
// rest operator adding (...) to capture all the numbers
function addNumbers(...number){
    return addNumbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

addNumbers(1,2,3,4,5,6,7);


// spread is used to flatten or spread them out

/* imagine for a moment the we are building an application where
we need to display a palete of colors to our users.*/

const defaultColors = ['red', 'green'];
const userFavoriteColors = [ 'orange', 'yellow'];

//spread
[...defaultColors, ...userFavoriteColors];


//validate a shopping list/ mix rest and spread operator

function validateShoppingList(...items){
   if(items.indexOf('milk') < 0){
       return [ 'milk', ...items];
   }
   return items;
}

validateShoppingList('oranges', 'bread', 'eggs');

//math library. multiply two numbers together
const MathLibrary = {
    calculateProduct(...rest){
        console.log('please use the multiply method instead');
        return this.multiply(...rest)
    },
    multiply(a, b) {
        return a * b;
    }
};


// EXERCISES

// refactor the following function to use the rest operator
function product(a, b, c, d) {
 var numbers = [a, b, c, d];

 return numbers.reduce(function(acc, number){
     return acc * number
 }, 1);
}


// refactoring
function product(...rest) {
    var numbers = [...rest];
   
    return numbers.reduce(function(acc, number){
        return acc * number
    }, 1);
   }


   //refactor the following to use the spread operator

   function join(array1, array2){
       return array1.concat(array2);
   }


// refactoring
   function join(array1, array2){
       return [...array1, ...array2] ;
}

// refactor the following to use the only rest operator

function unshift(array, a, b, c, d, e){
    return [a, b, c, d, e].concat(array);
}

// refactoring
function unshift(array, ...char){
    return [...char, ...array];
}