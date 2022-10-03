// creates a variable that retrieves the change / confirm button from html
const changeButton = document.getElementById("changeButton");
// creates a variable that retrieves the delete button and is intended to delete the elements you no longer want to include
let remove = document.getElementsByClassName("delete");
// creates a variable that retrieves the edit button from html and is intended to edit the elements already defined
let elements = document.getElementsByClassName("edit");
// creates a variable to be set to the parent element you want to edit
let itemToBeChanged;
// creates a variable that retrieves the add button
const addButton = document.getElementById("add");
// creates a variable that retrieves the cancel button
const cancelButton = document.getElementById("cancel");
// hides the change / confirm button in html
changeButton.style.display = "none";

// defines a function called addItem
// this function has the task of adding items to the list
function addItem() {
    // creates a variable that creates a list element
    const li = document.createElement("li");
    // creates a variable that is set equal to the value in the input field
    const input = document.getElementById("input").value;
    // creates a text node that is set equal to the variable input
    const textNode = document.createTextNode(input);
    // adds the text node to the list item
    li.appendChild(textNode);

    // checks if the input field is empty
    if (input === "") {
        // if empty it asks to fill in the field
        return alert("Please enter a color");
    } else {
        // if the field is not empty we put the list element in ul from html
        document.getElementById("ul").appendChild(li);
    };
    // sets the value in the input to an empty string
    document.getElementById("input").value = "";

    // creates a button element and calls it delete 
    const deleteButton = document.createElement("button");
    // creates a button element and calls it edit
    const editButton = document.createElement("button");

    // gives the delete button a class named delete
    deleteButton.className = "delete";
    // gives the edit button a class named edit
    editButton.className = "edit";

    // creates a text node for the delete button with the value x
    const deleteNode = document.createTextNode("Del");
    // creates a text node for the edit button with the value Edit
    const editNode = document.createTextNode("Edit");

    // adds the delete node to the delete button
    deleteButton.appendChild(deleteNode);
    // adds the edit node to the edit button
    editButton.appendChild(editNode);

    // adds the delete button to the list item
    li.appendChild(deleteButton);
    // adds the edit button to the list item
    li.appendChild(editButton);

    // adds event lists to the edit button which calls the function myfunction
    editButton.addEventListener('click', myFunction);
    // adds event lists to the delete button which calls the removeitem function
    deleteButton.addEventListener('click', removeItem);
};

// defines a function that asks the user if they want to delete an item
// if yes, the item will be deleted
let removeItem = function() {
    // ask the user if they are sure if they want to delete the item
    const result = window.confirm("Are you sure you want to delete this item?");
    // if the user presses yes
    if (result) {
        // retrieves the list item you want to delete
        const div = this.parentElement;
        // and removes the list item
        div.remove();
        // caller function removelisteners
        removeListeners();
    };

};

// defines the removelisteners function that adds onclick events to delete buttons
let removeListeners = function() {
    // creates a loop that goes through all the delete buttons
    for (let i = 0; i < remove.length; i++) {
        // adds an onclick event to the delete buttons that calls the removeitem function
        remove[i].onclick = removeItem
    };
};

// initial call
removeListeners();

// defines the edititem function that makes it possible to change an item that already exists in the list
let editItem = function() {

    // creates a variable and sets it equal to the value in the input field
    const value = document.getElementById("input").value;
    // creates a list item
    const li = document.createElement("li");
    // creates a new text node and sets it equal to the variable input
    const node = document.createTextNode(value);
    // sets the text node equal to the list element
    li.appendChild(node);

    // creates a button element and calls it delete
    const deleteButton = document.createElement("button");
    // creates a button element and calls it edit
    const editButton = document.createElement("button");

    // gives the delete button a class named delete
    deleteButton.className = "delete";
    // gives the edit button a class named edit
    editButton.className = "edit";

    // creates a text node for the delete button with the value x
    const deleteNode = document.createTextNode("Del");
    // creates a text node for the edit button with the value Edit
    const editNode = document.createTextNode("Edit");

    // adds the delete node to the delete button
    deleteButton.appendChild(deleteNode);
    // adds the edit node to the edit button
    editButton.appendChild(editNode);

    // adds the delete button to the list item
    li.appendChild(deleteButton);
    // adds the edit button to the list item
    li.appendChild(editButton);

    // checks if the value is empty
    if (value === "") {
        // if empty it asks to fill in the field
        return alert("please input a color");
    } else {
        // if not empty, replaces the list item that already exists with a new value
        itemToBeChanged.replaceWith(li);
        // hides the change button
        changeButton.style.display = "none";
        // displays the add button
        addButton.style.display = "inline-block";
        // resets the input field
        document.getElementById("input").value = "";
    }
    // caller function editlisteners
    editListeners();
    // caller function removelisteners
    removeListeners();
};

// defines the function myfunction which retrieves the list element you want to edit and sets an event listener on the change / confirm button
let myFunction = function() {
    // displays the change / confirm button
    changeButton.style.display = "inline-block";
    // hides the add button
    addButton.style.display = "none";
    // sets the itemstobechanged variable to the current list item
    itemToBeChanged = this.parentElement;
    // sets an event listener on the change / confirm button that calls the edititem function
    changeButton.addEventListener('click', editItem);
};

// defines a function that resets the input field and buttons
const cancelEvent = function() {
    // sets the value in the input field to an empty string
    document.getElementById("input").value = "";
    // hides the change / confirm button
    changeButton.style.display = "none";
    // displays the add button
    addButton.style.display = "inline-block";
};

// defines a function that adds onclick events to the edit buttons
let editListeners = function() {
    // loops through all the edit buttons
    for (let i = 0; i < elements.length; i++) {
        // adds onclick events to all edit buttons that call function myfunction
        elements[i].onclick = myFunction;
    };
};

//initial call
editListeners();