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

     numbers.reduce(function(sum, number) {
            return sum + number;
     }, 0);
  

     console.log(sum)


//      /* more complicate example. take every element or collect every
//         values. */

     
     var primaryyColors = [
         { color: ' red'},
         { color: 'yellow'},
         { color: 'blue'},
     ];
     
     
     primaryyColors.reduce(function(previous, primaryColor){
    /*previous is an array*/ previous.push(primaryColor.color);
         return previous;
     }, []);

     console.log() ???

    
    
     // map helper
    function pluck(array, property) {
        var colors = array.map(function(element){
            return element[property];
        });
        return colors;
    }

   console.log() ???


//    // Job Interview with Reduce

   
   function balancedParens(string) {
     return !string.split("").reduce(function(previous, char){
         if( previous < 0) {return previous;}
        if (char === "(") { return ++previous;}
        if ( char === ")") { return --previous;}
         return previous;
     }, 0);
   }

 balancedParens("((((");

 console.log()???


      // EXERCISES

      /* Use the reduce helper to find the sum of all the distances
      traveled. Assign the result to the variable totalDistance */
      
      can't solve 
      var trips = [
          { distance: 34},
          {distance: 12},
          { distance : 1}
      ];

      var totalDistance = trips.reduce(function(previous, trip){
           previous.push(trip.distance);
           return previous;
      }, 0);

      console.log(totalDistance);

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
var numbers = [ 1,1,2,3,4,4];

function unique(array) {
    var uniqueArr = array.reduce(function(accumulate, numer){
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

console.log(numbers)
