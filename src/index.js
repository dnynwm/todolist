//GLOBAL STUFF
/* TO DO
- 

*/

//TO DO LIST CLASS
class toDoList {
    constructor() {
        this.toDoArray = [];
    }
    delete(toDoItem) {
        toDoItem.remove();
    }
    check(toDoItem) {
        const checkbox = document.querySelector("input[type=checkbox]");
        if(checkbox.checked === true) {
            toDoItem.style.textDecoration = "line-through";
        } else {
            toDoItem.style.textDecoration = "none";
        }
         //can do colors too
        //if this doesn't work, tell child to inherit styles from parent
        //in id/class, textDecoration: inherit in css
        //make uncheckmethod if needed, or make if/else statement in this method (textdecoration: none or whatever)
    }
    add(toDoItem) { //this is linked to the eventListener List1.add(newItem); newItem and toDoItem are bound together
        //doesn't need to be 'toDoItem' as long as it agrees with the .push(toDoItem) part
        this.toDoArray.push(toDoItem);
        const list = document.getElementById("row");
        //  var itemWrapper = document.createElement("div");                 // Create a <div> node
        const htmlString = `
            <div class="input-group mt-2 col-12">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input id="checkbox" type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                </div>
                <input style="text-decoration: inherit" type="text" value="${toDoItem.title}" class="form-control toDoItemText" aria-label="Text input with checkbox">
                <button class="deleteBtn btn btn-warning col-2" type="button" value="Delete">Delete</button>
            </div>`;
        
                            // <div class='item'>
                            //     <input type="checkbox">
                            //         ${toDoItem.title}
                            //     <button class="deleteBtn btn btn-outline-warning" type="button" value="Delete">Delete</button>
                            // </div>;

    //takes empty div from 21 and adds htmlString inside
    list.innerHTML += htmlString; //could also do 'list.innerHTML + htmlSpring'
    // itemWrapper.innerHTML = htmlString;
    // list.appendChild(itemWrapper);
    }
    // check(toDoItem) {
    //     const checkbox = document.querySelector(input[type=checkbox]);
    //     const list = document.getElementById("row");
    //     const title = document.querySelector("input[value]");
    //     if()
    //     //if the box is checked, strike out text with <del></del>
    //     //else (box isn't checked) no <del></del>
    // }
    static clearFields() {
        document.querySelector('#title').value = '';
    }
}


// INSTANTIATE LIST1
const List1 = new toDoList();

//EVENTS
    //ADD TO DO BUTTON
const addToDoBtn = document.getElementById("addToDoBtn");
addToDoBtn.addEventListener("click", function(e){
    e.preventDefault();
    const title = document.getElementById("title").value;
    // console.log(title);
    const newItem = new toDoItem(title, checked = false); //new instance 
    List1.add(newItem);
    toDoList.clearFields();

    //DELETE BTN
    const list = document.getElementById("row"); //need to access whole element not just deletebtn
    list.addEventListener("click", function(e){
           //makes sure that it works only on the Delete Button
        if (e.target.innerText !== "Delete") {
            return;
        }
    List1.delete(e.target.parentElement); //parent element of delete button
 
    })

    //CHECKBOX 
    const checkbox = document.getElementById("checkbox")
    // const checkbox = document.querySelector("input[type=checkbox]");
    // const toDoItemText = document.querySelector("input[class=form-control toDoItemText]");
    checkbox.addEventListener("click", function(e){
        List1.check(e.target.parentElement.parentElement.parentElement);
        //once you target element, set the style of that item
        // if(checkbox){
        //     // console.log(document.querySelector("input[class=form-control toDoItemText]"));
            
        // } 
        // List1.check(e.target.parentElement.parentElement.parentElement);
        
    })
 

})

//TO DO ITEM CLASS

class toDoItem {
    constructor(title, checked) {
        this.title = title;
        this.checked = checked;
        // this.position = position; not needed
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




//Another way to add to do
        // var itemWrapper = document.createElement("div");                 // Create a <div> node
        // var textnode = document.createTextNode(toDoItem.title);   // Create a text node
        // let checkBox = document.getElementById("")

        // var x = document.createElement("INPUT");
        // x.setAttribute("type", "checkbox");

        // itemWrapper.appendChild(textnode);                              // Append the text to <li>
        // itemWrapper.appendChild(x);
        // container.appendChild(itemWrapper);     // Append <li> to <ul> with id="myList"
        //how to figure out the toDoItem position for the array