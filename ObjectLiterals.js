/* Ehanced Oject Literals in ES6, make it easy to quickly 
create objects with propertis inside the curly braces. */


// create a bookshop outsource
//ES5
function createBookShop(inventory){
    return {
        inventory: inventory,
        inventoryValue: function(){
          return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title){
         return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10},
    { title: 'Eloquent javaScript', price: 15}
];

const bookshop = createBookShop(inventory);

bookshop.inventoryValue();
bookShop.priceForTitle('Harry Potter');


//ES6
function createBookShop(inventory){
    return {
        inventory, //if the key and value is the word, in ES6 can condenced it down and write only one word. 
       // function keywords, in ES6 can omit the function keywords and the colunn.
        inventoryValue(){
          return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title){
         return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10},
    { title: 'Eloquent javaScript', price: 15}
];

const bookshop = createBookShop(inventory);

bookshop.inventoryValue();
bookShop.priceForTitle('Harry Potter');


//another example

function saveFile(url, date){
    $.ajax({
        url, data, method: 'POST'
    });
}

const url = "http://fileupload.com";
const data = {color: 'red'};

saveFile(url, data);


// EXERCISES

const red = '#ff0000';
const blue = '#0000ff';

const colors = { red: red, blue:blue};

//refactoring

const colors = { red, blue};


// refactor the following to use enhance object literal syntax.

const fields = { 'firstname', 'lastname', 'phonenuber'};

const props = { fields: fields};

//refactoring
const props = {fields};


// refactor to use enhanced literal notation
const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9/16;
    return {
        with:with,
        height: height
    };

}

 // refactoring
 const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9/16;
    return {
        with,
        height,
    };

}






