// Filter :-
//this methos also traverse throught every element of array and only return the element who passes the certain condition

//ex
let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter((element) => {
    return element > 2;
});

console.log(filteredArr); 
// Outputs: [3, 4, 5]