/*Classes in JavaScript are a special syntax for its prototypical 
inheritance model that is a comparable inheritance
 in class-based object oriented languages. */

 // Prototypal inheritance
 // example

 function Car(options) {
     this.title = options.title;
 }

 car.prototype.drive = function(){
     return 'vroom';
 }

 conast car = new car ({title: 'Focus'});
   car.drive();
 car;

 // refactoring to classes

 class Car {
     constructor({title}){
           this.title = title;
     }
     drive(){
         return 'vroom';
     }
 }

 const car = new Car({ title: 'Toyota'});
 car;
 car.drive();


 // continuetion

 class Car {
    constructor({title}){
          this.title = title;
    }
    drive(){
        return 'vroom';
    }
}

class Toyota extends Car {  // extends car, want toyota to have access to all the methods and set up inside of car.
     constructor(options)   {
         super(options); // just to call the parent method on the parent class. Car.constructor.
      this.color = options.color;
     }
    honk(){
        return 'beep';
    }
} 

const toyota = new Toyota({color:'red', title: 'Daily Driver'});
toyota.honk();
toyota;


//another example with react
    React.createClass({
    doSomething(){

    },

    doSomethingElse(){

    }
});

class Mycomponent extends Component {
    doSomthing(){

    }

    doSomethingElse(){

    }
}


//EXERCISES
/* Create a Class called Monster. In the constructor, you'll need to do some basic
setup for Monster whenever they are created.
initialize the Monster's health to 100. constructions will be called
an 'options object that has a 'name' property. */

class Monster {
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }
}

const monster = new Monster({name: 'Mon'});

/* now that you have a monster created, create a subclass of the Monster
calle Snake. The Snake should a 'bite' method.
The instance of Snake that is passed in shoukd have their health deducted by 10.*/


class Monster {
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }

    class Snake extends Monster {
        bite(anotherSnake){
            anotherSnake.health = anotherSnake -10;
        }
    }

    const snake = new Snake;
    snake.bite(new snake());