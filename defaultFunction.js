//logic to make a request
// the request by Ajax is getRequest
function makeAjaxRequest (url, method = 'GET') {
   return method;
    }
}
/* with default function parameters we don't have no longer
to do and existing check on some argument. */

makeAjaxRequest('google.com', undefined);
makeAjaxRequest('google.com', 'POST');


// create a user object
 function User(id) {
    this.id = id;
 }

 // create a ramdom id
 function generateId(){
      return Math.ramdom() * 9999999;
 }

 // create a an adminUser
 function createAdminUser(user = new User(generateId())){
     user.admin = true;
     return user;
 }
  const user = new User(generateId());
 createAdminUser(user);


 // EXERCISES

  // refactor the following code to use default function arguments
     
 function sum(a, b) {
     if (a === undefined) {
         a = 0;
     }
     if (b === undefined){
         b = 0;
     }

     return a + b;
 }

  // refactoring
 function sum(a = 0,  b = 0) {

    return a + b;
}


// refactor the following code to use default function arguments

function addoffset(style){
    if(!style){
        style = {};
    }
    style.offset = '10px';
    return style;
}

// refactoring

function addOffset(style = {}){
    
    style.offset = '10px';
    return style;
}
