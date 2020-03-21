//search the comaputers with 16gb. apple and acer should run

var computers =[
    {name: 'apple', ram: 24},
    {name: 'compaq', ram: 4},
    {name:'acer', ram: 32}
];

//filter helper can use but also can do in defferent way

var allcomputerscanrunprogram = true;  // default all program run
var onlysomecomputerscanrunprogram = false;

   // for loop

   for ( var i = 0; i < computers.length; i++) {
       var computer = computers[i];
       if(computer.ram < 16) {
           allcomputerscanrunprogram = false;
       } else {
           onlysomecomputerscanrunprogram = true;
       }
   }

   console.log(allcomputerscanrunprogram);
   console.log(onlysomecomputerscanrunprogram);

     // SOME HELPER

     var computer = computers.some(function(computer){
         return computer.ram > 16;
     });

     console.log('computer=', computer);


     /* find the names of a length greater than 4. 
  Atleast five characters */
   var names = [
    "MarySheng",
    "TingSheng",
    "Zest"
];

//   //SOME HELPER

   var name = names.some(function(name){
       return name.length > 5;
   });

   console.log('name=', name);


   /* array of network object request. Assign the boolean
   'true' to the variable 'inProgress' if any
   network request has a status of pending. */

   var requests = [
      { url: '/photos', status: 'complete'},
      { url: '/albums', status: 'pending'},
      { url: '/users', status: 'failed'} 
   ];

   var inProgress;

   var inProgress = requests.some(function(request){
       return request.status === 'pending';
   });

   console.log(inProgress)

  