//search the comaputers with 16gb. apple and acer should run

var computers =[
    {name: 'apple', ram: 24},
    {name: 'compaq', ram: 4},
    {name:'acer', ram: 32}
];

//filter helper can use but also can do in defferent way



var allcomputersCanRunProgram = true;  //default all program can run
var onlySomeComputersCanRunProgram= false;

for(var i = 0; i <computers.length; i++) {
   var computer = computers[i];
    if (computer.ram < 16) {
        allcomputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log(allcomputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);


         // EVERY HELPER
     
      var computer = computers.every(function(computer){
        return computer.ram > 16 ;
    });

   console.log('computer =', computer);

  /* find the names of a length greater than 5. 
  Atleast five characters */
   var names = [
       "MarySheng",
       "TingSheng",
       "Zest"
   ];

   // for loop
    
   var answer =[];

    for( var i = 0; i < names.length; i++){
        //    if(name.length > 5){
        if(names[i].length > 5) {
            answer.push(names[i]) ;
        }
    }
    console.log('answer =', answer);

      // EVERY HELPER
       
       var name = names.every(function(name){
           return name.length > 5;
       });
   
       console.log('name=', name);


  // building a login or sign up form application
  // validate username
  function Field(value){
      this.value = value;
  }

   Field.prototype.validate = function(){
       return this.value.length > 0;
   }

  var username = new Field ("MarySheng");
  var password = new Field ("my_password");
  var birthdate = new Field ("10/06/1992")

   var fields = [username, password, birthdate];

  var formIsValid = fields.every(function(field){
       return field.validate;
   });

   if(formIsValid) {
       //allow user to submit
   } else {
       //show an error message
   }

   console.log('fields =', fields);


   /* return true if every user has submitted a request form. 
   Assign variable hasSubmitted. */

   var users = [
       { id: 21, hasSubmitted: true},
       { id: 62, hasSubmitted: false},
       { id:4, hasSubmitted: true}
   ];
   var hasSubmitted;

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted;
});

 console.log(hasSubmitted);



