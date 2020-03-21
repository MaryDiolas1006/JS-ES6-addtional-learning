//exampl 
/*using `template strings`, do not use single
 or double quotes, instead backtext (``) */

function getMessage(){
    return `The year is ${new Date().getFullYear()}`;

    //or
 const year = new Date().getFullYear();
 return `This year is ${year}`;
}

getMessage();



// EXERCISES

/* Refactor the function to use template strings */
function doubledMessage(number){
    return `Your number doubled is ${2 * number}`
}

function fullName(fistname, lastname){
    return `${firstname}` `${lastname}`;
}