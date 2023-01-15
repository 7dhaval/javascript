//window: window is main container or we can say that global object and any operation related to entire browser windo.w object.
//all the members like objects methods and properties if they are the part of the obejct then we do not refer  the window object
//window has methods properties and object ex setTimeout() or setInterval() are the method where as Document is the object of the window and it also has a screen object with properties descibing the physical display


//document: DOM is the child of window object 
//where in DOM we need to refer the document if we want to use the document object methods and properties.
//Document is just the object of the global object that is window which deals th documents the HTML elements themselves. 

//>> DOM is the Document Object model which deals with the document 
//the html elements themselves eg documents and all traversal you
//would do in it events etc

//change the background colour to red
//document.body.style.background = "red";


//>>the BOM is the browser object model which deals with browser components
//aside from the document like history location navigator and screen 
// as well as some others that vary by browser or in simple meaning all the window operaitons which comes under BOM are performed  using BOM



//widnow global object explantion:
//window >> DOM (Document realated to html)
//window >> BOM (navigator, screen, location, frames, history, xmlhttprequest)
//window >> javascript (object,array, function)

// alert(location.href);
// if (confirm("want to visit me")){
//     location.href = 
//     "https://www.youtube.com";
// }



//>> navigate through the DOM
//1. document.documentElement
//2. doument.Head
//3. document.body
//4. document.body.childNodes (include toolbar, enter and whitespace)
//   list of the direct children only
//5. document.children (without text nodes , only regular elements)
//6. document.childNodes.length
