// import "./styles.css";

/* GLOBAL VARIABLES */

// const listItem = document.querySelectorAll(".list-item");
// const box = document.querySelectorAll(".box");
// //input from add item input
// const input = document.querySelector("input").value;


// /* ADD ITEM BUTTON CLICK EVENT */

let addBtn = document.querySelector("[type=image]");
let input = document.querySelector(".add-item");

addBtn.addEventListener("click", function(e) {
	e.preventDefault();
	createItem(input.value);
	console.log(input.value);
});

// List Item Template

//Function that creates item to be added
function createItem(item) {
  //create div + parent of div + class list-item + input.value
  // document.createElement("div");
  document.querySelector(".list-item").innerHTML += input.value;
}

// //grabs add item button
// const addItemBtn = document.getElementById("add-item-btn");

// //sub-function to write new list item into HTML
// function newListItem(input) {
//   listItem.innerHTML = input;
//   //appendChild(listItem)
// }

// //event to add new item with click 
// addItemBtn.addEventListener("click", function(
//   newListItem(input);
// ))




/* DELETE BUTTON CLICK EVENT */
