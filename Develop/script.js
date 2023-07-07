// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//THIS FUNCTION WILL LOAD AS SOON AS THE PAGE LOADS
$(function () {
  // TODO: Add a listener for click events on the save button.
  //CREAT AN EVENT LISTNER THAT WILL SAVE THE TEXT TO LOCAL STORAGE

  //TARGET THE VALUE BY ID 
  //when the program starts we want to add a css class based on what time it is right now
  //variables at the top,then functions , then event listiners at the bottom
  // This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


//psudo code
//step 1 : create all your variables 
//quary selector for the time at the top

//step 2
//create a section for your functions 
//create a function to handle the save button
//create a function that populates the content and differnet colors of different elements on the page
//create a function that consistantly updates the page -method-setInterveal

//step 3
//add event listners and a function to start the program/load the information on the calender
//on.click, handle save function
//no need to call the start function 
//add event listner and a function to start the program/load the information on the calender
