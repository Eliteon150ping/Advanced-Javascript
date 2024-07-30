//Store a colour: "Blue" inside browser's local storage object.

localStorage.setItem("color", "Blue");

//Log the local storage object to the console.log

console.log(localStorage);

//The invocation above will return:
//{ color: "Blue" }

//           <----- The above is for .setItem() BTW ------>

////////////////////////////////////////////////////////////////////////////////////////////////////

// Store carColor: "White" inside the browser's local storage object:

localStorage.setItem("carColor", "White");

// Store pcColor: "Black" inside the local storage object:

localStorage.setItem("pcColor", "Black");

// Store laptopColor: "Sliver" inside the local storage object:

localStorage.setItem("laptopColor", "Sliver");

// Get the name of the item at index 1:

console.log(localStorage.key(1));

//           <----- The above is for .key() BTW ------>

//////////////////////////////////////////////////////////////////////////////////////////////////////


// Store color: "Red" inside the browser's local storage object:
localStorage.setItem("color", "Red");

// Get color's value from the local storage:
console.log(localStorage.getItem("color"));

// The invocation above will return:
"Red"


//           <----- The above is for .getItem() BTW ------>

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Verify the number of items in the local storage:

console.log(localStorage.length);

// The invocation above may return:

'5'

//           <----- The above is for .length BTW ------>

/////////////////////////////////////////////////////////////////////////////////////////////////////


// Remove the Sies item from the local storage:

localStorage.setItem("mouse", "Big");
localStorage.removeItem("mouse");

// Confirm whether the Sies item still exists in the local storage:

console.log(localStorage.getItem("Sies"));

// The invocation above will return:

'null'

//           <----- The above is for .remove() BTW ------>

////////////////////////////////////////////////////////////////////////////////////////////////////


// Clear all items from the local storage:

localStorage.clear();

// Confirm whether the local storage still contains any item:

console.log(localStorage);

// The invocation above will return:
{length: 0}

//           <----- The above is for .clear() BTW ------>

////////////////////////////////////////////////////////////////////////////////////////



