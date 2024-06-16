//ForEach :-
// the for each also works to iterate over every element of array but we must provide it a callback function which will be executed for every element of array.

/*
Syntax:-
    array.forEach(callback Function);
*/

//Example:-
let nums = [1, 2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num);
});

//we also have access to index and array itself in callback function.

//we can also define function alone and then implement into the syntax
//ex

function name(item){
    console.log(item);
}

nums.forEach(name);
