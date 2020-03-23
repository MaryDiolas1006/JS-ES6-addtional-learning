/* Destructuring is a JavaScript expression that makes it possible
to unpack values from arrays, or properties from objects, into distinct variables. */


// imagine that we are building an object that represents an expense

var expense ={
    type: 'Business',
    amount: '$45 USD'
};

const {type, amount} = expense;

console.log({type, amount})

//other example
//es5

var saveFiled ={
    extension:'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file){
    return `the file $(file.name).$(file.extension)is of size $(file.size)`;
}

 fileSummary(saveFiled);



//es6
var saveFiled ={
    extension:'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name, extension, size}){
    return `the file $(name).$(extension)is of size $(size)`;
}

 fileSummary(saveFiled);




//DESTRUCTURING ARRAY AND OBJECTS//

// create an array that represents an array of different tech companies.

/* with restructuring objects we pull off properties when we
do structure arrays we pull off individual elemets.*/

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [name, name2, name3] = companies;
//or
// const [ name, ...rest];
console.log(companies)


// MAKE AN ARRAY OF OBJECTS

const companies = [
    {name: 'Google', location: 'Mountain view'},
    { name: 'Facebook', location: 'Menlo Park'},
    { name: 'Uber', location: 'San Francisco'}
];

const [{location}] = companies;



//another example

const Google = {
    locations: ['Mountain View', 'New York', 'London']
};

const {locations} = Google;  // to pull off all locations
const {locations:[location]} = Google; // to pull out the first location


/* Write a function that is going to take a username and a password
   and save it to database. */

   function signup(username, password, email, dateOfbirth, city){
       // create a new user
   }

   
   signup('myname', 'mypassword', 'myemail@jerk.com', '1/17/1990', 'Taiwan');


    /*destructuring. with destructuring by putting curly braces, 
    you do not to worry about the order of a properties.*/

   function signup({username, password, email, dateOfbirth, city}){
    // create a new user
}


const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@jerk.com',
    dateOfbirth: 1/17/1990,
    city: 'Taiwan'

};

signup(user);


// WHY WE USE DESTRUCTURING OF ARRAYS.

const points = [
    [4, 5],
    [10, 1],
    [0 40]
];

points.map(([ x, y ]) => {
    return { x, y};
});



// EXERCISES

/* Reduce the amount of code used for referencing the title and
department properties. refactor this code to use destructuring.*/

const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer(profile){
    var title = profile.title;
    var department = profile.department;
    return title === 'Engineer' && department === 'Engineering';
}


// DESTRUCTURING

const profile = {
    title: 'Engineer',
    department: 'Engineering'
}

function isEngineer({title, department}) {
    return title === 'Engineer' && department === 'Engineering';
}


/* Convert the array of arrays into an array of objects, where each
  object has the keys 'subject', 'time' and 'teacher' and assign
  the result to 'classesAsObject. Use Array Destructuring and the 
  map helper. */


  const classes = [
      [ 'Chemistry', '9AM', 'Mr. Jerk'],
      [ 'Physics', '10:15AM', 'Mr. Jerk'],
      [ 'Math', '11:30', 'Mr. Jerk']
      
  ];

  const classesAsObject;

  // Destructuring

  classes.map(([subject, time, teacher]) =>{
      return { subject, time, teacher};
  });


  /* use array destructuring rest/spread operator. */

  const numbers = [1,2,3];
  var double =[];
  function double(numbers){
      const [number, ...rest] = numbers;
      if(number){
          double.push(number * 2);
          return double(rest)
      }else {
          return double;
      }
  }