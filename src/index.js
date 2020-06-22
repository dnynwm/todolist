//GLOBAL STUFF
/* TO DO
- get the 'position' to reflex the index of the array 
like in the reading_list exercise
- 
*/



//TO DO ITEM CLASS

class toDoItem {
    constructor(title, checked, position) {
        this.title = title;
        this.checked = checked;
        this.position = position;
    }
    //checks item as true or false (done or not)
    check() {
        if (this.checked === true) {
            this.checked = false;
        } else {
            this.checked = true;
        }
    }
    //items title of item
    edit(value) {
        this.title = value;
    }
}



//TO DO LIST CLASS
class toDoList {
    constructor() {
        this.toDoArray = [];
    }
    delete(position) {
        //delete a specific item, but how to call it by name?
        this.toDoArray.splice(position, 1);
    }
    add(toDoItem) { 
        //doesn't need to be 'toDoItem' as long as it agrees with the .push(toDoItem) part
        this.toDoArray.push(toDoItem);
        //how to figure out the toDoItem position for the array
    }
}


// EVENTS

// ADD TO DO - id = addToDo
let addToDo = document.getElementById("addToDo");

// DELETE TO DO - id = deleteBtn
let deleteBtn = document.getElementById("deleteBtn");

console.log(addToDo);









// //TESTING
// const List1 = new toDoList();
// const item1 = new toDoItem('Item1', false, 0);
// const item2 = new toDoItem('Item2', false, 1);

// console.log(List1);
// List1.add(item1);
// List1.add(item2);


// item1.edit("blahblah");
// console.log(List1);


// List1.delete(item1.position, 1);
// console.log(List1);


//Checking that item methods work
    // console.log(item1.title);
    // List.add(item1);
    // item1.check();
    // item1.edit('boop');
    // console.log(item1);

//Checking that list methods work
    // List.add('beep');
    // List.add('covid');
    // console.log(List);
    // List.delete(0, 1, null); //using specific parameters for splice can do this, how can I do it in a simpler way? 
    // console.log(List);