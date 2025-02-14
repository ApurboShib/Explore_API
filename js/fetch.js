// // console.log('fetching..');

// const { json } = require("body-parser");
// const { response } = require("express");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) // . jeson is not similar but close to JESON.parse().
//       .then(json => console.log(json))

 const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//       .then (response => response.json())
//       .then(json => console.log(json) )

function loadData () {
      fetch(url)
      .then (response => response.json())
      .then(json => console.log(json) )

}
function loadData2 () {
      fetch(url)
      .then (response => response.json())
      .then(json => console.log(json) )

}
function loadData3 () {
      fetch(url)
      .then (response => response.json())
      .then(json => console.log(json) )

}