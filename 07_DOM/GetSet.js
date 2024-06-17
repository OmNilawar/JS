//GetAttribute :-
//it is use to get the attribute of the specific element

//ex :-
// Assuming you have an HTML element like this:
// <div id="myDiv" class="example"></div>

let div = document.getElementById('myDiv');

// Get attribute
let className = div.getAttribute('class'); 
// returns "example"
console.log(className);

//SetAttribute :-
//it is use to overwrite on the existing attribute means in below example the class is changed
div.setAttribute('class', 'newClass');

// Now the class of the div is "newClass"
console.log(div.getAttribute('class')); 
// returns "newClass"