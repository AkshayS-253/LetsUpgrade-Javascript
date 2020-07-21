/*Question3*/

n = prompt("Enter random user id from 1-200");
fetch(`https://jsonplaceholder.typicode.com/todos/${n}`)
  .then(response => response.json())
  .then(json => console.log(json))