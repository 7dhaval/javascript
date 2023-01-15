//what is event propagation?
// mode determines in which order the elements reveive the event.

//capture phase: window-document-html-body-div-button
//bubble phase: button-div-body-html-document-window
//target phase: button
 
//capture phase >going from the window to the event target phase
// target phase: it is the target phase
//bubble phase : form the event target parent back to the window

// https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/#:~:text=Event%20propagation%20is%20a%20way,a%20web%20browser%20are%20nested.
