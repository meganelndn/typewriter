"use strict";

window.addEventListener("DOMContentLoaded", init);

//global variables
let element = document.querySelector(".typewritten");
console.log(element)

let sentence = document.querySelector(".typewritten").textContent;
console.log(sentence)

let counter = 0;
console.log(counter)

let getLetter = sentence[0];
console.log(getLetter)

let oneEach;

function init() {
    //grab HTML text tag "This sentence is written one character at a time"
    element.textContent = "";
    show();
}

function show() {
    //show each letter, one after the other
    oneEach = sentence.substring(0, counter + 1);
    console.log(oneEach)

    //grab HTML tag and make it visible again
    element.textContent = oneEach;

    //++ adds 1 to existing value 
    counter++;

    //if sence longer than counter, loops and runs show() function again
    if (sentence.length > counter) {
        //set timer since too fast
        setTimeout(show, 200)
    }
}