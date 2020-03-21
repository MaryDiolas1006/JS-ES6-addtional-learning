/* the for of loop, is used for iterating through arrays of data.*/

/*Generators are a special class of functions that simplify the task of writing iterators
and a function that produces a sequence of results instead of a single value. */

// example

const colors = [ 'red', 'green', 'blue'];

for (let color of colors){
    console.log(color);
}

// another example

const numbers = [1, 2, 3, 4];
let total = 0;

for ( let number of numbers){
    total += number;
    console.log(total);
}

/* A Generator is a function that can be enter and exit multiple times.
normally when we call a function, the function will run, 
and returns some value. By adding a star(*) you create generator immidiately.*/

function* numbers(){
  yield; //keyword that's been added with ES6.
}

const gen = numbers();
gen.next();
gen.next();

//another example by doing shopping

function* shopping(){
    //stuff on the sidewalk

    //walking down the sidewalk

    //go into the store with cash
    const stuffFromStore = yield 'cash';
     // another stop to laundry place
    const stuffFromlaundry = yield 'laundry'

    //walking back home
    return [stuffFromStore, cleanClothes];
}
// stuff in the store
const gen = shopping();
gen.next(); //leaving our house
//walk into the store
//purchase our stuff
gen.next('groceries'); //leaving the store with groceries
gen.next('cleanclothes');


//Another example of Generators
function* colors(){
    yield 'red';
    yield 'blue';
    yield 'green';

}

const gen = colors();
gen.next();
gen.next();
gen.next();
gen.next();

//or for of loop

const myColors = [];
for (let color of colors()){
   myColors.push(color);
}

myColors;

//create an objects that represents an engineering teams


const engineeringteam = {
    sizez: 3,
    department: 'Engineering',
    lead: 'MarySheng',
    manager:'Tingsheng',
    Engineer: 'Jhe',
    
};


function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}


for (let name of TeamIterator(engineeringTeam)){
    names.push(name);
}
names;

// adding testing team to engineering team/ with delegation of Generators

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringteam = {
    testingTeam,
    sizez: 3,
    department: 'Engineering',
    lead: 'MarySheng',
    manager:'Tingsheng',
    Engineer: 'Jhe',
    
};


function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team){
    yield team.lead;
    yield team.tester;
}

for (let name of TeamIterator(engineeringTeam)){
    names.push(name);
}
names;


// SYMBOL.ITERATOR WITH GENERATORS
 /* Symbol.iterator is a tool that teaches object how to respond
     to the for of loop. */

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function*() {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringteam = {
    testingTeam,
    sizez: 3,
    department: 'Engineering',
    lead: 'MarySheng',
    manager:'Tingsheng',
    Engineer: 'Jhe',
    
};


function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;
}

for (let name of TeamIterator(engineeringTeam)){
    names.push(name);
}
names;


// COMPLEXITIES OF SYMBOL.ITERATOR
// refactoring the function of engineering team

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function*() {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringteam = {
    testingTeam,
    sizez: 3,
    department: 'Engineering',
    lead: 'MarySheng',
    manager:'Tingsheng',
    Engineer: 'Jhe',
    [Symbol.iterator]: function*(){
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
    
};


for (let name of engineeringTeam){
    names.push(name);
}
names;


//GENERATORS WITH RECURSION

/* example iterates through all list of comments find the author
   of each one.*/

  /* create a tree data struture. Use an ES6 class to serve
      as a blue print for each individual node. */

      class Comment {
          constructur(content, children){
          this.content = content;
          this.children = children;
          }
      }

      const children = [
       new Comment('Good comment' []),
       new Comment('Bad comment' []),
       new Comment('heck' [])
      ];

      const tree = new Comment('Great post', children);
      tree;

      
      // HOW COMBINE THE SYMBOL.ITERATOR ALONG WITH SOME LEVEL OF ITERATION

       
      class Comment {
        constructur(content, children){
        this.content = content;
        this.children = children;
        }

        *[Symbol.iterator](){
            yield this.content;
            for (let child of this.children){
                yield*child;
            }
        }
    }

    const children = [
     new Comment('Good comment' []),
     new Comment('Bad comment' []),
     new Comment('heck' [])
    ];

    const tree = new Comment('Great post', children);
    
    const values = [];

    for(let value of tree){
        values.push(value);
    }

    values;





