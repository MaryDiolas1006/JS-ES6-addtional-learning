    // REDUCE HELPER


    //sum all the numbers in the array
    var numbers = [10, 20, 30];
     var sum = 0;

     //for loop

     for (var i = 0; i < numbers.length; i++){
         sum += numbers[i];
     }

     console.log(sum)

     // REDUCE

     const result = numbers.reduce(function(sum, number) {
         // totally different from the sum above
            return sum + number;
     }, 10);

    // sum123 is not defined
    // console.log('sum123 = ', sum123)

    console.log(result)


//      /* more complicate example. take every element or collect every
//         values. */

     
     var primaryyColors = [
         { color: 'red'},
         { color: 'yellow'},
         { color: 'blue'},
     ];
     
     
    //  primaryyColors.reduce(function(previous, primaryColor){
    // /*previous is an array*/ previous.push(primaryColor.color);
    //      return previous;
    //  }, []);

    const colorResult = primaryyColors.reduce(function(previous, primaryColor){
                return [...previous, primaryColor.color]
            //or    // previous.push(primaryColor.color)  
                // return previous
         }, []);

     console.log('colorResult = ', colorResult)

    
    
    // map helper
    function pluck(array, property) {
        var colors = array.map(function(element){
            return element[property];
        });
        return colors;
    }

    const colorResult2 = pluck(primaryyColors, 'color')
   console.log('colorResult2 = ', colorResult2)

   // Best solution
   const colorResult3 = primaryyColors.map(element => element.color)
   console.log('colorResult3 = ', colorResult3)


//    // Job Interview with Reduce

   
   function balancedParens(a) {
     return !a.split("").reduce(function(previous, char){
         if( previous < 0) {return previous;}
        if (char === "(") { return ++previous;}
        if ( char === ")") { return --previous;}
         return previous;
     }, 0);
   }
const result2 =  balancedParens("((((");

 console.log(result2)


      // EXERCISES

      /* Use the reduce helper to find the sum of all the distances
      traveled. Assign the result to the variable totalDistance */
      

      var trips = [
          { distance: 34},
          {distance: 12},
          { distance : 1}
      ];

      var totalDistance = trips.reduce(function(previous, trip){
          // push only for array
        //    previous.push(trip.distance);
           return previous + trip.distance;
    }, 0);


      console.log('totalDistance = ', totalDistance);

      /* use reduce helper to create an object that tallies the number
      of sitting and standing desks. the object returned should have
      the form '{sitting:3, standing:2}. */

      var desks = [
          { type: 'sitting'},
          { type: 'standing'},
          { type: 'sitting'},
          { type: 'sitting'},
          { type: 'standing'}
      ];

      var deskTypes = desks.reduce(function(accumulate, desk){
          if (desk.type === 'sitting'){
              accumulate.sitting++;
          } else {
              accumulate.standing++;
          }
          return accumulate
         }, {sitting:0, standing:0});

      console.log(deskTypes)


      /* Write function called 'unique' that will remove all the 
duplicate values from an array. use the reduce and find helper */

//something wrong
var numbers = [ 1,1,2,3,4,4,4,4,4,4,4,5];

// Set only accept unique value. Create a Set to delete duplicated values
// const temp2132131231232131231231231 = new Set(numbers)
// console.log('temp = ', temp2132131231232131231231231)
// Transfer type Set to type Array 
const uniq = Array.from(new Set(numbers)) 
console.log('uniq = ', uniq)

const a = new Array(1,3,4,1,1,1,)
console.log('a = ', a)

const b = new Object({a: 123})
console.log('b = ', b)

// for object better use object literal
const c = {a: 123}


function unique(array) {
    var uniqueArr = array.reduce(function(accumulate, number){
        var numberExist = accumulate.find(function(acc){
            return acc === number;
        });
        if(!numberExist){
            accumulate.push(number);
        }
        return accumulate; 
    }, []);
    return uniqueArr;
}

console.log('unique =', unique);
