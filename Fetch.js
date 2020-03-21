/*FETCH - can send network requests to the server and load
 new information whenever it's needed. */

 // request with fetch

 url = "https://jsonplaceholder.typicode.com/posts/";

 fetch(url)
 .then(response => response.json())
 .then(data => console.log(data));

 //another example

 url = "https://jsonplaceholder.typicode123.com/posts123445/";

 fetch(url)
 .then(response => response.json(response))
 .catch(error => console.log('BAD', error));



 // usually in the project might use axios
 // https://github.com/axios/axios


